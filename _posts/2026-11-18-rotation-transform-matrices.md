---
title: "회전행렬과 변환행렬 차이: 로봇 좌표 계산 입문"
section: physical-ai
sub: nvidia
ref: rotation-transform-matrices
date: 2026-11-18 14:00:00 +0900
description: 같은 점의 좌표가 기준에 따라 달라지는 이유부터 회전행렬의 열벡터, 자유도, 동차변환과 역변환까지 작은 숫자로 계산해요.
spacious: true
---

<style>
.content table { width:100%; border-collapse:collapse; margin:14px 0 24px; font-size:17px; line-height:1.5; }
.content th,.content td { border-bottom:1px solid #e6dde0; padding:8px 10px; text-align:left; vertical-align:top; word-break:keep-all; overflow-wrap:normal; }
.content thead { background:#fbf1f4; }
.content figure { margin:18px 0; }
.content figure img { width:100%; height:auto; }
.content .katex-display { overflow-x:auto; overflow-y:hidden; padding:4px 0; }
.content td code { white-space:nowrap; }
.content pre .nb { padding:0; border:0; border-radius:0; background:none; }
@media(max-width:560px){.content th,.content td { padding:7px 5px; font-size:16px; }}
</style>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js" onload="renderMathInElement(document.querySelector('.content')||document.body,{delimiters:[{left:'\\[',right:'\\]',display:true},{left:'\\(',right:'\\)',display:false}]})"></script>

<div class="wc"><p><a href="https://modernrobotics.northwestern.edu/nu-gm-book-resource/3-3-1-homogeneous-transformation-matrices/">회전행렬은 방향을, 동차변환행렬은 방향과 위치를 함께 표현</a>해요.<br>
로봇에서는 카메라·베이스·손끝처럼 서로 다른 기준으로 적힌 좌표를 연결할 때 사용해요.<br>
이 둘을 구분하면 같은 점의 좌표를 다른 기준으로 바꾸는 식을 읽을 수 있어요.</p></div>

회전행렬에서 역변환까지 여섯 가지 개념을, 바닥 위의 점 하나로 정리해요.
기구학(kinematics)은 로봇의 위치·방향·움직임을 다루는 분야예요.
이 글에서는 힘을 계산하기 전에 필요한 좌표 표현을 배워요.

<div class="keyline">좌표계 → 회전행렬 R → 위치 p → 변환행렬 T → 역변환 순서로 볼게요.</div>

## <span class="no">1</span> 같은 점, 다른 좌표

좌표는 **어느 원점과 어느 축을 기준으로 썼는지**까지 알아야 뜻이 정해져요.
좌표계(frame)는 그 기준이 되는 원점과 축이에요.

바닥에 고정한 좌표계를 $$\{s\}$$, 물체에 붙인 좌표계를 $$\{b\}$$라고 부를게요.
물체는 바닥 기준으로 z축 둘레를 +90° 돌아 있고, 원점은 $$(3,1,0)$$ m에 있어요.
+z에서 원점을 내려다볼 때 반시계 방향을 양의 회전으로 정해요.

<figure><img src="/assets/img/robot-kinematics/coordinates.png" alt="b 좌표로 (1,0)인 점은 s 좌표로 (3,2)예요. b 원점은 s 좌표로 (3,1)이고 x_b축은 위쪽이에요."></figure>

물체의 x축으로 1 m 앞에 있는 점 P를 볼까요?
물체 기준 좌표는 $$(1,0,0)$$, 바닥 기준 좌표는 $$(3,2,0)$$이에요.
**같은 점을 두 좌표계에서 표현한 것**이에요.
좌표 숫자가 달라져도 점이 실제로 움직인 것은 아니에요.

## <span class="no">2</span> 회전행렬의 열벡터

회전행렬(rotation matrix)의 각 열은 **새 좌표계의 축을 기준 좌표계에서 표현한 벡터**예요.
$$R_{sb}$$는 b의 방향을 s 기준으로 표현해요.
아래첨자의 앞 s가 기준, 뒤 b가 표현할 좌표계예요.

$$R_{sb}=\begin{bmatrix}0&-1&0\\1&0&0\\0&0&1\end{bmatrix}$$

첫째 열 $$(0,1,0)$$은 b의 x축이 s의 +y 방향을 향한다는 뜻이에요.
둘째 열 $$(-1,0,0)$$은 b의 y축이 s의 −x 방향을 향한다는 뜻이에요.
셋째 열 $$(0,0,1)$$은 두 z축의 방향이 같다는 뜻이고요.

<figure><img src="/assets/img/robot-kinematics/rotation-columns.png" alt="회전 전 x_b는 오른쪽, y_b는 위쪽이에요. z축으로 +90도 돌린 뒤 x_b는 위쪽, y_b는 왼쪽을 향해요."></figure>

점의 b 좌표에 이 행렬을 곱하면 **방향을 s 기준으로 환산한 값**이 나와요.
아직 두 원점 사이의 위치 차이는 더하지 않았어요.

아래 코드는 NumPy를 사용해요.
파이썬 환경에 `pip install numpy`로 설치한 뒤 코드 칸을 위에서부터 실행하면 이어져요.

```python
import numpy as np  # 벡터·행렬 계산

R = np.array([[0., -1., 0.],
              [1.,  0., 0.],
              [0.,  0., 1.]])
x_b = np.array([1., 0., 0.])
p = np.array([3., 1., 0.])
print(R @ x_b)  # @는 행렬곱
print(R @ x_b + p)
```

```text
[0. 1. 0.]
[3. 2. 0.]
```

첫 줄은 원점 차이를 반영하기 전, 둘째 줄이 점 P의 최종 s 좌표예요.

## <span class="no">3</span> 숫자 9개, 회전 자유도 3개

3×3 회전행렬의 아홉 숫자는 **서로 연결된 조건**을 만족해야 해요.
자유도(degrees of freedom)는 독립적으로 바꿀 수 있는 매개변수의 수예요.

세 열벡터를 $$a,b,c$$라고 부르면, 각 축의 길이가 1이어야 해요.

$$a\cdot a=b\cdot b=c\cdot c=1$$

서로 다른 두 축은 수직이어야 해요.

$$a\cdot b=a\cdot c=b\cdot c=0$$

길이 조건 세 개와 수직 조건 세 개를 합쳐 여섯 제약이에요.
9개 성분에서 독립적인 제약 6개를 반영하면 회전 자유도는 3개가 돼요.
**아홉 칸 중 아무 세 칸을 마음대로 골라도 된다는 뜻은 아니에요.**

이 조건들을 행렬로 모으면 다음과 같아요.

$$R^T R=I,\qquad \det R=1$$

$$R^T$$는 행과 열을 바꾼 전치행렬, $$I$$는 곱해도 값이 유지되는 단위행렬이에요.
직교 조건만으로는 행렬식이 +1 또는 −1일 수 있어요.
행렬식 +1 조건은 오른손 좌표계의 회전을 골라 주므로, 자유도를 하나 더 빼지는 않아요.
이 조건을 만족하는 3×3 행렬들의 집합을 $$SO(3)$$라고 불러요.

## <span class="no">4</span> 변환행렬에 위치 더하기

동차변환행렬(homogeneous transformation matrix)은 **회전 R과 원점 위치 p를 한 행렬에 담은 것**이에요.
이 글의 $$p$$는 b 원점의 위치를 s 좌표로 쓴 벡터예요.

$$x_s=R_{sb}x_b+p$$

앞에서 계산한 “방향 환산 + 원점 위치”가 바로 이 식이에요.
곱셈 한 번으로 표현하려고 점의 좌표 뒤에 1을 붙여요.

$$\begin{bmatrix}x_s\\1\end{bmatrix}=T_{sb}\begin{bmatrix}x_b\\1\end{bmatrix}$$

$$T_{sb}=\begin{bmatrix}R_{sb}&p\\0&1\end{bmatrix}=\begin{bmatrix}0&-1&0&3\\1&0&0&1\\0&0&1&0\\0&0&0&1\end{bmatrix}$$

마지막 행의 0은 세 칸이고, 마지막 1은 한 칸이에요.
3×3 회전과 위치 세 개가 4×4 안에 들어갔어요.
이 형태의 강체변환행렬 집합을 $$SE(3)$$라고 불러요.
강체(rigid body)는 움직이는 동안 모양과 크기가 유지되는 물체예요.

**점에는 1, 방향벡터에는 0**을 붙여요.
방향벡터에는 원점의 위치를 더하지 않기 때문이에요.

## <span class="no">5</span> 역변환으로 돌아가기

역변환은 **s 좌표를 다시 b 좌표로 바꾸는 연산**이에요.
앞 식에서 p를 빼고 회전을 되돌려 보면 이유가 보여요.

$$x_b=R_{sb}^T(x_s-p)$$

회전행렬은 $$R^{-1}=R^T$$이므로 다음 역행렬을 얻어요.

$$T_{sb}^{-1}=T_{bs}=\begin{bmatrix}R_{sb}^T&-R_{sb}^Tp\\0&1\end{bmatrix}$$

위치 부분이 $$-R^Tp$$라는 점을 보세요.
원점 차이도 b의 축 방향으로 다시 표현해야 해서 회전을 함께 적용해요.

```python
T = np.eye(4)  # 4×4 단위행렬
T[:3, :3] = R
T[:3, 3] = p
T_inv = np.eye(4)
T_inv[:3, :3] = R.T
T_inv[:3, 3] = -R.T @ p
x_s_h = T @ np.append(x_b, 1.)
print(x_s_h)
print(T_inv @ x_s_h)
print(T_inv[:3, 3])
```

```text
[3. 2. 0. 1.]
[1. 0. 0. 1.]
[-1.  3.  0.]
```

둘째 줄이 원래의 b 좌표 $$(1,0,0)$$으로 돌아왔어요.
셋째 줄은 s 원점을 b 기준으로 표현한 위치예요.

## <span class="no">6</span> 행렬을 곱하는 순서

여러 좌표계를 연결할 때는 **아래첨자가 이어지는 순서**로 곱해요.

$$T_{sc}=T_{sb}T_{bc}$$

c 좌표를 b 좌표로, 이어서 s 좌표로 바꾸는 식이에요.
열벡터에 행렬을 곱할 때 오른쪽 행렬부터 적용돼요.

회전과 이동의 순서도 결과를 바꿔요.
시작점 $$(1,0,0)$$을 x축으로 1 m 옮기고 z축으로 +90° 돌려 볼게요.

```python
Q = np.eye(4)
Q[:3, :3] = R  # 원점 중심 회전
D = np.eye(4)
D[0, 3] = 1.  # s의 x축 +1 m
x = np.array([1., 0., 0., 1.])
print((Q @ D @ x)[:3])
print((D @ Q @ x)[:3])
```

```text
[0. 2. 0.]
[1. 1. 0.]
```

<figure><img src="/assets/img/robot-kinematics/order.png" alt="(1,0)에서 이동 후 회전하면 (0,2), 회전 후 이동하면 (1,1)에 도착해요."></figure>

첫 줄은 이동한 $$(2,0)$$을 회전시켜 $$(0,2)$$에 도착해요.
둘째 줄은 회전한 $$(0,1)$$을 이동시켜 $$(1,1)$$에 도착하고요.
행렬곱을 읽을 때는 적용 순서와 좌표의 기준을 함께 보세요.

<div class="done">R의 열은 축 방향, T의 마지막 열은 원점 위치예요.</div>

정의와 표기 확인: [Modern Robotics 회전행렬](https://modernrobotics.northwestern.edu/nu-gm-book-resource/3-2-1-rotation-matrices-part-1-of-2/), [동차변환행렬](https://modernrobotics.northwestern.edu/nu-gm-book-resource/3-3-1-homogeneous-transformation-matrices/). 2026년 11월 18일 확인.

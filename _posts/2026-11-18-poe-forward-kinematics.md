---
title: "스크루 축에서 PoE까지: 관절값으로 손끝 자세 구하기"
section: physical-ai
sub: nvidia
ref: poe-forward-kinematics
date: 2026-11-18 14:00:00 +0900
description: 앞에서 구한 트위스트에서 스크루 축을 분리하고 행렬지수를 거쳐, 같은 손끝의 변환행렬을 관절각으로 직접 계산한다.
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

첫 글에서는 손끝의 방향과 위치를 알고 있다고 두고 T를 만들었다.
둘째 글에서는 그 자세에서 로봇이 어떻게 움직이는지 트위스트로 표현했다.

실제 로봇에서는 링크 길이와 관절축, 관절값으로 손끝이 어디에 놓이는지를 계산해야 한다.
이것이 순기구학이다.
앞에서 사용한 트위스트를 관절의 변환으로 연결하면 PoE 공식에 도달한다.

## 트위스트에서 스크루 축을 분리한다

둘째 관절이 +2 rad/s로 회전할 때 공간 트위스트는 다음과 같았다.

$$\mathcal V_s=\begin{bmatrix}0\\0\\2\\0\\-2\\0\end{bmatrix}$$

이 벡터에는 관절축의 기하와 현재 속도가 함께 들어 있다.
같은 축을 중심으로 속도만 바뀔 수도 있으므로, 이 둘을 분리해 보자.

$$\mathcal V_s=S\dot\theta$$

$$S=\begin{bmatrix}0\\0\\1\\0\\-1\\0\end{bmatrix},\qquad \dot\theta=2\ \mathrm{rad/s}$$

S가 스크루 축(screw axis)이다.
회전관절에서는 위 세 성분을 길이가 1인 회전축 방향으로 정규화한다.
아래 성분은 축이 어느 위치를 지나는지 반영한다.
이 S는 여섯 성분 전체의 길이를 1로 만든 벡터라는 뜻은 아니다.

축의 단위방향을 $$\hat\omega$$, 축 위의 점을 q라고 하면 순수 회전관절에서는 다음과 같다.

$$S=\begin{bmatrix}\hat\omega\\v\end{bmatrix},\qquad v=-\hat\omega\times q$$

둘째 축은 $$q=(1,0,0)$$을 지나고 $$\hat\omega=(0,0,1)$$ 방향이므로 $$v=(0,-1,0)$$이다.
2편의 $$v_s=(0,-2,0)$$는 여기에 실제 속도 2를 곱한 값이었다.

회전하면서 축 방향으로도 이동하는 일반 스크루 운동에서는 $$v=-\hat\omega\times q+h\hat\omega$$가 된다.
피치 h는 회전 1 rad당 축 방향 이동량이다.
이번 로봇의 회전관절은 h=0이다.
직동관절에서는 각성분이 0이고, 아래 성분이 단위 이동 방향이 된다.
이 경우 S에는 축의 위치가 들어 있지 않으며, 관절변수는 각도 대신 이동거리를 뜻한다.

## 순간 운동을 유한한 변환으로 바꾼다

트위스트는 지금 이 순간의 운동을 나타낸다.
이를 따라 일정한 축을 중심으로 각도 θ만큼 움직인 결과는 어떻게 구할까?

2편에서 트위스트와 T의 관계를 다음과 같이 썼다.

$$\dot T=[\mathcal V_s]T=[S]\dot\theta T$$

S가 고정되어 있을 때 이 미분관계를 누적한 결과는 행렬지수로 표현된다.

$$T(\theta)=e^{[S]\theta}T(0)$$

T(0)는 이 관절의 θ를 0으로 정한 기준 자세다.
지금처럼 첫 관절을 0에 고정하고 둘째 관절만 움직일 때는, 뒤에서 정할 로봇의 홈 자세 M이 T(0)에 해당한다.

$$[S]$$는 S를 4×4 행렬로 바꾼 것이다.

$$[S]=\begin{bmatrix}[\hat\omega]&v\\0&0\end{bmatrix}$$

여기서 어떤 정보가 더해졌는지 보자.
S는 운동의 축을 담고, θ는 그 축을 따라 움직인 양을 담는다.
$$e^{[S]\theta}$$는 그 운동의 결과를 4×4 변환행렬로 만든다.

행렬지수는 각 칸에 지수함수를 적용하는 연산과 다르다.
행렬곱을 이용한 급수로 정의된다.

$$e^A=I+A+\frac{A^2}{2!}+\frac{A^3}{3!}+\cdots$$

관절 변환 $$e^{[S]\theta}$$의 회전 블록은 $$R=e^{[\hat\omega]\theta}$$다.
이 R은 기준 자세에 적용할 회전이다.
단위 회전축에서는 로드리게스 공식으로 계산할 수 있다.

$$R=I+\sin\theta[\hat\omega]+(1-\cos\theta)[\hat\omega]^2$$

반대칭행렬은 순간적인 회전 관계를 계산하고, 그 행렬의 지수는 유한한 회전 결과를 만든다.
두 행렬이 같은 것이 아닌 이유다.

## 같은 로봇의 홈 자세와 축을 정한다

이제 두 관절 로봇으로 돌아오자.
링크 길이는 여전히 1 m와 0.5 m다.
두 관절각이 모두 0일 때 링크가 +x 방향으로 일직선이 되도록 홈 자세를 정한다.
이때 손끝은 $$(1.5,0,0)$$에 있고, 손끝 좌표계와 바닥 좌표계의 방향은 같다.

<figure><img src="/assets/img/robot-kinematics/robot-home-final.png" alt="홈에서 손끝은 (1.5,0)에 있고 두 관절각은 0이다. 첫 관절 0도, 둘째 관절 90도인 자세의 손끝은 (1,0.5)다."></figure>

이 홈 자세의 손끝 변환행렬을 M이라고 부른다.

$$M=\begin{bmatrix}1&0&0&1.5\\0&1&0&0\\0&0&1&0\\0&0&0&1\end{bmatrix}$$

Space Form에서는 관절축도 **홈 자세의 s 좌표**로 적는다.
첫 축은 원점을 지나므로 $$q_1=(0,0,0)$$이고, 둘째 축은 $$q_2=(1,0,0)$$을 지난다.
두 축의 방향은 모두 +z다.
앞의 외적 식으로 구하면 다음과 같다.

$$S_1=\begin{bmatrix}0\\0\\1\\0\\0\\0\end{bmatrix},\qquad S_2=\begin{bmatrix}0\\0\\1\\0\\-1\\0\end{bmatrix}$$

둘째 축 S₂는 2편의 트위스트에서 속도를 분리해 얻은 바로 그 축이다.
이제 홈 자세 M과 두 축 S₁·S₂를 모두 얻었다.

## PoE로 1편의 T를 다시 계산한다

관절이 하나라면 홈 자세에 그 관절의 변환을 곱하면 된다.
관절이 여러 개면 각 관절의 변환을 순서대로 곱한다.
이것이 PoE(Product of Exponentials), 즉 행렬지수의 곱이다.

$$T(\theta_1,\theta_2)=e^{[S_1]\theta_1}e^{[S_2]\theta_2}M$$

지금까지 사용한 자세는 $$\theta_1=0$$, $$\theta_2=\pi/2$$ rad였다.
첫 관절의 변환은 단위행렬이므로 둘째 관절의 변환만 계산하면 된다.
둘째 관절은 원점이 아닌 $$q=(1,0,0)$$을 중심으로 회전한다.

회전축이 원점에서 떨어져 있을 때 변환의 위치 부분은 어디에서 나올까?
점 x를 q 중심으로 회전시키는 식을 펼쳐 보면 된다.

$$x'=q+R(x-q)=Rx+(q-Rq)$$

따라서 순수 회전축의 변환은 다음과 같다.

$$e^{[S_2]\theta_2}=\begin{bmatrix}R&q-Rq\\0&1\end{bmatrix}$$

90° 회전에서 $$Rq=(0,1,0)^T$$이므로 위치 부분은 $$(1,-1,0)^T$$다.
이 변환에 홈 자세 M을 곱하면 다음 결과를 얻는다.

$$T(0,\pi/2)=\begin{bmatrix}0&-1&0&1\\1&0&0&0.5\\0&0&1&0\\0&0&0&1\end{bmatrix}$$

**1편에서 방향과 위치를 따로 넣어 만들었던 T와 정확히 같다.**
처음에는 손끝이 어디에 있는지 알고 T를 만들었다.
이번에는 관절축과 관절각으로 그 위치와 방향을 계산했다.
손끝 앞의 점 $$x_b=(0.5,0,0)^T$$를 다시 변환하면 점 P의 좌표 $$(1,1,0)^T$$도 그대로 나온다.

## 앞 관절이 움직이면 뒤 관절의 효과도 바뀐다

이번에는 첫 관절도 +90° 돌려 보자.
관절각은 $$\theta_1=\theta_2=\pi/2$$이고, PoE 식은 같은 형태다.

$$T(\pi/2,\pi/2)=e^{[S_1]\pi/2}e^{[S_2]\pi/2}M$$

$$T(\pi/2,\pi/2)=\begin{bmatrix}-1&0&0&-0.5\\0&-1&0&1\\0&0&1&0\\0&0&0&1\end{bmatrix}$$

손끝은 $$(-0.5,1,0)$$에 있고, 방향은 z축 기준 180°다.
첫 링크가 위쪽으로 1 m 뻗고, 둘째 링크가 왼쪽으로 0.5 m 뻗은 모습과 일치한다.

<figure><img src="/assets/img/robot-kinematics/poe-result.png" alt="첫 관절 0도, 둘째 90도에서는 손끝이 (1,0.5)다. 두 관절을 각각 90도로 두면 손끝은 (-0.5,1)이 되고 방향은 180도가 된다."></figure>

첫 관절이 돌면 둘째 축의 실제 위치도 바뀐다.
하지만 PoE 식의 S₂를 새 위치로 다시 고치지는 않는다.
앞의 $$e^{[S_1]\theta_1}$$가 뒤에서 만든 자세 전체를 변환하기 때문에, 둘째 축이 함께 이동하는 효과까지 포함된다.
이것이 홈에서 정한 축으로 여러 관절의 운동을 계산할 수 있는 이유다.

곱의 순서도 중요하다.
위 식은 이 로봇의 관절 연결 순서를 반영한다.
열벡터에 오른쪽부터 작용한다는 사실과 실제 관절을 움직이는 시간 순서는 구분해야 한다.
PoE는 주어진 관절값의 최종 자세를 계산하는 식이다.

## 지금까지의 정보가 어디에 쓰였는가

R은 손끝의 방향을 표현했다.
여기에 원점 위치 p를 더해 T를 만들었다.
T가 시간에 따라 어떻게 변하는지는 트위스트로 표현했다.
같은 강체에 가해지는 힘과 모멘트는 렌치로 표현했다.

이 예제처럼 다른 관절을 고정하고 한 관절만 움직이면, 트위스트에서 그 관절의 속도를 분리해 스크루 축 S를 얻는다.
이 축에 움직인 양 θ를 넣고 행렬지수를 계산하면 관절 하나의 변환이 된다.
관절들의 변환을 홈 자세 M과 함께 곱하면 손끝의 자세 T를 얻는다.

**렌치는 힘을 표현하는 쪽으로, PoE는 관절값에서 자세를 계산하는 쪽으로 연결된다.**
렌치가 PoE의 입력으로 들어가는 것은 아니다.
이 표현들을 통해 같은 로봇의 자세·운동·힘을 연결하고, 그중 운동의 표현을 이용해 관절값에서 손끝 자세를 계산할 수 있다.

<details markdown="1"><summary>Body Form과 URDF는 어디에 연결되는가</summary>

Body Form은 홈의 관절축을 손끝 좌표계에서 표현한다.
2편의 Adjoint를 사용하면 $$B_i=\operatorname{Ad}_{M^{-1}}S_i$$다.
같은 로봇에서 아래 선운동 성분은 첫 축 $$(0,1.5,0)$$, 둘째 축 $$(0,0.5,0)$$이 된다.
그때 PoE의 M은 맨 앞에 놓인다.

$$T=M e^{[B_1]\theta_1}e^{[B_2]\theta_2}$$

Space Form과 Body Form은 같은 최종 자세를 계산한다.
홈에서 축을 바꿀 때는 M을, 현재 트위스트를 바꿀 때는 현재 T를 사용한다.

URDF(Unified Robot Description Format)는 링크와 관절의 연결·축·형상 등을 XML로 적는 로봇 모델 형식이다.
여기서는 로봇 구조를 보고 M과 S를 직접 만들었다.
URDF를 사용하는 소프트웨어도 관절의 기준 좌표와 홈 자세를 일관되게 해석해야 한다.

</details>

참고: [Modern Robotics 강체운동의 지수좌표](https://modernrobotics.northwestern.edu/nu-gm-book-resource/3-3-3-exponential-coordinates-of-rigid-body-motion/), [Space Form PoE](https://modernrobotics.northwestern.edu/nu-gm-book-resource/4-1-1-product-of-exponentials-formula-in-the-space-frame/), [Body Form PoE](https://modernrobotics.northwestern.edu/nu-gm-book-resource/4-1-2-product-of-exponentials-formula-in-the-end-effector-frame/), [ROS URDF](https://index.ros.org/p/urdf/). 2026년 11월 18일 확인.

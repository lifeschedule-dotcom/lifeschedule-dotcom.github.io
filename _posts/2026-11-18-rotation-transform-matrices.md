---
title: "회전행렬과 동차변환행렬: 방향에서 위치까지"
section: physical-ai
sub: nvidia
ref: rotation-transform-matrices
date: 2026-11-18 14:00:00 +0900
description: 같은 로봇 손끝을 예로 들어 방향을 나타내는 R에서 위치까지 포함한 T로 이어지는 과정을 설명한다.
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

로봇의 손끝이 어느 방향을 향하고 있는지부터 생각해 보자.
방향을 표현하려면 회전행렬 R이 필요하다.
그런데 방향을 알아도 손끝이 공간의 어디에 있는지는 아직 알 수 없다.
여기에 위치를 더한 것이 동차변환행렬 T다.

이 두 개념을 서로 떨어진 정의로 외우면 행렬의 모양만 남기 쉽다.
하나의 손끝을 계속 따라가면서, 어떤 정보가 추가되는지 살펴보자.

## 회전행렬 R: 손끝의 방향을 표현한다

로봇 바닥에 고정한 좌표계를 $$\{s\}$$, 손끝에 붙인 좌표계를 $$\{b\}$$라고 하자.
좌표계는 원점과 x·y·z축으로 이루어진 기준이다.
이때 **b의 세 축이 s에서 어느 방향을 향하는가**를 적으면 손끝의 방향을 표현할 수 있다.

예제로 사용할 로봇은 길이 1 m와 0.5 m인 두 링크가 연결된 평면 로봇팔이다.
두 관절은 모두 z축을 중심으로 회전한다.
s의 원점은 첫 관절의 중심에 둔다.
둘째 관절각은 첫 링크에 대한 상대 회전각이다.
+z에서 xy 평면을 내려다볼 때 반시계 방향을 양으로 정하자.
첫 관절은 0°, 둘째 관절은 +90°인 상태에서 시작한다.

<figure><img src="/assets/img/robot-kinematics/coordinates.png" alt="첫 링크는 오른쪽으로 1 m, 둘째 링크는 위쪽으로 0.5 m 뻗어 있다. 손끝 b의 원점은 (1,0.5), x_b축은 위쪽, y_b축은 왼쪽을 향한다."></figure>

손끝의 x축은 바닥의 +y 방향을 향한다.
따라서 s에서 표현한 b의 x축은 $$(0,1,0)$$이다.
같은 방식으로 b의 y축은 $$(-1,0,0)$$, z축은 $$(0,0,1)$$이다.
이 세 벡터를 **열로 나란히 놓으면** 회전행렬이 된다.

$$R_{sb}=\begin{bmatrix}0&-1&0\\1&0&0\\0&0&1\end{bmatrix}$$

첫 열은 b의 x축, 둘째 열은 y축, 셋째 열은 z축이다.
아래첨자 sb에서 앞의 s는 기준 좌표계이고, 뒤의 b는 방향을 표현하려는 좌표계다.
여기서 R이 나타내는 자세는 물체가 향하는 방향, 즉 orientation이다.
위치까지 포함한 전체 자세인 pose는 뒤에서 T로 표현한다.

## 숫자 아홉 개로 방향을 표현하는 이유

회전행렬에는 숫자가 아홉 개 있다.
그렇다고 이 아홉 숫자를 모두 독립적으로 바꿀 수 있는 것은 아니다.
좌표계의 축이라면 길이가 1이고 서로 수직이어야 한다.

세 열벡터를 $$a,b,c$$라고 쓰면 길이 조건은 세 개다.

$$a\cdot a=1,\qquad b\cdot b=1,\qquad c\cdot c=1$$

수직 조건도 세 개다.

$$a\cdot b=0,\qquad a\cdot c=0,\qquad b\cdot c=0$$

아홉 성분에 여섯 개의 독립적인 제약이 걸리므로 남는 회전 자유도는 세 개다.
자유도는 독립적으로 정할 수 있는 매개변수의 수를 말한다.
아홉 칸 중 아무 세 칸이나 자유롭게 골라도 된다는 뜻은 아니다.

이 여섯 조건을 행렬로 모으면 $$R^TR=I$$가 된다.
$$R^T$$는 행과 열을 바꾼 전치행렬이고, I는 단위행렬이다.
여기에 $$\det R=1$$을 요구해서 오른손 좌표계의 회전을 선택한다.
직교 조건만으로 가능한 반사까지 포함하지 않도록 고르는 조건이며, 자유도를 하나 더 빼는 조건은 아니다.
이러한 3×3 회전행렬의 집합을 $$SO(3)$$라고 부른다.

## R만으로는 원점의 위치를 알 수 없다

앞의 회전행렬을 가진 손끝은 오른쪽에도, 왼쪽에도 있을 수 있다.
방향이 같으면 R은 같기 때문이다.
따라서 손끝의 위치를 표현하려면 **b 원점이 s에서 어디에 있는지**를 추가해야 한다.

지금 로봇은 첫 링크가 오른쪽으로 1 m, 둘째 링크가 위쪽으로 0.5 m 뻗어 있다.
따라서 손끝 원점의 위치는 다음과 같다.

$$p=\begin{bmatrix}1\\0.5\\0\end{bmatrix}\ \mathrm{m}$$

이제 손끝의 방향 R과 위치 p를 모두 알게 되었다.
이 정보로 손끝에 붙은 점의 좌표도 바꿀 수 있다.

b의 x축으로 0.5 m 앞에 점 P가 있다고 하자.
b에서 표현한 이 점은 $$x_b=(0.5,0,0)^T$$다.
b의 x축은 s에서 위쪽을 향하므로, R을 곱하면 $$(0,0.5,0)^T$$가 된다.
여기에 손끝 원점의 위치 p를 더한다.

$$x_s=R_{sb}x_b+p$$

$$x_s=\begin{bmatrix}0\\0.5\\0\end{bmatrix}+\begin{bmatrix}1\\0.5\\0\end{bmatrix}=\begin{bmatrix}1\\1\\0\end{bmatrix}\ \mathrm{m}$$

점 P는 바닥 기준으로 $$(1,1,0)$$에 있다.
R은 손끝 원점에서 P로 향하는 벡터를 s의 축 방향으로 환산하고, p는 그 원점을 실제 위치에 놓아 준다.

## 동차변환행렬 T: 방향과 위치를 묶는다

방금 사용한 연산은 회전 한 번과 덧셈 한 번이었다.
이 둘을 행렬곱 하나로 표현하기 위해 R과 p를 하나의 행렬에 넣는다.
그 결과가 동차변환행렬이다.

$$T_{sb}=\begin{bmatrix}R_{sb}&p\\0&1\end{bmatrix}$$

위쪽 세 행에는 R과 p가 들어가고, 마지막 행은 $$(0,0,0,1)$$이다.
지금 예제의 숫자를 그대로 넣으면 다음과 같다.

$$T_{sb}=\begin{bmatrix}0&-1&0&1\\1&0&0&0.5\\0&0&1&0\\0&0&0&1\end{bmatrix}$$

점 좌표 뒤에도 1을 붙이면 앞에서 따로 계산했던 두 연산이 한 번에 이루어진다.

$$\begin{bmatrix}x_s\\1\end{bmatrix}=T_{sb}\begin{bmatrix}x_b\\1\end{bmatrix}$$

마지막의 1 덕분에 행렬곱 과정에서 위치 p가 더해진다.
방향벡터에는 0을 붙인다.
방향에는 원점의 위치를 더하지 않기 때문이다.
이처럼 회전과 위치로 구성된 강체변환행렬의 집합을 $$SE(3)$$라고 부른다.
강체는 운동하는 동안 모양과 크기가 유지되는 물체다.

## 반대로 좌표를 바꾸면 무엇이 달라질까

s에서 적은 점을 b에서 표현하려면 앞의 계산을 되돌리면 된다.
먼저 손끝 원점의 위치 p를 빼고, 회전을 되돌린다.

$$x_b=R_{sb}^T(x_s-p)$$

회전행렬에서는 $$R^{-1}=R^T$$이므로 전치행렬을 곱하면 회전이 되돌아간다.
점 P의 s 좌표 $$(1,1,0)$$을 넣으면 원래의 b 좌표 $$(0.5,0,0)$$을 얻는다.
이 역변환을 한 행렬로 쓰면 다음과 같다.

$$T_{bs}=T_{sb}^{-1}=\begin{bmatrix}R_{sb}^T&-R_{sb}^Tp\\0&1\end{bmatrix}$$

위치 열에 $$-R^Tp$$가 들어가는 이유도 같은 계산에서 나온다.
원점 차이를 빼는 일과 그 벡터의 표현 기준을 바꾸는 일이 함께 필요하기 때문이다.

여러 좌표계를 연결할 때는 같은 원리로 행렬을 이어 곱한다.

$$T_{sc}=T_{sb}T_{bc}$$

c에서 표현한 좌표를 먼저 b로, 다음으로 s로 바꾸는 순서다.
열벡터에는 오른쪽 행렬부터 작용한다.
행렬의 순서를 바꾸면 다른 좌표 변환이 되므로 곱의 순서까지 식의 일부로 읽어야 한다.

## T가 알려 주는 것과 다음 질문

이제 손끝이 어디에 있고 어느 방향을 향하는지 알 수 있다.
하지만 T 하나를 보고 손끝이 멈춰 있는지, 회전 중인지, 얼마나 빠르게 움직이는지는 알 수 없다.

같은 자세를 지나가는 두 로봇도 속도는 다를 수 있다.
따라서 **현재 자세를 나타내는 T에 이어, 그 자세가 어떻게 변하고 있는지를 나타낼 표현**이 필요하다.
이것이 다음에 다룰 트위스트다.

앞에서 구한 숫자는 그대로 유지한다.
손끝은 $$(1,0.5,0)$$에 있고, 방향은 z축 기준 +90°이며, 손끝 앞의 점 P는 $$(1,1,0)$$에 있다.
다음 글에서는 이 로봇의 둘째 관절이 회전할 때, 손끝과 점 P가 어떤 속도로 움직이는지 계산한다.

참고: [Modern Robotics 회전행렬](https://modernrobotics.northwestern.edu/nu-gm-book-resource/3-2-1-rotation-matrices-part-1-of-2/), [동차변환행렬](https://modernrobotics.northwestern.edu/nu-gm-book-resource/3-3-1-homogeneous-transformation-matrices/). 2026년 11월 18일 확인.

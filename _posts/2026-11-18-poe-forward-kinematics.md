---
title: "PoE 순기구학 이해: 관절축과 각도에서 손끝 자세까지"
section: physical-ai
sub: dynamics
series_order: 6
ref: poe-forward-kinematics
date: 2026-11-18 14:00:00 +0900
description: 같은 2관절 로봇의 홈과 스크루 축을 만들고, 원점 밖 회전과 곱 순서를 도출해 Space와 Body PoE를 직접 계산합니다.
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
<link rel="stylesheet" href="/assets/css/robotics-demos.css">
<script defer src="/assets/js/robotics-demos.js"></script>


동차변환행렬 T를 알면 로봇 손끝의 위치와 방향을 알 수 있습니다.
이번에는 관절각을 입력으로 주었을 때 T를 계산하겠습니다.
관절 하나의 스크루 축을 유한한 변환으로 바꾸고, 그 변환들을 곱하는 것이 Product of Exponentials, PoE입니다.

## 직접 2관절 로봇팔을 움직여 보기

대화에서 조작했던 로봇팔은 **두 링크의 길이가 각각 1 m**입니다.
첫 번째 관절을 움직이면 두 링크가 함께 돌고, 두 번째 관절만 움직이면 둘째 링크가 돌아갑니다.

<div class="robot-demo" data-demo="poe"></div>

여기서 손끝의 가로·세로 성분은 다음과 같습니다.

$$x=\cos\theta_1+\cos(\theta_1+\theta_2),\quad y=\sin\theta_1+\sin(\theta_1+\theta_2)$$

손끝 방향은 θ₁+θ₂입니다. 두 각도를 모두 90°로 두면 손끝은 (−1,1), 방향은 180°가 됩니다.
아래의 자세한 행렬 계산은 둘째 링크를 0.5 m로 둔 예제입니다. 축과 행렬곱을 만드는 방법은 같으며, 링크 길이에 따라 홈 위치와 손끝 좌표가 달라집니다.


## 1. 먼저 로봇의 홈 자세를 정하기

길이 1 m와 0.5 m인 두 링크가 xy 평면에서 움직이는 로봇을 쓰겠습니다.
두 관절 모두 +z 방향을 축으로 회전합니다.
관절각 θ₁과 θ₂가 0일 때 두 링크가 +x 방향으로 나란히 펴지도록 정합니다.
θ₁은 공간 +x축에 대한 첫 링크의 각도이고, θ₂는 첫 링크에 대한 둘째 링크의 상대각입니다.
이 기준 구성을 홈 자세라고 합니다.

<figure><img src="/assets/img/robot-kinematics/robot-home-final.png" alt="홈에서 두 링크는 x축으로 펴져 손끝이 (1.5,0)에 있고, 둘째 관절을 90도 돌리면 (1,0.5)에 있습니다."></figure>

공간 기준 s는 첫 관절에 고정합니다.
홈의 손끝 좌표계 b는 축 방향이 s와 같고 원점은 (1.5,0,0)입니다.
따라서 홈의 동차변환행렬 M은 다음과 같습니다.

$$M=\begin{bmatrix}1&0&0&1.5\\0&1&0&0\\0&0&1&0\\0&0&0&1\end{bmatrix}$$

손끝 방향이 같으므로 왼쪽 위는 I이고, 원점 위치가 오른쪽 열입니다.
관절각이 모두 0일 때 출력 T는 M이어야 합니다.

## 2. 홈에서 관절별 스크루 축 만들기

회전관절의 정규화된 스크루 축은 앞에서 구한 다음 식을 씁니다.
순수 회전관절이므로 피치는 0입니다.

$$S=\begin{bmatrix}\hat\omega\\-\hat\omega\times q\end{bmatrix}$$

위쪽은 회전축의 단위 방향, q는 그 축 위의 한 점입니다.
q와 방향은 모두 **홈에서 같은 공간좌표계 s 기준으로** 적습니다.
실제 회전속도는 아직 넣지 않습니다.

첫 관절은 원점을 지나는 +z축입니다.

$$q_1=(0,0,0)^T,\qquad\hat\omega_1=(0,0,1)^T$$

$$S_1=(0,0,1,\;0,0,0)^T$$

두 번째 관절은 홈에서 (1,0,0)을 지나는 +z축입니다.

$$q_2=(1,0,0)^T,\qquad\hat\omega_2=(0,0,1)^T$$

$$-\hat\omega_2\times q_2=-(0,1,0)^T=(0,-1,0)^T$$

$$S_2=(0,0,1,\;0,-1,0)^T$$

두 관절은 축 방향은 같지만 지나는 위치가 다릅니다.
그 차이를 S의 아래 세 성분이 담습니다.

## 3. 축 하나의 지수는 어떤 변환일까?

공간 기준의 일정한 스크루 축 S를 따라 θ만큼 움직이면 다음과 같았습니다.

$$T(\theta)=e^{[S]\theta}T(0)$$

행렬지수 $$E(\theta)=e^{[S]\theta}$$가 초기 자세에 추가할 변환입니다.
회전관절의 θ는 라디안입니다.
둘째 관절처럼 원점 밖의 점 q를 지나는 축에서 회전할 때, 이 변환의 위치 열은 어떻게 생길까요?

점 x를 q 중심으로 돌리는 과정을 세 단계로 나누겠습니다.

1. q를 빼서 회전 중심을 원점으로 옮깁니다: x−q.
2. 원점 중심 회전 R을 적용합니다: R(x−q).
3. q를 다시 더해 원래 위치로 돌아옵니다: R(x−q)+q.

괄호를 풀면 다음과 같습니다.

$$x'=Rx+(q-Rq)$$

이를 동차변환의 $$x'=Rx+p$$와 비교하면 위치 열이 결정됩니다.

$$\boxed{E(\theta)=\begin{bmatrix}R_z(\theta)&q-R_z(\theta)q\\0&1\end{bmatrix}}$$

원점 밖 회전의 위치 열이 0이 아닌 이유는 중심을 옮겼다가 되돌리는 두 이동이 있기 때문입니다.
축 위 점 q를 넣으면 $$Rq+q-Rq=q$$이므로 회전축은 제자리에 남습니다.

이 행렬이 S의 지수와 연결되는지도 θ=0 근처에서 확인할 수 있습니다.
R의 순간 변화는 $$[\hat\omega]$$이고, 위치 열의 순간 변화는 $$-[\hat\omega]q=-\hat\omega\times q$$입니다.
즉 θ당 순간 운동이 바로 앞에서 만든 S이며, 일정한 같은 축을 따라 누적한 변환입니다.

둘째 관절에서는 q=(1,0,0)이므로 다음과 같습니다.

$$q-R_z(\theta_2)q=\begin{bmatrix}1-\cos\theta_2\\-\sin\theta_2\\0\end{bmatrix}$$

$$E_2=\begin{bmatrix}\cos\theta_2&-\sin\theta_2&0&1-\cos\theta_2\\\sin\theta_2&\cos\theta_2&0&-\sin\theta_2\\0&0&1&0\\0&0&0&1\end{bmatrix}$$

cos와 sin은 회전행렬에서, 오른쪽 열의 부호는 q−Rq에서 나온 것입니다.

## 4. 둘째 관절만 90도 돌려 직접 계산하기

첫 관절은 0으로 두고 θ₂=π/2를 대입하겠습니다.

$$E_2=e^{[S_2]\pi/2}=\begin{bmatrix}0&-1&0&1\\1&0&0&-1\\0&0&1&0\\0&0&0&1\end{bmatrix}$$

이것은 손끝의 현재 자세가 아니라 **홈 자세를 바꿀 변환**입니다.
따라서 M의 왼쪽에 곱해야 합니다.

$$T=E_2M$$

홈의 손끝 위치는 (1.5,0,0)이었습니다.
그 위치를 변환하면 다음과 같습니다.

$$p=R_z(90^\circ)\begin{bmatrix}1.5\\0\\0\end{bmatrix}+\begin{bmatrix}1\\-1\\0\end{bmatrix}=\begin{bmatrix}1\\0.5\\0\end{bmatrix}$$

홈 방향은 I이므로 새 방향은 R_z(90°)입니다.

$$T=\begin{bmatrix}0&-1&0&1\\1&0&0&0.5\\0&0&1&0\\0&0&0&1\end{bmatrix}$$

변환행렬·트위스트·렌치 글에서 사용한 손끝 자세가 이 계산의 결과였습니다.
둘째 관절의 각도 하나에서 그 자세를 다시 만들었습니다.

## 5. 첫 관절의 회전은 어디에 곱할까?

첫 관절은 공간 원점을 중심으로 회전하므로 E₁의 위치 열은 0입니다.

$$E_1=e^{[S_1]\theta_1}=\begin{bmatrix}R_z(\theta_1)&0\\0&1\end{bmatrix}$$

둘째 관절을 굽혀 만든 구성 E₂M 전체를 첫 관절 중심으로 회전시키면, 첫 링크와 둘째 관절의 축, 손끝이 함께 돌아갑니다.
그러므로 왼쪽에 E₁을 곱합니다.

$$\boxed{T(\theta_1,\theta_2)=e^{[S_1]\theta_1}e^{[S_2]\theta_2}M}$$

오른쪽부터 홈 자세 M, 둘째 관절의 굽힘, 전체를 돌리는 첫 관절의 회전 순서로 해석할 수 있습니다.
이는 최종 구성을 만드는 계산 순서입니다.
로봇을 실제로 어느 시간 순서로 구동해야 하는지를 명령하는 식은 아닙니다.

S₂를 홈에서 정의했어도 괜찮은 이유가 여기에 있습니다.
E₁을 왼쪽에 곱할 때 둘째 축도 함께 이동합니다.
θ₁=90°이면 둘째 관절의 위치 (1,0)은 (0,1)로 옮겨집니다.
이동한 축에서의 회전은 $$E_1E_2E_1^{-1}$$이며, 먼저 회전한 홈 E₁M에 적용하면 다음과 같습니다.

오른쪽부터 E₁⁻¹로 점을 원래 배치로 되돌리고, 홈 축에서 E₂를 적용한 다음, E₁으로 다시 옮기는 세 단계입니다.

$$(E_1E_2E_1^{-1})(E_1M)=E_1E_2M$$

가운데 역변환과 변환이 상쇄되어, 홈에서 정한 S₂를 그대로 쓰는 PoE가 됩니다.

두 관절을 모두 +90°로 두면 앞에서 구한 p=(1,0.5)를 다시 90° 돌립니다.

$$p=\begin{bmatrix}0&-1\\1&0\end{bmatrix}\begin{bmatrix}1\\0.5\end{bmatrix}=\begin{bmatrix}-0.5\\1\end{bmatrix}$$

손끝 방향은 90°+90°=180°가 됩니다.

<figure><img src="/assets/img/robot-kinematics/poe-result.png" alt="관절각 (0도,90도)의 손끝 (1,0.5)을 첫 관절로 90도 돌리면 (-0.5,1)에 도달합니다."></figure>

관절이 n개이면 같은 구조를 이어 붙입니다.

$$T=e^{[S_1]\theta_1}\cdots e^{[S_n]\theta_n}M$$

지수로 만든 행렬들의 곱이므로 Product of Exponentials라고 부릅니다.

## 6. 링크의 삼각함수 식과 비교하기

기하학으로도 같은 위치를 구할 수 있습니다.
첫 링크는 공간의 +x축과 θ₁을 이루므로 끝점이 $$(\cos\theta_1,\sin\theta_1)$$입니다.
둘째 링크의 절대 방향은 θ₁+θ₂이고 길이는 0.5입니다.
각 링크의 가로·세로 성분을 더하면 됩니다.

$$x=\cos\theta_1+0.5\cos(\theta_1+\theta_2)$$

$$y=\sin\theta_1+0.5\sin(\theta_1+\theta_2)$$

θ₁=0, θ₂=90°이면 (1,0.5), 둘 다 90°이면 (−0.5,1)이 나옵니다.
지금까지의 행렬곱이 링크 끝의 좌표를 더하는 기하학과 일치합니다.

이 삼각함수 식은 평면 로봇의 그림에서 바로 만들 수 있습니다.
PoE는 관절마다 공간 축을 정하고 지수변환을 곱하는 같은 방식으로 3차원 회전관절과 직선 이동관절을 다룰 수 있게 합니다.

## 7. Body PoE에서 M이 앞으로 오는 이유

홈의 손끝 기준으로 축을 표현한 것을 B_i라고 하겠습니다.
홈에서 b 원점은 s의 x=1.5에 있고 방향은 같습니다.
따라서 b에서 첫 관절은 x=−1.5, 둘째 관절은 x=−0.5에 있습니다.

$$B_1=(0,0,1,\;0,1.5,0)^T,\qquad B_2=(0,0,1,\;0,0.5,0)^T$$

아래쪽 양수는 앞과 같이 −ω̂×q를 계산한 결과입니다.
좌표 변환식으로 쓰면 $$B_i=\operatorname{Ad}_{M^{-1}}S_i$$입니다.
축을 **홈 기준으로** 바꾸므로 현재 자세 T가 아닌 M을 씁니다.

행렬 표현에서는 같은 변환이 다음과 같습니다.

$$[B_i]=M^{-1}[S_i]M$$

지수급수의 모든 항에도 같은 관계가 성립합니다.
예를 들어 $$[B_i]^2=M^{-1}[S_i]MM^{-1}[S_i]M=M^{-1}[S_i]^2M$$입니다.
가운데 MM⁻¹이 계속 사라져 어떤 거듭제곱도 같은 구조가 됩니다.
이를 지수급수에서 더하면 다음과 같습니다.

$$e^{[B_i]\theta_i}=M^{-1}e^{[S_i]\theta_i}M$$

이 식을 Body 형태의 곱에 대입해 보겠습니다.

$$M e^{[B_1]\theta_1}e^{[B_2]\theta_2}=M(M^{-1}E_1M)(M^{-1}E_2M)=E_1E_2M$$

따라서 두 형태는 같은 자세를 계산합니다.

$$\boxed{T=M e^{[B_1]\theta_1}e^{[B_2]\theta_2}}$$

M이 앞으로 오는 것은 홈의 손끝 기준으로 바꾼 관절축을 쓰기 때문이며, 위의 상쇄 과정을 통해 Space 형태와 연결됩니다.

### 이해도 확인

첫 관절은 90°, 둘째 관절은 0°일 때 손끝 위치와 방향을 구해 보세요.

<details markdown="1"><summary>풀이 보기</summary>
<p>둘째 관절의 지수는 각도가 0이므로 단위행렬입니다. 홈에서 펴진 길이 1.5 m 전체가 첫 관절을 중심으로 90° 회전합니다.</p>

$$p=(0,1.5,0)^T,\qquad R=R_z(90^\circ)$$

<p>위의 기하학 식에 대입하거나 E₁M을 계산해도 같습니다.</p>
</details>

회전행렬에서 시작한 cosθ·sinθ는 변환의 방향 블록을 만들었습니다.
원점 차이를 더해 T를 구성했고, 순간 운동을 트위스트로 묶은 뒤 지수로 누적했습니다.
PoE는 그 관절별 누적 운동을 연결해, 관절값에서 손끝의 위치와 방향으로 가는 식입니다.

## 로봇의 구조를 적는 URDF

PoE는 관절값에서 손끝 자세를 계산합니다. URDF(Universal Robot Description Format)는 로봇의 구조를 XML로 기술하는 형식입니다.
link는 로봇의 몸체·형상·관성 정보를, joint는 링크 사이의 연결과 회전·직선 이동 방식을 나타냅니다.
로봇 그림에서 M과 관절축을 구하는 계산, 로봇 구조를 파일로 기술하는 일을 구분하면 됩니다.

참고: [Modern Robotics 강체운동의 지수좌표](https://modernrobotics.northwestern.edu/nu-gm-book-resource/3-3-3-exponential-coordinates-of-rigid-body-motion/), [Space Form PoE](https://modernrobotics.northwestern.edu/nu-gm-book-resource/4-1-1-product-of-exponentials-formula-in-the-space-frame/), [Body Form PoE](https://modernrobotics.northwestern.edu/nu-gm-book-resource/4-1-2-product-of-exponentials-formula-in-the-end-effector-frame/). 2026년 11월 18일 확인.

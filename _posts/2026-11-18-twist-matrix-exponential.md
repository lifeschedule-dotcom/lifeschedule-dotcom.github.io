---
title: "트위스트 행렬과 행렬지수: 속도에서 자세 변화까지"
section: physical-ai
sub: dynamics
series_order: 4
ref: twist-matrix-exponential
date: 2026-11-18 14:00:00 +0900
description: 외적의 계수에서 4×4 속도 행렬을 만들고, 시간 누적으로 행렬지수를 도출하며 Space와 Body의 변환을 연결합니다.
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


트위스트는 지금의 운동 속도를 담습니다.
그 속도로 일정 시간 움직이면 손끝은 어디에 도달할까요?
이번 글에서는 같은 회전축을 따라 작은 운동을 쌓아서, 최종 위치와 방향을 계산하겠습니다.

## 변환행렬과 행렬지수는 어떻게 다를까?

변환행렬 T는 위치와 방향을 표현하는 **결과 행렬**입니다.
행렬지수는 행렬을 입력받아 새로운 행렬을 계산하는 **연산**입니다.
스크루 축 S와 운동의 크기 θ를 넣어 변환을 만들고, 홈 자세에 곱합니다. θ는 회전각 또는 이동거리입니다.

$$S,\theta\ \longrightarrow\ e^{[S]\theta}\ \longrightarrow\ T(\theta)=e^{[S]\theta}M$$

먼저 운동 속도를 나타내는 기호를 구분해 두겠습니다.

| 기호 | 읽는 법 | 의미 |
|---|---|---|
| θ | 세타 | 회전각 또는 이동거리 |
| θ̇ | 세타 닷 | 각도 또는 거리의 시간 변화율 |
| ω̂ | 오메가 햇 | 이 글에서 회전축의 단위 방향벡터 |
| ω | 오메가 | 실제 각속도 벡터 |
| [ω] | 오메가의 반대칭행렬 | 외적을 계산하는 3×3 행렬 |
| Ṫ | 티 닷 | 변환행렬의 시간 미분 |
| Ad_T | 애드조인트 티 | 트위스트의 좌표계를 바꾸는 수반표현 |

ω는 그리스 문자이고 w는 영어 더블유입니다. 모양이 비슷해도 자동으로 같은 기호가 되지는 않습니다.
교재가 ω를 단위축으로 쓰는 구간에서는 실제 각속도와 따로 읽어야 합니다.

### 반대칭행렬을 직접 만들어 보는 연습

<div class="robot-demo" data-demo="skew"></div>

대각선은 0, 오른쪽 위는 −ωz·ωy·−ωx, 반대편은 부호를 뒤집어 배치합니다.
이제 이 행렬이 점의 속도를 계산하고, 시간에 따라 누적되는 과정을 보겠습니다.


## 1. 먼저 초기점과 속도를 정하기

회전축은 앞 글과 같이 q=(1,0,0)을 지나는 +z축입니다.
각속도는 ω=(0,0,2) rad/s이고, 축을 따라 이동하지 않는 순수 회전입니다.
트위스트의 선운동 성분은 앞에서 구한 다음 값입니다.

$$v_s=-\omega\times q=(0,-2,0)^T$$

따라서 공간 기준 트위스트는 다음과 같습니다.

$$\mathcal V_s=(0,0,2,\;0,-2,0)^T$$

이제 초기 손끝 위치를 p(0)=(1.5,0,0) m로 정하겠습니다.
축에서 오른쪽으로 0.5 m 떨어진 곳입니다.
초기 방향은 바닥과 같아서 R(0)=I입니다.
I는 좌표를 그대로 유지하는 단위행렬입니다.

<figure><img src="/assets/img/robot-kinematics/exponential-path.png" alt="초기 손끝(1.5,0)이 축q=(1,0)을 중심으로 조금씩 돌아 90도 뒤(1,0.5)에 도달합니다."></figure>

초기 손끝의 속도를 먼저 계산하겠습니다.
점 위의 점 표시는 시간에 대한 미분, 즉 그 점의 속도입니다.

$$\dot p=\omega\times p+v_s$$

$$\dot p(0)=\begin{bmatrix}0\\3\\0\end{bmatrix}+\begin{bmatrix}0\\-2\\0\end{bmatrix}=\begin{bmatrix}0\\1\\0\end{bmatrix}$$

처음에는 위쪽으로 1 m/s입니다.
90° 돌아간 뒤에는 같은 손끝이 왼쪽으로 움직입니다.
트위스트가 일정해도 점의 위치 p가 바뀌므로 **그 점의 속도 방향은 계속 바뀝니다.**

## 2. 외적 계산을 행렬곱으로 바꾸기

매번 속도를 구하려면 ω×p를 계산해야 합니다.
지금 각속도 ω=(0,0,2)를 쓰면 외적의 세 성분은 다음과 같습니다.

$$\omega\times p=\begin{bmatrix}-2p_y\\2p_x\\0\end{bmatrix}$$

첫 행은 p_x를 0배, p_y를 −2배, p_z를 0배 합니다.
둘째 행은 p_x를 2배 하고, 나머지는 0배 합니다.
셋째 행은 모두 0입니다.
각 행의 계수를 모으겠습니다.

$$\omega\times p=\underbrace{\begin{bmatrix}0&-2&0\\2&0&0\\0&0&0\end{bmatrix}}_{[\omega]}\begin{bmatrix}p_x\\p_y\\p_z\end{bmatrix}$$

이 행렬에 초기점 (1.5,0,0)을 곱하면 (0,3,0)입니다.
앞에서 외적으로 계산한 값과 같습니다.
대괄호 [ω]는 ω를 이 모양의 행렬로 바꿨다는 표시입니다.
일반적인 ω에서도 외적의 계수를 모으면 됩니다.

$$[\omega]=\begin{bmatrix}0&-\omega_z&\omega_y\\\omega_z&0&-\omega_x\\-\omega_y&\omega_x&0\end{bmatrix}$$

예를 들어 첫 행의 −ω_z와 ω_y는 $$\omega_y p_z-\omega_z p_y$$에서 나온 계수입니다.
전치하면 부호가 반대가 되는 $$[\omega]^T=-[\omega]$$ 성질 때문에 반대칭행렬이라고 부릅니다.

이제 v_s도 더해야 합니다.
변환행렬에서 위치 p를 더하려고 마지막 성분 1을 붙였듯이, 여기서는 v_s를 더하는 데 1을 씁니다.

$$\underbrace{\begin{bmatrix}0&-2&0&0\\2&0&0&-2\\0&0&0&0\\0&0&0&0\end{bmatrix}}_{[\mathcal V_s]}\begin{bmatrix}p_x\\p_y\\p_z\\1\end{bmatrix}=\begin{bmatrix}-2p_y\\2p_x-2\\0\\0\end{bmatrix}$$

첫 세 성분은 바로 ω×p+v_s입니다.
마지막 성분은 1의 시간 미분이므로 0입니다.
T가 점을 새 위치로 옮겼다면, 이 행렬은 그 점의 **현재 속도**를 계산합니다.

이를 블록으로 쓰면 다음과 같습니다.

$$[\mathcal V_s]=\begin{bmatrix}[\omega_s]&v_s\\0&0\end{bmatrix}$$

왼쪽 위는 3×3, 오른쪽 위는 3×1, 마지막 행은 0 네 개입니다.
이 모양의 속도 행렬 집합이 se(3)입니다.

## 3. 작은 시간 동안 움직인 결과를 이어 붙이기

처음 손끝 속도는 (0,1,0) m/s였습니다.
0.1초 동안 이 속도가 그대로라고 근사하면 새 위치는 다음과 같습니다.

$$p_1\approx(1.5,0,0)+(0,1,0)\times0.1=(1.5,0.1,0)$$

이 근사 위치에서 속도를 다시 계산하면 (−0.2,1,0)입니다.
다음 0.1초에는 그 속도로 움직인다고 근사합니다.

$$p_2\approx(1.5,0.1,0)+(-0.2,1,0)\times0.1=(1.48,0.2,0)$$

한 번의 직선 이동으로 끝내면 원 궤적을 따라가지 못합니다.
**현재 위치에서 속도를 다시 구하고, 짧게 움직이는 계산을 반복**해야 합니다.
시간 간격을 더 작게 나눌수록 이 근사가 정확해집니다.
그림의 원호는 그 간격을 0으로 보낸 결과입니다.

위치뿐 아니라 물체의 축 방향도 함께 바뀝니다.
전체 자세를 T에 묶고, 위 속도 행렬을 A=[𝒱_s]라고 줄이면 같은 누적 계산을 다음처럼 씁니다.

$$T(t+\Delta t)\approx T(t)+A T(t)\Delta t=(I+A\Delta t)T(t)$$

Δt는 짧게 나눈 시간 간격입니다.
AT(t)는 현재 자세의 변화 속도입니다.
어느 물체 고정점의 동차좌표에 적용해도 같은 속도식을 얻으므로, 그 점들을 옮기는 T에도 $$\dot T=AT$$가 성립합니다.
동차좌표와 미분으로 확인하는 과정은 아래 좌표계 설명에 적었습니다.

전체 시간 t를 n조각으로 나누면 Δt=t/n이고, 같은 행렬을 n번 왼쪽에 곱합니다.

$$T(t)\approx\left(I+\frac{At}{n}\right)^n T(0)$$

조각을 무한히 잘게 나눈 극한을 행렬지수라고 부릅니다.

$$\boxed{T(t)=e^{At}T(0)=e^{[\mathcal V_s]t}T(0)}$$

$$e^{At}$$는 각 칸에 e를 취한다는 뜻이 아닙니다.
방금처럼 **같은 속도 행렬의 작은 변화를 계속 곱해 누적한 하나의 변환**입니다.
지금 식에서는 공간 트위스트가 일정하다고 가정했습니다.
트위스트 자체가 시간에 따라 달라지면 그 변화까지 반영해야 합니다.

## 4. 90도 뒤의 손끝까지 계산하기

각속도는 2 rad/s입니다.
90°=π/2 rad만큼 도는 데 걸리는 시간은 다음과 같습니다.

$$t=\frac{\pi/2}{2}=\frac{\pi}{4}\ \mathrm s$$

이 시간 동안 누적한 지수변환을 E라고 하겠습니다.
ω는 z축을 향하고 크기가 2 rad/s로 일정하므로, π/4초 동안 물체의 축 방향도 z축 주위로 2×π/4=π/2, 즉 90° 돌아갑니다.
따라서 E의 왼쪽 위 3×3 방향 블록은 앞 글의 R_z(90°)입니다.
위치 열 p_Δ는 따로 구해야 합니다.
회전축 위 점 q는 움직이지 않으므로 다음 조건을 만족합니다.

$$Rq+p_\Delta=q$$

따라서 p_Δ=q−Rq입니다.
지금은 q=(1,0,0)이고 Rq=(0,1,0)이므로 다음과 같습니다.

$$p_\Delta=(1,-1,0)^T$$

점에서 q를 빼 원점 중심으로 회전하고 q를 다시 더하는 $$R(x-q)+q$$와 같은 계산입니다.
지수변환 전체는 다음과 같습니다.

$$E=e^{[\mathcal V_s]\pi/4}=\begin{bmatrix}0&-1&0&1\\1&0&0&-1\\0&0&1&0\\0&0&0&1\end{bmatrix}$$

초기 손끝 위치에 적용해 보겠습니다.

$$p(t)=R_z(90^\circ)\begin{bmatrix}1.5\\0\\0\end{bmatrix}+\begin{bmatrix}1\\-1\\0\end{bmatrix}=\begin{bmatrix}1\\0.5\\0\end{bmatrix}$$

초기 방향은 I였으므로 최종 방향은 R_z(90°)입니다.
결과적으로 손끝은 축의 오른쪽에서 위쪽으로 이동했고, 방향도 90° 바뀌었습니다.
**트위스트의 속도와 누적 시간에서 최종 위치·방향까지** 구했습니다.

## 5. 스크루 축과 회전량으로 같은 변환 쓰기

각속도 크기 2를 따로 떼면 정규화된 축은 다음과 같습니다.

$$S=(0,0,1,\;0,-1,0)^T,\qquad\mathcal V_s=2S$$

시간 π/4를 곱한 트위스트와 회전량 π/2를 곱한 축은 같습니다.

$$[\mathcal V_s]\frac{\pi}{4}=[S]\frac{\pi}{2}$$

따라서 같은 지수변환을 $$E=e^{[S]\theta}$$라고도 적습니다.
Sθ의 여섯 성분을 이 변환의 지수좌표라고 합니다.
[S]θ는 그 벡터의 4×4 행렬 표현입니다.

S는 어떤 축을 따라 움직이는지, θ는 그 축을 따라 얼마나 움직였는지 담습니다.
회전관절에서는 θ가 회전각이고, 순수 이동관절에서는 이동 거리입니다.

### 이해도 확인

같은 축과 각속도로 π/2초 움직이면 초기 손끝 (1.5,0,0)은 어디에 있을까요?

<details markdown="1"><summary>풀이 보기</summary>

회전량은 2×π/2=π rad, 즉 180°입니다.
축 q=(1,0,0)의 오른쪽으로 0.5 m에 있던 점이 왼쪽으로 0.5 m에 도달합니다.
최종 위치는 (0.5,0,0)이며 방향은 R_z(180°)입니다.

</details>

## 같은 운동을 두 좌표계로 표현하기

| 구분 | Space Twist | Body Twist |
|---|---|---|
| 기준 | 고정된 공간좌표계 | 물체에 붙은 좌표계 |
| 각속도와 선운동 성분 | 공간좌표계 성분 | 물체좌표계 성분 |
| 변환행렬의 미분 | Ṫ=[𝒱_s]T | Ṫ=T[𝒱_b] |

같은 강체 운동을 서로 다른 좌표계에서 표현한 것입니다.
점의 좌표에는 T를 사용하고, 회전·이동 성분을 묶은 6차원 트위스트에는 Adjoint를 사용합니다.

| 집합 | 포함되는 행렬 | 역할 |
|---|---|---|
| SO(3) | 3×3 회전행렬 | 방향 |
| SE(3) | 4×4 강체변환행렬 | 위치와 방향 |
| so(3) | 3×3 반대칭행렬 | 순간 회전 |
| se(3) | 트위스트의 4×4 행렬 표현 | 순간 강체 운동 |

소문자 se(3)의 행렬을 지수로 누적하면 대문자 SE(3)의 변환행렬을 얻습니다.

<details markdown="1"><summary>같은 운동을 Space·Body로 표현하고 Adjoint로 연결하기</summary>

### T의 미분에서 트위스트를 꺼내기

물체에 고정된 점은 b 기준 좌표 x_b가 일정합니다.
s에서 본 좌표만 시간에 따라 바뀝니다.
동차좌표를 $$\bar x=(x^T,1)^T$$라고 줄여 쓰겠습니다.

$$\bar x_s=T\bar x_b$$

x_b가 일정하므로 양변을 시간으로 미분하면 다음과 같습니다.

$$\dot{\bar x}_s=\dot T\bar x_b$$

앞에서 만든 속도 행렬을 써도 같은 점의 속도를 구할 수 있습니다.

$$\dot{\bar x}_s=[\mathcal V_s]\bar x_s=[\mathcal V_s]T\bar x_b$$

어느 고정점에 대해서도 두 결과가 같아야 하므로 다음 관계가 나옵니다.

$$\dot T=[\mathcal V_s]T$$

오른쪽에 $$T^{-1}$$를 곱해 T를 없애면 공간 트위스트를 얻습니다.

$$\boxed{[\mathcal V_s]=\dot T T^{-1}}$$

각 블록이 무엇인지도 계산해 보겠습니다.

$$\dot T=\begin{bmatrix}\dot R&\dot p\\0&0\end{bmatrix},\qquad T^{-1}=\begin{bmatrix}R^T&-R^Tp\\0&1\end{bmatrix}$$

$$\dot T T^{-1}=\begin{bmatrix}\dot RR^T&\dot p-\dot RR^Tp\\0&0\end{bmatrix}$$

오른쪽 위 칸은 $$\dot R(-R^Tp)+\dot p\times1$$입니다.
이를 $$\dot p-\dot RR^Tp$$로 모은 것입니다.
위치의 미분이 ω×p+v_s라는 점 속도식과 비교하면 다음과 같습니다.

$$[\omega_s]=\dot RR^T,\qquad v_s=\dot p-\omega_s\times p$$

90° 회전한 순간에는 $$\dot p=(-1,0,0)^T$$이고, $$\omega_s\times p=(-1,2,0)^T$$입니다.
따라서 $$v_s=(-1,0,0)^T-(-1,2,0)^T=(0,-2,0)^T$$가 됩니다.

**v_s가 손끝 원점의 실제 속도 $$\dot p$$와 일반적으로 다른 이유**가 이 오른쪽 위 블록에 보입니다.

### Body Twist와 Adjoint의 블록

같은 운동을 물체에 붙은 b 기준으로 나타낼 수도 있습니다.
행렬곱의 순서를 바꾸어 계산한 것을 Body Twist로 정의합니다.

$$[\mathcal V_b]=T^{-1}\dot T=\begin{bmatrix}R^T\dot R&R^T\dot p\\0&0\end{bmatrix}$$

따라서 $$\omega_b=R^T\omega_s$$이고 $$v_b=R^T\dot p$$입니다.
v_b는 **물체 원점의 실제 속도를 b의 축 성분으로 적은 값**입니다.
원점의 b 좌표가 0이어도 물체가 공간에서 움직이는 속도는 0일 필요가 없습니다.

앞에서 쓰던 예를 대입하겠습니다.

$$R=R_z(90^\circ),\qquad p=(1,0.5,0)^T$$

$$\omega_s=(0,0,2)^T,\quad v_s=(0,-2,0)^T,\quad\dot p=(-1,0,0)^T$$

$$\omega_b=R^T\omega_s=(0,0,2)^T,\qquad v_b=R^T\dot p=(0,1,0)^T$$

공간에서 −x 방향으로 움직이는 속도가 b의 +y 방향으로 표현된 것입니다.

두 트위스트를 연결하는 6×6 행렬도 직접 만들 수 있습니다.
먼저 각속도는 원점 위치와 관계없이 방향만 바꿉니다.

$$\omega_s=R\omega_b$$

선운동 성분은 $$\dot p=Rv_b$$를 앞의 식에 넣습니다.

$$v_s=Rv_b-\omega_s\times p=p\times(R\omega_b)+Rv_b$$

마지막 등식은 외적 순서를 뒤집으면 부호가 바뀌는 성질을 쓴 것입니다.
두 식에서 ω_b와 v_b의 계수를 모으면 됩니다.

$$\boxed{\mathcal V_s=\underbrace{\begin{bmatrix}R&0\\{[p]}R&R\end{bmatrix}}_{\operatorname{Ad}_T}\mathcal V_b}$$

위 두 블록 R, 0은 각속도의 방향만 바꾸고, 아래 두 블록은 원점 차이의 효과와 실제 속도의 방향 변환을 더합니다.
이 행렬이 수반표현(Adjoint Representation)입니다.


</details>

<details markdown="1"><summary>지수급수에서 cosθ·sinθ가 다시 나오는 계산</summary>

행렬지수는 다음 급수로도 계산할 수 있습니다.

$$e^{A t}=I+A t+\frac{A^2t^2}{2!}+\frac{A^3t^3}{3!}+\cdots$$

A²는 A를 두 번 곱한 행렬이며, 3!=3×2×1입니다.
앞의 작은 행렬곱을 n번 펼친 뒤 n을 무한히 늘리면 이 계수들을 얻습니다.
예를 들어 A²t²의 계수는 n개 중 두 자리를 고르는 n(n−1)/2를 n²으로 나눈 값이며, 극한은 1/2입니다.
세 자리를 고르는 계수는 같은 방식으로 1/3!이 됩니다.

z축 단위 방향의 행렬을 W라고 두겠습니다.

$$W=\begin{bmatrix}0&-1&0\\1&0&0\\0&0&0\end{bmatrix}$$

W²의 첫 칸은 0×0+(−1)×1+0×0=−1입니다.
같은 방법으로 계산하면 x·y 대각선만 −1이고 나머지는 0입니다.

$$W^2=\begin{bmatrix}-1&0&0\\0&-1&0\\0&0&0\end{bmatrix}$$

W³=W²W의 첫 행은 (0,1,0)으로 W의 첫 행과 부호가 반대입니다.
둘째 행도 부호가 반대가 되어 W³=−W이며, 한 번 더 곱하면 W⁴=−W²입니다.
이를 급수에 대입합니다.

$$e^{W\theta}=I+\theta W+\frac{\theta^2}{2}W^2-\frac{\theta^3}{6}W-\frac{\theta^4}{24}W^2+\cdots$$

W가 붙은 항과 W²가 붙은 항을 따로 모읍니다.

$$e^{W\theta}=I+\left(\theta-\frac{\theta^3}{6}+\cdots\right)W+\left(\frac{\theta^2}{2}-\frac{\theta^4}{24}+\cdots\right)W^2$$

사인과 코사인의 라디안 급수는 다음과 같습니다.

$$\sin\theta=\theta-\frac{\theta^3}{6}+\cdots,\quad\cos\theta=1-\frac{\theta^2}{2}+\frac{\theta^4}{24}-\cdots$$

30°=π/6≈0.5236을 사인의 앞 두 항에 넣으면 0.5236−0.0239≈0.4997입니다.
첫 글의 sin30°=0.5에 가까우며, 뒤 항까지 더하면 정확한 값에 수렴합니다.
위의 첫 묶음은 sinθ, 둘째 묶음은 1−cosθ입니다.

$$e^{W\theta}=I+\sin\theta W+(1-\cos\theta)W^2$$

첫 칸은 1−(1−cosθ)=cosθ, 첫 행 둘째 칸은 −sinθ, 둘째 행 첫 칸은 sinθ입니다.

$$e^{W\theta}=\begin{bmatrix}\cos\theta&-\sin\theta&0\\\sin\theta&\cos\theta&0\\0&0&1\end{bmatrix}=R_z(\theta)$$

단위 화살표를 돌려 만든 회전행렬이 각속도를 잘게 쌓은 행렬지수에서도 같은 칸에 나타납니다.

</details>

## 순수 평행이동에서는 어떻게 될까?

회전이 없으면 트위스트의 위 세 성분이 0입니다. 일정한 선속도 v를 시간 t 동안 누적하면 위치 변화는 vt가 됩니다.

$$e^{[\mathcal V]t}=\begin{bmatrix}1&0&0&v_xt\\0&1&0&v_yt\\0&0&1&v_zt\\0&0&0&1\end{bmatrix}$$

x 방향으로 초당 2 m씩 3초 움직이면 2×3=6 m입니다. 회전행렬은 I이고, 변환행렬 위치 열만 (6,0,0)으로 바뀝니다.
행렬지수의 반대 방향으로 변환에서 지수좌표를 구하는 연산은 행렬로그라고 합니다.

참고: [Modern Robotics 트위스트와 수반표현](https://modernrobotics.northwestern.edu/nu-gm-book-resource/3-3-2-twists-part-2-of-2/), [강체운동의 지수좌표](https://modernrobotics.northwestern.edu/nu-gm-book-resource/3-3-3-exponential-coordinates-of-rigid-body-motion/). 2026년 11월 18일 확인.

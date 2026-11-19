---
title: "매니퓰레이터 자코비안: 관절속도에서 손끝 속도까지"
section: physical-ai
sub: dynamics
series_order: 7
ref: manipulator-space-jacobian
date: 2026-11-19 09:38:00 +0900
description: 2관절 로봇팔을 움직이며 위치 자코비안을 직접 만들고, 6×n 공간 자코비안과 각 열의 의미를 같은 예제로 연결합니다.
spacious: true
---

<style>
.content table { width:100%; border-collapse:collapse; margin:14px 0 24px; font-size:17px; line-height:1.5; }
.content th,.content td { border-bottom:1px solid #e6dde0; padding:8px 10px; text-align:left; vertical-align:top; word-break:keep-all; overflow-wrap:normal; }
.content thead { background:#fbf1f4; }
.content figure { margin:18px 0; }
.content figure img { width:100%; height:auto; }
.content .katex-display { overflow-x:auto; overflow-y:hidden; padding:4px 0; }
@media(max-width:560px){.content th,.content td { padding:7px 5px; font-size:16px; }}
</style>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js" onload="renderMathInElement(document.querySelector('.content')||document.body,{delimiters:[{left:'\\[',right:'\\]',display:true},{left:'\\(',right:'\\)',display:false}]})"></script>
<link rel="stylesheet" href="/assets/css/jacobian-demo.css">
<script defer src="/assets/js/jacobian-demo.js"></script>

앞에서 배운 PoE는 관절각을 알면 로봇팔 끝의 위치와 방향을 계산하는 방법이었습니다.
이번에는 **관절이 움직일 때 로봇팔 끝이 어느 방향으로, 얼마나 빠르게 움직이는지** 계산하겠습니다.
그 관계를 나타내는 행렬이 자코비안(Jacobian)입니다.
관절속도와 끝점 속도의 관계를 다루는 이 내용은 **속도운동학(Velocity Kinematics)**에 해당합니다.

## 1. 왜 자코비안을 배울까?

지난 글의 PoE 공식을 다시 보겠습니다.

$$T(\theta)=e^{[S_1]\theta_1}\cdots e^{[S_n]\theta_n}M$$

관절각 $$\theta$$를 넣으면 손끝, 즉 엔드이펙터의 자세 $$T$$가 나옵니다.
여기서 자세는 위치와 방향을 함께 뜻합니다.

그런데 관절 1을 초당 1 rad, 관절 2를 초당 2 rad 회전시키면 손끝은 어떻게 움직일까요?
현재 위치를 아는 것에서 한 단계 더 나아가, **그 위치가 지금 어떻게 변하는지** 알아야 합니다.

| 구분 | PoE | Jacobian |
|---|---|---|
| 입력 | 관절각 θ | 관절각 θ, 관절속도 θ̇ |
| 출력 | 엔드이펙터 자세 T | 엔드이펙터 순간속도 |
| 답하는 질문 | 어디에 있고 어느 방향을 향하는가? | 어떻게 움직이는가? |

각도와 각속도를 구분해 보겠습니다.
관절각이 30°라는 말은 현재 얼마나 돌아가 있는지 나타냅니다.
관절 각속도가 1 rad/s라는 말은 지금 초당 얼마나 빠르게 돌아가는지 나타냅니다.
같은 30° 자세에서도 멈춰 있을 수도 있고, 빠르게 회전하고 있을 수도 있습니다.

## 2. 자코비안의 가장 중요한 공식

먼저 끝점의 위치 같은 작업공간 좌표를 $$\mathbf x$$라고 쓰겠습니다.
관절각 벡터 $$\theta$$와 그 변화율 사이의 관계는 다음과 같습니다.

$$\boxed{\dot{\mathbf x}=J(\theta)\dot\theta}$$

| 기호 | 읽는 법 | 의미 |
|---|---|---|
| x | 엑스 | 엔드이펙터의 위치 등 작업공간 좌표 |
| ẋ | 엑스 닷 | 작업공간 좌표의 시간 변화율 |
| θ | 세타 | 관절각 벡터 |
| θ̇ | 세타 닷 | 관절 각속도 벡터 |
| J(θ) | 제이 오브 세타 | 현재 관절 자세에서의 자코비안 행렬 |

문자 위의 점은 **시간에 대한 미분**을 뜻합니다.

$$\dot x=\frac{dx}{dt},\qquad\dot\theta=\frac{d\theta}{dt}$$

앞의 식은 위치가 시간에 따라 얼마나 빠르게 변하는지, 뒤의 식은 각도가 얼마나 빠르게 변하는지 나타냅니다.
자코비안은 관절속도에서 끝점 속도로 넘어갈 때 곱하는 행렬입니다.
괄호 안에 $$\theta$$를 적는 이유는 **현재 관절각에 따라 그 행렬의 값도 달라지기 때문**입니다.

## 3. 먼저 2관절 로봇팔을 움직여 보기

두 링크의 길이가 각각 **1 m**인 평면 로봇팔을 생각하겠습니다.
첫 관절은 바닥 원점에 고정하고, 두 관절은 모두 +z축을 중심으로 회전합니다.
화면에서 반시계 방향이 양의 회전입니다.

θ₁은 고정된 +x축에서 첫 링크까지의 각도입니다.
θ₂는 첫 링크에 대한 둘째 링크의 상대각입니다.
따라서 둘째 링크가 고정된 +x축과 이루는 각도는 **θ₁+θ₂**입니다.

<div class="jacobian-demo" data-jacobian-demo></div>
<noscript>속도 실험은 JavaScript를 켜면 사용할 수 있습니다. 아래에 같은 계산을 수식과 숫자로 설명합니다.</noscript>

각도를 바꾸면서 세 가지를 비교해 보겠습니다.

1. **1번만:** 첫 관절을 1 rad/s로 회전시키면 두 링크 전체가 영향을 받습니다. 둘째 관절의 상대각은 고정됩니다.
2. **2번만:** 첫 관절은 정지하고, 둘째 링크가 첫 링크 끝을 중심으로 1 rad/s로 회전합니다.
3. **둘 다:** 두 관절을 각각 1 rad/s로 회전시키면 두 관절이 만드는 끝점 속도가 더해집니다.

관절속도를 그대로 두고 각도만 바꿔 보세요.
같은 관절속도인데도 끝점의 이동 방향과 속력이 달라집니다.
이것이 자코비안을 $$J(\theta)$$, 즉 관절각의 함수로 쓰는 이유입니다.

화살표는 **현재 자세에서의 순간속도**를 나타냅니다.
로봇팔 끝이 앞으로 지나갈 경로 전체를 그린 선은 아닙니다.
예를 들어 표시된 θ₁=−15°, θ₂=−105°에서 두 관절을 각각 1 rad/s로 움직이면 끝점 속도는 약 **(1.99, −0.03) m/s**입니다.

## 4. 위치식에서 자코비안을 직접 만들기

### 끝점 위치에 cos와 sin이 들어가는 이유

첫 링크의 길이를 $$L_1$$, 둘째 링크의 길이를 $$L_2$$라고 하겠습니다.
길이 L인 선분이 x축과 θ를 이룰 때 가로 성분은 L cosθ, 세로 성분은 L sinθ입니다.
직각삼각형에서 cosθ는 ‘가로 길이 / 빗변 길이’, sinθ는 ‘세로 길이 / 빗변 길이’이기 때문입니다.

첫 링크의 성분은 $$(L_1\cos\theta_1,L_1\sin\theta_1)$$입니다.
둘째 링크는 첫 링크 끝에서 시작하고, 고정 x축에 대한 각도가 θ₁+θ₂입니다.
두 링크의 가로 성분끼리, 세로 성분끼리 더하면 끝점 위치를 얻습니다.

$$x=L_1\cos\theta_1+L_2\cos(\theta_1+\theta_2)$$

$$y=L_1\sin\theta_1+L_2\sin(\theta_1+\theta_2)$$

이제 **위치식을 시간에 대해 미분**하면 속도식이 됩니다.
계산에는 다음 두 미분 공식을 사용합니다. 각도는 라디안 기준입니다.

$$\frac{d}{d\theta}\sin\theta=\cos\theta,\qquad\frac{d}{d\theta}\cos\theta=-\sin\theta$$

### 시간 미분에서 관절속도가 붙는 이유

θ₁이 시간에 따라 변하므로, cosθ₁을 시간에 대해 미분할 때는 θ₁의 변화율도 곱합니다.
이것을 연쇄법칙(Chain Rule)이라고 합니다.

$$\frac{d}{dt}\cos\theta_1=-\sin\theta_1\,\dot\theta_1$$

θ₁+θ₂가 들어간 항도 같은 방식입니다.
괄호 안 각도의 시간 변화율은 $$\dot\theta_1+\dot\theta_2$$입니다.

$$\frac{d}{dt}\cos(\theta_1+\theta_2)=-\sin(\theta_1+\theta_2)(\dot\theta_1+\dot\theta_2)$$

이를 위치식에 적용하면 다음과 같습니다.

$$\dot x=-L_1\sin\theta_1\,\dot\theta_1-L_2\sin(\theta_1+\theta_2)(\dot\theta_1+\dot\theta_2)$$

$$\dot y=L_1\cos\theta_1\,\dot\theta_1+L_2\cos(\theta_1+\theta_2)(\dot\theta_1+\dot\theta_2)$$

이제 괄호를 풀고, 관절 1의 속도가 붙은 항과 관절 2의 속도가 붙은 항을 각각 모읍니다.

$$\begin{aligned}\dot x={}&[-L_1\sin\theta_1-L_2\sin(\theta_1+\theta_2)]\dot\theta_1\\&+[-L_2\sin(\theta_1+\theta_2)]\dot\theta_2\end{aligned}$$

$$\begin{aligned}\dot y={}&[L_1\cos\theta_1+L_2\cos(\theta_1+\theta_2)]\dot\theta_1\\&+[L_2\cos(\theta_1+\theta_2)]\dot\theta_2\end{aligned}$$

각 관절속도 앞의 계수들을 행렬로 모으면 자코비안이 됩니다.
긴 식을 읽기 쉽게, 아래에서는 $$s_1=\sin\theta_1$$, $$c_1=\cos\theta_1$$, $$s_{12}=\sin(\theta_1+\theta_2)$$, $$c_{12}=\cos(\theta_1+\theta_2)$$라고 줄여 쓰겠습니다.

$$\begin{bmatrix}\dot x\\\dot y\end{bmatrix}=\underbrace{\begin{bmatrix}-L_1s_1-L_2s_{12}&-L_2s_{12}\\L_1c_1+L_2c_{12}&L_2c_{12}\end{bmatrix}}_{J(\theta)}\begin{bmatrix}\dot\theta_1\\\dot\theta_2\end{bmatrix}$$

### 편미분으로 보는 같은 계산

자코비안을 편미분 행렬이라고 부르는 이유도 여기서 연결됩니다.
$$\partial$$는 ‘파셜’이라고 읽으며, 여러 변수 중 하나만 바꾸고 나머지는 고정해서 구한 변화율을 뜻합니다.

$$J(\theta)=\begin{bmatrix}\dfrac{\partial x}{\partial\theta_1}&\dfrac{\partial x}{\partial\theta_2}\\\dfrac{\partial y}{\partial\theta_1}&\dfrac{\partial y}{\partial\theta_2}\end{bmatrix}$$

예를 들어 두 링크가 각각 1 m일 때 x를 θ₁에 대해 편미분하면,

$$\frac{\partial x}{\partial\theta_1}=-\sin\theta_1-\sin(\theta_1+\theta_2)$$

입니다. θ₂를 고정한 채 θ₁만 조금 바꿀 때 끝점의 x좌표가 얼마나 변하는지 나타냅니다.
첫 번째 열에는 관절 1의 영향, 두 번째 열에는 관절 2의 영향이 모여 있습니다.
각 관절만 단위속도로 움직이면 나머지 관절속도는 0이므로, **그 관절에 해당하는 열이 곧 끝점 속도**가 됩니다.

## 5. 숫자를 넣어서 계산하기

두 링크 길이를 모두 1 m로 하고 θ₁=θ₂=0°로 두겠습니다.
로봇팔이 +x 방향으로 곧게 펴져 있고 끝점은 (2,0)입니다.
sin0=0, cos0=1을 넣으면,

$$J=\begin{bmatrix}-1\cdot0-1\cdot0&-1\cdot0\\1\cdot1+1\cdot1&1\cdot1\end{bmatrix}=\begin{bmatrix}0&0\\2&1\end{bmatrix}$$

두 관절이 각각 1 rad/s로 회전한다고 하겠습니다.

$$\begin{bmatrix}\dot x\\\dot y\end{bmatrix}=\begin{bmatrix}0&0\\2&1\end{bmatrix}\begin{bmatrix}1\\1\end{bmatrix}=\begin{bmatrix}0\cdot1+0\cdot1\\2\cdot1+1\cdot1\end{bmatrix}=\begin{bmatrix}0\\3\end{bmatrix}\;\mathrm{m/s}$$

지금 이 순간 끝점은 **위쪽으로 3 m/s**의 속도를 갖습니다.
첫 관절의 회전으로 생기는 2 m/s와 둘째 관절의 회전으로 생기는 1 m/s가 더해진 결과입니다.

1초 뒤 정확히 위로 3 m 이동한다는 뜻으로 읽으면 안 됩니다.
회전이 계속되면 관절각이 바뀌고, 자코비안과 끝점 속도의 방향도 바뀝니다.
[Modern Robotics의 5장 도입 설명](https://modernrobotics.northwestern.edu/nu-gm-book-resource/velocity-kinematics-and-statics/)도 각 열을 해당 관절의 단위속도가 만드는 끝점 속도로 해석합니다.

## 6. 왜 갑자기 6×n 행렬이 나올까?

앞에서는 끝점의 x, y 위치속도 두 개만 계산했습니다.
관절속도 입력이 두 개이고 출력도 두 개이므로 자코비안은 2×2였습니다.

$$\underbrace{\begin{bmatrix}\dot x\\\dot y\end{bmatrix}}_{2\times1}=\underbrace{J(\theta)}_{2\times2}\underbrace{\begin{bmatrix}\dot\theta_1\\\dot\theta_2\end{bmatrix}}_{2\times1}$$

그런데 3차원 강체의 운동에는 회전도 들어 있습니다.
각속도 3성분과 선운동 3성분을 모은 표현이 앞에서 배운 **트위스트**입니다.

$$\mathcal V_s=\begin{bmatrix}\omega_s\\v_s\end{bmatrix}=\begin{bmatrix}\omega_{sx}\\\omega_{sy}\\\omega_{sz}\\v_{sx}\\v_{sy}\\v_{sz}\end{bmatrix}$$

고정된 공간좌표계 기준 트위스트를 관절속도와 연결하면 다음과 같습니다.

$$\boxed{\mathcal V_s=J_s(\theta)\dot\theta}$$

$$J_s$$를 **Space Jacobian(공간 자코비안)**이라고 합니다.
아래첨자 s는 운동을 고정된 공간좌표계에서 표현한다는 뜻입니다.
이제 출력이 6성분이므로, 관절이 두 개인 로봇이라도 행렬에는 여섯 행이 필요합니다.

$$\underbrace{\mathcal V_s}_{6\times1}=\underbrace{J_s}_{6\times2}\underbrace{\dot\theta}_{2\times1}$$

| 로봇팔 | 계산하려는 것 | 자코비안 크기 |
|---|---|---|
| 2관절 | 끝점 x, y 위치속도 | 2×2 |
| 2관절 | 6차원 트위스트 | 6×2 |
| 6관절 | 6차원 트위스트 | 6×6 |
| 7관절 | 6차원 트위스트 | 6×7 |

n은 관절의 개수입니다.
**6×n은 n개의 관절속도를 받아 6개의 운동 성분을 계산한다는 뜻**입니다.
2관절 로봇의 운동을 여섯 성분으로 적어도, 독립적으로 조절할 수 있는 관절속도는 여전히 두 개입니다.

### vₛ는 왜 실제 끝점 속도와 다를까?

여기서 앞의 2×2 행렬에 단순히 행을 붙였다고 생각하면 헷갈립니다.
앞의 출력은 실제 끝점의 위치속도이고, 이번 출력은 공간 트위스트입니다.
트위스트의 아래쪽 성분 $$v_s$$와 끝점 원점의 실제 선속도 $$\dot p$$는 다음 관계를 가집니다.

$$\boxed{\dot p=\omega_s\times p+v_s}$$

p는 공간좌표계에서 적은 끝점 원점의 위치입니다.
‘둘 다 속도인데 왜 다를까?’라는 의문은 막대 하나로 확인할 수 있습니다.

길이 1 m인 막대가 원점을 지나는 +z축을 중심으로 1 rad/s로 회전한다고 하겠습니다.
현재 막대 끝점은 (1,0,0)에 있습니다.

$$\omega_s=\begin{bmatrix}0\\0\\1\end{bmatrix},\quad p=\begin{bmatrix}1\\0\\0\end{bmatrix},\quad v_s=\begin{bmatrix}0\\0\\0\end{bmatrix}$$

회전축이 공간 원점을 지나는 순수 회전이므로 $$v_s=0$$입니다.
그렇다면 막대 끝도 멈춰 있을까요?
끝점 속도식에 그대로 넣어 보겠습니다.

$$\dot p=\begin{bmatrix}0\\0\\1\end{bmatrix}\times\begin{bmatrix}1\\0\\0\end{bmatrix}+\begin{bmatrix}0\\0\\0\end{bmatrix}=\begin{bmatrix}0\\1\\0\end{bmatrix}\;\mathrm{m/s}$$

끝점은 위쪽으로 1 m/s로 움직입니다.
공간 트위스트의 선운동 성분이 0이어도, 회전으로 생기는 $$\omega_s\times p$$가 있기 때문입니다.

| 기호 | 나타내는 것 | 이 막대 예제의 값 |
|---|---|---|
| vₛ | 공간 트위스트의 선운동 성분 | (0,0,0) |
| ṗ | 끝점 원점의 실제 선속도 | (0,1,0) m/s |

## 7. Space Jacobian의 각 열은 무엇일까?

같은 2관절 로봇의 공간 자코비안을 열로 나누어 쓰겠습니다.

$$J_s=\begin{bmatrix}J_{s1}&J_{s2}\end{bmatrix}$$

각 열은 숫자 여섯 개로 이루어진 벡터입니다.
관절 1만 1 rad/s로 움직이면,

$$\mathcal V_s=J_s\begin{bmatrix}1\\0\end{bmatrix}=J_{s1}$$

관절 2만 1 rad/s로 움직이면,

$$\mathcal V_s=J_s\begin{bmatrix}0\\1\end{bmatrix}=J_{s2}$$

두 관절이 함께 움직이면 각 관절의 기여를 더합니다.

$$\mathcal V_s=J_{s1}\dot\theta_1+J_{s2}\dot\theta_2$$

앞의 위치 자코비안에서 각 열이 끝점의 선속도였던 것과 같은 원리입니다.
공간 자코비안에서는 **해당 관절만 단위속도로 움직일 때 생기는 공간 트위스트**가 각 열에 들어갑니다.

### 홈의 S₂와 현재의 Jₛ₂가 달라지는 이유

PoE에서 사용한 $$S_2$$는 모든 관절각이 0인 **홈 자세의 두 번째 관절 스크루 축**입니다.
하지만 첫 관절이 회전하면 둘째 관절의 축 위치도 바뀝니다.
현재 자세에서 둘째 관절만 움직일 때의 운동을 구하려면, 이동한 축을 사용해야 합니다.

두 링크가 각각 1 m인 예제를 그대로 쓰겠습니다.
홈에서 둘째 관절축은 (1,0,0)을 지나며 방향은 +z입니다.
회전관절의 정규화된 스크루 축은 다음 식으로 구합니다.

$$S=\begin{bmatrix}\hat\omega\\-\hat\omega\times q\end{bmatrix}$$

$$\hat\omega$$는 회전축의 단위 방향, q는 축 위의 한 점입니다.
실제 각속도를 넣기 전의 축이므로 위에서는 단위 방향에 모자를 붙였습니다.

홈의 두 번째 축에 대입하면,

$$q_2=\begin{bmatrix}1\\0\\0\end{bmatrix},\qquad-\begin{bmatrix}0\\0\\1\end{bmatrix}\times\begin{bmatrix}1\\0\\0\end{bmatrix}=\begin{bmatrix}0\\-1\\0\end{bmatrix}$$

$$S_2=\begin{bmatrix}0\\0\\1\\0\\-1\\0\end{bmatrix}$$

첫 관절을 +90° 회전시키면 둘째 관절의 위치는 (0,1,0)이 됩니다.
축 방향은 여전히 +z이지만 축이 지나는 점이 달라졌습니다.

$$q'_2=\begin{bmatrix}0\\1\\0\end{bmatrix},\qquad-\begin{bmatrix}0\\0\\1\end{bmatrix}\times\begin{bmatrix}0\\1\\0\end{bmatrix}=\begin{bmatrix}1\\0\\0\end{bmatrix}$$

$$J_{s2}=\begin{bmatrix}0\\0\\1\\1\\0\\0\end{bmatrix}$$

| 구분 | 홈 자세 | 첫 관절 +90° |
|---|---|---|
| 둘째 축이 지나는 점 | (1,0,0) | (0,1,0) |
| 축 방향 | +z | +z |
| 축 표현의 아래 세 성분 | (0,−1,0) | (1,0,0) |

### 여기서 Adjoint가 필요한 이유

홈의 축 $$S_2$$에 첫 관절이 만든 변환을 적용하면 현재의 축 $$J_{s2}$$가 됩니다.
동차변환을 6차원 스크루 축에 적용하는 도구가 **Adjoint(수반표현)**입니다.

$$\boxed{J_{s2}=\operatorname{Ad}_{e^{[S_1]\theta_1}}S_2}$$

이 식은 ‘첫 관절의 움직임으로 둘째 관절축이 어디로 옮겨졌는지 계산한다’고 읽으면 됩니다.
$$e^{[S_1]\theta_1}$$은 앞에서 배운 행렬지수로 만든 첫 관절의 강체변환입니다.
그 변환의 Adjoint를 홈의 두 번째 축에 곱합니다.

첫 관절의 앞에는 축을 옮기는 다른 관절이 없으므로,

$$\boxed{J_{s1}=S_1}$$

입니다. 일반적인 i번째 열에는 그보다 베이스 쪽에 있는 관절 1부터 i−1까지의 변환이 들어갑니다.

$$T_{i-1}=e^{[S_1]\theta_1}\cdots e^{[S_{i-1}]\theta_{i-1}}$$

$$\boxed{J_{si}=\operatorname{Ad}_{T_{i-1}}S_i}$$

각 $$S_i$$는 홈 자세에서 정의한 축이고, 각 $$J_{si}$$는 앞쪽 관절들이 움직인 **현재 축을 공간좌표계 기준으로 표현한 것**입니다.
이것이 [Modern Robotics 5.1.1의 공간 자코비안](https://modernrobotics.northwestern.edu/nu-gm-book-resource/5-1-1-space-jacobian/)을 구성하는 원리입니다.

## 8. 같은 예제로 계산해 보기

링크 길이가 각각 1 m인 로봇팔이 +x 방향으로 일직선으로 펴져 있습니다.
위치 자코비안은 다음과 같습니다.

$$J=\begin{bmatrix}0&0\\2&1\end{bmatrix}$$

관절 1은 정지하고 관절 2만 1 rad/s로 움직인다면, 끝점의 순간속도는 얼마일까요?

$$\dot\theta=\begin{bmatrix}0\\1\end{bmatrix}\;\mathrm{rad/s}$$

<div class="jacobian-quiz" data-jacobian-quiz>
<button type="button" data-answer="correct">(0, 1) m/s</button>
<button type="button" data-answer="wrong">(0, 2) m/s</button>
<button type="button" data-answer="wrong">(1, 0) m/s</button>
<button type="button" data-answer="hint">아직 모르겠습니다</button>
<p class="jacobian-feedback" aria-live="polite"></p>
</div>

<details markdown="1">
<summary>계산과 해석 보기</summary>

$$J\dot\theta=\begin{bmatrix}0&0\\2&1\end{bmatrix}\begin{bmatrix}0\\1\end{bmatrix}=\begin{bmatrix}0\\1\end{bmatrix}\;\mathrm{m/s}$$

관절 1의 속도는 0이므로 첫 번째 열의 기여는 사라집니다.
관절 2의 속도가 1이므로 **두 번째 열이 그대로 끝점 속도**가 됩니다.
현재 끝점은 위쪽으로 1 m/s로 움직입니다.

</details>

자코비안은 현재 자세에서 **관절속도를 끝점의 순간 운동으로 바꾸는 행렬**입니다.
위치속도를 구하면 위치 자코비안, 공간 트위스트를 구하면 공간 자코비안을 사용합니다.
어떤 속도를 출력하는지와 각 열이 어느 관절의 기여인지 함께 읽으면, 2×2에서 6×n으로 바뀌는 이유가 연결됩니다.

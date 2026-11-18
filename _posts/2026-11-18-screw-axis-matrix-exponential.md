---
title: "트위스트 이해: 회전속도에서 점의 속도와 스크루 축까지"
section: physical-ai
sub: dynamics
series_order: 3
ref: screw-axis-matrix-exponential
date: 2026-11-18 14:00:00 +0900
description: 호의 길이와 라디안, 외적의 성분 계산에서 출발해 트위스트의 선운동 성분과 스크루 축을 직접 만듭니다.
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

동차변환행렬 T를 알면 물체가 어디에 있고 어느 방향을 향하는지 알 수 있습니다.
그런데 같은 자세를 지나가는 물체라도 속도는 다를 수 있습니다.
이번에는 **물체가 지금 어떻게 움직이고 있는가**를 표현하겠습니다.

## 1. 위치의 변화와 회전각의 변화

점의 위치가 짧은 시간 동안 얼마나 바뀌었는지를 시간으로 나누면 평균속도가 됩니다.
시간 간격을 아주 작게 잡은 순간속도를 $$\dot x$$라고 적습니다.
위에 붙은 점은 시간에 대한 미분, 즉 시간에 따른 변화율이라는 뜻입니다.

회전각에도 같은 표기를 씁니다.
θ가 회전각이면 $$\dot\theta$$는 각도가 변하는 속도입니다.
각도는 계산에서 라디안(rad)을 사용합니다.

반지름 r인 원에서 이동한 호의 길이를 s라고 하면 라디안의 정의는 다음과 같습니다.

$$\theta=\frac sr\qquad\Rightarrow\qquad s=r\theta$$

한 바퀴의 호 길이는 $$2\pi r$$이므로 한 바퀴는 $$2\pi$$ rad입니다.
따라서 180°는 π rad, 90°는 π/2 rad, 30°는 π/6 rad입니다.
시간에 따라 움직일 때 r이 일정하면 다음과 같습니다.

$$\frac{ds}{dt}=r\dot\theta$$

즉, 회전축에서 멀수록 같은 각속도에서도 더 빠르게 움직입니다.
반지름 0.5 m에서 2 rad/s로 돌면 접선 속도의 크기는 $$0.5\times2=1$$ m/s입니다.

## 2. 회전축과 각속도를 벡터로 적기

회전은 속도 크기뿐 아니라 어느 축을 중심으로 도는지도 필요합니다.
이를 각속도벡터 $$\omega$$로 표현합니다.
단위는 rad/s입니다.

축 방향의 길이 1인 벡터를 $$\hat\omega$$라고 하면 다음과 같습니다.

$$\omega=\hat\omega\dot\theta$$

z축으로 +2 rad/s 회전하는 예에서는 다음과 같습니다.

$$\hat\omega=\begin{bmatrix}0\\0\\1\end{bmatrix},\qquad\omega=\begin{bmatrix}0\\0\\2\end{bmatrix}$$

양의 축과 양의 회전은 오른손 법칙으로 연결됩니다.
오른손 엄지를 +z로 향했을 때 나머지 손가락이 감기는 방향이 양의 회전입니다.
+z에서 내려다보면 반시계 방향입니다.

햇은 이 글에서 단위축을 구분하는 표시입니다.
실제 각속도와 단위축을 같은 값으로 놓지 않도록 구분하겠습니다.

## 3. 외적으로 점의 순간속도 구하기

회전축 위의 점을 q, 속도를 구할 점을 x라고 하겠습니다.
q에서 x까지의 벡터는 $$r=x-q$$입니다.
순수 회전에서 점의 속도는 다음과 같습니다.

$$\boxed{\dot x=\omega\times(x-q)}$$

$$\times$$는 외적입니다.
두 벡터 a와 b의 외적은 다음 성분으로 계산합니다.

$$a\times b=\begin{bmatrix}a_yb_z-a_zb_y\\a_zb_x-a_xb_z\\a_xb_y-a_yb_x\end{bmatrix}$$

그 크기는 $$|a||b|\sin\phi$$이고, 방향은 두 벡터에 수직인 오른손 방향입니다.
φ는 두 벡터 사이의 각도입니다.
$$\omega$$와 r에 적용하면 축에 수직인 거리와 각속도의 곱이 되어, 앞에서 구한 접선 속도의 크기를 만듭니다.

실제 숫자를 넣어 보겠습니다.

$$q=(1,0,0)^T,\qquad x=(1,0.5,0)^T$$

$$r=x-q=(0,0.5,0)^T,\qquad\omega=(0,0,2)^T$$

외적의 첫 성분은 $$0\times0-2\times0.5=-1$$입니다.
둘째 성분은 $$2\times0-0\times0=0$$, 셋째 성분도 0입니다.
따라서 다음과 같습니다.

$$\dot x=(-1,0,0)^T\ \mathrm{m/s}$$

속도의 크기는 1 m/s이고, 방향은 왼쪽입니다.
회전축에서 점까지의 벡터가 위쪽이므로, 반시계로 돌 때 그 순간의 접선 방향이 왼쪽이라는 그림과도 일치합니다.

## 4. v에 마이너스가 붙는 이유

같은 축 주위의 여러 점을 계산할 때, 점의 위치 x와 축의 정보 q를 분리해 두겠습니다.
외적은 벡터의 덧셈에 대해 분배되므로 앞 식을 펼칠 수 있습니다.

$$\dot x=\omega\times x-\omega\times q$$

축에 관한 항을 $$v_s$$라고 부르겠습니다.

$$v_s=-\omega\times q$$

$$\boxed{\dot x=\omega\times x+v_s}$$

예제에서는 $$\omega\times q=(0,2,0)^T$$이므로 $$v_s=(0,-2,0)^T$$입니다.
이제 어느 점 x를 넣어도 같은 ω와 $$v_s$$로 속도를 구할 수 있습니다.

- 축 위 q=(1,0,0): $$(0,2,0)+(0,-2,0)=(0,0,0)$$
- 손끝 x=(1,0.5,0): $$(-1,2,0)+(0,-2,0)=(-1,0,0)$$
- 점 P=(1,1,0): $$(-2,2,0)+(0,-2,0)=(-2,0,0)$$

<figure><img src="/assets/img/robot-kinematics/velocity-field.png" alt="축 위의 속도는 0, 손끝 (1,0.5)의 속도는 왼쪽 1 m/s, 점 P=(1,1)의 속도는 왼쪽 2 m/s입니다."></figure>

마이너스는 축 위의 점에서 두 항이 서로 상쇄되어 속도가 0이 되도록 하는 부호입니다.
$$v_s$$가 음의 y 성분을 가진다고 해서 모든 점이 아래로 움직이는 것은 아닙니다.
실제 점의 속도는 $$\omega\times x+v_s$$ 전체입니다.
$$v_s$$는 이 운동의 속도장을 공간 원점 x=0에서 평가한 값이며, 바닥 원점이 실제로 움직인다는 뜻은 아닙니다.

## 5. 트위스트는 이 두 벡터를 묶은 것입니다

각속도 ω와 선운동 성분 $$v_s$$를 묶으면, 강체의 순간 운동을 여섯 성분으로 표현할 수 있습니다.
이를 공간 트위스트(spatial twist)라고 합니다.

$$\boxed{\mathcal V_s=\begin{bmatrix}\omega\\v_s\end{bmatrix}}$$

예제의 숫자는 다음과 같습니다.

$$\mathcal V_s=\begin{bmatrix}0\\0\\2\\0\\-2\\0\end{bmatrix}$$

위 세 성분은 각속도(rad/s), 아래 세 성분은 선운동 성분(m/s)입니다.
모두 고정된 공간좌표계 s를 기준으로 적었습니다.
트위스트를 알면 각 점의 위치를 넣어 순간속도를 계산할 수 있습니다.

## 6. 회전하면서 축 방향으로 이동한다면

회전에 더해 같은 축 방향으로도 움직이는 경우를 생각하겠습니다.
이를 스크루 운동(screw motion)이라고 합니다.
나사가 회전하면서 앞으로 나아가는 모습과 같은 형태입니다.

<figure><img src="/assets/img/robot-kinematics/screw-motion.svg" alt="일정한 스크루 축을 중심으로 회전하면서 축 방향으로 이동합니다. 축에서 점까지의 거리는 반경 r이고 한 바퀴 이동량은 2πh입니다."></figure>

피치 h를 회전 1 rad당 축 방향 이동량으로 정합니다.
축 방향의 속도벡터는 $$h\hat\omega\dot\theta=h\omega$$입니다.
따라서 순수 회전에서 구한 속도에 이 항을 더합니다.

$$\dot x=\omega\times(x-q)+h\omega$$

이를 x에 관한 항과 나머지로 나누면 다음과 같습니다.

$$\boxed{v_s=-\omega\times q+h\omega}$$

첫 항은 축이 원점에서 떨어진 효과이고, 둘째 항은 축 방향 이동입니다.
h=0이면 순수 회전입니다.
h가 0이 아니면 회전과 축 방향 이동이 함께 있습니다.
음의 h는 양의 회전에서 축 반대 방향으로 이동하는 경우입니다.

각속도 크기가 2 rad/s이고 h=0.1 m/rad라면 축 방향 속도 크기는 0.2 m/s입니다.
한 바퀴가 2π rad이므로 한 바퀴당 이동량은 $$2\pi h\approx0.628$$ m입니다.
이 그림은 일정한 스크루 축을 따라 움직일 때의 예이며, 일반 운동의 순간 축은 시간에 따라 달라질 수 있습니다.

## 7. 운동의 축과 속도를 분리하기

지금 트위스트에는 축의 정보와 현재 속도가 함께 있습니다.
한 관절만 움직이는 예에서는 이 둘을 다음과 같이 분리할 수 있습니다.

$$\mathcal V_s=S\dot\theta$$

위 세 성분을 길이 1인 축 방향으로 정리하면 다음과 같습니다.

$$S=\begin{bmatrix}\hat\omega\\v_S\end{bmatrix},\qquad v_S=-\hat\omega\times q+h\hat\omega$$

이 S를 스크루 축이라고 합니다.
실제 식 $$v_s=-\omega\times q+h\omega$$에 $$\omega=\hat\omega\dot\theta$$를 넣으면 $$v_s=v_S\dot\theta$$가 되어 위의 분리가 나옵니다.

예제의 순수 회전축은 다음과 같습니다.

$$S=\begin{bmatrix}0\\0\\1\\0\\-1\\0\end{bmatrix}$$

회전속도 2를 곱하면 앞의 트위스트가 다시 나옵니다.
정규화는 각성분의 축 방향을 길이 1로 정한다는 뜻입니다.
단위가 서로 다른 여섯 성분 전체를 하나의 길이로 나누는 것은 아닙니다.
여러 관절이 함께 움직이는 손끝 트위스트에서는 각 관절의 기여가 더해지므로, 속도 하나로 나눠 모든 관절축을 얻을 수는 없습니다.

### 순수 평행이동은 어떻게 표현할까?

회전이 없으면 $$\omega=0$$이고, 선속도만 남습니다.
이때 피치는 각속도로 나눈 비율로 정할 수 없으므로 유한 피치 식을 그대로 대입하지 않고 별도로 표현합니다.

$$\mathcal V=\begin{bmatrix}0\\v\end{bmatrix}$$

x 방향 직동관절의 정규화된 축은 $$S=(0,0,0,1,0,0)^T$$입니다.
이때 θ는 회전각이 아니라 이동거리이고, $$\dot\theta$$는 이동속도입니다.
0.2 m/s로 움직이면 실제 트위스트는 $$(0,0,0,0.2,0,0)^T$$입니다.

다음 글에서는 외적의 성분을 행렬에 배치하고, 트위스트가 자세 T의 변화와 어떻게 연결되는지 계산하겠습니다.

### 이해도 확인

+z 방향 순수 회전축이 점 q=(2,0,0)을 지납니다.
정규화된 축의 $$v_S$$는 무엇이며, 0.5 rad/s로 돌 때 실제 $$v_s$$는 얼마일까요?

<details markdown="1"><summary>계산 확인</summary>

$$(0,0,1)^T\times(2,0,0)^T=(0,2,0)^T$$입니다.
따라서 $$v_S=(0,-2,0)^T$$이고, 속도 0.5를 곱하면 $$v_s=(0,-1,0)^T$$ m/s입니다.
각속도는 $$(0,0,0.5)^T$$ rad/s입니다.

</details>

참고: [Modern Robotics 트위스트와 스크루 축](https://modernrobotics.northwestern.edu/nu-gm-book-resource/3-3-2-twists-part-1-of-2/). 2026년 11월 18일 확인.

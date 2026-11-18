---
title: "렌치란? 힘과 모멘트를 하나로 표현하기"
section: physical-ai
sub: nvidia
ref: wrench-force-moment
date: 2026-11-18 14:00:00 +0900
description: 힘만으로는 강체에 작용하는 회전 효과를 모두 표현할 수 없습니다. 작용점, 모멘트, 렌치와 트위스트의 관계를 설명합니다.
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

## 1. 렌치(Wrench)란?

앞에서는 강체가 어떻게 움직이는지 트위스트로 표현했습니다.
이번에는 강체에 어떤 힘이 작용하는지 살펴보겠습니다.

물체를 밀면 이동할 수 있고, 같은 힘이라도 어디를 미느냐에 따라 회전 효과가 달라집니다.
따라서 강체에 가해지는 작용을 표현하려면 힘과 모멘트를 함께 알아야 합니다.
이를 하나의 6차원 벡터로 묶은 것이 렌치입니다.

$$\boxed{\mathcal F=\begin{bmatrix}m\\f\end{bmatrix}}$$

- m: 기준 원점에 대한 모멘트(moment), N·m
- f: 힘(force), N

이 글은 Modern Robotics의 성분 순서인 모멘트 먼저, 힘 나중을 사용합니다.

## 2. 힘이 같아도 모멘트가 달라지는 이유

모멘트는 힘이 기준점 주위에 만드는 회전 효과를 나타냅니다.
원점에서 힘이 작용하는 점까지의 벡터를 r이라고 하면 다음과 같습니다.

$$\boxed{m=r\times f}$$

힘의 크기만이 아니라 작용점까지의 거리와 방향이 함께 들어갑니다.
예를 들어 원점에서 x 방향으로 0.5 m 떨어진 곳에, y 방향으로 2 N의 힘이 작용한다고 하겠습니다.

$$r=\begin{bmatrix}0.5\\0\\0\end{bmatrix}\ \mathrm m,\qquad f=\begin{bmatrix}0\\2\\0\end{bmatrix}\ \mathrm N$$

외적을 계산하면 다음과 같습니다.

$$m=r\times f=\begin{bmatrix}0\\0\\1\end{bmatrix}\ \mathrm{N\cdot m}$$

따라서 이 힘은 +z 방향으로 1 N·m의 모멘트를 만듭니다.
모멘트의 방향은 오른손 법칙으로 정해집니다.
같은 힘이라도 작용선을 기준 원점으로부터 더 멀리 옮기면 모멘트가 달라집니다.

## 3. 여섯 성분으로 힘의 작용을 적기

앞의 모멘트와 힘을 그대로 위아래로 놓으면 렌치가 됩니다.

$$\mathcal F=\begin{bmatrix}0\\0\\1\\0\\2\\0\end{bmatrix}$$

위 세 성분은 회전 효과인 모멘트이고, 아래 세 성분은 힘입니다.
트위스트와 모양은 비슷하지만 담고 있는 물리량이 다릅니다.

| 트위스트 | 렌치 |
|---|---|
| 각속도와 선운동 성분 | 모멘트와 힘 |
| 강체의 순간 운동 | 강체에 가해지는 힘의 작용 |

실제 로봇 손목의 힘·토크 센서를 생각하면 의미가 분명해집니다.
손끝에 물체가 매달려 있을 때, 센서는 물체가 당기는 힘과 센서 원점에 대한 회전 효과를 함께 표현해야 합니다.

## 4. 좌표계가 바뀌면 모멘트도 달라진다

같은 힘도 어느 축과 어느 원점을 기준으로 표현했는지 알아야 합니다.
앞의 숫자를 손끝 좌표계 b에서 표현한 값이라고 하겠습니다.

바닥 기준 s에서 손끝의 위치는 $$(1,0.5,0)$$ m이고, 손끝의 방향은 z축으로 +90° 돌아 있습니다.
손끝 앞에 붙은 점 P의 바닥 좌표는 $$(1,1,0)$$ m입니다.
b의 +y 방향은 s에서 왼쪽을 향하므로, 이 점에 작용하는 힘은 s에서 $$(-2,0,0)^T$$ N입니다.

<figure><img src="/assets/img/robot-kinematics/wrench.png" alt="손끝 앞의 점 P에 왼쪽으로 2 N이 작용합니다. 손끝 원점에 대한 모멘트는 1 N m, 바닥 원점에 대한 모멘트는 2 N m입니다."></figure>

s 원점에 대한 모멘트를 계산하면 다음과 같습니다.

$$m_s=\begin{bmatrix}1\\1\\0\end{bmatrix}\times\begin{bmatrix}-2\\0\\0\end{bmatrix}=\begin{bmatrix}0\\0\\2\end{bmatrix}\ \mathrm{N\cdot m}$$

따라서 같은 렌치의 두 표현은 다음과 같습니다.

$$\mathcal F_b=\begin{bmatrix}0\\0\\1\\0\\2\\0\end{bmatrix},\qquad\mathcal F_s=\begin{bmatrix}0\\0\\2\\-2\\0\\0\end{bmatrix}$$

모멘트가 1에서 2로 바뀐 이유는 회전 효과를 계산한 기준 원점이 달라졌기 때문입니다.
이처럼 렌치의 기준을 바꿀 때는 힘의 방향뿐 아니라 원점 이동도 반영해야 합니다.

일반적인 변환식은 T에서 만든 Adjoint를 사용합니다.

$$\boxed{\mathcal F_s=\operatorname{Ad}_T^{-T}\mathcal F_b}$$

$$^{-T}$$는 역행렬을 구한 뒤 전치한다는 뜻입니다.
트위스트의 변환식 $$\mathcal V_s=\operatorname{Ad}_T\mathcal V_b$$와 구분해서 읽어야 합니다.

## 5. 렌치와 트위스트를 함께 쓰면

힘과 그 힘이 작용하는 점의 속도를 내적하면 순간 일률을 구할 수 있습니다.
일률은 단위 시간당 전달되는 일이며 단위는 W입니다.
렌치와 트위스트를 같은 기준에서 표현하면 다음 식으로 계산할 수 있습니다.

$$\boxed{\mathcal P=\mathcal F^T\mathcal V=m\cdot\omega+f\cdot v}$$

앞의 예에서 점 P가 왼쪽으로 2 m/s 움직이고 힘도 왼쪽으로 2 N 작용한다면 일률은 4 W입니다.
같은 운동의 바디 트위스트가 다음과 같다고 하겠습니다.

$$\mathcal V_b=\begin{bmatrix}0\\0\\2\\0\\1\\0\end{bmatrix}$$

b 기준의 렌치와 곱하면 같은 값이 나옵니다.

$$\mathcal P=1\times2+2\times1=4\ \mathrm W$$

기준 좌표계를 바꾸어도 일률은 같아야 합니다.
이 관계가 렌치와 트위스트의 좌표 변환식을 연결합니다.

지금까지 T로 자세를, 트위스트로 운동을, 렌치로 힘의 작용을 표현했습니다.
다음에는 운동의 표현으로 돌아가겠습니다.
관절축과 관절각을 알고 있을 때 손끝의 T를 어떻게 계산하는지, 행렬지수와 PoE로 연결해 보겠습니다.

참고: [Modern Robotics 렌치](https://modernrobotics.northwestern.edu/nu-gm-book-resource/3-4-wrenches/). 2026년 11월 18일 확인.

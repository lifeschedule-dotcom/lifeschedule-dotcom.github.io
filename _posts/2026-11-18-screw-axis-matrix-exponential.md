---
title: "트위스트와 렌치: 같은 로봇의 운동과 힘을 표현하기"
section: physical-ai
sub: nvidia
ref: screw-axis-matrix-exponential
date: 2026-11-18 14:00:00 +0900
description: 앞에서 구한 손끝 자세를 그대로 두고, 회전축으로부터 속도장을 구한 뒤 힘과 모멘트, 일률까지 연결한다.
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

앞에서 손끝의 방향 R과 위치 p를 구해 동차변환행렬 T를 만들었다.
손끝 원점은 $$(1,0.5,0)$$에 있고, 손끝 앞에 붙은 점 P는 $$(1,1,0)$$에 있었다.

이번에는 첫 관절을 고정한 채 둘째 관절을 회전시켜 보자.
현재 자세는 같지만, 이제는 **어떻게 움직이는가**를 설명해야 한다.
이 운동을 표현하는 것이 트위스트다.
이어서 같은 손끝에 힘이 작용하면 어떤 정보가 필요한지 렌치로 연결한다.

## 각속도만으로 점의 속도를 알 수 있을까

둘째 관절은 점 $$q=(1,0,0)^T$$를 지나는 z축을 중심으로 회전한다.
이 관절이 현재 +2 rad/s로 돈다고 하자.
회전축의 단위방향벡터와 실제 각속도벡터는 구분해서 적는다.

$$\hat\omega=\begin{bmatrix}0\\0\\1\end{bmatrix},\qquad \dot\theta=2\ \mathrm{rad/s}$$

$$\Omega=\hat\omega\dot\theta=\begin{bmatrix}0\\0\\2\end{bmatrix}\ \mathrm{rad/s}$$

햇이 붙은 벡터는 여기서는 길이가 1인 축 방향이다.
얼마나 빠르게 도는가는 $$\dot\theta$$에 들어 있다.
문헌에 따라 햇을 행렬 변환 표기로도 사용하므로, 이 글에서는 외적 행렬을 대괄호로 구분한다.

각속도를 알면 모든 점의 선속도도 같을까?
회전축 위의 점은 정지하고, 축에서 먼 점은 더 빠르게 움직인다.
따라서 각속도에 더해 **축의 위치와 계산할 점의 위치**가 필요하다.
축이 q를 지날 때 점 x의 순간속도는 다음과 같다.

$$\dot x=\Omega\times(x-q)$$

외적 $$\times$$는 회전축과 점까지의 벡터로부터 접선 방향 속도를 구하는 연산이다.
식을 펼치면 회전축의 위치에 관한 항을 따로 모을 수 있다.

$$\dot x=\Omega\times x+v_s$$

$$v_s=-\Omega\times q=\begin{bmatrix}0\\-2\\0\end{bmatrix}\ \mathrm{m/s}$$

여기서 마이너스는 축 위의 점이 정지하도록 만드는 데서 나온다.
x에 q를 넣으면 $$\Omega\times q+v_s=0$$이 된다.

## 트위스트: 운동을 여섯 성분으로 담는다

이제 어느 점을 넣어도 속도를 구할 수 있는 두 벡터가 생겼다.
각속도 $$\Omega$$와 선운동 성분 $$v_s$$다.
이 둘을 위아래로 묶은 6차원 벡터가 공간 트위스트(spatial twist)다.

$$\mathcal V_s=\begin{bmatrix}\Omega\\v_s\end{bmatrix}=\begin{bmatrix}0\\0\\2\\0\\-2\\0\end{bmatrix}$$

위의 세 성분은 각속도(rad/s), 아래의 세 성분은 선운동 성분(m/s)이다.
모두 s 좌표계를 기준으로 표현했다.
트위스트는 강체의 순간 운동을 여섯 성분으로 표현하고, 이 운동에 따른 **각 점의 속도장**을 결정한다.

그렇다면 아래 성분 $$(0,-2,0)$$이 손끝의 속도일까?
손끝의 위치 $$p=(1,0.5,0)$$를 식에 직접 넣어 보자.

$$\dot p=\Omega\times p+v_s$$

$$\dot p=\begin{bmatrix}-1\\2\\0\end{bmatrix}+\begin{bmatrix}0\\-2\\0\end{bmatrix}=\begin{bmatrix}-1\\0\\0\end{bmatrix}\ \mathrm{m/s}$$

손끝은 이 순간 왼쪽으로 1 m/s 움직인다.
점 P는 축에서 1 m 떨어져 있으므로 왼쪽으로 2 m/s 움직인다.

<figure><img src="/assets/img/robot-kinematics/velocity-field.png" alt="q=(1,0)의 회전축은 정지한다. 현재 손끝 (1,0.5)의 속도는 (-1,0), 점 P=(1,1)의 속도는 (-2,0) m/s다."></figure>

$$v_s$$는 x=0에서 평가한 운동의 속도장 값이다.
바닥에 고정한 s 원점이 실제로 움직인다는 뜻은 아니다.
손끝의 실제 속도와 공간 트위스트의 아래 성분을 구분해야 하는 이유가 여기에 있다.

## 앞에서 만든 T와 트위스트의 연결

트위스트는 T와 별개로 붙인 정보일까?
T가 시간에 따라 변하는 방식에서 직접 얻을 수 있다.
이 관계를 행렬곱으로 쓰기 위해 먼저 외적을 행렬로 바꾼다.

$$[\Omega]x=\Omega\times x$$

$$[\Omega]=\begin{bmatrix}0&-2&0\\2&0&0\\0&0&0\end{bmatrix}$$

이처럼 전치하면 부호가 바뀌는 행렬을 반대칭행렬이라고 한다.
트위스트도 같은 방식으로 4×4 행렬로 묶는다.

$$[\mathcal V_s]=\begin{bmatrix}[\Omega]&v_s\\0&0\end{bmatrix}$$

이 행렬의 마지막 행은 네 칸 모두 0이다.
변환행렬 T의 마지막 행 $$(0,0,0,1)$$과 구분하자.
현재 자세 T와 그 시간 변화율 $$\dot T$$ 사이의 관계는 다음과 같다.

$$[\mathcal V_s]=\dot T T^{-1}$$

$$\dot T=[\mathcal V_s]T$$

즉, **T는 현재 자세를, 트위스트는 그 자세가 순간적으로 변하는 방식을 담는다.**
위치 부분만 꺼내면 앞에서 사용한 $$\dot p=\Omega\times p+v_s$$가 그대로 나온다.

## 같은 운동을 손끝 기준으로 표현하면

앞에서는 속도를 s의 축과 원점을 기준으로 표현했다.
같은 운동을 b 기준으로 적을 수도 있다.
이것이 바디 트위스트(body twist)다.

$$[\mathcal V_b]=T^{-1}\dot T$$

바디 트위스트의 아래 성분은 손끝 원점의 실제 속도를 b의 축 방향으로 환산한 값이다.
s에서 왼쪽으로 1 m/s인 속도는 b에서는 +y 방향 1 m/s다.
현재 b의 y축이 왼쪽을 향하기 때문이다.
각속도는 두 좌표계의 z축이 같으므로 여전히 $$(0,0,2)$$다.

$$\mathcal V_b=\begin{bmatrix}0\\0\\2\\0\\1\\0\end{bmatrix}$$

두 트위스트를 연결할 때는 T에서 만든 6×6 행렬인 Adjoint를 사용한다.

$$\mathcal V_s=\operatorname{Ad}_T\mathcal V_b$$

$$\operatorname{Ad}_T=\begin{bmatrix}R&0\\[p]R&R\end{bmatrix}$$

각 블록은 3×3이고, $$[p]$$는 p와의 외적을 수행하는 행렬이다.
같은 운동을 표현하더라도 기준 원점과 축이 바뀌면 여섯 성분의 값도 달라진다.
지금 두 트위스트의 아래 성분이 다른 것은 서로 다른 운동이기 때문이 아니다.

## 렌치: 힘에 모멘트를 더해야 하는 이유

이제 같은 손끝의 점 P에 힘이 작용한다고 하자.
같은 크기의 힘이라도 손끝 원점에 작용할 때와 떨어진 점에 작용할 때는 회전 효과가 다르다.
따라서 힘만 적어서는 강체에 가해진 작용을 모두 표현할 수 없다.
**어느 원점을 기준으로 어떤 모멘트가 생기는지**도 필요하다.

b 기준에서 점 P까지의 벡터와 힘을 다음과 같이 정하자.

$$r_b=\begin{bmatrix}0.5\\0\\0\end{bmatrix}\ \mathrm{m},\qquad f_b=\begin{bmatrix}0\\2\\0\end{bmatrix}\ \mathrm{N}$$

P는 손끝의 +x 방향으로 0.5 m 떨어져 있다.
그 점에 b의 +y 방향으로 2 N의 힘이 작용한다.
이 힘이 b 원점에 만드는 모멘트는 외적으로 구한다.

$$m_b=r_b\times f_b=\begin{bmatrix}0\\0\\1\end{bmatrix}\ \mathrm{N\cdot m}$$

모멘트와 힘을 한 6차원 벡터로 묶으면 렌치(wrench)가 된다.
이 글은 Modern Robotics의 성분 순서를 따른다.

$$\mathcal F_b=\begin{bmatrix}m_b\\f_b\end{bmatrix}=\begin{bmatrix}0\\0\\1\\0\\2\\0\end{bmatrix}$$

<figure><img src="/assets/img/robot-kinematics/wrench.png" alt="손끝 위 0.5 m에 있는 P에 왼쪽으로 2 N의 힘이 작용한다. 손끝 원점에 대한 모멘트는 +z 방향 1 N m이고, 바닥 원점에 대한 모멘트는 +z 방향 2 N m다."></figure>

트위스트는 각속도와 선운동 성분을, 렌치는 모멘트와 힘을 담는다.
두 벡터 모두 여섯 성분이지만 물리적 의미와 단위는 서로 다르다.

## 같은 힘도 기준 원점에 따라 모멘트가 달라진다

b의 +y 방향은 s에서 왼쪽이므로 힘은 $$f_s=(-2,0,0)^T$$ N이다.
이 힘이 작용하는 점 P의 s 좌표는 1편에서 구한 $$(1,1,0)^T$$ m다.
s 원점에 대한 모멘트도 직접 계산할 수 있다.

$$m_s=x_s\times f_s=\begin{bmatrix}0\\0\\2\end{bmatrix}\ \mathrm{N\cdot m}$$

따라서 s에서 표현한 같은 렌치는 다음과 같다.

$$\mathcal F_s=\begin{bmatrix}0\\0\\2\\-2\\0\\0\end{bmatrix}$$

모멘트가 1에서 2로 바뀌었다.
힘 자체가 달라진 것이 아니라 **회전 효과를 계산한 기준 원점이 달라졌기 때문**이다.
일반적인 좌표 변환식은 다음과 같다.

$$\mathcal F_s=\operatorname{Ad}_T^{-T}\mathcal F_b$$

$$^{-T}$$는 역행렬을 구한 뒤 전치한다는 뜻이다.
렌치의 기준 변환은 트위스트와 다른 식을 사용한다.
그 차이는 다음 계산으로 확인할 수 있다.

## 트위스트와 렌치가 만나는 지점

힘과 그 힘이 작용하는 점의 속도를 내적하면 순간 일률, 즉 단위 시간당 하는 일이 나온다.
이 예제에서 P는 왼쪽으로 2 m/s 움직이고, 힘도 왼쪽으로 2 N 작용한다.
따라서 힘이 강체에 전달하는 순간 일률은 4 W다.

렌치와 트위스트를 같은 기준에서 표현하면 이 계산을 여섯 성분의 내적으로 할 수 있다.

$$\mathcal P=\mathcal F^T\mathcal V=m\cdot\Omega+f\cdot v$$

b 기준의 숫자를 넣으면 다음과 같다.

$$\mathcal P=1\times2+2\times1=4\ \mathrm W$$

s 기준에서는 모멘트가 2, 각속도가 2이므로 모멘트 항이 4 W가 된다.
힘과 $$v_s$$의 내적은 0이므로 전체는 역시 4 W다.
기준을 바꿔도 같은 물리량이 나와야 한다는 조건이 렌치의 좌표 변환식을 결정한다.

여기까지 오면 하나의 자세 T에서 출발해, 운동을 나타내는 트위스트와 힘의 작용을 나타내는 렌치까지 연결된다.
운동과 힘을 구분해 표현하는 방법을 익힌 뒤, 다음 글에서는 다시 운동 쪽으로 돌아가 관절각으로 T를 계산한다.
그때 트위스트에서 분리해 낸 스크루 축과 행렬지수가 사용된다.

참고: [Modern Robotics 트위스트](https://modernrobotics.northwestern.edu/nu-gm-book-resource/3-3-2-twists-part-1-of-2/), [트위스트의 행렬 표현과 Adjoint](https://modernrobotics.northwestern.edu/nu-gm-book-resource/3-3-2-twists-part-2-of-2/), [렌치](https://modernrobotics.northwestern.edu/nu-gm-book-resource/3-4-wrenches/). 2026년 11월 18일 확인.

---
title: "동차변환행렬 이해: 원점 차이에서 4×4 행렬까지"
section: physical-ai
sub: nvidia
ref: homogeneous-transform-matrix
date: 2026-11-18 14:00:00 +0900
description: 회전한 성분에 원점 위치를 더하는 식에서 출발해 마지막 행의 1, 역변환과 곱의 순서를 직접 구성합니다.
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

앞 글에서 회전행렬의 각 열이 새 좌표축의 방향이라는 것을 확인했습니다.
그때는 두 좌표계의 원점을 같은 곳에 두었습니다.
이번에는 원점도 서로 다른 곳에 놓겠습니다.
이 원점 차이를 반영하는 과정에서 위치벡터 p와 동차변환행렬 T가 나옵니다.

## 1. 방향을 바꾸는 것만으로 충분할까?

바닥 기준을 s, 물체에 붙은 기준을 b라고 하겠습니다.
b는 s에 대해 z축으로 +90° 돌아 있고, b 원점의 s 좌표는 (1,0.5,0) m입니다.
이 원점 위치를 p라고 적습니다.

$$R_{sb}=\begin{bmatrix}0&-1&0\\1&0&0\\0&0&1\end{bmatrix},\qquad p=\begin{bmatrix}1\\0.5\\0\end{bmatrix}$$

b의 x축으로 0.5 m 앞에 점 P가 있습니다.
b 기준 좌표는 $$x_b=(0.5,0,0)^T$$입니다.
이 좌표는 **b 원점에서 출발해 b의 x축으로 얼마나 가는지**를 뜻합니다.

<figure><img src="/assets/img/robot-kinematics/coordinates.png" alt="b 원점의 위치는 (1,0.5)이고 b의 x축은 위를 향합니다. b의 x축으로 0.5 m 앞의 점 P는 s에서 (1,1)입니다."></figure>

s 기준으로 점 P를 찾으려면 두 일을 해야 합니다.
먼저 b 원점에서 P까지의 벡터를 s의 축 방향으로 환산합니다.
그다음 그 벡터의 출발점을 실제 b 원점 위치로 옮깁니다.

첫 계산은 앞에서 배운 회전행렬로 합니다.

$$R_{sb}x_b=\begin{bmatrix}0\\0.5\\0\end{bmatrix}$$

아직 바닥 원점에서 본 점 P의 위치가 아닙니다.
b 원점에서 P로 향하는 벡터의 성분만 s 기준으로 바꾼 값입니다.
여기에 b 원점의 위치를 더합니다.

$$x_s=\begin{bmatrix}0\\0.5\\0\end{bmatrix}+\begin{bmatrix}1\\0.5\\0\end{bmatrix}=\begin{bmatrix}1\\1\\0\end{bmatrix}$$

이 계산을 일반식으로 쓰면 다음과 같습니다.

$$\boxed{x_s=R_{sb}x_b+p}$$

R은 축 방향의 차이를, p는 원점 위치의 차이를 반영합니다.

## 2. 왜 좌표 뒤에 1을 붙일까?

지금 식에는 행렬곱과 덧셈이 함께 있습니다.
여러 좌표계를 연결할 때 이 둘을 행렬곱 하나로 계산할 수 있으면 편리합니다.
이를 위해 점의 좌표 뒤에 1을 하나 붙입니다.

$$\tilde x_b=\begin{bmatrix}x_b\\1\end{bmatrix}$$

물결표는 이 글에서 마지막 성분을 덧붙인 좌표를 구분하는 표시입니다.
3차원 공간에 새로운 방향을 추가한 것은 아닙니다.
원래 점을 네 성분으로 적는 방식을 동차좌표라고 합니다.

R과 p를 다음처럼 배치해 곱해 보겠습니다.

$$\begin{bmatrix}R&p\\0&1\end{bmatrix}\begin{bmatrix}x_b\\1\end{bmatrix}=\begin{bmatrix}Rx_b+p\times1\\1\end{bmatrix}$$

위쪽은 우리가 원한 $$Rx_b+p$$입니다.
아래쪽은 계속 1입니다.
이 배치가 동차변환행렬입니다.

$$\boxed{T_{sb}=\begin{bmatrix}R_{sb}&p\\0&1\end{bmatrix}}$$

왼쪽 아래 0은 세 칸짜리 행이고, 오른쪽 아래 1은 한 칸입니다.
마지막 행을 펼치면 (0,0,0,1)이 됩니다.

## 3. 4×4의 각 칸은 무슨 계산을 할까?

예제의 숫자를 넣으면 다음과 같습니다.

$$T_{sb}=\begin{bmatrix}0&-1&0&1\\1&0&0&0.5\\0&0&1&0\\0&0&0&1\end{bmatrix}$$

점 P에 이 행렬을 곱하겠습니다.

$$\begin{bmatrix}0&-1&0&1\\1&0&0&0.5\\0&0&1&0\\0&0&0&1\end{bmatrix}\begin{bmatrix}0.5\\0\\0\\1\end{bmatrix}=\begin{bmatrix}1\\1\\0\\1\end{bmatrix}$$

첫 행은 $$0\times0.5-1\times0+0\times0+1\times1=1$$입니다.
둘째 행은 $$1\times0.5+0\times0+0\times0+0.5\times1=1$$입니다.
셋째 행은 z 좌표 0을 그대로 유지합니다.
마지막 행은 $$0+0+0+1\times1=1$$입니다.

따라서 공간의 점은 (1,1,0)입니다.
마지막 성분은 점의 위치 자체가 아니라, 다음 변환에서도 위치 p를 더할 수 있도록 유지되는 값입니다.

방향벡터에는 마지막 성분으로 0을 붙입니다.
예를 들어 두 점 사이의 변위를 구하면 같은 p가 서로 빠져 없어집니다.

$$x_{s,2}-x_{s,1}=R(x_{b,2}-x_{b,1})$$

즉, 방향이나 두 점 사이의 차이에는 원점 위치를 더할 필요가 없습니다.

$$T\begin{bmatrix}d\\0\end{bmatrix}=\begin{bmatrix}Rd\\0\end{bmatrix}$$

마지막 성분 1과 0은 이 차이를 행렬곱 안에서 구분해 줍니다.

## 4. 역변환의 위치는 왜 −Rᵀp일까?

s 좌표를 b 좌표로 바꾸려면 앞의 식을 되돌립니다.

$$x_s=Rx_b+p$$

먼저 p를 뺍니다.

$$x_s-p=Rx_b$$

다음으로 역회전 $$R^T$$를 곱합니다.
앞 글에서 회전행렬은 $$R^TR=I$$임을 확인했습니다.

$$x_b=R^T(x_s-p)=R^Tx_s-R^Tp$$

이 식의 계수를 다시 4×4에 배치하면 역변환이 됩니다.

$$\boxed{T_{sb}^{-1}=T_{bs}=\begin{bmatrix}R^T&-R^Tp\\0&1\end{bmatrix}}$$

따라서 역변환의 위치 부분에는 −p만 넣지 않습니다.
p를 빼는 연산도 새 기준의 축 방향으로 환산해야 해서 $$-R^Tp$$가 됩니다.

예제의 점 (1,1,0)에서 p를 빼면 (0,0.5,0)입니다.
이를 −90°로 돌리면 (0.5,0,0)이 되어 원래 b 좌표로 돌아옵니다.
예제의 역변환 위치 열은 $$-R^Tp=(-0.5,1,0)^T$$입니다.

여기서 독립된 대문자 T는 변환행렬이고, $$R^T$$의 위첨자 T는 전치 표기입니다.
같은 글자를 서로 다른 위치에서 사용하므로 구분해서 읽어야 합니다.

## 5. 좌표계를 이어 곱하는 이유

세 번째 좌표계 c가 있고, b에서 표현한 c의 자세를 $$T_{bc}$$라고 하겠습니다.
c 좌표의 점을 b로 바꾸고, 다시 s로 바꾸면 다음과 같습니다.

$$\tilde x_b=T_{bc}\tilde x_c$$

$$\tilde x_s=T_{sb}\tilde x_b=T_{sb}T_{bc}\tilde x_c$$

따라서 c에서 s로 한 번에 바꾸는 변환은 다음과 같습니다.

$$\boxed{T_{sc}=T_{sb}T_{bc}}$$

열벡터에는 오른쪽 행렬부터 작용합니다.
가운데 b가 이어지는 것은 단순한 표기 요령이 아니라, 실제로 c→b→s 순서로 계산하기 때문입니다.

위치 열이 어떻게 합쳐지는지도 보겠습니다.

앞에서 쓴 p를 아래첨자까지 붙여 $$p_{sb}$$라고 적겠습니다.
$$p_{bc}$$는 b 기준으로 표현한 c 원점의 위치이고, $$p_{sc}$$는 같은 c 원점을 s 기준으로 표현한 위치입니다.
점 좌표식에 b 좌표를 대입하고 괄호를 풀면 다음과 같습니다.

$$x_s=R_{sb}(R_{bc}x_c+p_{bc})+p_{sb}$$

$$x_s=(R_{sb}R_{bc})x_c+(R_{sb}p_{bc}+p_{sb})$$

점 좌표 x_c의 계수가 새 회전행렬이고, 나머지가 새 원점 위치입니다.

$$R_{sc}=R_{sb}R_{bc}$$

$$p_{sc}=R_{sb}p_{bc}+p_{sb}$$

$$p_{bc}$$는 b 축 기준의 위치 차이이므로, s 축 기준으로 먼저 바꾸고 $$p_{sb}$$를 더합니다.
예제에서 $$p_{bc}=(0.5,0,0)$$이라면 s에서의 위치는 (1,1,0)이 됩니다.

## 6. 곱하는 순서가 결과를 바꾸는 이유

T는 점의 좌표 기준을 바꾸거나, 같은 기준에서 점 자체를 움직이는 변환을 표현할 때도 사용합니다.
이번에는 s를 고정하고 점 (1,0,0)을 실제로 움직여 보겠습니다.

x 방향으로 1만큼 이동하는 변환을 D, 원점 중심으로 z축 +90° 회전하는 변환을 Q라고 하겠습니다.

- 이동 후 회전: (1,0) → (2,0) → (0,2)
- 회전 후 이동: (1,0) → (0,1) → (1,1)

<figure><img src="/assets/img/robot-kinematics/order.png" alt="이동 후 회전하면 (0,2), 회전 후 이동하면 (1,1)에 도착합니다. 회전하는 구간은 원점 중심의 원호입니다."></figure>

첫 경우는 $$QD\tilde x$$이고, 둘째 경우는 $$DQ\tilde x$$입니다.
같은 이동과 회전이어도 순서를 바꾸면 도착점이 달라집니다.
따라서 행렬곱의 순서는 계산식의 일부입니다.

R과 p로 이루어진 이런 강체변환행렬의 집합을 $$SE(3)$$라고 합니다.
이제 T는 현재 위치와 방향을 담습니다.
다음에는 위치가 시간에 따라 얼마나 빠르게 바뀌는지, 즉 운동 속도를 표현하겠습니다.

### 이해도 확인

b의 방향이 z축으로 +90° 돌아 있고, b 원점 위치가 s에서 (2,1,0)입니다.
b에서 점 (1,0,0)은 s에서 어디에 있을까요?

<details markdown="1"><summary>계산 확인</summary>

방향을 바꾸면 $$R(1,0,0)^T=(0,1,0)^T$$입니다.
원점 위치 (2,1,0)을 더하면 점은 (2,2,0)에 있습니다.

</details>

참고: [Modern Robotics 동차변환행렬](https://modernrobotics.northwestern.edu/nu-gm-book-resource/3-3-1-homogeneous-transformation-matrices/). 2026년 11월 18일 확인.

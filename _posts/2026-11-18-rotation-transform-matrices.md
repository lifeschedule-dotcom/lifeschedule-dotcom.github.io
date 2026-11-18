---
title: "회전행렬 이해: cosθ·sinθ에서 3×3 행렬까지"
section: physical-ai
sub: dynamics
series_order: 1
ref: rotation-transform-matrices
date: 2026-11-18 14:00:00 +0900
description: 단위벡터를 돌린 가로·세로 성분에서 cosθ와 sinθ를 만들고, 부호와 열 배치까지 따라 회전행렬을 구성합니다.
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


로봇 손끝이 처음에는 오른쪽을 향하고 있다가, 반시계 방향으로 30° 돌아갔다고 하겠습니다.
손끝의 앞쪽과 옆쪽은 이제 어느 방향을 향할까요?
그 두 방향을 숫자로 적어 놓은 것이 회전행렬입니다.

먼저 앞쪽 방향 하나부터 구하겠습니다.
아래 계산을 끝내면 회전행렬의 cosθ, sinθ, −sinθ가 어디에서 나오는지 알 수 있습니다.

## 회전행렬과 변환행렬의 핵심 차이

로보틱스에서 회전행렬과 동차변환행렬의 가장 큰 차이는 **위치 이동을 포함하느냐**입니다.

| 구분 | 회전행렬 R | 동차변환행렬 T |
|---|---|---|
| 역할 | 방향(자세) 표현 | 위치와 방향 표현 |
| 2차원 크기 | 2×2 | 3×3 |
| 3차원 크기 | 3×3 | 4×4 |
| 회전 | 가능 | 가능 |
| 평행이동 | 포함하지 않음 | 포함 |
| 3차원 수학적 집합 | SO(3) | SE(3) |

그리퍼가 어느 방향을 향하는지는 R로, 어디에 있고 어느 방향을 향하는지는 T로 표현합니다.
이 차이를 바탕으로, 먼저 회전행렬의 cosθ·sinθ가 나오는 과정을 보겠습니다.


## 1. 앞쪽 화살표를 30도 돌려 보기

바닥에 고정한 가로 방향을 x, 세로 방향을 y라고 하겠습니다.
오른쪽을 향하는 길이 1의 화살표를 그립니다.
이 화살표는 손끝이 향하는 방향을 나타냅니다.
길이를 1로 정했으므로 방향만 비교하기 편합니다.

처음 화살표의 가로 성분은 1, 세로 성분은 0입니다.
이를 (1,0)이라고 적습니다.
이제 화살표를 반시계 방향으로 30° 돌립니다.

<figure><img src="/assets/img/robot-kinematics/cos-sin-components.png" alt="길이 1 화살표를 30도 돌리면 가로 약0.866, 세로0.5가 됩니다. 화살표가 빗변인 직각삼각형에서 가로는 cosθ, 세로는 sinθ입니다."></figure>

화살표 끝에서 x축으로 수직선을 내리면 직각삼각형이 생깁니다.
그림의 끝점은 오른쪽 약 0.866, 위로 0.5에 있습니다.
이 숫자가 나오는 이유를 보겠습니다.
우리가 구할 값은 이 삼각형의 **가로 길이와 세로 길이**입니다.
빗변은 돌린 화살표이므로 여전히 1입니다.

## 2. 가로는 왜 cosθ, 세로는 왜 sinθ일까?

30°뿐 아니라 다른 각도에도 쓸 수 있도록 회전한 각도를 θ라고 적겠습니다.
θ는 세타라고 읽습니다.
그림의 θ는 x축과 화살표 사이의 각도입니다.
먼저 0°와 90° 사이에서 생각하겠습니다.

직각삼각형에서 코사인(cos)은 ‘각도 옆의 변 ÷ 빗변’입니다.
이 그림에서는 가로 변이 각도 옆의 변입니다.

$$\cos\theta=\frac{\text{가로 길이}}{1}$$

빗변이 1이므로 **가로 길이는 cosθ**입니다.
사인(sin)은 ‘각도 맞은편 변 ÷ 빗변’입니다.
그림의 세로 변이 맞은편 변입니다.

$$\sin\theta=\frac{\text{세로 길이}}{1}$$

따라서 **세로 길이는 sinθ**입니다.
두 값을 가로·세로 순서로 적으면 회전한 앞쪽 화살표를 얻습니다.

$$\boxed{\text{앞쪽 방향}=(\cos\theta,\sin\theta)}$$

30°에서 cos30°는 약 0.866, sin30°는 0.5입니다.
즉 앞쪽 방향은 바닥 기준으로 오른쪽 약 0.866, 위쪽 0.5를 향합니다.

$$\text{앞쪽 방향}=(0.866,0.5)$$

이 숫자는 화살표를 가로와 세로로 나누어 적은 결과입니다.
회전행렬에 삼각함수가 들어가는 출발점은 이 직각삼각형입니다.
화살표 길이가 2라면 가로와 세로도 모두 2배가 됩니다.

## 3. 옆쪽 화살표에는 왜 음수가 붙을까?

손끝에 앞쪽 화살표와 수직인 옆쪽 화살표도 붙여 놓겠습니다.
이것도 길이는 1입니다.
처음에는 앞쪽이 오른쪽 (1,0), 옆쪽이 위쪽 (0,1)을 향합니다.
물체가 돌면 두 화살표가 함께 돌아갑니다.

앞쪽이 30° 돌았다면 옆쪽도 30° 돌아 **왼쪽 위**를 향합니다.
이번에는 옆쪽 화살표 끝에서 원래 y축으로 수평선을 그어 보겠습니다.

<figure><img src="/assets/img/robot-kinematics/rotated-y-components.png" alt="옆쪽 화살표와 원래 y축 사이 각도가 θ입니다. 세로 길이는 cosθ, 왼쪽 가로 길이는 sinθ이므로 성분은 (-sinθ,cosθ)입니다."></figure>

θ가 세로축 옆에 있으므로, 이번에는 세로 변이 각도 옆의 변입니다.
빗변이 1이므로 세로 길이는 cosθ입니다.
가로 변은 각도 맞은편이므로 길이가 sinθ입니다.
그런데 가로 방향은 왼쪽이므로 성분에 음수를 붙입니다.

$$\boxed{\text{옆쪽 방향}=(-\sin\theta,\cos\theta)}$$

30°에서 옆쪽 방향은 (−0.5,0.866)입니다.
앞쪽의 (0.866,0.5)와 함께 기억해 두겠습니다.
하나는 오른쪽 위, 다른 하나는 왼쪽 위이며 두 방향은 수직입니다.

여기서 음수는 ‘왼쪽’이라는 방향에서 나왔습니다.
다른 사분면에서도 가로·세로 방향에 맞게 부호를 정하면, 같은 cos·sin 식을 모든 회전각에 사용할 수 있습니다.

## 4. 두 방향을 왜 행렬의 열로 놓을까?

이제 앞쪽으로 2만큼, 옆쪽으로 1만큼 떨어진 점 P를 생각하겠습니다.
물체에 붙은 두 화살표를 기준으로 한 좌표는 (2,1)입니다.
바닥에서 P가 어디에 있는지 알려면, 방금 구한 두 방향을 그 횟수만큼 더하면 됩니다.
두 기준의 원점은 같은 곳입니다.

$$P=2\times\text{앞쪽 방향}+1\times\text{옆쪽 방향}$$

30°의 숫자를 넣어 가로부터 계산하겠습니다.

$$\text{가로}=2\times0.866+1\times(-0.5)=1.232$$

세로도 같은 방법입니다.

$$\text{세로}=2\times0.5+1\times0.866=1.866$$

따라서 바닥에서 P는 약 (1.232,1.866)에 있습니다.

<figure><img src="/assets/img/robot-kinematics/basis-combination.png" alt="새 x축인 앞쪽으로2, 새 y축인 옆쪽으로1을 이어 더하면 P=(1.232,1.866)에 도착합니다."></figure>

이 계산을 한 번에 적기 위해 두 방향을 세로 열로 나란히 놓습니다.

$$\underbrace{\begin{bmatrix}0.866&-0.5\\0.5&0.866\end{bmatrix}}_{\text{앞쪽 열 / 옆쪽 열}}\begin{bmatrix}2\\1\end{bmatrix}=\begin{bmatrix}1.232\\1.866\end{bmatrix}$$

행렬곱은 첫째 열을 첫 숫자 2배, 둘째 열을 둘째 숫자 1배 하여 더합니다.
첫 행을 읽으면 가로 계산이고, 둘째 행을 읽으면 세로 계산입니다.
**각 열에 방향을 놓는 이유는, 물체 기준 좌표가 그 방향에 곱할 계수이기 때문입니다.**

이제 30°의 숫자 대신 앞서 만든 cosθ·sinθ를 넣겠습니다.

$$\boxed{R(\theta)=\begin{bmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{bmatrix}}$$

첫째 열은 앞쪽 방향, 둘째 열은 옆쪽 방향입니다.
회전행렬은 이 두 방향의 성분을 모아 놓은 행렬입니다.

## 5. 90도와 3차원에서도 같은 계산

θ=90°이면 cos90°=0, sin90°=1입니다.

$$R(90^\circ)=\begin{bmatrix}0&-1\\1&0\end{bmatrix}$$

첫 열 (0,1)은 앞쪽이 위를 향한다는 뜻입니다.
둘째 열 (−1,0)은 옆쪽이 왼쪽을 향한다는 뜻입니다.
(2,1)을 바꾸면 가로는 −1, 세로는 2가 됩니다.

이제 바닥에 수직인 z 방향도 추가하겠습니다.
z축을 중심으로 돌릴 때 z 방향은 그대로이므로, 세 축의 방향을 다음처럼 적습니다.

- 물체의 x축, 앞쪽: (cosθ,sinθ,0)
- 물체의 y축, 옆쪽: (−sinθ,cosθ,0)
- 물체의 z축: (0,0,1)

각 방향을 다시 세로 열로 놓습니다.

$$\boxed{R_z(\theta)=\begin{bmatrix}\cos\theta&-\sin\theta&0\\\sin\theta&\cos\theta&0\\0&0&1\end{bmatrix}}$$

세 축을 각각 세 성분으로 적어서 3×3이 된 것입니다.
앞쪽·옆쪽 계산은 그대로이며, z 성분에는 변화가 없습니다.

바닥 기준의 이름을 s, 물체 기준의 이름을 b라고 하면 이 행렬을 $$R_{sb}$$라고 씁니다.
b의 축 방향을 s 기준으로 적었다는 뜻입니다.
b에서 본 점 좌표 x_b를 바닥 좌표 x_s로 바꾸는 식은 $$x_s=R_{sb}x_b$$입니다.

여기까지 회전행렬로 구한 것은 방향의 차이입니다.
원점도 서로 다른 곳에 있다면, 같은 점을 찾기 위해 원점의 위치를 더해야 합니다.
그 덧셈에서 다음 글의 동차변환행렬이 나옵니다.

### 이해도 확인

90° 돌아간 물체에서 앞쪽으로 0.5 m 떨어진 점은 바닥 기준으로 어디에 있을까요?

<details markdown="1"><summary>풀이 보기</summary>

$$\begin{bmatrix}0&-1\\1&0\end{bmatrix}\begin{bmatrix}0.5\\0\end{bmatrix}=\begin{bmatrix}0\\0.5\end{bmatrix}$$

물체의 앞쪽이 위를 향하므로 바닥 기준 (0,0.5)입니다.
이 값에 다음 글에서 원점의 위치를 더하겠습니다.

</details>

<details markdown="1"><summary>회전행렬의 역행렬·직교성·SO(3) 더 보기</summary>

### 회전행렬이 지켜야 하는 조건

세 열벡터는 좌표축이므로 길이가 1이고 서로 수직입니다.
길이가 1인지는 내적으로 확인할 수 있습니다.
내적은 대응하는 성분끼리 곱한 값을 더하는 연산입니다.
첫 열을 a라고 하면 다음과 같습니다.

$$a\cdot a=\cos^2\theta+\sin^2\theta=1$$

이 등식은 앞의 직각삼각형에서 가로²+세로²=빗변²라는 관계와 같습니다.
첫 열과 둘째 열의 내적도 계산해 보겠습니다.

$$a\cdot b=\cos\theta(-\sin\theta)+\sin\theta\cos\theta=0$$

수직인 두 벡터의 내적은 0입니다.
세 열을 a, b, c라고 하면 전치행렬의 세 행은 각각 a, b, c를 가로로 놓은 것입니다.
따라서 행렬곱의 각 칸은 다음 내적이 됩니다.

$$R^TR=\begin{bmatrix}a\cdot a&a\cdot b&a\cdot c\\b\cdot a&b\cdot b&b\cdot c\\c\cdot a&c\cdot b&c\cdot c\end{bmatrix}$$

자기 자신과의 내적은 길이의 제곱이므로 대각선은 1입니다.
서로 다른 축은 수직이므로 나머지 칸은 0입니다.

$$R^TR=\begin{bmatrix}1&0&0\\0&1&0\\0&0&1\end{bmatrix}=I$$

I는 곱해도 좌표를 그대로 유지하는 단위행렬입니다.
R을 곱한 다음 $$R^T$$를 곱하면 I가 되어 원래 좌표로 돌아가므로, $$R^{-1}=R^T$$입니다.

지금 만든 $$R_z(\theta)$$는 z축을 고정한 회전이라 각도 θ 하나로 정해집니다.
이 경우의 자유도는 1입니다.
반면 임의의 3차원 방향을 표현할 때는 회전축 방향도 바뀔 수 있습니다.
일반적인 3×3 회전행렬에는 길이 조건 세 개와 수직 조건 세 개가 있어, 아홉 성분에 여섯 개의 독립 제약이 걸리고 회전 자유도는 세 개가 됩니다.

직교 조건만으로는 거울반사도 포함됩니다.
예를 들어 z 성분의 부호만 바꾸는 행렬도 세 축의 길이와 수직 조건을 만족합니다.
이를 구분할 때 쓰는 행렬식 det R은 부피의 배율과 좌표축의 오른손·왼손 방향을 판별하는 값입니다.
직교행렬의 행렬식은 +1 또는 −1이며, 순수 회전에는 $$\det R=1$$을 요구합니다.
이 조건을 만족하는 모든 3차원 회전행렬의 집합이 $$SO(3)$$입니다.
z축 회전행렬은 이 집합에 속하는 한 종류입니다.


</details>

## x축과 y축을 중심으로 돌리면

3차원에서는 회전축에 따라 행렬이 달라집니다. x축을 고정하면 x 성분이 유지되고 yz 성분이 회전합니다. y축을 고정하면 y 성분이 유지됩니다.

$$R_x(\theta)=\begin{bmatrix}1&0&0\\0&\cos\theta&-\sin\theta\\0&\sin\theta&\cos\theta\end{bmatrix}$$

$$R_y(\theta)=\begin{bmatrix}\cos\theta&0&\sin\theta\\0&1&0\\-\sin\theta&0&\cos\theta\end{bmatrix}$$

참고: [Modern Robotics 회전행렬의 정의와 성질](https://modernrobotics.northwestern.edu/nu-gm-book-resource/3-2-1-rotation-matrices-part-1-of-2/), [좌표 변환과 회전행렬의 사용](https://modernrobotics.northwestern.edu/nu-gm-book-resource/3-2-1-rotation-matrices-part-2-of-2/). 2026년 11월 18일 확인.

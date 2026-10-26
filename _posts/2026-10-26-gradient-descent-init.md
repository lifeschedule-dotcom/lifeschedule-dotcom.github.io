---
title: "경사하강법 정리: SGD부터 Adam, 가중치 초기화까지"
section: physical-ai
sub: nvidia
ref: gradient-descent-init
date: 2026-10-26 23:42:00 +0900
description: 경사하강법의 업데이트 식과 두 가지 문제, 이를 개선한 SGD·미니배치·모멘텀·RMSProp·Adam, 가중치 초기화(Xavier·He)를 수식과 실험 그림으로 정리했어요.
spacious: true
---

<style>
.content table { width: 100%; border-collapse: collapse; margin: 14px 0 24px; font-size: 17px; line-height: 1.5; }
.content th, .content td { border-bottom: 1px solid #e6dde0; padding: 8px 10px; text-align: left; vertical-align: top; }
.content thead { background: #fbf1f4; }
.content figure { margin: 18px 0; }
.content figure img { width: 100%; height: auto; }
.content td, .content th { word-break: keep-all; overflow-wrap: normal; }
.content .katex-display { overflow-x: auto; overflow-y: hidden; padding: 4px 0; }
@media (max-width: 560px) { .content th, .content td { padding: 7px 5px; font-size: 16px; } }
</style>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js" onload="renderMathInElement(document.querySelector('.content')||document.body,{delimiters:[{left:'\\[',right:'\\]',display:true},{left:'\\(',right:'\\)',display:false}]})"></script>

<div class="wc"><p><b>경사하강법은 왜 알아야 할까요?</b><br>
경사하강법(gradient descent)은 손실함수의 기울기를 이용해 파라미터를 조금씩 고치는 학습 방법이에요.<br>
로지스틱 회귀부터 로봇이 쓰는 딥러닝 모델까지, 학습은 거의 다 경사하강법과 이를 개선한 옵티마이저(Adam 등)로 해요.<br>
학습이 느리거나 엉뚱한 값에서 멈출 때 원인은 대부분 learning rate, 옵티마이저, 가중치 초기화 중 하나라서 이 셋을 알면 고칠 곳이 보여요.</p></div>

경사하강법의 업데이트 식, 기본 경사하강법의 **두 가지 문제**, 이를 개선한 **옵티마이저 다섯 가지**, **가중치 초기화**를 수식과 실험 그림으로 정리했어요.<br>
그림과 숫자는 모두 파이썬(numpy)으로 직접 계산한 값이에요.

<div class="keyline">먼저 업데이트 식 하나에서 시작할게요.</div>

## <span class="no">1</span> 경사하강법의 업데이트 식

경사하강법은 파라미터를 **기울기의 반대 방향으로, learning rate만큼** 옮겨요.

$$\theta_{new} = \theta_{old} - \eta \, \nabla L(\theta_{old})$$

- $$\theta$$ (세타) : 학습할 파라미터예요. 가중치 $$w$$와 편향 $$b$$가 여기 들어가요.
- $$\eta$$ (에타) : learning rate(학습률). 한 번에 얼마나 옮길지 정해요.
- $$\nabla L(\theta)$$ : 손실함수 $$L$$의 기울기(gradient). 손실이 가장 빠르게 커지는 방향이라, 빼 주면 손실이 줄어드는 쪽으로 가요.

**예: $$L(w) = (w-3)^2$$** 이면 기울기는 $$\nabla L(w) = 2(w-3)$$이고, 최솟값은 $$w = 3$$이에요.<br>
$$w = 0$$, $$\eta = 0.1$$에서 한 번 업데이트하면 이렇게 돼요.

$$w_1 = 0 - 0.1 \times 2(0 - 3) = 0.6$$

<figure><img src="/assets/img/ml/gd-lr.png" alt="learning rate 0.1은 26번째에 w가 3 근처로 수렴, 0.01은 60번 뒤에도 2.1, 1.1은 발산하는 경사하강법 경로" width="1846" height="708"></figure>

| learning rate | 처음 네 번 | 결과 |
|---|---|---|
| 0.1 | 0 → 0.6 → 1.08 → 1.46 | 26번째에 3과의 차이 0.01 안 |
| 0.01 | 0 → 0.06 → 0.12 → 0.18 | 60번 뒤에도 2.1 |
| 1.1 | 0 → 6.6 → −1.32 → 8.18 | 발산(diverge) |

learning rate가 너무 작으면 수렴이 느리고, 너무 크면 최솟값을 지나쳐 반대편으로 넘어가다가 점점 멀어져요.

## <span class="no">2</span> 경사하강법의 두 가지 문제

기본 경사하강법은 **업데이트 한 번에 전체 데이터가 필요하고**, **local minimum에 갇힐 수 있어요.**

### 문제 ① 업데이트 한 번에 전체 데이터가 필요해요

손실 $$L$$은 데이터 $$N$$개의 손실 평균이라, 기울기도 $$N$$개를 다 계산해야 나와요.

$$\nabla L(\theta) = \frac{1}{N} \sum_{i=1}^{N} \nabla \ell_i(\theta)$$

$$\ell_i$$는 $$i$$번째 데이터 하나의 손실이에요.<br>
데이터가 10,000개면 기울기 10,000개를 계산해야 업데이트를 1번 해요. 데이터 전체를 한 번 보는 1 epoch 동안 업데이트가 딱 1번이에요.<br>
이 방식을 **batch gradient descent**라고 불러요.

### 문제 ② local minimum에 갇힐 수 있어요

손실함수에 기울기가 0인 지점이 여러 개면, 경사하강법은 **출발점에서 가까운 지점**에서 멈춰요. 기울기가 0이면 업데이트 식에서 빼는 값이 0이 되기 때문이에요.

- **local minimum** : 주변보다는 낮지만 전체에서 가장 낮지는 않은 지점
- **global minimum** : 전체에서 가장 낮은 지점

**예: $$L(w) = w^4 - 4w^2 + w$$** ($$\eta = 0.01$$, 2,000번 업데이트)

<figure><img src="/assets/img/ml/gd-local-minimum.png" alt="w=2에서 출발하면 local minimum(w=1.35, L=−2.62)에, w=−2에서 출발하면 global minimum(w=−1.47, L=−5.44)에 멈추는 경사하강법" width="1375" height="766"></figure>

| 출발점 | 멈춘 곳 | 그곳의 손실 |
|---|---|---|
| w = 2 | w = 1.35 | −2.62 (local minimum) |
| w = −2 | w = −1.47 | −5.44 (global minimum) |

같은 식, 같은 learning rate인데 출발점에 따라 결과가 달라요.<br>
파라미터가 많은 딥러닝에서는 기울기가 0인 **saddle point**(어떤 방향으로는 올라가고 어떤 방향으로는 내려가는 지점) 근처에서 학습이 느려지는 일도 많아요.

## <span class="no">3</span> SGD와 미니배치 경사하강법

문제 ①은 **데이터 일부로 기울기를 어림해서 바로 업데이트**하는 방식으로 풀어요.

**SGD(stochastic gradient descent, 확률적 경사하강법)** : 무작위로 고른 데이터 1개의 기울기로 업데이트해요.

$$\theta \leftarrow \theta - \eta \, \nabla \ell_i(\theta)$$

**미니배치 경사하강법** : 무작위로 고른 $$B$$개(미니배치 $$\mathcal{B}$$)의 기울기 평균으로 업데이트해요.

$$\theta \leftarrow \theta - \eta \, \frac{1}{B} \sum_{i \in \mathcal{B}} \nabla \ell_i(\theta)$$

데이터 10,000개를 1 epoch 동안 볼 때 업데이트 횟수예요.

| 방법 | 한 번에 쓰는 데이터 | 1 epoch 업데이트 |
|---|---|---|
| batch | 10,000개 | 1 |
| SGD | 1개 | 10,000 |
| 미니배치 | 32개 | 313 |

**실험** : $$y = 2x + 1 + \text{noise}$$로 만든 데이터 1,000개에 선형 회귀(손실은 MSE)를 학습시켰어요. 세 방법 모두 $$\eta = 0.1$$, 업데이트 40번이에요.

<figure><img src="/assets/img/ml/gd-batch-sgd.png" alt="같은 40번 업데이트에서 batch는 매끄럽게, 미니배치(32개)는 거의 비슷하게, SGD(1개)는 크게 흔들리며 최솟값 근처로 가는 경로" width="1260" height="985"></figure>

- **batch** : 매번 정확한 기울기라 경로가 매끄러워요. 대신 업데이트마다 1,000개를 계산해요.
- **SGD** : 데이터 1개로 어림한 기울기라 경로가 크게 흔들리고, 최솟값 근처에서도 계속 움직여요. 계산은 1개씩이라 가벼워요.
- **미니배치** : 32개 평균이라 batch와 거의 같은 경로를, 훨씬 적은 계산으로 가요.

GPU는 미니배치를 한꺼번에 계산하기 좋아서 딥러닝은 거의 미니배치로 학습해요. PyTorch의 `torch.optim.SGD`도 실제로는 미니배치와 함께 써요.<br>
SGD·미니배치의 흔들림이 local minimum이나 saddle point를 빠져나오는 데 도움이 되기도 해요.

## <span class="no">4</span> 모멘텀(Momentum)

모멘텀은 **이전 기울기들을 누적한 값 $$v$$** 로 업데이트해요.

$$v_t = \beta \, v_{t-1} + \nabla L(\theta_{t-1})$$

$$\theta_t = \theta_{t-1} - \eta \, v_t$$

- $$v_t$$ : 지금까지 기울기를 누적한 값. 오래된 기울기일수록 $$\beta$$가 여러 번 곱해져 작아져요.
- $$\beta$$ : 누적 비율. 보통 0.9를 써요.

**실험** : 방향마다 기울기 크기가 다른 손실함수에서 비교했어요.

$$L(x, y) = \frac{1}{2}(x^2 + 25y^2)$$

$$y$$ 방향 기울기($$25y$$)가 $$x$$ 방향($$x$$)보다 25배 커요. $$(10, 1)$$에서 출발해 원점과의 거리가 0.1 안에 들어올 때까지 업데이트 횟수를 셌어요.

<figure><img src="/assets/img/ml/gd-momentum-adam.png" alt="경사하강법은 y 방향으로 지그재그하며 64번, 모멘텀은 29번, Adam은 45번 만에 원점 근처에 도착하는 경로" width="1377" height="1479"></figure>

| 방법 | 설정 | 업데이트 횟수 |
|---|---|---|
| 경사하강법 | η = 0.07 | 64 |
| 모멘텀 | η = 0.03, β = 0.9 | 29 |

**경사하강법** 은 기울기가 큰 $$y$$ 방향에서 매번 반대편으로 넘어가요. $$y$$ 값이 1 → −0.75 → 0.56 → −0.42 → 0.32로 부호가 바뀌며 지그재그해요. 기울기가 작은 $$x$$ 방향은 아주 천천히 줄어요.

**모멘텀** 은 $$y$$ 방향 기울기의 부호가 번갈아 바뀌니 $$v$$에서 서로 상쇄되고, $$x$$ 방향 기울기는 부호가 같으니 누적돼서 커져요. 그래서 지그재그가 줄고 $$x$$ 방향으로 빨리 가요.<br>
그림에서 보이듯 누적된 $$v$$ 때문에 최솟값을 지나쳤다가 돌아오는 움직임도 생겨요.

## <span class="no">5</span> RMSProp과 Adam

**RMSProp** 은 파라미터마다 **최근 기울기 제곱의 평균 $$s$$** 로 나눠서 업데이트 크기를 맞춰요.

$$s_t = \rho \, s_{t-1} + (1-\rho) \, \big(\nabla L(\theta_{t-1})\big)^2$$

$$\theta_t = \theta_{t-1} - \frac{\eta}{\sqrt{s_t} + \epsilon} \, \nabla L(\theta_{t-1})$$

제곱과 나눗셈은 파라미터마다 따로 해요. $$\rho$$는 보통 0.9, $$\epsilon$$은 0으로 나누지 않게 더하는 아주 작은 수예요.<br>
기울기가 큰 방향은 $$\sqrt{s_t}$$도 커서 업데이트가 작아지고, 기울기가 작은 방향은 업데이트가 커져요.

**Adam** 은 모멘텀의 누적($$m$$)과 RMSProp의 크기 맞추기($$s$$)를 합친 방법이에요. $$g_t = \nabla L(\theta_{t-1})$$로 쓸게요.

$$m_t = \beta_1 m_{t-1} + (1-\beta_1) \, g_t$$

$$s_t = \beta_2 s_{t-1} + (1-\beta_2) \, g_t^2$$

$$\hat m_t = \frac{m_t}{1-\beta_1^{\,t}}, \qquad \hat s_t = \frac{s_t}{1-\beta_2^{\,t}}$$

$$\theta_t = \theta_{t-1} - \eta \, \frac{\hat m_t}{\sqrt{\hat s_t} + \epsilon}$$

$$\hat m_t$$, $$\hat s_t$$는 bias correction(편향 보정)이에요. $$m$$과 $$s$$가 0에서 시작해서 초반에 작게 치우친 값을 바로잡아요.

**같은 손실함수에서 첫 업데이트** ($$(10, 1)$$에서 기울기는 $$(10, 25)$$)

| 방법 | 첫 업데이트 크기 (x, y) |
|---|---|
| 경사하강법 η = 0.07 | (0.7, 1.75) |
| RMSProp η = 0.3 | (0.95, 0.95) |
| Adam η = 0.3 | (0.3, 0.3) |

경사하강법은 기울기가 큰 $$y$$ 방향으로 $$x$$보다 2.5배 크게 움직여요. RMSProp과 Adam은 두 방향을 **같은 크기로** 움직여요.

그래서 learning rate를 크게 잡을 수 있어요.

| 방법 | learning rate | 결과 |
|---|---|---|
| 경사하강법 | 0.08 | y가 1과 −1을 오가며 수렴하지 않음 |
| 경사하강법 | 0.09 | 발산 |
| RMSProp | 0.3 | 47번 |
| Adam | 0.3 | 45번 |
| Adam | 1.0 | 11번 |

이 손실함수에서 경사하강법은 $$y$$ 방향 때문에 learning rate가 0.08보다 작아야 해요($$1 - 25\eta$$의 절댓값이 1보다 작아야 수렴). Adam은 방향마다 크기를 맞추니 이 제한을 받지 않아요.

딥러닝에서 Adam을 기본으로 많이 쓰는 이유예요.<br>
PyTorch의 Adam 기본값은 $$\eta = 0.001$$, $$(\beta_1, \beta_2) = (0.9, 0.999)$$예요. $$\beta_1$$은 모멘텀 쪽, $$\beta_2$$는 RMSProp 쪽 계수예요. (<a href="https://docs.pytorch.org/docs/2.0/generated/torch.optim.Adam.html">PyTorch 문서</a>, 2026년 10월 27일 기준)

### 다섯 가지 한눈에 보기

| 방법 | 개선한 것 |
|---|---|
| SGD | 데이터 1개로 바로 업데이트해 계산을 줄임 |
| 미니배치 | 작은 묶음 평균으로 계산은 줄이고 흔들림도 줄임 |
| 모멘텀 | 기울기 누적으로 지그재그를 줄임 |
| RMSProp | 파라미터마다 업데이트 크기를 맞춤 |
| Adam | 모멘텀 + RMSProp + bias correction |

## <span class="no">6</span> 가중치 초기화가 중요한 이유

경사하강법은 **초기 가중치에서 출발**해요. 초기값을 잘못 정하면 옵티마이저가 좋아도 학습이 안 돼요.

### 모든 가중치를 같은 값으로 시작하면

은닉층 노드 3개(활성화 함수 tanh)의 가중치를 모두 0.5로 시작하면, 입력 (1, 2)에 대한 출력이 세 노드 모두 $$\tanh(0.5 \times 1 + 0.5 \times 2) = 0.905$$예요.<br>
출력이 같으니 기울기도 같고, 업데이트해도 계속 같은 값이에요. 노드를 100개 두어도 1개와 같아요. 이걸 **symmetry(대칭) 문제**라고 해요.<br>
0으로 시작해도 마찬가지라서, 가중치는 **무작위로** 시작해요.

### 무작위인데 너무 작거나 크면

층 10개(층마다 노드 256개, 활성화 함수 tanh)에 표준정규분포 난수 1,000개(평균 0, 표준편차 1, 256차원)를 통과시키며, 층마다 출력의 표준편차를 쟀어요.

| 가중치 표준편차 | 1층 | 4층 | 10층 |
|---|---|---|---|
| 0.01 | 0.157 | 0.0006 | 거의 0 |
| 1 | 0.97 | 0.97 | 0.97 |

<figure><img src="/assets/img/ml/init-tanh-hist.png" alt="10층 tanh 출력 분포: 표준편차 0.01은 전부 0 근처, 1은 −1과 1에 몰림, Xavier는 0을 중심으로 고르게 퍼짐" width="1846" height="691"></figure>

- **너무 작으면** 층을 지날 때마다 출력이 줄어서 10층에서는 거의 0이에요. 역전파 때 기울기도 같이 작아져서 앞쪽 층이 거의 학습되지 않아요. 이걸 **vanishing gradient(기울기 소실)** 라고 해요.
- **너무 크면** 출력이 tanh의 양 끝(−1, 1)에 몰려요. 10층 출력의 87%가 절댓값 0.99를 넘었어요. tanh는 양 끝에서 기울기가 거의 0이라(**saturation, 포화**) 역시 학습이 멈춰요.

## <span class="no">7</span> Xavier와 He 초기화

층의 입력 개수 $$n_{in}$$에 맞춰 가중치의 분산을 정하면 층을 지나도 출력 크기가 유지돼요.

**Xavier 초기화** (Glorot 초기화) : 시그모이드·tanh용

$$W \sim \mathcal{N}\!\left(0, \ \frac{1}{n_{in}}\right)$$

입력과 출력 개수가 다르면 분산을 $$\frac{2}{n_{in} + n_{out}}$$으로 쓰기도 해요.

**He 초기화** (Kaiming 초기화) : ReLU용

$$W \sim \mathcal{N}\!\left(0, \ \frac{2}{n_{in}}\right)$$

$$\mathcal{N}(0, \sigma^2)$$은 평균 0, 분산 $$\sigma^2$$인 정규분포예요. 표준편차로 쓰면 Xavier는 $$1/\sqrt{n_{in}}$$, He는 $$\sqrt{2/n_{in}}$$이에요.<br>
ReLU는 음수를 0으로 만들어 출력의 분산이 절반쯤으로 줄어요. He 초기화는 분산을 2배로 시작해서 그만큼을 보충해요.

**ReLU 층 10개**로 같은 실험을 했어요.

<figure><img src="/assets/img/ml/init-relu-xavier-he.png" alt="ReLU 10층에서 Xavier 초기화는 출력 표준편차가 0.58에서 0.03으로 줄고, He 초기화는 0.8 안팎으로 유지되는 그래프" width="1321" height="737"></figure>

| 초기화 | 1층 | 4층 | 7층 | 10층 |
|---|---|---|---|---|
| Xavier | 0.58 | 0.19 | 0.07 | 0.03 |
| He | 0.83 | 0.82 | 0.83 | 0.91 |

ReLU에 Xavier를 쓰면 층을 지날 때마다 출력이 줄어요. He를 쓰면 10층까지 비슷하게 유지돼요.<br>
그래서 **tanh·시그모이드에는 Xavier, ReLU에는 He** 를 짝으로 써요.

<div class="done"><div class="done-t">🎉 학습이 이상하면 learning rate, 옵티마이저, 가중치 초기화 순서로 확인해 보세요!</div></div>

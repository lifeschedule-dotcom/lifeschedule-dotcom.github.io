---
title: "Gradient Descent Explained: From SGD to Adam and Weight Initialization"
section: physical-ai
sub: nvidia
ref: gradient-descent-init
date: 2026-10-26 23:42:00 +0900
description: The gradient descent update rule and its two problems, the optimizers that fix them (SGD, mini-batch, momentum, RMSProp, Adam), and weight initialization (Xavier, He), with formulas and experiment plots.
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

<div class="wc"><p><b>Why learn gradient descent?</b><br>
Gradient descent is the training method that nudges parameters step by step using the gradient of the loss function.<br>
From logistic regression to the deep learning models robots use, almost all training is done with gradient descent and the optimizers built on it (like Adam).<br>
When training is slow or stalls at the wrong value, the cause is usually the learning rate, the optimizer or the weight initialization, so knowing these three tells you where to look.</p></div>

This post covers the gradient descent update rule, **two problems** with plain gradient descent, **five optimizers** that address them, and **weight initialization**, with formulas and experiment plots.<br>
Every figure and number was computed in Python (numpy).

<div class="keyline">Let's start with a single update rule.</div>

## <span class="no">1</span> The gradient descent update rule

Gradient descent moves the parameters **against the gradient, by the learning rate**.

$$\theta_{new} = \theta_{old} - \eta \, \nabla L(\theta_{old})$$

- $$\theta$$ (theta) : the parameters being learned, such as the weight $$w$$ and bias $$b$$.
- $$\eta$$ (eta) : the learning rate, which sets how far each update moves.
- $$\nabla L(\theta)$$ : the gradient of the loss $$L$$. It points where the loss grows fastest, so subtracting it moves toward lower loss.

**Example: $$L(w) = (w-3)^2$$** has gradient $$\nabla L(w) = 2(w-3)$$ and its minimum at $$w = 3$$.<br>
One update from $$w = 0$$ with $$\eta = 0.1$$ gives:

$$w_1 = 0 - 0.1 \times 2(0 - 3) = 0.6$$

<figure><img src="/assets/img/ml/en/gd-lr.png" alt="Gradient descent paths: learning rate 0.1 reaches w≈3 at update 26, 0.01 is still at 2.1 after 60 updates, 1.1 diverges" width="1844" height="706"></figure>

| learning rate | first four values | result |
|---|---|---|
| 0.1 | 0 → 0.6 → 1.08 → 1.46 | within 0.01 of 3 at update 26 |
| 0.01 | 0 → 0.06 → 0.12 → 0.18 | still 2.1 after 60 updates |
| 1.1 | 0 → 6.6 → −1.32 → 8.18 | diverges |

Too small a learning rate converges slowly. Too large a learning rate overshoots the minimum, lands on the other side, and drifts further and further away.

## <span class="no">2</span> Two problems with gradient descent

Plain gradient descent **needs the whole dataset for every update** and **can get stuck in a local minimum**.

### Problem 1: every update needs the whole dataset

The loss $$L$$ is the average loss over $$N$$ data points, so its gradient also needs all $$N$$ of them.

$$\nabla L(\theta) = \frac{1}{N} \sum_{i=1}^{N} \nabla \ell_i(\theta)$$

$$\ell_i$$ is the loss on the $$i$$-th data point.<br>
With 10,000 data points you compute 10,000 gradients to make a single update. In one epoch (one pass over the data) you update exactly once.<br>
This is called **batch gradient descent**.

### Problem 2: it can get stuck in a local minimum

If the loss has several points where the gradient is 0, gradient descent stops at **the first zero-gradient point it reaches on the way down from the start**. Once the gradient is 0, the update rule subtracts nothing.

- **local minimum** : lower than its surroundings, but not the lowest point overall
- **global minimum** : the lowest point overall

**Example: $$L(w) = w^4 - 4w^2 + w$$** ($$\eta = 0.01$$, 2,000 updates)

<figure><img src="/assets/img/ml/en/gd-local-minimum.png" alt="Gradient descent starting at w=2 stops at a local minimum (w=1.35, L=−2.62); starting at w=−2 it stops at the global minimum (w=−1.47, L=−5.44)" width="1375" height="766"></figure>

| start | stops at | loss there |
|---|---|---|
| w = 2 | w = 1.35 | −2.62 (local minimum) |
| w = −2 | w = −1.47 | −5.44 (global minimum) |

Same function, same learning rate, different result depending on the starting point.<br>
In deep learning, with many parameters, training also often slows down near **saddle points**: zero-gradient points that go up in some directions and down in others.

## <span class="no">3</span> SGD and mini-batch gradient descent

Problem 1 is solved by **estimating the gradient from part of the data and updating right away**.

**SGD (stochastic gradient descent)** : update with the gradient of one randomly chosen data point.

$$\theta \leftarrow \theta - \eta \, \nabla \ell_i(\theta)$$

**Mini-batch gradient descent** : update with the average gradient of $$B$$ randomly chosen points (a mini-batch $$\mathcal{B}$$).

$$\theta \leftarrow \theta - \eta \, \frac{1}{B} \sum_{i \in \mathcal{B}} \nabla \ell_i(\theta)$$

Updates per epoch with 10,000 data points:

| method | data per update | updates per epoch |
|---|---|---|
| batch | 10,000 | 1 |
| SGD | 1 | 10,000 |
| mini-batch | 32 | 313 |

**Experiment** : linear regression (MSE loss) on 1,000 points generated by $$y = 2x + 1 + \text{noise}$$. All three methods use $$\eta = 0.1$$ and 40 updates. $$x$$ and the noise are standard normal, and every run starts at $$(w, b) = (-2, -2)$$. SGD and mini-batch pick data at random, so their paths differ a little from run to run.

<figure><img src="/assets/img/ml/en/gd-batch-sgd.png" alt="Over the same 40 updates, batch moves smoothly, mini-batch (32) follows almost the same path, and SGD (1) wobbles heavily on its way to the minimum" width="1260" height="983"></figure>

- **batch** : the exact gradient every time, so the path is smooth. But each update costs 1,000 computations.
- **SGD** : a gradient estimated from one point, so the path wobbles a lot and keeps moving even near the minimum. Each update is very cheap.
- **mini-batch** : an average of 32 points, so it follows almost the same path as batch for far less computation.

GPUs are good at computing a mini-batch all at once, so deep learning almost always trains with mini-batches. PyTorch's `torch.optim.SGD` is in practice used with mini-batches too.<br>
The wobble of SGD and mini-batches can also help escape local minima and saddle points.

## <span class="no">4</span> Momentum

Momentum updates with **$$v$$, an accumulation of past gradients**.

$$v_t = \beta \, v_{t-1} + \nabla L(\theta_{t-1})$$

$$\theta_t = \theta_{t-1} - \eta \, v_t$$

- $$v_t$$ : the accumulated gradient so far. Older gradients get multiplied by $$\beta$$ more times, so they shrink.
- $$\beta$$ : the accumulation rate, usually 0.9.

**Experiment** : a loss whose gradient size differs a lot by direction.

$$L(x, y) = \frac{1}{2}(x^2 + 100\,y^2)$$

At the same coordinate value, the gradient in $$y$$ ($$100y$$) is 100 times the gradient in $$x$$ ($$x$$). Starting from $$(10, 1)$$, I counted the update after which the distance to the origin **drops below 0.1 and stays there**.

<figure><img src="/assets/img/ml/en/gd-momentum.png" alt="Gradient descent (η=0.018) zigzags in y and crawls in x, staying near the origin from update 254; momentum (η=0.02, β=0.9) moves quickly in x and stays from update 79" width="1402" height="1075"></figure>

| method | settings | updates |
|---|---|---|
| gradient descent | η = 0.018 | 254 |
| momentum | η = 0.02, β = 0.9 | 79 |

**Gradient descent** can't use a bigger learning rate. Its update in $$y$$ is $$y \leftarrow (1 - 100\eta)\,y$$, so for $$\eta \ge 0.02$$, $$y$$ stops shrinking. With $$\eta = 0.018$$, $$y$$ zigzags with alternating sign: 1 → −0.8 → 0.64 → −0.51. And at such a small learning rate, the gentle $$x$$ direction shrinks by only 1.8% per update, so it takes a long time.

**Momentum** : for the first stretch, the gradient in $$x$$ keeps the same sign, so it accumulates in $$v$$ and grows. That's why, at a similar learning rate, momentum moves much faster in $$x$$. In this experiment it was about 3 times faster.<br>
The oscillation in $$y$$ doesn't disappear right away. As the figure shows, the accumulated $$v$$ also makes it overshoot the minimum and come back.

## <span class="no">5</span> RMSProp and Adam

**RMSProp** keeps, for each parameter, **the recent average of squared gradients $$s$$**, and divides by its square root $$\sqrt{s}$$ to even out update sizes.

$$s_t = \rho \, s_{t-1} + (1-\rho) \, \big(\nabla L(\theta_{t-1})\big)^2$$

$$\theta_t = \theta_{t-1} - \frac{\eta}{\sqrt{s_t} + \epsilon} \, \nabla L(\theta_{t-1})$$

The squaring and division are done per parameter. $$\rho$$ is usually 0.9, and $$\epsilon$$ is a tiny number ($$10^{-8}$$ here) that prevents division by zero.<br>
Where the gradient is large, $$\sqrt{s_t}$$ is large too and the update shrinks. Where the gradient is small, the update grows.

**Adam** combines momentum's accumulation ($$m$$) with RMSProp's size equalization ($$s$$). Write $$g_t = \nabla L(\theta_{t-1})$$.

$$m_t = \beta_1 m_{t-1} + (1-\beta_1) \, g_t$$

$$s_t = \beta_2 s_{t-1} + (1-\beta_2) \, g_t^2$$

$$\hat m_t = \frac{m_t}{1-\beta_1^{\,t}}, \qquad \hat s_t = \frac{s_t}{1-\beta_2^{\,t}}$$

$$\theta_t = \theta_{t-1} - \eta \, \frac{\hat m_t}{\sqrt{\hat s_t} + \epsilon}$$

$$\hat m_t$$ and $$\hat s_t$$ are the bias correction. Because $$m$$ and $$s$$ start at 0, they're biased low early on, and this fixes that.

**First update on the same loss** (the gradient at $$(10, 1)$$ is $$(10, 100)$$)

| method | first update size (x, y) |
|---|---|
| gradient descent η = 0.018 | (0.18, 1.8) |
| RMSProp η = 0.05 | (0.16, 0.16) |
| Adam η = 0.1 | (0.1, 0.1) |

Gradient descent moves 10 times more in the steep $$y$$ direction than in $$x$$. RMSProp and Adam move **the same amount** in both directions regardless of gradient size. The update size is set by the learning rate, not by the size of the gradient.

<figure><img src="/assets/img/ml/en/gd-convergence.png" alt="Distance to the minimum over 400 updates: momentum drops below 0.1 first, then Adam η=0.3, Adam η=0.1 and gradient descent" width="1469" height="971"></figure>

| method | learning rate | result (within 400 updates) |
|---|---|---|
| gradient descent | 0.018 | 254 |
| gradient descent | 0.02 | y bounces between 1 and −1, no convergence |
| momentum | 0.02 | 79 |
| Adam | 0.1 | 213 |
| Adam | 0.3 | 83 |

Gradient descent diverges if the learning rate goes above 0.02. Adam doesn't diverge even at 0.3, 15 times larger, and arrives in 83 updates.<br>
Here the gradient is exact, so Adam eventually converges to 0 as well. But when gradients jitter from update to update, as in mini-batch training, RMSProp and Adam keep moving by roughly the learning rate even near the minimum, so they can circle around it. That's why real training often pairs them with a learning rate scheduler that gradually lowers the learning rate.

On this simple loss, momentum was the fastest. Adam's strength is that it evens out update sizes even when gradient magnitudes differ wildly between parameters, so a single learning rate can steer all of them. That's a big reason Adam is the default choice in deep learning.<br>
PyTorch's Adam defaults are $$\eta = 0.001$$ and $$(\beta_1, \beta_2) = (0.9, 0.999)$$. $$\beta_1$$ is the momentum coefficient and $$\beta_2$$ is the RMSProp coefficient. (<a href="https://docs.pytorch.org/docs/stable/generated/torch.optim.Adam.html">PyTorch docs</a>, as of October 27, 2026)

### The five at a glance

| method | what it improves |
|---|---|
| SGD | updates from one data point to cut computation |
| mini-batch | averages a small batch: less computation, less wobble |
| momentum | accumulates gradients to move fast in consistent directions |
| RMSProp | evens out update sizes per parameter |
| Adam | momentum + RMSProp + bias correction |

## <span class="no">6</span> Why weight initialization matters

Gradient descent **starts from the initial weights**. With bad initial values, even a good optimizer won't train.

### If every weight starts at the same value

Take 3 hidden nodes (tanh activation) with all weights set to 0.5. For input (1, 2), all three nodes output $$\tanh(0.5 \times 1 + 0.5 \times 2) = 0.905$$.<br>
Same outputs mean same gradients, so they stay identical after every update. 100 nodes behave like 1. This is the **symmetry problem**.<br>
Starting at 0 has the same issue, which is why weights start **at random**.

### Random, but too small or too large

I passed 1,000 standard-normal samples (mean 0, standard deviation 1, 256 dimensions) through 10 layers (256 nodes each, tanh activation) and measured the standard deviation of each layer's output. The weights are random, so the numbers vary slightly from run to run.

| weight std | layer 1 | layer 4 | layer 10 |
|---|---|---|---|
| 0.01 | 0.157 | 0.0006 | almost 0 |
| 1 | 0.97 | 0.97 | 0.97 |

<figure><img src="/assets/img/ml/en/init-tanh-hist.png" alt="Layer-10 tanh outputs: std 0.01 puts everything near 0, std 1 piles up at −1 and 1, Xavier spreads around 0" width="1844" height="688"></figure>

- **Too small** : outputs shrink at every layer and are almost 0 by layer 10. During backpropagation the gradients shrink too, so the early layers barely learn. This is the **vanishing gradient** problem.
- **Too large** : outputs pile up at the ends of tanh (−1 and 1). About 86% of layer-10 outputs had an absolute value above 0.99. tanh's gradient is almost 0 at its ends (**saturation**), so learning stalls here too.

## <span class="no">7</span> Xavier and He initialization

Setting the weight variance based on a layer's number of inputs $$n_{in}$$ keeps the output scale steady from layer to layer.

**Xavier initialization** (Glorot) : for sigmoid and tanh

$$W \sim \mathcal{N}\!\left(0, \ \frac{1}{n_{in}}\right)$$

When input and output sizes differ, the variance $$\frac{2}{n_{in} + n_{out}}$$ is also used.

**He initialization** (Kaiming) : for ReLU

$$W \sim \mathcal{N}\!\left(0, \ \frac{2}{n_{in}}\right)$$

$$\mathcal{N}(0, \sigma^2)$$ is a normal distribution with mean 0 and variance $$\sigma^2$$. As standard deviations, Xavier is $$1/\sqrt{n_{in}}$$ and He is $$\sqrt{2/n_{in}}$$.<br>
ReLU zeroes out negative values, so the mean square of its output is half that of its input. He initialization doubles the weight variance to make up for it.

The same experiment with **10 ReLU layers**:

<figure><img src="/assets/img/ml/en/init-relu-xavier-he.png" alt="With 10 ReLU layers, Xavier initialization shrinks the output std from 0.58 to 0.03, while He initialization keeps it around 0.8" width="1321" height="737"></figure>

| init | layer 1 | layer 4 | layer 7 | layer 10 |
|---|---|---|---|---|
| Xavier | 0.58 | 0.19 | 0.07 | 0.03 |
| He | 0.83 | 0.82 | 0.83 | 0.91 |

With ReLU, Xavier lets the output shrink at every layer. He keeps it roughly steady through layer 10.<br>
So the pairing to remember is **Xavier for tanh and sigmoid, He for ReLU**.

<div class="done"><div class="done-t">🎉 When training misbehaves, check the learning rate, then the optimizer, then the weight initialization!</div></div>

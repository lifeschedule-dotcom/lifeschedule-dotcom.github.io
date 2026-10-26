---
title: "Machine Learning Concepts in Numbers: KNN, F1, Logistic Regression"
section: physical-ai
sub: nvidia
ref: ml-concepts
date: 2026-10-26 23:41:00 +0900
description: Supervised vs. unsupervised learning, distance metrics, normalization vs. standardization, KNN, evaluation metrics, logistic regression and multicollinearity, explained with formulas, figures and small numeric examples.
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

<div class="wc"><p><b>Why do these concepts matter?</b><br>
Machine learning goes in three steps: compare data, train a model, and evaluate the result.<br>
Distances and normalization are how data gets compared, logistic regression is the basic model that classifies with probabilities, and metrics like F1 tell you whether the result is any good.<br>
The same basics carry straight over into deep learning, so getting them right now makes everything after easier.</p></div>

Here are **seven** machine learning concepts that are easy to mix up, explained with formulas, figures and small numeric examples.<br>
Every figure and number was computed in Python (numpy).

<div class="keyline">First, a map of machine learning as a whole.</div>

## <span class="no">1</span> Supervised vs. unsupervised learning

Machine learning splits into supervised and unsupervised learning depending on **whether the data has labels (answers)**.

<figure><img src="/assets/img/ml/en/ml-map.png" alt="Machine learning map: supervised learning has classification (KNN, logistic regression, decision tree, random forest, SVM) and regression (linear regression); unsupervised learning has clustering (K-means) and dimensionality reduction (PCA)" width="1590" height="871"></figure>

### Supervised learning: learning from labeled data

Every data point comes with an answer, like "apple", "orange" or "a house price of $300,000". It splits in two depending on what kind of value you predict.

**Classification** : the label is a category. (apple or orange, patient or healthy)
- **KNN** : majority vote of the K nearest data points
- **Logistic regression** : feeds a linear expression into a sigmoid to get the probability of class 1
- **Decision tree** : keeps splitting the data with conditions like "price ≥ 4000?"
- **Random forest** : majority vote of many decision trees
- **SVM** : finds the boundary with the widest gap (margin) between two classes

**Regression** : the label is a continuous number. (house price, tomorrow's temperature)
- **Linear regression** : finds the line with the smallest sum of squared errors

Despite the name, **logistic regression is a classification model**. Its output is a probability, and that probability decides between 0 and 1.<br>
KNN and decision trees can also be used for regression.

### Unsupervised learning: finding patterns without labels

- **Clustering** : grouping similar data points. **K-means** is the classic example, used for things like splitting customers into similar groups when all you have is purchase history.
- **Dimensionality reduction** : reducing the number of features while keeping as much information as possible. **PCA** is the classic example.

### KNN and K-means only sound alike

| | KNN | K-means |
|---|---|---|
| Type | Supervised (classification) | Unsupervised (clustering) |
| Job | Predict the class of new data | Group similar data |
| What K means | Number of neighbors | Number of clusters |

Deep learning isn't a separate branch next to these. It's a **kind of model**: neural networks with many layers, used for both supervised and unsupervised learning.

## <span class="no">2</span> Three ways to measure distance

Models like KNN that look for "nearby data" first compute the distance between two points. For two points $$x = (x_1, \dots, x_n)$$ and $$y = (y_1, \dots, y_n)$$:

**Euclidean distance** : straight-line distance

$$d_E(x, y) = \sqrt{\sum_{i=1}^{n} (x_i - y_i)^2}$$

**Manhattan distance** : sum of the differences along each axis

$$d_M(x, y) = \sum_{i=1}^{n} \lvert x_i - y_i \rvert$$

**Chebyshev distance** : the largest difference along any axis

$$d_C(x, y) = \max_{i} \lvert x_i - y_i \rvert$$

Let's compute it **from A(0, 0) to B(3, 4)**. The coordinate differences are $$\lvert 3-0 \rvert = 3$$ and $$\lvert 4-0 \rvert = 4$$.

<figure><img src="/assets/img/ml/en/distance-three.png" alt="Paths from A(0,0) to B(3,4): Manhattan distance 7, Euclidean distance 5, Chebyshev distance 4" width="856" height="1016"></figure>

| Metric | Calculation | Distance |
|---|---|---|
| Manhattan | 3 + 4 | 7 |
| Euclidean | √(3² + 4²) | 5 |
| Chebyshev | max(3, 4) | 4 |

### Why Chebyshev distance is a max

Chebyshev distance equals **the minimum number of moves when a diagonal step also counts as one move**.<br>
From (0, 0), three diagonal steps take you to (3, 3). The x difference is used up and a y difference of 1 remains, so you take one more step up: 4 moves in total.<br>
A diagonal step shrinks both axis differences by one at the same time, so in the end you move exactly **as many times as the larger difference**.

### Minkowski distance ties all three together

$$d_p(x, y) = \Big( \sum_{i=1}^{n} \lvert x_i - y_i \rvert^p \Big)^{1/p}$$

- $$p = 1$$ → Manhattan distance
- $$p = 2$$ → Euclidean distance
- $$p \to \infty$$ → Chebyshev distance

## <span class="no">3</span> Normalization vs. standardization

Both put features with different value ranges on a similar scale. The difference is **where the reference point (0) goes**.

**Normalization (min-max)** : minimum becomes 0, maximum becomes 1

$$x' = \frac{x - x_{min}}{x_{max} - x_{min}}$$

**Standardization** : mean becomes 0, standard deviation becomes 1

$$z = \frac{x - \mu}{\sigma}$$

$$\sigma = \sqrt{\frac{1}{N}\sum_{i=1}^{N}(x_i - \mu)^2}$$

For **scores 50, 70, 90**, $$\mu = 70$$ and $$\sigma = 16.33$$.

<figure><img src="/assets/img/ml/en/scaling.png" alt="Scores 50, 70, 90 become 0, 0.5, 1 after normalization and −1.22, 0, +1.22 after standardization" width="1567" height="688"></figure>

| Score | Normalized | Standardized |
|---|---|---|
| 50 | (50 − 50) / 40 = 0 | (50 − 70) / 16.33 = −1.22 |
| 70 | 0.5 | 0 |
| 90 | 1 | +1.22 |

The $$\sigma$$ above is the population standard deviation, dividing by $$N$$. That's what scikit-learn's StandardScaler uses. pandas `.std()` divides by $$N-1$$ (sample standard deviation) by default, so it gives ±1 instead.

The 0.5 in normalization is just **the midpoint** between the minimum and maximum. The mean isn't necessarily 0.5: for scores 50, 60, 90 the normalized values are 0, 0.25, 1 and their mean is 0.42.<br>
After standardization, the mean is **always 0** and the standard deviation is 1, whatever the data.

### Why rescale at all?

If you compute distances on raw salary (tens of thousands) and age (tens), salary differences decide almost the whole distance.<br>
Rescaling lets both features count about equally.

### Which one to pick?

Normalization depends entirely on **two values, the minimum and the maximum, so it's sensitive to outliers.**<br>
If a 1000 sneaks in among scores 50, 60, 70, 80, the other four get squeezed between 0 and 0.03.

- **Data with a fixed range** (image pixels 0 to 255, survey answers 1 to 5) → normalization
- **Data without a fixed range, or with outliers** (prices, salaries) → standardization

In practice people often try both and keep whichever performs better.

## <span class="no">4</span> KNN: a majority vote of K neighbors

KNN (K-nearest neighbors) **finds the K labeled data points closest to the new point and predicts the most common label among them**.

$$\hat{y} = \underset{c}{\arg\max} \ \sum_{i \in N_K(x)} \mathbf{1}(y_i = c)$$

$$N_K(x)$$ is the set of K points closest to the new point $$x$$, and $$\mathbf{1}(y_i = c)$$ is 1 if the label is class $$c$$ and 0 otherwise. In words: count each class and pick the largest count.

<figure><img src="/assets/img/ml/en/knn-k5.png" alt="With K=5, the five points nearest the new point are 2 apples and 3 oranges, so KNN predicts orange" width="1007" height="965"></figure>

The five points nearest the new point (★) are 2 apples and 3 oranges, so the prediction is **orange**.

### K is the number of neighbors, not a batch size

It's easy to mistake K for the size of the test set.

- **Test data** : data held out for the final evaluation (e.g. 20 points)
- **K** : the number of neighbors consulted to predict **one** data point (e.g. 5)

With 20 test points, **each of the 20** looks at its own 5 neighbors.

### How to choose K

**Start with √n** : the square root of the number of training points $$n$$ is a common starting value. With 100 points √100 = 10, and for two classes you use an odd number, **9 or 11**, to avoid 5-to-5 ties.

**Pick with the elbow method** : measure the error rate for different K and choose the K where the error is lowest or stops improving.

1. Choose candidate values of K (1, 3, 5, 7, …).
2. For each K, measure the error rate on validation data. Test data is only for the final evaluation.
3. Plot K on the x-axis and error rate on the y-axis.
4. Pick the K where the error is lowest or where the curve bends.

**Experiment** : 300 two-dimensional points from two overlapping classes (150 per class, normal distributions centered at (2, 2) and (2.9, 2.9), standard deviation 0.9), with 200 for training and 100 for validation.

<figure><img src="/assets/img/ml/en/knn-elbow.png" alt="Validation error for K from 1 to 31: 24% at K=1, lowest at 20% for K=5, then moving between 21% and 23%" width="1302" height="691"></figure>

The error drops from 24% at K = 1 to its lowest, 20%, at K = 5, then moves between 21% and 23%. For this data you'd pick K = 5.<br>
If K is too small, a few noisy neighbors swing the prediction. If it's too large, far-away points from the other class get a vote too.

Explanations of the elbow method sometimes show a **K-means** picture like "K=2 gives 2 clusters, K=3 gives 3 clusters". That K is the number of clusters, which is a different thing from KNN's K.

### KNN doesn't learn parameters

KNN just stores the data during training and computes distances at prediction time. That's why it's called **lazy learning**.<br>
Learning that updates parameters to reduce a loss starts with **gradient descent**, used in logistic regression below.

## <span class="no">5</span> Evaluation metrics for classification

Classification models are evaluated with the four cells of a **confusion matrix**.

- **TP** (true positive) : actually positive, predicted positive
- **FN** (false negative) : actually positive, predicted negative
- **FP** (false positive) : actually negative, predicted positive
- **TN** (true negative) : actually negative, predicted negative

**Example: 100 people tested, 10 actually sick.** The model flagged 15 people as sick (positive), and 8 of them really are.

<figure><img src="/assets/img/ml/en/confusion-matrix.png" alt="Confusion matrix TP 8, FN 2, FP 7, TN 83 with Precision 8/15 and Recall 8/10" width="908" height="739"></figure>

$$\text{Accuracy} = \frac{TP + TN}{TP + TN + FP + FN}$$

= (8 + 83) / 100 = **0.91**

$$\text{Precision} = \frac{TP}{TP + FP}$$

= 8 / 15 = **0.53**

$$\text{Recall} = \frac{TP}{TP + FN}$$

= 8 / 10 = **0.80**

$$\text{F1} = \frac{2 \cdot P \cdot R}{P + R}$$

= 2 × 0.53 × 0.80 / (0.53 + 0.80) = **0.64** ($$P$$ is precision, $$R$$ is recall)

- **Precision** : of everything predicted positive, the share that is actually positive
- **Recall** : of everything actually positive, the share the model found
- **F1** : the harmonic mean of precision and recall

An accuracy of 0.91 looks high, but 90 of the 100 people are healthy, so predicting "healthy" for everyone already scores 0.90. When classes are imbalanced, look at precision, recall and F1 together.

### Why is F1 a harmonic mean?

A harmonic mean stays **close to the smaller of the two values**, so it filters out models that are good at only one of them.<br>
Compare a model with precision 1.0 and recall 0.01:

- Arithmetic mean : (1.0 + 0.01) / 2 = **0.505**
- F1 : 2 × 1.0 × 0.01 / (1.0 + 0.01) = **0.02**

The arithmetic mean looks fine, but F1 shows plainly that recall is terrible.

### annot=True in a heatmap

When you draw a confusion matrix with seaborn `heatmap`, `annot=True` **writes the value in each cell**. Without it you only get colors.

## <span class="no">6</span> Logistic regression and its loss function

Logistic regression feeds the linear expression $$z = wx + b$$ into the **sigmoid function** to get the probability $$p$$ of class 1.

$$\sigma(z) = \frac{1}{1 + e^{-z}}$$

$$p = \sigma(wx + b)$$

$$\sigma(z)$$ maps any $$z$$ into the range between 0 and 1, and equals 0.5 at $$z = 0$$. Usually you classify as 1 if $$p \ge 0.5$$ and as 0 otherwise.

### Why the OLS line doesn't work

**Experiment** : data with $$x = 1, 2, \dots, 8$$ and labels $$y = 0, 0, 0, 1, 0, 1, 1, 1$$.

<figure><img src="/assets/img/ml/en/sigmoid-ols-vs-logistic.png" alt="Feeding the OLS line z=0.17x−0.25 into the sigmoid gives flat probabilities from 0.48 to 0.75; feeding z=1.28x−5.77 found with log loss gives a clean split from 0.011 to 0.989" width="1867" height="764"></figure>

- **The line from linear regression (OLS)** $$z = 0.17x - 0.25$$ : it tries to reduce squared error to every point, so its slope is gentle. Through the sigmoid it gives 0.48 at $$x = 1$$ and 0.75 at $$x = 8$$, which barely separates 0 from 1.
- **The line found with log loss** $$z = 1.28x - 5.77$$ : a steep slope, giving 0.011 at $$x = 1$$ and 0.989 at $$x = 8$$. The boundary where $$p = 0.5$$ is $$x = 4.5$$.

So logistic regression finds $$w, b$$ with the loss function below, not with OLS.

### The log loss (BCE)

$$L(w, b) = \frac{1}{N} \sum_{i=1}^{N} \ell_i$$

$$\ell_i = -\big[\, y_i \log p_i + (1 - y_i) \log (1 - p_i) \,\big]$$

In deep learning the same formula is called **BCE (binary cross-entropy)**.

- Label 1 with $$p = 0.9$$ → $$-\log 0.9 = 0.11$$ (small loss)
- Label 1 with $$p = 0.1$$ → $$-\log 0.1 = 2.30$$ (large loss)

The more confidently wrong the model is, the faster the loss grows.

### Why gradient descent finds w and b

For linear regression, setting the derivative of the loss to 0 and solving gives $$w, b$$ in closed form (the normal equation).<br>
For logistic regression, the sigmoid makes it impossible to solve that equation in the form $$w = \cdots$$. So you compute the gradient and update step by step with **gradient descent**. The gradient comes out simple:

$$\frac{\partial L}{\partial w} = \frac{1}{N} \sum_{i=1}^{N} (p_i - y_i)\, x_i, \qquad \frac{\partial L}{\partial b} = \frac{1}{N} \sum_{i=1}^{N} (p_i - y_i)$$

The $$z = 1.28x - 5.77$$ in the experiment above came from starting at (w, b) = (0, 0) and running gradient descent with this gradient (learning rate 0.05) for 200,000 steps.<br>
scikit-learn's `LogisticRegression().fit(X, y)` uses an improved optimization method rather than plain gradient descent, and adds a little L2 regularization by default.

### Logistic regression = a perceptron with no hidden layer

Logistic regression has the same structure as **the smallest possible neural network, with a single layer**.

- The original perceptron : a step function, so it only outputs 0 or 1. Its gradient is 0 almost everywhere, so it can't be trained with gradient descent.
- Logistic regression : a sigmoid, so it's differentiable and outputs a probability. It's trained with gradient descent.

Stack several layers on top and you get a deep learning model.

## <span class="no">7</span> What is multicollinearity?

Multicollinearity means **input features are strongly correlated with each other**.

Say you predict house prices using floor area in square meters $$x_1$$ and the same area in square feet $$x_2$$. One square meter is about 10.7639 square feet, so $$x_2 = 10.7639\, x_1$$.

$$\hat{y} = w_1 x_1 + w_2 x_2 = \big( w_1 + 10.7639\, w_2 \big)\, x_1$$

The prediction depends only on the single value $$w_1 + 10.7639\, w_2$$. So $$(w_1, w_2) = (100, 0)$$ and $$(500, -37.16)$$ give the same predictions.

- Infinitely many combinations of $$w$$ give the same predictions, so the learned $$w$$ can come out huge or with the wrong sign.
- A small change in the data can swing $$w$$ wildly.

Linear and logistic regression are models where you read $$w$$ to understand "how much this feature affects the result", so multicollinearity is a real concern for them.<br>
Dropping one of the strongly correlated features is the simplest fix. Regularization (L2) or PCA are also used.

<div class="done"><div class="done-t">🎉 If a formula won't click, plug in a small number and compute it by hand!</div></div>

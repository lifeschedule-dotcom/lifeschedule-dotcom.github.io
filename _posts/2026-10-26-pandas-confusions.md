---
title: "pandas 실습에서 자꾸 틀린 것 정리: 괄호·조건·loc"
section: physical-ai
sub: nvidia
ref: pandas-confusions
date: 2026-10-26 23:40:00 +0900
description: 판다스(pandas) 실습 10문제에서 반복된 실수 세 가지(조건과 표, 괄호, loc·iloc)를 틀린 코드와 고친 코드로 정리했어요.
spacious: true
---

<style>
.content table { width: 100%; border-collapse: collapse; margin: 14px 0 24px; font-size: 17px; line-height: 1.5; }
.content th, .content td { border-bottom: 1px solid #e6dde0; padding: 8px 10px; text-align: left; vertical-align: top; }
.content thead { background: #fbf1f4; }
.content th { white-space: nowrap; }
@media (max-width: 560px) { .content th, .content td { padding: 7px 5px; font-size: 16px; } }
</style>

<div class="wc"><p><b>pandas는 왜 배울까요?</b><br>
판다스(pandas)는 파이썬에서 표 데이터를 읽고, 고르고, 계산하는 [데이터 분석 라이브러리](https://github.com/pandas-dev/pandas)예요.<br>
머신러닝은 모델에 넣기 전에 CSV를 읽고, 빈 값을 정리하고, 필요한 열만 고르는 일이 먼저라 이 단계를 대부분 pandas로 해요.<br>
scikit-learn 같은 머신러닝 도구도 [pandas 표를 그대로 주고받을 수 있어서](https://scikit-learn.org/stable/auto_examples/miscellaneous/plot_set_output.html), pandas가 손에 익어야 모델 수업이 덜 막혀요. (2026년 10월 26일 기준)</p></div>

2026년 10월 26일, pandas 실습 10문제를 풀며 틀린 이유를 모아 보니 **같은 실수 세 가지**가 계속 반복됐어요.<br>
NVIDIA AI CAMPUS 수업 복습이었고, 한 문제에 15분에서 20분씩 걸렸어요.<br>
막힐 때마다 AI에게 물어보며 이해한 것을 그대로 정리해요.

<div class="keyline">아래 작은 가게 표 하나로 전부 설명할게요.</div>

```python
import pandas as pd
df = pd.DataFrame({
    "name":     ["사과", "우유", "바나나", "치즈", "배"],
    "category": ["과일", "유제품", "과일", "유제품", "과일"],
    "price":    [3000, 2500, 4000, 6000, 5000],
    "stock":    [12, 30, 5, 8, 20],
})
```

|   | name | category | price | stock |
|---|---|---|---|---|
| 0 | 사과 | 과일 | 3000 | 12 |
| 1 | 우유 | 유제품 | 2500 | 30 |
| 2 | 바나나 | 과일 | 4000 | 5 |
| 3 | 치즈 | 유제품 | 6000 | 8 |
| 4 | 배 | 과일 | 5000 | 20 |

## <span class="no">1</span> pandas에서 df 꺼내 쓰는 법

`df`는 위에 나온 **표 한 장에 붙인 이름**이고, 열·줄 번호·칸 세 가지로 꺼내 써요.<br>
`pd.read_csv("파일.csv")`로 읽어도, 위처럼 직접 만들어도 결과는 같아요.

```python
df["price"]
```
→ price 열만 꺼내요. `3000, 2500, 4000, 6000, 5000`

```python
df["price"].idxmax()
```
→ 가장 큰 값(6000)이 **몇 번 줄인지** 알려 줘요. `3`

```python
df.loc[3, "name"]
```
→ 3번 줄의 name 칸을 꺼내요. `치즈`

세 개를 이어 붙이면 「가장 비싼 상품 이름」이에요.

```python
df.loc[df["price"].idxmax(), "name"]   # → 치즈
```

<div class="wc"><p><b>팁</b> : 긴 코드는 한 줄에 몰아 쓰지 말고, 조각마다 칸을 나눠 실행해 보세요.<br>
「무엇이 나오는지」를 눈으로 확인하고 이어 붙이면 훨씬 덜 헷갈려요.</p></div>

### 열 이름과 안에 든 값

```python
df["과일"]                        # ❌ KeyError
df[df["category"] == "과일"]      # ✅
```
`df[" "]` 안에는 **표 맨 위 줄의 열 이름**만 들어가요.<br>
"과일"은 category 열 안에 든 **값**이라, 「category가 과일과 같은가」로 써야 해요.

## <span class="no">2</span> 조건 결과와 골라낸 표 구분하기

조건만 쓰면 True/False 목록이 나오고, `df[ ]`로 감싸야 표가 돼요.<br>
틀린 걸 모아 보니 거의 다 이 둘을 헷갈린 거였어요.

```python
df["price"] >= 4000
```
→ 표가 아니라 **True / False 5개**예요. `False, False, True, True, True`

```python
df[df["price"] >= 4000]
```
→ `df[ ]`로 감싸야 True인 줄만 남은 **표**가 돼요. 바나나, 치즈, 배 3줄이에요.

그래서 이렇게 갈라요.

- **개수만 세면** → 조건 그대로 `.sum()` : True는 1, False는 0으로 더해져요.
- **열을 꺼내거나 이름을 보려면** → `df[조건]`으로 표를 먼저 만들어요.

```python
(df["price"] >= 4000).sum()            # → 3
df[df["price"] >= 4000]["name"]        # → 바나나, 치즈, 배
```

### 이렇게 틀렸어요 ①: 표 전체를 더해 버림

```python
df[df["price"] >= 4000].sum()
```
`df[ ]`로 감싼 표에 `.sum()`을 붙이면, 골라낸 표의 **열마다 전부 더해요.**<br>
가격은 가격끼리 더하고, 이름은 이름끼리 이어 붙여서 `바나나치즈배` 같은 덩어리가 나와요.

### 이렇게 틀렸어요 ②: 필요한 표를 안 만듦

```python
(df["price"] <= 4000)["stock"]   # KeyError: 'stock'
```
True/False 목록에는 stock 열이 없어서 `KeyError`가 나요.<br>
`df[df["price"] <= 4000]["stock"]`처럼 표를 먼저 만들어야 해요.

## <span class="no">3</span> 괄호 [ ]와 ( ) 구분하기

`[ ]`는 꺼낼 때, `( )`는 기능을 실행할 때 써요.

| `[ ]` 꺼내기 | `( )` 실행하기 |
|---|---|
| `df["price"]` | `.mean()`, `.sum()` |
| `.loc[ ]`, `.iloc[ ]` | `.idxmax()`, `.idxmin()` |
| `.shape[0]` | `.sort_values("price")` |
| | `ans.append( )` |

`df.loc( )`, `df.iloc( )`, `shape(0)`처럼 쓰면 틀려요.<br>
**loc·iloc·shape 뒤는 항상 `[ ]`**예요.

### 조건이 두 개면 조건마다 ( )

```python
df[(df["category"] == "과일") & (df["price"] >= 4000)]
```
`&`(그리고)와 `|`(또는)는 `==`, `>=`보다 **먼저 계산돼요.**<br>
괄호가 없으면 `"과일" & df["price"]`부터 계산하려다 오류가 나요.<br>
그래서 조건마다 `( )`로 감싸요. 조건이 하나면 필요 없어요.

### .sum()은 바로 앞 괄호 하나에만 붙어요

```python
(df["category"] == "과일") & (df["price"] >= 4000).sum()    # ❌
```
이러면 `.sum()`이 **뒤 조건에만** 붙어요.<br>
두 조건 전체를 바깥 괄호로 한 번 더 감싸야 해요.

```python
((df["category"] == "과일") & (df["price"] >= 4000)).sum()  # ✅ → 2
```

괄호가 헷갈리면 **두 줄로 나눠 쓰면** 돼요.

```python
조건 = (df["category"] == "과일") & (df["price"] >= 4000)
조건.sum()   # → 2
```

<div class="wc"><p><b>팁</b> : 괄호 하나에 커서를 대면 VS Code가 짝이 되는 괄호를 같이 표시해 줘요.</p></div>

## <span class="no">4</span> loc와 iloc 차이

loc는 **이름으로**, iloc는 **몇 번째인지 숫자로** 칸을 콕 집어 꺼내요.

```python
df.loc[3, "name"]   # 3번 줄, name 열 → 치즈
df.iloc[3, 0]       # 3번째 줄, 0번째 열 → 치즈
```

- **loc** : 줄 이름과 열 **이름**으로 집어요.
- **iloc** : **몇 번째인지 숫자로** 집어요. 파이썬은 0부터 세요.

`"name"` 같은 이름을 쓰면 loc, 숫자만 쓰면 iloc이에요.<br>
`idxmax()`·`idxmin()`은 줄 **이름**을 돌려주니까 짝꿍은 loc예요.

### 정렬하면 줄 이름과 순서가 달라져요

「두 번째로 싼 상품」을 찾을 때 iloc이 필요해요.

```python
df.sort_values("price")["name"]
```
```
1      우유
0      사과
2    바나나
4       배
3      치즈
```
왼쪽 숫자(1, 0, 2…)는 **원래 줄 이름**이라 순서와 맞지 않아요.<br>
그래서 몇 번째로 집는 `iloc`를 써요. 두 번째는 `[1]`이에요.

```python
df.sort_values("price")["name"].iloc[1]   # → 사과
```

### .iloc은 점 바로 앞에 있는 것에서 꺼내요

아까는 `df.iloc[ ]`였는데 왜 이번엔 뒤에 붙을까요?<br>
`.iloc`는 늘 **점 바로 앞에 있는 것**에서 꺼내요.

```
df                               .iloc[3, 0]
df.sort_values("price")["name"]  .iloc[1]
└──── 여기서 꺼낼게요 ────┘  └ 꺼내기 ┘
```

`.iloc`는 둘 다 맨 뒤예요. 앞에 놓인 대상만 달라요.<br>
`["name"]`도 똑같아요. 앞이 `df`면 전체 표에서, 앞이 골라낸 표면 그 표에서 꺼내요.

## <span class="no">5</span> groupby와 자주 쓴 기능

문제에 「~별」이 나오면 같은 것끼리 묶어서 계산해요.

### 평균·합계는 groupby

```python
df.groupby("category")["price"].mean()
```
```
과일      4000.0
유제품    4250.0
```
같은 category끼리 묶어서 price 평균을 내요.

```python
df.groupby("category")["price"].mean().idxmax()   # → 유제품
```
여기서는 왼쪽 이름표가 category라서 `idxmax()`가 **category 이름**을 돌려줘요. loc가 필요 없어요.

### 개수는 value_counts

```python
df["category"].value_counts()
```
```
과일      3
유제품    2
```
묶어서 세는 걸 한 번에 해 주는 지름길이에요. 많은 순서로 나와요.

```python
df["category"].value_counts().idxmax()    # → 과일
df["category"].value_counts().index[0]    # → 과일
df["category"].value_counts().iloc[0]     # → 3 (개수)
```
이름이 필요하면 `idxmax()`나 `index[0]`, 개수가 필요하면 `iloc[0]`이에요.

### 또는 조건을 짧게: isin

```python
df["name"].isin(["사과", "배"]).sum()   # → 2
```
목록 안에 있으면 True예요. `(조건1) | (조건2)`를 쓸 때보다 괄호 걱정이 없어요.

### 상위 25% 기준: quantile

```python
df["price"].quantile(0.75)                            # → 5000.0
(df["price"] > df["price"].quantile(0.75)).sum()      # → 1 (치즈)
```

### 새 열 만들기

```python
df["sales"] = df["stock"] * df["price"]
```
`stock * price`처럼 쓰면 `NameError`가 나요. 열은 늘 `df["열 이름"]`으로 꺼내요.

### 개수 세기 세 가지는 다 같은 답

```python
len(df[df["price"] >= 4000])           # → 3
df[df["price"] >= 4000].shape[0]       # → 3
(df["price"] >= 4000).sum()            # → 3
```
`shape`는 `(행 수, 열 수)`를 돌려줘요. `[0]`이 행 수, `[1]`이 열 수예요.

## <span class="no">6</span> 주피터(Jupyter) 화면에 이상한 게 보일 때

대부분 코드가 틀린 게 아니라, 실행 기록이 남았거나 표시 방식이 달라서예요.

**append 결과가 계속 쌓여요**

`ans.append(...)` 칸은 실행할 때마다 하나씩 더 들어가요.<br>
같은 칸을 두 번 누르면 답도 두 번 들어가요.<br>
**Restart → Run All**을 누르면 처음부터 한 번씩만 다시 실행돼요.

**`np.int64(6)`이 보여요**

`.sum()`으로 센 숫자에 「numpy가 계산한 정수」라는 이름표가 붙은 거예요. 값은 그냥 6이에요.<br>
깔끔하게 보고 싶으면 `int( )`로 감싸요.

**`Name: name, dtype: str`이 붙어요**

값 하나가 아니라 **목록이 통째로** 들어갔다는 표시예요.<br>
조건으로 고르면 여러 줄이 걸릴 수 있어서 목록으로 나와요. 하나만 꺼내려면 `.iloc[0]`을 붙여요.

**파일 이름이 이상하게 저장됐어요**

```python
out.to_csv('output.csv, index=False')   # ❌ 파일 이름이 "output.csv, index=False"
out.to_csv('output.csv', index=False)   # ✅
```
따옴표는 파일 이름 바로 뒤에서 닫아요.

<div class="done"><div class="done-t">🎉 핵심은 세 가지예요. 표가 필요한지 개수만 필요한지, [ ]인지 ( )인지, 열 이름인지 값인지!</div></div>

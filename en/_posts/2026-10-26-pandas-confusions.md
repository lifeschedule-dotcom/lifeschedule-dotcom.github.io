---
title: "Common pandas Mistakes for Beginners: Brackets, Conditions, loc"
section: physical-ai
sub: nvidia
ref: pandas-confusions
date: 2026-10-26 23:40:00 +0900
description: The three mistakes pandas beginners make most often (conditions vs. tables, brackets, loc vs. iloc), shown with broken code and fixed code.
spacious: true
---

<style>
.content table { width: 100%; border-collapse: collapse; margin: 14px 0 24px; font-size: 17px; line-height: 1.5; }
.content th, .content td { border-bottom: 1px solid #e6dde0; padding: 8px 10px; text-align: left; vertical-align: top; }
.content thead { background: #fbf1f4; }
.content figure { margin: 18px 0; }
.content figure img { width: 100%; height: auto; }
.content td, .content th { word-break: keep-all; overflow-wrap: normal; }
@media (max-width: 560px) { .content th, .content td { padding: 7px 5px; font-size: 16px; } }
</style>

<div class="wc"><p><b>Why learn pandas?</b><br>
pandas is a <a href="https://github.com/pandas-dev/pandas">data analysis library</a> for reading, selecting and computing on tabular data in Python.<br>
Before anything goes into a machine learning model, you read a CSV, clean up missing values and pick the columns you need, and most of that work is done in pandas.<br>
Machine learning tools like scikit-learn can <a href="https://scikit-learn.org/stable/auto_examples/miscellaneous/plot_set_output.html">take and return pandas tables directly</a>, so being comfortable with pandas makes the rest of machine learning much smoother. (as of October 26, 2026)</p></div>

Most beginner mistakes in pandas fall into **three groups**:<br>
condition results vs. tables, `[ ]` vs. `( )`, and loc vs. iloc.<br>
Below are broken and fixed versions of each, with real values from one small table.

<div class="keyline">Everything below uses this one small shop table.</div>

```python
import pandas as pd
df = pd.DataFrame({
    "name":     ["apple", "milk", "banana", "cheese", "pear"],
    "category": ["fruit", "dairy", "fruit", "dairy", "fruit"],
    "price":    [3000, 2500, 4000, 6000, 5000],
    "stock":    [12, 30, 5, 8, 20],
})
```

|   | name | category | price | stock |
|---|---|---|---|---|
| 0 | apple | fruit | 3000 | 12 |
| 1 | milk | dairy | 2500 | 30 |
| 2 | banana | fruit | 4000 | 5 |
| 3 | cheese | dairy | 6000 | 8 |
| 4 | pear | fruit | 5000 | 20 |

## <span class="no">1</span> Getting values out of df

`df` is just **the name of the table above**, and you get things out of it by column, by row label, or by cell.<br>
It works the same whether you load it with `pd.read_csv("file.csv")` or build it by hand like above.

```python
df["price"]
```
→ Just the price column. `3000, 2500, 4000, 6000, 5000`

```python
df["price"].idxmax()
```
→ The **row label** of the largest value (6000). `3`

```python
df.loc[3, "name"]
```
→ The name cell in row 3. `cheese`

Chain the three together and you get "the name of the most expensive item".

```python
df.loc[df["price"].idxmax(), "name"]   # → cheese
```

<div class="wc"><p><b>Tip</b> : Don't cram a long expression into one line. Run each piece in its own cell.<br>
Seeing what each piece returns before chaining them makes it far less confusing.</p></div>

### Column names vs. the values inside

```python
df["fruit"]                        # ❌ KeyError
df[df["category"] == "fruit"]      # ✅
```
Only **column names from the header row** go inside `df[" "]`.<br>
"fruit" is a **value** inside the category column, so you write "category equals fruit".

## <span class="no">2</span> Condition results vs. filtered tables

A condition on its own gives you a True/False list (a boolean mask). Wrap it in `df[ ]` to get a table.<br>
Mixing these two up is the most common pandas mistake.

<figure><img src="/assets/img/ml/en/pandas-mask.png" alt="Comparing df['price'] with 4000 gives a True/False list; wrapping df around that list keeps only the 3 True rows: banana, cheese, pear" width="1745" height="596"></figure>

```python
df["price"] >= 4000
```
→ Not a table but **5 True/False values**. `False, False, True, True, True`

```python
df[df["price"] >= 4000]
```
→ Wrapping it in `df[ ]` gives a **table** with only the True rows: banana, cheese and pear.

So the rule is:

- **Just counting** → call `.sum()` on the condition: True adds 1, False adds 0.
- **Reading a column or names** → build the table first with `df[condition]`.

```python
(df["price"] >= 4000).sum()            # → 3
df[df["price"] >= 4000]["name"]        # → banana, cheese, pear
```

### Common mistake 1: summing the whole table

```python
df[df["price"] >= 4000].sum()
```
Calling `.sum()` on the table inside `df[ ]` adds up **every column** of the filtered table.<br>
Prices get added together and names get glued together into something like `bananacheesepear`.

### Common mistake 2: forgetting to build the table

```python
(df["price"] <= 4000)["stock"]   # KeyError: 'stock'
```
The True/False list has no stock column, so you get a `KeyError`.<br>
Build the table first: `df[df["price"] <= 4000]["stock"]`.

## <span class="no">3</span> [ ] vs. ( )

`[ ]` is for getting something out, `( )` is for running a function.

| `[ ]` get | `( )` run |
|---|---|
| `df["price"]` | `.mean()`, `.sum()` |
| `.loc[ ]`, `.iloc[ ]` | `.idxmax()`, `.idxmin()` |
| `.shape[0]` | `.sort_values("price")` |
| | `ans.append( )` |

`df.loc( )`, `df.iloc( )` and `shape(0)` are all wrong.<br>
**loc, iloc and shape are always followed by `[ ]`.**

### With two conditions, wrap each one in ( )

```python
df[(df["category"] == "fruit") & (df["price"] >= 4000)]
```
`&` (and) and `|` (or) are **evaluated before** `==` and `>=`.<br>
Without parentheses, Python tries `"fruit" & df["price"]` first and throws an error.<br>
So each condition gets its own `( )`. With a single condition you don't need them.

### .sum() only attaches to the bracket right before it

```python
(df["category"] == "fruit") & (df["price"] >= 4000).sum()    # ❌
```
Here `.sum()` only applies to the **second condition**.<br>
Wrap both conditions in one more pair of parentheses.

```python
((df["category"] == "fruit") & (df["price"] >= 4000)).sum()  # ✅ → 2
```

If the brackets get confusing, **split it into two lines**.

```python
cond = (df["category"] == "fruit") & (df["price"] >= 4000)
cond.sum()   # → 2
```

<div class="wc"><p><b>Tip</b> : Put the cursor on a bracket and VS Code highlights its matching pair.</p></div>

## <span class="no">4</span> loc vs. iloc

loc picks a cell **by name**, iloc picks it **by position number**.

```python
df.loc[3, "name"]   # row label 3, column "name" → cheese
df.iloc[3, 0]       # 4th row, 1st column → cheese
```

- **loc** : uses the row label and the column **name**.
- **iloc** : uses **position numbers**. Python counts from 0.

If you write a name like `"name"`, it's loc. If it's numbers only, it's iloc.<br>
`idxmax()` and `idxmin()` return a row **label**, so they pair with loc.

### Sorting makes labels and order disagree

You need iloc to find "the second cheapest item".

```python
df.sort_values("price")["name"]
```
```
1      milk
0     apple
2    banana
4      pear
3    cheese
```
The numbers on the left (1, 0, 2…) are the **original row labels (index labels)**, so they no longer match the order.

<figure><img src="/assets/img/ml/en/pandas-loc-iloc.png" alt="In the table sorted by price, .loc[1] is milk (the row labeled 1) and .iloc[1] is apple (the second row from the top)" width="1396" height="620"></figure>

The same number 1 gives **milk** with `.loc[1, "name"]` (the row labeled 1) and **apple** with `.iloc[1, 0]` (the second row from the top).<br>
So you use `iloc`, which picks by position. The second one is `[1]`.

```python
df.sort_values("price")["name"].iloc[1]   # → apple
```

### .iloc picks from whatever is right before the dot

Earlier it was `df.iloc[ ]`, so why is it at the end now?<br>
`.iloc` always picks from **whatever sits right before the dot**.

```
df                               .iloc[3, 0]
df.sort_values("price")["name"]  .iloc[1]
└──── pick from this ─────┘  └ pick ┘
```

In both lines `.iloc` is at the end. Only the thing in front of it changes.<br>
`["name"]` works the same way: after `df` it reads from the whole table, after a filtered table it reads from that table.

## <span class="no">5</span> groupby and other useful functions

When a question says "per category" or "by …", you group rows and compute per group.

### Averages and sums: groupby

```python
df.groupby("category")["price"].mean()
```
```
dairy    4250.0
fruit    4000.0
```
Rows with the same category are grouped and their prices averaged.

```python
df.groupby("category")["price"].mean().idxmax()   # → dairy
```
Here the labels on the left are categories, so `idxmax()` returns a **category name**. No loc needed.

### Counts: value_counts

```python
df["category"].value_counts()
```
```
fruit    3
dairy    2
```
A shortcut that groups and counts in one step, sorted from most to least.

```python
df["category"].value_counts().idxmax()    # → fruit
df["category"].value_counts().index[0]    # → fruit
df["category"].value_counts().iloc[0]     # → 3 (the count)
```
Use `idxmax()` or `index[0]` for the name, `iloc[0]` for the count.

### A shorter "or": isin

```python
df["name"].isin(["apple", "pear"]).sum()   # → 2
```
True if the value is in the list. No bracket juggling like `(cond1) | (cond2)`.

### Top 25% threshold: quantile

```python
df["price"].quantile(0.75)                            # → 5000.0
(df["price"] > df["price"].quantile(0.75)).sum()      # → 1 (cheese)
```

### Making a new column

```python
df["sales"] = df["stock"] * df["price"]
```
Writing `stock * price` gives a `NameError`. Columns always come out as `df["column name"]`.

### Three ways to count, same answer

```python
len(df[df["price"] >= 4000])           # → 3
df[df["price"] >= 4000].shape[0]       # → 3
(df["price"] >= 4000).sum()            # → 3
```
`shape` returns `(rows, columns)`. `[0]` is the row count and `[1]` is the column count.

## <span class="no">6</span> When Jupyter shows something odd

Usually the code is fine. It's leftover run history or a different display format.

**append results keep piling up**

A cell with `ans.append(...)` adds one more item every time you run it.<br>
Run the same cell twice and the answer goes in twice.<br>
**Restart → Run All** reruns everything from the top exactly once.

**You see `np.int64(6)`** (numpy 2 and later)

A number counted with `.sum()` carries a "numpy integer" tag. The value is just 6.<br>
Wrap it in `int( )` if you want it plain.

**`Name: name, dtype: str` is attached** (`dtype: object` in pandas 2 and earlier)

This means a **whole list** went in instead of a single value.<br>
Filtering by a condition can match several rows, so you get a list. Add `.iloc[0]` to take just one.

**The file was saved with a strange name**

```python
out.to_csv('output.csv, index=False')   # ❌ file is named "output.csv, index=False"
out.to_csv('output.csv', index=False)   # ✅
```
Close the quote right after the file name.

<div class="done"><div class="done-t">🎉 Three things to check: do you need a table or just a count, [ ] or ( ), column name or value?</div></div>

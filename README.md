# Lifeschedule

https://lifeschedule-dotcom.github.io

글 쓰기·검토 규칙은 [AGENTS.md](AGENTS.md)에 있습니다. (CLAUDE.md는 이 파일을 불러오는 한 줄)

## 글 쓰는 법

한국어 글은 `_posts/`, 영어 글은 `en/_posts/`에 `YYYY-MM-DD-영문제목.md` 이름으로 만들고 맨 위에 아래를 붙입니다.
두 언어 글의 `ref`를 같게 하면 오른쪽 위 KO / EN 버튼으로 서로 오갑니다.

```
---
title: 글 제목
section: vibe-coding     # vibe-coding / physical-ai / daily
sub: gpters24            # _data/sections.yml 의 하위 메뉴 id
ref: 글-고유-이름         # 한국어·영어 짝을 잇는 이름
---
```

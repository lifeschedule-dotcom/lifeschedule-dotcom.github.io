---
title: "Isaac Sim 첫 실습: 큐브로 보는 Rigid Body와 Collider"
section: physical-ai
sub: nvidia
ref: isaacsim-rigid-body-collider
date: 2026-11-24 16:30:00 +0900
description: Isaac Sim에서 큐브 하나로 화면 맞추기, 저장 경로, 기본 조명을 익히고, Rigid Body와 Collider가 각각 무엇을 하는지 정리했어요.
spacious: true
---

<style>
.content table { width: 100%; border-collapse: collapse; margin: 14px 0 24px; font-size: 17px; line-height: 1.5; }
.content th, .content td { border-bottom: 1px solid #e6dde0; padding: 8px 10px; text-align: left; vertical-align: top; word-break: keep-all; overflow-wrap: normal; }
.content thead { background: #fbf1f4; }
.content td code { white-space: nowrap; }
@media (max-width: 560px) { .content th, .content td { padding: 7px 5px; font-size: 16px; } }
</style>

<div class="wc"><p><b>큐브 하나로 물리 설정 두 가지를 구분해 봐요.</b><br>
Isaac Sim은 NVIDIA의 로봇 시뮬레이터예요.<br>
로봇팔의 링크도 결국 큐브와 같은 물리 설정을 받아요. (2026년 11월 24일 기준, Isaac Sim 5.1.0, Ubuntu)</p></div>

**큐브 찾기 → 저장 → 조명 확인 → Rigid Body 지우기 → 차이 정리**

<div class="keyline">처음 막힌 곳부터 순서대로 정리할게요.</div>

## <span class="no">1</span> 큐브가 너무 작을 때: F 키

휠로 끝까지 당겨도 큐브가 점처럼 작았어요.

휠 확대는 화면 속 물체로 다가가지 않고, 카메라의 회전 중심점으로 다가가요.
중심점이 큐브에서 멀면 아무리 당겨도 커지지 않아요.

- Stage 패널에서 **Cube** 클릭
- 마우스를 뷰포트 위에 올리고 **F**

카메라가 큐브 바로 앞으로 이동해요.
물체가 화면에서 사라졌을 때도 같은 방법을 써요.

## <span class="no">2</span> 저장 경로: `~` 대신 전체 경로

`File → Save As` 창 주소칸에 `~/nvidia_dli/work/day02/`를 넣으면 `not found`가 떠요.

`~`는 터미널(bash)에서만 홈 폴더로 바뀌는 약어예요.
Isaac Sim의 저장 창은 `~`를 알아듣지 못해요.

```text
/home/(사용자 이름)/nvidia_dli/work/day02/
```

전체 경로를 넣고 Enter를 누른 뒤, 맨 아래 `File name` 칸에 `simple_robot.usd`를 넣고 Save해요.
창 제목 끝의 `*`는 저장 뒤에 바뀐 게 있다는 표시라서, 단계마다 `Ctrl+S`를 눌러요.

## <span class="no">3</span> 그림자는 기본 조명 때문

조명을 넣은 적이 없는데 큐브에 그림자가 생겼어요.

새 스테이지에는 조명이 이미 들어 있어요.
Stage 패널의 **Environment**를 펼치면 `defaultLight`(타입 `DistantLight`)가 보여요.

`DistantLight`는 아주 먼 곳에서 한 방향으로 비추는 빛이에요.
방향을 바꾸면 그림자 방향도 같이 바뀌어요.

## <span class="no">4</span> Rigid Body 지우기

과제는 큐브에 `Rigid Body with Colliders Preset` 대신 `Colliders Preset`만 주면 어떻게 되는지 보는 거예요.

큐브에는 이미 Rigid Body가 있어서 먼저 지웠어요.

- Stage 패널에서 **Cube** 클릭
- Property 패널을 아래로 스크롤해 **Physics → Rigid Body** 찾기
- Rigid Body 제목줄 오른쪽 **빨간 X** 클릭

Collider는 남겨 둬요.
이 상태로 Play를 누르면 큐브는 떨어지지 않고 그 자리에 있어요.
다른 물체는 이 큐브에 부딪혀 막혀요.

## <span class="no">5</span> Rigid Body와 Collider의 차이

**Rigid Body**는 물리 엔진이 매 걸음 움직임을 계산하는 물체로 만드는 설정이에요.

- 질량이 생겨요 (`Mass`)
- 속도가 생겨요 (`Linear Velocity`, `Angular Velocity`)
- 중력·충돌·미는 힘에 반응해요

이름의 Rigid(단단한)는 모양이 찌그러지지 않는다는 가정이에요.
위치와 회전만 바뀌어서 계산이 빨라요.

**Collider**는 물체에 부딪힐 수 있는 겉면을 주는 설정이에요.

| 설정 | 움직임 | 충돌 | 예 |
|---|---|---|---|
| Rigid Body + Collider | 움직여요 | 부딪혀요 | 떨어지는 상자 |
| Collider만 | 안 움직여요 | 부딪혀요 | 바닥, 벽 |
| Rigid Body만 | 움직여요 | 통과해요 | 바닥을 뚫고 떨어지는 상자 |

`GroundPlane`도 Collider만 있는 물체라서, 상자가 바닥을 뚫지 않고 멈춰요.

로봇팔에서는 링크 하나하나가 Rigid Body예요.
관절(Joint)이 링크를 잇고, 모터가 힘을 주면 물리 엔진이 각 링크의 움직임을 계산해요.

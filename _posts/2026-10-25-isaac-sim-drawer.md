---
title: "아이작심 서랍 열기 첫 성공"
section: physical-ai
sub: nvidia
ref: isaac-sim-drawer
date: 2026-10-25 22:00:00 +0900
description: NVIDIA GPU 없는 노트북으로 클라우드에서 돌려 본 서랍 열기 예제와, 다시 보려고 남긴 로봇의 여섯 단계 순서표.
spacious: true
---

<style>
.isaac-note { font-size: 18px; }
.content.spacious .isaac-note p { margin-bottom: 1em; }
.content.spacious .isaac-note h2 { margin-top: 1.8em; padding-top: .8em; }
.isaac-note .keyline { padding: 14px 18px; font-size: 20px; }
.isaac-note figure { margin: 16px 0; }
.isaac-note figure img { display: block; width: 100%; height: auto; }
.isaac-note .wc { margin: 12px 0; padding: 12px 14px; }
.isaac-note .wc p { font-size: 18px; }
.isaac-note .path { display: inline; overflow-wrap: normal; word-break: normal; }
.isaac-note table { width: 100%; border-collapse: collapse; table-layout: fixed; margin: 14px 0; font-size: 17px; line-height: 1.5; }
.isaac-note th, .isaac-note td { border-bottom: 1px solid #e6dde0; padding: 10px 8px; text-align: left; vertical-align: top; }
.isaac-note thead { background: #fbf1f4; }
.isaac-note th:first-child { width: 53%; }
.isaac-note th:last-child { width: 18%; }
.isaac-note td:last-child { white-space: nowrap; }
.isaac-note .state { display: block; font-size: 17px; font-weight: 600; word-break: normal; overflow-wrap: normal; }
.isaac-note .state-row { background: #fbf1f4; }
.isaac-note .source { font-size: 17px; }
.isaac-note .source a { text-decoration: underline; text-underline-offset: 3px; }
@media (max-width: 560px) {
  .isaac-note th, .isaac-note td { padding: 8px 4px; }
  .isaac-note th:first-child { width: 54%; }
  .isaac-note th:last-child { width: 21%; }
  .isaac-note .state { font-size: 17px; letter-spacing: -.25px; }
}
</style>

<div class="isaac-note" markdown="1">

<div class="keyline">클라우드에서 로봇팔 네 대가 서랍을 여는 예제를 돌렸어요.</div>

제 노트북에는 NVIDIA GPU가 없어요.<br>
오늘은 <a href="https://developer.nvidia.com/isaac/sim/">Brev의 Isaac Launchable</a>로 클라우드 컴퓨터를 켜고, 브라우저에서 아이작심 화면을 봤어요.

<figure><img src="/assets/img/robotics/isaac-drawer-success.png" alt="서랍장 앞에 놓인 Franka 로봇팔 네 대의 아이작심 예제 실행 화면" width="1151" height="545"></figure>

## 직접 치며 만난 오류

AI가 알려 준 명령을 직접 치다가 `mkdir`를 `mdkir`로 적었어요.<br>
예제 파일 이름도 `open`을 `oepn`으로 적어 실행이 막혔고요.

<div class="wc">
<p><b>↑ 키</b>로 이전 명령을 불러와 틀린 글자만 고쳤어요.</p>
<p>「인식되지 않습니다」나 「No such file」이 나오면, 철자와 경로부터 확인해요.</p>
</div>

## 로봇 파일 경로 수정

오타를 고친 뒤에도 `FileNotFoundError`가 떴어요.<br>
이날 환경에서는 Isaac 6.0 경로의 Franka 로봇 파일을 찾지 못했어요.

<div class="wc">
<p>클라우드의 <code class="path">apps/<wbr>isaaclab.python.kit</code>에서<br>
로봇 파일을 찾는 주소 끝의 <b>Assets/Isaac/6.0</b>을 <b>Assets/Isaac/5.1</b>로 바꾸고 다시 실행했어요.</p>
</div>

그제야 로봇팔 네 대가 서랍을 여는 화면이 떴어요.<br>
제가 쓴 환경은 Isaac Sim 6.0.1과 Isaac Lab 3.0.0-beta2였어요.

## 서랍 여는 순서표

다시 볼 파일은 <code class="path">scripts/<wbr>environments/<wbr>state_machine/<wbr>open_cabinet_sm.py</code>예요.<br>
`OpenDrawerSmState`에는 단계 이름이, `OpenDrawerSmWaitTime`에는 시간이 적혀 있어요.

<table>
<thead><tr><th scope="col">단계 이름</th><th scope="col">동작</th><th scope="col">기본 시간</th></tr></thead>
<tbody>
<tr><td>① 쉬기<span class="state">REST</span></td><td>현재 위치 유지</td><td>0.5초</td></tr>
<tr><td>② 손잡이 앞으로<span class="state">APPROACH_<wbr>INFRONT_<wbr>HANDLE</span></td><td>손잡이 앞까지 이동</td><td>1.25초</td></tr>
<tr><td>③ 손잡이까지<span class="state">APPROACH_<wbr>HANDLE</span></td><td>손잡이 위치로 이동</td><td>1.0초</td></tr>
<tr><td>④ 손잡이 잡기<span class="state">GRASP_<wbr>HANDLE</span></td><td>집게 닫기</td><td>1.0초</td></tr>
<tr class="state-row"><td>⑤ 서랍 당기기<span class="state">OPEN_<wbr>DRAWER</span></td><td>잡은 채 당기기</td><td>3.0초</td></tr>
<tr><td>⑥ 마지막 상태<span class="state">RELEASE_<wbr>HANDLE</span></td><td>집게를 닫은 채 유지</td><td>0.2초*</td></tr>
</tbody>
</table>

이처럼 단계와 넘어갈 조건을 정해 둔 것이 **상태 기계(state machine)**예요.<br>
②·③은 시간뿐 아니라 손잡이 쪽 목표 위치에 도착했는지도 확인해요.

<p class="source">*공식 beta2 코드는 ⑥에서 0.2초가 지나도 같은 상태를 유지해요.<br>
이름은 ‘손잡이 놓기’지만, 집게를 닫도록 적혀 있어요.<br>
<a href="https://github.com/isaac-sim/IsaacLab/blob/v3.0.0-beta2/scripts/environments/state_machine/open_cabinet_sm.py">공식 예제 코드</a></p>

## 3초에서 0.5초로

`OpenDrawerSmWaitTime`의 `OPEN_DRAWER` 값을 **3.0 → 0.5**로 바꿔 다시 돌려 봤어요.<br>
녹화 중에는 서랍이 덜 열려 보였지만, 같은 시점으로 비교한 영상은 없어 결과는 더 확인해야 해요.

오늘은 화면 속 로봇의 움직임을 보고, 그 순서를 적은 코드까지 읽어 봤어요.

</div>

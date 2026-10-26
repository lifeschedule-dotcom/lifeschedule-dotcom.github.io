---
title: "아이작심 첫 실습: GPU 없는 노트북으로 로봇이 서랍 여는 예제 돌리기"
section: physical-ai
sub: nvidia
ref: isaac-sim-drawer
date: 2026-10-25 22:00:00 +0900
description: NVIDIA GPU 없는 노트북으로 클라우드에 아이작심을 띄우고, 로봇팔이 서랍을 여는 Isaac Lab 예제를 돌리고, 순서표 코드를 고쳐 본 기록.
spacious: true
---

<style>
.order { width: 100%; border-collapse: collapse; table-layout: fixed; margin: 14px 0; font-size: 17px; line-height: 1.5; }
.order th, .order td { border-bottom: 1px solid #e6dde0; padding: 10px 8px; text-align: left; vertical-align: top; }
.order thead { background: #fbf1f4; }
.order th:first-child { width: 50%; }
.order th:last-child { width: 20%; }
.order td:last-child { white-space: nowrap; }
.order .state { display: block; font-size: 17px; font-weight: 600; color: #8a5a6a; word-break: normal; overflow-wrap: normal; }
.order .hot { background: #fbf1f4; }
@media (max-width: 560px) {
  .order th, .order td { padding: 8px 4px; }
  .order th:last-child { width: 22%; }
}
</style>

제 노트북에는 NVIDIA 그래픽카드가 없어요.<br>
그래서 아이작심(Isaac Sim)을 **클라우드에서 빌려** 띄우고, 로봇팔이 서랍을 여는 예제를 직접 돌려 봤어요.

<div class="keyline">따라 하는 순서 바로 소개해 드릴게요.</div>

## <span class="no">1</span> 한눈에 보기

크롬 탭 두 개로 해요.

<div class="twoai">
<div class="ta chat"><div class="ta-h">① VS Code 탭</div><p>명령을 <b>치는 곳</b>이에요.</p></div>
<div class="ta desk"><div class="ta-h">② 뷰어 탭</div><p>아이작심 화면을 <b>보는 곳</b>이에요.</p></div>
</div>

둘 다 클라우드 컴퓨터 안에서 돌아가요.<br>
크롬은 그 화면을 보여 주기만 해요.

<figure><img src="/assets/img/robotics/isaac-drawer-open.png" alt="서랍을 반쯤 당겨 연 Franka 로봇팔 아이작심 화면" width="1062" height="556"></figure>

## <span class="no">2</span> 클라우드 컴퓨터 켜기

<h3 class="step-h"><span>1</span>Brev 가입하고 충전하기</h3>

[NVIDIA Brev](https://brev.nvidia.com)에 가입하고, **Billing**에서 카드 등록과 크레딧 충전을 해요.

<div class="callout warn"><svg><use href="#i-warn"/></svg><div>가입·로그인·결제는 AI에게 맡기지 말고 <b>내가 직접</b> 입력해요.</div></div>

<h3 class="step-h"><span>2</span>Isaac Launchable 켜기</h3>

[Isaac Launchable 안내](https://github.com/isaac-sim/isaac-launchable)의 **Deploy Now** 버튼을 누르고, Brev에서 **Deploy Launchable**을 눌러요.<br>
아이작심과 Isaac Lab이 미리 깔린 컴퓨터가 켜져요.

<div class="wc"><p>제가 쓴 AWS L40S는 시간당 <b>3.65달러</b>였어요(2026년 10월 25일).<br>
처음 켤 때는 준비에 시간이 걸려요.</p></div>

<h3 class="step-h"><span>3</span>VS Code 열기</h3>

상태에 <b>Running</b>과 <b>Built</b>가 뜨면, 아래 <b>HTTP Ports</b> 칸의 주소 옆 <b>↗</b>를 눌러요.<br>
Brev로 로그인하면 크롬에 VS Code가 떠요.

<div class="callout warn"><svg><use href="#i-warn"/></svg><div>다 쓰면 Brev 페이지 오른쪽 위 🌙 <b>Stop</b>을 눌러요.<br>
멈춘 뒤에도 저장 공간 요금은 조금 남아요.<br>
빨간 <b>Delete</b>는 고친 파일까지 다 지워져요.</div></div>

## <span class="no">3</span> 서랍 예제 실행하기

VS Code 왼쪽 위 <b>☰ → Terminal → New Terminal</b>을 누르고, 아래를 한 줄씩 쳐요.

<div class="prompt"><span class="who">① 아이작랩 폴더로 들어가기</span><button class="copy" type="button">복사</button><span class="txt">cd /workspace/isaaclab</span></div>

<div class="prompt"><span class="who">② 서랍 예제 실행하기</span><button class="copy" type="button">복사</button><span class="txt">./isaaclab.sh -p scripts/environments/state_machine/open_cabinet_sm.py --num_envs 4 --livestream 2 --viz kit</span></div>

<div class="wc">
<p><b>-p</b> : 뒤의 파이썬 파일 하나를 아이작랩으로 실행해요.</p>
<p><b>--num_envs 4</b> : 로봇 네 대를 동시에 띄워요.</p>
<p><b>--livestream 2 --viz kit</b> : 아이작심 화면을 브라우저로 보내요.</p>
</div>

새 탭에 VS Code 주소를 붙여 넣고, <b><code>?folder=/workspace</code>를 <code>viewer/</code>로 바꿔서</b> 열어요.<br>
준비되는 동안은 「Waiting for stream」이 보여요.<br>
준비가 끝나면 로봇 네 대가 나타나요.

## <span class="no">4</span> 막혔을 때

<h3 class="step-h"><span>1</span>「인식되지 않습니다」·「No such file」</h3>

명령이나 파일을 찾지 못했다는 뜻이에요.<br>
철자와 경로부터 확인해요.<br>
저는 `mkdir`를 `mdkir`로, `open`을 `oepn`으로 쳤어요.

<div class="wc">
<p><b>↑ 키</b> : 방금 친 명령이 다시 나와요. 틀린 글자만 고쳐요.</p>
<p><b>Tab 키</b> : 폴더·파일 이름을 앞 몇 글자만 치면 나머지를 채워 줘요.</p>
</div>

<h3 class="step-h"><span>2</span>FileNotFoundError (로봇 파일 없음)</h3>

이날(2026년 10월 25일) 예제가 찾던 **Isaac 6.0 경로의 로봇팔(Franka) 파일이 NVIDIA 서버에 없었어요.**<br>
5.1 경로에는 있어서, 주소를 5.1로 바꿨어요.

1. VS Code 왼쪽 목록에서 `isaaclab/apps/isaaclab.python.kit`를 열어요.
2. **Ctrl + H**를 누르고, 위 칸에 `Assets/Isaac/6.0`, 아래 칸에 `Assets/Isaac/5.1`을 넣어 **모두 바꾸기**를 눌러요.
3. **Ctrl + S**로 저장하고, 터미널에서 **↑ → Enter**로 다시 실행해요.

## <span class="no">5</span> 화면 돌려 보기

화면 안을 한 번 클릭한 뒤 마우스로 움직여요.

<div class="wc">
<p><b>Alt + 왼쪽 드래그</b> : 빙 돌려 보기</p>
<p><b>휠 버튼 누르고 드래그</b> : 옆으로 옮기기</p>
<p><b>휠 굴리기</b> : 확대·축소</p>
</div>

## <span class="no">6</span> 서랍 여는 순서표 읽기

로봇이 서랍을 여는 순서는 코드에 정해져 있어요.<br>
VS Code에서 **Ctrl + P** → `open_cabinet` 입력 → `open_cabinet_sm.py`를 열어요.

<h3 class="step-h"><span>1</span>여섯 단계와 시간 설정</h3>

`OpenDrawerSmState`에 단계 이름이, `OpenDrawerSmWaitTime`에 시간이 있어요.<br>
**Ctrl + F**로 이 이름을 찾으면 바로 가요.

<table class="order">
<thead><tr><th scope="col">단계 이름</th><th scope="col">화면에서 본 동작</th><th scope="col">설정값</th></tr></thead>
<tbody>
<tr><td>① 쉬기<span class="state">REST</span></td><td>가만히 있어요</td><td>0.5초</td></tr>
<tr><td>② 손잡이 앞까지<span class="state">APPROACH_<wbr>INFRONT_<wbr>HANDLE</span></td><td>서랍 앞으로 팔을 뻗어요</td><td>1.25초</td></tr>
<tr><td>③ 손잡이에 붙기<span class="state">APPROACH_<wbr>HANDLE</span></td><td>손잡이 위치로 쏙</td><td>1.0초</td></tr>
<tr><td>④ 손잡이 잡기<span class="state">GRASP_<wbr>HANDLE</span></td><td>집게를 오므려요</td><td>1.0초</td></tr>
<tr class="hot"><td>⑤ 서랍 당기기<span class="state">OPEN_<wbr>DRAWER</span></td><td>잡은 채 뒤로 당겨요</td><td>3.0초</td></tr>
<tr><td>⑥ 마지막 단계<span class="state">RELEASE_<wbr>HANDLE</span></td><td>집게를 닫은 채 멈춰요</td><td>0.2초*</td></tr>
</tbody>
</table>

이렇게 **지금 어떤 단계인지 + 언제 다음 단계로 넘어가는지**를 적어 둔 것을 **상태 기계(state machine)**라고 해요.<br>
②·③은 정해진 시간과 목표 위치 도착을 모두 확인해요.<br>
*⑥은 0.2초가 지나도 집게를 닫은 채 같은 단계에 머물러요. ([공식 예제 코드](https://github.com/isaac-sim/IsaacLab/blob/v3.0.0-beta2/scripts/environments/state_machine/open_cabinet_sm.py))

<h3 class="step-h"><span>2</span>숫자 하나 바꿔 보기</h3>

⑤ `OPEN_DRAWER`의 `3.0`을 `0.5`로 바꾸고 **Ctrl + S**로 저장해요.<br>
터미널에서 **Ctrl + C**로 멈추고, **↑ → Enter**로 다시 실행해요.

당기는 시간을 줄였더니, 녹화에서 **서랍이 덜 열려 보였어요.**<br>
숫자 하나로 로봇의 행동이 바뀌는 걸 볼 수 있어요.

<div class="done"><div class="done-t">🎉 여기까지 했으면 로봇이 서랍 여는 예제를 직접 띄우고 고쳐 본 거예요!</div></div>

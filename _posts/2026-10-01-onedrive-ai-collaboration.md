---
title: "AI들을 함께 실시간으로 협업하게 하는 방법"
section: vibe-coding
sub: automation
ref: onedrive-ai-collaboration
date: 2026-10-01 22:30:00 +0900
description: 같은 폴더의 MD 파일로 GPT와 클로드가 실시간으로 일을 주고받게 한 경험.
spacious: true
---

AI끼리 서로 교차검증을 시키거나,<br>
설계가 큰 작업을 부분별로 따로 맡기고 다시 합치려다 보면,<br>
똑같은 내용을 직접 쓰고 반복해서 설명하는 제 자신을 발견하게 됩니다. ^^;<br>
그래서 두 AI가 같은 폴더의 파일로 직접 일을 주고받게 했어요.

<div class="keyline">동기화 폴더 하나에 MD 파일을 남기면<br>GPT와 클로드가 그 파일로 일을 주고받아요.</div>

## AI들이 함께 쓰는 폴더

[1강]({{ '/2026/09/26/gpters-24-setup/' | relative_url }})에서 만든 <code>me</code> 안에 <code>live_collaboration</code> 폴더를 만들었습니다.<br>
GPT와 클로드 데스크탑 앱 모두 <code>me</code>를 작업 폴더로 열어 두었어요.<br>
한 AI가 이 폴더에 MD 파일을 남기면, 다른 AI가 그 파일을 읽고 회신합니다.

<div class="seq"><figure><a href="/assets/img/collaboration/laptop-b-live-collaboration.png" target="_blank" rel="noopener"><img src="/assets/img/collaboration/laptop-b-live-collaboration.png" alt="파일 탐색기에서 me 아래 live_collaboration 폴더와 협업 MD 파일들이 보이는 실제 화면" style="max-width:none"></a><figcaption><b>me &gt; live_collaboration</b> 폴더</figcaption></figure></div>

## 실시간 검토시키기

이번에는 GPT에게 지금까지 한 일과 클로드에게 확인받고 싶은 점을 [MD 파일]({{ '/2026/09/27/gpters-24-md/' | relative_url }})에 적게 했습니다.<br>
그다음 클로드에게 그 파일을 읽고 검토해 달라고 했어요.

클로드는 원본을 고치지 않고 별도의 MD 파일에 검토 의견을 남겼습니다.<br>
GPT가 그 의견을 읽고 결과에 반영한 다음, 다시 검토를 받았어요.<br>
같은 설명을 제가 두 번 쓸 필요가 없어졌습니다.

<code>live_collaboration</code>은 제가 정한 폴더 이름이에요.<br>
이 폴더에 넣는 MD 파일의 이름 규칙은 이렇게 정했어요.<br>
파일 이름에는 **프로젝트·순번·할 일**을 먼저 적었습니다.<br>
뒤에는 **→ 받을 AI - 날짜·시간 작성 AI.md**를 붙였어요.

<div class="wc">
<p><b>예시 : 블로그 협업 05 원고 검토 → GPT - 2026-10-02 0005 클로드.md</b></p>
<p>블로그 협업의 5번째 파일로, 클로드가 원고를 검토해 GPT에게 보낸 파일이에요.</p>
</div>

누가 다음에 읽을 파일인지 목록에서 바로 보입니다.

<div class="wc">
<p><b>여기서 잠깐!</b></p>
<p>클로드 Pro·Max와 ChatGPT를 함께 구독 중이라면, GPT에게 클로드 검토를 바로 맡길 수도 있어요.<br>
GPT가 내 컴퓨터에 설치된 Claude Code를 실행해 클로드의 검토를 받아 옵니다.<br>
반대로 클로드가 GPT를 부르려면, Claude Code에 OpenAI의 Codex 플러그인을 설치하면 돼요.<br>
(2026년 10월 4일 기준)</p>
</div>

<div class="prompt"><span class="who">GPT에게 클로드 검토 바로 맡기기</span><button class="copy" type="button">복사</button><span class="txt">지금까지 한 결과물을 클로드에게 검토받고 싶어.
내 컴퓨터에 설치된 Claude Code를 실행해서 검토를 맡겨줘.

- 검토받을 것: <span class="fill">(결과물 파일 이름)</span>
- 검토 기준: <span class="fill">(틀린 사실, 빠진 단계, 읽기 어려운 문장)</span>

클로드의 검토 의견은 live_collaboration에 MD 파일로 남기고, 반영할 점을 정리해서 알려줘.
Claude Code가 설치돼 있지 않으면 설치 방법부터 한 단계씩 알려줘.
실행을 허용할지 묻는 창이 뜨면, 내가 읽고 판단해서 누를게.</span></div>

## 실시간 협업의 실제 모습

두 AI의 대화는 자동으로 공유되지 않습니다.<br>
제가 말하는 실시간 협업은 새 파일이 생기면 상대 AI가 읽고 회신하는 흐름이에요.

<div class="collab">
<div class="cb-ai"><img src="/assets/img/icons/chatgpt.png" alt=""><b>GPT</b></div>
<div class="cb-arr"><span>① 요청 MD <br>남기기 <i>→</i></span><span><i>←</i> ④ 읽고 <br>반영하기</span></div>
<div class="cb-folder"><b><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2z"/></svg>live_collaboration</b><div class="cb-file">01 요청 → 클로드.md</div><div class="cb-file">02 검토 → GPT.md</div><span class="cb-note">두 AI가 2분마다 새 파일 확인</span></div>
<div class="cb-arr"><span>② 새 파일 <br>읽기 <i>→</i></span><span><i>←</i> ③ 검토 MD <br>남기기</span></div>
<div class="cb-ai"><img src="/assets/img/icons/claude.png" alt=""><b>클로드</b></div>
</div>

### 제가 쓰는 요청문 (한번 해 보세요!)

<p class="sub-note">노란 괄호 칸만 내 상황에 맞게 바꿔주면 됩니다.</p>

<div class="prompt"><span class="who">주담당 AI에게</span><button class="copy" type="button">복사</button><span class="txt">안녕! 이 프로젝트는 네가 주담당이고, <span class="fill">(GPT)</span>가 너랑 같이 일할 거야.

- 프로젝트: <span class="fill">(프로젝트 이름)</span>
- 함께 쓰는 폴더: me 안의 live_collaboration

1. 일 나누기
   - 네가 진행하되, 부분 작업은 <span class="fill">(GPT)</span>에게 맡겨도 돼.
   - 검토가 필요한 시점은 네가 기준을 정해줘. 결과물이 다 끝났을 때는 꼭 검토를 받아줘.

2. 파일로 주고받기
   - 맡기거나 검토받을 일은 live_collaboration에 MD 파일로 남겨줘.
   - 배경·목표·지금까지 한 일을 파일에 다 적어서, 내가 따로 설명하지 않아도 되게 해줘.
   - 파일 이름: 프로젝트·순번·할 일 → 받을 AI - 날짜·시간 작성 AI.md
   - 상대의 원본은 고치지 말고, 의견은 새 MD 파일로 남겨줘.

3. 확인과 마무리
   - 작업 중에는 2분마다 폴더에서 너에게 온 새 파일을 확인해줘.
   - 내가 시킨 일과 모든 검토가 끝나면, 완료 MD 파일을 남기고 확인을 멈춰줘.

공개·발송·삭제처럼 되돌리기 어려운 일은 하기 전에 나에게 먼저 물어봐.</span></div>

<div class="prompt"><span class="who">함께 일할 AI에게</span><button class="copy" type="button">복사</button><span class="txt">안녕! 이번 프로젝트는 <span class="fill">(클로드)</span>가 주담당이고, 너는 같이 일할 거야.

- me 안의 live_collaboration 폴더를 2분마다 확인해서, 너에게 온 MD 파일을 읽고 회신해줘.
- 회신은 같은 이름 규칙의 새 MD 파일로 남기고, 상대의 원본은 고치지 마.
- 완료 MD 파일이 오면 확인을 멈춰줘.</span></div>

저는 위와 같은 방식으로 요청했어요.

## 두 노트북까지도 잇는 폴더

제 <code>me</code>는 원드라이브 안에 있어서, 다른 노트북에도 같은 파일이 실시간으로 내려옵니다.

요즘 저는 AI에게 "네가 직접 해줘."라는 말을 자주 해요.<br>
그러면 AI가 크롬 클릭부터 코드 입력까지 화면을 직접 조작합니다.<br>
이런 기능을 컴퓨터 사용(Computer Use)이라고 해요.<br>
그동안 제가 노트북을 만지면 AI의 작업을 방해하게 되어, 저는 아무것도 못 하더라고요.<br>
그래서 다른 일은 다른 노트북에서 이어서 하니 편했습니다.

<div class="seq"><figure><a href="/assets/img/collaboration/onedrive-sync-status.png" target="_blank" rel="noopener"><img src="/assets/img/collaboration/onedrive-sync-status.png" alt="다른 노트북의 OneDrive가 백업 및 동기화됨 상태이고 협업 폴더의 새 파일을 다운로드한 실제 화면" style="max-width:340px;margin:auto"></a><figcaption>다른 노트북에 협업 파일이 내려온 화면입니다.</figcaption></figure></div>

스터디원 한 분은 맥미니에서 작업한 파일을 윈도우 데스크탑으로 옮길 때마다<br>
USB에 압축해서 옮긴다고 했어요.

<div class="keyline">원드라이브든 구글 드라이브든<br>핵심은 <b>동기화</b>예요.</div>

동기화는 한 컴퓨터에서 파일을 넣거나 고치면, 다른 컴퓨터에도 같은 파일이 자동으로 맞춰지는 기능입니다.<br>
협업 폴더를 동기화 폴더 안에 두면, 윈도우에서 맥으로 옮겨 가거나 두 기기를 동시에 쓸 때도 AI끼리 일을 주고받을 수 있어요.

원드라이브와 구글 드라이브 모두 맥과 윈도우에서 동기화를 쓸 수 있습니다.<br>
구글 드라이브라면 제 <code>me</code>처럼 AI 작업 폴더를 만들고, 그 안에 <code>live_collaboration</code> 폴더를 두면 돼요.

### 구글 드라이브로 해 보기 (한번 해 보세요!)

<p class="sub-note">노란 괄호 칸만 내 상황에 맞게 바꿔주면 됩니다.</p>

<div class="prompt"><span class="who">동기화 폴더 만들기 요청 (데스크탑 앱에)</span><button class="copy" type="button">복사</button><span class="txt">안녕! 두 컴퓨터의 AI가 구글 드라이브 폴더로 파일을 주고받게 하고 싶어.

- 이 컴퓨터: <span class="fill">(맥미니 / 윈도우 데스크탑)</span>
- 보고 있는 글: https://lifeschedule-dotcom.github.io/2026/10/01/onedrive-ai-collaboration/

1. 구글 드라이브 데스크톱 앱 설치
   - Google Drive for desktop을 설치하고 로그인하는 화면을 안내해줘.
   - 내 드라이브 동기화 방식은 미러링으로 골라줘. 용량이 부족하면 먼저 알려줘.

2. 폴더 만들기
   - 내 드라이브 안에 AI 작업 폴더 <span class="fill">(me)</span>를 만들고, 그 안에 live_collaboration 폴더를 만들어줘.
   - 이미 있으면 그대로 써줘.

3. 작업 폴더 선택
   - 클로드·GPT 앱에서 <span class="fill">(me)</span>를 작업 폴더로 고르는 방법을 알려줘.

로그인·비밀번호는 내가 직접 입력할게. 기존 파일은 지우거나 옮기지 마.
다른 컴퓨터에서도 같은 구글 계정으로 이 요청을 한 번 더 할 거야.
한 단계씩 천천히 알려주고, 내가 화면을 캡처해서 보내면 다음에 뭘 누르면 되는지 알려줘.</span></div>

### 확인한 자료

<ul class="refs">
<li><a href="https://support.microsoft.com/en-us/onedrive/sync-your-computer-s-files-and-folders-with-onedrive" target="_blank" rel="noopener">Microsoft: 컴퓨터와 원드라이브 폴더 동기화</a></li>
<li><a href="https://support.microsoft.com/en-us/office/sync-files-with-onedrive-on-macos-d11b9f29-00bb-4172-be39-997da46f913f" target="_blank" rel="noopener">Microsoft: 맥에서 원드라이브 동기화</a></li>
<li><a href="https://support.google.com/drive/answer/13401938" target="_blank" rel="noopener">Google: 데스크톱 파일 스트리밍과 미러링</a></li>
<li><a href="https://learn.chatgpt.com/use-cases/use-your-computer-with-codex" target="_blank" rel="noopener">OpenAI: 컴퓨터 사용 기능</a></li>
<li><a href="https://support.claude.com/en/articles/11145838-use-claude-code-with-your-pro-or-max-plan" target="_blank" rel="noopener">Anthropic: 유료 구독의 Claude Code 사용</a></li>
<li><a href="https://github.com/openai/codex-plugin-cc" target="_blank" rel="noopener">OpenAI: Claude Code용 Codex 플러그인</a></li>
</ul>

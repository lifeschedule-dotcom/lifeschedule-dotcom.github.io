---
title: "여러 노트북에서 AI가 실시간으로 협업하게 만들기"
section: vibe-coding
sub: automation
ref: onedrive-ai-collaboration
date: 2026-10-01 22:30:00 +0900
description: AI가 한 노트북의 화면을 쓰는 동안, 다른 노트북의 AI와 원드라이브 파일로 일을 이어 간 경험.
spacious: true
---

제 윈도우 노트북에서 ChatGPT의 컴퓨터 사용(Computer Use) 기능이 화면을 조작할 때,<br>
저는 그 화면을 동시에 쓰기 불편했습니다.<br>
노트북이 두 대라 두 화면에서 AI에게 일을 나눠 맡겨 봤어요.

<div class="keyline">원드라이브의 <b>동기화</b>로 두 노트북에 같은 폴더를 두고<br>GPT와 클로드가 파일로 검토를 주고받은 제 사례입니다.</div>

## 두 노트북을 잇는 폴더

[1강]({{ '/2026/09/26/gpters-24-setup/' | relative_url }})에서 만든 원드라이브 <code>me</code> 안에 <code>live_collaboration</code> 폴더를 만들었습니다.<br>
아래는 **두 노트북에서 각각 연 같은 폴더**예요.

<div class="shots2">
<figure><a href="/assets/img/collaboration/laptop-a-live-collaboration.png" target="_blank" rel="noopener"><img src="/assets/img/collaboration/laptop-a-live-collaboration.png" alt="첫 번째 노트북의 파일 탐색기에서 me 아래 live_collaboration 폴더와 협업 MD 파일들이 보이는 실제 화면" style="max-width:none"></a><figcaption>노트북 A의 <b>me &gt; live_collaboration</b><br>10월 1일 촬영</figcaption></figure>
<figure><a href="/assets/img/collaboration/laptop-b-live-collaboration.png" target="_blank" rel="noopener"><img src="/assets/img/collaboration/laptop-b-live-collaboration.png" alt="두 번째 노트북의 파일 탐색기에서 me 아래 live_collaboration 폴더와 협업 MD 파일들이 보이는 실제 화면" style="max-width:none"></a><figcaption>노트북 B의 <b>me &gt; live_collaboration</b><br>10월 2일 촬영</figcaption></figure>
</div>

원드라이브가 파일을 두 노트북에 동기화합니다.<br>
각 노트북에서 폴더 접근을 허용한 GPT나 클로드가 그 노트북에 내려온 파일을 읽어요.<br>
GPT와 클로드는 어느 노트북에서든 작업에 맞춰 맡길 수 있습니다.

## 파일로 주고받은 검토

이번에는 GPT에게 지금까지 한 일과 클로드에게 확인받고 싶은 점을 [MD 파일]({{ '/2026/09/27/gpters-24-md/' | relative_url }})에 적게 했습니다.<br>
다른 노트북에서 파일이 내려온 것을 확인한 뒤, 클로드에게 읽고 검토해 달라고 했어요.

<div class="seq"><figure><a href="/assets/img/collaboration/onedrive-sync-status.png" target="_blank" rel="noopener"><img src="/assets/img/collaboration/onedrive-sync-status.png" alt="다른 노트북의 OneDrive가 백업 및 동기화됨 상태이고 협업 폴더의 새 파일을 다운로드한 실제 화면" style="max-width:340px;margin:auto"></a><figcaption>다른 노트북에 협업 파일이 내려온 화면입니다.</figcaption></figure></div>

클로드는 원본을 고치지 않고 별도의 MD 파일에 검토 의견을 남겼습니다.<br>
GPT가 그 의견을 읽고 결과에 반영한 다음, 다시 검토를 받았어요.

파일 이름에는 **프로젝트·순번·할 일**을 먼저 적었습니다.<br>
뒤에는 **→ 받을 AI - 날짜·시간 작성 AI.md**를 붙였어요.<br>
누가 다음에 읽을 파일인지 목록에서 바로 보입니다.

## 실시간 협업의 실제 모습

두 AI의 대화는 자동으로 공유되지 않습니다.<br>
제가 말하는 실시간 협업은 새 파일이 동기화되면 상대 AI가 읽고 회신하는 흐름이에요.<br>
저는 상대 AI에게 폴더를 읽으라고 하고, 작업 중에는 2분 간격으로 새 파일을 확인하게 했습니다.

클로드 Pro·Max 구독으로 Claude Code를 사용할 수 있어요.<br>
한 노트북에서 GPT가 설치된 Claude Code를 실행해 검토를 받은 적도 있습니다.<br>
이번 두 노트북 작업에서는 원드라이브의 MD 파일로 요청과 회신을 주고받았어요.

공개하거나 발송할 결과는 마지막에 제가 확인합니다.

## 원드라이브를 고른 이유

저는 이미 원드라이브 <code>me</code>에 작업 폴더와 Obsidian 보관함을 두고 있었습니다.<br>
<code>live_collaboration</code>은 AI 인계용, <code>Obsidian Vault</code>는 기록용으로 이름과 역할을 구분했어요.<br>
그래서 같은 곳에 협업 폴더 하나를 더 두는 방식이 편했습니다.

## USB 대신 동기화 폴더

스터디원 한 분은 맥미니에서 작업한 파일을 윈도우 데스크탑으로 옮길 때마다<br>
USB에 압축해서 옮긴다고 했어요.

<div class="keyline">원드라이브든 구글 드라이브든<br>핵심은 <b>동기화</b>예요.</div>

동기화는 한 컴퓨터에서 파일을 넣거나 고치면, 다른 컴퓨터에도 같은 파일이 자동으로 맞춰지는 기능입니다.<br>
두 컴퓨터가 같은 폴더를 보게 되니, USB 없이 그 폴더로 AI끼리 일을 주고받을 수 있어요.

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
</ul>

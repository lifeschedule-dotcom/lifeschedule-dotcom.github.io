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
저는 그 화면을 동시에 쓰기 불편했어요.<br>
노트북이 두 대라 두 화면에서 AI에게 일을 나눠 맡겨 봤습니다.

<div class="keyline">두 노트북에 동기화된 같은 폴더를 통해<br>GPT와 클로드가 파일로 검토를 주고받은 제 사례예요.</div>

## 두 노트북을 잇는 폴더

[1강]({{ '/2026/09/26/gpters-24-setup/' | relative_url }})에서 만든 원드라이브 <code>me</code> 안에 <code>live_collaboration</code> 폴더를 뒀어요.<br>
아래는 **두 노트북에서 각각 연 같은 폴더**예요.

<div class="shots2">
<figure><a href="/assets/img/collaboration/laptop-a-live-collaboration.png" target="_blank" rel="noopener"><img src="/assets/img/collaboration/laptop-a-live-collaboration.png" alt="첫 번째 노트북의 파일 탐색기에서 me 아래 live_collaboration 폴더와 협업 MD 파일들이 보이는 실제 화면" style="max-width:none"></a><figcaption>노트북 A의 <b>me &gt; live_collaboration</b><br>10월 1일 촬영</figcaption></figure>
<figure><a href="/assets/img/collaboration/laptop-b-live-collaboration.png" target="_blank" rel="noopener"><img src="/assets/img/collaboration/laptop-b-live-collaboration.png" alt="두 번째 노트북의 파일 탐색기에서 me 아래 live_collaboration 폴더와 협업 MD 파일들이 보이는 실제 화면" style="max-width:none"></a><figcaption>노트북 B의 <b>me &gt; live_collaboration</b><br>10월 2일 촬영</figcaption></figure>
</div>

A/B는 사진을 구분하는 이름이에요.<br>
촬영 시각이 달라 파일 목록은 조금 달라요.<br>
원드라이브가 파일을 두 노트북에 동기화해요.<br>
각 노트북에서 폴더 접근을 허용한 GPT나 클로드가 그 노트북에 내려온 파일을 읽어요.<br>
GPT와 클로드는 어느 노트북에서든 작업에 맞춰 맡길 수 있어요.

## 파일로 주고받은 검토

이번에는 GPT에게 지금까지 한 일과 클로드에게 확인받고 싶은 점을 [MD 파일]({{ '/2026/09/27/gpters-24-md/' | relative_url }})에 적게 했어요.<br>
다른 노트북에서 파일이 내려온 것을 확인한 뒤, 클로드에게 읽고 검토해 달라고 했습니다.

<div class="seq"><figure><a href="/assets/img/collaboration/onedrive-sync-status.png" target="_blank" rel="noopener"><img src="/assets/img/collaboration/onedrive-sync-status.png" alt="다른 노트북의 OneDrive가 백업 및 동기화됨 상태이고 협업 폴더의 새 파일을 다운로드한 실제 화면" style="max-width:340px;margin:auto"></a><figcaption>다른 노트북에 협업 파일이 내려온 화면이에요.</figcaption></figure></div>

클로드는 원본을 고치지 않고 별도의 MD 파일에 검토 의견을 남겼어요.<br>
GPT가 그 의견을 읽고 결과에 반영한 다음, 다시 검토를 받았습니다.

파일 이름에는 **프로젝트·순번·할 일**을 먼저 적었어요.<br>
뒤에는 **→ 받을 AI - 날짜·시간 작성 AI.md**를 붙였어요.<br>
누가 다음에 읽을 파일인지 목록에서 바로 보입니다.

## 실시간 협업의 실제 모습

두 AI의 대화는 자동으로 공유되지 않아요.<br>
제가 말하는 실시간 협업은 새 파일이 동기화되면 상대 AI가 읽고 회신하는 흐름이에요.<br>
저는 상대 AI에게 폴더를 읽으라고 하고, 작업 중에는 2분 간격으로 새 파일을 확인하게 했어요.

클로드 Pro·Max 구독으로 Claude Code를 사용할 수 있어요.<br>
한 노트북에서 GPT가 설치된 Claude Code를 실행해 검토를 받은 적도 있어요.<br>
이번 두 노트북 작업에서는 원드라이브의 MD 파일로 요청과 회신을 주고받았습니다.

공개하거나 발송할 결과는 마지막에 제가 확인합니다.

## 원드라이브를 고른 이유

저는 이미 원드라이브 <code>me</code>에 작업 폴더와 Obsidian 보관함을 두고 있었어요.<br>
<code>live_collaboration</code>은 AI 인계용, <code>Obsidian Vault</code>는 기록용으로 이름과 역할을 구분했어요.<br>
그래서 같은 곳에 협업 폴더 하나를 더 두는 방식이 편했습니다.

Google Drive for desktop도 파일을 컴퓨터에 보관하는 **미러링**을 지원해요.<br>
두 노트북에서 같은 파일을 동기화할 수 있다면, 구글 드라이브로도 이런 방식의 협업을 해볼 수 있습니다.

### 확인한 자료

<ul class="refs">
<li><a href="https://support.microsoft.com/en-us/onedrive/sync-your-computer-s-files-and-folders-with-onedrive" target="_blank" rel="noopener">Microsoft: 컴퓨터와 원드라이브 폴더 동기화</a></li>
<li><a href="https://support.google.com/drive/answer/13401938" target="_blank" rel="noopener">Google: 데스크톱 파일 스트리밍과 미러링</a></li>
<li><a href="https://learn.chatgpt.com/use-cases/use-your-computer-with-codex" target="_blank" rel="noopener">OpenAI: 컴퓨터 사용 기능</a></li>
<li><a href="https://support.claude.com/en/articles/11145838-use-claude-code-with-your-pro-or-max-plan" target="_blank" rel="noopener">Anthropic: 유료 구독의 Claude Code 사용</a></li>
</ul>

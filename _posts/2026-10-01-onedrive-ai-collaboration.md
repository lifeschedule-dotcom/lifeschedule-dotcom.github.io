---
title: "여러 노트북에서 AI가 실시간으로 협업하게 만들기"
section: vibe-coding
sub: automation
ref: onedrive-ai-collaboration
date: 2026-10-01 22:30:00 +0900
description: AI가 한 노트북의 화면을 쓰는 동안, 다른 노트북의 AI와 원드라이브 파일로 일을 이어 간 경험.
spacious: true
---

제 윈도우 노트북에서 ChatGPT의 컴퓨터 사용(Computer Use) 기능이 화면을 조작할 때, 저는 그 화면을 동시에 쓰기 불편했어요.
노트북이 두 대라 각 노트북의 AI에게 일을 나눠 맡겨 봤습니다.

<div class="keyline">GPT가 결과를 파일로 남기고<br>클로드가 다른 노트북에서 검토한 제 사례예요.</div>

## 두 노트북을 잇는 폴더

[1강]({{ '/2026/09/26/gpters-24-setup/' | relative_url }})에서 만든 원드라이브 <code>me</code> 안에 <code>live_collaboration</code> 폴더를 뒀어요.
두 노트북에 같은 폴더가 동기화되니, 한쪽에서 저장한 파일을 다른 쪽에서도 열 수 있었어요.

<div class="twoai">
<div class="ta"><div class="ta-h"><span class="ta-i"><img src="/assets/img/icons/chatgpt.png" alt=""></span>GPT 노트북</div><p>작업 결과와 검토 요청을 파일로 남겼어요.</p></div>
<div class="ta"><div class="ta-h"><span class="ta-i"><img src="/assets/img/icons/claude.png" alt=""></span>클로드 노트북</div><p>동기화된 파일을 읽고 답장을 남겼어요.</p></div>
</div>

<div class="seq"><figure><a href="/assets/img/collaboration/me-folder.png" target="_blank" rel="noopener"><img src="/assets/img/collaboration/me-folder.png" alt="다른 노트북의 원드라이브 me 폴더에 lifeschedule 블로그, live_collaboration, Obsidian Vault가 나란히 있는 실제 화면" style="max-width:520px;margin:auto"></a><figcaption>제가 쓰는 <b>me</b> 폴더예요. 협업 폴더와 Obsidian 보관함이 나란히 있어요.</figcaption></figure></div>

## GPT 요청과 클로드 검토

GPT에게 지금까지 한 일과 클로드에게 확인받고 싶은 점을 [MD 파일]({{ '/2026/09/27/gpters-24-md/' | relative_url }})에 적게 했어요.
다른 노트북에서 파일이 내려온 것을 확인한 뒤, 클로드에게 읽고 검토해 달라고 했습니다.

<div class="seq"><figure><a href="/assets/img/collaboration/onedrive-sync-status.png" target="_blank" rel="noopener"><img src="/assets/img/collaboration/onedrive-sync-status.png" alt="다른 노트북의 OneDrive가 백업 및 동기화됨 상태이고 협업 폴더의 새 파일을 다운로드한 실제 화면" style="max-width:340px;margin:auto"></a><figcaption>다른 노트북에 협업 파일이 내려온 화면이에요.</figcaption></figure></div>

클로드는 원본을 고치지 않고 별도의 MD 파일에 검토 의견을 남겼어요.
GPT가 그 의견을 읽고 결과에 반영한 다음, 다시 검토를 받았습니다.

<div class="seq"><figure><a href="/assets/img/collaboration/request-and-review.png" target="_blank" rel="noopener"><img src="/assets/img/collaboration/request-and-review.png" alt="협업 폴더에서 GPT의 요청 파일과 Claude가 남긴 검토 파일이 함께 보이는 실제 화면, Claude 회신에 분홍 테두리 표시" style="max-width:410px;margin:auto"></a><figcaption>분홍 칸은 클로드가 남긴 회신 파일이에요.</figcaption></figure></div>

## 실시간 협업의 실제 모습

두 AI의 대화는 자동으로 공유되지 않아요.
제가 말하는 실시간 협업은 새 파일이 동기화되면 상대 AI가 읽고 회신하는 흐름이에요.
저는 상대 AI에게 폴더를 읽으라고 하고, 작업 중에는 2분 간격으로 새 파일을 확인하게 했어요.
클로드 Pro·Max 구독으로 Claude Code를 사용할 수 있어요.
제가 이전에 GPT에서 클로드 검토를 직접 불렀을 때는 이 노트북에 설치된 Claude Code를 별도로 실행했습니다.
공개하거나 발송할 결과는 마지막에 제가 확인합니다.

## 원드라이브를 고른 이유

저는 이미 원드라이브 <code>me</code>에 작업 폴더와 Obsidian 보관함을 두고 있었어요.
그래서 같은 곳에 협업 폴더 하나를 더 두는 방식이 편했습니다.

Google Drive for desktop도 파일을 컴퓨터에 보관하는 **미러링**을 지원해요.
두 노트북에서 같은 파일을 동기화할 수 있다면, 구글 드라이브로도 이런 방식의 협업을 해볼 수 있습니다.

### 확인한 자료

<ul class="refs">
<li><a href="https://support.microsoft.com/en-us/onedrive/windows/move-files-to-a-new-windows-pc-using-onedrive" target="_blank" rel="noopener">Microsoft: 원드라이브로 새 PC에 파일 옮기기</a></li>
<li><a href="https://support.google.com/drive/answer/13401938" target="_blank" rel="noopener">Google: 데스크톱 파일 스트리밍과 미러링</a></li>
<li><a href="https://learn.chatgpt.com/use-cases/use-your-computer-with-codex" target="_blank" rel="noopener">OpenAI: 컴퓨터 사용 기능</a></li>
<li><a href="https://support.claude.com/en/articles/11145838-use-claude-code-with-your-pro-or-max-plan" target="_blank" rel="noopener">Anthropic: 유료 구독의 Claude Code 사용</a></li>
</ul>

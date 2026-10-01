---
title: "원드라이브 폴더로 클로드와 GPT가 서로 검토하게 만들기"
section: vibe-coding
sub: automation
ref: onedrive-ai-collaboration
date: 2026-10-01 22:30:00 +0900
description: 두 노트북의 AI가 원드라이브 같은 폴더에 요청과 검토 결과를 따로 남기는 방법.
spacious: true
---

노트북 한 대에서 AI가 화면을 조작할 때, 다른 노트북으로 일을 이어 갈 수 있어요.

<div class="keyline">원드라이브 한 폴더에서<br>GPT 요청 → 클로드 검토 → GPT 반영</div>

## <span class="no">1</span> 두 노트북의 me 폴더

[1강]({{ '/2026/09/26/gpters-24-setup/' | relative_url }})에서 만든 원드라이브 <code>me</code> 폴더를 두 노트북에서 열어요.

<div class="twoai">
<div class="ta"><div class="ta-h"><span class="ta-i"><img src="/assets/img/icons/chatgpt.png" alt=""></span>GPT 노트북</div><p>요청 파일을 남겨요.</p></div>
<div class="ta"><div class="ta-h"><span class="ta-i"><img src="/assets/img/icons/claude.png" alt=""></span>클로드 노트북</div><p>같은 폴더에서 읽어요.</p></div>
</div>

<!-- 실제 두 노트북 파일 탐색기 me 폴더 캡처를 Claude 회신 뒤 삽입 -->

## <span class="no">2</span> 첫 번째 AI에게 요청 남기기

[2강]({{ '/2026/09/26/gpters-24-why/' | relative_url }})에서 배운 **맥락**을 [3강]({{ '/2026/09/27/gpters-24-md/' | relative_url }})의 **MD 파일**에 남겨요.<br>
노란 괄호 칸만 내 상황에 맞게 바꿔주면 됩니다.

<div class="prompt od-prompt"><span class="who">GPT에게</span><button class="copy" type="button">복사</button><span class="txt">안녕! 다른 노트북의 클로드에게 검토를 받고 싶어.
원드라이브 me 안에 live_collaboration 폴더가 없으면 만들어 줘.

할 일: <span class="fill">(만들거나 검토할 일)</span>
배경: <span class="fill">(왜 하는지, 지금까지 한 일)</span>

결과와 클로드에게 확인받고 싶은 점을
live_collaboration의 새 MD 파일에 적어 줘.
이름은 '01 요청 → Claude.md'로 해 줘.
기존 파일은 지우거나 덮어쓰지 말고,
저장한 실제 경로를 알려 줘.</span></div>

<div class="callout warn od-warning"><svg><use href="#i-warn"/></svg><div>로그인·비밀번호·결제는 내가 직접 입력해요.<br>AI가 묻는 “허용할까요?” 창은 읽고 내가 결정해요.</div></div>

<code>01 요청 → Claude.md</code>가 다른 노트북에도 보이면 클로드에게 이어서 부탁해요.

<!-- 실제 01 요청 파일이 다른 노트북에 동기화된 화면을 Claude 회신 뒤 삽입 -->

## <span class="no">3</span> 클로드에게 따로 검토 맡기기

<div class="prompt od-prompt"><span class="who">클로드에게</span><button class="copy" type="button">복사</button><span class="txt">원드라이브 me/live_collaboration의
'01 요청 → Claude.md'를 읽어 줘.

원본 파일은 고치지 말고,
틀린 점·빠진 점을 확인해 줘.
검토 결과는 '02 검토 결과 → GPT.md'라는
새 MD 파일로 같은 폴더에 저장해 줘.

직접 확인한 것과 아직 확인하지 못한 것을 구분하고,
읽고 저장한 실제 경로를 알려 줘.</span></div>

<div class="prompt od-prompt"><span class="who">다시 GPT에게</span><button class="copy" type="button">복사</button><span class="txt">live_collaboration의 '02 검토 결과 → GPT.md'를 읽어 줘.
맞는 지적을 결과에 반영해 줘.
반영하지 않은 지적은 이유를 알려 줘.</span></div>

**한 파일은 한 AI만 수정**하면 서로 덮어쓸 위험이 줄어요.

<!-- Claude의 실제 회신 파일과 GPT 반영 화면을 삽입 -->

## <span class="no">4</span> 마지막으로 내가 확인하기

두 AI가 같은 답을 해도 틀릴 수 있어요.<br>
공개·발송·결제처럼 중요한 일은 **최종 결과를 내가 확인**해요.

폴더가 같아도 두 AI의 대화가 저절로 합쳐지지는 않아요.<br>
이번에는 클로드에게 **5분 뒤 폴더를 읽어 달라**고 했고, 검토 파일을 받았어요.

<div class="done od-done"><div class="done-t">🎉 요청 파일과 검토 파일이 두 노트북에 보이면 성공이에요!</div></div>

<details class="fallback"><summary>다른 동기화 도구도 될까요?</summary>
<p>네. Google Drive for desktop도 파일을 컴퓨터에 보관하는 미러링을 지원해요. 저는 이미 <code>me</code>와 Obsidian Vault를 원드라이브에서 쓰고 있어서 같은 폴더를 활용했어요.</p>
</details>

<details class="fallback"><summary>GPT가 클로드를 직접 불러 검토받을 수도 있나요?</summary>
<p>네. Claude Code 프로그램을 설치하고 연결한 환경에서는 GPT가 직접 실행해 검토받을 수도 있어요.</p>
</details>

### 확인한 자료

<ul class="refs">
<li><a href="https://support.microsoft.com/en-us/onedrive/sync-your-computer-s-files-and-folders-with-onedrive" target="_blank" rel="noopener">Microsoft: 원드라이브 폴더 동기화</a></li>
<li><a href="https://support.google.com/drive/answer/13401938" target="_blank" rel="noopener">Google: 데스크톱 파일 스트리밍과 미러링</a></li>
<li><a href="https://learn.chatgpt.com/use-cases/use-your-computer-with-codex" target="_blank" rel="noopener">OpenAI: 컴퓨터 사용 기능</a></li>
<li><a href="https://support.claude.com/en/articles/11145838-use-claude-code-with-your-pro-or-max-plan" target="_blank" rel="noopener">Anthropic: 유료 구독으로 Claude Code 사용</a></li>
</ul>

---
title: me에 받은 자료를 Obsidian 홈 목차에 연결하기
section: vibe-coding
sub: gpters24
ref: gpters-24-obsidian-index
date: 2026-09-27 22:00:00 +0900
description: 4강. 북부대공 실습 파일을 GitHub에서 받아 me에 저장하고, AI가 소개 노트와 홈 링크를 만드는 과정을 실제 화면으로 따라 해요.
---
<link rel="stylesheet" href="{{ '/assets/css/lesson4.css' | relative_url }}">
<div class="lesson4">
<div class="lead-note">자료를 <b>me 폴더에 저장</b>했어요. 이제 Obsidian을 열었을 때 그 프로젝트를 찾고 싶어요.<br>오늘은 북부대공 실습 자료로 <b>저장 → 목차 연결 → 열어 보기</b>까지 함께 해 볼게요.</div>

<div class="keyline">원본은 me의 프로젝트 폴더에,<br>소개와 원본 위치는 Obsidian 보관함에.<small>둘 사이의 연결을 AI에게 만들어 달라고 요청해요.</small></div>

<h2><span class="no">1</span> 오늘 할 일, 네 단계예요</h2>

<ol class="l4-steps">
<li><span class="l4-badge">처음 한 번</span><b>규칙을 준비해요</b><p>규칙 3개를 보관함에 두고, AI에게 시작 안내를 연결해 달라고 해요.</p></li>
<li><span class="l4-badge">내가</span><b>자료를 저장해요</b><p><code>me/북부대공</code>에 실습 MD를 넣어요.</p></li>
<li><span class="l4-badge">AI가</span><b>목차를 연결해요</b><p>보관함에 소개 노트를 쓰고, 홈에 그 노트의 링크를 넣어요.</p></li>
<li><span class="l4-badge">내가</span><b>Obsidian에서 열어요</b><p>홈 → 북부대공 실습 → 원본 위치를 확인해요.</p></li>
</ol>

<div class="callout tip"><svg><use href="#i-note"/></svg><div><b>1·3강을 마쳤다면 이어서 시작하세요.</b><br><code>me</code>와 그 안의 <code>Obsidian Vault</code>를 사용해요. <b>me는 AI 전용 폴더의 예시 이름</b>이에요. AI 전용 폴더나 보관함에 다른 이름을 썼다면 아래 요청문에서도 내 이름으로 바꿔 주세요. 설치부터 필요하면 <a href="{{ '/2026/09/26/gpters-24-setup/' | relative_url }}">1강</a>을 먼저 따라 해요.</div></div>

<p>아래는 Windows에서 직접 따라 해 본 화면이에요. 필요한 부분만 잘라 보여 드려요. <b>메뉴 위치와 글꼴은 내 컴퓨터와 조금 다를 수 있어요.</b></p>

<h2 id="starter-rules"><span class="no">2</span> 규칙 파일부터 준비해요</h2>

<p>AI에게 “내 자료는 이렇게 정리해 줘”라고 알려 줄 <b>업무 매뉴얼</b>이에요. 처음 쓰는 분은 아래 파일을 <b>하나씩 받아, 세 개 모두 Obsidian 보관함 안</b>에 넣어요.</p>

<div class="callout tip"><svg><use href="#i-note"/></svg><div><b>1강에서 이미 규칙을 만들었다면?</b><br>기존 파일은 제자리에 둬요. 아래 세 파일을 받은 뒤, <b>AI 채팅의 파일 첨부로 세 개를 보내 주세요.</b> 아래 연결 요청으로 기존 규칙에 필요한 내용을 합칠 거예요. 새로 준비하는 분은 다음 순서대로 보관함에 넣어요.</div></div>

<div class="l4-downloads">
<p><a class="l4-button" href="{{ '/assets/downloads/gpters24/rules/AGENTS.md' | relative_url }}" download="AGENTS.md">① AGENTS.md 받기</a></p>
<p><a class="l4-button" href="{{ '/assets/downloads/gpters24/rules/CLAUDE.md' | relative_url }}" download="CLAUDE.md">② CLAUDE.md 받기</a></p>
<p><a class="l4-button" href="{{ '/assets/downloads/gpters24/rules/AI협업규칙.md' | relative_url }}" download="AI협업규칙.md">③ AI협업규칙.md 받기</a></p>
</div>

<ol>
<li>위 버튼을 하나씩 눌러요. 압축을 풀 필요 없이 <b>.md 파일 세 개</b>를 받아요.</li>
<li>파일 탐색기의 <b>다운로드</b> 폴더에서 세 파일을 찾아요. 파일 하나를 선택하고 <b>Ctrl+X</b>를 눌러요.</li>
<li>1강에서 만든 <b>me → Obsidian Vault</b> 폴더를 차례로 열고 <b>Ctrl+V</b>를 눌러요. 나머지 두 파일도 같은 곳으로 옮겨요.</li>
</ol>

<p>저장 위치를 고르는 창이 뜨면 처음부터 그 보관함을 골라도 돼요. <b>같은 이름의 파일이 있다는 창이 뜨면 취소해요.</b> 취소한 파일이 있다면 <b>다운로드 폴더에 남은 파일을 AI 채팅에 첨부</b>하고, 아래 연결 요청을 보내요. AI가 받은 내용과 기존 보관함의 규칙을 비교해 필요한 부분만 합쳐요.</p>

<p>여러 번 받으면 이름에 <code>(1)</code>이 붙을 수 있어요. 이미 규칙이 있다면 파일을 첨부하는 방법을 쓰세요. 처음 넣는 파일은 최종 이름이 아래처럼 <b>AGENTS.md·CLAUDE.md·AI협업규칙.md</b>가 되게 해요. 이름을 바꾸려면 파일을 선택하고 <b>F2</b>를 눌러요. 확장명이 숨겨져 있으면 .md를 다시 붙이지 않아요.</p>

<pre class="l4-tree">me/                       ← 내가 만든 AI 전용 폴더
└─ Obsidian Vault/         ← 1강에서 연 보관함
   ├─ AGENTS.md
   ├─ CLAUDE.md
   └─ AI협업규칙.md</pre>

<div class="seq"><figure><img src="/assets/img/gpters24/lesson4/07-vault-rules.png" alt="보관함 안의 AGENTS, AI협업규칙, CLAUDE 파일 세 개가 보이는 탐색기 화면" style="max-width:420px;margin:auto;display:block"><figcaption><b>세 규칙이 같은 보관함 안에 있어요.</b> 확장명이 숨겨진 Windows 화면에서는 이름 끝의 .md가 생략돼요. 위 그림과 이 화면은 같은 세 파일을 가리켜요.</figcaption></figure></div>

<div class="l4-rules">
<p><b>AGENTS.md</b><br>AI가 이 보관함에서 일할 때 읽는 시작 안내예요. 정리 전에 AI협업규칙.md를 읽도록 적어 뒀어요.</p>
<p><b>CLAUDE.md</b><br>Claude Code가 같은 시작 안내를 읽도록 연결하는 파일이에요.</p>
<p><b>AI협업규칙.md</b><br>원본을 어디에 두고, 소개 노트와 목차를 어떻게 만들지 적었어요. <b>앞으로 내 방식으로 고칠 핵심 문서</b>예요.</p>
</div>

<p><b>아래 연결을 마친 뒤</b> Obsidian에서 <b>Ctrl+O → AI협업규칙</b>을 입력하고 검색된 파일을 골라 Enter를 눌러 보세요. 원본 폴더와 보관함을 나란히 둔다는 내용이 있는지 읽어 봐요. 기존 규칙과 합쳤다면 제목은 조금 달라도 돼요. Mac은 <b>Cmd+O</b>를 써요.</p>

<h3>AI에게 처음 한 번 연결 부탁하기</h3>

<p>1강에서 준비한 데스크탑 앱의 <b>로컬 파일 작업 화면</b>을 열어요. GPT 쪽은 Codex의 Local 프로젝트, 클로드 쪽은 Claude Code를 기준으로 설명해요. 두 경우 모두 <b>me를 작업 폴더</b>로 선택해요. 폴더 접근을 허용하는 창은 내용을 읽고 직접 눌러 주세요.</p>

<p>일반 채팅에 MD를 첨부하면 AI가 내용을 읽을 수 있어요. <b>내 컴퓨터의 파일까지 바꾸려면 로컬 폴더 접근이 필요해요.</b> 폴더 선택이 막히면 <a href="{{ '/2026/09/26/gpters-24-setup/' | relative_url }}">1강의 ‘AI에게 세팅 시키기’</a> 화면을 참고해요.</p>

<p>보관함에 넣은 규칙을 <b>me에서 시작하는 AI도 찾아 읽게</b> 연결할 거예요. 이때 AI가 <b>me 바로 아래에 짧은 시작 안내 두 개</b>를 만들거나 보완해요. 이름은 AGENTS.md·CLAUDE.md이고, 내용은 “보관함의 규칙을 먼저 읽어라”라는 안내예요.</p>

<div class="l4-request"><span class="l4-label">처음 연결하는 요청 · 노란 폴더 이름을 내 것에 맞춰요</span>
<p>지금 작업 폴더가 <span class="fill">me</span>인지 실제로 확인해 줘.</p>
<p>그 안의 <span class="fill">Obsidian Vault</span>에 있는 규칙을 확인해 줘. 내가 수업용 MD를 첨부했다면 참고 자료로 읽고, 기존 규칙은 지키면서 필요한 내용을 합쳐 줘. 보관함에 없는 AGENTS.md·CLAUDE.md·AI협업규칙.md는 보관함 안에 만들어 줘. 기존 작업기록.md도 그대로 이어 쓰게 해 줘. 서로 충돌하는 규칙만 내게 확인해 줘.</p>
<p>앞으로 <span class="fill">me</span>에서 시작할 때도 보관함 규칙을 찾도록, <span class="fill">me</span> 바로 아래의 AGENTS.md와 CLAUDE.md에 짧은 시작 안내를 연결해 줘. 기존 파일이 있으면 먼저 읽고 필요한 내용만 합쳐 줘.</p>
<p>프로젝트 원본과 보관함은 나란히 유지해 줘. 끝나면 실제로 읽은 규칙과 만들거나 고친 파일의 위치를 알려 줘.</p></div>

<div class="l4-explain">
<p><b>첫째 줄 — AI가 일하는 자리</b><br>내가 고른 me 폴더가 실제 작업 위치인지 확인해요.</p>
<p><b>둘째 줄 — 먼저 읽을 규칙</b><br>보관함의 기존 규칙을 읽고, 첨부한 수업용 규칙이 있다면 필요한 내용만 합치게 해요.</p>
<p><b>셋째 줄 — 다음 대화의 시작 안내</b><br>AI가 me의 시작 파일에서 보관함 규칙으로 찾아가게 해요.</p>
<p><b>넷째 줄 — 지킬 구조와 완료 확인</b><br>원본의 자리를 유지하고 실제 변경한 파일을 확인해요.</p>
</div>

<p><b>정리하면, 준비한 규칙은 보관함 안의 3개</b>예요. AI가 연결하는 <b>me의 2개는 보관함을 찾아가는 시작 안내</b>예요. 두 곳에 같은 이름이 있어도 맡은 역할이 달라요. <b>정리 방식을 바꿀 때는 보관함의 AI협업규칙.md</b>를 AI와 함께 고쳐요.</p>

<ul class="l4-checks">
<li><b>보관함 안</b> — AGENTS.md·CLAUDE.md·AI협업규칙.md 세 개를 확인해요.</li>
<li><b>me 바로 아래</b> — AGENTS.md·CLAUDE.md에 보관함의 규칙을 먼저 읽으라는 안내가 있는지 확인해요.</li>
</ul>
<p>1·3강에서 me에 시작 파일을 만들었다면 기존 내용에 연결 문장만 더해졌을 수 있어요. AI에게 <b>“읽은 협업규칙에서 원본과 목차는 각각 어디에 두기로 했어?”</b>라고 확인해 보세요.</p>

<p>다음에 새 대화를 시작할 때도 <b>me를 작업 위치로</b> 열어요. 규칙을 찾는 범위는 도구와 작업 위치에 따라 달라지므로, 연결을 마치면 <b>새 대화에서 “보관함의 협업규칙을 읽고 원본·목차의 위치를 설명해 줘”</b>라고 한 번 확인해요. 두 AI를 모두 쓴다면 각각 확인해요. <a href="https://learn.chatgpt.com/docs/agent-configuration/agents-md">Codex 규칙 파일 안내</a> · <a href="https://code.claude.com/docs/en/memory">Claude Code 규칙 파일 안내</a></p>

<h2><span class="no">3</span> 북부대공 자료를 me에 저장해요</h2>

<h3 class="step-h"><span>1</span><img src="/assets/img/icons/github.png" alt="">GitHub에서 MD 파일 하나 받기</h3>

<p><a class="l4-button" href="https://github.com/lifeschedule-dotcom/gpters-24-goldmine-payroll/blob/main/00_%EB%B6%81%EB%B6%80%EC%84%B1_%EC%8B%A4%EC%8A%B5_%EC%83%81%ED%99%A9.md" target="_blank" rel="noopener">북부대공 실습 파일 열기 ↗</a></p>

<p>열린 페이지에서 <b>아래로 향한 화살표</b>를 눌러요. 마우스를 올리면 <code>Download raw file</code>이라고 나오는 버튼이에요. 이 공개 파일은 로그인 없이 받을 수 있어요.</p>

<div class="seq"><figure><a href="/assets/img/gpters24/lesson4/01-github-download.png" target="_blank" rel="noopener"><img src="/assets/img/gpters24/lesson4/01-github-download.png" alt="GitHub의 00_북부성_실습_상황.md 페이지. Raw 오른쪽 다운로드 버튼에 분홍 테두리가 있다"></a><figcaption><b>분홍 테두리의 다운로드 버튼</b>을 눌러요. 파일 이름은 <code>00_북부성_실습_상황.md</code>예요.</figcaption></figure></div>

<h3 class="step-h"><span>2</span>me 안에 북부대공 폴더 만들기</h3>

<ol>
<li>파일 탐색기에서 <b>1강 때 만든 me 폴더</b>를 열어요.</li>
<li>위쪽의 <b>새로 만들기 → 폴더</b>를 눌러요.</li>
<li>이름을 <b>북부대공</b>으로 적고 Enter를 눌러요.</li>
<li>방금 받은 MD 파일을 이 폴더에 넣어요. 보통 <b>다운로드</b> 폴더에 있어요. 파일을 선택해 <b>Ctrl+X</b>, 북부대공 폴더를 열어 <b>Ctrl+V</b>를 누르면 옮겨져요.</li>
</ol>

<p>다운로드할 때 저장 위치를 고르는 창이 뜬다면, 처음부터 이 <b>북부대공</b> 폴더를 골라도 돼요. 이미 같은 이름의 파일이 있다면 내용을 확인한 뒤 진행해요.</p>

<div class="l4-location"><figure><img src="/assets/img/gpters24/lesson4/02a-folder-location.png" alt="파일 탐색기 위치 표시: OneDrive, me, 북부대공"><figcaption><b>저장 위치</b> — me 다음에 북부대공이 보여요.</figcaption></figure><figure><img src="/assets/img/gpters24/lesson4/02b-folder-file.png" alt="실제 북부대공 폴더 안에 00_북부성_실습_상황 파일이 있고 유형은 MD 파일, 크기는 5KB로 표시된다"><figcaption><b>저장한 파일</b> — 확장명이 숨겨져 있으면 이름 끝의 .md가 생략돼요. 이 화면에서는 유형이 ‘MD 파일’이에요.</figcaption></figure></div>

<p>여기까지는 <b>원본 파일을 저장한 상태</b>예요. Obsidian 홈의 목록은 다음 단계에서 만들어요.</p>

<h2><span class="no">4</span> AI에게 목차 연결을 맡겨요</h2>

<p>규칙을 확인한 <b>me의 AI 대화</b>에서 이어서 요청해요. 원본 폴더가 실제로 있는지 확인하고, 보관함의 소개 노트와 홈 링크를 만들도록 맡길 거예요.</p>

<div class="l4-request"><span class="l4-label">목차 연결 요청 · 노란 부분은 내 것으로 바꿔요</span><p><span class="fill">me</span> 안의 북부대공 폴더에 스터디 자료를 받았어.</p><p><span class="fill">Obsidian Vault</span>의 AI협업규칙.md를 먼저 읽어 줘. 기존 홈이나 스터디 소개 노트가 있으면 그 정리 방식을 이어 써 줘.</p><p>원본은 지금 위치에 두고, 보관함 안에 ‘북부대공 실습’ 소개 노트를 만들어 줘. 소개, 지금 상태, 다음 할 일, 원본 위치를 적어 줘. 내가 자료를 받은 GitHub 주소도 “GitHub에서 같은 실습 자료 읽기” 링크로 넣어 줘: <span class="fill">(앞 단계에서 연 GitHub 페이지 주소)</span></p><p>기존 목차가 있으면 거기에서 이 소개 노트를 누를 수 있게 연결해 줘. 목차가 없으면 홈.md를 만들어 줘. 소개 노트는 기존 스터디 폴더가 있으면 그 안에, 없으면 ‘10 프로젝트/지피터스 스터디’에 만들어 줘.</p><p>끝나면 새로 만든 파일과 수정한 파일의 위치를 알려 주고, 원본이 그대로 있는지도 확인해 줘.</p></div>

<div class="l4-explain">
<p><b>첫째 줄 — 내가 한 일</b><br>어떤 폴더에 무엇을 받았는지 알려 줘요.</p>
<p><b>둘째 줄 — 먼저 읽을 기준</b><br>AI가 이미 정해 둔 정리 방식을 이어 쓰게 해요.</p>
<p><b>셋째 줄 — 원본과 소개의 자리</b><br>다운로드한 파일의 위치를 지키고, 짧은 소개 노트를 만들게 해요.</p>
<p><b>넷째 줄 — 내가 누를 연결</b><br>홈이나 기존 목차에 링크를 넣어야 Obsidian에서 클릭해 찾아갈 수 있어요.</p>
<p><b>다섯째 줄 — 완료 확인</b><br>AI의 답변과 실제 파일을 대조해요.</p>
</div>



<h3>AI가 바꾸는 곳을 확인해요</h3>

<div class="l4-filemap" aria-label="원본 폴더와 보관함 안의 소개 노트, 홈 파일의 관계">
<div class="l4-root">me</div>
<div class="l4-branches">
<section><span class="l4-badge">원본 보관</span><h3>북부대공</h3><p><code>00_북부성_실습_상황.md</code></p><p>내가 받은 소설 설정과 실습 조건</p><b>지금 위치에 그대로 있어요.</b></section>
<section><span class="l4-badge">AI가 기록</span><h3>Obsidian Vault</h3><p><code>10 프로젝트/…/북부대공 실습.md</code><br>소개와 원본 위치를 적은 노트</p><p><code>홈.md</code><br>위 소개 노트로 가는 링크 한 줄</p></section>
</div>
<p class="l4-map-foot">홈에서 소개 노트를 열고 → 소개 노트에서 원본 위치로 찾아가요.</p>
</div>

<p><b>‘목차에 등록한다’는 말은 이 두 가지 작업을 뜻해요.</b> AI가 소개 노트를 만들고, 홈 문서에 그 노트의 링크를 넣어요. Obsidian은 보관함 안에 생긴 파일과 바뀐 내용을 화면에 보여 줘요.</p>



<h2><span class="no">5</span> Obsidian 홈에서 눌러 봐요</h2>

<h3 class="step-h"><span>1</span><img src="/assets/img/icons/obsidian.png" alt="">홈 찾기</h3>

<p>Obsidian 창을 한 번 클릭해요. 키보드에서 <b>Ctrl+O</b>를 누르고 <b>홈</b>이라고 적어요. 아래 검색 결과에 AI가 만들거나 고친 <b>홈</b> 노트가 나오면 선택하고 Enter를 눌러요. Mac은 <b>Cmd+O</b>예요. <a href="https://obsidian.md/help/plugins/quick-switcher">Obsidian 빠른 전환기 안내</a></p>

<div class="seq"><figure><a href="/assets/img/gpters24/lesson4/03-find-home.png" target="_blank" rel="noopener"><img src="/assets/img/gpters24/lesson4/03-find-home.png" alt="Obsidian 빠른 전환기에서 홈을 입력하고 기존 홈 노트 하나가 검색된 실제 화면"></a><figcaption><b>Obsidian 안에서</b> Ctrl+O → 홈 입력 → 검색된 홈 선택 → Enter.</figcaption></figure></div>

<div class="callout tip"><svg><use href="#i-note"/></svg><div><b>홈이 검색되지 않으면 Enter를 누르기 전에 확인해요.</b><br>새 노트가 만들어질 수 있어요. AI에게 “홈을 어느 보관함의 어떤 파일에 연결했는지 확인해 줘”라고 물어요. 목차 파일의 이름이 다르면 그 이름으로 찾아요.</div></div>

<h3 class="step-h"><span>2</span>북부대공 실습 누르기</h3>

<div class="seq"><figure><div class="l4-marked"><img src="/assets/img/gpters24/lesson4/04-home-link.png" alt="Obsidian 홈의 오늘의 스터디 실습 아래에 북부대공 실습 링크가 추가된 실제 화면"><span class="l4-outline home" aria-hidden="true"></span></div><figcaption><b>홈에 생긴 ‘북부대공 실습’</b>을 눌러요. 내 홈에는 이 링크 한 줄만 있을 수 있어요. 링크가 클릭되지 않으면 Ctrl+E로 읽기 보기로 전환한 뒤 눌러요.</figcaption></figure></div>

<div class="seq"><figure><img src="/assets/img/gpters24/lesson4/05-intro-note.png" alt="홈의 북부대공 실습 링크를 눌러 보관함 안의 소개 노트가 열린 실제 화면"><figcaption><b>보관함 안의 소개 노트</b>가 열렸어요. 실습 소개와 현재 상태를 읽어 봐요. 제목과 항목은 내 규칙에 따라 조금 달라질 수 있어요.</figcaption></figure></div>

<h3 class="step-h"><span>3</span>소개 노트에서 원본 위치 열기</h3>

<p>소개 노트에서 <b>원본 자료 위치</b>를 찾아 폴더 링크를 눌러요. 아래 화면에서는 이름이 <b>북부대공 원본 폴더 열기</b>예요. 처음 저장한 폴더가 열리면 연결이 된 거예요.</p>

<div class="seq"><figure><div class="l4-marked"><img src="/assets/img/gpters24/lesson4/06-source-links.png" alt="북부대공 소개 노트 아래에 원본 폴더, 원본 MD, GitHub 자료 링크가 있는 실제 화면"><span class="l4-outline source" aria-hidden="true"></span></div><figcaption>이 촬영에서는 원본 폴더 링크를 누르자 <b>파일 탐색기의 북부대공 폴더</b>가 열렸어요.</figcaption></figure></div>

<p>원본 폴더 링크는 <b>지금 사용하는 컴퓨터의 주소</b>로 만들어요. 다른 컴퓨터에서는 주소가 달라 열리지 않을 수 있어요. 그때는 AI에게 새 컴퓨터의 원본 위치를 확인해 링크를 고쳐 달라고 해요.</p>

<p>원본 MD 링크는 컴퓨터의 기본 연결 프로그램에 따라 열리는 앱이 달라질 수 있어요. <b>Obsidian 안에서 지금 읽은 것은 소개 노트</b>예요. 원본 MD의 본문은 외부 파일 링크나 GitHub 링크로 따로 열어 읽어요.</p>

<h2><span class="no">6</span> 세 가지만 확인하면 끝나요</h2>

<ul class="l4-checks">
<li><b>원본</b> — 탐색기의 <code>me/북부대공</code>에 받은 MD 파일이 있어요.</li>
<li><b>소개</b> — Obsidian에서 ‘북부대공 실습’ 노트가 열려요.</li>
<li><b>연결</b> — 홈 → 소개 노트 → 원본 폴더 순서로 찾아갈 수 있어요.</li>
</ul>

<div class="l4-done"><b>여기까지 했다면 목차 연결을 마쳤어요! 🎉</b><p>이제 프로젝트 원본을 제자리에 두고, Obsidian 홈에서 소개와 자료 위치를 찾아볼 수 있어요.</p></div>

<h2><span class="no">7</span> 궁금한 분만: 내 방식으로 바꾸기</h2>

<p>오늘 받은 기본 규칙에는 <b>작업을 마칠 때 소개 노트와 목차를 확인한다</b>는 약속이 이미 있어요. 써 보다가 필요한 항목이 생기면 AI와 대화하며 바꿔요.</p>

<div class="l4-request"><span class="l4-label">내 규칙을 바꾸는 요청</span><p>앞으로 소개 노트에 마감일도 넣어 줘. 내가 날짜를 정하지 않았으면 미정이라고 적어 줘. 이 약속을 보관함의 AI협업규칙.md에 반영하고, 바뀐 부분을 알려 줘. 원본 폴더와 보관함의 위치 관계는 유지해 줘.</p></div>

<p><b>AI가 관련 작업을 맡아 실행하는 동안</b> 적용되는 약속이에요. 자료를 받아 두기만 했다면 AI에게 목차 정리를 요청해요.</p>

<p>자료만 새로 받았고 바로 목차에 넣고 싶다면 짧게 요청해요. <b>“me에 북부대공 자료를 받았어. 기존 협업규칙대로 홈에 연결해 줘.”</b> AI가 정리했다고 답하면 실제 링크를 한 번 눌러 확인해요.</p>

<h2><span class="no">8</span> 자주 헷갈리는 네 가지</h2>

<details class="l4-faq" open><summary>같은 MD가 두 개 생긴 건가요?</summary><p>이번 과정에서 원본 내용은 <code>me/북부대공/00_북부성_실습_상황.md</code>에 있어요. 보관함의 <code>북부대공 실습.md</code>에는 <b>소개와 위치</b>를 새로 적었어요. 서로 다른 내용과 역할의 파일이에요.</p></details>
<details class="l4-faq"><summary>Obsidian은 me 안의 모든 MD 위치를 추적하나요?</summary><p>Obsidian은 열린 보관함 안의 파일을 읽고 표시해요. 이번에는 <b>AI가 바깥 원본의 위치를 소개 노트에 기록</b>했어요. 원본을 다른 곳으로 옮기면 외부 링크가 끊길 수 있으므로 AI에게 자료위치 링크도 갱신하도록 요청해요. <a href="https://obsidian.md/help/vault">Obsidian 보관함 안내</a></p></details>
<details class="l4-faq"><summary>홈이라는 목차는 특별한 기능인가요?</summary><p>여기서 홈은 <b>홈.md라는 문서 이름</b>이에요. AI가 문서 안에 <code>[[10 프로젝트/…/북부대공 실습]]</code> 같은 내부 링크를 적었어요. Obsidian이 그 부분을 클릭할 수 있는 링크로 보여 줘요. <a href="https://obsidian.md/help/links">Obsidian 내부 링크 안내</a></p></details>
<details class="l4-faq"><summary>새로 받은 실습 MD 본문을 당장 읽고 싶어요.</summary><p>오늘 만든 소개 노트의 <b>GitHub에서 같은 실습 자료 읽기</b>를 누르면 브라우저에서 원문을 읽을 수 있어요. 로컬 원본을 읽으려면 <b>실습 상황 원본 MD 열기</b>를 사용해요. 외부 링크만으로 그 MD 본문이 보관함의 검색 대상에 추가되지는 않아요.</p></details>

<p class="l4-next">다음 실습에서는 이 MD에 적힌 소설 설정을 AI와 함께 읽고, 북부대공의 금광 장부 정리를 시작해요.</p>
</div>

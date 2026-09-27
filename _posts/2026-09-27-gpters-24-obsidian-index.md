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

<h2><span class="no">1</span> 오늘 할 일, 세 단계예요</h2>

<ol class="l4-steps">
<li><span class="l4-badge">내가</span><b>자료를 저장해요</b><p><code>me/북부대공</code>에 실습 MD를 넣어요.</p></li>
<li><span class="l4-badge">AI가</span><b>목차를 연결해요</b><p>보관함에 소개 노트를 쓰고, 홈에 그 노트의 링크를 넣어요.</p></li>
<li><span class="l4-badge">내가</span><b>Obsidian에서 열어요</b><p>홈 → 북부대공 실습 → 원본 위치를 확인해요.</p></li>
</ol>

<div class="callout tip"><svg><use href="#i-note"/></svg><div><b>1·3강을 마쳤다면 이어서 시작하세요.</b><br><code>me</code>와 그 안의 <code>Obsidian Vault</code>를 사용해요. 보관함 이름을 다르게 지었다면 아래 요청문에서도 그 이름을 써 주세요. 설치부터 필요하면 <a href="{{ '/2026/09/26/gpters-24-setup/' | relative_url }}">1강</a>을 먼저 따라 해요.</div></div>

<p>이번 글의 Windows 화면은 실제 실습 폴더와 기존 보관함을 촬영했어요. 다른 프로젝트와 개인 경로는 캡처 범위에서 제외했어요. <b>메뉴 위치와 글꼴은 내 컴퓨터와 조금 다를 수 있어요.</b></p>

<h2><span class="no">2</span> 북부대공 자료를 me에 저장해요</h2>

<h3 class="ih"><img src="/assets/img/icons/github.png" alt="">① GitHub에서 MD 파일 하나 받기</h3>

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

<h2><span class="no">3</span> AI에게 연결을 맡겨요</h2>

<h3 class="step-h"><span>1</span>AI의 작업 폴더를 me로 열기</h3>

<p>1강에서 준비한 <b>내 컴퓨터의 파일을 읽고 수정할 수 있는 AI 작업 환경</b>을 열어요. 예를 들면 로컬 폴더를 연결한 Codex나 Claude Code예요. 이번 작업에서는 <b>me 폴더</b>를 작업 위치로 선택해요. AI가 북부대공 원본과 Obsidian Vault를 함께 확인할 수 있어야 해요.</p>

<p>일반 채팅에 MD 파일을 첨부하면 AI가 그 내용을 읽을 수 있어요. <b>컴퓨터에 있는 홈.md까지 수정하려면 로컬 폴더 접근도 필요해요.</b> ‘프로젝트’라는 이름만 보고 판단하지 말고, AI가 실제로 파일을 읽고 저장할 수 있는지 확인해요. <a href="https://learn.chatgpt.com/docs/projects">OpenAI의 로컬 프로젝트 설명</a></p>

<div class="l4-request"><span class="l4-label">처음에는 이 한 문장으로 확인해요</span><p>지금 네가 작업하는 폴더 위치와, 그 안의 북부대공 폴더·Obsidian Vault가 실제로 보이는지 확인해 줘.</p></div>

<p>AI가 폴더를 찾지 못했다면, 사용하는 앱의 폴더 선택 화면을 캡처해서 어디를 눌러야 할지 물어요. <b>두 폴더를 확인한 다음</b> 아래 요청을 보내요.</p>

<h3 class="step-h"><span>2</span>무엇을 어디에 만들지 말하기</h3>

<div class="l4-request"><span class="l4-label">요청문 예시 · 뜻을 읽고 내 말로 적어 봐요</span><p>me 안의 북부대공 폴더에 스터디 자료를 받았어.</p><p>Obsidian Vault의 AI협업규칙.md와 기존 홈, 스터디 프로젝트의 정리 방식을 먼저 읽어 줘.</p><p>원본은 지금 위치에 두고, 보관함 안에 ‘북부대공 실습’ 소개 노트를 만들어 줘. 소개, 지금 상태, 다음 할 일, 원본 위치를 적어 줘.</p><p>홈에서 이 소개 노트를 누를 수 있게 연결해 줘. 기존 스터디 프로젝트가 있으면 그 안에 넣고, 없으면 ‘10 프로젝트/지피터스 스터디’를 사용해 줘.</p><p>끝나면 새로 만든 파일과 수정한 파일의 위치를 알려 주고, 원본이 그대로 있는지도 확인해 줘.</p></div>

<div class="l4-explain">
<p><b>첫째 줄 — 내가 한 일</b><br>어떤 폴더에 무엇을 받았는지 알려 줘요.</p>
<p><b>둘째 줄 — 먼저 읽을 기준</b><br>AI가 이미 정해 둔 정리 방식을 이어 쓰게 해요.</p>
<p><b>셋째 줄 — 원본과 소개의 자리</b><br>다운로드한 파일의 위치를 지키고, 짧은 소개 노트를 만들게 해요.</p>
<p><b>넷째 줄 — 내가 누를 연결</b><br>홈에 링크를 넣어야 Obsidian에서 클릭해 찾아갈 수 있어요.</p>
<p><b>다섯째 줄 — 완료 확인</b><br>AI의 답변과 실제 파일을 대조해요.</p>
</div>

<p><b>협업규칙 파일이 아직 없나요?</b> 아래 <a href="#starter-rules">초보자용 규칙 세트</a>를 먼저 준비한 뒤 이 요청으로 돌아오세요. 이미 규칙이 있다면 기존 파일을 사용해요.</p>

<h2><span class="no">4</span> AI가 실제로 바꾸는 곳은 여기예요</h2>

<div class="l4-filemap" aria-label="원본 폴더와 보관함 안의 소개 노트, 홈 파일의 관계">
<div class="l4-root">me</div>
<div class="l4-branches">
<section><span class="l4-badge">원본 보관</span><h3>북부대공</h3><p><code>00_북부성_실습_상황.md</code></p><p>내가 받은 소설 설정과 실습 조건</p><b>지금 위치에 그대로 있어요.</b></section>
<section><span class="l4-badge">AI가 기록</span><h3>Obsidian Vault</h3><p><code>10 프로젝트/…/북부대공 실습.md</code><br>소개와 원본 위치를 적은 노트</p><p><code>홈.md</code><br>위 소개 노트로 가는 링크 한 줄</p></section>
</div>
<p class="l4-map-foot">홈에서 소개 노트를 열고 → 소개 노트에서 원본 위치로 찾아가요.</p>
</div>

<p><b>‘목차에 등록한다’는 말은 이 두 가지 작업을 뜻해요.</b> AI가 소개 노트를 만들고, 홈 문서에 그 노트의 링크를 넣어요. Obsidian은 보관함 안에 생긴 파일과 바뀐 내용을 화면에 보여 줘요.</p>

<p>이번 촬영에서는 기존 <code>10 프로젝트/P019 지피터스 4주 스터디</code> 안에 소개 노트를 만들었어요. 여러분은 위 요청문처럼 <b>자기 보관함의 스터디 폴더</b>를 쓰면 돼요. <code>P019</code>라는 번호를 따라 만들 필요는 없어요.</p>

<h2><span class="no">5</span> Obsidian 홈에서 눌러 봐요</h2>

<h3 class="ih"><img src="/assets/img/icons/obsidian.png" alt="">① 홈 찾기</h3>

<p>Obsidian 창을 한 번 클릭해요. 키보드에서 <b>Ctrl+O</b>를 누르고 <b>홈</b>이라고 적어요. 아래 검색 결과에 기존 <b>홈</b> 노트가 나오면 선택하고 Enter를 눌러요. Mac은 <b>Cmd+O</b>예요. <a href="https://obsidian.md/help/plugins/quick-switcher">Obsidian 빠른 전환기 안내</a></p>

<div class="seq"><figure><a href="/assets/img/gpters24/lesson4/03-find-home.png" target="_blank" rel="noopener"><img src="/assets/img/gpters24/lesson4/03-find-home.png" alt="Obsidian 빠른 전환기에서 홈을 입력하고 기존 홈 노트 하나가 검색된 실제 화면"></a><figcaption><b>Obsidian 안에서</b> Ctrl+O → 홈 입력 → 기존 홈 선택 → Enter.</figcaption></figure></div>

<div class="callout tip"><svg><use href="#i-note"/></svg><div><b>홈이 검색되지 않으면 Enter를 누르기 전에 확인해요.</b><br>새 노트가 만들어질 수 있어요. AI에게 “홈을 어느 보관함의 어떤 파일에 연결했는지 확인해 줘”라고 물어요. 목차 파일의 이름이 다르면 그 이름으로 찾아요.</div></div>

<h3 class="step-h"><span>2</span>북부대공 실습 누르기</h3>

<div class="seq"><figure><div class="l4-marked"><img src="/assets/img/gpters24/lesson4/04-home-link.png" alt="Obsidian 홈의 오늘의 스터디 실습 아래에 북부대공 실습 링크가 추가된 실제 화면"><span class="l4-outline home" aria-hidden="true"></span></div><figcaption><b>홈에 생긴 ‘북부대공 실습’</b>을 눌러요. 링크가 클릭되지 않으면 Ctrl+E로 읽기 보기로 전환한 뒤 눌러요.</figcaption></figure></div>

<div class="seq"><figure><img src="/assets/img/gpters24/lesson4/05-intro-note.png" alt="홈의 북부대공 실습 링크를 눌러 보관함 안의 소개 노트가 열린 실제 화면"><figcaption><b>보관함 안의 소개 노트</b>가 열렸어요. 위쪽에 <code>10 프로젝트 / … / 북부대공 실습</code> 위치가 보여요.</figcaption></figure></div>

<h3 class="step-h"><span>3</span>소개 노트에서 원본 위치 열기</h3>

<p>소개 노트를 아래로 내려 <b>자료위치</b>를 봐요. <b>북부대공 원본 폴더 열기</b>를 눌렀을 때, 처음 저장한 폴더가 열리면 연결이 된 거예요.</p>

<div class="seq"><figure><div class="l4-marked"><img src="/assets/img/gpters24/lesson4/06-source-links.png" alt="북부대공 소개 노트 아래에 원본 폴더, 원본 MD, GitHub 자료 링크가 있는 실제 화면"><span class="l4-outline source" aria-hidden="true"></span></div><figcaption>이 촬영에서는 원본 폴더 링크를 누르자 <b>파일 탐색기의 북부대공 폴더</b>가 열렸어요.</figcaption></figure></div>

<p>원본 MD 링크는 컴퓨터의 기본 연결 프로그램에 따라 열리는 앱이 달라질 수 있어요. <b>Obsidian 안에서 지금 읽은 것은 소개 노트</b>예요. 원본 MD의 본문은 외부 파일 링크나 GitHub 링크로 따로 열어 읽어요.</p>

<h2><span class="no">6</span> 세 가지만 확인하면 끝나요</h2>

<ul class="l4-checks">
<li><b>원본</b> — 탐색기의 <code>me/북부대공</code>에 받은 MD 파일이 있어요.</li>
<li><b>소개</b> — Obsidian에서 ‘북부대공 실습’ 노트가 열려요.</li>
<li><b>연결</b> — 홈 → 소개 노트 → 원본 폴더 순서로 찾아갈 수 있어요.</li>
</ul>

<div class="l4-done"><b>여기까지 했다면 목차 연결을 마쳤어요! 🎉</b><p>이제 프로젝트 원본을 제자리에 두고, Obsidian 홈에서 소개와 자료 위치를 찾아볼 수 있어요.</p></div>

<h2><span class="no">7</span> 다음부터도 같은 방식으로 정리하려면</h2>

<p>이번에 마음에 든 정리 방식을 <b>AI협업규칙.md</b>에 남겨요. 다음에 AI가 그 규칙을 읽고 프로젝트 작업을 마칠 때, 정리까지 함께 맡길 수 있어요.</p>

<div class="l4-request"><span class="l4-label">이번 경험을 규칙으로 남기는 요청</span><p>앞으로 프로젝트 작업을 마칠 때, 원본은 프로젝트 폴더에 두고 보관함의 소개 노트와 홈 링크를 확인해 줘. 소개 노트에는 현재 상태, 다음 할 일, 원본 위치를 남겨 줘. 기존 AI협업규칙.md와 겹치는 내용은 합쳐서 짧게 정리해 줘.</p></div>

<p><b>규칙 파일을 읽는 AI가 작업을 실행할 때</b> 적용되는 약속이에요. 파일을 다운로드하기만 했을 때, AI가 대기 중일 때까지 폴더를 계속 감시하는 기능이 생기지는 않아요.</p>

<p>자료만 새로 받았고 바로 목차에 넣고 싶다면 짧게 요청해요. <b>“me에 북부대공 자료를 받았어. 기존 협업규칙대로 홈에 연결해 줘.”</b> AI가 정리했다고 답하면 실제 링크를 한 번 눌러 확인해요.</p>

<h2 id="starter-rules"><span class="no">8</span> 규칙이 없는 분을 위한 기본 세트</h2>

<p>처음에는 짧은 공통 규칙으로 시작하고, 사용하면서 내 방식으로 고쳐요. 아래 세트에는 <b>규칙 파일 3개, 빈 홈 1개, 읽어 주세요 안내문</b>이 들어 있어요.</p>

<p><a class="l4-button" href="{{ '/assets/downloads/gpters24/me-starter.zip' | relative_url }}" download="me-starter.zip">초보자용 MD 기본 세트 받기</a></p>

<ol>
<li>받은 ZIP 파일을 오른쪽 클릭하고 <b>모두 압축 풀기</b>를 선택해요.</li>
<li>압축이 풀린 <b>me</b> 폴더를 열어요. 안의 파일들을 아래 자리에 넣어요.</li>
<li><b>기존 me와 보관함을 사용해요.</b> 파일 이름이 겹치면 덮어쓰기 창을 취소하고, AI에게 두 내용을 비교해 필요한 규칙만 합쳐 달라고 요청해요.</li>
</ol>

<pre class="l4-tree">me/
├─ AGENTS.md
├─ CLAUDE.md
└─ Obsidian Vault/
   ├─ AI협업규칙.md
   └─ 홈.md</pre>

<div class="l4-rules">
<p><b>AGENTS.md · me에 넣어요</b><br>Codex가 작업 시작 시 읽는 지침 이름이에요. 이 세트에서는 “Obsidian Vault/AI협업규칙.md를 읽어라”라는 연결을 적어 뒀어요.</p>
<p><b>CLAUDE.md · me에 넣어요</b><br>Claude Code용 안내예요. 첫 줄의 <code>@AGENTS.md</code>로 같은 지침을 가져와요.</p>
<p><b>AI협업규칙.md · 보관함에 넣어요</b><br>원본 유지, 소개 노트 만들기, 홈 링크 연결, 완료 확인이라는 실제 정리 규칙이 있어요. Obsidian에서 열어 읽고 내 말로 설명할 수 있는지 확인해요.</p>
<p><b>홈.md · 보관함에 넣어요</b><br>프로젝트 소개 노트로 가는 링크를 모을 목차 문서예요. 이미 홈이 있으면 그 파일을 계속 사용해요.</p>
</div>

<p>이 배치는 <b>me를 AI의 작업 위치로 여는 실습</b>에 맞췄어요. 규칙을 넣은 뒤 새 작업을 시작하고, AI에게 읽은 규칙 파일의 위치와 핵심 내용을 확인해 달라고 요청해요. 자동으로 찾는 범위는 도구와 작업 폴더에 따라 달라요. <a href="https://learn.chatgpt.com/docs/agent-configuration/agents-md">Codex AGENTS.md 안내</a> · <a href="https://code.claude.com/docs/en/memory">Claude Code의 CLAUDE.md와 파일 가져오기 안내</a></p>

<h2><span class="no">9</span> 궁금한 분만: 무엇이 저장된 걸까요?</h2>

<details class="l4-faq" open><summary>같은 MD가 두 개 생긴 건가요?</summary><p>이번 과정에서 원본 내용은 <code>me/북부대공/00_북부성_실습_상황.md</code>에 있어요. 보관함의 <code>북부대공 실습.md</code>에는 <b>소개와 위치</b>를 새로 적었어요. 서로 다른 내용과 역할의 파일이에요.</p></details>
<details class="l4-faq"><summary>Obsidian은 me 안의 모든 MD 위치를 추적하나요?</summary><p>Obsidian은 열린 보관함 안의 파일을 읽고 표시해요. 이번에는 <b>AI가 바깥 원본의 위치를 소개 노트에 기록</b>했어요. 원본을 다른 곳으로 옮기면 외부 링크가 끊길 수 있으므로 AI에게 자료위치 링크도 갱신하도록 요청해요. <a href="https://obsidian.md/help/vault">Obsidian 보관함 안내</a></p></details>
<details class="l4-faq"><summary>홈이라는 목차는 특별한 기능인가요?</summary><p>여기서 홈은 <b>홈.md라는 문서 이름</b>이에요. AI가 문서 안에 <code>[[10 프로젝트/…/북부대공 실습]]</code> 같은 내부 링크를 적었어요. Obsidian이 그 부분을 클릭할 수 있는 링크로 보여 줘요. <a href="https://obsidian.md/help/links">Obsidian 내부 링크 안내</a></p></details>
<details class="l4-faq"><summary>새로 받은 실습 MD 본문을 당장 읽고 싶어요.</summary><p>오늘 만든 소개 노트의 <b>GitHub에서 같은 실습 자료 읽기</b>를 누르면 브라우저에서 원문을 읽을 수 있어요. 로컬 원본을 읽으려면 <b>실습 상황 원본 MD 열기</b>를 사용해요. 외부 링크만으로 그 MD 본문이 보관함의 검색 대상에 추가되지는 않아요.</p></details>

<p class="l4-next">다음 실습에서는 이 MD에 적힌 소설 설정을 AI와 함께 읽고, 북부대공의 금광 장부 정리를 시작해요.</p>
</div>

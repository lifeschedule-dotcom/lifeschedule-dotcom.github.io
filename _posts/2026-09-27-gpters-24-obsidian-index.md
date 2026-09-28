---
title: "[4강] me에 받은 자료를 Obsidian 홈 목차에 연결하기"
section: vibe-coding
sub: gpters24
ref: gpters-24-obsidian-index
date: 2026-09-27 22:00:00 +0900
description: 4강. 북부대공 실습 파일을 내려받아 me에 저장하고, AI가 소개 노트와 홈 링크를 만드는 과정을 실제 화면으로 따라 해요.
spacious: true
---
<link rel="stylesheet" href="{{ '/assets/css/lesson4.css' | relative_url }}">
<div class="lesson4">
<div class="keyline">받은 자료는 me 폴더에 정리하고,<br>나는 옵시디언으로 많은 자료를 쉽게 보고 쓰기</div>

<h2 id="starter-rules"><span class="no">1</span> 규칙 파일 준비</h2>

<h3 class="step-h"><span>1</span>규칙 파일 받기</h3>

<p>AI가 일하는 방식을 정한 규칙 파일이에요.<br>하나씩 받아 주세요.</p>

<div class="l4-downloads">
<p><a class="l4-button" href="{{ '/assets/downloads/gpters24/rules/AGENTS.md' | relative_url }}" download="AGENTS.md">① AGENTS.md 받기</a></p>
<p><a class="l4-button" href="{{ '/assets/downloads/gpters24/rules/CLAUDE.md' | relative_url }}" download="CLAUDE.md">② CLAUDE.md 받기</a></p>
<p><a class="l4-button" href="{{ '/assets/downloads/gpters24/rules/AI협업규칙.md' | relative_url }}" download="AI협업규칙.md">③ AI협업규칙.md 받기</a></p>
</div>

<h3 class="step-h"><span>2</span>넣을 자리</h3>

<pre class="l4-tree">me/
├─ AGENTS.md  ← 여기에
├─ CLAUDE.md  ← 여기에
└─ Obsidian Vault/
   └─ AI협업규칙.md  ← 여기에</pre>

<div class="callout tip"><svg><use href="#i-note"/></svg><div><b>같은 이름의 파일이 이미 있다면?</b><br>덮어쓰지 말고, 아래 <b>‘이미 규칙 파일이 있는 분’</b> 요청을 써요.</div></div>

<h3 class="step-h"><span>3</span>AI에게 확인</h3>

<p>데스크탑 앱에서 <b>me를 선택한 채로</b> 보내요.</p>

<div class="prompt"><span class="who">처음 준비하는 분 (데스크탑 앱에)</span><button class="copy" type="button">복사</button><span class="txt">AI협업규칙.md를 읽어 줘.

그리고 아래 위치를 실제 경로로 알려 줘.
- 읽은 파일의 위치
- 프로젝트 원본 위치
- 보관함 위치

읽지 못했다면 못 읽었다고 말해 줘.</span></div>

<p class="sub-note">노란 괄호 칸만 내 상황에 맞게 바꿔주면 됩니다.</p>

<div class="prompt"><span class="who">이미 규칙 파일이 있는 분 (받은 세 파일을 첨부해서)</span><button class="copy" type="button">복사</button><span class="txt">내 기존 규칙과 첨부한 세 파일을 비교해 줘.

목표: <span class="fill">(me)</span>의 AGENTS.md·CLAUDE.md가 보관함의 AI협업규칙.md를 읽는 구성

1. 바꿀 내용만 먼저 제안해 줘.

2. 내가 확인하면, 기존 파일을 백업하고 필요한 부분만 합쳐 줘.

3. CLAUDE.md가 AGENTS.md를 읽도록 연결됐는지도 확인해 줘.

기존 파일을 덮어쓰지 마.
원본과 기록은 그대로 둬.</span></div>

<div class="callout warn"><svg><use href="#i-warn"/></svg><div><b>단!!</b> 로그인, 비밀번호, 결제는 내가 직접 입력해요.<br>AI가 묻는 <b>"허용할까요?"</b> 창은 꼭 읽고, 내가 판단해서 눌러요.</div></div>

<p>AI가 세 파일의 위치를 알려 주면 준비 끝이에요.</p>

<h2><span class="no">2</span> 북부대공 자료 저장</h2>

<h3 class="step-h"><span>1</span>실습 MD 파일 받기</h3>

<p><a class="l4-button" href="{{ '/assets/downloads/gpters24/00_북부성_실습_상황.md' | relative_url }}" download="00_북부성_실습_상황.md">북부대공 실습 파일 바로 받기 ↓</a></p>

<h3 class="step-h"><span>2</span>me 안에 북부대공 폴더 만들기</h3>

<ol>
<li>파일 탐색기에서 <b>me</b> 폴더를 열어요.</li>
<li><b>새로 만들기 → 폴더</b>를 누르고, 이름을 <b>북부대공</b>으로 적어요.</li>
<li>다운로드 폴더의 MD 파일을 골라 <b>Ctrl+X</b>, 북부대공 폴더에서 <b>Ctrl+V</b>를 눌러요.</li>
</ol>

<div class="l4-location"><figure><img src="/assets/img/gpters24/lesson4/02a-folder-location.png" alt="파일 탐색기 위치 표시: OneDrive, me, 북부대공"><figcaption>주소에 <b>me › 북부대공</b>이 보이면 돼요.</figcaption></figure><figure><img src="/assets/img/gpters24/lesson4/02b-folder-file.png" alt="실제 북부대공 폴더 안에 00_북부성_실습_상황 파일이 있고 유형은 MD 파일, 크기는 5KB로 표시된다"><figcaption>폴더 안에 <b>MD 파일</b>이 있으면 돼요.</figcaption></figure></div>

<h2><span class="no">3</span> 목차 연결 요청</h2>

<p>규칙을 확인한 대화에서 이어서 보내요.</p>

<p class="sub-note">노란 괄호 칸만 내 상황에 맞게 바꿔주면 됩니다.</p>

<div class="prompt"><span class="who">목차 연결 요청 (데스크탑 앱에)</span><button class="copy" type="button">복사</button><span class="txt"><span class="fill">(me)</span>/북부대공에 실습 파일을 받았어.
<span class="fill">(Obsidian Vault)</span>의 AI협업규칙.md를 읽어 줘.
그리고 이 프로젝트를 기존 홈 목차에서 찾을 수 있게 연결해 줘.

- 원본은 옮기지 마.
- 보관함에 ‘북부대공 실습’ 소개 노트를 만들고, 원본 위치를 적어 줘.

끝나면 Obsidian에서 무엇을 누르면 되는지 알려 줘.</span></div>

<h3>끝나면 이렇게 돼요</h3>

<div class="l4-filemap" aria-label="원본 폴더와 보관함 안의 소개 노트, 홈 파일의 관계">
<div class="l4-root">me</div>
<div class="l4-branches">
<section><h3>북부대공</h3><p><code>00_북부성_실습_상황.md</code></p><b>원본은 그대로 있어요.</b></section>
<section><h3>Obsidian Vault</h3><p><code>10 프로젝트/…/북부대공 실습.md</code><br>AI가 만든 소개 노트</p><p><code>홈.md</code><br>소개 노트로 가는 링크 한 줄</p></section>
</div>
<p class="l4-map-foot">홈 → 소개 노트 → 원본 위치 순서로 찾아가요.</p>
</div>

<h2><span class="no">4</span> 옵시디언 홈에서 확인</h2>

<h3 class="step-h"><span>1</span><img src="/assets/img/icons/obsidian.png" alt="">홈 찾기</h3>

<p>Obsidian 창에서 <b>Ctrl+O</b>(맥은 <b>Cmd+O</b>)를 누르고 <b>홈</b>을 입력해요.</p>

<div class="seq"><figure><a href="/assets/img/gpters24/lesson4/03-find-home.png" target="_blank" rel="noopener"><img src="/assets/img/gpters24/lesson4/03-find-home.png" alt="Obsidian 빠른 전환기에서 홈을 입력하고 기존 홈 노트 하나가 검색된 실제 화면"></a><figcaption>검색된 <b>홈</b>을 고르고 Enter를 눌러요.</figcaption></figure></div>

<div class="callout tip"><svg><use href="#i-note"/></svg><div><b>홈이 검색되지 않으면 Enter를 누르지 마세요.</b><br>새 노트가 생길 수 있어요.<br>AI에게 “홈을 어디에 연결했는지 확인해 줘”라고 물어요.</div></div>

<h3 class="step-h"><span>2</span>북부대공 실습 누르기</h3>

<div class="seq"><figure><div class="l4-marked"><img src="/assets/img/gpters24/lesson4/04-home-link.png" alt="Obsidian 홈의 오늘의 스터디 실습 아래에 북부대공 실습 링크가 추가된 실제 화면"><span class="l4-outline home" aria-hidden="true"></span></div><figcaption>홈에 생긴 <b>북부대공 실습</b>을 눌러요.</figcaption></figure></div>

<p>안 눌리면 <b>Ctrl+E</b>로 읽기 보기로 바꿔요.</p>


<h3 class="step-h"><span>3</span>소개 노트에서 원본 위치 열기</h3>

<p>소개 노트의 <b>원본 자료 위치</b>에서 폴더 링크를 눌러요.</p>

<div class="seq"><figure><div class="l4-marked"><img src="/assets/img/gpters24/lesson4/06-source-links.png" alt="북부대공 소개 노트 아래에 원본 폴더, 원본 MD, GitHub 자료 링크가 있는 실제 화면"><span class="l4-outline source" aria-hidden="true"></span></div><figcaption>파일 탐색기에서 <b>북부대공 폴더</b>가 열리면 성공이에요.</figcaption></figure></div>

<div class="done"><div class="done-t">🎉 여기까지 했으면 목차 연결이 끝났어요!<br>축하드립니다!</div></div>

<h2><span class="no">5</span> 다음 자료용 짧은 요청문 <small>(한번 해 보세요!)</small></h2>

<p class="sub-note">노란 괄호 칸만 내 상황에 맞게 바꿔주면 됩니다.</p>

<div class="prompt"><span class="who">새 자료 목차 연결 (짧게)</span><button class="copy" type="button">복사</button><span class="txt">me/<span class="fill">(새 폴더 이름)</span>에 자료를 받았어.
기존 협업규칙대로 홈에 연결해 줘.
원본은 옮기지 마.</span></div>

<p>규칙을 바꾸고 싶으면 “이 약속을 AI협업규칙.md에 반영해 줘”라고 요청해요.</p>

<h2><span class="no">6</span> 자주 헷갈리는 것</h2>

<details class="l4-faq" open><summary>같은 MD가 두 개 생긴 건가요?</summary><p>원본은 <code>me/북부대공</code> 안의 파일이에요.<br>보관함의 <code>북부대공 실습.md</code>는 소개와 위치만 적은 다른 파일이에요.</p></details>
<details class="l4-faq"><summary>Obsidian에 me의 다른 파일은 왜 안 보여요?</summary><p>Obsidian은 열린 보관함 안의 파일만 보여 줘요.<br>바깥 원본은 소개 노트의 위치 링크로 찾아가요. <a href="https://obsidian.md/help/vault">Obsidian 보관함 안내</a></p></details>
<details class="l4-faq"><summary>다른 컴퓨터에서 원본 폴더 링크가 안 열려요.</summary><p>링크는 지금 쓰는 컴퓨터의 주소로 만들어져요.<br>AI에게 새 컴퓨터의 위치로 링크를 고쳐 달라고 해요.</p></details>
</div>

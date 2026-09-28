---
title: "[1강] 날씨 묻는 거 말고, AI 처음 시작할 때 꼭 해야 할 세팅"
section: vibe-coding
sub: gpters24
ref: gpters-24-setup
date: 2026-09-26 21:00:00 +0900
description: 사전 세팅 1강. 원드라이브 me 폴더와 옵시디언 보관함을 만들고 AI의 작업 폴더를 확인해요.
spacious: true
---
저는 그동안 AI로 이런저런 프로젝트를 왕창 해왔어요.<br>
노트북 2개, 미니PC 1개, AI 3개(클로드, GPT, 제미나이)를 오가다 보니 만든 것들이 여기저기 흩어져 있었고, 미루고 미루던 정리를 하는 데 **3일이나** 썼습니다.

여러분은 저처럼 되지 않길 바라요.<br>
아직까지 날씨 묻는 데만 AI를 썼다면? **오히려 좋아!!!!!**<br>
처음부터 세팅해 두면 저 같은 수고를 안 해도 돼요.

"엥, 나는 그렇게까지 안 쓸 것 같은데?" 하시는 AI린이 여러분, 방심하지 마세요.<br>
당신도 AI에 빠져서 많은 창작물을 만들게 될 수 있어요!

<div class="keyline">대화의 기억은 내 폴더의 파일에 남겨요.</div>

<div class="lead-note">원리가 궁금하다면 <a href="{{ '/2026/09/26/gpters-24-why/' | relative_url }}">2강</a>을 읽어 보세요!<br>여기서는 <b>설치 방법</b> 위주로 알려드릴게요.</div>

## <span class="no">1</span> 한눈에 보기

원드라이브 안에 **me** 폴더를 만들어요.

<div class="sync">
<div class="pc">
<div class="pc-h"><svg class="i"><use href="#i-laptop"/></svg>지금 쓰는 노트북</div>
<div class="kfolder">
<div class="kfolder-h"><svg class="i"><use href="#i-folder"/></svg>me</div>
<div class="kdesc"><b>클로드·GPT 앱의 작업 공간</b></div>
<div class="kfile"><svg class="i"><use href="#i-folder"/></svg><b>Obsidian Vault</b><span><b>옵시디언 보관함</b> · 규칙과 기록 노트를 모아 두는 곳</span></div>
<div class="kfile"><svg class="i"><use href="#i-folder"/></svg><b>주제별 폴더</b><span>작업물</span></div>
</div>
</div>
<div class="sync-col"><div class="sync-mid"><img src="/assets/img/icons/onedrive.png" alt=""><b>원드라이브</b><i>⇄</i><span>동기화가 끝나면 <br>다른 기기에서도 볼 수 있어요</span></div></div>
<div class="pc other">
<div class="pc-h"><svg class="i"><use href="#i-laptop"/></svg>다른 노트북 <small>(있다면)</small></div>
<div class="kfolder">
<div class="kfolder-h"><svg class="i"><use href="#i-folder"/></svg>me</div>
<div class="kdesc"><b>클로드·GPT 앱의 작업 공간</b></div>
<div class="kfile"><svg class="i"><use href="#i-folder"/></svg><b>Obsidian Vault</b><span><b>옵시디언 보관함</b> · 규칙과 기록 노트를 모아 두는 곳</span></div>
<div class="kfile"><svg class="i"><use href="#i-folder"/></svg><b>주제별 폴더</b><span>작업물</span></div>
</div>
</div>
</div>

<h3 class="ih"><img src="/assets/img/icons/onedrive.png" alt="">원드라이브는 왜 쓰나요?</h3>

원드라이브는 마이크로소프트의 인터넷 저장 공간(클라우드)이에요.<br>
여기에 넣어 둔 자료는 **다른 기기에서도 꺼내 쓸 수 있어서** 꼭 추천해요.

컴퓨터가 고장 나도 **동기화가 끝난 자료**는 원드라이브에서 다시 꺼낼 수 있어요.

<h3 class="ih"><img src="/assets/img/icons/obsidian.png" alt="">옵시디언은 왜 쓰나요?</h3>

AI에 폴더 접근 권한을 주면, AI는 그 안의 파일을 직접 읽을 수 있어요.<br>
옵시디언은 **사람을 위한 도구**예요.

같은 md 파일을 **메모장으로 열면** 기호가 그대로 보이고, 옵시디언에서 열면 읽기 좋게 바뀌어 보여요.

<div class="mdcmp">
<div class="mdv raw"><div class="mdh">메모장으로 열면</div><pre># 작업기록
## 9월 26일
- **한 일**: 출퇴근 기록표 만들기
- **다음 할 일**: 주휴수당 계산 넣기</pre></div>
<div class="mdv nice"><div class="mdh"><img src="/assets/img/icons/obsidian.png" alt="">옵시디언으로 열면</div><div class="mdr"><h4>작업기록</h4><h5>9월 26일</h5><ul><li><b>한 일</b>: 출퇴근 기록표 만들기</li><li><b>다음 할 일</b>: 주휴수당 계산 넣기</li></ul></div></div>
</div>

## <span class="no">2</span> 일하는 AI(데스크탑 앱)과 옵시디언 설치하기

<div class="twoai">
<div class="ta chat"><div class="ta-h"><span class="ta-i"><img src="/assets/img/icons/claude.png" alt=""><img src="/assets/img/icons/chatgpt.png" alt=""></span>인터넷 채팅창</div><p>질문하면 <b>방법을 알려줘요.</b></p></div>
<div class="ta desk"><div class="ta-h"><span class="ta-i"><img src="/assets/img/icons/claude.png" alt=""><img src="/assets/img/icons/chatgpt.png" alt=""></span>데스크탑 앱 <small>설치하는 프로그램</small></div><p>내 폴더에서 <b>파일을 직접 만들고 고쳐요.</b></p></div>
</div>

<h3 class="step-h"><span>1</span>AI 데스크탑 앱 설치하기 <small>채팅창에서</small></h3>

클로드나 GPT 사이트([claude.ai](https://claude.ai) 또는 [chatgpt.com](https://chatgpt.com))에 들어가서, AI에게 **데스크탑 버전을 설치해 달라고** 말해 보세요!

<p class="sub-note">노란 괄호 칸만 내 상황에 맞게 바꿔주면 됩니다.</p>

<div class="prompt"><span class="who">설치 도움 요청 (인터넷 채팅창에)</span><button class="copy" type="button">복사</button><span class="txt">안녕! AI 데스크탑 앱을 설치하고 싶어.

- 설치할 앱: <span class="fill">(클로드 / GPT)</span> 데스크탑 앱
- 내 컴퓨터: <span class="fill">(윈도우 / 맥)</span>
- 보고 있는 글: https://lifeschedule-dotcom.github.io/2026/09/26/gpters-24-setup/

원드라이브가 켜져 있는지도 같이 확인해줘.
한 단계씩 천천히 알려주고, 내가 화면을 캡처해서 보내면 다음에 뭘 누르면 되는지 알려줘.</span></div>

<div class="snap">
<div class="snap-h">막히면? 캡처해서 직접 대화창에 물어보세요</div>
<div class="snap-steps">
<div class="ss"><span class="sn">1</span><img src="/assets/img/setup/win-search.png" alt="윈도우 작업 표시줄 검색창"><p>검색창에 <b>캡처 도구</b>를 입력해요</p></div>
<div class="ss"><span class="sn">2</span><img class="ico" src="/assets/img/icons/snipping.png" alt="캡처 도구 아이콘"><p>이 아이콘을 누르고, 찍을 곳을 마우스로 끌어요</p></div>
<div class="ss"><span class="sn">3</span><div class="say">지금 이 화면이야.<br>다음에 뭘 눌러?</div><p>채팅창에 <b>Ctrl + V</b>로 붙여넣고 물어봐요</p></div>
</div>
<p class="snap-mac">맥은 <b>Cmd + Shift + 4</b>로 찍어요.</p>
</div>

<h3 class="step-h"><span>2</span><img src="/assets/img/icons/obsidian.png" alt="">옵시디언 설치하고 보관함 만들기 <small>AI와 함께</small></h3>

데스크탑 앱에 아래 요청을 보내 폴더 만들기와 옵시디언 설치를 부탁해요.<br>
<b>me는 제가 붙인 이름이라 바꿔도 돼요.</b>

<p><strong style="font-weight:900">막히면 화면을 캡처해서 “다음에 뭘 누르면 돼?” 하고 물어보세요!</strong></p>

<div class="prompt"><span class="who">폴더 만들기·옵시디언 설치 요청 (데스크탑 앱에)</span><button class="copy" type="button">복사</button><span class="txt">아래 세 가지를 도와줘.

1. 원드라이브 안에 AI 작업물을 모을 <span class="fill">(me)</span> 폴더 만들기 (이미 있으면 그대로 써줘)
2. 옵시디언 설치하기
3. <span class="fill">(me)</span> 안에 Obsidian Vault라는 보관함 만들기

네가 직접 할 수 있는 건 해 주고, 내가 눌러야 할 화면이나 권한 창은 한 단계씩 알려줘.
끝나면 만든 폴더를 열어 나와 함께 확인해줘.</span></div>

앱이 폴더부터 고르라고 하면, 파일 탐색기에서 원드라이브 안에 <code>me</code>를 직접 만들고 선택하세요.

보관함을 직접 만들 때는 옵시디언에서 <b>새 보관함 생성</b>을 누르고, 이름은 <code>Obsidian Vault</code>, 위치는 <code>me</code>로 골라요.

<div class="seq"><figure><img src="/assets/img/setup/obsidian-create-vault.png" alt="옵시디언 로컬 보관함 생성 화면의 보관함 이름과 위치 탐색 버튼" style="max-width:520px;margin:auto;display:block"><figcaption><b>보관함 이름</b>은 Obsidian Vault, <b>위치</b>는 원드라이브 안의 me</figcaption></figure></div>

AI가 이미 만들어 뒀다면 <b>보관함 폴더 열기</b>로 <code>me/Obsidian Vault</code>를 열면 돼요.<br>
비어 있어도 괜찮아요.

## <span class="no">3</span> AI에게 세팅 시키기

이제 <b>AI 앱에서 작업할 폴더로 <code>me</code>를 선택해요.</b>

<div class="apptabs">
<input type="radio" name="apptab" id="apptab-claude" checked>
<input type="radio" name="apptab" id="apptab-gpt">
<div class="apptabs-bar"><label for="apptab-claude"><img src="/assets/img/icons/claude.png" alt="">클로드 앱</label><label for="apptab-gpt"><img src="/assets/img/icons/chatgpt.png" alt="">GPT 앱</label></div>
<div class="apptab-panel claude">
<p>입력창 위 <b>폴더 없음</b>을 눌러 <code>me</code>를 골라요.</p>
<div class="seq"><figure><span class="sn">1</span><img src="/assets/img/setup/pick-folder.png" alt="클로드 로컬 작업 입력창의 폴더 없음 버튼"><figcaption>입력창 위 <b>폴더 없음</b>을 눌러요</figcaption></figure><figure><span class="sn">2</span><img src="/assets/img/setup/pick-folder-3.png" alt="입력창 위에 me가 표시된 화면"><figcaption>원드라이브의 <b>me</b>를 골라요</figcaption></figure></div>
</div>
<div class="apptab-panel gpt">
<p><code>Ctrl + O</code>(맥은 <code>Cmd + O</code>)를 눌러 <code>me</code>를 고르고, 그 프로젝트에서 새 대화를 시작해요. Codex라면 <b>Local</b>을 선택해요.</p>
<div class="seq"><figure><img src="/assets/img/setup/gpt-select-project-root.png" alt="GPT의 Select Project Root 창에서 원드라이브 안의 me 폴더를 선택한 화면"><figcaption>원드라이브 안의 <b>me</b>를 고르고 <b>폴더 선택</b>을 눌러요</figcaption></figure></div>
</div>
</div>

<p class="sub-note">폴더 선택은 처음 한 번이면 돼요. 다음부터는 새 대화에서 me가 선택되어 있는지만 확인해요.</p>

이제 **me를 연 데스크탑 앱**에 아래 요청을 보내요.<br>
한 줄씩 읽어 보고, 모르는 줄은 4번에서 찾아보세요.

<div class="prompt"><span class="who">지식관리 세팅 요청</span><button class="copy" type="button">복사</button><span class="txt">안녕! 나는 <span class="fill">(하는 일)</span>을 하는 사람이고, AI는 처음이야.
앞으로 너랑 한 일을 한 폴더에 모아서 관리하고 싶어. 아래대로 세팅해줘.
네가 할 수 있는 건 직접 하고, 내가 눌러야 하는 화면만 한 단계씩 알려줘.

1. 작업 폴더 확인
   - 지금 작업 폴더가 원드라이브 안의 <span class="fill">(me)</span>인지 확인하고 실제 위치를 알려줘.
   - 다른 폴더가 열려 있으면, 내가 올바른 폴더를 열도록 먼저 안내해줘.
   - 앞으로 만드는 문서·작업물은 이 폴더 안의 주제별 폴더에 저장해.

2. 바탕화면 바로가기
   - 나는 마우스로 폴더를 열어 직접 볼 거야. 이름은 알아보기 쉽게 지어줘.
   - 바탕화면에 이 폴더 바로가기를 만들어줘. 못 하면 내가 만들도록 알려줘.

3. 원드라이브 설정
   - 이 폴더를 "항상 이 디바이스에 유지"로 설정해줘.
   - 바탕화면·문서·사진 전체 백업은 새로 켜지 마.

마지막으로 <span class="fill">(me)</span> 안에 Obsidian Vault 폴더가 있는지도 확인해줘.
다 끝나면 무엇을 어디에 만들었는지 실제 위치와 함께 보여주고,
바탕화면 바로가기가 열리는지 나와 함께 확인해줘.</span></div>

<div class="callout warn"><svg><use href="#i-warn"/></svg><div><b>이것만은 직접 해요.</b> 로그인, 비밀번호, 결제, "허용할까요?" 창은 읽어 보고 내가 눌러요.</div></div>

## <span class="no">4</span> 요청문 한 줄씩 풀어 보기

요청문의 번호와 같은 순서예요.

<div class="whyg">
<div class="wg-h"><span>1</span>원드라이브 안에 연 me 폴더</div>
<div class="wc"><div class="wq">원드라이브 안에 있는지 확인해줘</div><p>원드라이브 밖에 만든 폴더는 다른 기기에서 볼 수 없어요.</p></div>
<div class="wc"><div class="wq">여기에 저장해</div><p>저장 위치를 정해 주지 않으면 파일이 엉뚱한 곳에 생길 수 있어요.</p></div>
</div>

<div class="whyg">
<div class="wg-h"><span>2</span>마우스로 직접 볼 거야</div>
<div class="wc shot"><div><div class="wq">마우스로 폴더를 열어 직접 볼 거야</div><p>알아보기 쉬운 이름과 <b>바탕화면 바로가기</b>를 만들어 줘요. 더블클릭 한 번으로 내 폴더에 들어갈 수 있어요.</p></div><figure><img src="/assets/img/setup/desktop-me.png" alt="바탕화면의 me 폴더 바로가기를 마우스로 가리킨 화면"><figcaption>바탕화면의 <b>me</b> 바로가기</figcaption></figure></div>
</div>

<div class="whyg">
<div class="wg-h"><span>3</span>항상 이 디바이스에 유지</div>
<div class="wc"><div class="wq">항상 이 디바이스에 유지</div><p>파일이 인터넷에만 있으면 AI가 못 읽을 때가 있어요. <b>"내 컴퓨터에도 늘 진짜 파일로 둬"</b>라는 설정이에요.</p><div class="states"><span class="st cloud"><i>☁</i>파란 구름<small>인터넷에만 있어요</small></span><span class="st keep"><i>✔</i>꽉 찬 초록 체크<small>내 컴퓨터에도 늘 있어요</small></span></div></div>
<div class="wc"><div class="wq">전체 백업은 새로 켜지 마</div><p>켜면 바탕화면·문서·사진이 통째로 올라가 원드라이브가 복잡해져요.</p></div>
</div>

## <span class="no">5</span> 잘 됐는지 확인하기

AI가 끝났다고 하면, 내 **me** 폴더가 아래 사진처럼 되어 있는지 **직접** 열어 확인해요.

<div class="seq"><figure><img src="/assets/img/setup/setup-done.png" alt="원드라이브 me 폴더 안에 Obsidian Vault 폴더가 초록 체크와 함께 보이는 파일 탐색기 화면"><figcaption>원드라이브 <b>me</b> 안에 <b>Obsidian Vault</b>가 보이면 성공이에요</figcaption></figure></div>

<p class="sub-note">규칙 파일(AI협업규칙.md 등)은 1주차 수업에서 함께 넣어요. md 파일이 궁금하다면 <a href="{{ '/2026/09/27/gpters-24-md/' | relative_url }}">3강</a>을 먼저 읽어 보세요.</p>

<div class="done"><div class="done-t">🎉 여기까지 했으면 설치가 끝났어요!<br>축하드립니다!</div><p>아래는 부가 설명이에요. 궁금한 분만 더 읽어 보세요!</p></div>

## <span class="no">6</span> 더 알아 두면 좋은 것 <small>(선택)</small>

### 내 폴더 주소 읽는 법

윈도우 파일 탐색기에서 내 폴더를 열고 <code>Alt + D</code>를 누르면 주소가 선택돼요.<br>
주소는 큰 곳에서 작은 곳으로 들어가는 길이에요.

<div class="addr">
<div class="addr-line"><span class="c1"><b>C:</b><small>저장 드라이브</small></span><span class="sep">\</span><span class="c2"><b>Users</b><small>사용자 폴더</small></span><span class="sep">\</span><span class="c3"><b>User</b><small>이 컴퓨터의 내 이름</small></span><span class="sep">\</span><span class="c4"><b>OneDrive</b><small>원드라이브 구간</small></span><span class="sep">\</span><span class="c5"><b>me</b><small>내 폴더</small></span></div>
<div class="sym"><div><b class="k">:</b><p><b>"여기까지가 저장 공간 이름"</b>이라는 표시예요. <code>C:</code>는 내 컴퓨터 안의 저장 공간 이름이라, 보통 "C 드라이브"라고 읽어요.</p></div><div><b class="k">\</b><p><b>"그 안으로 들어가요"</b>라는 표시예요. 폴더 하나에 들어갈 때마다 하나씩 붙어요. 파일 탐색기 주소창의 <code>›</code>와 같아요.</p></div></div>
<p>그래서 이 주소는 "서울시 › ○○구 › ○○동"처럼, <b>C 드라이브 안의 Users 안의 내 이름 안의 OneDrive 안의 me</b>라고 읽어요.</p>
</div>

---
title: 날씨 묻는 거 말고, AI 처음 시작할 때 꼭 해야 할 세팅
section: vibe-coding
sub: gpters24
ref: gpters-24-setup
date: 2026-09-26 21:00:00 +0900
description: 사전 세팅 1강. AI와 한 일을 폴더 하나에 모으는 지식관리 세팅을 따라 해요. 설치와 파일 만들기는 AI가 해요.
---
저는 그동안 AI로 이런저런 프로젝트를 왕창 해왔어요. 노트북 2개, 미니PC 1개, AI 3개(클로드, GPT, 제미나이)를 오가다 보니 만든 것들이 여기저기 흩어져 있었고, 미루고 미루던 정리를 하는 데 **3일이나** 썼습니다.

여러분은 저처럼 되지 않길 바라요. 그래서… 아직까지 날씨 묻는 데만 AI를 썼다면? **오히려 좋아!!!!!** 처음부터 세팅해 두면 저 같은 수고를 안 해도 돼요.

"엥, 나는 그렇게까지 안 쓸 것 같은데?" 하시는 AI린이 여러분, 방심하지 마세요. 당신도 AI에 빠져서 많은 창작물을 만들게 될 수 있어요!

<div class="keyline">대화의 기억은 내 폴더의 파일에 남겨요.</div>

<div class="lead-note">원리가 궁금하다면 <a href="{{ '/2026/09/26/gpters-24-why/' | relative_url }}">2강</a>을 읽어 보세요!<br>여기서는 <b>설치 방법</b> 위주로 알려드릴게요.</div>

## <span class="no">1</span> 한눈에 보기

**원드라이브 안의 내 폴더 하나를 나와 AI가 같이 써요.** 저는 폴더 이름을 **me**라고 지었어요.

쉽게 말하면 원드라이브는 **인터넷 창고**예요. 창고에 넣어 둔 me 폴더는 어느 노트북, 어느 휴대폰에서 열어도 똑같이 보여요. AI는 이 폴더를 직접 열고 일하는 **비서**, 옵시디언은 폴더 속 글을 읽기 좋게 보여주는 **돋보기**예요.

<div class="sync">
<div class="pc">
<div class="pc-h"><svg class="i"><use href="#i-laptop"/></svg>지금 쓰는 노트북</div>
<div class="openers"><span><svg class="i"><use href="#i-hand"/></svg>나</span><span><img src="/assets/img/icons/claude.png" alt=""><img src="/assets/img/icons/chatgpt.png" alt="">AI</span><span class="opt"><img src="/assets/img/icons/obsidian.png" alt=""><img src="/assets/img/icons/notion.png" alt="">옵시디언·노션 <em>선택</em></span></div>
<div class="down">↓ 같은 폴더를 열어요</div>
<div class="kfolder">
<div class="kfolder-h"><svg class="i"><use href="#i-folder"/></svg>me</div>
<div class="kfile"><svg class="i"><use href="#i-note"/></svg><b>규칙 파일</b></div>
<div class="kfile"><svg class="i"><use href="#i-folder"/></svg><b>주제별 폴더</b><span>작업물 + 작업기록</span></div>
</div>
</div>
<div class="sync-col"><div class="sync-mid"><img src="/assets/img/icons/onedrive.png" alt=""><b>원드라이브</b><small class="mt">인터넷 창고</small><i>⇄</i><span>동기화가 끝나면<br>두 폴더가 똑같아져요</span></div><div class="sync-gh"><div class="gh-top"><img src="/assets/img/icons/github.png" alt=""><b>GitHub</b></div><i>⇄</i><span>중급자용<br>(코드 폴더용)</span></div></div>
<div class="pc other">
<div class="pc-h"><svg class="i"><use href="#i-laptop"/></svg>다른 노트북 <small>(있다면)</small></div>
<div class="openers"><span><svg class="i"><use href="#i-hand"/></svg>나</span><span><img src="/assets/img/icons/claude.png" alt=""><img src="/assets/img/icons/chatgpt.png" alt="">AI</span><span class="opt"><img src="/assets/img/icons/obsidian.png" alt=""><img src="/assets/img/icons/notion.png" alt="">옵시디언·노션 <em>선택</em></span></div>
<div class="down">↓ 같은 폴더를 열어요</div>
<div class="kfolder">
<div class="kfolder-h"><svg class="i"><use href="#i-folder"/></svg>me</div>
<div class="kfile"><svg class="i"><use href="#i-note"/></svg><b>규칙 파일</b></div>
<div class="kfile"><svg class="i"><use href="#i-folder"/></svg><b>주제별 폴더</b><span>작업물 + 작업기록</span></div>
</div>
</div>
</div>

## <span class="no">2</span> 일하는 AI(데스크탑 앱)과 옵시디언 설치하기

AI는 두 곳에서 쓸 수 있어요. 할 수 있는 일이 달라요.

<div class="twoai">
<div class="ta chat"><div class="ta-h"><span class="ta-i"><img src="/assets/img/icons/claude.png" alt=""><img src="/assets/img/icons/chatgpt.png" alt=""></span>채팅창 <small>인터넷 창</small></div><div class="ta-m">전화로 알려주는 친구</div><p>무엇이든 물어보면 알려줘요. 내 컴퓨터는 만지지 못해서, <b>손은 내가</b> 움직여요.</p><p class="ta-e">claude.ai · chatgpt.com</p></div>
<div class="ta desk"><div class="ta-h"><span class="ta-i"><img src="/assets/img/icons/claude.png" alt=""><img src="/assets/img/icons/chatgpt.png" alt=""></span>데스크탑 앱 <small>설치하는 프로그램</small></div><div class="ta-m">옆에서 직접 해 주는 친구</div><p>내 폴더를 열고, 파일을 만들고, 정리까지 <b>직접</b> 해 줘요.</p><p class="ta-e">클로드 앱 · GPT 앱 (유료: 클로드 Pro 이상, GPT Plus 이상)</p></div>
</div>

그래서 **설치는 채팅창에 물어보고**, 설치가 끝나면 **나머지는 데스크탑 앱**에 맡겨요.

<h3 class="step-h"><span>1</span>AI 데스크탑 앱 설치하기 <small>채팅창에서</small></h3>

아래 요청을 채팅창([claude.ai](https://claude.ai) 또는 [chatgpt.com](https://chatgpt.com))에 보내면, AI가 한 단계씩 알려줘요.

<div class="prompt"><span class="who">설치 도움 요청 (채팅창에)</span><button class="copy" type="button">복사</button><span class="txt">안녕! 나는 AI를 처음 쓰려고 하는데, 그 전에 AI와 한 일을 한 폴더에 모으는 세팅을 하려고 해. 이 글을 보고 따라 하는 중이야: https://lifeschedule-dotcom.github.io/2026/09/26/gpters-24-setup/
원드라이브가 켜져 있는지 확인하고, <span class="fill">(클로드 / GPT)</span> 데스크탑 앱을 설치하고 싶어. 내가 할 수 있게 한 단계씩 천천히 알려줘. 내가 화면을 캡처해서 보내면, 그 화면을 보고 다음에 뭘 누르면 되는지 알려줘. 내 컴퓨터는 <span class="fill">(윈도우 / 맥)</span>이야.</span></div>

<p class="sub-note">복사해서 보내고, 노란 괄호 칸만 내 상황에 맞게 바꿔요.</p>

<div class="snap">
<div class="snap-h">막히면 캡처 한 장</div>
<div class="snap-steps">
<div class="ss"><span class="sn">1</span><img src="/assets/img/setup/win-search.png" alt="윈도우 작업 표시줄 검색창"><p>검색창에 <b>캡처 도구</b>를 입력해요</p></div>
<div class="ss"><span class="sn">2</span><img class="ico" src="/assets/img/icons/snipping.png" alt="캡처 도구 아이콘"><p>이 아이콘을 누르고, 찍을 곳을 마우스로 끌어요</p></div>
<div class="ss"><span class="sn">3</span><div class="say">지금 이 화면이야.<br>다음에 뭘 눌러?</div><p>채팅창에 <b>Ctrl + V</b>로 붙여넣고 물어봐요</p></div>
</div>
<p class="snap-mac">맥은 <b>Cmd + Shift + 4</b>로 찍어요.</p>
</div>

<h3 class="step-h"><span>2</span><img src="/assets/img/icons/obsidian.png" alt="">옵시디언 다운로드 <small>데스크탑 앱에게</small></h3>

데스크탑 앱이 설치되면, 이제 옆에서 직접 해 주는 친구가 생겼어요. 옵시디언 설치는 데스크탑 앱에 이렇게 보내요.

<div class="prompt"><span class="who">옵시디언 설치 요청 (데스크탑 앱에)</span><button class="copy" type="button">복사</button><span class="txt">옵시디언을 설치하고 싶어. 네가 직접 설치해 줄 수 있으면 해 주고, 어렵다면 내가 할 수 있게 한 단계씩 알려줘.</span></div>

<p class="sub-note">옵시디언은 <b>설치만</b> 해 두세요. 쓰는 법은 오프라인 모임 때 카페에서 같이 알려드릴게요.</p>

## <span class="no">3</span> AI에게 세팅 시키기

설치가 끝나면 **데스크탑 앱**에 아래 요청을 보내요. 폴더와 파일은 AI가 만들어요.

**보내기 전에 한 줄씩 읽어 주세요.** 이해 안 되는 줄은 바로 아래 4번에 번호별로 풀어 뒀어요.

<div class="prompt"><span class="who">지식관리 세팅 요청</span><button class="copy" type="button">복사</button><span class="txt">안녕! 나는 <span class="fill">(하는 일)</span>을 하는 사람이고, AI는 처음이야. 앞으로 너랑 한 일을 한 폴더에 모아서 관리하고 싶어. 아래대로 세팅해줘. 네가 직접 할 수 있는 건 해주고, 내가 눌러야 하는 화면만 한 단계씩 천천히 알려줘.

1. 원드라이브 폴더 안에 <span class="fill">(me)</span> 폴더를 만들어줘. 앞으로 너와 만든 문서·작업물은 여기에 저장해.
2. 나는 개발자가 아니라서 마우스로 폴더를 열어 직접 볼 거야. 폴더와 파일 이름은 한눈에 알아보기 쉽게 짓고, 바탕화면에 이 폴더 바로가기를 만들어줘.
3. 이 폴더가 이 컴퓨터에 실제로 내려와 있는지 확인하고, 필요하면 원드라이브에서 "항상 이 디바이스에 유지"로 설정해줘. 바탕화면·문서·사진 전체 백업은 새로 켜지 마.
4. 이 폴더 안에 AI협업규칙.md 파일을 만들고 아래 규칙을 적어줘.
   - 새 작업은 이 폴더 안에 주제별 폴더를 만들어 저장한다
   - 작업이 끝나면 그 폴더의 작업기록.md에 날짜, 한 일, 다음 할 일을 짧게 남긴다
   - 비밀번호와 API 키는 파일에 적지 않는다
   - 나는 초보니까 쉬운 말로, 한 번에 한 단계씩 설명한다
5. 새 대화를 시작할 때 내가 보낼 한 줄을 알려줘. (규칙 파일을 먼저 읽고 시작하라는 말)

다 끝나면 무엇을 어디에 만들었는지 정리해서 보여주고, 바로가기와 규칙 파일이 실제로 열리는지 나와 함께 확인해줘.</span></div>

<div class="callout warn"><svg><use href="#i-warn"/></svg><div><b>이것만은 직접 해요.</b> 로그인, 비밀번호, 결제, "허용할까요?" 창은 읽어 보고 내가 눌러요.</div></div>

## <span class="no">4</span> 요청문 한 줄씩 풀어 보기

요청문의 번호와 똑같은 순서예요. 이해 안 되는 줄이 있으면 여기서 찾아보세요.

<div class="whyg">
<div class="wg-h"><span>1</span>원드라이브 안에 me 폴더</div>
<div class="wc"><div class="wq">원드라이브 폴더 안에</div><p>원드라이브 안에 넣은 것만 인터넷에 올라가서, 휴대폰이나 다른 노트북에서 꺼내 쓸 수 있어요. me 폴더를 원드라이브 밖에 만들면, 그 폴더는 지금 노트북에만 남아요.</p></div>
<div class="wc"><div class="wq">여기에 저장해</div><p>정해 주지 않으면 AI는 그때그때 편한 곳에 파일을 만들어요. 그래서 데스크탑 앱에서 <b>폴더를 먼저 골라 주고</b>, 요청에도 "여기에 저장해"라고 적어요.</p><div class="seq"><figure><span class="sn">1</span><img src="/assets/img/setup/pick-folder.png" alt="입력창 위 폴더 없음 버튼"><figcaption>입력창 위 <b>폴더 없음</b>을 눌러요</figcaption></figure><figure><span class="sn">2</span><img src="/assets/img/setup/pick-folder-2.png" alt="폴더 선택 창에서 me 폴더를 고른 화면"><figcaption><b>me</b>를 고르고 <b>폴더 선택</b>을 눌러요</figcaption></figure><figure><span class="sn">3</span><img src="/assets/img/setup/pick-folder-3.png" alt="입력창 위에 me가 표시된 화면"><figcaption>입력창 위에 <b>me</b>가 보이면 끝! 이제 AI가 me 폴더 안에서 일해요</figcaption></figure></div><div class="act"><div><span class="d">이렇게 하면</span><span class="t"><q>출퇴근 기록표 만들어줘</q> 대신 <q>me 폴더에 출퇴근 기록표 만들어줘</q>라고 보내요.</span></div><div><span class="r">이렇게 돼요</span><span class="t">기록표가 바탕화면이나 다운로드 폴더에 흩어지지 않고 me 폴더에 생겨요.</span></div></div></div>
</div>

<div class="whyg">
<div class="wg-h"><span>2</span>마우스로 직접 볼 거야</div>
<div class="wc shot"><div><div class="wq">마우스로 폴더를 열어 직접 볼 거야</div><p>이 말을 넣으면 AI가 알아보기 쉬운 이름과 <b>바탕화면 바로가기</b>를 만들어 줘요. 그러면 오른쪽 화면처럼, 바탕화면에서 더블클릭 한 번으로 내 폴더에 들어가요.</p><p>내가 직접 못 들어가는 폴더는 파일 하나 여는 쉬운 일도 매번 AI에게 부탁하게 돼요.</p></div><figure><img src="/assets/img/setup/desktop-me.png" alt="바탕화면의 me 폴더 바로가기를 마우스로 가리킨 화면"><figcaption>바탕화면의 <b>me</b> 바로가기</figcaption></figure></div>
</div>

<div class="whyg">
<div class="wg-h"><span>3</span>항상 이 디바이스에 유지</div>
<div class="wc"><div class="wq">항상 이 디바이스에 유지</div><p>원드라이브는 컴퓨터 용량을 아끼려고, 파일은 인터넷에만 두고 내 컴퓨터에는 <b>이름만</b> 남겨 두기도 해요. 그러면 인터넷이 끊겼을 때 열리지 않고, AI가 파일을 제대로 못 읽을 때가 있어요.</p><p>"항상 이 디바이스에 유지"는 <b>"이 폴더는 내 컴퓨터에도 늘 진짜 파일로 둬"</b>라는 설정이에요. 파일 탐색기에서 폴더 옆 표시로 확인해요.</p><div class="states"><span class="st cloud"><i>☁</i>파란 구름<small>인터넷에만 있어요</small></span><span class="st keep"><i>✔</i>꽉 찬 초록 체크<small>내 컴퓨터에도 늘 있어요</small></span></div></div>
<div class="wc"><div class="wq">전체 백업은 새로 켜지 마</div><p>켜면 바탕화면·문서·사진이 통째로 올라가서, 스크린샷까지 전부 원드라이브에 쌓여요. 필요한 폴더만 넣어야 찾기 쉬워요.</p></div>
</div>

<div class="whyg">
<div class="wg-h"><span>4</span>규칙 파일 만들기</div>
<div class="wc"><div class="wq">AI협업규칙.md · 작업기록.md</div><p>둘 다 md 파일이에요. <b>규칙 파일</b>에는 일하는 방식을, <b>작업기록</b>에는 날짜·한 일·다음 할 일을 적어요.</p><figure class="wshot obs"><div class="obs-h"><img src="/assets/img/icons/obsidian.png" alt="">옵시디언으로 연 md 파일 화면이에요!</div><img src="/assets/img/setup/rules-obsidian.png" alt="옵시디언으로 연 AI협업규칙.md 화면"><figcaption>왼쪽에서 <b>AI협업규칙</b>을 누르면, 오른쪽에 AI가 지킬 규칙이 보여요</figcaption></figure><div class="prompt mini"><span class="who">규칙을 더하고 싶을 때</span><button class="copy" type="button">복사</button><span class="txt">AI협업규칙.md에 <span class="fill">(파일 이름은 날짜로 시작한다)</span> 규칙을 추가해줘.</span></div><div class="prompt mini"><span class="who">오늘 한 일을 남기고 싶을 때</span><button class="copy" type="button">복사</button><span class="txt">오늘 한 일을 작업기록.md에 남겨줘.</span></div></div>
<div class="wc"><div class="wq">비밀번호와 API 키는 적지 않는다</div><p>이 폴더는 인터넷에 올라가고, 화면 공유할 때 보일 수도 있어요. 한 번 새어 나간 키는 되돌릴 수 없어요.</p></div>
<div class="wc"><div class="wq">한 번에 한 단계씩</div><p><b>쪼개기 법칙</b>이에요. 큰 일은 작은 단계로 쪼개서 하나씩 해요. AI는 열 단계를 한꺼번에 쏟아내는 버릇이 있는데, 한 단계씩 받아야 어디서 막혔는지 바로 알 수 있어요.</p></div>
</div>

<div class="whyg">
<div class="wg-h"><span>5</span>새 대화를 시작할 때 보낼 한 줄</div>
<div class="wc"><div class="wq">새 대화를 시작할 때 내가 보낼 한 줄을 알려줘</div><p>AI는 새 대화를 열면 전에 정한 규칙을 몰라요. 새로 출근한 직원에게 "업무 매뉴얼 먼저 보고 시작해요"라고 말해 주는 것처럼, 새 대화마다 <b>"규칙 파일 읽고 시작해줘"</b> 한 줄을 보내요.</p><p>그러면 AI가 규칙을 읽고 그대로 일해요. 5번 줄은 이 한 줄을 AI가 <b>미리 만들어 주게</b> 하는 거예요.</p></div>
</div>

## <span class="no">5</span> 잘 됐는지 하나하나 확인하기

AI가 끝났다고 하면, 이 세 가지를 **직접** 확인해요.

<ul class="checks">
<li><svg><use href="#i-check"/></svg><span>바탕화면의 <b>내 폴더 바로가기</b>를 더블클릭하면 폴더가 열린다</span></li>
<li><svg><use href="#i-check"/></svg><span>그 폴더 안에 <b>AI협업규칙.md</b>가 있다</span></li>
<li><svg><use href="#i-check"/></svg><span>새 대화에서 아래 한 줄을 보내면, AI가 규칙을 말해 준다</span></li>
</ul>

앞으로도 대화를 시작할 때 이 한 줄이면 돼요.

<div class="prompt"><span class="who">앞으로 매번</span><button class="copy" type="button">복사</button><span class="txt">원드라이브의 <span class="fill">(me)</span> 폴더에 있는 AI협업규칙.md와 이번 작업의 최근 작업기록을 읽고 시작해줘.</span></div>

<h2 id="why"><span class="no">6</span> 원드라이브·옵시디언은 왜 쓰나요? <small>(읽고 싶을 때만)</small></h2>

세팅을 끝냈다면, 여기서부터는 도구를 왜 쓰는지 이야기예요.

<h3 class="ih"><img src="/assets/img/icons/onedrive.png" alt="">원드라이브는 왜 쓰나요?</h3>

원드라이브는 마이크로소프트의 인터넷 저장 공간(클라우드)이에요. 여기에 넣어 둔 자료는 **다른 기기에서도 꺼내 쓸 수 있어서** 꼭 추천해요. 예를 들어 부동산 계약서를 사진으로 찍어 원드라이브에 넣어 두면, 휴대폰에 원드라이브 앱을 깔고 같은 계정으로 로그인해서 바로 열 수 있어요. 다른 노트북도 같은 계정으로 로그인하면 똑같이 보여요. 노트북이 한 대뿐이어도 필요해요. 컴퓨터가 고장 나도 자료는 인터넷에 남거든요.

<h3 class="ih"><img src="/assets/img/icons/obsidian.png" alt="">옵시디언은 왜 쓰나요?</h3>

AI는 폴더를 바로 열어 읽으니까 옵시디언이 필요 없어요. 옵시디언은 **사람을 위한 도구**예요. 내 폴더에 쌓이는 규칙과 기록은 대부분 **md 파일**이에요.

<div class="callout tip"><svg><use href="#i-note"/></svg><div><b>md 파일이 뭐예요?</b> 이름 끝에 <code>.md</code>가 붙은 글 파일이에요(마크다운). <code>#</code>은 제목, <code>**</code>는 굵게, <code>-</code>는 목록처럼 간단한 기호로 글의 모양을 적어요. AI가 가장 잘 읽고 쓰는 형식이라, AI와 일하면 이 파일이 계속 생겨요. <code>CLAUDE.md</code>처럼 특별한 이름의 md 파일은 1주차에 자세히 알려드릴게요.</div></div>

같은 md 파일을 파일 탐색기에서 열면 메모장에 기호가 그대로 보이고, 옵시디언에서 열면 읽기 좋게 바뀌어 보여요.

<div class="mdcmp">
<div class="mdv raw"><div class="mdh">메모장으로 열면</div><pre># 작업기록
## 9월 26일
- **한 일**: 출퇴근 기록표 만들기
- **다음 할 일**: 주휴수당 계산 넣기</pre></div>
<div class="mdv nice"><div class="mdh"><img src="/assets/img/icons/obsidian.png" alt="">옵시디언으로 열면</div><div class="mdr"><h4>작업기록</h4><h5>9월 26일</h5><ul><li><b>한 일</b>: 출퇴근 기록표 만들기</li><li><b>다음 할 일</b>: 주휴수당 계산 넣기</li></ul></div></div>
</div>

<ul class="checks">
<li><svg><use href="#i-check"/></svg><span><b>읽기 편해요.</b> 기호 대신 제목·굵은 글씨·목록으로 보여요.</span></li>
<li><svg><use href="#i-check"/></svg><span><b>찾기 빨라요.</b> <code>Ctrl + O</code>로 노트 이름을, <code>Ctrl + Shift + F</code>로 모든 노트의 내용을 한 번에 찾아요. 기억 안 나는 프로젝트도 금방 나와요.</span></li>
<li><svg><use href="#i-check"/></svg><span><b>바로 고쳐요.</b> 보면서 그대로 고치면, AI가 다음에 고친 내용을 읽어요.</span></li>
</ul>

<div class="ghstrip"><img src="/assets/img/icons/github.png" alt=""><div><b>GitHub</b><span class="need later">나중에 · 중급</span><p>코드를 만들기 시작하면 쓰는 코드 보관소예요. 코드는 원드라이브 밖의 코드 폴더에서 만들고 GitHub에 올려요. 내 폴더의 작업기록에는 코드가 어디 있는지만 적어요.</p></div></div>

<div class="callout tip"><svg><use href="#i-folder"/></svg><div><b>폴더 이름은 자유예요.</b> 저는 <code>me</code>로, 영어로 지었어요. 일부 개발 도구가 한글 경로에서 오류를 내는 경우가 있어서 영어로 짓는 게 관례지만, 한글로 지어도 괜찮아요.</div></div>


## <span class="no">7</span> 더 알아 두면 좋은 것 <small>(선택)</small>

### 내 폴더 주소 읽는 법

파일 탐색기 주소창을 한 번 클릭하면 내 폴더의 주소가 보여요. 주소는 큰 곳에서 작은 곳으로 들어가는 길이에요.

<div class="addr">
<div class="addr-line"><span class="c1"><b>C:</b><small>저장 드라이브</small></span><span class="sep">\</span><span class="c2"><b>Users</b><small>사용자 폴더</small></span><span class="sep">\</span><span class="c3"><b>User</b><small>이 컴퓨터의 내 이름</small></span><span class="sep">\</span><span class="c4"><b>OneDrive</b><small>원드라이브 구간</small></span><span class="sep">\</span><span class="c5"><b>me</b><small>내 폴더</small></span></div>
<p><code>\</code>는 폴더 사이를 구분하는 표시예요. 파일 탐색기 주소창의 <code>›</code>와 같은 순서예요.</p>
</div>

**주소는 컴퓨터마다 조금씩 달라요.** 제 노트북 두 대도 이렇게 달라요.

<div class="addr-pair">
<div><span>노트북 1</span><code>C:\Users\wootw\OneDrive-JW\OneDrive\me</code></div>
<div><span>노트북 2</span><code>C:\Users\User\OneDrive\me</code></div>
</div>

주소를 똑같이 맞출 필요는 없어요. 중요한 건 **같은 원드라이브 계정의 원드라이브 폴더 안에 me가 있는지**예요. 주소를 외우지 말고, `Win + E` → 왼쪽 **OneDrive** → **me** 순서로 마우스로 열면 돼요.

<div class="callout warn"><svg><use href="#i-warn"/></svg><div><b>제가 처음 권했던 위치는 틀렸어요.</b> 처음엔 <code>C:\me</code>처럼 원드라이브 <b>밖</b>에 폴더를 만들었어요. 그러면 다른 노트북으로 옮겨지지 않아요. 원드라이브와 연결하려면 폴더가 <b>원드라이브 안</b>에 있어야 해요.</div></div>

### 두 AI에게 일을 나눠 줄 때

저는 내 폴더 안에 `live_collaboration`이라는 폴더를 하나 더 만들어 **두 AI의 우편함**으로 써요. GPT가 인계문을 넣어 두면 클로드에게 "live_collaboration의 최신 인계문 읽고 진행해줘" 한 줄만 말해요. 반대로 클로드의 결과를 GPT에게 검토시킬 때도 같은 한 줄이면 돼요. 두 AI 모두 내 폴더를 읽고 쓸 수 있는 작업 모드일 때 가능해요.

### "읽어줘" 한 줄도 생략하고 싶다면

클로드 코드는 `CLAUDE.md`, Codex는 `AGENTS.md`라는 이름의 파일을 작업 폴더에서 대화를 시작할 때 자동으로 읽어요. 규칙 **본문은 AI협업규칙.md 한 곳에 두고**, 이 파일들에는 "AI협업규칙.md를 읽어라"라는 짧은 안내만 적게 하면 돼요. AI에게 "자동으로 읽히게 설정하고 새 대화에서 확인해줘"라고 맡기세요. 내 폴더 **밖**(예: 코드 폴더)에서 시작해도 읽히게 하는 설정은 컴퓨터마다 따로 있어서, 원드라이브로 옮겨지지 않아요. 노트북마다 한 번씩 해야 해요. 잘 안 되면 한 줄 방식으로 돌아가면 돼요.

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

<div class="keyline">대화의 기억은 내 폴더의 파일에 남겨요.<small>① 새 대화나 다른 AI는 전에 한 일을 자동으로 다 알지 못해요.<br>② 그래서 정한 것과 한 일은 내 폴더의 파일에 적어 둬요.<br>③ 새 대화에서는 "그 파일 읽고 시작해줘" 한 줄이면 이어서 일해요.</small></div>

<div class="callout tip"><svg><use href="#i-note"/></svg><div><b>왜 그런지 궁금하다면?</b> AI가 긴 대화에서 무엇을 놓치는지는 <a href="{{ '/2026/09/26/gpters-24-why/' | relative_url }}">2강 「AI는 왜 자꾸 잊어버릴까」</a>에 따로 적었어요. 읽는 건 자유예요. 이 글은 따라 하는 것만 담았어요.</div></div>

## <span class="no">1</span> 세팅의 큰 그림

**각 노트북에 내 폴더(저는 `me`)가 하나씩 있고, 원드라이브가 두 폴더의 내용을 똑같이 맞춰 줘요.** 나는 파일 탐색기로, AI도 그 폴더를 직접 열어요. 옵시디언은 같은 폴더를 보기 좋게 여는 창이에요.

<div class="sync">
<div class="pc">
<div class="pc-h"><svg class="i"><use href="#i-laptop"/></svg>지금 쓰는 노트북</div>
<div class="openers"><span><svg class="i"><use href="#i-hand"/></svg>나</span><span><img src="/assets/img/icons/claude.png" alt=""><img src="/assets/img/icons/chatgpt.png" alt="">AI</span><span class="opt"><img src="/assets/img/icons/obsidian.png" alt="">옵시디언 <em>선택</em></span></div>
<div class="down">↓ 같은 폴더를 열어요</div>
<div class="kfolder">
<div class="kfolder-h"><svg class="i"><use href="#i-folder"/></svg>me</div>
<div class="kfile"><svg class="i"><use href="#i-note"/></svg><b>규칙 파일</b></div>
<div class="kfile"><svg class="i"><use href="#i-folder"/></svg><b>주제별 폴더</b><span>작업물 + 작업기록</span></div>
</div>
</div>
<div class="sync-mid"><img src="/assets/img/icons/onedrive.png" alt=""><b>원드라이브</b><i>⇄</i><span>동기화가 끝나면<br>두 폴더가 똑같아져요</span></div>
<div class="pc other">
<div class="pc-h"><svg class="i"><use href="#i-laptop"/></svg>다른 노트북 <small>(있다면)</small></div>
<div class="openers"><span><svg class="i"><use href="#i-hand"/></svg>나</span><span><img src="/assets/img/icons/claude.png" alt=""><img src="/assets/img/icons/chatgpt.png" alt="">AI</span><span class="opt"><img src="/assets/img/icons/obsidian.png" alt="">옵시디언 <em>선택</em></span></div>
<div class="down">↓ 같은 폴더를 열어요</div>
<div class="kfolder">
<div class="kfolder-h"><svg class="i"><use href="#i-folder"/></svg>me</div>
<div class="kfile"><svg class="i"><use href="#i-note"/></svg><b>규칙 파일</b></div>
<div class="kfile"><svg class="i"><use href="#i-folder"/></svg><b>주제별 폴더</b><span>작업물 + 작업기록</span></div>
</div>
</div>
</div>

원드라이브는 파일을 읽는 게 아니라 **옮겨 주기만** 해요. 노트북이 한 대뿐이어도 원드라이브는 필요해요. 컴퓨터가 고장 나도 폴더가 인터넷에 남고, 나중에 노트북이 늘어도 그대로 이어져요.

<div class="kroles">
<div class="kr"><img src="/assets/img/icons/onedrive.png" alt=""><div><b>원드라이브</b><span class="need must">필수</span><p>노트북끼리 폴더를 맞춰 주고, 백업도 돼요. 없으면 작업물이 노트북 한 대에 갇혀요.</p></div></div>
<div class="kr"><span class="ico"><svg class="i"><use href="#i-folder"/></svg></span><div><b>내 폴더 (AI 전용 폴더)</b><span class="need must">필수</span><p>AI와 함께 볼 문서·사진·작업기록이 모이는 한 곳이에요. <b>반드시 원드라이브 안에</b> 만들어요.</p></div></div>
<div class="kr"><span class="ico"><svg class="i"><use href="#i-note"/></svg></span><div><b>규칙 파일</b><span class="need must">필수</span><p>AI에게 일하는 방식을 알려 주는 파일이에요. 새 대화에서 이 파일을 읽어 달라고 하면, 전에 정한 방식을 다시 설명하지 않아도 돼요.</p></div></div>
<div class="kr"><span class="pair"><img src="/assets/img/icons/claude.png" alt=""><img src="/assets/img/icons/chatgpt.png" alt=""></span><div><b>내 폴더를 열 수 있는 AI</b><span class="need must">필수 · 둘 중 하나</span><p>클로드나 GPT 데스크탑 앱에서, 내 컴퓨터의 폴더를 읽고 쓸 수 있는 작업 모드가 필요해요. 이 기능은 유료 요금제(GPT Plus 이상, 클로드 Pro 이상)에서 써요.</p></div></div>
<div class="kr"><img src="/assets/img/icons/obsidian.png" alt=""><div><b>옵시디언</b><span class="need opt">선택 · 건너뛰어도 OK</span><p>사람을 위한 창이에요. AI는 옵시디언이 없어도 폴더의 파일을 읽어요. 대신 나는 <code>Ctrl + O</code>로 노트 이름을, <code>Ctrl + Shift + F</code>로 내용을 찾을 수 있어요. 기록이 쌓이면 그때 설치해도 늦지 않아요.</p></div></div>
<div class="kr later"><img src="/assets/img/icons/github.png" alt=""><div><b>GitHub</b><span class="need later">나중에 · 중급</span><p>코드를 만들기 시작하면 필요해요. 언제 무엇을 바꿨는지 기록이 남아 되돌릴 수 있어요. 코드 폴더는 원드라이브 밖에 두고 GitHub로 옮겨요. 원드라이브와 GitHub가 한 폴더를 같이 건드리면 저장소가 깨질 수 있거든요. 이때는 코드 위치를 내 폴더의 작업기록에 적어 둬요.</p></div></div>
</div>

<div class="callout tip"><svg><use href="#i-folder"/></svg><div><b>폴더 이름은 자유예요.</b> 저는 <code>me</code>로, 영어로 지었어요. 일부 개발 도구가 한글 경로에서 오류를 내는 경우가 있어서 영어로 짓는 게 관례지만, 한글로 지어도 괜찮아요.</div></div>

세팅의 핵심은 **규칙**이에요. 이 폴더에는 규칙이 다섯 개 있어요.

<div class="rules">
<div class="rule"><span class="ic"><svg><use href="#i-folder"/></svg></span><div><b>AI와 함께 볼 것은 내 폴더에</b><span>AI는 시키지 않으면 그때그때 편한 곳에 파일을 만들어요. 오늘은 바탕화면, 내일은 다운로드 폴더. 한 곳으로 정해 두면 "어디 뒀더라"가 없어져요. 코드처럼 다른 곳에 두는 것은 위치만 적어 둬요.</span></div></div>
<div class="rule"><span class="ic"><svg><use href="#i-hand"/></svg></span><div><b>내가 마우스로 직접 들어갈 수 있게</b><span>바탕화면 바로가기, 알아보기 쉬운 이름. 안 그러면 파일 하나 여는 쉬운 일도 매번 AI에게 부탁하게 돼요.</span></div></div>
<div class="rule"><span class="ic"><svg><use href="#i-note"/></svg></span><div><b>규칙 파일 하나</b><span>새 대화를 열거나 다른 AI로 바꿔도, 이 파일을 읽게 하면 이어서 일해요.</span></div></div>
<div class="rule"><span class="ic"><svg><use href="#i-log"/></svg></span><div><b>끝나면 작업기록 남기기</b><span>날짜, 한 일, 다음 할 일을 짧게. 나중에 에러가 나도 기록부터 읽히면 돼요. 코드를 몰라도 어디까지 만들어졌는지 이 기록으로 알 수 있어요.</span></div></div>
<div class="rule"><span class="ic"><svg><use href="#i-key"/></svg></span><div><b>비밀번호와 키는 적지 않기</b><span>이 폴더는 원드라이브에 올라가고 AI가 읽어요. 비밀번호·API 키는 따로 보관하고, 파일에는 "어디 있는지"만 적어요.</span></div></div>
</div>

## <span class="no">2</span> 준비물

설치 방법은 여기 적지 않을게요. **아래 링크만 AI에게 보여주고 "설치 도와줘"라고 하면 돼요.** AI가 여러분 화면에 맞춰 알려주는 게 더 정확하고 빨라요.

<div class="tools">
<div class="tool t-cloud"><div class="h"><img src="/assets/img/icons/onedrive.png" alt="">원드라이브</div><p>마이크로소프트의 인터넷 저장 공간이에요. 윈도우에는 이미 깔려 있어요. <code>Win + E</code>로 파일 탐색기를 열면 왼쪽에 구름 모양 <b>OneDrive</b>가 보여요.</p><div class="go"><a href="https://www.microsoft.com/ko-kr/microsoft-365/onedrive/download" target="_blank" rel="noopener">원드라이브 받기 →</a></div></div>
<div class="tool t-ai"><div class="h"><span class="pair"><img src="/assets/img/icons/claude.png" alt=""><img src="/assets/img/icons/chatgpt.png" alt=""></span>클로드 / GPT 데스크탑 앱</div><p>둘 중 하나만 있으면 돼요. GPT는 Plus 이상, 클로드는 Pro 이상이 필요해요.</p><div class="go"><a href="https://claude.ai/download" target="_blank" rel="noopener">클로드 받기 →</a> &nbsp; <a href="https://chatgpt.com/download" target="_blank" rel="noopener">GPT 받기 →</a></div></div>
</div>

설치가 막막하면 이렇게 보내세요. 짧으니까 직접 쳐 보는 걸 추천해요.

<div class="prompt"><span class="who">설치 도움 요청</span><button class="copy" type="button">복사</button><span class="txt">안녕! 나는 AI를 처음 쓰려고 하는데, 그 전에 AI와 한 일을 한 폴더에 모으는 세팅을 하려고 해. 이 글을 보고 따라 하는 중이야: https://lifeschedule-dotcom.github.io/2026/09/26/gpters-24-setup/
먼저 원드라이브가 켜져 있는지 확인하고, <span class="fill">(클로드 / GPT)</span> 데스크탑 앱을 설치하고 싶어. 네가 직접 할 수 있으면 해주고, 어렵다면 내가 할 수 있게 한 단계씩 천천히 알려줘. 내 컴퓨터는 <span class="fill">(윈도우 / 맥)</span>이야.</span></div>

## <span class="no">3</span> AI에게 세팅 시키기

준비가 되면, 클로드나 GPT 데스크탑 앱에서 **내 컴퓨터의 폴더를 쓸 수 있는 작업 모드**를 열고 아래 요청을 보내요. 폴더와 파일은 AI가 만들어요.

**보내기 전에 한 줄씩 잘 읽어 주세요.** 복사해도 괜찮아요. 대신 이해 안 되는 줄이 있으면 아래 "왜 이렇게 요청하나요"를 먼저 보고, 내 상황에 안 맞는 줄은 고쳐서 보내세요.

<div class="prompt"><span class="who">지식관리 세팅 요청</span><button class="copy" type="button">복사</button><span class="txt">안녕! 나는 <span class="fill">(하는 일)</span>을 하는 사람이고, AI는 처음이야. 앞으로 너랑 한 일을 한 폴더에 모아서 관리하고 싶어. 아래대로 세팅해줘. 네가 직접 할 수 있는 건 해주고, 내가 눌러야 하는 화면만 한 단계씩 천천히 알려줘.

1. 원드라이브 폴더 안에 <span class="fill">(me)</span> 폴더를 만들어줘. 앞으로 너와 만든 문서·작업물은 여기에 저장해.
2. 나는 개발자가 아니라서 마우스로 폴더를 열어 직접 볼 거야. 폴더와 파일 이름은 한눈에 알아보기 쉽게 짓고, 바탕화면에 이 폴더 바로가기를 만들어줘.
3. 이 폴더가 이 컴퓨터에 실제로 내려와 있는지 확인하고, 필요하면 원드라이브에서 "항상 이 디바이스에 유지"로 설정해줘. 바탕화면·문서·사진 전체 백업은 새로 켜지 마.
4. 이 폴더 안에 AI협업규칙.md 파일을 만들고 아래 규칙을 적어줘.
   - 새 작업은 이 폴더 안에 주제별 폴더를 만들어 저장한다
   - 작업이 끝나면 그 폴더의 작업기록.md에 날짜, 한 일, 다음 할 일을 짧게 남긴다
   - 비밀번호와 API 키는 파일에 적지 않는다
   - 나는 초보니까 쉬운 말로, 한 번에 한 단계씩 설명한다
5. 다음 대화에서 내가 이 규칙 파일을 한 줄로 읽으라고 할 수 있게, 그 한 줄과 파일의 실제 위치를 알려줘.

다 끝나면 무엇을 어디에 만들었는지 정리해서 보여주고, 바로가기와 규칙 파일이 실제로 열리는지 나와 함께 확인해줘.</span></div>

### 왜 이렇게 요청하나요?

<div class="why">
<div><span class="say">원드라이브 폴더 안에</span><span class="because">원드라이브 안에 있는 것만 다른 노트북·인터넷으로 옮겨져요. 원드라이브 밖에 만들면 그 노트북에만 남아요.</span></div>
<div><span class="say">여기에 저장해</span><span class="because">AI는 시키지 않으면 아무 데나 만들어요. 처음에 "여기"라고 정해 줘야 흩어지지 않아요.</span></div>
<div><span class="say">마우스로 폴더를 열어 직접 볼 거야</span><span class="because">이 말이 없으면 AI는 개발자처럼 영어 약어나 복잡한 경로로 만들기도 해요. 내가 들어갈 수 없는 폴더는 결국 AI 없이는 못 쓰는 폴더가 돼요.</span></div>
<div><span class="say">항상 이 디바이스에 유지</span><span class="because">원드라이브는 용량을 아끼려고 파일을 인터넷에만 두기도 해요. 파일 옆에 구름 아이콘 ☁️만 있으면 그런 상태예요. 그러면 AI가 파일을 못 읽을 때가 있어요.</span></div>
<div><span class="say">전체 백업은 새로 켜지 마</span><span class="because">켜면 바탕화면·문서·사진이 통째로 올라가서, 스크린샷까지 전부 원드라이브에 쌓여요. 필요한 폴더만 넣는 게 찾기 쉬워요.</span></div>
<div><span class="say">작업기록.md에 남긴다</span><span class="because">한 달 뒤 에러가 나면 "작업기록 읽고 고쳐줘" 한마디로 시작할 수 있어요. 다른 AI에게 넘길 때도 이 파일이 인수인계서예요.</span></div>
<div><span class="say">비밀번호와 API 키는 적지 않는다</span><span class="because">폴더가 인터넷에 올라가고, 화면 공유할 때 보일 수도 있어요. 한 번 새어 나간 키는 되돌릴 수 없어요.</span></div>
<div><span class="say">한 줄로 읽으라고 할 수 있게</span><span class="because">규칙 파일은 만들어 두기만 해서는 AI가 저절로 읽지 않아요. 새 대화에서 "읽어줘"라고 해야 읽어요. 그 한 줄을 받아 두면 매번 쉽게 시작할 수 있어요.</span></div>
</div>

<div class="callout tip"><svg><use href="#i-check"/></svg><div><b>막히면 캡처 한 장.</b> 화면 캡처(윈도우 <code>Win + Shift + S</code>, 맥 <code>Cmd + Shift + 4</code>)를 채팅창에 붙여넣고 "지금 이 화면이야. 다음에 뭘 눌러?"라고 물어보세요.</div></div>

<div class="callout warn"><svg><use href="#i-warn"/></svg><div><b>이것만은 직접 해요.</b> 로그인, 비밀번호 입력, 결제 버튼, 그리고 "허용하시겠어요?" 창은 AI에게 넘기지 말고 무엇을 허용하는지 읽고 직접 눌러요.</div></div>

## <span class="no">4</span> 잘 됐는지 하나하나 확인하기

AI가 끝났다고 하면, 아래와 똑같이 됐는지 **직접** 확인해요.

<ul class="checks">
<li><svg><use href="#i-check"/></svg><span>바탕화면의 <b>내 폴더 바로가기</b>를 더블클릭하면 폴더가 열린다</span></li>
<li><svg><use href="#i-check"/></svg><span>그 폴더 안의 <b>AI협업규칙.md</b>를 열면 규칙이 보인다</span></li>
<li><svg><use href="#i-check"/></svg><span>AI 앱에서 <b>새 대화</b>를 열고 아래 한 줄을 보내면, 규칙과 <b>파일의 실제 위치</b>를 말해 준다</span></li>
</ul>

세 개 다 되면 세팅 끝이에요. 이제부터 AI와 무엇을 만들든, 대화를 시작할 때 이 한 줄만 붙이면 돼요.

<div class="prompt"><span class="who">앞으로 매번</span><button class="copy" type="button">복사</button><span class="txt">원드라이브의 <span class="fill">(me)</span> 폴더에 있는 AI협업규칙.md와 이번 작업의 최근 작업기록을 읽고 시작해줘.</span></div>

<div class="callout tip"><svg><use href="#i-folder"/></svg><div><b>옵시디언을 설치했다면</b> 첫 화면에서 <b>"새 보관함 생성"이 아니라 "보관함 폴더 열기"</b>를 눌러 내 폴더(me)를 골라요. 새 보관함을 만들면 빈 폴더가 따로 생겨요.</div></div>

## <span class="no">5</span> 더 알아 두면 좋은 것 <small>(선택)</small>

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

1주차 전에 4번 확인까지만 해오시면 돼요. 다 못 하셔도 괜찮아요. **막힌 곳이 곧 1주차 수업 재료예요.** 막힌 화면을 캡처해서 가져와 주세요 🙂

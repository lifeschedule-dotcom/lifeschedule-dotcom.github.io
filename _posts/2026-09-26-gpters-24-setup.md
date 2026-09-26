---
title: 날씨 묻는 거 말고, AI 처음 시작할 때 꼭 해야 할 세팅
section: vibe-coding
sub: gpters24
ref: gpters-24-setup
date: 2026-09-26 21:00:00 +0900
description: AI와 한 일을 폴더 하나에 모으는 지식관리 세팅. 큰 틀과 이유만 알면, 설치와 파일 만들기는 AI가 해요.
---
저는 그동안 AI로 이런저런 프로젝트를 왕창 해왔어요. 노트북 2개, 미니PC 1개, AI 3개(클로드, GPT, 제미나이)를 오가다 보니 만든 것들이 여기저기 흩어져 있었고, 미루고 미루던 정리를 하는 데 **3일이나** 썼습니다.

여러분은 저처럼 되지 않길 바라요. 그래서… 아직까지 날씨 묻는 데만 AI를 썼다면? **오히려 좋아!!!!!** 처음부터 세팅해 두면 저 같은 수고를 안 해도 돼요.

"엥, 나는 그렇게까지 안 쓸 것 같은데?" 하시는 AI린이 여러분, 방심하지 마세요. 당신도 AI에 빠져서 많은 창작물을 만들게 될 수 있어요!

## <span class="no">1</span> 먼저 알아둘 원리 하나

**AI는 우리와 나눈 대화를 기억하지 않아요.** 메시지를 보낼 때마다 그 대화창에 쌓인 앞 내용 전체를 처음부터 다시 읽고 답을 만들 뿐이에요. 그런데 한 번에 읽을 수 있는 양에는 한계(**컨텍스트 윈도우**)가 있어서, 이런 일이 생겨요.

<div class="facts">
<div><span class="n">대화가 길어지면</span><b>앞부분이 잘려요</b>잘리거나 요약되면서, 처음에 정해 둔 세부 조건이 사라져요.</div>
<div><span class="n">한도 안이어도</span><b>중간을 놓쳐요</b>긴 글의 처음과 끝은 잘 쓰는데 가운데는 잘 못 찾아요. 연구로도 확인됐어요("Lost in the Middle", 2023).</div>
<div><span class="n">새 대화창을 열면</span><b>처음부터예요</b>이전 대화는 다시 읽지 않아요. 다른 AI는 당연히 모르고요.</div>
</div>

앞으로 프로젝트가 4개, 5개로 늘고, 클로드와 GPT를 번갈아 쓰거나 둘 다 쓰게 되면(한 AI가 한 일을 다른 AI에게 검증시키면 결과물이 확실히 좋아져요) 이 문제가 커져요. 에러가 나면 "예전에 만든 거 찾아줘"부터 해야 하고, 같은 설명을 AI마다, 대화마다 반복하게 돼요.

<div class="keyline">기억은 대화창이 아니라, 내 폴더의 파일에 둔다.<small>파일은 잘리지 않고, 새 대화에서도 다시 읽히고, 클로드·GPT·제미나이 누구나 똑같이 읽을 수 있어요.</small></div>

이렇게 AI와 한 일을 파일로 모아 두는 걸 **지식관리**라고 해요.

## <span class="no">2</span> 세팅의 큰 그림

도구는 세 개예요. 가운데 **폴더 하나**를 사람과 AI가 같이 쓰는 구조예요.

<div class="setup-map">
<div class="node c2"><span class="ic"><svg><use href="#i-obsidian"/></svg></span><b>옵시디언 또는 노션</b><span>내가 기록을 보고 고치는 공책</span></div>
<div class="arrow">↔</div>
<div class="node c1 hub"><span class="ic"><svg><use href="#i-folder"/></svg></span><b>원드라이브 안 me 폴더</b><span>모든 작업물이 모이는 한 곳.<br>어느 컴퓨터에서나 똑같이 보여요</span></div>
<div class="arrow">↔</div>
<div class="node c3"><span class="ic"><svg><use href="#i-bot"/></svg></span><b>클로드 또는 GPT</b><span>폴더를 읽고, 일하고, 기록을 남기는 비서</span></div>
</div>

그리고 이 폴더에는 규칙이 다섯 개 있어요. **세팅의 핵심은 설치가 아니라 이 규칙이에요.**

<div class="rules">
<div class="rule"><span class="ic"><svg><use href="#i-folder"/></svg></span><div><b>AI와 한 일은 전부 me 폴더 하나에</b><span>AI는 시키지 않으면 그때그때 편한 곳에 파일을 만들어요. 오늘은 바탕화면, 내일은 다운로드 폴더. 한 곳으로 정해 두면 "어디 뒀더라"가 없어져요.</span></div></div>
<div class="rule"><span class="ic"><svg><use href="#i-hand"/></svg></span><div><b>내가 마우스로 직접 들어갈 수 있게</b><span>바탕화면 바로가기, 알아보기 쉬운 이름. 안 그러면 파일 하나 여는 쉬운 일도 매번 AI에게 부탁하게 돼요.</span></div></div>
<div class="rule"><span class="ic"><svg><use href="#i-note"/></svg></span><div><b>규칙 파일 하나: AI협업규칙.md</b><span>AI가 일하기 전에 먼저 읽는 파일이에요. 새 대화를 열어도, 다른 AI로 바꿔도 "규칙 파일 먼저 읽어" 한마디면 이어서 일해요.</span></div></div>
<div class="rule"><span class="ic"><svg><use href="#i-log"/></svg></span><div><b>끝나면 작업기록 남기기</b><span>날짜, 한 일, 다음 할 일을 짧게. 나중에 에러가 나도 개발 흔적을 뒤질 필요 없이 기록부터 읽히면 돼요.</span></div></div>
<div class="rule"><span class="ic"><svg><use href="#i-key"/></svg></span><div><b>비밀번호와 키는 적지 않기</b><span>이 폴더는 인터넷(원드라이브)에 올라가고 AI가 읽어요. 비밀번호·API 키는 따로 보관하고, 파일에는 "어디 있는지"만 적어요.</span></div></div>
</div>

## <span class="no">3</span> 필요한 도구

설치 방법은 여기 적지 않을게요. **아래 링크만 AI에게 보여주고 "설치 도와줘"라고 하면 돼요.** 제가 쓰는 설명보다 AI가 여러분 화면에 맞춰 알려주는 게 더 정확하고 빨라요.

<div class="tools">
<div class="tool t-cloud"><div class="h"><svg class="i"><use href="#i-cloud"/></svg>원드라이브</div><p>마이크로소프트의 인터넷 저장 공간이에요. 여기 넣은 폴더는 노트북이 바뀌어도, 휴대폰에서도 똑같이 보여요. 윈도우에는 이미 깔려 있어요.</p><div class="go"><a href="https://www.microsoft.com/ko-kr/microsoft-365/onedrive/download" target="_blank" rel="noopener">원드라이브 받기 →</a></div></div>
<div class="tool t-ai"><div class="h"><svg class="i"><use href="#i-bot"/></svg>클로드 / GPT 데스크탑 앱</div><p>폴더를 직접 열고 파일을 만드는 건 데스크탑 앱에서 돼요. 요금제는 카톡방 공지를 참고해 주세요.</p><div class="go"><a href="https://claude.ai/download" target="_blank" rel="noopener">클로드 받기 →</a> &nbsp; <a href="https://chatgpt.com/download" target="_blank" rel="noopener">GPT 받기 →</a></div></div>
<div class="tool t-obs"><span class="tag">추천</span><div class="h"><svg class="i"><use href="#i-obsidian"/></svg>옵시디언</div><p>무료 메모 앱이에요. me 폴더를 <b>그대로 열어서</b> 공책처럼 보여줘요. 기록이 그냥 글 파일(.md)이라 AI가 바로 읽고 고칠 수 있어요.</p><div class="go"><a href="https://obsidian.md/download" target="_blank" rel="noopener">옵시디언 받기 →</a></div></div>
<div class="tool t-notion"><div class="h"><svg class="i"><use href="#i-notion"/></svg>노션</div><p>이미 쓰고 있다면 그대로 써도 돼요. 다만 노션은 me 폴더를 직접 열지 못해서, AI가 읽으려면 노션 연결을 허용해야 해요.</p><div class="go"><a href="https://www.notion.com/desktop" target="_blank" rel="noopener">노션 받기 →</a></div></div>
</div>

설치가 막막하면 이렇게 보내세요.

<div class="prompt"><span class="who">설치 도움 요청</span><button class="copy" type="button">복사</button><span class="txt">안녕! 나는 <span class="fill">(하는 일)</span>을 하는 사람이고, 이런 건 처음이라 잘 몰라. 내 컴퓨터에 <span class="fill">(원드라이브 / 옵시디언 / 클로드 데스크탑 앱)</span>을 설치하고 싶어. 네가 직접 설치할 수 있으면 해주고, 어렵다면 내가 할 수 있게 한 단계씩 천천히 알려줘. 내 컴퓨터는 <span class="fill">(윈도우 / 맥)</span>이야.</span></div>

## <span class="no">4</span> AI에게 세팅 시키기

도구가 준비되면, 클로드나 GPT 데스크탑 앱에서 아래 문장을 보내요. **여러분이 할 일은 이 요청을 보내고, 결과를 확인하는 것뿐이에요.** 폴더와 파일은 AI가 만들어요.

<div class="prompt"><span class="who">지식관리 세팅 요청</span><button class="copy" type="button">복사</button><span class="txt">안녕! 나는 <span class="fill">(하는 일)</span>을 하는 사람이고, AI는 처음이야. 앞으로 너랑 한 일을 전부 한 폴더에 모아서 관리하고 싶어. 아래대로 세팅해줘. 네가 직접 할 수 있는 건 해주고, 내가 해야 하는 건 한 단계씩 천천히 알려줘.

1. 원드라이브 안에 me 폴더를 만들어줘. 앞으로 너와 만든 작업물은 전부 여기에 저장해.
2. 나는 개발자가 아니라서 마우스로 폴더를 열어 직접 보고 정리할 거야. 폴더와 파일 이름은 한눈에 알아보기 쉽게 짓고, 바탕화면에 me 폴더 바로가기를 만들어줘.
3. me 폴더가 인터넷이 없어도 열리도록, 원드라이브에서 "항상 이 디바이스에 유지"로 설정하는 방법을 알려줘.
4. me 폴더 안에 AI협업규칙.md 파일을 만들고 아래 규칙을 적어줘.
   - 작업을 시작하기 전에 이 파일을 먼저 읽는다
   - 새 작업은 me 폴더 안에 주제별 폴더를 만들어 저장한다
   - 작업이 끝나면 그 폴더의 작업기록.md에 날짜, 한 일, 다음 할 일을 짧게 남긴다
   - 비밀번호와 API 키는 파일에 적지 않는다
   - 나는 초보니까 쉬운 말로, 한 번에 한 단계씩 설명한다
5. <span class="fill">(옵시디언 / 노션)</span>으로 이 기록을 볼 수 있게 연결하는 방법을 알려줘.

다 끝나면 무엇을 어디에 만들었는지 정리해서 보여줘.</span></div>

### 왜 이렇게 요청하나요?

복사해서 쓰더라도, 각 문장이 왜 들어갔는지는 알고 쓰세요. 그래야 나중에 여러분 상황에 맞게 고칠 수 있어요.

<div class="why">
<div><span class="say">원드라이브 안에 me 폴더</span><span class="because">노트북을 바꾸거나 두 대를 써도 같은 폴더가 보여요. 컴퓨터가 고장 나도 작업물이 남아요.</span></div>
<div><span class="say">작업물은 전부 여기에</span><span class="because">AI는 시키지 않으면 아무 데나 만들어요. 처음에 "여기"라고 정해 주는 게 흩어짐을 막는 유일한 방법이에요.</span></div>
<div><span class="say">마우스로 직접 보고 정리할 거야</span><span class="because">이 말이 없으면 AI는 개발자처럼 영어 약어나 복잡한 경로로 만들기도 해요. 내가 들어갈 수 없는 폴더는 결국 AI 없이는 못 쓰는 폴더가 돼요.</span></div>
<div><span class="say">항상 이 디바이스에 유지</span><span class="because">원드라이브는 용량을 아끼려고 파일을 인터넷에만 두기도 해요. 그러면 AI나 옵시디언이 파일을 못 읽을 때가 있어요.</span></div>
<div><span class="say">이 파일을 먼저 읽는다</span><span class="because">1번 원리 기억나시죠? AI는 대화를 기억하지 않아요. 대신 매번 이 파일을 읽게 하면 같은 설명을 반복하지 않아도 돼요.</span></div>
<div><span class="say">작업기록.md에 남긴다</span><span class="because">한 달 뒤 에러가 나면 "작업기록 읽고 고쳐줘" 한마디로 시작할 수 있어요. 다른 AI에게 넘길 때도 이 파일이 인수인계서예요.</span></div>
<div><span class="say">비밀번호와 API 키는 적지 않는다</span><span class="because">폴더가 인터넷에 올라가고, 화면 공유할 때 보일 수도 있어요. 한 번 새어 나간 키는 되돌릴 수 없어요.</span></div>
<div><span class="say">한 번에 한 단계씩</span><span class="because">AI는 한꺼번에 열 단계를 쏟아내는 버릇이 있어요. 한 단계씩 받아야 어디서 막혔는지 알 수 있어요.</span></div>
</div>

<div class="callout tip"><svg><use href="#i-check"/></svg><div><b>막히면 캡처 한 장.</b> 화면 캡처(윈도우 <code>Win + Shift + S</code>, 맥 <code>Cmd + Shift + 4</code>)를 채팅창에 붙여넣고 "지금 이 화면이야. 다음에 뭘 눌러?"라고 물어보세요.</div></div>

<div class="callout warn"><svg><use href="#i-warn"/></svg><div><b>이것만은 직접 해요.</b> 로그인, 비밀번호 입력, 결제 버튼, 그리고 "허용하시겠어요?" 창은 AI에게 넘기지 말고 무엇을 허용하는지 읽고 직접 눌러요.</div></div>

## <span class="no">5</span> 잘 됐는지 확인하기

<ul class="checks">
<li><svg><use href="#i-check"/></svg><span>바탕화면의 <b>me 바로가기</b>를 더블클릭하면 폴더가 열린다</span></li>
<li><svg><use href="#i-check"/></svg><span>옵시디언(또는 노션)에서 <b>AI협업규칙.md</b> 내용이 보인다</span></li>
<li><svg><use href="#i-check"/></svg><span>AI 앱에서 <b>새 대화</b>를 열고 "AI협업규칙.md 읽고 요약해줘"라고 하면, 규칙을 말해준다</span></li>
</ul>

세 개 다 되면 세팅 끝이에요. 이제부터 AI와 무엇을 만들든, 대화를 시작할 때 이 한마디만 붙이면 돼요.

<div class="prompt"><span class="who">앞으로 매번</span><button class="copy" type="button">복사</button><span class="txt">me 폴더의 AI협업규칙.md 먼저 읽고 시작해줘.</span></div>

## <span class="no">6</span> 한 걸음 더: GitHub (중급자용)

이미 AI로 코드를 만들어 보신 분이라면 **GitHub**도 추천해요. 코드 전용 보관소인데, 언제 무엇을 바꿨는지 기록이 전부 남아서 잘못 고쳐도 되돌릴 수 있고, 여러 AI가 같은 코드를 주고받기도 편해져요.

<div class="tools">
<div class="tool t-gh wide"><div class="h"><svg class="i"><use href="#i-github"/></svg>GitHub</div><p>직접 배울 필요는 없어요. 가입만 하고, AI에게 "이 프로젝트 GitHub에 비공개로 올려줘"라고 하면 돼요. 입문하시는 분은 <b>필수가 아니에요.</b> 원드라이브와 옵시디언만으로 충분해요.</p><div class="go"><a href="https://github.com/signup" target="_blank" rel="noopener">GitHub 가입하기 →</a></div></div>
</div>

1주차 전에 여기까지만 해오시면 돼요. 다 못 하셔도 괜찮아요. **막힌 곳이 곧 1주차 수업 재료예요.** 막힌 화면을 캡처해서 가져와 주세요 🙂

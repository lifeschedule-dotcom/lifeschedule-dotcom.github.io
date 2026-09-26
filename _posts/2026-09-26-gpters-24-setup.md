---
title: 날씨 묻는 거 말고, AI 처음 시작할 때 꼭 해야 할 세팅
section: vibe-coding
sub: gpters24
ref: gpters-24-setup
date: 2026-09-26 21:00:00 +0900
description: 사전 세팅 1강. 원드라이브 me 폴더와 옵시디언 보관함을 만들고 AI의 작업 폴더를 확인해요.
---
저는 그동안 AI로 이런저런 프로젝트를 왕창 해왔어요. 노트북 2개, 미니PC 1개, AI 3개(클로드, GPT, 제미나이)를 오가다 보니 만든 것들이 여기저기 흩어져 있었고, 미루고 미루던 정리를 하는 데 **3일이나** 썼습니다.

여러분은 저처럼 되지 않길 바라요. 아직까지 날씨 묻는 데만 AI를 썼다면? **오히려 좋아!!!!!** 처음부터 세팅해 두면 저 같은 수고를 안 해도 돼요.

"엥, 나는 그렇게까지 안 쓸 것 같은데?" 하시는 AI린이 여러분, 방심하지 마세요. 당신도 AI에 빠져서 많은 창작물을 만들게 될 수 있어요!

<div class="keyline">대화의 기억은 내 폴더의 파일에 남겨요.</div>

<div class="lead-note">원리가 궁금하다면 <a href="{{ '/2026/09/26/gpters-24-why/' | relative_url }}">2강</a>을 읽어 보세요!<br>여기서는 <b>설치 방법</b> 위주로 알려드릴게요.</div>

## <span class="no">1</span> 한눈에 보기

쉽게 말하면 원드라이브는 **인터넷 창고**예요. **me**는 제가 AI 작업 전용으로 만든 폴더 이름이에요. 원드라이브의 동기화가 끝나면 다른 기기에서도 me 폴더를 볼 수 있어요. 폴더를 열어 준 AI는 직접 일하는 **비서**, 옵시디언은 폴더 속 글을 읽기 좋게 보여주는 **돋보기**예요. 이 돋보기로 볼 규칙과 기록은 me 안의 **Obsidian Vault** 폴더에 모을 거예요.

<div class="sync">
<div class="pc">
<div class="pc-h"><svg class="i"><use href="#i-laptop"/></svg>지금 쓰는 노트북</div>
<div class="openers"><span><svg class="i"><use href="#i-hand"/></svg>나</span><span><img src="/assets/img/icons/claude.png" alt=""><img src="/assets/img/icons/chatgpt.png" alt="">AI</span><span class="opt"><img src="/assets/img/icons/obsidian.png" alt="">옵시디언</span></div>
<div class="down">↓ me와 그 안의 보관함을 열어요</div>
<div class="kfolder">
<div class="kfolder-h"><svg class="i"><use href="#i-folder"/></svg>me</div>
<div class="kfile"><svg class="i"><use href="#i-folder"/></svg><b>Obsidian Vault</b><span>규칙 파일 + 작업기록</span></div>
<div class="kfile"><svg class="i"><use href="#i-folder"/></svg><b>주제별 폴더</b><span>작업물</span></div>
</div>
</div>
<div class="sync-col"><div class="sync-mid"><img src="/assets/img/icons/onedrive.png" alt=""><b>원드라이브</b><small class="mt">인터넷 창고</small><i>⇄</i><span>동기화가 끝나면<br>두 폴더가 똑같아져요</span></div><div class="sync-gh"><div class="gh-top"><img src="/assets/img/icons/github.png" alt=""><b>GitHub</b></div><i>⇄</i><span>중급자용<br>(코드 폴더용)</span></div></div>
<div class="pc other">
<div class="pc-h"><svg class="i"><use href="#i-laptop"/></svg>다른 노트북 <small>(있다면)</small></div>
<div class="openers"><span><svg class="i"><use href="#i-hand"/></svg>나</span><span><img src="/assets/img/icons/claude.png" alt=""><img src="/assets/img/icons/chatgpt.png" alt="">AI</span><span class="opt"><img src="/assets/img/icons/obsidian.png" alt="">옵시디언</span></div>
<div class="down">↓ me와 그 안의 보관함을 열어요</div>
<div class="kfolder">
<div class="kfolder-h"><svg class="i"><use href="#i-folder"/></svg>me</div>
<div class="kfile"><svg class="i"><use href="#i-folder"/></svg><b>Obsidian Vault</b><span>규칙 파일 + 작업기록</span></div>
<div class="kfile"><svg class="i"><use href="#i-folder"/></svg><b>주제별 폴더</b><span>작업물</span></div>
</div>
</div>
</div>

<h3 class="ih"><img src="/assets/img/icons/onedrive.png" alt="">원드라이브는 왜 쓰나요?</h3>

원드라이브는 마이크로소프트의 인터넷 저장 공간(클라우드)이에요. 여기에 넣어 둔 자료는 **다른 기기에서도 꺼내 쓸 수 있어서** 꼭 추천해요. 예를 들어 부동산 계약서를 사진으로 찍어 원드라이브에 넣어 두면, 휴대폰에 원드라이브 앱을 깔고 같은 계정으로 로그인해서 바로 열 수 있어요. 다른 노트북도 같은 계정으로 로그인하면 똑같이 보여요. 노트북이 한 대뿐이어도 필요해요. 컴퓨터가 고장 나도 자료는 인터넷에 남거든요.

<h3 class="ih"><img src="/assets/img/icons/obsidian.png" alt="">옵시디언은 왜 쓰나요?</h3>

AI에 폴더 접근 권한을 주면, AI는 그 안의 파일을 직접 읽을 수 있어요. 옵시디언은 **사람을 위한 도구**예요. 내 폴더에 쌓이는 규칙과 기록은 대부분 **md 파일**이에요.

<div class="callout tip"><svg><use href="#i-note"/></svg><div><b>md 파일이 뭐예요?</b> 이름 끝에 <code>.md</code>가 붙은 글 파일이에요(마크다운). <code>#</code>은 제목, <code>**</code>는 굵게, <code>-</code>는 목록처럼 간단한 기호로 글의 모양을 적어요. AI와 주고받기 편한 형식이라, AI와 일하면 이 파일이 계속 생겨요. <code>CLAUDE.md</code>처럼 특별한 이름의 md 파일은 1주차에 자세히 알려드릴게요.</div></div>

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

## <span class="no">2</span> 일하는 AI(데스크탑 앱)과 옵시디언 설치하기

AI는 두 곳에서 쓸 수 있어요. 할 수 있는 일이 달라요.

<div class="twoai">
<div class="ta chat"><div class="ta-h"><span class="ta-i"><img src="/assets/img/icons/claude.png" alt=""><img src="/assets/img/icons/chatgpt.png" alt=""></span>일반 채팅창 <small>인터넷 창</small></div><div class="ta-m">전화로 알려주는 친구</div><p>무엇이든 물어보면 알려줘요. 여기서 질문만 했다면 내 컴퓨터의 me 폴더가 작업 폴더로 열린 건 아니에요. <b>손은 내가</b> 움직여요.</p><p class="ta-e">claude.ai · chatgpt.com</p></div>
<div class="ta desk"><div class="ta-h"><span class="ta-i"><img src="/assets/img/icons/claude.png" alt=""><img src="/assets/img/icons/chatgpt.png" alt=""></span>데스크탑 앱 <small>설치하는 프로그램</small></div><div class="ta-m">옆에서 직접 해 주는 친구</div><p>내 컴퓨터의 폴더를 열고 권한을 주면, 파일을 만들고 정리까지 <b>직접</b> 해 줘요.</p><p class="ta-e">클로드: Pro 이상 · GPT: 무료 계정에도 제공되지만 계정에 따라 이용 범위가 달라요</p></div>
</div>

그래서 **설치는 채팅창에 물어보고**, 설치가 끝나면 **데스크탑 앱과 함께** 파일을 만들어요. 폴더를 고르는 화면은 내가 확인하고 눌러요.

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

<h3 class="step-h"><span>2</span><img src="/assets/img/icons/obsidian.png" alt="">옵시디언 설치하고 보관함 만들기 <small>AI와 함께</small></h3>

원드라이브 안에 AI 작업물을 모을 폴더를 만들 거예요. <b>me는 제가 임의로 붙인 이름이라, 원하는 이름으로 바꿔도 돼요.</b> 다른 이름을 쓰면 아래 요청문의 <code>me</code>도 그 이름으로 바꿔 주세요.

데스크탑 앱에 아래 요청을 보내 폴더 만들기와 옵시디언 설치를 함께 부탁해요.

<div class="prompt"><span class="who">폴더 만들기·옵시디언 설치 요청 (데스크탑 앱에)</span><button class="copy" type="button">복사</button><span class="txt">원드라이브 안에 AI 작업물을 모을 <span class="fill">(me)</span> 폴더를 만들어줘. 이미 있으면 그대로 써줘. 옵시디언도 설치하고, 이 폴더 안에 Obsidian Vault라는 보관함을 만들고 싶어. 네가 직접 할 수 있는 일은 해 주고, 폴더 접근 권한이나 내가 눌러야 할 화면이 있으면 한 단계씩 알려줘. 직접 파일을 만들 수 없는 화면이라면 내가 만들 수 있게 안내해줘. 끝나면 만든 폴더를 열어 나와 함께 확인해줘.</span></div>

직접 보관함을 만드는 화면에서는 이렇게 해요. 옵시디언의 <b>새 보관함 생성 → 생성</b>(영문: Create new vault)을 누르세요. 보관함 이름에 <code>Obsidian Vault</code>를 적고, <b>위치 → 탐색</b>에서 원드라이브의 <code>me</code> 폴더를 고른 뒤 <b>생성</b>(Create)을 누릅니다. 그러면 <code>me/Obsidian Vault</code> 폴더가 생겨요.

<div class="seq"><figure><img src="/assets/img/setup/obsidian-create-vault.png" alt="옵시디언 로컬 보관함 생성 화면의 보관함 이름과 위치 탐색 버튼" style="max-width:520px;margin:auto;display:block"><figcaption><b>보관함 이름</b>은 Obsidian Vault, <b>위치</b>는 원드라이브 안의 me로 골라요. 사진은 위치를 선택하기 전 화면입니다. (직접 캡처한 화면에서 개인정보 영역을 제외한 편집 이미지)</figcaption></figure></div>

AI가 이미 같은 보관함을 만들어 뒀다면 다시 만들 필요 없어요. <b>보관함 폴더 열기 → 열기</b>(Open folder as vault)로 <code>me</code> 안의 <code>Obsidian Vault</code>를 여세요. 왼쪽 파일 목록이 비어 있어도 괜찮아요. 규칙 파일은 다음 단계에서 만들 거예요.

<p class="sub-note">옵시디언에서 보관함을 열었다고 AI 앱의 작업 폴더까지 바뀌지는 않아요. 3번에서 Claude·GPT의 작업 폴더를 <b>각각 me로</b> 선택할 거예요. 자세한 옵시디언 사용법은 스터디를 진행하면서 알려드릴게요.</p>

## <span class="no">3</span> AI에게 세팅 시키기

이제 <b>내가 AI 앱에서 작업할 폴더를 선택해요.</b> AI와 만든 문서와 이미지를 한곳에 모으기 위해서예요. 이 실습에서는 원드라이브 안에 만든 <code>me</code>를 고릅니다. 옵시디언에서 여는 보관함은 그 안의 <code>Obsidian Vault</code>예요.

<b>클로드 앱:</b> 로컬 작업 화면에서 폴더를 고르는 곳을 눌러, 원드라이브 안에 이미 만들어 둔 <code>me</code>를 선택해요. 아래 사진의 <b>폴더 없음</b>은 클로드 앱 화면이에요.

<b>GPT(ChatGPT) 데스크탑 앱:</b> <b>Work 또는 Codex 화면</b>에서 <code>Ctrl + O</code>(맥은 <code>Cmd + O</code>, 폴더 열기)를 눌러요. 윈도우의 <b>Select Project Root</b> 창에서 원드라이브 안에 방금 만든 <code>me</code> 폴더를 열고 <b>폴더 선택</b>을 누르세요. 열린 <code>me</code> 프로젝트에서 새 대화를 시작합니다. Codex를 쓴다면 <b>Local</b>을 선택해요.

<div class="seq"><figure><img src="/assets/img/setup/gpt-select-project-root.png" alt="GPT의 Select Project Root 창에서 원드라이브 안의 me 폴더를 선택한 화면"><figcaption><b>GPT · 윈도우 화면</b> — 왼쪽 원드라이브를 열고, 만든 <b>me</b> 폴더를 고른 뒤 오른쪽 아래 <b>폴더 선택</b>을 눌러요. 계정명은 사람마다 달라요. (제공한 캡처의 개인정보를 가린 이미지)</figcaption></figure></div>

폴더 접근 요청은 읽어 보고 직접 허용하세요. 아래 요청문으로 AI에게 저장할 위치를 확인하고 바탕화면 바로가기도 만들도록 부탁할 거예요.

**아래 사진은 클로드 앱의 사용법이에요. GPT 앱에서는 바로 위의 `폴더 열기 → me 프로젝트에서 새 대화` 순서로 진행하세요.**

<div class="seq"><figure><span class="sn">1</span><img src="/assets/img/setup/pick-folder.png" alt="클로드 로컬 작업 입력창의 폴더 없음 버튼"><figcaption>사진 속 클로드 앱에서는 입력창 위 <b>폴더 없음</b>을 눌러요. 다른 화면이라면 폴더 선택 기능을 찾아요</figcaption></figure><figure><span class="sn">2</span><img src="/assets/img/setup/pick-folder-3.png" alt="입력창 위에 me가 표시된 화면"><figcaption>원드라이브의 <b>me</b>를 고른 뒤 아래 요청문을 보내요</figcaption></figure></div>

<div class="callout tip"><svg><use href="#i-folder"/></svg><div><b>매번 폴더를 다시 만들어야 하나요?</b> 아니에요. 폴더와 보관함은 처음에 한 번만 만들어요. GPT는 다음부터 왼쪽 목록의 <b>me 프로젝트에서 새 대화</b>를 시작하면 됩니다. 클로드는 새 로컬 작업을 시작할 때 <b>me가 선택되어 있는지</b> 확인해요. 같은 대화에서 매 메시지마다 폴더 주소를 말할 필요는 없어요.</div></div>

어떤 폴더를 골라야 할지 어렵다면, 화면을 캡처해서 AI에게 이렇게 물어보세요.

<div class="prompt"><span class="who">폴더 선택이 막힐 때</span><button class="copy" type="button">복사</button><span class="txt">AI 작업물을 원드라이브 안의 (me) 폴더에 모으고 싶어. 지금 화면에서 어디를 눌러야 이 폴더를 작업 폴더로 열 수 있는지 한 단계씩 알려줘. 폴더 정리가 필요하다면 기존 파일을 바로 옮기거나 지우지 말고, 어떻게 정리하면 좋을지 먼저 설명해줘.</span></div>

**me 폴더를 연 데스크탑 앱**에 아래 요청을 보내요. AI가 앞에서 만든 <code>Obsidian Vault</code> 안에 규칙 파일을 만들고, 앞으로 작업물과 기록을 어디에 둘지도 적을 거예요.

<div class="callout tip"><svg><use href="#i-folder"/></svg><div><b>왜 me 폴더를 만들까요?</b> Claude와 GPT의 작업물을 모을 공통 주소가 필요해서예요. me가 원드라이브 안에 있으면 동기화 후 다른 컴퓨터에서도 같은 파일을 볼 수 있어요.
<div class="folder-tree"><div><strong>원드라이브</strong><span>인터넷 창고</span></div><div class="depth-1">└ <strong>me</strong><span>AI 작업의 공통 폴더</span></div><div class="depth-2">├ <strong>Obsidian Vault</strong><span>규칙·작업기록 노트</span></div><div class="depth-2">└ <strong>주제별 폴더</strong><span>문서·이미지 등 작업물</span></div></div>
<div class="folder-open"><div><b>Claude·GPT에서 여는 폴더</b><code>me</code></div><div><b>옵시디언에서 여는 보관함</b><code>me/Obsidian Vault</code></div></div>
<p>옵시디언에서 보관함을 열어도 AI 앱의 작업 폴더는 바뀌지 않아요. 아래 요청문으로 AI에게 작업 폴더가 맞는지 확인해 달라고 해요.</p></div></div>

**보내기 전에 한 줄씩 읽어 주세요.** 이해 안 되는 줄은 바로 아래 4번에 번호별로 풀어 뒀어요.

<div class="prompt"><span class="who">지식관리 세팅 요청</span><button class="copy" type="button">복사</button><span class="txt">안녕! 나는 <span class="fill">(하는 일)</span>을 하는 사람이고, AI는 처음이야. 앞으로 너랑 한 일을 한 폴더에 모아서 관리하고 싶어. 아래대로 세팅해줘. 네가 직접 할 수 있는 건 해주고, 내가 눌러야 하는 화면만 한 단계씩 천천히 알려줘.

1. 지금 작업 폴더가 원드라이브 안에 만든 <span class="fill">(me)</span>인지 확인하고 실제 위치를 알려줘. 다른 폴더가 열려 있거나 확인할 수 없다면, 먼저 내가 올바른 폴더를 열 수 있게 안내해줘. 확인이 끝나면 앞으로 너와 만든 문서·작업물은 이 폴더 안의 주제별 폴더에 저장해.
2. 나는 개발자가 아니라서 마우스로 폴더를 열어 직접 볼 거야. 폴더와 파일 이름은 한눈에 알아보기 쉽게 짓고, 가능하면 바탕화면에 이 폴더 바로가기를 만들어줘. 네가 직접 만들 수 없다면 내가 마우스로 만들도록 알려줘.
3. 이 폴더가 이 컴퓨터에 실제로 내려와 있는지 확인하고, 필요하면 원드라이브에서 "항상 이 디바이스에 유지"로 설정해줘. 바탕화면·문서·사진 전체 백업은 새로 켜지 마.
4. me 안의 Obsidian Vault 폴더가 있는지 확인해줘. 없다면 앞의 보관함 만들기를 마칠 수 있게 안내해줘. 보관함이 준비되면 그 안에 AI협업규칙.md 파일을 만들고 아래 규칙을 적어줘. 같은 이름의 파일이 이미 있다면 기존 내용을 읽고, 필요한 규칙만 보완해줘.
   - 새 작업물은 me 안의 주제별 폴더에 저장한다
   - 작업이 끝나면 Obsidian Vault 안에 해당 주제의 작업기록.md가 있으면 기존 내용을 보존하고 날짜별로 덧붙인다. 없으면 만든다. 날짜, 한 일, 작업물 위치, 다음 할 일을 짧게 남긴다
   - 비밀번호와 API 키는 파일에 적지 않는다
   - 나는 초보니까 쉬운 말로, 한 번에 한 단계씩 설명한다

다 끝나면 무엇을 어디에 만들었는지 실제 폴더 위치와 함께 보여줘. 바탕화면 바로가기와 Obsidian Vault 안의 규칙 파일이 열리는지도 나와 함께 확인해줘.</span></div>

AI가 파일을 만든 뒤 옵시디언으로 돌아가세요. 왼쪽 파일 목록에 <b>AI협업규칙</b>이 보이면 같은 보관함을 보고 있는 거예요. 옵시디언에서는 이름 뒤의 <code>.md</code>가 숨겨져 보일 수도 있어요. 파일을 열어 규칙이 읽히는지도 확인해요. AI 앱에서는 계속 <code>me</code>를 작업 폴더로 열고, 필요할 때 <code>Obsidian Vault/AI협업규칙.md</code>를 읽어 달라고 요청해요.

<div class="callout warn"><svg><use href="#i-warn"/></svg><div><b>이것만은 직접 해요.</b> 로그인, 비밀번호, 결제, "허용할까요?" 창은 읽어 보고 내가 눌러요.</div></div>

## <span class="no">4</span> 요청문 한 줄씩 풀어 보기

요청문의 번호와 똑같은 순서예요. 이해 안 되는 줄이 있으면 여기서 찾아보세요.

<div class="whyg">
<div class="wg-h"><span>1</span>원드라이브 안에 연 me 폴더</div>
<div class="wc"><div class="wq">원드라이브 안에 있는지 확인해줘</div><p>원드라이브 안에 넣은 것만 인터넷에 올라가서, 휴대폰이나 다른 노트북에서 꺼내 쓸 수 있어요. me 폴더를 원드라이브 밖에 만들면, 그 폴더는 지금 노트북에만 남아요.</p></div>
<div class="wc"><div class="wq">여기에 저장해</div><p>정해 주지 않으면 AI는 그때그때 편한 곳에 파일을 만들어요. 일반 채팅에서 "me에 만들어줘"라고만 하면 내 컴퓨터의 me에 저장된다고 보장할 수 없어요. 먼저 폴더를 열고, 요청에도 "여기에 저장해"라고 적어요.</p></div>
</div>

<div class="whyg">
<div class="wg-h"><span>2</span>마우스로 직접 볼 거야</div>
<div class="wc shot"><div><div class="wq">마우스로 폴더를 열어 직접 볼 거야</div><p>이 말을 넣으면 AI에게 알아보기 쉬운 이름과 <b>바탕화면 바로가기</b>를 부탁할 수 있어요. AI가 바탕화면에 직접 만들 수 없다면, 안내를 보며 내가 마우스로 만들면 됩니다. 그러면 오른쪽 화면처럼 더블클릭 한 번으로 내 폴더에 들어가요.</p><p>내가 직접 못 들어가는 폴더는 파일 하나 여는 쉬운 일도 매번 AI에게 부탁하게 돼요.</p></div><figure><img src="/assets/img/setup/desktop-me.png" alt="바탕화면의 me 폴더 바로가기를 마우스로 가리킨 화면"><figcaption>바탕화면의 <b>me</b> 바로가기</figcaption></figure></div>
</div>

<div class="whyg">
<div class="wg-h"><span>3</span>항상 이 디바이스에 유지</div>
<div class="wc"><div class="wq">항상 이 디바이스에 유지</div><p>원드라이브는 컴퓨터 용량을 아끼려고, 파일은 인터넷에만 두고 내 컴퓨터에는 <b>이름만</b> 남겨 두기도 해요. 그러면 인터넷이 끊겼을 때 열리지 않고, AI가 파일을 제대로 못 읽을 때가 있어요.</p><p>"항상 이 디바이스에 유지"는 <b>"이 폴더는 내 컴퓨터에도 늘 진짜 파일로 둬"</b>라는 설정이에요. 파일 탐색기에서 폴더 옆 표시로 확인해요.</p><div class="states"><span class="st cloud"><i>☁</i>파란 구름<small>인터넷에만 있어요</small></span><span class="st keep"><i>✔</i>꽉 찬 초록 체크<small>내 컴퓨터에도 늘 있어요</small></span></div></div>
<div class="wc"><div class="wq">전체 백업은 새로 켜지 마</div><p>켜면 바탕화면·문서·사진이 통째로 올라가서, 스크린샷까지 전부 원드라이브에 쌓여요. 필요한 폴더만 넣어야 찾기 쉬워요.</p></div>
</div>

<div class="whyg">
<div class="wg-h"><span>4</span>보관함 안에 규칙 파일 만들기</div>
<div class="wc"><div class="wq">Obsidian Vault · AI협업규칙.md · 작업기록.md</div><p><code>Obsidian Vault</code>는 me 안의 폴더예요. 규칙·기록은 그 안에 있는 md 파일입니다. me 폴더를 작업 폴더로 열었다면, <b>내가 파일을 직접 만들 필요는 없어요.</b> AI에게 부탁하면 돼요. 작업물은 me의 주제별 폴더에 두고, 보관함의 작업기록에 그 위치를 적어요. 나중에는 규칙을 조금씩 고쳐 나가면 됩니다.</p><div class="prompt mini"><span class="who">규칙을 더하고 싶을 때</span><button class="copy" type="button">복사</button><span class="txt">Obsidian Vault/AI협업규칙.md에 <span class="fill">(파일 이름은 날짜로 시작한다)</span> 규칙을 추가해줘.</span></div><div class="prompt mini"><span class="who">오늘 한 일을 남기고 싶을 때</span><button class="copy" type="button">복사</button><span class="txt">오늘 한 일을 Obsidian Vault 안의 해당 주제 작업기록.md에 남겨줘.</span></div></div>
<div class="wc"><div class="wq">비밀번호와 API 키는 적지 않는다</div><p>이 폴더는 인터넷에 올라가고, 화면 공유할 때 보일 수도 있어요. 한 번 새어 나간 키는 되돌릴 수 없어요.</p></div>
<div class="wc"><div class="wq">한 번에 한 단계씩</div><p><b>쪼개기 법칙</b>이에요. 큰 일은 작은 단계로 쪼개서 하나씩 해요. AI는 열 단계를 한꺼번에 쏟아내는 버릇이 있는데, 한 단계씩 받아야 어디서 막혔는지 바로 알 수 있어요.</p></div>
</div>


## <span class="no">5</span> 잘 됐는지 하나하나 확인하기

AI가 끝났다고 하면, 이 네 가지를 **직접** 확인해요.

<ul class="checks">
<li><svg><use href="#i-check"/></svg><span>바탕화면의 <b>내 폴더 바로가기</b>를 더블클릭하면 폴더가 열린다</span></li>
<li><svg><use href="#i-check"/></svg><span>me 안의 <b>Obsidian Vault</b> 폴더를 열면 <b>AI협업규칙.md</b> 파일이 보인다</span></li>
<li><svg><use href="#i-check"/></svg><span>옵시디언에서도 <b>Obsidian Vault</b>를 열면 같은 규칙 파일이 보인다(<code>.md</code>가 안 보여도 괜찮다)</span></li>
<li><svg><use href="#i-check"/></svg><span><b>새 대화</b>에서 아래 한 줄을 보내면, AI가 파일의 규칙과 실제 위치를 말해 준다</span></li>
</ul>

<b>아래 요청은 새 대화를 시작할 때 한 번 보내요. 매 메시지마다 반복할 필요는 없어요.</b> 폴더를 선택하는 것과, 그 안의 규칙 파일을 읽게 하는 것은 별개예요. 클로드에서는 me가 선택되어 있는지 확인하고, GPT에서는 me 프로젝트에서 새 대화를 시작한 뒤 보내세요. 새로 출근한 직원에게 "업무 매뉴얼 먼저 보고 시작해요"라고 말하는 것과 같아요.

<div class="prompt"><span class="who">새 대화를 시작할 때</span><button class="copy" type="button">복사</button><span class="txt">지금 작업 폴더로 연 원드라이브의 <span class="fill">(me)</span> 안에서 Obsidian Vault/AI협업규칙.md와 이번 작업의 최근 작업기록을 읽고, 각 파일의 실제 위치를 알려준 뒤 시작해줘. 아직 작업기록이 없다면 없다고 알려줘.</span></div>

<p class="sub-note">이 한 줄 없이도 AI가 알아서 규칙을 읽게 하는 설정은 1주차에 같이 해요.</p>

<div class="done"><div class="done-t">🎉 여기까지 했으면 설치가 끝났어요!<br>축하드립니다!</div><p>아래는 부가 설명이에요. 궁금한 분만 더 읽어 보세요!</p></div>

## <span class="no">6</span> 더 알아 두면 좋은 것 <small>(선택)</small>

### 내 폴더 주소 읽는 법

파일 탐색기 주소창을 한 번 클릭하면 내 폴더의 주소가 보여요. 주소는 큰 곳에서 작은 곳으로 들어가는 길이에요.

<div class="addr">
<div class="addr-line"><span class="c1"><b>C:</b><small>저장 드라이브</small></span><span class="sep">\</span><span class="c2"><b>Users</b><small>사용자 폴더</small></span><span class="sep">\</span><span class="c3"><b>User</b><small>이 컴퓨터의 내 이름</small></span><span class="sep">\</span><span class="c4"><b>OneDrive</b><small>원드라이브 구간</small></span><span class="sep">\</span><span class="c5"><b>me</b><small>내 폴더</small></span></div>
<div class="sym"><div><b class="k">:</b><p><b>"여기까지가 저장 공간 이름"</b>이라는 표시예요. <code>C:</code>는 내 컴퓨터 안의 저장 공간 이름이라, 보통 "C 드라이브"라고 읽어요.</p></div><div><b class="k">\</b><p><b>"그 안으로 들어가요"</b>라는 표시예요. 폴더 하나에 들어갈 때마다 하나씩 붙어요. 파일 탐색기 주소창의 <code>›</code>와 같아요.</p></div></div>
<p>그래서 이 주소는 "서울시 › ○○구 › ○○동"처럼, <b>C 드라이브 안의 Users 안의 내 이름 안의 OneDrive 안의 me</b>라고 읽어요.</p>
</div>

---
title: "둘이검토 스킬: AI에게 '검토해' 한 줄로 다른 AI의 검토까지 받기"
section: vibe-coding
sub: automation
ref: duli-review
date: 2026-10-09 23:00:00 +0900
description: 내 AI에게 "검토해"라고만 하면, 다른 AI가 먼저 혼자 읽고 틀린 것을 잡아 주는 둘이검토 스킬. 한 줄 설치, 두 가지 설정, 실제 결과.
spacious: true
---
AI한테 글이나 설계를 시키면 참 잘 써 줘요.<br>
그런데 **자기가 쓴 걸 자기가 틀렸다고는 못 찾아요.**<br>
그래서 저는 늘 다른 AI한테 한 번 더 보여 줬는데, 그 설명을 매번 제가 다시 하고 있더라고요.

<div class="keyline">내 AI에게 "검토해"라고만 하면<br>다른 AI가 먼저 혼자 읽고 틀린 걸 잡아 와요.</div>

## <span class="no">1</span> 한눈에 보기

<div class="twoai">
<div class="ta chat"><div class="ta-h"><span class="ta-i"><img src="/assets/img/icons/claude.png" alt=""></span>지금까지</div><p>AI 하나가 쓰고, <b>자기가 확인해요.</b><br>틀린 걸 모르고 지나가요.</p></div>
<div class="ta desk"><div class="ta-h"><span class="ta-i"><img src="/assets/img/icons/claude.png" alt=""><img src="/assets/img/icons/chatgpt.png" alt=""></span>둘이검토</div><p>다른 AI가 <b>먼저 혼자 읽고</b> 틀린 것·안 통할 것을 적어요.<br>내 AI가 하나씩 받아들이거나 근거로 반박해요.</p></div>
</div>

제가 하는 일은 하나예요. 내 AI에게 **"검토해"**라고 하는 것.<br>
내 AI가 검토 AI에게 파일을 보내고, 답을 받아 고치고, 끝나면 세 줄로 알려 줘요.

<div class="collab">
<div class="cb-ai"><img src="/assets/img/icons/claude.png" alt=""><b>내 AI</b></div>
<div class="cb-arr"><span>① 설계안 <br>파일로 <i>→</i></span><span><i>←</i> ③ 답 읽고 <br>고치기</span></div>
<div class="cb-folder"><b><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2z"/></svg>live_collaboration</b><div class="cb-file">01 설계안 → 검토 AI.md</div><div class="cb-file">02 검토 → 내 AI.md</div><span class="cb-note">양쪽이 "더 고칠 거 없음"이 될 때까지</span></div>
<div class="cb-arr"><span>② 먼저 혼자 <br>읽기 <i>→</i></span><span><i>←</i> 틀린 것 <br>적어 주기</span></div>
<div class="cb-ai"><img src="/assets/img/icons/chatgpt.png" alt=""><b>검토 AI</b></div>
</div>

검토 AI는 **다른 회사 AI**(클로드 ↔ GPT)가 제일 좋고, AI가 하나뿐이면 **같은 도구의 다른 모델**을 새로 띄워요.<br>
새로 띄운 모델은 제 대화를 모르고 파일만 읽어서, 내 AI 의견에 끌려가지 않아요.

## <span class="no">2</span> 설치하기 <small>한 줄</small>

작업하던 클로드 코드나 코덱스 창에 붙여 넣어요. 깃허브에서 직접 받을 건 없어요.

<div class="prompt"><span class="who">설치 요청 (데스크탑 앱에)</span><button class="copy" type="button">복사</button><span class="txt">https://github.com/lifeschedule-dotcom/duli 이 스킬 설치해 줘</span></div>

## <span class="no">3</span> 처음 한 번, 두 가지만 답하기

설치가 끝나면 AI가 바로 물어요.

<div class="wc">
<p><b>1. 지금 쓰는 AI 앱은요?</b> (클로드 코드 / 코덱스 앱 / 둘 다 / 챗GPT 웹만)</p>
<p><b>2. AI끼리 파일을 주고받을 폴더가 있나요?</b> 없으면 '없음'. 작업 폴더 안에 만들어 줘요.</p>
</div>

답하면 AI가 `live_collaboration` 폴더, 협업 규칙 파일, 그리고 다음 대화에서도 이 규칙을 읽게 하는 안내(AGENTS.md)를 만들어요.<br>
이미 있는 파일은 덮어쓰지 않고 끝에 몇 줄만 붙여요.

## <span class="no">4</span> "검토해" 해 보기

설계안이든 글이든 파일 하나를 두고 이렇게만 해요.

<div class="prompt"><span class="who">검토 요청 (내 AI에게)</span><button class="copy" type="button">복사</button><span class="txt"><span class="fill">(설계안 파일 이름)</span> 이 설계안 검토해</span></div>

제가 피부관리실 예약 자동화 설계안에 **일부러 틀린 것 세 개를 심어** 놓고 돌려 봤어요.<br>
내 AI는 클로드, 검토 AI는 다른 모델(Opus)이었고 3분 걸렸어요.

<div class="wc">
<p><b>검토 AI가 적어 온 것 (실제 파일에서 발췌)</b></p>
<p>1. 틀림: robots.txt에 noindex를 적는 방식은 구글이 지원하지 않습니다 [확인]<br>
2. 틀림: Supabase 무료 플랜에는 매일 자동 백업이 없습니다 [확인]<br>
4. 지울 것: 예시 표에 실제 고객 실명·전화번호·건강 메모가 있습니다<br>
5. "더 고칠 거 없음"이 아닙니다.</p>
</div>

심어 둔 셋을 다 잡았고, 제가 생각 못 한 것도 아홉 개 더 찾았어요.<br>
끝나면 내 AI가 세 줄로 알려 줘요. **검토 AI가 누구였는지, 지적 몇 개 중 몇 개를 반영했는지, 결과물이 어디 있는지.**

## <span class="no">5</span> 요청문 한 줄씩 풀어 보기

<div class="whyg">
<div class="wg-h"><span>1</span>이 스킬 설치해 줘</div>
<div class="wc"><p>주소를 AI에게 주면 AI가 알아서 받아요.<br>스킬은 "이럴 땐 이렇게 해"를 적어 둔 파일 하나예요.</p></div>
</div>

<div class="whyg">
<div class="wg-h"><span>2</span>검토해</div>
<div class="wc"><p>설계안이면 틀린 전제·빠진 경우·더 단순한 길을, 결과물이면 틀린 것·안 통할 것·개인정보를 봐요.<br>어느 쪽인지는 AI가 알아서 정해요.</p></div>
</div>

## <span class="no">6</span> 잘 됐는지 확인하기

`live_collaboration` 폴더를 열어요. 번호가 붙은 파일 두 개가 보이면 된 거예요.

<div class="wc">
<p><b>예약 자동화 01 설계안 v1 → Opus - 2026-10-09 1335 Claude.md</b> — 내 AI가 보낸 것</p>
<p><b>예약 자동화 02 설계안 v1 검토 → Claude - 2026-10-09 1304 Opus.md</b> — 검토 AI가 보낸 것</p>
</div>

누가 뭘 잡았고 뭘 반영했는지 이 파일들에 다 남아요.

<div class="done"><div class="done-t">🎉 여기까지 했으면 둘이검토가 끝났어요!</div></div>

## <span class="no">7</span> 더 알아 두면 좋은 것 <small>(선택)</small>

### 둘이 의견이 다르면요?

저한테 묻지 않아요.<br>
같은 지적이 두 번 이어지면 토론 파일을 열고, **근거가 있는 쪽**이 이겨요.<br>
두 번 주고받아도 안 갈리면 둘 다 조건을 붙여 적어요.

### 챗GPT 웹만 쓰면요?

내 AI가 만든 파일을 검토 창에 첨부하고, 답을 복사해 저장하는 것만 제가 해요.<br>
검토 창은 **다른 모델로 새로** 열면 돼요.

### 확인한 자료

<ul class="refs">
<li><a href="https://github.com/lifeschedule-dotcom/duli" target="_blank" rel="noopener">둘이검토 스킬 저장소</a></li>
<li><a href="https://github.com/chat-prompt/write-post" target="_blank" rel="noopener">지피터스 write-post 스킬 (설치 방식 참고)</a></li>
<li><a href="https://github.com/jcputney/agent-peer-review" target="_blank" rel="noopener">agent-peer-review (먼저 혼자 읽기 참고)</a></li>
</ul>

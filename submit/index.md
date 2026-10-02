---
layout: page
title: 자료 제출
section: submit
lang: ko
description: 지피터스 24기 스터디원이 개발 자료를 스터디장에게만 보내는 곳이에요.
spacious: true
---
<div class="keyline">개발 자료를 여기에 첨부해 주세요.<small>zip 파일은 아래 프롬프트로 만들 수 있어요.</small></div>

## <span class="no">1</span> 첨부하기

<form id="submit-form" class="sform" data-endpoint="https://script.google.com/macros/s/AKfycbzdtn8CjrIkqHaXIaaGFig6XBJhxgnhV6H5yoNXuHTdgaqsxj57VYBDpFjuclaQxNbmBg/exec" novalidate>
<label class="sf-row"><span class="sf-l">닉네임 <b>*</b></span><input name="nickname" type="text" maxlength="40" autocomplete="nickname" required></label>
<label class="sf-row"><span class="sf-l">자료 파일 (zip, 100MB까지)</span><input name="file" type="file"></label>
<label class="sf-row"><span class="sf-l">또는 대화 공유 링크</span><input name="link" type="url" placeholder="https://" inputmode="url"></label>
<p class="sf-hint">인터넷 채팅창(ChatGPT·Claude)으로만 작업했다면 대화 "공유" 링크를 넣어 주세요.</p>
<input class="sf-hp" name="website" type="text" tabindex="-1" autocomplete="off" aria-hidden="true">
<label class="sf-agree"><input name="agree" type="checkbox"> 아래 주의점을 읽었고, 자료를 보내는 데 동의해요.</label>
<button class="sf-btn" type="submit">제출하기</button>
<div class="sf-bar" hidden><span></span></div>
<p class="sf-status" role="status" aria-live="polite"></p>
</form>

<ul class="use-list">
<li>보내주신 자료는 스터디장(라이프스케줄)만 볼 수 있어요.<br>다른 스터디원에게는 공개되지 않아요.</li>
<li>여러분을 도와드리는 용도로만 써요.<br>그 외 용도로는 절대 쓰지 않아요.</li>
<li>더 나은 방법을 조사할 때 AI 도구(Claude 등)를 함께 써요.</li>
<li>스터디가 끝나면 받은 자료는 삭제해요.<br>원하시면 언제든 먼저 삭제를 요청할 수 있어요.</li>
</ul>

<div class="callout warn"><svg><use href="#i-warn"/></svg><div>API 키나 비밀번호는 AI가 자동으로 빼도록 되어 있어요.<br>그래도 보내기 전에 한 번만 확인해 주세요.</div></div>

## <span class="no">2</span> zip 만드는 프롬프트 <small>(복사 붙여넣으세요!)</small>

Claude Code나 Codex에 통째로 붙여넣어요.<br>
개발하던 대화창에 붙여넣으면 더 정확해요.

<div class="prompt"><span class="who">자료 정리 요청 (Claude Code·Codex에)</span><button class="copy" type="button">복사</button><span class="txt">너는 내 개발 자료를 스터디장님께 보낼 제출용 압축 파일로 만들어 주는 도우미야.
스터디장님은 이 자료를 AI에게 넘겨서 내 상황에 맞는 방법을 같이 조사할 거야.
그래서 다른 AI가 내 프로젝트를 바로 이해하고 이어서 작업할 수 있는 자료가 모두 들어가야 해.

[1단계: 먼저 물어봐]
아래 두 가지를 한 메시지로 같이 물어봐.
1) "제출할 프로젝트 이름이 뭔가요? 무엇을 만드는 프로젝트인지도 한 줄로 알려 주세요. (예: 예약 자동화 - 예약이 들어오면 시트에 정리하고 안내 문자 보내기)"
2) "혼자 풀기 어려웠거나 지금 막혀 있는 게 있나요? 없으면 '없음'이라고 답해 주세요."

[2단계: 폴더 찾고 확인받기]
- 내 답을 바탕으로 프로젝트 폴더를 찾아. 지금 열려 있는 폴더부터 확인하고, 아니면 바탕화면, 문서, 다운로드, 사용자 폴더, 원드라이브에서 이름이나 내용이 맞는 폴더를 찾아.
- 폴더 이름만 보고 판단하지 마. 안의 파일을 열어 보고 내가 설명한 프로젝트와 맞는지 확인해.
- 후보를 최대 3개 보여 줘. 후보마다 아래 네 가지를 같이 보여 줘.
  · 폴더 경로
  · 주요 파일 3~5개
  · 마지막으로 수정한 날짜
  · 파일을 보고 파악한 한 줄 설명
- "이 프로젝트가 맞나요?"라고 묻고 번호로 고르게 해. 프로젝트가 여러 폴더에 나뉘어 있으면 여러 개 고를 수 있게 해 줘.
- 맞는 폴더를 못 찾으면 어디를 찾아봤는지 알려 주고, 폴더 위치를 물어봐.
- 내가 폴더를 확인하기 전에는 절대 압축하지 마.
- 폴더를 확인한 다음부터는 나한테 묻지 말고 파일을 보고 알아서 판단해.

[3단계: 자료 모으기]
- 내가 확인한 폴더들을 복사해서 제출용 폴더 하나로 모아 줘.
- 원본 파일은 절대 수정하거나 지우지 마. 복사본으로만 작업해.

[4단계: 빼야 할 것]
- 비밀 정보 파일: .env, 인증서, 키 파일, credentials·token이 들어간 파일 → 빼고, 어떤 이름의 파일을 뺐는지만 기록
- 코드나 설정 안에 적힌 API 키, 비밀번호, 토큰 → "***"로 바꾼 복사본을 넣기
- 고객 개인정보(이름·전화번호·주소·계좌)가 든 데이터 파일 → 빼고, 대신 첫 줄(열 이름)만 남긴 예시 파일을 넣기
- 다시 설치하면 생기는 폴더: node_modules, .venv, venv, __pycache__, .git, dist, build
- 큰 파일: 사진·영상 등 10MB가 넘는 파일 → 빼고 목록만 기록

[5단계: AI 인계 문서 만들기]
압축 파일 맨 위에 "00_AI인계.md"를 만들어 줘. 다른 AI가 이 파일만 읽어도 바로 작업을 이어갈 수 있게, 파일과 이 대화에서 확인한 사실만 짧게 써. 모르는 건 지어내지 말고 "확인 필요"라고 적어.
- 프로젝트 이름과 목적 (내가 말한 설명 + 파일을 보고 파악한 내용)
- 종류 (업무 자동화 / 앱 / 웹사이트 / 챗봇 / 기타)
- 사용한 도구·언어·서비스, 컴퓨터 환경(윈도우/맥)
- 폴더 구조와 주요 파일 역할 (원래 폴더 위치도 함께)
- 실행 방법
- 현재 상태 (완성된 것 / 진행 중인 것)
- 파일이나 로그, 이 대화에서 발견한 에러 (원문 그대로)
- 막힌 부분: 내가 답한 내용 그대로
- 뺀 파일과 가린 정보 목록

[6단계: 압축하기]
- 파일 이름: 개발자료_오늘날짜.zip (예: 개발자료_20261002.zip)
- 바탕화면에 저장해 줘. 바탕화면을 못 찾으면 작업 폴더 바로 바깥에 저장해.
- 100MB가 넘으면 큰 파일부터 더 빼서 100MB 아래로 맞춰 줘.

[7단계: 끝나면]
- 압축하기 전에 비밀 정보가 남아 있는지 한 번 더 검사하고, 결과를 한 줄로 알려 줘.
- zip 파일이 저장된 위치를 알려 줘.</span></div>

<script src="{{ '/assets/js/submit.js' | relative_url }}"></script>

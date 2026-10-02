// 자료 제출 탭: 닉네임·링크·zip 파일을 Apps Script 웹 앱으로 보낸다.
// 큰 파일은 4MB씩 나눠 보내고, 받는 쪽이 구글 드라이브에 이어 붙인다.
(function () {
  var form = document.getElementById('submit-form');
  if (!form) return;

  var en = document.documentElement.lang === 'en';
  var T = en ? {
    needNick: 'Please enter your nickname.',
    needOne: 'Please attach a zip file or paste a share link.',
    tooBig: 'The file is over 100MB. Ask the AI to make it smaller and try again.',
    needAgree: 'Please check the agreement box.',
    notReady: 'Submissions are not open yet.',
    sending: 'Sending… please keep this page open.',
    done: 'Done! Your files were sent. Thank you.',
    failed: 'Sending failed. Please try again in a moment.'
  } : {
    needNick: '닉네임을 적어 주세요.',
    needOne: 'zip 파일을 첨부하거나 공유 링크를 넣어 주세요.',
    tooBig: '파일이 100MB를 넘어요. AI에게 더 줄여 달라고 한 뒤 다시 올려 주세요.',
    needAgree: '동의 칸에 체크해 주세요.',
    notReady: '아직 제출을 받기 전이에요.',
    sending: '보내는 중이에요. 이 화면을 닫지 말아 주세요.',
    done: '제출 완료! 자료가 잘 도착했어요. 감사합니다.',
    failed: '보내지 못했어요. 잠시 뒤 다시 눌러 주세요.'
  };

  var CHUNK = 4 * 1024 * 1024; // 256KB의 배수여야 한다 (드라이브 이어 올리기 규칙)
  var MAX = 100 * 1024 * 1024;
  var btn = form.querySelector('.sf-btn');
  var bar = form.querySelector('.sf-bar');
  var fill = bar.querySelector('span');
  var status = form.querySelector('.sf-status');

  function say(msg, kind) {
    status.textContent = msg;
    status.className = 'sf-status' + (kind ? ' ' + kind : '');
  }

  function post(body, tries) {
    tries = tries || 3;
    return fetch(form.getAttribute('data-endpoint'), { method: 'POST', body: JSON.stringify(body) })
      .then(function (r) { return r.json(); })
      .then(function (j) { if (!j.ok) throw new Error(j.error || 'error'); return j; })
      .catch(function (err) {
        if (tries <= 1 || (err && err.message === 'size')) throw err;
        return new Promise(function (res) { setTimeout(res, 1500); }).then(function () { return post(body, tries - 1); });
      });
  }

  function base64(blob) {
    return new Promise(function (resolve, reject) {
      var fr = new FileReader();
      fr.onload = function () { resolve(String(fr.result).split(',')[1] || ''); };
      fr.onerror = reject;
      fr.readAsDataURL(blob);
    });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (form.website.value) return; // 사람에게는 안 보이는 칸: 자동 스팸이면 조용히 무시
    var nick = form.nickname.value.trim();
    var link = form.link.value.trim();
    var file = form.file.files[0];
    if (!nick) return say(T.needNick, 'err');
    if (!file && !link) return say(T.needOne, 'err');
    if (file && file.size > MAX) return say(T.tooBig, 'err');
    if (!form.agree.checked) return say(T.needAgree, 'err');
    if (!form.getAttribute('data-endpoint')) return say(T.notReady, 'err');

    btn.disabled = true;
    bar.hidden = !file;
    fill.style.width = '0%';
    say(T.sending);

    var start = { action: 'start', nickname: nick, link: link, agree: true };
    if (file) {
      start.fileName = file.name;
      start.fileSize = file.size;
      start.mimeType = file.type || 'application/octet-stream';
    }

    post(start).then(function (j) {
      if (!file) return;
      var offset = 0;
      function next() {
        if (offset >= file.size) return Promise.resolve();
        var end = Math.min(offset + CHUNK, file.size);
        return base64(file.slice(offset, end))
          .then(function (data) { return post({ action: 'chunk', id: j.id, offset: offset, data: data }); })
          .then(function () {
            offset = end;
            fill.style.width = Math.round(offset / file.size * 100) + '%';
            return next();
          });
      }
      return next();
    }).then(function () {
      say(T.done, 'ok');
      form.reset();
    }).catch(function (err) {
      say(err && err.message === 'size' ? T.tooBig : T.failed, 'err');
    }).then(function () {
      btn.disabled = false;
    });
  });
})();

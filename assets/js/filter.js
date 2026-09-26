(function () {
  var buttons = document.querySelectorAll('.sub');
  var cards = document.querySelectorAll('.card');
  var empty = document.querySelector('.empty');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var want = btn.getAttribute('data-sub');
      var shown = 0;
      cards.forEach(function (c) {
        var ok = want === 'all' || c.getAttribute('data-sub') === want;
        c.hidden = !ok;
        if (ok) shown++;
      });
      if (empty) empty.hidden = shown > 0;
    });
  });
})();

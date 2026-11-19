/* Each link is 1 m. Joint 2's angle is relative to link 1. */
(function () {
  'use strict';
  const NS = 'http://www.w3.org/2000/svg';
  const radians = value => value * Math.PI / 180;
  const number = value => (Math.abs(value) < 0.005 ? 0 : value).toFixed(2);
  function stateAt(degrees1, degrees2, rates) {
    const a = radians(degrees1), b = radians(degrees1 + degrees2);
    const elbow = [Math.cos(a), Math.sin(a)];
    const tip = [elbow[0] + Math.cos(b), elbow[1] + Math.sin(b)];
    const columns = [[-tip[1], tip[0]], [-Math.sin(b), Math.cos(b)]];
    const velocity = columns[0].map((v, i) => v * rates[0] + columns[1][i] * rates[1]);
    return { elbow, tip, columns, velocity, speed: Math.hypot(...velocity) };
  }
  document.querySelectorAll('[data-jacobian-demo]').forEach((root, demoIndex) => {
    const suffix = 'jd-' + demoIndex;
    root.innerHTML = `<h3>2관절 로봇팔 — 속도 실험</h3>
      <p>링크 길이 각 1 m</p>
      <div class="jd-legend"><span style="--line-color:#2a78d6">링크 1</span><span style="--line-color:#1baf7a">링크 2</span><span style="--line-color:#d79525">끝점 속도</span></div>
      <svg viewBox="0 0 600 520" role="img" aria-labelledby="${suffix}-title ${suffix}-desc">
        <title id="${suffix}-title">2관절 로봇팔의 현재 자세와 끝점 속도</title>
        <desc id="${suffix}-desc"></desc>
        <defs><marker id="${suffix}-arrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 Z" fill="#d79525"/></marker></defs>
        <g class="jd-grid" stroke="#e5e5e5" stroke-width="1"></g>
        <path d="M55 260H545M300 35V485" stroke="#999" stroke-width="1.5" fill="none"/>
        <text x="548" y="251">x</text><text x="311" y="39">y</text><text x="306" y="283">0</text>
        <text x="385" y="283">1 m</text>
        <line class="jd-link1" stroke="#2a78d6" stroke-width="9" stroke-linecap="round"/>
        <line class="jd-link2" stroke="#1baf7a" stroke-width="9" stroke-linecap="round"/>
        <circle cx="300" cy="260" r="8" fill="#222"/>
        <circle class="jd-elbow" r="8" fill="#222"/>
        <circle class="jd-tip" r="7" fill="#1baf7a"/>
        <line class="jd-velocity" stroke="#d79525" stroke-width="4" marker-end="url(#${suffix}-arrow)"/>
      </svg>
      <label for="${suffix}-theta1">관절 1 각도 θ₁ <output for="${suffix}-theta1" class="jd-theta1-value">−15°</output></label>
      <input id="${suffix}-theta1" class="jd-theta1" type="range" min="-180" max="180" step="1" value="-15">
      <label for="${suffix}-theta2">관절 2 각도 θ₂ <output for="${suffix}-theta2" class="jd-theta2-value">−105°</output></label>
      <input id="${suffix}-theta2" class="jd-theta2" type="range" min="-180" max="180" step="1" value="-105">
      <p>어떤 관절을 회전시킬까요?</p>
      <div class="jd-modes" role="group" aria-label="회전시킬 관절 선택">
        <button type="button" data-mode="first" aria-pressed="false">1번만</button>
        <button type="button" data-mode="second" aria-pressed="false">2번만</button>
        <button type="button" data-mode="both" aria-pressed="true">둘 다</button>
      </div>
      <div class="jd-values"><div>관절속도 (rad/s)<strong class="jd-rates"></strong></div><div>끝점 속도 (m/s)<strong class="jd-v"></strong></div></div>
      <p class="jd-speed" aria-live="polite"></p>
      <p>화살표는 현재 순간속도이며, 그림에서 1 m/s를 0.4 m 길이로 표시합니다.</p>`;
    const svg = root.querySelector('svg');
    for (let i = -2; i <= 2; i++) {
      const coord = 300 + i * 100;
      const vertical = document.createElementNS(NS, 'line');
      Object.entries({ x1:coord, x2:coord, y1:45, y2:475 }).forEach(([k,v]) => vertical.setAttribute(k,v));
      svg.querySelector('.jd-grid').append(vertical);
      const horizontal = document.createElementNS(NS, 'line');
      Object.entries({ x1:70, x2:530, y1:260+i*100, y2:260+i*100 }).forEach(([k,v]) => horizontal.setAttribute(k,v));
      svg.querySelector('.jd-grid').append(horizontal);
    }
    const theta1 = root.querySelector('.jd-theta1'), theta2 = root.querySelector('.jd-theta2');
    let mode = 'both';
    const screen = p => [300 + p[0] * 100, 260 - p[1] * 100];
    const line = (selector, p, q) => {
      const el = root.querySelector(selector), a = screen(p), b = screen(q);
      Object.entries({ x1:a[0], y1:a[1], x2:b[0], y2:b[1] }).forEach(([k,v]) => el.setAttribute(k,v));
    };
    function update() {
      const rates = mode === 'first' ? [1,0] : mode === 'second' ? [0,1] : [1,1];
      const s = stateAt(Number(theta1.value), Number(theta2.value), rates);
      root.querySelector('.jd-theta1-value').textContent = theta1.value + '°';
      root.querySelector('.jd-theta2-value').textContent = theta2.value + '°';
      line('.jd-link1', [0,0], s.elbow);
      line('.jd-link2', s.elbow, s.tip);
      line('.jd-velocity', s.tip, s.tip.map((p,i) => p + s.velocity[i] * 0.4));
      root.querySelector('.jd-velocity').style.visibility = s.speed < 1e-8 ? 'hidden' : 'visible';
      for (const [name,p] of [['elbow',s.elbow],['tip',s.tip]]) {
        const [cx,cy] = screen(p), el = root.querySelector('.jd-' + name);
        el.setAttribute('cx',cx); el.setAttribute('cy',cy);
      }
      root.querySelector('.jd-rates').textContent = '(' + rates.join(', ') + ')';
      root.querySelector('.jd-v').textContent = '(' + s.velocity.map(number).join(', ') + ')';
      root.querySelector('.jd-speed').textContent = '현재 엔드이펙터 속력: ' + number(s.speed) + ' m/s';
      svg.querySelector('desc').textContent = '관절각 ' + theta1.value + '도, ' + theta2.value + '도. 끝점 속도 (' + s.velocity.map(number).join(', ') + ') m/s.';
      root.querySelectorAll('[data-mode]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.mode === mode)));
    }
    theta1.addEventListener('input', update); theta2.addEventListener('input', update);
    root.querySelectorAll('[data-mode]').forEach(button => button.addEventListener('click', () => { mode = button.dataset.mode; update(); }));
    update();
  });
  document.querySelectorAll('[data-jacobian-quiz]').forEach(root => {
    root.querySelectorAll('[data-answer]').forEach(button => button.addEventListener('click', () => {
      root.querySelector('.jacobian-feedback').textContent = button.dataset.answer === 'correct'
        ? '맞습니다. 관절 2만 1 rad/s로 움직이므로 두 번째 열 (0, 1)이 그대로 끝점 속도입니다.'
        : button.dataset.answer === 'hint'
          ? '각 열에 해당 관절속도를 곱해 더해 보세요. 첫 번째 열에는 0, 두 번째 열에는 1을 곱합니다.'
          : '관절 1의 속도는 0입니다. 첫 번째 열의 기여를 빼고 두 번째 열만 다시 확인해 보세요.';
    }));
  });
})();

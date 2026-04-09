/* ============================================================
   THE ELEPHANT — script.js
   ============================================================ */

/* ── 1. Scroll Reveal ─────────────────────────────────────── */
(function () {
  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach((el) => revealObserver.observe(el));
})();

/* ── 2. Number Counter Animation ─────────────────────────── */
(function () {
  const counters = document.querySelectorAll('[data-target]');
  const fired = new Set();

  function easeOut(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function animateCounter(el) {
    const target = parseFloat(el.dataset.target);
    const isBill = el.classList.contains('bill-num');
    const duration = 1200;
    const start = performance.now();

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.round(easeOut(progress) * target);
      el.textContent = isBill
        ? value.toLocaleString('en-US')
        : value;
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = isBill
        ? target.toLocaleString('en-US')
        : target;
    }

    requestAnimationFrame(tick);
  }

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !fired.has(entry.target)) {
          fired.add(entry.target);
          animateCounter(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  counters.forEach((el) => counterObserver.observe(el));
})();

/* ── 3. Terminal Typewriter ───────────────────────────────── */
(function () {
  const INTERVAL = 120; // ms per line

  function initTerminal(terminalEl) {
    const lines = terminalEl.querySelectorAll('.terminal-line');
    let played = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !played) {
            played = true;
            observer.disconnect();
            playTerminal(lines);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(terminalEl);
  }

  function playTerminal(lines) {
    lines.forEach((line, i) => {
      setTimeout(() => {
        line.classList.add('show');
      }, i * INTERVAL);
    });
  }

  document.querySelectorAll('.terminal-body').forEach(initTerminal);
})();

/* ── 4. Flip Cards ────────────────────────────────────────── */
(function () {
  document.querySelectorAll('.guardrail-card').forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });

    // Keyboard accessibility
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.classList.toggle('flipped');
      }
    });
  });
})();

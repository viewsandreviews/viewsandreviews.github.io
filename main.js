/* Views & Reviews — main.js */

// Mark active nav link
(function () {
  const links = document.querySelectorAll('.nav-links a');
  const path = location.pathname.replace(/\/$/, '') || '/index';
  links.forEach(a => {
    const href = a.getAttribute('href').replace(/\/$/, '') || '/index';
    if (path.endsWith(href.replace('.html', '')) || path === href) {
      a.classList.add('active');
    }
  });
})();

// Archive filter
(function () {
  const btns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.archive-item');
  if (!btns.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tag = btn.dataset.filter;
      items.forEach(item => {
        if (tag === 'all' || item.dataset.tags?.includes(tag)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
})();

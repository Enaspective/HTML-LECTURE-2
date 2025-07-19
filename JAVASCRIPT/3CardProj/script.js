const toggleBtn = document.getElementById('theme-toggle');
const rootEl = document.documentElement;

toggleBtn.addEventListener('click', () => {
  const current = rootEl.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  rootEl.setAttribute('data-theme', next);
});

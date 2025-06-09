// Theme toggle
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('theme-toggle-btn');
  const html = document.documentElement;
  const sun = `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" stroke-width="2"/></svg>`;
  const moon = `<svg viewBox="0 0 24 24" fill="none"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" stroke="currentColor" stroke-width="2"/></svg>`;
  const saved = localStorage.getItem('theme');
  if (saved) html.setAttribute('data-theme', saved);
  function updateIcon() {
    btn.innerHTML = html.getAttribute('data-theme') === 'dark' ? moon : sun;
  }
  btn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', current);
    localStorage.setItem('theme', current);
    updateIcon();
  });
  updateIcon();
});

// Modern toast
window.showToast = function(msg, icon = null) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = icon ? `<span>${icon}</span><span>${msg}</span>` : `<span>${msg}</span>`;
  toast.classList.add('show');
  clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => toast.classList.remove('show'), 2200);
};

// Smooth fade page transitions
document.addEventListener('DOMContentLoaded', function() {
  const main = document.querySelector('.page-transition');
  if (main) {
    setTimeout(() => main.classList.add('active'), 10);
    document.querySelectorAll('a').forEach(a => {
      if (a.target || a.hasAttribute('download') || a.href.startsWith('mailto:')) return;
      a.addEventListener('click', function(e) {
        if (a.href && a.origin === location.origin && a.pathname !== location.pathname) {
          e.preventDefault();
          main.classList.remove('active');
          setTimeout(() => { location.href = a.href; }, 350);
        }
      });
    });
  }
});

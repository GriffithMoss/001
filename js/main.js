// main.js
// ぶんぐ屋（Bunguya）共通JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Page fade-in effect
  document.body.classList.add('fadein');

  // Navigation transition
  document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      // Only fade if navigating to a local page
      if (this.hostname === location.hostname && !this.hasAttribute('target')) {
        e.preventDefault();
        document.body.classList.remove('fadein');
        document.body.classList.add('fadeout');
        setTimeout(() => {
          location.href = this.href;
        }, 350);
      }
    });
  });

  // ナビゲーションのアクティブ表示例
  const navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });

  // 1. Theme toggle button
  const btn = document.createElement('button');
  btn.className = 'theme-toggle';
  btn.title = 'Toggle dark mode';
  btn.innerHTML = document.body.classList.contains('dark') ? '🌙' : '☀️';
  btn.onclick = function() {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : '');
    btn.innerHTML = document.body.classList.contains('dark') ? '🌙' : '☀️';
  };
  document.body.appendChild(btn);
  if(localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    btn.innerHTML = '🌙';
  }

  // ここに今後のインタラクションや機能追加
  // 例: カート追加時のアニメーション、モーダル表示など
});

function getFavorites() {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
}

function toggleFavorite(id) {
  let favs = getFavorites();
  if (favs.includes(id)) {
    favs = favs.filter(f => f !== id);
  } else {
    favs.push(id);
  }
  localStorage.setItem('favorites', JSON.stringify(favs));
  updateFavoriteIcons();
}

function updateFavoriteIcons() {
  const favs = getFavorites();
  document.querySelectorAll('.fav-btn').forEach(btn => {
    const pid = Number(btn.dataset.id);
    btn.textContent = favs.includes(pid) ? '♥' : '♡';
  });
}

document.addEventListener('DOMContentLoaded', updateFavoriteIcons);

// 3. Sleek toast for cart add
function showToast(msg) {
  let toast = document.getElementById('toast-msg');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-msg';
    toast.style.position = 'fixed';
    toast.style.bottom = '2.5em';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.background = 'var(--primary)';
    toast.style.color = '#fff';
    toast.style.padding = '1em 2em';
    toast.style.borderRadius = '2em';
    toast.style.fontSize = '1.1em';
    toast.style.boxShadow = '0 4px 24px #1976d250';
    toast.style.opacity = '0';
    toast.style.zIndex = '9999';
    toast.style.transition = 'opacity 0.3s';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  setTimeout(() => { toast.style.opacity = '0'; }, 1400);
}

// Patch global addToCart for all pages
window.addToCart = function(id, name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')||'[]');
  const idx = cart.findIndex(i => i.id === id);
  if(idx >= 0) cart[idx].qty++;
  else cart.push({id, name, price, qty:1});
  localStorage.setItem('cart', JSON.stringify(cart));
  showToast('カートに追加しました');
};

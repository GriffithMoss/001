// main.js
// ぶんぐ屋（Bunguya）共通JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // ナビゲーションのアクティブ表示例
  const navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });

  // ここに今後のインタラクションや機能追加
  // 例: カート追加時のアニメーション、モーダル表示など
});

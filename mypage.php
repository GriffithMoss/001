<!DOCTYPE html>
<html lang="ja">
<?php include __DIR__.'/components/head.php'; ?>
<body>
<?php include __DIR__.'/components/nav.php'; ?>
<main>
  <h1>マイページ</h1>
  <div id="mypage-content"></div>
</main>
<script>
// 仮：お気に入り・注文履歴は未実装。カート内容を表示
let cart = JSON.parse(localStorage.getItem('cart')||'[]');
const content = document.getElementById('mypage-content');
if(cart.length === 0) {
  content.innerHTML = '<p>最近の購入商品はありません。</p>';
} else {
  content.innerHTML = '<h2>最近カートに入れた商品</h2>' + cart.map(item => `
    <div class="cart-item">
      <span>${item.name}</span>
      <span>￥${item.price.toLocaleString()} × ${item.qty}</span>
    </div>
  `).join('');
}

fetch('api/products.php')
  .then(res => res.json())
  .then(products => {
    const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
    const favProducts = products.filter(p => favs.includes(p.id));
    // Render favProducts as cards or a list
  });
</script>
<?php include __DIR__.'/components/foot.php'; ?>
</body>
</html>

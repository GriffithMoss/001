<!DOCTYPE html>
<html lang="ja">
<?php include __DIR__.'/components/head.php'; ?>
<body>
<?php include __DIR__.'/components/nav.php'; ?>
<main>
  <h1>カート</h1>
  <div class="cart-list" id="cart-list"></div>
  <div id="cart-total"></div>
  <button id="buy-btn">購入する</button>
</main>
<script>
function renderCart() {
  let cart = JSON.parse(localStorage.getItem('cart')||'[]');
  const list = document.getElementById('cart-list');
  if(cart.length === 0) {
    list.innerHTML = '<p style="text-align:center;color:#888;font-size:1.1em;">カートは空です。</p>';
    document.getElementById('cart-total').textContent = '';
    document.getElementById('buy-btn').style.display = 'none';
    return;
  }
  list.innerHTML = cart.map(item => `
    <div class="cart-item">
      <span>${item.name}</span>
      <span>￥${item.price.toLocaleString()} × ${item.qty}</span>
      <button onclick="removeCart(${item.id})">削除</button>
    </div>
  `).join('');
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  document.getElementById('cart-total').textContent = '合計: ￥' + total.toLocaleString();
  document.getElementById('buy-btn').style.display = 'block';
}
function removeCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart')||'[]');
  cart = cart.filter(i => i.id !== id);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}
document.getElementById('buy-btn').onclick = function() {
  alert('購入処理は未実装です');
};
renderCart();
</script>
<?php include __DIR__.'/components/foot.php'; ?>
</body>
</html>

<!DOCTYPE html>
<html lang="ja">
<?php include __DIR__.'/components/head.php'; ?>
<body>
<?php include __DIR__.'/components/nav.php'; ?>
<main>
  <h1>商品詳細</h1>
  <div id="product-detail"></div>
</main>
<script>
const params = new URLSearchParams(location.search);
const id = params.get('id');
if (!id) {
  document.getElementById('product-detail').innerHTML = '<p>商品が見つかりません。</p>';
} else {
  fetch('api/products.php')
    .then(res => res.json())
    .then(products => {
      const p = products.find(x => x.id == id);
      if (!p) {
        document.getElementById('product-detail').innerHTML = '<p>商品が見つかりません。</p>';
        return;
      }
      document.getElementById('product-detail').innerHTML = `
        <div class="product-card detail">
          <img src="${p.image}" alt="${p.name}" />
          <h2>${p.name}</h2>
          <p class="desc">${p.desc}</p>
          <div class="price">￥${p.price.toLocaleString()}</div>
          <button onclick="addToCart(${p.id}, '${p.name}', ${p.price})">カートに追加</button>
        </div>
      `;
    });
}
function addToCart(id, name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')||'[]');
  const idx = cart.findIndex(i => i.id === id);
  if(idx >= 0) cart[idx].qty++;
  else cart.push({id, name, price, qty:1});
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('カートに追加しました');
}
</script>
<?php include __DIR__.'/components/foot.php'; ?>
</body>
</html>

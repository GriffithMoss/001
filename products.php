<!DOCTYPE html>
<html lang="ja">
<?php include __DIR__.'/components/head.php'; ?>
<body>
<?php include __DIR__.'/components/nav.php'; ?>
<main>
  <h1>商品一覧</h1>
  <div id="product-list" class="product-list"></div>
</main>
<script>
fetch('api/products.php')
  .then(res => res.json())
  .then(products => {
    const list = document.getElementById('product-list');
    list.innerHTML = products.map(p => `
      <div class="product-card">
        <a href="product_detail.php?id=${p.id}"><img src="${p.image}" alt="${p.name}" /></a>
        <h2><a href="product_detail.php?id=${p.id}">${p.name}</a></h2>
        <p class="desc">${p.desc}</p>
        <div class="price">￥${p.price.toLocaleString()}</div>
        <button onclick="addToCart(${p.id}, '${p.name}', ${p.price})">カートに追加</button>
      </div>
    `).join('');
  });
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

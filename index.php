<!DOCTYPE html>
<html lang="ja">
<?php include __DIR__.'/components/head.php'; ?>
<body>
<?php include __DIR__.'/components/nav.php'; ?>
<main>
  <section class="hero">
    <h1>STATIONERY LINKへようこそ！</h1>
    <p>小規模ブランドや独自商品も見つかる、文具特化のオンラインショップ</p>
    <a href="products.php" class="cta-btn">商品一覧を見る</a>
  </section>
  <section class="featured">
    <h2>特集・人気商品</h2>
    <div id="featured-list" class="product-list"></div>
  </section>
</main>
<script>
fetch('api/products.php')
  .then(res => res.json())
  .then(products => {
    // 人気商品3件を仮で表示
    const featured = products.slice(0, 3);
    const list = document.getElementById('featured-list');
    list.innerHTML = featured.map(p => `
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

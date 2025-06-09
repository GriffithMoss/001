<!DOCTYPE html>
<html lang="ja">
<?php include __DIR__.'/components/head.php'; ?>
<body>
<?php include __DIR__.'/components/nav.php'; ?>
<main>
  <h1>商品一覧</h1>
  <div class="product-filter">
    <button class="filter-toggle" onclick="toggleFilter()">🗂️ カテゴリで絞り込む</button>
    <div id="filter-panel" class="filter-panel">
      <label><input type="checkbox" value="ペン"> ペン</label>
      <label><input type="checkbox" value="ノート"> ノート</label>
      <label><input type="checkbox" value="付箋"> 付箋</label>
      <label><input type="checkbox" value="消しゴム"> 消しゴム</label>
      <label><input type="checkbox" value="シャープペン"> シャープペン</label>
      <label><input type="checkbox" value="マーカー"> マーカー</label>
      <label><input type="checkbox" value="定規"> 定規</label>
      <label><input type="checkbox" value="ファイル"> ファイル</label>
      <label><input type="checkbox" value="テープ"> テープ</label>
      <label><input type="checkbox" value="その他"> その他</label>
    </div>
  </div>
  <div id="product-list" class="product-list"></div>
</main>
<script>
let allProducts = [];
let activeTags = [];
fetch('api/products.php')
  .then(res => res.json())
  .then(products => {
    allProducts = products;
    renderProducts();
  });
function renderProducts() {
  const list = document.getElementById('product-list');
  let filtered = allProducts;
  if (activeTags.length > 0) {
    filtered = allProducts.filter(p => p.tags && p.tags.some(tag => activeTags.includes(tag)));
  }
  list.innerHTML = filtered.map(p => `
    <div class="product-card">
      <a href="product_detail.php?id=${p.id}"><img src="${p.image}" alt="${p.name}" /></a>
      <h2><a href="product_detail.php?id=${p.id}">${p.name}</a></h2>
      <p class="desc">${p.desc}</p>
      <div class="price">￥${p.price.toLocaleString()}</div>
      <button onclick="addToCart(${p.id}, '${p.name}', ${p.price})">カートに追加</button>
    </div>
  `).join('');
}
function toggleFilter() {
  document.getElementById('filter-panel').classList.toggle('open');
}
document.querySelectorAll('.filter-panel input[type=checkbox]').forEach(cb => {
  cb.addEventListener('change', function() {
    activeTags = Array.from(document.querySelectorAll('.filter-panel input[type=checkbox]:checked')).map(i => i.value);
    renderProducts();
  });
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

<?php
// ...existing code...
?>
<div style="display:flex;">
  <aside class="collapsible-sidebar">
    <div class="collapsible-header" onclick="toggleCollapsible(this)">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none"><path d="M8 10l4 4 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      商品タイプ
    </div>
    <div id="collapsible-content" class="collapsible-content open">
      <ul>
        <li><a href="?type=pen">🖊️ ペン・万年筆</a></li>
        <li><a href="?type=notebook">📓 ノート・メモ帳</a></li>
        <li><a href="?type=eraser">🧽 消しゴム</a></li>
        <li><a href="?type=marker">🖍️ マーカー</a></li>
        <li><a href="?type=sticker">📑 シール・付箋</a></li>
        <li><a href="?type=case">🎒 ペンケース</a></li>
        <li><a href="?type=other">🗂️ その他</a></li>
      </ul>
    </div>
  </aside>
  <main class="page-transition" style="flex:1;">
    <!-- ...existing product list code... -->
  </main>
</div>
<script>
function toggleCollapsible(header) {
  const content = document.getElementById('collapsible-content');
  content.classList.toggle('open');
  header.classList.toggle('open');
}
</script>
<?php
header('Content-Type: application/json; charset=UTF-8');
$products = [
  [
    'id' => 1,
    'name' => 'カラーペンセット',
    'price' => 980,
    'image' => 'images/pen.jpg',
    'desc' => '10色入りのカラーペンセット。ノートやイラストに最適。',
    'tags' => ['ペン', 'カラー', '学習']
  ],
  [
    'id' => 2,
    'name' => 'A5ノート',
    'price' => 350,
    'image' => 'images/note.jpg',
    'desc' => 'シンプルなA5サイズのノート。全80ページ。',
    'tags' => ['ノート', '学習', '仕事']
  ],
  [
    'id' => 3,
    'name' => 'デザイン付箋',
    'price' => 420,
    'image' => 'images/fusen.jpg',
    'desc' => 'かわいいデザインの付箋セット。5柄入り。',
    'tags' => ['付箋', 'デザイン', 'ギフト']
  ]
];
echo json_encode($products, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

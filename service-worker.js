self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  console.log('Service Worker activated');
});

self.addEventListener('fetch', function(event) {
  // オフラインキャッシュ処理を追加することも可能
});
const CACHE_NAME = 'blocks-v25'; // ← 更新のたびにここの数字を上げる
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// skipWaiting メッセージ対応
self.addEventListener('message', e => {
  if (e.data?.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', e => {
  const url = e.request.url;

  // 以下はキャッシュせずそのままネットワークへ
  // - 外部ドメイン全般
  // - Firebase Auth関連（リダイレクトログインに必須）
  if (
    !url.startsWith(self.location.origin) ||
    url.includes('/__/auth/') ||
    url.includes('firebaseapp.com') ||
    url.includes('googleapis.com')
  ) return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      const fetchPromise = fetch(e.request).then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }
        return res;
      });
      return cached || fetchPromise;
    })
  );
});

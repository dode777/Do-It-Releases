// 두잇 서비스 워커 — 한 번 열었던 화면을 오프라인에서도 연다.
//
// 저장본 이름에 앱 버전을 붙인다(등록할 때 ?v=버전 — src/platform/pwa.ts). 새 버전의 워커가 켜지면 이전 버전의 저장본을 모두 지운다.
//
// 무엇을 먼저 쓰나
//  - 파일 이름에 해시가 붙은 자산(assets/…-해시.js·css·글꼴): 내용이 바뀌면 이름도 바뀌므로 저장본 먼저
//  - 그 밖의 모든 것(화면 index.html, manifest, 아이콘, 시작 화면 그림, 공유 그림): 네트워크 먼저, 안 되면 저장본
//    0.1.4 까지는 manifest·아이콘도 저장본 먼저였고 저장본 이름도 바뀌지 않아, 이름을 "두잇" 으로 바꿔도
//    홈 화면에 추가할 때 처음 받은 manifest("do-it")·옛 아이콘이 계속 쓰였다.
const VERSION = new URL(self.location.href).searchParams.get('v') || '0';
const CACHE = `do-it-${VERSION}`;
const SHELL = ['./', './index.html', './manifest.webmanifest'];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL.map((u) => new Request(u, { cache: 'reload' })))));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

/** 파일 이름에 해시가 붙은 빌드 자산인가 (vite: assets/이름-해시.확장자) */
const hashed = (url) => /\/assets\/[^/]+-[A-Za-z0-9_-]{8,}\.[a-z0-9]+$/.test(url.pathname);

/** 네트워크 먼저인 것은 브라우저 HTTP 캐시(GitHub Pages 는 10분)도 건너뛰고 서버에 바뀌었는지 묻는다 — 안 바뀌었으면 304 라 가볍다 */
const fresh = (req) => fetch(req, { cache: 'no-cache' });

const put = (key, res) => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(key, copy)); } return res; };

self.addEventListener('fetch', (e) => {
  const req = e.request;
  const url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return;
  if (req.mode === 'navigate') {
    e.respondWith(fresh(req).then((res) => put('./index.html', res)).catch(() => caches.match('./index.html')));
    return;
  }
  if (hashed(url)) {
    e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((res) => put(req, res))));
    return;
  }
  e.respondWith(fresh(req).then((res) => put(req, res)).catch(() => caches.match(req)));
});

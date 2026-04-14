// ===== CACHE =====
const CACHE_NAME = "mammocare-v1";

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        "./",
        "./index.html"
      ]);
    })
  );
});

// ===== OFFLINE =====
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});

// ===== PUSH =====
self.addEventListener("push", function(event) {
  const data = event.data.json();

  self.registration.showNotification(data.title, {
    body: data.body,
    icon: "icon-192.png"
  });
});

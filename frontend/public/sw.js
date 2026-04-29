const CACHE_NAME = "bitakiba-v1";
const APP_SHELL = ["/", "/receive", "/savings", "/transactions", "/settings/language"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(APP_SHELL);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return (
        cached ||
        fetch(event.request).catch(() => {
          return caches.match("/");
        })
      );
    })
  );
});

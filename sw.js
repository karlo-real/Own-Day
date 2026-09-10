// Minimal service worker — exists only so the browser considers Own Day
// installable to a home screen. It does not cache or intercept anything,
// so the app always loads fresh from the network exactly as before.
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", () => {
  // Intentionally no-op: let the browser handle every request normally.
});

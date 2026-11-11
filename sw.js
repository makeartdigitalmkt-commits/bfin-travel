/* BFin Travel: guarda o app para abrir rápido; dados sempre vêm do Google. */
var CACHE = "bfin-v2";
var BASICO = ["./", "./index.html", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png"];
self.addEventListener("install", function (e) { e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(BASICO); })); self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(caches.keys().then(function (ks) { return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); })); })); self.clients.claim(); });
self.addEventListener("fetch", function (e) {
  var u = new URL(e.request.url);
  if (e.request.method !== "GET" || u.origin !== location.origin) return; // Google e CDNs: direto na rede
  e.respondWith(fetch(e.request, { cache: "no-cache" }).then(function (r) { var c = r.clone(); caches.open(CACHE).then(function (k) { k.put(e.request, c); }); return r; })
    .catch(function () { return caches.match(e.request).then(function (r) { return r || caches.match("./index.html"); }); }));
});

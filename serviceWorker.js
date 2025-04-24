const CACHE_NAME = "recifeeling-v1"
const ASSETS = [
  "/",
  "/index.html",
  "/dashboard.html",
  "/profile.html",
  "/boaviagem.html",
  "/bomjesus.html",
  "/brennand.html",
  "/marcozero.html",
  "/parquejaqueira.html",
  "/style.css",
  "/dashboard.css",
  "/pages.css",
  "/perfil.css",
  "/script.js",
  "/perfil.js",
  "/manifest.json",
  "/images/icon.recifeeling.jpeg",
]

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache")
      return cache.addAll(ASSETS)
    }),
  )
})

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName)
          }
        }),
      )
    }),
  )
})

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response
      }

      const fetchRequest = event.request.clone()

      return fetch(fetchRequest).then((response) => {
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response
        }

        const responseToCache = response.clone()

        caches.open(CACHE_NAME).then((cache) => {
          if (event.request.url.indexOf("http") === 0) {
            cache.put(event.request, responseToCache)
          }
        })

        return response
      })
    }),
  )
})

self.addEventListener("push", (event) => {
  const title = "Recifeeling"
  const options = {
    body: event.data.text() || "Novidades sobre pontos turísticos do Recife!",
    icon: "/images/icon-192x192.png",
    badge: "/images/badge-96x96.png",
  }

  event.waitUntil(self.registration.showNotification(title, options))
})

self.addEventListener("notificationclick", (event) => {
  event.notification.close()

  event.waitUntil(clients.openWindow("https://recifeeling.com/dashboard.html"))
})

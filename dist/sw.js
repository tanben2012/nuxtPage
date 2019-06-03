importScripts('./_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "./_nuxt/045ede254a79bc75f765.js",
    "revision": "a5f869600ea803d0ca4cbc34feae63a7"
  },
  {
    "url": "./_nuxt/c2a587d8f1ecbc179fdf.js",
    "revision": "fe27297bd26b6eb060b37e801b075911"
  },
  {
    "url": "./_nuxt/de61345db9512cc62a79.js",
    "revision": "8b1b52b7c93c432613eccf1d9225587e"
  },
  {
    "url": "./_nuxt/f6a7bc2453f389f303a0.js",
    "revision": "09fd5910cb21993ff38349db252042ce"
  }
], {
  "cacheId": "nuxtPages",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('./_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('./.*'), workbox.strategies.networkFirst({}), 'GET')

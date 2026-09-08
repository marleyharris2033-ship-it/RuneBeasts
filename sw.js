const CACHE='runebeasts-v21';
const CORE=["./","index.html","styles.css","app.js","assets-beasts.js","assets-tiles.js","assets-objects.js","assets-trainers.js","title_screen.png","rune_beasts_logo.png","app_icon.png","boy_down_0.png","girl_down_0.png","manifest.json"];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(CACHE).then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match(e.request)))});

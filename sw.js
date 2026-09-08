const CACHE='runebeasts-v05';
self.addEventListener('install',e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll([
    './','index.html','styles.css?v=5','app.js?v=5','manifest.json','icon.svg','route_map.png',
    'cindercub.png','ripplet.png','spriglet.png','ashbit.png',
    'bubbfin.png','mossbug.png','sparkit.png','breezlet.png',
    'pebblit.png','voltpup.png','vineape.png','craggoat.png',
    'down_0.png','down_1.png','up_0.png','up_1.png',
    'left_0.png','left_1.png','right_0.png','right_1.png'
  ])));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  e.respondWith(fetch(e.request).then(r=>{
    const copy=r.clone();
    caches.open(CACHE).then(c=>c.put(e.request,copy));
    return r;
  }).catch(()=>caches.match(e.request)));
});

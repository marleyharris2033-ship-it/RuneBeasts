const CACHE='runebeasts-v03';
self.addEventListener('install',e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll([
    './','index.html','styles.css?v=3','app.js?v=3','manifest.json','icon.svg',
    'route_map.png','sprite_sheet.png',
    'sprites/cindercub.png','sprites/ripplet.png','sprites/spriglet.png','sprites/ashbit.png',
    'sprites/bubbfin.png','sprites/mossbug.png','sprites/sparkit.png','sprites/breezlet.png',
    'sprites/pebblit.png','sprites/voltpup.png','sprites/vineape.png','sprites/craggoat.png'
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

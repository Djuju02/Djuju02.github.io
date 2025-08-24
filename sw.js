const VERSION='v2.1.0';
const CACHE='js-portfolio-'+VERSION;
const ASSETS=['./','./index.html','./styles.css','./script.js','./i18n/fr.json','./i18n/en.json'];
self.addEventListener('install',event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
});
self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())
  );
});
self.addEventListener('fetch',event=>{
  const req=event.request;
  event.respondWith(
    fetch(req).then(res=>{
      const copy=res.clone();
      caches.open(CACHE).then(c=>c.put(req,copy));
      return res;
    }).catch(()=>caches.match(req))
  );
});
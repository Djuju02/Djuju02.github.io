const CACHE='js-portfolio-v2';
const ASSETS=['/','/index.html','/styles.css','/script.js','/i18n/fr.json','/i18n/en.json'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
});
self.addEventListener('fetch',e=>{
  const {request}=e;
  e.respondWith(
    fetch(request).then(res=>{
      const copy=res.clone();
      caches.open(CACHE).then(c=>c.put(request,copy));
      return res;
    }).catch(()=>caches.match(request))
  );
});

/* Scope-relative app shell: no CDN dependencies, no cross-origin caching. */
const VERSION='school-algorithms-pwa-practice-v1-20261103';
const CACHE=`${VERSION}-shell`;
const SHELL=['./','./index.html','./tailwind-local.css','./app-ui.css','./ui-icons.js','./pwa.js','./school-learning-hub.css','./school-learning-hub.js','./school-practice.js','./school-practice.css','./manifest.webmanifest','./icons/icon.svg','./icons/icon-192.png','./icons/icon-512.png','./icons/maskable-512.png','./icons/apple-touch-icon.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL))));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 for(const key of await caches.keys())if(key.startsWith('school-algorithms-pwa-') && key!==CACHE)await caches.delete(key);
 await self.clients.claim();
})()));
self.addEventListener('message',event=>{if(event.data?.type==='SKIP_WAITING')self.skipWaiting();});
self.addEventListener('fetch',event=>{
 const req=event.request;
 if(req.method!=='GET')return;
 const url=new URL(req.url);
 if(url.origin!==self.location.origin || !url.pathname.startsWith(new URL(self.registration.scope).pathname))return;
 if(req.mode==='navigate'){
   event.respondWith((async()=>{
     try{
       const fresh=await fetch(req);
       if(fresh.ok){const cache=await caches.open(CACHE);cache.put('./index.html',fresh.clone());}
       return fresh;
     }catch(_){return await caches.match('./index.html') || Response.error();}
   })());return;
 }
 event.respondWith((async()=>{
   const cached=await caches.match(req);
   if(cached)return cached;
   try{const fresh=await fetch(req);if(fresh.ok){const cache=await caches.open(CACHE);cache.put(req,fresh.clone());}return fresh;}
   catch(_){return Response.error();}
 })());
});

/* Safe PWA registration, user-controlled updates, and platform install guidance. */
(()=>{
 let deferredInstall=null;
 let waitingWorker=null;
 let activateRequested=false;
 const installed=()=> window.matchMedia('(display-mode: standalone)').matches || navigator.standalone===true;
 const iphone=()=>/iP(ad|hone|od)/i.test(navigator.userAgent);
 function notify(msg,action,callback){
   let bar=document.getElementById('pwa-hint');
   if(!bar){bar=document.createElement('div');bar.id='pwa-hint';bar.setAttribute('role','status');bar.setAttribute('aria-live','polite');
     const t=document.createElement('span');t.id='pwa-hint-text';bar.append(t);
     const actionBtn=document.createElement('button');actionBtn.id='pwa-update-btn';bar.append(actionBtn);
     const close=document.createElement('button');close.id='pwa-hint-close';close.textContent='×';close.setAttribute('aria-label','إغلاق التنبيه');bar.append(close);
     close.onclick=()=>bar.classList.remove('is-visible');document.body.append(bar);
   }
   bar.querySelector('#pwa-hint-text').textContent=msg;
   const b=bar.querySelector('#pwa-update-btn');b.textContent=action||'';b.style.display=action?'':'none';b.onclick=()=>{bar.classList.remove('is-visible');callback?.();};
   bar.classList.add('is-visible');
 }
 function showInstall(){
   if(installed()){notify('التطبيق مثبت على هذا الجهاز.');return;}
   if(deferredInstall){deferredInstall.prompt();deferredInstall.userChoice.finally(()=>deferredInstall=null);return;}
   if(iphone()){notify('للتثبيت على الآيفون: افتح الموقع في Safari، ثم اضغط مشاركة واختر «إضافة إلى الشاشة الرئيسية».');return;}
   notify('للتثبيت افتح قائمة المتصفح واختر «تثبيت التطبيق» أو «إضافة إلى الشاشة الرئيسية».');
 }
 window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredInstall=e;});
 window.addEventListener('appinstalled',()=>{deferredInstall=null;document.getElementById('pwa-hint')?.classList.remove('is-visible');});
 document.addEventListener('DOMContentLoaded',()=>{
   document.getElementById('pwa-install-btn')?.addEventListener('click',showInstall);
   if(!('serviceWorker' in navigator) || !window.isSecureContext) return;
   navigator.serviceWorker.addEventListener('controllerchange',()=>{if(activateRequested)location.reload();});
   navigator.serviceWorker.register('./sw.js',{scope:'./'}).then(reg=>{
     const ready=(worker)=>{waitingWorker=worker;
       notify('يتوفر تحديث جديد لمصمم المخططات. احفظ عملك قبل تثبيته.','تحديث الآن',()=>{
         activateRequested=true;waitingWorker?.postMessage({type:'SKIP_WAITING'});
       });
     };
     if(reg.waiting && navigator.serviceWorker.controller)ready(reg.waiting);
     reg.addEventListener('updatefound',()=>{
       const worker=reg.installing;if(!worker)return;
       worker.addEventListener('statechange',()=>{
         if(worker.state==='installed' && navigator.serviceWorker.controller)ready(worker);
       });
     });
     document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')reg.update().catch(()=>{});});
   }).catch(err=>console.warn('PWA registration failed:',err));
 });
})();

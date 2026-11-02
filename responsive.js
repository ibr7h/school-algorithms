
/* Touch and responsive controls, without changing the flowchart data model. */
(() => {
  function ready() {
    const sidebar = document.getElementById('sidebar-panel');
    const canvas = document.getElementById('canvas-container');
    if (!sidebar || !canvas) return;
    const head = document.createElement('header');
    head.id='mobile-header';
    head.innerHTML='<button type="button" id="mobile-menu-button" aria-label="فتح أدوات الرسم" aria-expanded="false" aria-controls="sidebar-panel">☰</button><span id="mobile-header-title">مصمم المخططات الانسيابية</span>';
    const scrim = document.createElement('div');
    scrim.id='mobile-scrim';
    const close = document.createElement('button');
    close.id='mobile-close-button'; close.type='button'; close.textContent='×';
    close.setAttribute('aria-label','إغلاق الأدوات'); close.style.display='none';
    document.body.insertBefore(head,document.body.firstChild);
    document.body.appendChild(scrim); sidebar.appendChild(close);
    const menu = document.getElementById('mobile-menu-button');
    function toggle(on) {
      sidebar.classList.toggle('is-open',on);scrim.classList.toggle('is-open',on);
      menu.setAttribute('aria-expanded',String(on));
    }
    menu.addEventListener('click',()=>toggle(true));
    close.addEventListener('click',()=>toggle(false));
    scrim.addEventListener('click',()=>toggle(false));
    document.addEventListener('keydown',e=>{if(e.key==='Escape')toggle(false);});

    // Keep normal desktop mouse handlers. Translate only canvas touch gestures.
    let active=null, pinch=null;
    function send(target,type,touch,buttons) {
      target.dispatchEvent(new MouseEvent(type,{bubbles:true,cancelable:true,
        clientX:touch.clientX,clientY:touch.clientY,buttons,button:0}));
    }
    function canvasTool(t) { return t?.closest?.('#canvas-toolbar'); }
    canvas.addEventListener('touchstart',e=>{
      if(canvasTool(e.target)) return;
      if(e.touches.length===2) {
        if(active){ send(window,'mouseup',active,0); active=null; }
        pinch=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,
                         e.touches[0].clientY-e.touches[1].clientY);
        e.preventDefault(); return;
      }
      if(e.touches.length!==1) return;
      if(pinch) return;
      const t=e.changedTouches[0]; active={identifier:t.identifier,clientX:t.clientX,clientY:t.clientY};
      send(e.target,'mousedown',t,1); e.preventDefault();
    },{passive:false});
    window.addEventListener('touchmove',e=>{
      if(pinch && e.touches.length===2) {
        const d=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,
                           e.touches[0].clientY-e.touches[1].clientY);
        const mx=(e.touches[0].clientX+e.touches[1].clientX)/2;
        const my=(e.touches[0].clientY+e.touches[1].clientY)/2;
        if(d>0 && typeof zoomCanvas==='function') zoomCanvas(Math.log(d/pinch)*0.7,mx,my);
        pinch=d; e.preventDefault(); return;
      }
      if(!active) return;
      const t=Array.from(e.touches).find(t=>t.identifier===active.identifier);
      if(!t) return;
      active={identifier:t.identifier,clientX:t.clientX,clientY:t.clientY};
      send(window,'mousemove',t,1); e.preventDefault();
    },{passive:false});
    function end(e) {
      if(pinch && e.touches.length<2) pinch=null;
      if(!active) return;
      if(e.touches.length && Array.from(e.touches).some(t=>t.identifier===active.identifier)) return;
      send(window,'mouseup',active,0);active=null;
    }
    window.addEventListener('touchend',end,{passive:true});
    window.addEventListener('touchcancel',end,{passive:true});
    // Frame layout changes when the software keyboard opens on mobile.
    window.visualViewport?.addEventListener('resize',()=>{
      if(window.innerWidth<=900) document.documentElement.style.setProperty('--visual-height',window.visualViewport.height+'px');
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',ready);
  else ready();
})();

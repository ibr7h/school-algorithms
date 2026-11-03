/* Canvas tools v1: freehand lasso, unified active-tool feedback, mobile controls. */
(() => {
  'use strict';
  const NS='http://www.w3.org/2000/svg';
  const canvas=document.getElementById('canvas-container');
  const toolbar=document.getElementById('canvas-toolbar');
  if(!canvas || !toolbar) return;

  const selected={nodes:new Set(),texts:new Set(),drawings:new Set()};
  let gesture=null;
  let activePointer=null;
  let currentWorkspace=null;
  const icons={
    select:'<path d="m5 3 13 9-7 1-2 7z"/>',
    lasso:'<path d="M12 4c-6 0-9 4-9 8s4 7 9 7 9-2 9-6-3-6-8-6-7 2-7 5 3 4 7 4c2 0 3-.5 4-1"/><path d="M15 18c-.5 1 0 3 2 3s3-1 3-2-2-2-5-1z"/>',
    hand:'<path d="M8 13V6a2 2 0 0 1 4 0v5-7a2 2 0 0 1 4 0v7-5a2 2 0 0 1 4 0v9c0 4-3 6-7 6H9c-3 0-5-2-6-5l-1-3a2 2 0 0 1 4-1l2 3"/>',
    connect:'<circle cx="5" cy="6" r="3"/><circle cx="19" cy="18" r="3"/><path d="M8 7c10 1 2 10 8 10"/>',
    pen:'<path d="m14 5 5 5m-9 10-6 1 1-6L16 4a3 3 0 0 1 4 4z"/>',
    text:'<path d="M4 6V4h16v2M12 4v16m-5 0h10"/>',
    all:'<rect x="4" y="4" width="5" height="5" rx=".5"/><rect x="15" y="4" width="5" height="5" rx=".5"/><rect x="4" y="15" width="5" height="5" rx=".5"/><rect x="15" y="15" width="5" height="5" rx=".5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>',
    delete:'<path d="M3 6h18m-2 0-.8 14H6L5 6m3 0V4h8v2M10 10v7m4-7v7"/>',
    undo:'<path d="M9 14 4 9l5-5M4 9h10a6 6 0 1 1 0 12h-2"/>',
    redo:'<path d="m15 14 5-5-5-5m5 5H10a6 6 0 1 0 0 12h2"/>'
  };
  function svg(name){return `<svg viewBox="0 0 24 24" width="21" height="21" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round">${icons[name]}</svg>`;}
  const strip=document.createElement('div');
  strip.id='canvas-mode-strip';strip.setAttribute('role','group');strip.setAttribute('aria-label','أدوات الرسم والتحديد');
  const defs=[
    ['select','تحديد شكل','select',()=>setMode('select')],
    ['lasso','تحديد لاسو حر','lasso',()=>setMode('lasso')],
    ['pan','تحريك اللوحة','hand',()=>setMode('pan')],
    ['connect','ربط شكلين بسهم','connect',()=>setMode('connect')],
    ['pen','الرسم بالقلم','pen',()=>setMode('pen')],
    ['text','إضافة نص','text',()=>addFreeText()],
    ['all','تحديد الكل / إلغاء التحديد','all',()=>{clearSelection(false);selectAllElements();refresh();}],
    ['delete','حذف المحدد','delete',()=>deleteLassoOrCurrent()],
    ['undo','تراجع','undo',()=>{clearSelection(false);undoAction();refresh();}],
    ['redo','إعادة','redo',()=>{clearSelection(false);redoAction();refresh();}]
  ];
  for(const [mode,title,icon,handler] of defs){
    const btn=document.createElement('button');btn.type='button';btn.id='canvas-tool-'+mode;
    btn.className='canvas-tool-btn';btn.dataset.canvasMode=mode;
    btn.setAttribute('aria-label',title);btn.title=title;btn.setAttribute('aria-pressed','false');
    btn.innerHTML=svg(icon);btn.addEventListener('click',handler);strip.append(btn);
  }
  // The earlier toolbar duplicated pan/pen/text/select-all; replace those copies
  // with one canonical tool cluster while keeping zoom and fit-view on the canvas.
  toolbar.querySelectorAll('button[onclick*="selectAllElements"],button[onclick*="setMode(\'pan\')"],button[onclick*="setMode(\'pen\')"],button[onclick*="addFreeText"]').forEach(b=>b.remove());
  toolbar.prepend(strip);
  // Keep zoom/fit controls in the same visible grid as the drawing tools.
  // No duplicate controls in the upper action bar on phones.
  [...toolbar.querySelectorAll(':scope > button')].forEach(button=>{
    button.classList.add('canvas-tool-btn','canvas-view-btn');
    strip.appendChild(button);
  });
  toolbar.querySelectorAll(':scope > div:not(#canvas-mode-strip)').forEach(div=>{
    if(div.classList.contains('h-4'))div.remove();
  });
  toolbar.setAttribute('role','toolbar'); toolbar.setAttribute('aria-label','شريط أدوات المخطط');
  const stateLabel=document.createElement('span');stateLabel.id='canvas-current-tool';stateLabel.setAttribute('role','status');stateLabel.setAttribute('aria-live','polite');
  stateLabel.textContent='أداة التحديد';toolbar.appendChild(stateLabel);

  const overlay=document.createElementNS(NS,'svg');overlay.id='lasso-overlay';overlay.setAttribute('aria-hidden','true');
  const fill=document.createElementNS(NS,'path');fill.id='lasso-outline';overlay.appendChild(fill);canvas.appendChild(overlay);
  const modeText={select:'تحديد',lasso:'لاسو',pan:'تحريك اللوحة',connect:'ربط الأشكال',pen:'القلم'};
  const count=()=>selected.nodes.size+selected.texts.size+selected.drawings.size;
  function clearSelection(repaint=true){
    selected.nodes.clear();selected.texts.clear();selected.drawings.clear();
    if(repaint){paintSelection();refresh();}
  }
  function refresh(){
    // Project undo can replace every workspace object; never reuse old identities.
    if(currentWorkspace!==null && currentWorkspace!==activeWorkspaceId){clearSelection(false);}
    currentWorkspace=activeWorkspaceId;
    const mode=currentMode;
    strip.querySelectorAll('button').forEach(b=>{
      const m=b.dataset.canvasMode;
      const active=(m===mode && ['select','lasso','pan','connect','pen'].includes(m)) || (m==='all' && isAllSelected);
      b.classList.toggle('is-active',active);b.setAttribute('aria-pressed',active?'true':'false');
    });
    for(const [id,tool] of [['btn-mode-select','select'],['btn-mode-pan','pan'],['btn-mode-pen','pen'],['btn-connect','connect']]){
      const b=document.getElementById(id);if(!b)continue;
      b.classList.toggle('canvas-tool-active',mode===tool);
      b.setAttribute('aria-pressed',mode===tool?'true':'false');
    }
    stateLabel.textContent=(modeText[mode]||'تحديد') + (count()?` · ${count()} محدد`:isAllSelected?' · كل الرسم محدد':'');
  }
  function paintSelection(){
    canvas.querySelectorAll('#nodes-layer .node-base[data-id]').forEach(el=>{
      el.classList.toggle('lasso-selected',selected.nodes.has(el.dataset.id));
    });
    canvas.querySelectorAll('#nodes-layer .free-text-item').forEach((el,i)=>{
      el.classList.toggle('lasso-selected',selected.texts.has(state.texts[i]?.id));
    });
    canvas.querySelectorAll('#drawings-group > path').forEach((el,i)=>{
      el.classList.toggle('lasso-selected',selected.drawings.has(i));
    });
  }
  const observer=new MutationObserver(()=>{paintSelection();});
  const nodesLayer=document.getElementById('nodes-layer'), drawingsGroup=document.getElementById('drawings-group');
  if(nodesLayer)observer.observe(nodesLayer,{childList:true});
  if(drawingsGroup)observer.observe(drawingsGroup,{childList:true});

  const originalSetMode=window.setMode;
  if(typeof originalSetMode==='function'){
    window.setMode=function(next,...args){
      if(next!=='lasso' && next!=='select')clearSelection(false);
      if(next==='lasso')clearSelection(false);
      const result=originalSetMode.apply(this,[next,...args]);
      refresh();paintSelection();return result;
    };
  }
  const originalSelectAll=window.selectAllElements;
  if(typeof originalSelectAll==='function'){
    window.selectAllElements=function(...args){clearSelection(false);const result=originalSelectAll.apply(this,args);refresh();return result;};
  }
  const originalSelectNode=window.selectNode;
  if(typeof originalSelectNode==='function'){
    window.selectNode=function(...args){clearSelection(false);return originalSelectNode.apply(this,args);};
  }
  const originalSelectText=window.selectText;
  if(typeof originalSelectText==='function'){
    window.selectText=function(...args){clearSelection(false);return originalSelectText.apply(this,args);};
  }
  const originalSelectEdge=window.selectEdge;
  if(typeof originalSelectEdge==='function'){
    window.selectEdge=function(...args){clearSelection(false);return originalSelectEdge.apply(this,args);};
  }
  // A lasso starts with a freehand path in world coordinates; the overlay alone
  // is temporary and never enters the saved diagram or SVG export.
  function worldAt(x,y){return clientToWorld(x,y);}
  function overlayPoint(p){const r=canvas.getBoundingClientRect();return {x:p.x*state.zoom+state.panX,y:p.y*state.zoom+state.panY};}
  function paintLasso(){
    const pts=gesture?.points||[];
    if(gesture?.kind!=='lasso'||!pts.length){fill.setAttribute('d','');return;}
    const d=pts.map((p,i)=>{const q=overlayPoint(p);return `${i?'L':'M'}${q.x} ${q.y}`;}).join(' ');
    fill.setAttribute('d',d+(pts.length>2?' Z':''));
  }
  function pointInPolygon(pt,poly){
    let inside=false;
    for(let i=0,j=poly.length-1;i<poly.length;j=i++){
      const a=poly[i],b=poly[j];
      if(((a.y>pt.y)!==(b.y>pt.y)) && pt.x < (b.x-a.x)*(pt.y-a.y)/(b.y-a.y)+a.x)inside=!inside;
    }
    return inside;
  }
  function withinRect(p,r){return p.x>=r.x&&p.x<=r.x+r.w&&p.y>=r.y&&p.y<=r.y+r.h;}
  function segmentsIntersect(a,b,c,d){
    const cross=(p,q,r)=>(q.x-p.x)*(r.y-p.y)-(q.y-p.y)*(r.x-p.x);
    const c1=cross(a,b,c),c2=cross(a,b,d),c3=cross(c,d,a),c4=cross(c,d,b);
    return c1*c2<0&&c3*c4<0;
  }
  function polygonMeetsBox(poly,r){
    const corners=[{x:r.x,y:r.y},{x:r.x+r.w,y:r.y},{x:r.x+r.w,y:r.y+r.h},{x:r.x,y:r.y+r.h}];
    const center={x:r.x+r.w/2,y:r.y+r.h/2};
    if(pointInPolygon(center,poly)||corners.some(p=>pointInPolygon(p,poly))||poly.some(p=>withinRect(p,r)))return true;
    for(let i=0;i<poly.length;i++)for(let j=0;j<4;j++)if(segmentsIntersect(poly[i],poly[(i+1)%poly.length],corners[j],corners[(j+1)%4]))return true;
    return false;
  }
  function finishLasso(){
    const poly=gesture.points;
    clearSelection(false);
    if(poly.length>=3){
      for(const n of state.nodes){
        if(polygonMeetsBox(poly,{x:n.x,y:n.y,w:n.w,h:n.h}))selected.nodes.add(n.id);
      }
      for(const t of state.texts){
        const font=t.fontSize||18;
        const w=Math.max(32,String(t.text||'').length*font*.65);
        if(polygonMeetsBox(poly,{x:t.x,y:t.y,w,h:font*1.5}))selected.texts.add(t.id);
      }
      state.drawings.forEach((d,i)=>{
        const points=d.points||[];
        const inside=points.some(p=>pointInPolygon(p,poly));
        let crosses=false;
        for(let k=1;!inside && !crosses && k<points.length;k++){
          for(let j=0;j<poly.length;j++){
            if(segmentsIntersect(points[k-1],points[k],poly[j],poly[(j+1)%poly.length])){
              crosses=true;break;
            }
          }
        }
        if(inside||crosses)selected.drawings.add(i);
      });
    }
    fill.setAttribute('d','');
    // Revert to normal select so the chosen elements can immediately be dragged.
    if(typeof window.setMode==='function')window.setMode('select');
    selectedNodeId=selectedEdgeId=selectedTextId=null;
    isAllSelected=false;
    updateSelectAllBadge();updatePropertiesPanel();
    paintSelection();refresh();
  }
  function moveGroup(dx,dy){
    if(!dx&&!dy)return;
    for(const n of state.nodes)if(selected.nodes.has(n.id)){n.x+=dx;n.y+=dy;}
    for(const t of state.texts)if(selected.texts.has(t.id)){t.x+=dx;t.y+=dy;}
    state.drawings.forEach((d,i)=>{if(selected.drawings.has(i))d.points?.forEach(p=>{p.x+=dx;p.y+=dy;});});
    render();
  }
  function activeTarget(target){
    const node=target?.closest?.('.node-base[data-id]');
    const txt=target?.closest?.('.free-text-item');
    if(node&&selected.nodes.has(node.dataset.id))return true;
    if(txt){const els=[...document.querySelectorAll('#nodes-layer .free-text-item')];
      return selected.texts.has(state.texts[els.indexOf(txt)]?.id);
    }
    return false;
  }
  function isControl(target){return !!target?.closest?.('#canvas-toolbar,#simulation-panel,button,a,input,select,textarea,[role="button"],[contenteditable]');}
  function isBackground(target){return !target?.closest?.('.node-base,.free-text-item,.note-card,.edge-path');}
  function begin(x,y,id,target){
    if(isControl(target))return false;
    if(currentMode==='lasso'){
      gesture={kind:'lasso',points:[worldAt(x,y)]};
      activePointer=id;paintLasso();return true;
    }
    if(currentMode==='select'&&count()>0&&activeTarget(target)){
      gesture={kind:'group',x,y,moved:false};activePointer=id;return true;
    }
    if(currentMode==='select'&&count()>0&&isBackground(target))clearSelection();
    return false;
  }
  function progress(x,y){
    if(!gesture)return;
    if(gesture.kind==='lasso'){
      const p=worldAt(x,y);const last=gesture.points[gesture.points.length-1];
      if(Math.hypot(p.x-last.x,p.y-last.y)>1.5){gesture.points.push(p);paintLasso();}
    }else{
      const dx=(x-gesture.x)/state.zoom,dy=(y-gesture.y)/state.zoom;
      gesture.x=x;gesture.y=y;
      if(Math.abs(dx)+Math.abs(dy)>0){gesture.moved=true;moveGroup(dx,dy);}
    }
  }
  function finish(){
    if(!gesture)return;
    if(gesture.kind==='lasso')finishLasso();
    else if(gesture.moved)commitProjectChange();
    gesture=null;activePointer=null;refresh();
  }
  // Attach before the legacy touch-to-mouse bridge (installed at window load).
  canvas.addEventListener('pointerdown',e=>{
    if(activePointer!==null){
      // A second finger must not enter the legacy touch bridge mid-lasso.
      e.preventDefault();e.stopImmediatePropagation();return;
    }
    if(e.button!==0 || isControl(e.target))return;
    if(!begin(e.clientX,e.clientY,e.pointerId,e.target))return;
    e.preventDefault();e.stopImmediatePropagation();
    try{canvas.setPointerCapture(e.pointerId);}catch(_){}
  },true);
  canvas.addEventListener('pointermove',e=>{
    if(e.pointerId!==activePointer||!gesture)return;
    progress(e.clientX,e.clientY);e.preventDefault();e.stopImmediatePropagation();
  },true);
  function pointerEnd(e){
    if(e.pointerId!==activePointer||!gesture)return;
    progress(e.clientX,e.clientY);finish();
    if(canvas.hasPointerCapture(e.pointerId))try{canvas.releasePointerCapture(e.pointerId);}catch(_){}
    e.preventDefault();e.stopImmediatePropagation();
  }
  canvas.addEventListener('pointerup',pointerEnd,true);
  canvas.addEventListener('pointercancel',pointerEnd,true);
  window.addEventListener('blur',()=>{if(gesture){gesture=null;activePointer=null;fill.setAttribute('d','');}});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&gesture){gesture=null;activePointer=null;fill.setAttribute('d','');}});

  function deleteLassoOrCurrent(){
    if(count()){
      const gone=new Set(selected.nodes);
      for(let i=state.nodes.length-1;i>=0;i--)if(gone.has(state.nodes[i].id))state.nodes.splice(i,1);
      for(let i=state.edges.length-1;i>=0;i--)if(gone.has(state.edges[i].from)||gone.has(state.edges[i].to))state.edges.splice(i,1);
      for(let i=state.texts.length-1;i>=0;i--)if(selected.texts.has(state.texts[i].id))state.texts.splice(i,1);
      for(let i=state.drawings.length-1;i>=0;i--)if(selected.drawings.has(i))state.drawings.splice(i,1);
      clearSelection(false);saveStateToActiveWorkspace();commitProjectChange();updatePropertiesPanel();render();refresh();
    }else{deleteSelected();refresh();}
  }
  for(const operation of ['switchWorkspace','addNewWorkspace','applyProjectSnapshot']){
    const original=window[operation];
    if(typeof original==='function')window[operation]=function(...args){
      clearSelection(false);
      const result=original.apply(this,args);
      refresh();return result;
    };
  }
  const prevDelete=window.deleteSelected;
  if(typeof prevDelete==='function')window.deleteSelected=function(...a){if(count()){deleteLassoOrCurrent();return;}return prevDelete.apply(this,a);};
  document.addEventListener('keydown',e=>{
    if((e.key==='Delete'||e.key==='Backspace') && !e.repeat && count() && !e.target.closest('input,textarea,select,[contenteditable]')){
      e.preventDefault();e.stopImmediatePropagation();deleteLassoOrCurrent();
    }
  },true);
  document.addEventListener('click',e=>{
    const a=e.target.closest?.('#canvas-mode-strip button,#btn-mode-select,#btn-mode-pan,#btn-mode-pen,#btn-connect');
    if(a)queueMicrotask(refresh);
  });
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&count()){clearSelection();}});
  window.SchoolCanvasTools={clearSelection,selectionCount:count,mode:()=>currentMode};
  // Register after initialization so the main app's default mode is reflected.
  window.addEventListener('load',()=>{refresh();paintSelection();});
  refresh();
})();
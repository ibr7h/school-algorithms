/* Inline icons, no dependency on external icon fonts or script CDNs. */
(() => {
  const NS = 'http://www.w3.org/2000/svg';
  const paths = {
    menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
    expand:'<path d="M8 3H4v4m12-4h4v4M4 17v4h4m12-4v4h-4"/><path d="m4 4 5 5m11-5-5 5M4 20l5-5m11 5-5-5"/>',
    plus:'<path d="M12 5v14M5 12h14"/>',
    edit:'<path d="m16 4 4 4M5 19l4-.8L20 7a2 2 0 0 0-3-3L5.8 15.2 5 19z"/>',
    trash:'<path d="M3 6h18m-2 0-.8 14H6L5 6m3 0V4h8v2M10 10v7m4-7v7"/>',
    undo:'<path d="M9 14 4 9l5-5M4 9h10a6 6 0 1 1 0 12h-2"/>',
    redo:'<path d="m15 14 5-5-5-5m5 5H10a6 6 0 1 0 0 12h2"/>',
    save:'<path d="M5 3h12l4 4v14H3V3zm2 0v7h10V3M7 21v-8h10v8"/>',
    import:'<path d="M12 21V9m-4 4 4-4 4 4M4 7V3h16v4"/>',
    play:'<path d="m8 5 12 7-12 7z"/>',
    pause:'<path d="M8 5v14M16 5v14"/>',
    forward:'<path d="M5 5v14l10-7zm13 0v14"/>',
    refresh:'<path d="M20 11a8 8 0 0 0-14-5L4 8m0-5v5h5M4 13a8 8 0 0 0 14 5l2-2m0 5v-5h-5"/>',
    scan:'<path d="M8 3H4v4m12-4h4v4M4 17v4h4m12-4v4h-4M8 12l3 3 5-6"/>',
    zoomIn:'<circle cx="10" cy="10" r="7"/><path d="m15 15 6 6M10 7v6m-3-3h6"/>',
    zoomOut:'<circle cx="10" cy="10" r="7"/><path d="m15 15 6 6M7 10h6"/>',
    target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    hand:'<path d="M8 13V6a2 2 0 0 1 4 0v5-7a2 2 0 0 1 4 0v7-5a2 2 0 0 1 4 0v9c0 4-3 6-7 6H9c-3 0-5-2-6-5l-1-3a2 2 0 0 1 4-1l2 3"/>',
    pen:'<path d="m14 5 5 5m-9 10-6 1 1-6L16 4a3 3 0 0 1 4 4z"/>',
    text:'<path d="M4 6V4h16v2M12 4v16m-5 0h10"/>',
    select:'<path d="m5 3 13 9-7 1-2 7z"/>',
    link:'<path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-2 2M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l2-2"/>',
    message:'<path d="M4 4h16v13H9l-5 4z"/>',
    code:'<path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-3 18"/>',
    exportCode:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 8h9M7 12h6m-6 4h10m-2-8 3 3-3 3"/>',
    image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8" cy="8" r="1"/><path d="m3 17 5-5 4 4 3-3 6 6"/>',
    printer:'<path d="M6 9V3h12v6M6 18H3V9h18v9h-3M6 14h12v7H6z"/>',
    close:'<path d="M5 5 19 19M19 5 5 19"/>',
    copy:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V4H4v12h4"/>',
    download:'<path d="M12 3v12m-4-4 4 4 4-4M4 17v4h16v-4"/>',
    grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    check:'<path d="m4 12 5 5L20 6"/>',
    install:'<rect x="5" y="3" width="14" height="18" rx="3"/><path d="M12 6v9m-3-3 3 3 3-3M10 18h4"/>',
    warning:'<path d="m12 2 10 19H2zM12 8v5m0 4h.01"/>'
  };
  const targets = [
    ['#mobile-menu-button','menu',true],
    ['#mobile-app-header button[onclick*="fitAllWorkspaceContent"]','expand',true],
    ['#mobile-sidebar-close','close',false],
    ['#workspaces-bar button[onclick*="addNewWorkspace"]','plus',true],
    ['#workspaces-bar button[onclick*="startRenameWorkspace"]','edit',true],
    ['#workspaces-bar button[onclick*="deleteCurrentWorkspace"]','trash',true],
    ['#btn-check-flow','scan',true],
    ['#btn-undo','undo',true],
    ['#project-controls button[onclick*="openSimulation"]','play',true],
    ['#btn-redo','redo',true],
    ['#project-controls button[onclick*="downloadProject"]','save',true],
    ['#project-controls button[onclick*="project-file-input"]','import',true],
    ['#canvas-toolbar button[onclick*="zoomCanvas(0.15)"]','zoomIn',true],
    ['#canvas-toolbar button[onclick*="zoomCanvas(-0.15)"]','zoomOut',true],
    ['#canvas-toolbar button[onclick*="resetZoomAndPan"]','target',true],
    ['#zoom-fit-all-btn','expand',true],
    ['#canvas-toolbar button[onclick*="selectAllElements"]','grid',true],
    ['#canvas-toolbar button[onclick*="setMode(\'pan\')"]','hand',true],
    ['#canvas-toolbar button[onclick*="setMode(\'pen\')"]','pen',true],
    ['#canvas-toolbar button[onclick*="addFreeText"]','text',true],
    ['#btn-mode-select','select',false],
    ['#btn-mode-pan','hand',false],
    ['#btn-mode-pen','pen',false],
    ['#btn-connect','link',false],
    ['#sidebar-panel button[onclick*="selectAllElements"]','grid',false],
    ['#sidebar-panel button[onclick*="quickAddNoteToSelected"]','message',false],
    ['#sidebar-panel button[onclick*="deleteSelected"]','trash',false],
    ['#sidebar-panel button[onclick*="openPythonImportModal"]','code',false],
    ['#sidebar-panel button[onclick*="exportSVG"]','image',false],
    ['#sidebar-panel button[onclick*="printFlowchart"]','printer',false],
    ['#sidebar-panel button[onclick*="showPythonModal"]','exportCode',false],
    ['#sim-next','forward',false],
    ['#sim-run','play',false],
    ['#simulator-modal button[onclick*="simulationPause"]','pause',false],
    ['#simulator-modal button[onclick*="startSimulation"]','refresh',false],
    ['#python-import-modal button[onclick*="convertPythonToFlowchartFromModal"]','code',false]
  ];
  function icon(name) {
    const span=document.createElement('span');span.className='ui-icon';span.setAttribute('aria-hidden','true');
    span.innerHTML=`<svg xmlns="${NS}" viewBox="0 0 24 24" focusable="false">${paths[name]||paths.grid}</svg>`;
    return span;
  }
  function enhance(button,name,compact=false){
    if(!button || button.dataset.uiIcon) return;
    const label=(button.getAttribute('aria-label')||button.textContent||'').replace(/\s+/g,' ').trim();
    if(!button.getAttribute('aria-label') && label) button.setAttribute('aria-label',label);
    if(!button.title && label) button.title=label;
    const text=document.createElement('span');text.className='ui-action-label';
    while(button.firstChild) text.appendChild(button.firstChild);
    button.appendChild(icon(name));button.appendChild(text);
    button.classList.add('ui-action');if(compact)button.classList.add('icon-only-mobile');
    button.dataset.uiIcon='1';
  }
  window.schoolIcon=(name)=>icon(name);
  document.addEventListener('DOMContentLoaded',()=>{
    for(const [sel,name,compact] of targets){
      try{document.querySelectorAll(sel).forEach(el=>enhance(el,name,compact));}catch(e){console.warn('icon target',sel,e);}
    }
    const head=document.getElementById('mobile-app-header');
    if(head&&!document.getElementById('pwa-install-btn')){
      const b=document.createElement('button');b.type='button';b.id='pwa-install-btn';b.setAttribute('aria-label','تثبيت التطبيق');b.title='تثبيت التطبيق على الجهاز';b.appendChild(icon('install'));
      const t=document.createElement('span');t.className='ui-action-label';t.textContent='تثبيت';b.appendChild(t);head.appendChild(b);
    }
  });
})();

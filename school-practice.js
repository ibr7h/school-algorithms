/* Guided flowchart practice. Structural evaluation only: never executes arbitrary Python. */
(() => {
  'use strict';
  const TASKS = [
    {lesson:'l01', title:'ارسم تسلسل برنامج يعرض رسالة', prompt:'ابدأ بخطوة البداية، ثم شكل إخراج يعرض رسالة، ثم النهاية.', page:14, needs:{io:1}, hint:'أضف متوازي أضلاع لعرض الرسالة ثم أوصله من البداية إلى النهاية.'},
    {lesson:'l02', title:'مساحة المستطيل بالمخطط', prompt:'استقبل الطول والعرض، احسب المساحة بالضرب، ثم اعرض الناتج.', page:16, needs:{io:3,process:1,operator:'*',sequence:['io','io','process','io']}, hint:'تحتاج شكلَي إدخال، ثم مستطيل عملية يحوي عملية ضرب (*), ثم شكل إخراج.'},
    {lesson:'l03', title:'أمر الطباعة print', prompt:'صمّم مخططًا يبدأ بعرض رسالة قصيرة باستخدام شكل إخراج، ثم ينتهي.', page:20, needs:{io:1}, hint:'الطباعة عملية إخراج، وليست مستطيل معالجة.'},
    {lesson:'l04', title:'متغيرات وجمع', prompt:'أسند قيمًا إلى متغيرين، ثم اجمعهما، ثم اعرض النتيجة.', page:22, needs:{process:3,io:1,operator:'+',sequence:['process','process','process','io']}, hint:'استخدم ثلاثة مستطيلات للمتغيرين والجمع، ومتوازي أضلاع للمخرجات.'},
    {lesson:'l05', title:'قراءة قيمة ثم طباعتها', prompt:'اقرأ قيمة في المتغير x باستخدام input، ثم اعرضها باستخدام print.', page:27, needs:{io:2,ioText:['input','print'],sequence:['io','io']}, hint:'أضف شكلَي إدخال/إخراج؛ اكتب input في الأول وprint في الثاني.'},
    {lesson:'l06', title:'جمع قيمتين مدخلتين', prompt:'أدخل x وy، واحسب x+y بعد تحويل القيم، ثم اطبع المجموع.', page:28, needs:{io:3,process:1,operator:'+',sequence:['io','io','process','io']}, hint:'ضع الإدخالين ثم عملية جمع، ثم إخراج الناتج. لا تنسَ ترتيب الأسهم.'},
    {lesson:'l07', title:'تعبير حسابي مع الأس', prompt:'أسند قيمًا إلى a وb، احسب التعبير الذي يحتوي على ** و+، ثم اعرض النتيجة.', page:32, needs:{process:3,io:1,operator:'**',sequence:['process','process','process','io']}, hint:'رمز الأس في بايثون هو **. استخدم مستطيلًا للحساب ثم أوصله بالإخراج.'},
    {lesson:'l08', title:'قرار بشرط مركّب', prompt:'اكتب شرطًا يحوي and، ثم فرّع إلى مسارين «نعم» و«لا»، يعرض كل منهما نتيجة.', page:44, needs:{decision:1,branches:1,io:2,decisionText:'and'}, hint:'استخدم مُعيّنًا فيه and، وسهمين موسومين بنعم ولا، وينتهي كلا المسارين إلى النهاية.'},
    {lesson:'l09', title:'قرار if / else', prompt:'اقرأ عددًا، ثم اختبر هل هو موجب، مع عرض رسالة لكل من نعم ولا.', page:54, needs:{decision:1,branches:1,io:3,decisionText:'>'}, hint:'ضع شكلاً للقرار > 0، وارسم منه سهمين مستقلين مع «نعم» و«لا».'},
    {lesson:'l10', title:'الشروط المتداخلة', prompt:'أنشئ قرارين مترابطين: قرارًا أولًا، وقرارًا آخر داخل أحد مساريه.', page:58, needs:{decision:2,branches:2,io:2,nestedDecisions:true}, hint:'ضع مُعيّنًا ثانيًا في أحد فرعي القرار الأول، ثم أوصل جميع المسارات بالنهاية.'},
    {lesson:'l11', title:'حلقة for متكررة', prompt:'ارسم قرارًا يفحص استمرار التكرار، وجسم الحلقة، وسهم رجوع، ومسار خروج يصل للنهاية.', page:65, needs:{decision:1,branches:1,process:1,loops:1}, hint:'اجعل سهمًا يرجع من جسم الحلقة إلى المعيّن، وسهم «لا» يخرج باتجاه النهاية.'},
    {lesson:'l12', title:'حلقة while', prompt:'ارسم اختبار while، وجسم الحلقة، وسهم العودة للاختبار، ومسار خروج.', page:69, needs:{decision:1,branches:1,process:1,loops:1}, hint:'حلقة while لا تكتمل دون سهم رجوع من الجسم إلى القرار ومسار للخروج.'},
    {lesson:'l13', title:'حلقتان متداخلتان', prompt:'مثّل حلقتين متداخلتين مع مسار عودة مستقل لكل شرط وخروج إلى النهاية.', page:72, needs:{decision:2,branches:2,process:1,loops:2,nestedLoops:true}, hint:'لا يكفي مُعيّن واحد؛ يجب أن يكون كل شرط تكرار ضمن مسار يعود إليه.'}
  ];
  const byId = new Map(TASKS.map(t=>[t.lesson,t]));
  const SAVE_KEY='school-algorithms-practice-v1';
  const ui={coach:null,last:null,activeLesson:null,activeWorkspace:null,lastReport:null,restoring:false,started:false};
  let results={};
  try { const old=JSON.parse(localStorage.getItem(SAVE_KEY)||'{}'); if(old&&typeof old==='object') results=old; } catch(_){}
  const safe=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const save=()=>{try{localStorage.setItem(SAVE_KEY,JSON.stringify(results));}catch(_){}};
  const getBridge=()=>window.SchoolPracticeBridge;
  const norm=s=>String(s??'').replace(/\s+/g,' ').trim().toLowerCase();
  const pattern={yes:/^(نعم|صحيح|صح|yes|true|t|y)$/i,no:/^(لا|خطأ|خاطئ|no|false|f|n)$/i,
    start:/\b(start|begin)\b|بداي/i,end:/\b(end|finish|stop)\b|نهاي/i};

  function checkDiagram(task, snapshot){
    const nodes=Array.isArray(snapshot?.nodes)?snapshot.nodes:[];
    const validIds=new Set(nodes.map(n=>n.id));
    const edges=(snapshot?.edges||[]).filter(e=>validIds.has(e.from)&&validIds.has(e.to));
    const byType=t=>nodes.filter(n=>n.type===t);
    const starts=byType('start');
    const first=starts.find(n=>pattern.start.test(n.text||''));
    const last=starts.find(n=>pattern.end.test(n.text||''));
    const outgoing=new Map(nodes.map(n=>[n.id,[]]));
    const incoming=new Map(nodes.map(n=>[n.id,[]]));
    edges.forEach(e=>{outgoing.get(e.from).push(e);incoming.get(e.to).push(e);});
    const walk=(root,adj)=>{
      const seen=new Set(),stack=root?[root.id]:[];
      while(stack.length){const id=stack.pop();if(seen.has(id))continue;seen.add(id);for(const e of adj.get(id)||[]){const next=adj===outgoing?e.to:e.from;if(!seen.has(next))stack.push(next);}}
      return seen;
    };
    const reachable=walk(first,outgoing),toEnd=walk(last,incoming);
    const relevant=nodes.filter(n=>reachable.has(n.id));
    const decisionNodes=byType('decision');
    const branchGood=decisionNodes.filter(n=>{
      const outgoingLabels=(outgoing.get(n.id)||[]).map(e=>norm(e.label));
      return outgoingLabels.some(t=>pattern.yes.test(t)) && outgoingLabels.some(t=>pattern.no.test(t));
    });
    // Each decision in a directed cycle is a loop head; supports nested loop tests.
    const loopHeads=decisionNodes.filter(d=>
      (outgoing.get(d.id)||[]).some(edge=>walk({id:edge.to},outgoing).has(d.id)));
    // Structural order: a learner must place the steps along a real directed path.
    // Includes only node types; never evaluates student-entered Python expressions.
    function hasSequence(sequence) {
      if (!first || !last) return false;
      const queue=[{id:first.id,match:0}],seen=new Set();
      while(queue.length){
        const {id,match}=queue.shift();
        const node=nodes.find(n=>n.id===id);
        if(!node)continue;
        const after=match<sequence.length&&node.type===sequence[match]?match+1:match;
        if(id===last.id&&after===sequence.length)return true;
        const key=id+':'+after;if(seen.has(key))continue;seen.add(key);
        for(const edge of outgoing.get(id)||[])queue.push({id:edge.to,match:after});
      }
      return false;
    }
    const checks=[];
    const add=(id,label,ok,tip,essential=false)=>checks.push({id,label,ok:!!ok,tip,essential});
    add('start','يوجد شكل بداية باسم «البداية»',!!first,'أضف شكل بداية أو غيّر اسمه إلى «البداية».',true);
    add('end','يوجد شكل نهاية باسم «النهاية»',!!last,'أضف شكل نهاية أو غيّر اسمه إلى «النهاية».',true);
    add('linked','يوجد مسار من البداية إلى النهاية',!!first&&!!last&&reachable.has(last.id),'اربط الأشكال بأسهم تتجه من البداية إلى النهاية.',true);
    add('all-connected','جميع الأشكال تقع على مسار يصل إلى النهاية',!!first&&!!last&&nodes.length>0&&relevant.length===nodes.length&&nodes.every(n=>toEnd.has(n.id)),
      'راجع الأشكال المنفصلة أو المسارات التي تتوقف قبل النهاية.',true);
    add('edges','لا توجد أسهم مكررة أو تشير إلى الشكل نفسه',edges.length===(snapshot?.edges||[]).length&&edges.every(e=>e.from!==e.to)&&new Set(edges.map(e=>e.from+'>'+e.to+':'+norm(e.label))).size===edges.length,
      'احذف السهم المكرر أو السهم الذي يعود إلى نفس الشكل مباشرة.');
    const n=task.needs;
    for(const [type,word] of [['io','إدخال/إخراج'],['process','عمليات'],['decision','اتخاذ قرار']]){
      if(n[type])add(type,`عدد أشكال ${word}: ${byType(type).length} من ${n[type]} على الأقل`,byType(type).length>=n[type],`أضف ${Math.max(0,n[type]-byType(type).length)} من نوع ${word}.`);
    }
    if(n.sequence)add('sequence','تسلسل الأشكال مطابق لخطوات النشاط',hasSequence(n.sequence),'رتّب الأسهم لتنتقل الخطوات من المدخلات، إلى المعالجة، ثم إخراج النتيجة.');
    if(n.operator){const rx=n.operator==='*'?/(?<!\*)\*(?!\*)/:n.operator==='**'?/\*\*/:/\+/;
      add('operator',`تظهر العملية ${n.operator} داخل شكل المعالجة`,byType('process').some(x=>rx.test(x.text||'')),`اكتب العملية ${n.operator} في أحد مستطيلات المعالجة.`);}
    if(n.ioText){for(const token of n.ioText){const rx=token==='input'?/(\binput\s*\(|إدخال|أدخل|اقرأ|استقبل|استقبال|احصل|اطلب|قراءة)/i:/(\bprint\s*\(|طباعة|اطبع|اعرض|أعرض|عرض|إظهار)/i;
      add('term-'+token,`توجد خطوة ${token} في شكل إدخال/إخراج`,byType('io').some(x=>rx.test(x.text||'')),`اكتب ${token} أو وصفًا عربيًا مناسبًا داخل شكل إدخال/إخراج.`);}}
    if(n.decisionText){const token=n.decisionText;
      add('condition',`يحتوي القرار على ${token}`,decisionNodes.some(x=>String(x.text||'').includes(token)),`اكتب شرطًا يتضمن ${token} داخل المُعيّن.`);}
    if(n.branches)add('branches',`قرار بمسارَي نعم ولا (${branchGood.length} من ${n.branches})`,branchGood.length>=n.branches,
      'من كل مُعيّن، أنشئ سهمين باسم «نعم» و«لا» إلى المسارين المناسبين.');
    if(n.loops)add('loops',`مسارات عودة إلى اختبار التكرار (${loopHeads.length} من ${n.loops})`,loopHeads.length>=n.loops,
      'أضف سهم رجوع من جسم الحلقة إلى شكل القرار، وأبقِ مسارًا للخروج باتجاه النهاية.');
    if(n.nestedDecisions){
      let nested=false;
      for(const a of decisionNodes){
        const targets=outgoing.get(a.id)||[];
        if(targets.length<2)continue;
        for(const b of decisionNodes){
          if(a===b)continue;
          const included=targets.map(e=>walk({id:e.to},outgoing).has(b.id));
          if(included.filter(Boolean).length===1){nested=true;break;}
        }
        if(nested)break;
      }
      add('nested','القرار الثاني داخل فرع من القرار الأول',nested,'اجعل القرار الثاني في أحد مسارات الأول، لا بعد التقاء الفرعين.');
    }
    if(n.nestedLoops){
      let nested=false;
      for(const a of loopHeads)for(const b of loopHeads){
        if(a.id!==b.id && walk(a,outgoing).has(b.id)&&walk(b,outgoing).has(a.id))nested=true;
      }
      add('nested-loops','مسار حلقة داخل جسم الحلقة الأخرى',nested,'اجعل الحلقة الداخلية تعود إلى شرطها أولًا ثم إلى شرط الحلقة الخارجية.');
    }
    const passed=checks.filter(x=>x.ok).length;
    return {lesson:task.lesson,checks,passed,total:checks.length,percent:Math.round(passed/checks.length*100),
      success:checks.every(x=>x.ok),count:nodes.length,issues:checks.filter(c=>!c.ok),workspace:snapshot?.workspaceId||null};
  }

  function renderLesson(lesson,host){
    if(!host || host.querySelector('#school-practice-card'))return;
    const task=byId.get(lesson.id);
    const card=document.createElement('section');card.id='school-practice-card';card.className='school-practice-card';
    card.setAttribute('aria-label','نشاط تطبيقي');
    const result=results[lesson.id];
    if(task){
      card.innerHTML=`<div class="school-practice-heading"><span class="school-practice-icon" aria-hidden="true">⌘</span><div><h5>تطبيق عملي على المخطط</h5><small>النشاط مستند إلى موضوع الكتاب — ص ${task.page}</small></div>${result?.completed?'<b class="school-practice-pass">✓ مُجتاز</b>':''}</div>
      <p class="school-practice-prompt">${safe(task.prompt)}</p>
      <p class="school-practice-disclaimer">التقييم يتحقق من الأشكال والأسهم والمسارات والعمليات المطلوبة، ولا ينفّذ بايثون أو يضمن صحة كل القيم.</p>
      <div class="school-practice-actions"><button type="button" class="school-practice-btn primary" data-practice="start" data-lesson="${task.lesson}">↗ ابدأ في منطقة مستقلة</button>
      <button type="button" class="school-practice-btn" data-practice="grade" data-lesson="${task.lesson}">✓ قيّم المخطط الحالي</button>
      <button type="button" class="school-practice-btn" data-practice="hint" data-lesson="${task.lesson}">؟ تلميح</button></div>
      <div class="school-practice-inline" role="status" aria-live="polite">${result?`أفضل نتيجة سابقة: ${result.best}%${result.completed?' — أُنجز النشاط':''}`:'ابدأ نشاطًا جديدًا، أو افحص مخططًا أنشأته مسبقًا.'}</div>`;
    }else{
      const example=typeof LEARNING_DATA!=='undefined'?LEARNING_DATA.examples.find(e=>e.id===lesson.example):null;
      card.innerHTML=`<div class="school-practice-heading"><span class="school-practice-icon" aria-hidden="true">&lt;/&gt;</span><div><h5>تطبيق في محرر بايثون</h5><small>الدرس من الوحدة ${safe(lesson.unit)}</small></div></div>
       <p class="school-practice-prompt">جرّب الكود المرتبط بالدرس في محرر IDLE، وعدّل قيمة أو تعليمة ثم قارن النتيجة المتوقعة. هذا النشاط المتقدم لا يحصل على درجة آلية للمخطط حاليًا.</p>
       <div class="school-practice-actions"><button type="button" class="school-practice-btn primary" data-practice="example" data-example="${safe(example?.id||'')}">⌨ فتح المثال في المحرر</button></div>`;
    }
    host.querySelector('.school-hub-detail-body')?.appendChild(card);
  }

  function ensureCoach(){
    if(ui.coach?.isConnected)return ui.coach;
    const canvas=document.getElementById('canvas-container');if(!canvas)return null;
    const panel=document.createElement('section');panel.id='school-practice-coach';panel.hidden=true;
    panel.setAttribute('aria-label','متابعة النشاط العملي');
    panel.innerHTML=`<div class="school-practice-coach-head"><div class="school-practice-coach-title"><strong id="school-practice-coach-title">تطبيق عملي</strong><small id="school-practice-coach-subtitle">قيّم مخططك بعد إكماله</small></div>
      <button type="button" data-practice="minimize" aria-label="تصغير مساعد النشاط">−</button></div>
      <div id="school-practice-coach-body"><div class="school-practice-actions">
        <button type="button" class="school-practice-btn primary" data-practice="grade-active">✓ افحص حلي</button>
        <button type="button" class="school-practice-btn" data-practice="hint-active">؟ تلميح</button>
        <button type="button" class="school-practice-btn" data-practice="back">▤ الدرس</button></div>
        <div id="school-practice-coach-report" class="school-practice-report" role="status" aria-live="polite">أضف الأشكال والأسهم ثم اختر «افحص حلي».</div></div>`;
    canvas.appendChild(panel);ui.coach=panel;return panel;
  }
  function startActivity(id){
    const task=byId.get(id),bridge=getBridge();if(!task||!bridge?.beginActivity){message('تعذر فتح مساحة التدريب. أعد تحميل التطبيق بعد حفظ مشروعك.');return;}
    const ws=bridge.beginActivity(task.title);if(!ws){message('تعذر إنشاء مساحة التدريب.');return;}
    ui.activeLesson=id;ui.activeWorkspace=ws;ui.lastReport=null;
    window.SchoolLearningHub?.close();
    const coach=ensureCoach();if(coach){coach.hidden=false;coach.classList.remove('minimized');
      coach.querySelector('#school-practice-coach-title').textContent=task.title;
      coach.querySelector('#school-practice-coach-subtitle').textContent=`مرجع الكتاب: ص ${task.page} — مساحة مستقلة`;
      coach.querySelector('#school-practice-coach-report').textContent='أنشأنا البداية والنهاية دون ربطهما. أضف بقية الأشكال والأسهم ثم افحص حلّك.';
    }
  }
  function message(s){
    const el=document.querySelector('#school-practice-card .school-practice-inline');if(el)el.textContent=s;
    const report=document.getElementById('school-practice-coach-report');if(report)report.textContent=s;
  }
  function applyResult(result){
    const task=byId.get(result.lesson);ui.activeLesson=result.lesson;ui.lastReport=result;
    const prev=results[task.lesson]||{};
    results[task.lesson]={best:Math.max(prev.best||0,result.percent),completed:!!prev.completed||result.success,attempts:(prev.attempts||0)+1};save();
    const html=`<div class="school-practice-score ${result.success?'success':''}"><strong>${result.percent}%</strong><span>${result.success?'أحسنت، استوفى الرسم معايير النشاط البنيوية.':'تحقق '+result.passed+' من '+result.total+' معايير؛ أكمل المتبقي.'}</span></div>
      <ul class="school-practice-checks">${result.checks.map(c=>`<li class="${c.ok?'ok':'needs-work'}"><span aria-hidden="true">${c.ok?'✓':'!'}</span><span>${safe(c.label)}${c.ok?'':`<small>${safe(c.tip)}</small>`}</span></li>`).join('')}</ul>`;
    const coach=ensureCoach();if(coach){coach.hidden=false;coach.classList.remove('minimized');
      coach.querySelector('#school-practice-coach-title').textContent=task.title;
      coach.querySelector('#school-practice-coach-subtitle').textContent='تقييم بنيوي للمخطط الحالي';
      coach.querySelector('#school-practice-coach-report').innerHTML=html;
    }
    const inline=document.querySelector('#school-practice-card .school-practice-inline');if(inline)inline.textContent=`التقييم: ${result.percent}% — ${result.success?'مكتمل':'يحتاج تعديلًا'}.`;
    return result;
  }
  function gradeLesson(id){
    const bridge=getBridge(),task=byId.get(id);
    if(!bridge?.snapshot||!task){message('تعذر فحص المخطط في هذه النسخة.');return null;}
    const report=checkDiagram(task,bridge.snapshot());
    applyResult(report);
    window.SchoolLearningHub?.close();
    return report;
  }
  function hint(id){
    const task=byId.get(id);if(!task)return;
    const snap=getBridge()?.snapshot?.();
    const report=snap?checkDiagram(task,snap):null;
    const next=report?.issues?.[0];
    message(next?next.tip:task.hint);
  }
  function returnLesson(){
    if(!ui.activeLesson)return;
    if(ui.coach)ui.coach.hidden=true;
    window.SchoolLearningHub?.open('learn');
    const l=ui.activeLesson;
    const item=document.querySelector('#school-hub-overlay [data-select="'+l+'"]');
    item?.click();
  }
  function handle(e){
    const target=e.target.closest?.('[data-practice]');if(!target)return;
    const type=target.dataset.practice;
    e.preventDefault();e.stopPropagation();
    if(type==='start')startActivity(target.dataset.lesson);
    else if(type==='grade')gradeLesson(target.dataset.lesson);
    else if(type==='grade-active') {
      const activeId=getBridge()?.snapshot?.().workspaceId;
      if(ui.activeWorkspace && activeId!==ui.activeWorkspace)message('انتقلت إلى منطقة عمل أخرى. عد إلى مساحة التدريب لفحص هذا النشاط.');
      else gradeLesson(ui.activeLesson);
    }
    else if(type==='hint'||type==='hint-active')hint(type==='hint'?target.dataset.lesson:ui.activeLesson);
    else if(type==='back')returnLesson();
    else if(type==='minimize')ui.coach?.classList.toggle('minimized');
    else if(type==='example'){
      const ex=typeof LEARNING_DATA!=='undefined'?LEARNING_DATA.examples.find(v=>v.id===target.dataset.example):null;
      if(ex){window.SchoolLearningHub?.close();const area=document.getElementById('python-input-area');const editor=document.getElementById('python-modal-input');if(area)area.value=ex.code;if(editor)editor.value=ex.code;window.openPythonImportModal?.();}
    }
  }
  document.addEventListener('click',handle,true);
  function init(){ensureCoach();const hub=document.querySelector('#school-hub-overlay');const host=hub?.querySelector('#school-hub-detail');if(!host)return;
    const add=()=>{const selected=host.querySelector('.school-hub-choice[data-lesson]');if(!selected)return;
      const l=typeof LEARNING_DATA!=='undefined'?LEARNING_DATA.lessons.find(v=>v.id===selected.dataset.lesson):null;if(l)renderLesson(l,host);};
    new MutationObserver(add).observe(host,{childList:true});add();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
  window.SchoolPractice={checkDiagram,taskFor:id=>byId.get(id),tasks:TASKS,getProgress:()=>({...results}),gradeLesson,renderLesson};
})();

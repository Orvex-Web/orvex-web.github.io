// /js/activity-tracker.js
// Activity tracker - v1
// Incluye este script en todas las páginas que formen parte del mismo dominio/site.
// No registra contraseñas ni historial fuera del sitio.

(function(){
  const STORAGE_KEY = 'site_activity_log_v1';
  const MAX_EVENTS = 5000;

  // Helpers
  function nowISO(){ return new Date().toISOString(); }
  function loadLog(){ try{ return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }catch(e){ return []; } }
  function saveLog(arr){ localStorage.setItem(STORAGE_KEY, JSON.stringify(arr)); }
  function pushEvent(ev){
    const log = loadLog();
    log.push(ev);
    if(log.length > MAX_EVENTS) log.splice(0, log.length - MAX_EVENTS);
    saveLog(log);
  }
  function getElInfo(el){
    if(!el) return null;
    return {
      tag: el.tagName,
      id: el.id || null,
      classes: el.className ? el.className.toString().slice(0,200) : null,
      text: (el.innerText || el.value || '').toString().trim().slice(0,200)
    };
  }

  // Event constructors
  function eventClick(target, description){
    return {
      ts: nowISO(),
      type: 'click',
      page: location.pathname + location.search,
      userAgent: navigator.userAgent,
      element: getElInfo(target),
      detail: { description: description || null }
    };
  }
  function eventFormSubmit(form){
    // collect only non-sensitive fields (no password, no file) and skip fields with data-no-track="true"
    const formData = {};
    try {
      const fields = Array.from(form.elements || []);
      fields.forEach(f=>{
        if(!f.name) return;
        const t = (f.type || '').toLowerCase();
        if(t === 'password' || t === 'file') return;
        if(f.dataset && f.dataset.noTrack === 'true') return;
        let val = f.value;
        if(typeof val === 'string') val = val.slice(0,200);
        formData[f.name] = val;
      });
    } catch(e){ /* ignore */ }
    return {
      ts: nowISO(),
      type: 'form_submit',
      page: location.pathname + location.search,
      element: getElInfo(form),
      detail: { formData }
    };
  }
  function eventSearch(inputEl, value){
    return {
      ts: nowISO(),
      type: 'search',
      page: location.pathname + location.search,
      element: getElInfo(inputEl),
      detail: { value: (value || '').toString().slice(0,300) }
    };
  }

  // Core listeners
  // 1) Clicks: botones y enlaces (filtra elementos que tengan data-no-track="true")
  document.addEventListener('click', function(e){
    try {
      const t = e.target.closest && e.target.closest('button, a, [role="button"]');
      if(!t) return;
      if(t.dataset && t.dataset.noTrack === 'true') return;
      // evita registrar si el texto está vacío (reducción de ruido)
      const text = (t.innerText || t.value || '').toString().trim();
      const desc = text ? text.slice(0,120) : null;
      pushEvent(eventClick(t, desc));
    } catch(err){ /* silent */ }
  }, {passive:true, capture:true});

  // 2) Form submit: guarda campos no sensibles
  document.addEventListener('submit', function(e){
    try {
      const form = e.target;
      if(form && form.dataset && form.dataset.noTrack === 'true') return;
      pushEvent(eventFormSubmit(form));
    } catch(err){ /* silent */ }
  }, {passive:true, capture:true});

  // 3) Auto-detect search inputs (heurística): name contiene "search" o id = site-search
  //    Además, si quieres que un campo sea trackeado explícitamente añade attr data-track-search="true"
  function detectAndBindSearchInputs(){
    const selectors = 'input[name*="search" i], input[id="site-search"], input[data-track-search="true"]';
    const inputs = document.querySelectorAll(selectors);
    inputs.forEach(inp=>{
      // evita duplicar listeners
      if(inp.dataset.__trackerBound === 'true') return;
      inp.dataset.__trackerBound = 'true';
      // Buscar al hacer Enter o al hacer submit del form
      inp.addEventListener('keydown', function(e){
        if(e.key === 'Enter'){
          const v = inp.value ? inp.value.toString().slice(0,300) : '';
          pushEvent(eventSearch(inp, v));
        }
      }, {passive:true});
      // Si el input está dentro de un form, también escucha submit (por si el usuario no presiona Enter directamente)
      const f = inp.form;
      if(f && f.dataset.__trackerBoundForm !== 'true'){
        f.dataset.__trackerBoundForm = 'true';
        f.addEventListener('submit', function(ev){
          // find all search-like inputs in this form and log them
          const searchInputs = f.querySelectorAll('input[name*="search" i], input[data-track-search="true"], input[id="site-search"]');
          searchInputs.forEach(si=>{
            const v = si.value ? si.value.toString().slice(0,300) : '';
            pushEvent(eventSearch(si, v));
          });
        }, {passive:true});
      }
    });
  }

  // Initial bind and periodic scan (some pages inject search later)
  detectAndBindSearchInputs();
  // run a couple more times to catch dynamic content
  setTimeout(detectAndBindSearchInputs, 800);
  setTimeout(detectAndBindSearchInputs, 2400);

  // Expose minimal API to admin pages (history.html) - sólo lo necesario
  window.SiteActivity = {
    getLog: function(){ return loadLog(); },
    clearLog: function(){ localStorage.removeItem(STORAGE_KEY); return true; }
  };

  // Small opt-in console message (no demo UI)
  try {
    console.info('SiteActivity tracker activo (registra acciones dentro del sitio).');
  } catch(e){}
})();

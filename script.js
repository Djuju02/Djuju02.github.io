
// Theme toggle with persistence
(function(){
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const current = localStorage.getItem('theme');
  if(current){ root.setAttribute('data-theme', current); btn && (btn.textContent = current==='dark'?'☀️':'🌙'); }
  btn?.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    btn.textContent = next==='dark'?'☀️':'🌙';
  });
})();

// Mobile nav
(function(){
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('primary-menu');
  toggle?.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu?.classList.toggle('is-open');
    menu?.setAttribute('aria-expanded', String(!expanded));
  });
  menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', ()=>{
    menu.classList.remove('is-open'); 
    document.querySelector('.nav-toggle')?.setAttribute('aria-expanded','false');
  }));
})();

// Project dialog
(function(){
  const dialog = document.getElementById('project-dialog');
  const img = document.getElementById('dialog-img');
  const title = document.getElementById('dialog-title');
  const desc = document.getElementById('dialog-desc');
  const close = dialog?.querySelector('.dialog-close');

  document.querySelectorAll('.project-more').forEach(btn => {
    btn.addEventListener('click', () => {
      img.src = btn.dataset.img || '';
      img.alt = btn.dataset.title || '';
      title.textContent = btn.dataset.title || 'Projet';
      desc.textContent = btn.dataset.desc || '';
      dialog.showModal();
    });
  });
  close?.addEventListener('click', ()=> dialog.close());
  dialog?.addEventListener('click', (e)=>{
    const rect = dialog.getBoundingClientRect();
    const inDialog = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
    if(!inDialog) dialog.close();
  });
})();

// Filters (example tags: iot, web, sec). If no data-tags present, all remain visible.
(function(){
  const chips = document.querySelectorAll('.chip');
  const cards = document.querySelectorAll('.project-card');
  function apply(filter){
    cards.forEach(card=>{
      const tags = (card.dataset.tags || '').split(',').map(s=>s.trim());
      const show = filter==='all' || tags.includes(filter) || tags[0]==='';
      card.style.display = show ? '' : 'none';
    });
  }
  chips.forEach(ch => ch.addEventListener('click', ()=>{
    chips.forEach(c=>c.classList.remove('is-active'));
    ch.classList.add('is-active');
    apply(ch.dataset.filter || 'all');
  }));
  apply('all');
})();

// Copy email
(function(){
  const btn = document.getElementById('copy-mail');
  btn?.addEventListener('click', async ()=>{
    const mail = btn.dataset.mail || '';
    try{
      await navigator.clipboard.writeText(mail);
      btn.querySelector('span').textContent = 'Copié ✔';
      setTimeout(()=> btn.querySelector('span').textContent = mail, 1500);
    }catch(e){ window.location.href = 'mailto:'+mail; }
  });
})();

// Elevate header on scroll
(function(){
  const header = document.querySelector('[data-elevate]');
  let last = 0;
  window.addEventListener('scroll', ()=>{
    const y = window.scrollY || 0;
    header.style.boxShadow = y>2 ? 'var(--shadow)' : 'none';
    last = y;
  }, {passive:true});
})();

// Register service worker
if('serviceWorker' in navigator){
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(()=>{}));
}

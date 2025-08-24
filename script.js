(()=>{"use strict";
  const yearEl=document.getElementById("year"); if(yearEl) yearEl.textContent=String(new Date().getFullYear());
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
  const throttle=(fn,w=100)=>{let l=0,t;return(...a)=>{const n=Date.now(); if(n-l>=w){l=n; fn(...a);} else {clearTimeout(t); t=setTimeout(()=>{l=n; fn(...a);},w);}}};
  const nav=$("#primaryNav"), navToggle=$("#navToggle");
  if(nav && navToggle){
    const toggle=()=>{ const isOpen=nav.getAttribute("data-open")==="true"; nav.setAttribute("data-open", String(!isOpen)); navToggle.setAttribute("aria-expanded", String(!isOpen)); };
    navToggle.addEventListener("click", toggle);
    $$(".nav-list a", nav).forEach(a=>a.addEventListener("click",()=>{ if(window.matchMedia("(max-width: 879px)").matches){ nav.setAttribute("data-open","false"); navToggle.setAttribute("aria-expanded","false"); }}));
    const sections=["#about","#experience","#projects","#skills","#contact"].map(id=>$(id)).filter(Boolean);
    const io=new IntersectionObserver((ents)=>{ents.forEach(e=>{const id="#"+e.target.id; const link=$(`.nav-list a[href="${id}"]`); if(!link) return; if(e.isIntersecting){ $$(".nav-list a").forEach(a=>a.classList.remove("is-active")); link.classList.add("is-active"); } });},{rootMargin:"-40% 0px -55% 0px", threshold:0.01});
    sections.forEach(s=>io.observe(s));
  }
  const toTop=$("#toTop");
  if(toTop){
    const onScroll=throttle(()=>{ if(window.scrollY>400){ toTop.classList.add("is-visible"); } else { toTop.classList.remove("is-visible"); } },100);
    window.addEventListener("scroll", onScroll, {passive:true});
    toTop.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
  }
  const modal=$("#projectModal");
  if(modal){
    const modalTitle=$("#modalTitle", modal), modalBody=$("#modalBody", modal);
    const openFromCard=(card)=>{ const title=$("h3",card)?.textContent?.trim() ?? "Détails"; const body=$("p",card)?.innerHTML ?? ""; modalTitle.textContent=title; modalBody.innerHTML=`<p>${body}</p>`; if(typeof modal.showModal==="function") modal.showModal(); else modal.setAttribute("open",""); };
    $$(".project-view").forEach(btn=>btn.addEventListener("click",(e)=>{ const card=e.currentTarget.closest(".project-card"); if(card) openFromCard(card); }));
    modal.addEventListener("click",(e)=>{ const rect=$(".modal-surface",modal).getBoundingClientRect(); const inside=rect.top<=e.clientY && e.clientY<=rect.top+rect.height && rect.left<=e.clientX && e.clientX<=rect.left+rect.width; if(!inside) modal.close(); });
  }
  const chips=$$(".chip"), cards=$$(".project-card");
  if(chips.length && cards.length){
    const apply=(f)=>{ cards.forEach(card=>{ if(f==="all"){ card.style.display=""; return;} const tags=(card.getAttribute("data-tags")||"").split(",").map(s=>s.trim()); card.style.display=tags.includes(f)?"":"none"; }); };
    chips.forEach(ch=>ch.addEventListener("click",()=>{ chips.forEach(c=>c.classList.remove("is-active")); ch.classList.add("is-active"); apply(ch.dataset.filter); }));
  }
  const FALLBACK_DICT={fr:{ "site.title":"Julien Saleh · Portfolio","a11y.skipToContent":"Aller au contenu","brand":"JS","nav.about":"À propos","nav.experience":"Expériences","nav.projects":"Projets","nav.skills":"Compétences","nav.contact":"Contact","hero.eyebrow":"Bonjour, je suis","hero.name":"Julien Saleh","hero.subtitle":"Pentester & créateur d’outils — cybersécurité, IoT et web.","cta.viewWork":"Voir mes projets","cta.contact":"Me contacter","about.title":"À propos","about.body":"Je conçois et sécurise des systèmes. J’aime auditer, automatiser et livrer des interfaces claires. Ici, vous trouverez une sélection de projets et d’expériences récentes.","exp.title":"Expériences","exp.0.title":"Consultant sécurité — Deloitte","exp.0.when":"2024 — 2025","exp.0.where":"Paris","exp.0.body":"EBIOS RM, pentests, durcissement Red Team, outillage DevSecOps.","exp.1.title":"Projets IoT & sécurité","exp.1.when":"2023 — 2024","exp.1.body":"Capteurs IR, UART, simulation AVR, traçage GPS + thermographie.","projects.title":"Projets","filter.all":"Tous","filter.web":"Web","filter.iot":"IoT","filter.sec":"Sécurité","proj.sample.title":"Audit HTTP · Verb Tampering","proj.sample.body":"Contournement d’auth HTTP via méthodes non standard, tooling Burp/cURL.","proj.sample.cta":"Voir","proj.sample.link":"Code","proj.sample2.title":"UART & AVR Registry","proj.sample2.body":"Capture UART, identification de pins MCU, debug simavr & GTKWave.","skills.title":"Compétences","contact.title":"Contact","contact.body":"Ouvert aux opportunités, collaborations et missions freelance.","contact.email":"Envoyer un email","contact.linkedin":"LinkedIn","footer.rights":"Tous droits réservés."},
  en:{ "site.title":"Julien Saleh · Portfolio","a11y.skipToContent":"Skip to content","brand":"JS","nav.about":"About","nav.experience":"Experience","nav.projects":"Projects","nav.skills":"Skills","nav.contact":"Contact","hero.eyebrow":"Hi, I’m","hero.name":"Julien Saleh","hero.subtitle":"Pentester & tool builder — cybersecurity, IoT & web.","cta.viewWork":"View work","cta.contact":"Contact me","about.title":"About","about.body":"I design and secure systems. I love auditing, automating and shipping clear interfaces. Here’s a selection of recent projects and experience.","exp.title":"Experience","exp.0.title":"Security Consultant — Deloitte","exp.0.when":"2024 — 2025","exp.0.where":"Paris","exp.0.body":"EBIOS RM, pentests, Red Team hardening, DevSecOps tooling.","exp.1.title":"IoT & Security Projects","exp.1.when":"2023 — 2024","exp.1.body":"IR sensors, UART, AVR simulation, GPS + thermography tracking.","projects.title":"Projects","filter.all":"All","filter.web":"Web","filter.iot":"IoT","filter.sec":"Security","proj.sample.title":"HTTP Audit · Verb Tampering","proj.sample.body":"Bypass HTTP auth via non-standard methods, Burp/cURL tooling.","proj.sample.cta":"View","proj.sample.link":"Code","proj.sample2.title":"UART & AVR Registry","proj.sample2.body":"UART capture, MCU pin ID, simavr & GTKWave debugging.","skills.title":"Skills","contact.title":"Contact","contact.body":"Open to opportunities, collabs and freelance work.","contact.email":"Send email","contact.linkedin":"LinkedIn","footer.rights":"All rights reserved."}};
  async function loadDict(lang){ try{const res=await fetch(`./i18n/${lang}.json`,{cache:"no-store"}); if(!res.ok) throw new Error(); return await res.json(); } catch { return FALLBACK_DICT[lang] || FALLBACK_DICT.fr; } }
  function applyI18n(dict){ $$("[data-i18n]").forEach(el=>{ const key=el.getAttribute("data-i18n"); if(!key) return; const val=key.split("|").reduce((acc,k)=>(acc && acc[k])||dict[k], dict); if(typeof val==="string"){ if(el.tagName==="INPUT"||el.TAGNAME==="TEXTAREA") el.setAttribute("placeholder", val); else el.textContent=val; } }); document.title=dict["site.title"]||"Portfolio"; }
  async function setLang(lang){ const dict=await loadDict(lang); applyI18n(dict); localStorage.setItem("lang", lang); document.documentElement.lang=lang; $$(".lang-btn").forEach(btn=>btn.setAttribute("aria-pressed", String(btn.dataset.lang===lang))); }
  $$(".lang-btn").forEach(btn=>btn.addEventListener("click",()=>setLang(btn.dataset.lang)));
  const initialLang=localStorage.getItem("lang")||(navigator.language.startsWith("fr")?"fr":"en"); setLang(initialLang);
  })();
  
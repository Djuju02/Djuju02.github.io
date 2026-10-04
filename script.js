(() => {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch { /* stockage indisponible */ } }
  };
  const root = document.documentElement;

  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- Menu mobile ---------- */
  const nav = $("#primaryNav"), navToggle = $("#navToggle");
  const setMenu = (open) => {
    nav.setAttribute("data-open", String(open));
    navToggle.setAttribute("aria-expanded", String(open));
  };
  navToggle.addEventListener("click", () => setMenu(nav.getAttribute("data-open") !== "true"));
  $$(".nav-list a").forEach(a => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });

  /* ---------- Lien actif + en-tête ---------- */
  const links = $$(".nav-list a");
  const spy = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      links.forEach(a => a.classList.toggle("is-active", a.getAttribute("href") === "#" + e.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  links.forEach(a => { const s = $(a.getAttribute("href")); if (s) spy.observe(s); });

  const header = $(".site-header"), toTop = $("#toTop");
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 8);
    toTop.classList.toggle("is-visible", y > 600);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop.addEventListener("click", () => window.scrollTo({ top: 0 }));

  /* ---------- Apparition au scroll ---------- */
  const reveal = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("is-visible"); reveal.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  $$(".reveal").forEach(el => reveal.observe(el));

  /* ---------- Filtres projets ---------- */
  const chips = $$(".chip"), projects = $$(".project");
  chips.forEach(chip => chip.addEventListener("click", () => {
    const f = chip.dataset.filter;
    chips.forEach(c => {
      c.classList.toggle("is-active", c === chip);
      c.setAttribute("aria-pressed", String(c === chip));
    });
    projects.forEach(p => {
      p.hidden = f !== "all" && !(p.dataset.tags || "").split(",").includes(f);
    });
  }));

  /* ---------- Thème ---------- */
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)");
  const currentTheme = () => root.getAttribute("data-theme") || (prefersLight.matches ? "light" : "dark");
  $("#themeToggle").addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    store.set("theme", next);
  });

  /* ---------- Langue ---------- */
  // Le français est lu directement depuis le HTML pour éviter toute duplication.
  const FR = { "meta.title": document.title };
  $$("[data-i18n]").forEach(el => { FR[el.dataset.i18n] = el.textContent; });
  $$("[data-i18n-aria]").forEach(el => { FR[el.dataset.i18nAria] = el.getAttribute("aria-label"); });
  $$("[data-i18n-alt]").forEach(el => { FR[el.dataset.i18nAlt] = el.getAttribute("alt"); });
  FR["tools.lang"] = "Switch to English";
  const dicts = { fr: FR, en: window.I18N_EN || {} };

  const setLang = (lang) => {
    const d = dicts[lang], t = k => d[k] ?? FR[k];
    $$("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
    $$("[data-i18n-aria]").forEach(el => el.setAttribute("aria-label", t(el.dataset.i18nAria)));
    $$("[data-i18n-alt]").forEach(el => el.setAttribute("alt", t(el.dataset.i18nAlt)));
    document.title = t("meta.title");
    root.lang = lang;
    $(".lang-label").textContent = lang === "fr" ? "EN" : "FR";
    store.set("lang", lang);
  };
  $("#langToggle").addEventListener("click", () => setLang(root.lang === "fr" ? "en" : "fr"));

  const saved = store.get("lang");
  const initial = saved === "fr" || saved === "en"
    ? saved
    : ((navigator.language || "fr").toLowerCase().startsWith("fr") ? "fr" : "en");
  if (initial !== "fr") setLang(initial);

  /* ---------- Service worker ---------- */
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
  }
})();

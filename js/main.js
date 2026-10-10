/* Lógica del sitio. Los datos se editan en js/config.js */
(function () {
  const S = window.SITE || {};
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const set = (sel, html) => { const el = $(sel); if (el) el.innerHTML = html; };

  const pendientes = [];
  const wa = S.whatsapp && S.whatsapp !== "5493810000000" ? S.whatsapp : null; // NO cambiar este número
  const waUrl = (t) => `https://wa.me/${wa}` + (t ? `?text=${encodeURIComponent(t)}` : "");
  const z = S.zona || {};

  /* ---------- Render desde config ---------- */
  set("#materias-lista", (S.materias || []).map((m) =>
    `<div class="el"><b>${esc(m.n)}</b><i>${esc(m.s)}</i><span>${esc(m.t)}</span></div>`).join(""));

  set("#niveles-lista", (S.niveles || []).map((n) =>
    `<div class="nivel"><b>${esc(n.t)}</b><span>${esc(n.d)}</span></div>`).join(""));

  set("#servicios-lista", (S.servicios || []).map((s) => {
    if (!s.precio) pendientes.push("precio de «" + s.nombre + "»");
    return `<article class="row"><h3>${esc(s.nombre)}</h3>
      <div class="rd"><p>${esc(s.desc)}</p>${s.etiqueta ? `<span class="tag">${esc(s.etiqueta)}</span>` : ""}</div>
      <div class="price">${esc(s.precio || "Consultar")}${s.detalle ? `<small>${esc(s.detalle)}</small>` : ""}</div></article>`;
  }).join(""));

  set("#modalidades", (S.modalidades || []).map((m) =>
    `<div class="mod"><h3>${esc(m.t)}</h3><p>${esc(m.d)}</p></div>`).join(""));
  if (S.notaPrecios) set("#precioNota", esc(S.notaPrecios)); else { const n = $("#precioNota"); if (n) n.remove(); }

  /* Zona de atención */
  if (!z.ciudad) pendientes.push("zona.ciudad");
  set("#zCiudad", esc(z.ciudad || "Ciudad a definir"));
  set("#zZonas", esc(z.zonas || "Zonas a definir"));
  set("#zNota", esc(z.nota || ""));
  const mapa = $("#zMapa");
  if (mapa && z.mapaUrl) { mapa.href = z.mapaUrl; mapa.hidden = false; }

  /* Testimonios: solo reales y autorizados */
  const tes = (S.testimonios || []).filter((t) => t && t.autorizado === true && t.texto);
  if (tes.length) {
    const fig = (t, cls) => `<figure style="margin:0" class="${cls}"><blockquote>“${esc(t.texto)}”</blockquote>
      <figcaption class="who">${esc(t.nombre || "")}<small>${esc(t.rol || "")}</small></figcaption></figure>`;
    set("#quotes", fig(tes[0], "q-main") + (tes.length > 1 ? `<div class="q-side">${tes.slice(1, 4).map((t) => fig(t, "")).join("")}</div>` : ""));
    if (tes.length === 1) $("#quotes").style.gridTemplateColumns = "1fr";
    $("#opiniones").hidden = false;
    $("#navOp").hidden = false;
  } else pendientes.push("testimonios reales (la sección está oculta)");

  /* Selects del formulario */
  const fill = (id, arr, key) => { const s = $(id); if (s) (arr || []).forEach((x) => s.add(new Option(x[key], x[key]))); };
  fill("#selNivel", S.niveles, "t");
  fill("#selMod", S.modalidades, "t");

  /* ---------- WhatsApp ---------- */
  if (!wa) pendientes.push("whatsapp");
  $$("[data-wa]").forEach((a) => {
    if (wa) { a.href = waUrl(S.mensajeWhatsapp); a.target = "_blank"; a.rel = "noopener"; }
    else a.href = "#contacto";
  });

  /* ---------- Menú móvil y sección activa ---------- */
  const menuBtn = $("#menuBtn"), links = $("#navlinks");
  const setMenu = (o) => { links.classList.toggle("open", o); menuBtn.setAttribute("aria-expanded", o); menuBtn.textContent = o ? "✕" : "☰"; };
  menuBtn.addEventListener("click", () => setMenu(!links.classList.contains("open")));
  links.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

  const navA = $$("a:not(.btn)", links).filter((a) => !a.hidden);
  const io = new IntersectionObserver((es) => es.forEach((en) => {
    if (en.isIntersecting) navA.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  navA.forEach((a) => { const s = $(a.getAttribute("href")); if (s) io.observe(s); });

  $("#year").textContent = new Date().getFullYear();

  /* ---------- Formulario ---------- */
  const form = $("#contactForm"), msg = $("#formMsg"), mailBtn = $("#mailBtn");
  const datos = () => {
    const d = new FormData(form), g = (k) => (d.get(k) || "").toString().trim();
    const o = { nombre: g("nombre"), email: g("email"), nivel: g("nivel"), modalidad: g("modalidad"), tema: g("materia"), mensaje: g("mensaje") };
    if (!o.nombre) { msg.textContent = "Por favor, escribí tu nombre."; form.nombre.focus(); return null; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.email)) { msg.textContent = "Revisá tu correo: no parece válido."; form.email.focus(); return null; }
    return o;
  };
  const texto = (o) => `Hola Paola, soy ${o.nombre}.\n\nCorreo: ${o.email}\nNivel: ${o.nivel || "No especificado"}\nModalidad: ${o.modalidad || "A definir"}\nTema: ${o.tema || "No especificado"}\n\nConsulta: ${o.mensaje || "Quisiera consultar por las clases de Química."}`;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const o = datos(); if (!o) return;
    if (!wa) { msg.textContent = "Falta configurar el número de WhatsApp en js/config.js."; return; }
    msg.textContent = "Abriendo WhatsApp…";
    window.open(waUrl(texto(o)), "_blank", "noopener");
    form.reset();
  });

  if (!S.email && !S.formEndpoint) { mailBtn.hidden = true; pendientes.push("email (botón de correo oculto)"); }
  mailBtn.addEventListener("click", async () => {
    const o = datos(); if (!o) return;
    if (S.formEndpoint) {
      try {
        const r = await fetch(S.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(o) });
        if (!r.ok) throw new Error();
        msg.textContent = "¡Listo! Recibimos tu consulta y te vamos a responder pronto."; form.reset();
      } catch (_) { msg.textContent = "No pudimos enviar el mensaje. Probá por WhatsApp."; }
    } else {
      location.href = `mailto:${S.email}?subject=${encodeURIComponent("Consulta de clases de Química")}&body=${encodeURIComponent(texto(o))}`;
    }
  });

  if (pendientes.length) console.info("[Landing] Pendientes en js/config.js:\n- " + pendientes.join("\n- "));
})();
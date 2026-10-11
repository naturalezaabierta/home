/* ==========================================================
   TESTIMONIOS · aquí editas nombre y tema de cada video.
   - El orden de esta lista es el orden en la página.
   - Los 3 primeros también salen en el inicio.
   - nombre: nombre de pila (ej. "Carlos"). Si lo dejas vacío, dice "Testimonio 1", "Testimonio 2"...
   - tema: lo que buscaba o lo que vivió (ej. "buscaba calmar la ansiedad"). Es opcional.
   Se guarda este archivo en GitHub y las dos páginas se actualizan solas.
   ========================================================== */
window.NA_TESTIMONIOS = [
  { id: "3fpda69kkp", Brexey: "", Testimonio: "" },
  { id: "k4hj2c9jdb", nombre: "", tema: "" },
  { id: "qcp7t98tbn", nombre: "", tema: "" },
  { id: "6bi8f4zgnm", nombre: "", tema: "" },
  { id: "anhkg8w0vj", nombre: "", tema: "" },
  { id: "btmp51mzap", nombre: "", tema: "" },
  { id: "l20rs0lrpu", nombre: "", tema: "" },
  { id: "kukihboq4u", nombre: "", tema: "" },
  { id: "8opee69cwe", nombre: "", tema: "" },
  { id: "f11jfim75s", nombre: "", tema: "" },
  { id: "5nfowjhaag", nombre: "", tema: "" },
  { id: "ro2mqkxncr", nombre: "", tema: "" },
  { id: "qnn9evfo0h", nombre: "", tema: "" },
  { id: "03zp5xj89d", nombre: "", tema: "" },
  { id: "7bv15mdfxj", nombre: "", tema: "" },
  { id: "l1yckuihrw", nombre: "", tema: "" },
  { id: "uxc6o42ufq", nombre: "", tema: "" },
  { id: "jrptrama2u", nombre: "", tema: "" },
  { id: "uzgn26sdy3", nombre: "", tema: "" },
  { id: "oic91cbvks", nombre: "", tema: "" },
  { id: "3ww48c0kk9", nombre: "", tema: "" },
  { id: "jb4dbegsn3", nombre: "", tema: "" },
  { id: "y6x1hzxuez", nombre: "", tema: "" },
  { id: "owf9h61s2j", nombre: "", tema: "" },
  { id: "6duuq1b3r2", nombre: "", tema: "" }
];

/* ---------- No hace falta tocar nada de aquí para abajo ---------- */
(function () {
  const lista = window.NA_TESTIMONIOS;
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const leyenda = (t, i) => [t.nombre, t.tema].filter(Boolean).join(' · ') || ('Testimonio ' + (i + 1));

  // El video solo se descarga cuando la tarjeta está por verse en pantalla.
  function montar(caja) {
    if (caja.dataset.listo) return;
    caja.dataset.listo = '1';
    const id = caja.dataset.id;
    const f = document.createElement('iframe');
    f.src = 'https://fast.wistia.net/embed/iframe/' + id + '?videoFoam=true';
    f.title = 'Testimonio';
    f.allow = 'autoplay; fullscreen';
    f.setAttribute('allowfullscreen', '');
    f.setAttribute('loading', 'lazy');
    caja.replaceChildren(f);
  }

  const io = 'IntersectionObserver' in window
    ? new IntersectionObserver(entradas => entradas.forEach(e => {
        if (e.isIntersecting) { io.unobserve(e.target); montar(e.target); }
      }), { rootMargin: '400px' })
    : null;

  // Pinta tarjetas desde la posición "desde" hasta "hasta" (sin incluir). inmediato=true carga sin esperar el scroll.
  window.NA_pintar = function (contenedor, desde, hasta, inmediato) {
    lista.slice(desde, hasta).forEach((t, k) => {
      const art = document.createElement('article');
      art.className = 'testimonio-card';
      art.innerHTML = '<div class="testimonio-video" data-id="' + esc(t.id) + '"></div>' +
        '<div class="leyenda">' + esc(leyenda(t, desde + k)) + '</div>';
      contenedor.appendChild(art);
      const caja = art.querySelector('.testimonio-video');
      if (inmediato || !io) montar(caja); else io.observe(caja);
    });
  };
})();

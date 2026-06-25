/* ============================================================
   ANDREA RAMÍREZ — PORTAFOLIO
   script.js: cursor, nav, scroll reveal, parallax, modales
============================================================ */

/* ── DATOS DE PROYECTOS ──────────────────────────────────── */
/* REEMPLAZA: edita aquí la información de cada proyecto.
   Para las imágenes de galería, pon rutas como:
   'images/projects/vangoghia-01.jpg' */

const PROJECTS = {
  vangoghia: {
    title: 'Vangoghia',
    year: '2024',
    type: 'Diseño editorial',
    rol: 'Dirección de arte, diseño editorial y maquetación',
    tools: 'Adobe InDesign, Illustrator, Photoshop',
    description: `VANGOGHIA es una revista editorial concebida como un espacio de exploración artística e inspiración visual. El proyecto nació a partir del interés por crear una publicación que fusionara el arte, la cultura y el diseño mediante una propuesta estética cuidadosamente construida.

El desarrollo del proyecto implicó la creación del concepto editorial, la definición de la línea gráfica, el diseño de retículas, la selección tipográfica y la construcción de una narrativa visual coherente. Cada página fue diseñada para generar un ritmo de lectura dinámico y una experiencia inmersiva para el lector gracias a que se hizo para ser web e interactiva.`,
    // REEMPLAZA: agrega hasta 4 rutas de imagen de galería
    gallery: [
      'images/projects/vangoghia-01.png',
      'images/projects/vangoghia-02.png',
      'images/projects/vangoghia-03.png',
      'images/projects/vangoghia-04.png',
    ],
    // REEMPLAZA: imagen principal del modal
    cover:'images/projects/vangoghia-cover.png'
  },

  folletos: {
    title: 'Folletos para niños hospitalizados',
    year: '2026',
    type: 'Diseño de información',
    rol: 'Investigación, diseño de información e ilustración',
    tools: 'Adobe InDesign, Illustrator',
    description: `Proyecto desarrollado con el objetivo de crear materiales educativos dirigidos a niños hospitalizados, permitiendo que continuaran su proceso de aprendizaje durante su estancia en el hospital.

Los folletos fueron diseñados utilizando un lenguaje sencillo, recursos visuales atractivos y dinámicas interactivas. Uno de los principales retos fue desarrollar materiales visualmente atractivos utilizando únicamente dos tintas, debido a las limitaciones presupuestales de impresión.`,
    gallery: [ 
      'images/projects/folletos-01.jpg',
      'images/projects/folletos-02.jpg',
      'images/projects/folletos-03.jpg',
      'images/projects/folletos-04.jpg',
     ],
    cover:'images/projects/folletos-01.jpg',
  },

  'revistas-parejas': {
    title: 'Revistas personalizadas para parejas',
    year: '2026',
    type: 'Diseño editorial freelance',
    rol: 'Conceptualización, dirección de arte, maquetación y producción',
    tools: 'Adobe InDesign, Photoshop, Canva',
    description: `Proyecto freelance enfocado en el diseño de revistas personalizadas para parejas. Cada publicación fue concebida como una pieza única y completamente adaptada a la historia de cada cliente.

El proceso consistía en recopilar fotografías y experiencias personales para construir una narrativa editorial personalizada, desarrollando apartados, dinámicas y contenidos interactivos que transformaran recuerdos en un objeto tangible y significativo.`,
    gallery: [
      'images/projects/revista-01.jpg',
      'images/projects/revista-02.jpg',
      'images/projects/revista-03.jpg',
      'images/projects/revista-04.jpg',
    ],
    cover: 'images/projects/revista-01.jpg',
  },

  greenpack: {
    title: 'GreenPack',
    year: '2024',
    type: 'Identidad de marca',
    rol: 'Branding, estrategia y manual de identidad',
    tools: 'Adobe Illustrator, InDesign',
    description: `GreenPack es un proyecto de identidad visual desarrollado de manera independiente para una marca enfocada en soluciones sostenibles.

El trabajo incluyó la investigación de la marca, la conceptualización estratégica, el desarrollo del logotipo, la construcción del sistema visual y el diseño de un manual de identidad que permitiera mantener la coherencia de la marca en distintos puntos de contacto.`,
    gallery: [
      'images/projects/greenpack-01.jpg',
      'images/projects/greenpack-02.jpg',
      'images/projects/greenpack-03.jpg',
      'images/projects/greenpack-04.jpg',
     ],
    cover: 'images/projects/greenpack-cover.png',
  },

  verne: {
    title: 'Verne Study Club',
    year: '2024',
    type: 'Branding y comunicación',
    rol: 'Estrategia de marca, identidad visual y publicidad',
    tools: 'Adobe Illustrator, InDesign, Photoshop',
    description: `Verne Study Club es un proyecto educativo desarrollado de manera freelance cuyo objetivo es ofrecer acompañamiento académico mediante un enfoque pedagógico cercano y personalizado.

El proyecto incluyó el desarrollo de la misión, visión, personalidad de marca, naming, identidad visual y diseño del logotipo. Actualmente continúo colaborando con la marca mediante el desarrollo de materiales publicitarios y piezas de comunicación.`,
    gallery: [ 
      'images/projects/verne-01.jpg',
      'images/projects/verne-02.jpg',
      'images/projects/verne-03.jpg',
      'images/projects/verne-04.jpg',
    ],
    cover: 'images/projects/verne-cover.jpg',
  },

  bienal: {
    title: 'Carteles para la Bienal',
    year: '2024',
    type: 'Cartel',
    rol: 'Conceptualización e ilustración',
    tools: 'Adobe Illustrator, Photoshop',
    description: `Desarrollo de diversos carteles, explorando distintas temáticas y lenguajes visuales.

Entre ellos destaca una propuesta centrada en la problemática ambiental y otra realizada en conmemoración del 8 de marzo, utilizando el cartel como una herramienta de reflexión, expresión y comunicación social. Tambien un cartel para el hospital universitario para los niños.`,
    gallery: [ 
      'images/projects/cartel-01.png',
      'images/projects/cartel-02.jpg',
    ],
    cover: 'images/projects/bienal-cover.jpg',
  },

  abecedario: {
    title: 'Ilustraciones para juego interactivo',
    year: '2025',
    type: 'Ilustración educativa',
    rol: 'Ilustración y diseño educativo',
    tools: 'Adobe Illustrator, Procreate',
    description: `Proyecto educativo desarrollado para niños de nivel inicial, consistente en la creación de ilustraciones originales para un juego interactivo sobre el aprendizaje del abecedario.

Las piezas fueron diseñadas, impresas y laminadas para su uso directo con los niños, convirtiéndose en materiales didácticos funcionales y resistentes.`,
    gallery: [ 
      'images/projects/abc-01.jpeg',
      'images/projects/abc-02.jpeg',
     ],
    cover: 'images/projects/abecedario-cover.png',
  },

  maldicion: {
    title: 'Mi amada maldición',
    year: '2024',
    type: 'Ilustración editorial',
    rol: 'Ilustración y diseño editorial',
    tools: 'Acuarela, Adobe Photoshop, InDesign',
    description: `Ilustración realizada para la portada de un poemario titulado "Mi amada maldición".

La pieza fue creada inicialmente mediante técnicas tradicionales con acuarelas y posteriormente digitalizada para integrarse al proceso editorial del libro. El proyecto incluyó la maquetación e impresión de la publicación, explorando la relación entre la ilustración analógica y el diseño editorial contemporáneo.`,
    gallery: [ 
      'images/projects/maldicion-01.jpeg',
      'images/projects/maldicion-02.jpeg',
     ],
    cover: 'images/projects/maldicion-cover.png',
  },
};

/* ── CURSOR ──────────────────────────────────────────────── */
const cursor = document.getElementById('cursor');
const trail  = document.getElementById('cursorTrail');
let trailX = 0, trailY = 0;

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
});

function animateTrail() {
  trailX += (parseFloat(cursor.style.left || 0) - trailX) * 0.12;
  trailY += (parseFloat(cursor.style.top  || 0) - trailY) * 0.12;
  trail.style.left = trailX + 'px';
  trail.style.top  = trailY + 'px';
  requestAnimationFrame(animateTrail);
}
animateTrail();

/* ── NAVEGACIÓN ──────────────────────────────────────────── */
const nav       = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

// Scroll: añadir clase scrolled al nav
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Toggle mobile nav
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Cerrar al hacer clic en un enlace
navLinks.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ── SCROLL REVEAL ───────────────────────────────────────── */
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Delay escalonado para elementos en el mismo viewport
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

// Asignar delays escalonados a siblings
function assignStaggerDelays() {
  const grids = document.querySelectorAll('.projects__grid, .about__grid');
  grids.forEach(grid => {
    const children = grid.querySelectorAll('.reveal');
    children.forEach((child, i) => {
      child.dataset.delay = i * 100;
    });
  });
}

assignStaggerDelays();
revealEls.forEach(el => revealObserver.observe(el));

/* ── MODALES ─────────────────────────────────────────────── */
const overlay      = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');

function buildGallery(images) {
  if (!images || images.length === 0) return '';

  const items = images.map((src, i) => {
    if (src) {
      return `<div class="modal-gallery-item">
        <img src="${src}" alt="Imagen del proyecto ${i + 1}" loading="lazy" />
      </div>`;
    }
    return `<div class="modal-gallery-item">
      <div class="modal-gallery-placeholder">Imagen ${i + 1}</div>
    </div>`;
    /* REEMPLAZA: cuando tengas tus imágenes de galería, pon las rutas en el
       array gallery de cada proyecto en PROJECTS arriba. Los placeholders
       desaparecerán automáticamente. */
  }).join('');

  return `<div class="modal-gallery">${items}</div>`;
}

window.openModal = function(id) {
  const project = PROJECTS[id];
  if (!project) return;

  const coverHTML = project.cover
    ? `<img src="${project.cover}" alt="${project.title}" style="width:100%;height:100%;object-fit:cover;" />`
    : `<div class="modal-hero-placeholder">Portada del proyecto</div>`;
    /* REEMPLAZA: pon la ruta real en project.cover dentro de PROJECTS */

  const descParagraphs = project.description
    .split('\n\n')
    .map(p => `<p>${p.trim()}</p>`)
    .join('');

  modalContent.innerHTML = `
    <div class="modal-hero">${coverHTML}</div>
    <div class="modal-meta">
      <div class="modal-meta-item">
        <span class="modal-meta-label">Tipo</span>
        <span class="modal-meta-value">${project.type}</span>
      </div>
      <div class="modal-meta-item">
        <span class="modal-meta-label">Año</span>
        <span class="modal-meta-value">${project.year}</span>
      </div>
      <div class="modal-meta-item">
        <span class="modal-meta-label">Rol</span>
        <span class="modal-meta-value">${project.rol}</span>
      </div>
      <div class="modal-meta-item">
        <span class="modal-meta-label">Herramientas</span>
        <span class="modal-meta-value">${project.tools}</span>
      </div>
    </div>
    <h2 class="modal-title">${project.title}</h2>
    <div class="modal-desc">${descParagraphs}</div>
    ${buildGallery(project.gallery)}
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeModal = function() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
};

// Cerrar con Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

/* ── FORMULARIO DE CONTACTO ──────────────────────────────── */
/* REEMPLAZA: conecta tu formulario a un backend real.
   Opciones recomendadas: Formspree, Web3Forms, EmailJS.
   Por ahora simula el envío. */

const form     = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name    = form.name.value.trim();
  const email   = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    formNote.textContent = 'Por favor completa todos los campos.';
    formNote.style.color = '#e88';
    return;
  }

  // SIMULACIÓN — reemplaza con llamada real a tu backend o servicio de formularios
  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.textContent = 'Enviando...';
  submitBtn.disabled = true;

  setTimeout(() => {
    formNote.textContent = '¡Mensaje enviado! Te responderé pronto.';
    formNote.style.color = '#7BB8B6';
    form.reset();
    submitBtn.textContent = 'Enviar mensaje';
    submitBtn.disabled = false;
  }, 1200);
});

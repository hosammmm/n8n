/* ================== بيانات الوكلاء ================== */
const agents = [
  {
    name: "أحمد محمود",
    role: "وكيل عقاري أول",
    emoji: "👨‍💼",
    bio: "خبير في التسويق العقاري وإدارة الممتلكات الفاخرة بخبرة 12 سنة.",
    rating: 5,
    color: "linear-gradient(135deg, #6366f1, #8b5cf6)"
  },
  {
    name: "فاطمة الزهراء",
    role: "مستشارة قانونية",
    emoji: "👩‍⚖️",
    bio: "محامية معتمدة متخصصة في قضايا الشركات والعقود التجارية.",
    rating: 5,
    color: "linear-gradient(135deg, #ec4899, #f43f5e)"
  },
  {
    name: "محمد علي",
    role: "وكيل تأمين",
    emoji: "🧑‍💼",
    bio: "مستشار تأمين معتمد يقدم أفضل الحلول للأفراد والشركات.",
    rating: 5,
    color: "linear-gradient(135deg, #06b6d4, #0ea5e9)"
  },
  {
    name: "سارة حسن",
    role: "خبيرة تسويق",
    emoji: "👩‍💻",
    bio: "متخصصة في التسويق الرقمي وإدارة الحملات الإعلانية الناجحة.",
    rating: 4,
    color: "linear-gradient(135deg, #f59e0b, #f97316)"
  },
  {
    name: "عمر خالد",
    role: "وكيل سفر وسياحة",
    emoji: "🧳",
    bio: "ينظم رحلات سياحية مخصصة حول العالم بأسعار تنافسية.",
    rating: 5,
    color: "linear-gradient(135deg, #10b981, #14b8a6)"
  },
  {
    name: "منى إبراهيم",
    role: "مستشارة استثمار",
    emoji: "📊",
    bio: "خبيرة استثمار وإدارة محافظ مالية للشركات والأفراد.",
    rating: 5,
    color: "linear-gradient(135deg, #8b5cf6, #d946ef)"
  },
  {
    name: "يوسف عبدالله",
    role: "وكيل خدمات أعمال",
    emoji: "🏢",
    bio: "يساعدك في تأسيس شركتك واستخراج كافة التراخيص بسهولة.",
    rating: 4,
    color: "linear-gradient(135deg, #ef4444, #f97316)"
  },
  {
    name: "نور الدين",
    role: "وكيل سيارات",
    emoji: "🚗",
    bio: "يوفر أفضل السيارات الجديدة والمستعملة بضمانات موثوقة.",
    rating: 5,
    color: "linear-gradient(135deg, #0ea5e9, #6366f1)"
  }
];

/* ================== عرض بطاقات الوكلاء ================== */
const agentsGrid = document.getElementById('agentsGrid');
if (agentsGrid) {
  agentsGrid.innerHTML = agents.map(a => `
    <div class="agent-card">
      <div class="agent-avatar" style="background: ${a.color}">
        <div class="agent-img">${a.emoji}</div>
      </div>
      <div class="agent-info">
        <h3>${a.name}</h3>
        <span class="agent-role">${a.role}</span>
        <p class="agent-bio">${a.bio}</p>
        <div class="agent-rating">${'★'.repeat(a.rating)}${'☆'.repeat(5 - a.rating)}</div>
        <div class="agent-contact">
          <button class="agent-btn" title="اتصل">📞</button>
          <button class="agent-btn" title="واتساب">💬</button>
          <button class="agent-btn" title="بريد">✉️</button>
          <button class="agent-btn" title="الملف الشخصي">👤</button>
        </div>
      </div>
    </div>
  `).join('');
}

/* ================== قائمة الموبايل ================== */
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => navLinks.classList.remove('open'))
  );
}

/* ================== نموذج التواصل ================== */
const form = document.getElementById('contactForm');
const success = document.getElementById('formSuccess');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (success) {
      success.hidden = false;
      form.reset();
      setTimeout(() => { success.hidden = true; }, 5000);
    }
  });
}

/* ================== زر العودة للأعلى ================== */
const toTop = document.getElementById('toTop');
if (toTop) {
  window.addEventListener('scroll', () => {
    toTop.classList.toggle('show', window.scrollY > 400);
  });
  toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ================== السنة الحالية في الفوتر ================== */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ================== تأثير ظهور العناصر عند التمرير ================== */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.about-card, .service, .agent-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

<template>
  <div class="secteurs-page">
    <NavBar />

    <!-- ── HERO DYNAMIQUE ── -->
    <section class="sp-hero">
      <div class="sp-hero__img"></div>
      <div class="sp-hero__overlay"></div>
      <!--<div class="sp-hero__bg">SIERRA</div>-->
      <div class="sp-hero__content">
        <nav class="sp-breadcrumb">
          <router-link to="/">Accueil</router-link>
          <span>/</span>
          <span>Secteurs</span>
        </nav>
        <p class="sp-hero__label">Expertise Terrain & Sûreté</p>
        <h1 class="sp-hero__title">
          La sécurité<br />
          <span class="sp-hero__stroke">sans compromis.</span>
        </h1>
        <p class="sp-hero__sub">
          Biens vacants, chantiers BTP, locaux professionnels —<br class="sp-hero__br"/>
          Sierra Sécurité protège chaque secteur avec des agents certifiés CNAPS.
        </p>
        <div class="sp-hero__stats">
          <div class="stat-item">
            <span class="stat-num">48h</span>
            <span class="stat-lab">Déploiement</span>
          </div>
          <div class="stat-sep"></div>
          <div class="stat-item">
            <span class="stat-num">92%</span>
            <span class="stat-lab">Inter &lt; 45min</span>
          </div>
          <div class="stat-sep"></div>
          <div class="stat-item">
            <span class="stat-num">0</span>
            <span class="stat-lab">Squat constaté</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── SECTEUR 01 : BIENS VACANTS ── -->
    <section class="sp-sector" ref="vacantRef">
      <div class="sp-sector__container">
        <div class="sp-sector__header reveal" :class="{ visible: vacantVis }">
          <span class="sp-sector__num">01</span>
          <div class="sp-sector__main-title">
            <p class="sp-label">Domaine d'intervention</p>
            <h2 class="sp-sector__title">Biens vacants &amp; inoccupés</h2>
          </div>
        </div>

        <div class="sp-sector__grid">
          <!-- Analyse des risques -->
          <div class="sp-card sp-card--dark reveal reveal-delay-1" :class="{ visible: vacantVis }">
            <h3 class="sp-card__title">Pourquoi sécuriser ?</h3>
            <p class="sp-card__desc">Un bien vide est une cible immédiate pour les squats et le vandalisme.</p>
            <div class="sp-risks-list">
              <div v-for="r in vacantRisks" :key="r.label" class="risk-row">
                <span class="risk-icon" v-html="r.icon"></span>
                <div>
                  <p class="risk-label">{{ r.label }}</p>
                  <p class="risk-text">{{ r.text }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Options spécifiques -->
          <div class="sp-card reveal reveal-delay-2" :class="{ visible: vacantVis }">
            <h3 class="sp-card__title">Solutions Premium</h3>
            <div class="sp-options-grid">
              <div class="opt-item">
                <p class="opt-name">Porte Blindée Anti-Squat</p>
                <p class="opt-detail">Certifiée A2P BP1, installation sans travaux en 48h. Location flexible.</p>
              </div>
              <div class="opt-item">
                <p class="opt-name">Gardiennage & Rondes</p>
                <p class="opt-detail">Présence physique dissuasive et contrôles aléatoires par agents agréés CNAPS.</p>
              </div>
              <div class="opt-item">
                <p class="opt-name">Alarme AJAX Autonome</p>
                <p class="opt-detail">Fonctionne sans courant ni internet. Télésurveillance APSAD P3.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── SECTEUR 02 : CHANTIERS ── -->
    <section class="sp-sector sp-sector--alt" ref="chantierRef">
      <div class="sp-sector__container">
        <div class="sp-sector__header reveal" :class="{ visible: chantierVis }">
          <span class="sp-sector__num">02</span>
          <div class="sp-sector__main-title">
            <p class="sp-label">Domaine d'intervention</p>
            <h2 class="sp-sector__title">Chantiers &amp; Sites BTP</h2>
          </div>
        </div>

        <div class="sp-sector__grid">
          <!-- Menaces BTP -->
          <div class="sp-card sp-card--dark reveal reveal-delay-1" :class="{ visible: chantierVis }">
            <h3 class="sp-card__title">L'enjeu financier</h3>
            <p class="sp-card__desc">Le BTP perd plus d'un milliard d'euros par an en vols et dégradations.</p>
            <div class="sp-risks-list">
              <div v-for="r in chantierRisks" :key="r.label" class="risk-row">
                <span class="risk-icon" v-html="r.icon"></span>
                <div>
                  <p class="risk-label">{{ r.label }}</p>
                  <p class="risk-text">{{ r.text }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Options Chantiers -->
          <div class="sp-card reveal reveal-delay-2" :class="{ visible: chantierVis }">
            <h3 class="sp-card__title">Dispositifs Mobiles</h3>
            <div class="sp-options-grid">
              <div class="opt-item">
                <p class="opt-name">Vidéosurveillance IA</p>
                <p class="opt-detail">Caméras HD/4K Full Color. Vision nocturne 50m. Analyse de mouvement par IA.</p>
              </div>
              <div class="opt-item">
                <p class="opt-name">Gardiennage Cynophile</p>
                <p class="opt-detail">Protection renforcée de nuit et zones ouvertes par binômes maître-chien.</p>
              </div>
              <div class="opt-item">
                <p class="opt-name">Pack Tranquillité 360°</p>
                <p class="opt-detail">Diagnostic en 24h, installation express et maintenance continue incluse.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── FAQ SECTION ── -->
    <section class="sp-faq" ref="faqRef">
      <div class="sp-faq__container">
        <div class="sp-faq__header reveal" :class="{ visible: faqVis }">
          <p class="sp-label">Questions Fréquentes</p>
          <h2 class="sp-faq__title">Tout savoir sur<br/>notre expertise</h2>
        </div>

        <div class="sp-faq__list reveal reveal-delay-1" :class="{ visible: faqVis }">
          <div
            v-for="(q, idx) in faqItems"
            :key="idx"
            class="faq-item"
            :class="{ active: activeFaq === idx }"
          >
            <button class="faq-item__trigger" @click="activeFaq = activeFaq === idx ? null : idx">
              <span class="faq-item__left">
                <span class="faq-item__icon-wrap" v-html="q.icon"></span>
                <span class="faq-item__q">{{ q.question }}</span>
              </span>
              <svg class="faq-item__chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
            <Transition
              @enter="onFaqEnter"
              @after-enter="onFaqAfterEnter"
              @leave="onFaqLeave"
            >
              <div v-if="activeFaq === idx" class="faq-item__body">
                <p class="faq-item__a">{{ q.answer }}</p>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CTA FINAL ── -->
    <section class="sp-cta">
      <div class="sp-cta__container">
        <h2 class="sp-cta__title">Protégez vos actifs dès aujourd'hui</h2>
        <p class="sp-cta__sub">
          Nos experts analysent votre situation et vous proposent un dispositif adapté à votre secteur et votre budget.
        </p>
        <div class="sp-cta__actions">
          <router-link to="/contact" class="sp-cta__btn-primary">
            Demander un devis
          </router-link>
          <a href="tel:0782564979" class="sp-cta__btn-link">
            Nous appeler →
          </a>
        </div>
      </div>
    </section>

    <FooterSection />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NavBar        from '../components/NavBar.vue'
import FooterSection from '../components/FooterSection.vue'

// --- ICONS ---
const iconSquat  = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>`
const iconLegal  = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`
const iconMoney  = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`
const iconVol    = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="2"/></svg>`
const iconDelay  = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 7v5l3 3"/></svg>`

const vacantRisks = [
  { icon: iconSquat, label: 'Squats illégaux', text: 'Blocage judiciaire de plusieurs mois et procédures d\'expulsion lourdes.' },
  { icon: iconLegal, label: 'Risque Juridique', text: 'Perte de rentabilité et responsabilité engagée en cas d\'accident.' },
  { icon: iconMoney, label: 'Frais de remise en état', text: 'Vandalisme et incendie impactant directement la valeur de votre actif.' },
]

const chantierRisks = [
  { icon: iconVol,   label: 'Vols de matériaux', text: 'Cuivre, câbles et outillage : des cibles prioritaires pour les réseaux organisés.' },
  { icon: iconDelay, label: 'Retards de livraison', text: 'Un seul incident peut stopper les travaux et faire exploser vos délais contractuels.' },
  { icon: iconMoney, label: 'Surcoûts imprévus', text: 'Nettoyage, réparations et remplacement de matériel non budgétés.' },
]

const faqItems = [
  {
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 7v5l3 3"/></svg>`,
    question: "En combien de temps pouvez-vous intervenir ?",
    answer: "Nous garantissons une sécurisation effective en moins de 48h partout en Île-de-France, de la signature du devis à l'installation."
  },
  {
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L3 7v6c0 5.25 3.75 10.15 9 11.5C17.25 23.15 21 18.25 21 13V7L12 2z"/></svg>`,
    question: "L'alarme fonctionne-t-elle sans électricité ?",
    answer: "Oui, nos systèmes AJAX disposent d'une batterie de secours haute capacité et d'une double transmission GSM pour rester opérationnels en toutes circonstances."
  },
  {
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>`,
    question: "Puis-je louer le matériel pour une courte durée ?",
    answer: "Absolument. Nous proposons des solutions de location flexibles adaptées aux chantiers temporaires ou aux biens entre deux locataires."
  },
  {
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`,
    question: "Vos solutions sont-elles reconnues légalement ?",
    answer: "Oui, l'installation d'un dispositif de sécurité (alarme + porte anti-squat) renforce votre légitimité juridique en cas d'intrusion avérée."
  }
]

const activeFaq = ref(0)

function onFaqEnter(el) {
  el.style.height = '0'
  el.style.overflow = 'hidden'
  el.offsetHeight
  el.style.transition = 'height 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
  el.style.height = el.scrollHeight + 'px'
}
function onFaqAfterEnter(el) {
  el.style.height = 'auto'
  el.style.overflow = ''
  el.style.transition = ''
}
function onFaqLeave(el) {
  el.style.height = el.scrollHeight + 'px'
  el.style.overflow = 'hidden'
  el.offsetHeight
  el.style.transition = 'height 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
  el.style.height = '0'
}
const vacantRef = ref(null);   const vacantVis   = ref(false)
const chantierRef = ref(null); const chantierVis = ref(false)
const faqRef = ref(null);      const faqVis      = ref(false)

function observe(el, flag) {
  if (!el) return
  const obs = new IntersectionObserver(
    ([e]) => { if (e.isIntersecting) { flag.value = true; obs.disconnect() } },
    { threshold: 0.1 }
  )
  obs.observe(el)
}

onMounted(() => {
  observe(vacantRef.value,   vacantVis)
  observe(chantierRef.value, chantierVis)
  observe(faqRef.value,      faqVis)
})
</script>

<style scoped>
.secteurs-page { background: var(--color-bg); color: var(--color-text); }

/* --- HERO --- */
.sp-hero {
  height: 100vh;
  min-height: 700px;
  display: flex;
  align-items: flex-end;
  position: relative;
  overflow: hidden;
}

.sp-hero__img {
  position: absolute;
  inset: 0;
  background-image: url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80');
  background-size: cover;
  background-position: center 30%;
  z-index: 0;
  transform: scale(1.04);
  animation: hero-zoom 12s ease-out forwards;
}

@keyframes hero-zoom {
  from { transform: scale(1.04); }
  to   { transform: scale(1); }
}

.sp-hero__overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to top,   rgba(8, 8, 8, 1) 0%, rgba(8, 8, 8, 0.75) 40%, rgba(8, 8, 8, 0.15) 100%),
    linear-gradient(to bottom, rgba(8, 8, 8, 0.7) 0%, transparent 20%),
    linear-gradient(to right, rgba(8, 8, 8, 0.5) 0%, transparent 70%);
  z-index: 1;
}

.sp-hero__bg {
  position: absolute;
  right: -5%;
  top: 50%;
  transform: translateY(-50%);
  font-family: var(--font-display);
  font-size: 35vw;
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.04);
  line-height: 1;
  pointer-events: none;
  z-index: 2;
}

.sp-hero__content {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 0px 80px;
  position: relative;
  z-index: 3;
  width: 100%;
}

.sp-breadcrumb { display: flex; gap: 8px; margin-bottom: 40px; }
.sp-breadcrumb a, .sp-breadcrumb span { 
  font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; color: var(--color-muted); text-decoration: none;
}
.sp-breadcrumb span:last-child { color: var(--color-gold); }

.sp-hero__label { font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; color: var(--color-gold); margin-bottom: 16px; }

.sp-hero__title {
  font-family: var(--font-display);
  font-size: clamp(48px, 7vw, 92px);
  font-weight: 800;
  line-height: 0.9;
  text-transform: uppercase;
  color: var(--color-white);
  margin-bottom: 32px;
}

.sp-hero__stroke { -webkit-text-stroke: 1.5px var(--color-gold); color: transparent; }

.sp-hero__sub {
  font-family: var(--font-body);
  font-size: 18px;
  color: var(--color-muted);
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 56px;
  font-weight: 300;
}

.sp-hero__stats { display: flex; gap: 64px; }
.stat-item { display: flex; flex-direction: column; }
.stat-num { font-family: var(--font-display); font-size: 32px; font-weight: 700; color: var(--color-gold); }
.stat-lab { font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-muted); margin-top: 4px; }
.stat-sep { width: 1px; height: 40px; background: var(--color-border); align-self: center; }

/* --- SECTORS --- */
.sp-sector__intro-title {
  font-family: var(--font-display);
  font-size: clamp(11px, 1vw, 13px);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: var(--color-muted);
  margin-bottom: 60px;
}

.sp-sector { padding: 140px 0; border-top: 1px solid var(--color-border); }
.sp-sector--alt { background: var(--color-bg-2); }

.sp-sector__container { max-width: 1280px; margin: 0 auto; padding: 0 80px; }

.sp-sector__header { display: flex; gap: 40px; align-items: flex-start; margin-bottom: 80px; }
.sp-sector__num {
  font-family: var(--font-display);
  font-size: 80px;
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 1px rgba(201, 162, 96, 0.3);
  line-height: 1;
}

.sp-sector__title {
  font-family: var(--font-display);
  font-size: clamp(32px, 4vw, 56px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  line-height: 1;
}

.sp-sector__grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 40px; }

.sp-card {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  padding: 48px;
  display: flex;
  flex-direction: column;
}

.sp-card--dark { background: rgba(255, 255, 255, 0.02); }

.sp-card__title {
  font-family: var(--font-display);
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-gold);
  margin-bottom: 16px;
}

.sp-card__desc { font-size: 15px; color: var(--color-muted); margin-bottom: 40px; line-height: 1.5; font-weight: 300; }

/* Risks List */
.sp-risks-list { display: flex; flex-direction: column; gap: 24px; }
.risk-row { display: flex; gap: 20px; }
.risk-icon { color: var(--color-gold); opacity: 0.8; margin-top: 2px; }
.risk-label { font-size: 13px; font-weight: 600; text-transform: uppercase; color: var(--color-white); margin-bottom: 4px; }
.risk-text { font-size: 13px; color: var(--color-muted); line-height: 1.5; font-weight: 300; }

/* Options Grid */
.sp-options-grid { display: flex; flex-direction: column; gap: 32px; }
.opt-item { border-left: 1.5px solid var(--color-gold); padding-left: 24px; }
.opt-name { font-size: 14px; font-weight: 600; color: var(--color-white); margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.05em; }
.opt-detail { font-size: 13px; color: var(--color-muted); line-height: 1.5; font-weight: 300; }


/* --- FAQ --- */
.sp-faq { padding: 140px 0; background: var(--color-bg); }
.sp-faq__container { max-width: 860px; margin: 0 auto; padding: 0 40px; }
.sp-faq__header { text-align: center; margin-bottom: 80px; }
.sp-faq__title {
  font-family: var(--font-display);
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  line-height: 1.1;
  margin-top: 16px;
}

.sp-faq__list { display: flex; flex-direction: column; }

.faq-item { border-bottom: 1px solid var(--color-border); }

.faq-item__trigger {
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;
  padding: 18px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  text-align: left;
}

.faq-item__q {
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 600;
  color: var(--color-white);
  line-height: 1.4;
}

.faq-item__left {
  display: flex;
  align-items: center;
  gap: 14px;
}

.faq-item__icon-wrap {
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  color: var(--color-muted);
  transition: border-color 0.2s, color 0.2s;
}

.faq-item.active .faq-item__icon-wrap {
  border-color: var(--color-gold);
  color: var(--color-gold);
}

.faq-item__chevron {
  flex-shrink: 0;
  color: var(--color-white);
  opacity: 0.6;
  transition: transform 0.2s ease;
}

.faq-item.active .faq-item__chevron {
  transform: rotate(180deg);
  opacity: 1;
}

.faq-item__body { overflow: hidden; }

.faq-item__a {
  font-size: 14px;
  color: var(--color-muted);
  line-height: 1.7;
  font-weight: 300;
  padding-bottom: 16px;
}

/* --- CTA --- */
.sp-cta {
  padding: 80px 0 120px;
  border-top: 1px solid var(--color-border);
}

.sp-cta__container {
  max-width: 860px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.sp-cta__title {
  font-family: var(--font-display);
  font-size: clamp(28px, 3.5vw, 44px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  line-height: 1.1;
  margin: 0;
}

.sp-cta__sub {
  font-size: 15px;
  color: var(--color-muted);
  line-height: 1.6;
  font-weight: 300;
  max-width: 560px;
  margin: 0;
}

.sp-cta__actions {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
}

.sp-cta__btn-primary {
  background: var(--color-gold);
  color: var(--color-bg);
  padding: 10px 20px;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: opacity 0.2s;
  text-transform: uppercase;
}
.sp-cta__btn-primary:hover { opacity: 0.88; }

.sp-cta__btn-link {
  padding: 10px 16px;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  color: var(--color-muted);
  text-decoration: none;
  transition: color 0.2s;
}
.sp-cta__btn-link:hover { color: var(--color-gold); }

/* --- UTILS --- */
.reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); }
.reveal.visible { opacity: 1; transform: none; }
.reveal-delay-1 { transition-delay: 0.2s; }
.reveal-delay-2 { transition-delay: 0.4s; }

/* --- RESPONSIVE --- */
@media (max-width: 1024px) {
  .sp-hero__content, .sp-sector__container, .sp-cta__container { padding: 0 40px; }
  .sp-sector__grid { grid-template-columns: 1fr; }
  .sp-hero__stats { gap: 32px; }
}

@media (max-width: 768px) {
  .sp-hero__br { display: none; }
  .sp-hero { height: auto; padding: 120px 0 80px; }
  .sp-hero__content, .sp-sector__container, .sp-cta__container { padding: 0 24px; }
  .sp-hero__title { font-size: 42px; }
  .sp-hero__stats { flex-direction: row; gap: 0; justify-content: space-between; }
  .stat-sep { width: 1px; height: 32px; align-self: center; }
  .stat-num { font-size: 24px; }
  .stat-item { align-items: center; }
  .sp-sector { padding: 80px 0; }
  .sp-sector__header { gap: 20px; margin-bottom: 48px; }
  .sp-sector__num { font-size: 48px; }
  .sp-card { padding: 32px 24px; }
  .sp-cta__container { padding: 0 24px; }
  .sp-cta__actions { flex-wrap: wrap; }
  .sp-faq { padding: 80px 0; }
}
</style>

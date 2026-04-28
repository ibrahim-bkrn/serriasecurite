<template>
  <div class="vs-page">
    <NavBar />

    <!-- ── HERO ── -->
    <section class="vs-hero">
      <img :src="camImg" alt="" class="vs-hero__cam vs-hero__cam--left" />
      <div class="vs-hero__center">
        <p class="vs-hero__label">Île-de-France · Certifié AJAX · CNIL / RGPD</p>
        <h1 class="vs-hero__title">
          Installation de caméras<br />
          <span class="vs-hero__title-gold">vidéosurveillance</span>
        </h1>
        <router-link to="/contact" class="vs-hero__cta">
          Demander un devis gratuit
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </router-link>
      </div>
      <img :src="camImg" alt="" class="vs-hero__cam vs-hero__cam--right" />
    </section>

    <!-- ── 4 ARGUMENTS ── -->
    <div class="vs-args">
      <div v-for="arg in args" :key="arg.label" class="vs-arg">
        <span class="vs-arg__icon" v-html="arg.icon"></span>
        <span class="vs-arg__label">{{ arg.label }}</span>
      </div>
    </div>

    <!-- ── RÉALISATIONS ── -->
    <section class="vs-real">
      <div class="vs-real__header">
        <div class="vs-real__header-top">
          <p class="vs-label">Nos réalisations</p>
          <h2 class="vs-real__title">CAMÉRAS INSTALLÉES PAR SIERRA SÉCURITÉ</h2>
        </div>
        <p class="vs-real__sub">Chaque installation est réalisée par nos techniciens certifiés, en Île-de-France.</p>
      </div>
      <div class="vs-real__columns">
        <div class="vs-real__col">
          <div class="vs-real__track vs-real__track--1">
            <img v-for="(img, i) in col1" :key="'a'+i" :src="img" alt="" class="vs-real__img" />
            <img v-for="(img, i) in col1" :key="'b'+i" :src="img" alt="" class="vs-real__img" />
          </div>
        </div>
        <div class="vs-real__col">
          <div class="vs-real__track vs-real__track--2">
            <img v-for="(img, i) in col2" :key="'a'+i" :src="img" alt="" class="vs-real__img" />
            <img v-for="(img, i) in col2" :key="'b'+i" :src="img" alt="" class="vs-real__img" />
          </div>
        </div>
        <div class="vs-real__col vs-real__col--hide-mobile">
          <div class="vs-real__track vs-real__track--3">
            <img v-for="(img, i) in col3" :key="'a'+i" :src="img" alt="" class="vs-real__img" />
            <img v-for="(img, i) in col3" :key="'b'+i" :src="img" alt="" class="vs-real__img" />
          </div>
        </div>
      </div>
    </section>


    <!-- ── IA ── -->
    <section class="vs-ia">
      <div class="vs-ia__container">
        <div class="vs-real__header-top">
          <p class="vs-label">Technologie</p>
          <h2 class="vs-real__title">DÉTECTION INTELLIGENTE PAR INTELLIGENCE ARTIFICIELLE</h2>
        </div>
        <p class="vs-real__sub" style="margin-bottom: 48px;">Nos systèmes analysent en temps réel chaque image pour ne vous alerter que sur l'essentiel.</p>
        <div class="vs-ia__media">
          <video class="vs-ia__video" autoplay muted loop playsinline>
            <source :src="videoSrc" type="video/webm" />
          </video>
          <div class="vs-ia__features">
            <div v-for="feat in iaFeatures" :key="feat.title" class="vs-ia__feat">
              <span class="vs-ia__feat-icon" v-html="feat.icon"></span>
              <div>
                <h3 class="vs-ia__feat-title">{{ feat.title }}</h3>
                <p class="vs-ia__feat-desc">{{ feat.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── POUR QUI ── -->
    <section class="vs-pourqui">
      <div class="vs-pourqui__header">
        <p class="vs-label">Pour qui ?</p>
        <h2 class="vs-pourqui__main-title">PARTICULIERS OU PROFESSIONNELS</h2>
        <p class="vs-pourqui__main-sub">Une solution adaptée à chaque environnement, installée en 48h.</p>
      </div>
      <div class="vs-pourqui__cards">
        <div class="vs-pourqui__card">
          <div class="vs-pourqui__card-head">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            <h3 class="vs-pourqui__card-title">PARTICULIERS</h3>
          </div>
          <ul class="vs-pourqui__list">
            <li v-for="p in particuliers" :key="p">{{ p }}</li>
          </ul>
          <router-link to="/contact" class="vs-pourqui__cta">
            Surveiller mon domicile
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </router-link>
        </div>
        <div class="vs-pourqui__card">
          <div class="vs-pourqui__card-head">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
            <h3 class="vs-pourqui__card-title">PROFESSIONNELS</h3>
          </div>
          <ul class="vs-pourqui__list">
            <li v-for="p in professionnels" :key="p">{{ p }}</li>
          </ul>
          <router-link to="/contact" class="vs-pourqui__cta">
            Sécuriser mes locaux
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- ── MÉTHODE ── -->
    <section class="vs-method">
      <div class="vs-method__container">
        <div class="vs-method__header">
          <p class="vs-label">Notre process</p>
          <h2 class="vs-title">INSTALLATION EN 4 ÉTAPES</h2>
        </div>
        <div class="vs-method__steps">
          <div v-for="(step, i) in steps" :key="step.title" class="vs-step">
            <div class="vs-step__num">{{ String(i + 1).padStart(2, '0') }}</div>
            <div class="vs-step__body">
              <h3 class="vs-step__title">{{ step.title }}</h3>
              <p class="vs-step__text">{{ step.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <PageCTA
      label="Prêt à sécuriser votre site ?"
      title="Installation clé en main en 48h."
      subtitle="Devis gratuit · Certifié AJAX · CNIL/RGPD · Toute l'Île-de-France"
    />

    <FooterSection />
  </div>
</template>

<script setup>
import NavBar        from '../../components/NavBar.vue'
import FooterSection from '../../components/FooterSection.vue'
import PageCTA       from '../../components/PageCTA.vue'
import videoSrc     from '../../assets/video/camera_relay_siren_cef65a216e.webm'
/* à changer */
import camImg      from '../../assets/photos/turret-cam-2.png'


import real1  from '../../assets/photos/real-14.jpeg'
import real2  from '../../assets/photos/real-15.jpeg'
import real3  from '../../assets/photos/real-14.jpeg'
import real4  from '../../assets/photos/real-15.jpeg'
import real5  from '../../assets/photos/real-14.jpeg'
import real6  from '../../assets/photos/real-15.jpeg'
import real7  from '../../assets/photos/real-14.jpeg'
import real8  from '../../assets/photos/real-15.jpeg'
import real9  from '../../assets/photos/real-14.jpeg'
import real10 from '../../assets/photos/real-15.jpeg'
import real11 from '../../assets/photos/real-14.jpeg'
import real12 from '../../assets/photos/real-15.jpeg'

const allReal = [real1, real2, real3, real4, real5, real6, real7, real8, real9, real10, real11, real12]
const col1 = allReal.slice(0, 4)
const col2 = allReal.slice(4, 8)
const col3 = allReal.slice(8, 12)

const args = [
  {
    label: 'Caméras HD / 4K',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.889L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/></svg>',
  },
  {
    label: 'Accès à distance 24/7',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="17" r="1" fill="currentColor"/></svg>',
  },
  {
    label: 'Installation en 48h',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  },
  {
    label: 'Maintenance & SAV 24/7',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>',
  },
]


const iaFeatures = [
  {
    title: 'Détection de mouvements',
    desc: 'Alertes immédiates uniquement sur détection réelle — humains et véhicules.',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
  },
  {
    title: 'Reconnaissance de formes',
    desc: 'Distingue humains, véhicules et animaux pour des alertes ciblées.',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>',
  },
  {
    title: 'Alertes ciblées',
    desc: 'Notifications configurables selon zones, horaires et comportements détectés.',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg>',
  },
  {
    title: 'Zéro fausses alertes',
    desc: 'Filtrage intelligent qui élimine les déclenchements parasites (feuilles, lumière).',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="20 6 9 17 4 12"/></svg>',
  },
]

const particuliers = [
  'Sécurisation jardin, garage, terrasse',
  'Alertes immédiates sur smartphone',
  'Application mobile simple et intuitive',
  'Vision nocturne ultra claire',
  'Intégration domotique possible',
]

const professionnels = [
  'Commerces, bureaux, entrepôts',
  'Surveillance flux et zones sensibles',
  'Enregistrement légal — conformité RGPD',
  'Intégration alarme AJAX',
  'Télésurveillance APSAD P3 disponible',
]

const steps = [
  { title: 'Audit & devis gratuit', text: 'Analyse de votre site, identification des zones stratégiques, définition du dispositif optimal.' },
  { title: 'Installation rapide & propre', text: 'Caméras posées sans gêner votre activité. Câblage discret ou sans fil selon configuration.' },
  { title: 'Configuration & formation', text: 'Paramétrage complet, prise en main de l\'application, formation immédiate sur site.' },
  { title: 'Maintenance & assistance 24/7', text: 'Support technique disponible à toute heure. Mises à jour et interventions régulières.' },
]

</script>

<style scoped>
.vs-page { background: var(--color-bg); }

/* ── SHARED ── */
.vs-label {
  font-family: var(--font-body);
  font-size: 14px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 16px;
  display: block;
}

.vs-label--light { color: rgba(201,162,96,0.6); }

.vs-title {
  font-family: var(--font-display);
  font-size: clamp(36px, 4vw, 64px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  line-height: 1.02;
  letter-spacing: 0.02em;
}

/* ── HERO ── */
.vs-hero {
  min-height: 70vh;
  display: grid;
  grid-template-columns: 1fr 1.8fr 1fr;
  align-items: center;
  padding-top: 42px;
  overflow: hidden;
}

.vs-hero__cam {
  width: 100%;
  max-width: 600px;
  height: auto;
  display: block;
}

.vs-hero__cam--left {
  transform: scaleX(-1) ;
  justify-self: end;
}

.vs-hero__cam--right {
  justify-self: start;
}

.vs-hero__center {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 28px;
  padding: 0 10px;
  z-index: 2;
}

.vs-hero__label {
  font-family: var(--font-body);
  font-size: 14px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-gold);
}

.vs-hero__title {
  font-family: var(--font-display);
  font-size: clamp(36px, 4vw, 80px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  line-height: 1.05;
  letter-spacing: -0.02em;
}

.vs-hero__title-gold { color: var(--color-gold); }

.vs-hero__cta {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 32px;
  background: var(--color-gold);
  color: var(--color-bg);
  text-decoration: none;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: opacity 0.2s;
}

.vs-hero__cta:hover { opacity: 0.85; }

/* ── 4 ARGUMENTS ── */
.vs-args {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.vs-arg {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  padding: 48px 24px;
  border-right: 1px solid var(--color-border);
  text-align: center;
  transition: background 0.3s;
}

.vs-arg:last-child { border-right: none; }
.vs-arg:hover { background: rgba(201,162,96,0.04); }

.vs-arg__icon { color: var(--color-gold); display: flex; }

.vs-arg__label {
  font-family: var(--font-body);
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text);
}

/* ── RÉALISATIONS ── */
.vs-real {
  padding: 120px 80px;
  border-bottom: 1px solid var(--color-border);
}

.vs-real__header { margin-bottom: 48px; }

.vs-real__header-top {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 12px;
}

.vs-real__title {
  font-family: var(--font-display);
  font-size: clamp(22px, 4vw, 50px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  letter-spacing: 0em;
  line-height: 1.05;
}

.vs-real__sub {
  font-family: var(--font-body);
  font-size: 20px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.6;
}

@media (max-width:900px){
  .vs-real__sub {
    font-size: 16px;
  }
}

.vs-real__columns {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  max-height: 480px;
  overflow: hidden;
  mask-image: linear-gradient(to bottom, transparent, black 12%, black 88%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 12%, black 88%, transparent);
}

.vs-real__col { overflow: hidden; }

.vs-real__track {
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation: scrollUp 20s linear infinite;
}

.vs-real__track--2 { animation-duration: 26s; }
.vs-real__track--3 { animation-duration: 22s; }

@keyframes scrollUp {
  0%   { transform: translateY(0); }
  100% { transform: translateY(-50%); }
}

.vs-real__img {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  display: block;
  filter: saturate(0.3) brightness(0.85);
  transition: filter 0.4s;
}

.vs-real__img:hover { filter: saturate(0.7) brightness(1); }


/* ── IA ── */
.vs-ia {
  background: var(--color-bg-2);
  border-bottom: 1px solid var(--color-border);
  padding: 120px 0;
}

.vs-ia__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;
}

.vs-ia__media {
  display: flex;
  flex-direction: column;
}

.vs-ia__video {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  display: block;
  background: #111;
  border: 1px solid var(--color-border);
  border-bottom: none;
}

.vs-ia__features {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: var(--color-border);
  gap: 1px;
  border: 1px solid var(--color-border);
}

.vs-ia__feat {
  background: var(--color-bg);
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: background 0.3s;
}

.vs-ia__feat:hover { background: rgba(201,162,96,0.05); }

.vs-ia__feat-icon { color: var(--color-gold); }

.vs-ia__feat-title {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-white);
  letter-spacing: 0.04em;
}

.vs-ia__feat-desc {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.65;
}

/* ── POUR QUI ── */
.vs-pourqui {
  padding: 120px 80px;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.vs-pourqui__header {
  text-align: center;
  margin-bottom: 64px;
}

.vs-pourqui__main-title {
  font-family: var(--font-display);
  font-size: clamp(36px, 4vw, 64px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  line-height: 1.02;
  letter-spacing: 0.02em;
  margin-bottom: 16px;
}

.vs-pourqui__main-sub {
  font-family: var(--font-body);
  font-size: 19px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.7;
}

.vs-pourqui__cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  width: 100%;
  max-width: 960px;
}

.vs-pourqui__card {
  border: 1px solid rgba(201,162,96,0.2);
  padding: 56px 48px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  transition: border-color 0.3s;
}

.vs-pourqui__card:hover { border-color: rgba(201,162,96,0.5); }

.vs-pourqui__card-head {
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: var(--color-gold);
}

.vs-pourqui__card-title {
  font-family: var(--font-display);
  font-size: 32px;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  letter-spacing: 0.04em;
}

.vs-pourqui__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.vs-pourqui__list li {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 300;
  color: var(--color-text);
  padding: 16px 0;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  display: flex;
  align-items: center;
  gap: 16px;
}

.vs-pourqui__list li:first-child { border-top: 1px solid rgba(255,255,255,0.06); }

.vs-pourqui__list li::before {
  content: '';
  width: 5px;
  height: 5px;
  background: var(--color-gold);
  border-radius: 50%;
  flex-shrink: 0;
}

.vs-pourqui__cta {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  align-self: flex-start;
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-gold);
  text-decoration: none;
  border-bottom: 1px solid rgba(201,162,96,0.3);
  padding-bottom: 4px;
  transition: gap 0.2s, border-color 0.2s;
}

.vs-pourqui__cta:hover { gap: 18px; border-color: var(--color-gold); }

/* ── MÉTHODE ── */
.vs-method {
  padding: 120px 0;
  border-bottom: 1px solid var(--color-border);
}

.vs-method__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;
}

.vs-method__header { margin-bottom: 72px; }

.vs-step {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 40px;
  padding: 40px 0;
  border-bottom: 1px solid var(--color-border);
  align-items: start;
}

.vs-step:first-of-type { border-top: 1px solid var(--color-border); }

.vs-step__num {
  font-family: var(--font-display);
  font-size: 72px;
  font-weight: 800;
  color: var(--color-gold);
  line-height: 1;
  transition: color 0.3s;
}


.vs-step__title {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-white);
  margin-bottom: 10px;
  letter-spacing: 0.04em;
}

.vs-step__text {
  font-family: var(--font-body);
  font-size: 19px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.7;
}

/* ── RESPONSIVE ── */
@media (max-width: 1024px) {
  .vs-ia__features { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .vs-ia__features { grid-template-columns: 1fr; }
  .vs-real { padding: 80px 40px; }
  .vs-pourqui__col { padding: 80px 40px; }
  .vs-method__container { padding: 0 40px; }
  .vs-testi__container { padding: 0 40px; }
  .vs-ia__container { padding: 0 40px; }
}

@media (max-width: 768px) {
  .vs-hero {
    grid-template-columns: 1fr;
    min-height: auto;
    padding: 100px 24px 60px;
    position: relative;
  }

  .vs-hero__cam--left {
    transform: scaleX(-1);
    max-width: 220px;
    opacity: 0.2;
    position: absolute;
    left: -30px;
    top: 50%;
    translate: 0 -50%;
  }

  .vs-hero__cam--right {
    transform: none;
    max-width: 220px;
    opacity: 0.2;
    position: absolute;
    right: -30px;
    top: 50%;
    translate: 0 -50%;
  }

  .vs-hero__center { padding: 0; }

  .vs-args { grid-template-columns: repeat(2, 1fr); }
  .vs-arg:nth-child(2) { border-right: none; }
  .vs-arg:nth-child(1),
  .vs-arg:nth-child(2) { border-bottom: 1px solid var(--color-border); }

  .vs-real { padding: 72px 24px; }
  .vs-real__columns { grid-template-columns: repeat(2, 1fr); }
  .vs-real__col--hide-mobile { display: none; }

  .vs-ia__container { padding: 0 24px; }
  .vs-ia { padding: 72px 0; }
  .vs-ia__feat { padding: 24px 20px; }

  .vs-pourqui { padding: 72px 24px; }
  .vs-pourqui__cards { grid-template-columns: 1fr; }
  .vs-pourqui__card { padding: 40px 28px; }

  .vs-method__container { padding: 0 24px; }
  .vs-method { padding: 72px 0; }
  .vs-step { grid-template-columns: 80px 1fr; gap: 20px; }
  .vs-step__num { font-size: 48px; }

  .vs-testi__container { padding: 0 24px; }
  .vs-testi { padding: 72px 0; }
  .vs-testi__grid { grid-template-columns: 1fr; }
  .vs-testi__card { padding: 36px 24px; }
}
</style>

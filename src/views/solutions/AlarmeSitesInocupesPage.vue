<template>
  <div class="as-page">
    <NavBar />

    <!-- ── HERO ── -->
    <section class="vs-hero">
      <img :src="hubBpImg" alt="" class="vs-hero__cam vs-hero__cam--left" />
      <div class="vs-hero__center">
        <p class="vs-hero__label">Île-de-France · Autonome · Sans fil · APSAD P3</p>
        <h1 class="vs-hero__title">
          Alarme sites<br />
          <span class="vs-hero__title-gold">inoccupés</span>
        </h1>
        <router-link to="/contact" class="vs-hero__cta">
          Demander un devis gratuit
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </router-link>
      </div>
      <img :src="outdoorImg" alt="" class="vs-hero__cam vs-hero__cam--right" />
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
          <h2 class="vs-real__title">SITES SÉCURISÉS PAR SIERRA SÉCURITÉ</h2>
        </div>
        <p class="vs-real__sub">Chantiers, entrepôts, biens vacants — chaque site devient inaccessible.</p>
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

    <!-- ── 3 PILIERS ── -->
    <section class="vs-ia">
      <div class="vs-ia__container">
        <div class="vs-real__header-top">
          <p class="vs-label">Notre approche</p>
          <h2 class="vs-real__title">3 PILIERS INDISSOCIABLES POUR UNE PROTECTION TOTALE</h2>
        </div>
        <p class="vs-real__sub" style="margin-bottom: 48px;">Alarme autonome, télésurveillance certifiée et intervention physique — trois couches combinées pour zéro faille.</p>
        <div class="vs-ia__media">
          <video class="vs-ia__video" autoplay muted loop playsinline>
            <source :src=videoSrc type="video/mp4" />
          </video>
          <div class="vs-ia__features">
            <div v-for="feat in piliers" :key="feat.title" class="vs-ia__feat">
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
        <h2 class="vs-pourqui__main-title">CHANTIERS OU BIENS VACANTS</h2>
        <p class="vs-pourqui__main-sub">Installation sans travaux en 1h à 3h, opérationnelle immédiatement.</p>
      </div>
      <div class="vs-pourqui__cards">
        <div class="vs-pourqui__card">
          <div class="vs-pourqui__card-head">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 20h20M4 20V10l8-6 8 6v10"/><path d="M10 20v-6h4v6"/></svg>
            <h3 class="vs-pourqui__card-title">CHANTIERS & ENTREPÔTS</h3>
          </div>
          <ul class="vs-pourqui__list">
            <li v-for="p in chantiers" :key="p">{{ p }}</li>
          </ul>
          <router-link to="/contact" class="vs-pourqui__cta">
            Sécuriser mon chantier
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </router-link>
        </div>
        <div class="vs-pourqui__card">
          <div class="vs-pourqui__card-head">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 22V12h6v10"/></svg>
            <h3 class="vs-pourqui__card-title">BIENS VACANTS & SUCCESSIONS</h3>
          </div>
          <ul class="vs-pourqui__list">
            <li v-for="p in biens" :key="p">{{ p }}</li>
          </ul>
          <router-link to="/contact" class="vs-pourqui__cta">
            Protéger mon bien
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
      label="Un site vide est une cible facile."
      title="Avec Sierra, il devient inaccessible."
      subtitle="Devis gratuit · Autonome · Sans travaux · Toute l'Île-de-France"
    />

    <FooterSection />
  </div>
</template>

<script setup>
import NavBar        from '../../components/NavBar.vue'
import FooterSection from '../../components/FooterSection.vue'
import PageCTA       from '../../components/PageCTA.vue'

import hubBpImg   from '../../assets/photos/alarme-sites.png'
import outdoorImg from '../../assets/photos/motion-cam-outdoor.png'
import videoSrc from '../../assets/video/motion_detect_md_0e0478c8d9.webm'

import real1  from '../../assets/photos/real-12.jpeg'
import real2  from '../../assets/photos/gardiennage.jpeg'
import real3  from '../../assets/photos/real-13.jpeg'
import real4  from '../../assets/photos/real-22.jpeg'
import real5  from '../../assets/photos/real-18.jpeg'
import real6  from '../../assets/photos/surveillance2.jpeg'
import real7  from '../../assets/photos/real-24.jpeg'
import real8  from '../../assets/photos/alarme2.jpeg'
import real9  from '../../assets/photos/real-19.jpeg'
import real10 from '../../assets/photos/real-11.jpeg'
import real11 from '../../assets/photos/real-23.jpeg'
import real12 from '../../assets/photos/real-12.jpeg'

const allReal = [real1, real2, real3, real4, real5, real6, real7, real8, real9, real10, real11, real12]
const col1 = allReal.slice(0, 4)
const col2 = allReal.slice(4, 8)
const col3 = allReal.slice(8, 12)

const args = [
  {
    label: 'Sans électricité requise',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
  },
  {
    label: 'Sans Internet requis',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12.55a11 11 0 0114.08 0"/><path d="M1.42 9a16 16 0 0121.16 0"/><path d="M8.53 16.11a6 6 0 016.95 0"/><circle cx="12" cy="20" r="1" fill="currentColor"/></svg>',
  },
  {
    label: 'Installation en 1h à 3h',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  },
  {
    label: 'Intervention immédiate',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  },
]

const piliers = [
  {
    title: 'Alarme autonome',
    desc: 'Hub AJAX BP avec double SIM & batterie. Fonctionne sans électricité ni Internet, certifié Grade 2/3.',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  },
  {
    title: 'Télésurveillance APSAD P3',
    desc: 'Centre certifié SEURITAS, 2 plateformes IDF. Chaque alerte analysée en temps réel par un opérateur.',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
  },
  {
    title: 'Intervention agent',
    desc: 'Mobilisation immédiate de l\'agent le plus proche. Inspection complète et coordination avec les forces de l\'ordre.',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>',
  },
  {
    title: 'Levée de doute photo',
    desc: 'Photos animées envoyées instantanément. Zéro fausse alarme, interventions ciblées uniquement sur menace réelle.',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.889L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/></svg>',
  },
]

const chantiers = [
  'Chantiers BTP en cours ou à l\'arrêt',
  'Entrepôts et zones industrielles',
  'Alarme périmétrique extérieure HD',
  'Intervention sur alerte confirmée',
  'Jusqu\'à 100 dispositifs connectés',
]

const biens = [
  'Appartements et maisons inoccupés',
  'Propriétés en succession ou en vente',
  'Protection anti-squat certifiée',
  'Installation sans dégradation du bien',
  'Résiliation flexible, sans engagement long terme',
]

const steps = [
  { title: 'Audit gratuit sur site', text: 'Analyse des accès, zones sensibles et risques spécifiques à votre site inoccupé.' },
  { title: 'Installation sans travaux', text: 'Système posé en 1h à 3h, sans câblage, sans perçage. Opérationnel immédiatement.' },
  { title: 'Activation télésurveillance', text: 'Connexion au centre SEURITAS APSAD P3. Protocole d\'intervention défini avec vous.' },
  { title: 'Surveillance & rapports 24/7', text: 'Alertes instantanées, compte-rendus d\'intervention avec photos envoyés après chaque événement.' },
]
</script>

<style scoped>
.as-page { background: var(--color-bg); }

.vs-hero {
  min-height: 70vh;
  display: grid;
  grid-template-columns: 1fr 1.3fr 1fr;
  align-items: center;
  padding-top: 72px;
  overflow: hidden;
}

.vs-hero__cam {
  width: 100%;
  max-width: 500px;
  height: auto;
  display: block;
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
  letter-spacing: 0.02em;
}

.vs-hero__title-gold { color: var(--color-gold);}

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

.vs-label {
  font-family: var(--font-body);
  font-size: 14px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 16px;
  display: block;
}

.vs-title {
  font-family: var(--font-display);
  font-size: clamp(36px, 4vw, 64px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  line-height: 1.02;
  letter-spacing: 0.02em;
}

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

.vs-ia__media { display: flex; flex-direction: column; }

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

.vs-pourqui {
  padding: 120px 80px;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.vs-pourqui__header { text-align: center; margin-bottom: 64px; }

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
  font-size: 15px;
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
  font-size: 26px;
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
  font-size: 15px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.7;
}

@media (max-width: 1024px) {
  .vs-ia__features { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .vs-ia__features { grid-template-columns: 1fr; }
  .vs-real { padding: 80px 40px; }
  .vs-pourqui { padding: 80px 40px; }
  .vs-method__container { padding: 0 40px; }
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
  .vs-arg:nth-child(1), .vs-arg:nth-child(2) { border-bottom: 1px solid var(--color-border); }
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
}
</style>

<template>
  <div class="sm-page">
    <NavBar />

    <!-- ── HERO ── -->
    <section class="sm-hero">
      <div class="sm-hero__meta">
        <nav class="sm-hero__breadcrumb">
          <router-link to="/">Accueil</router-link>
          <span>/</span>
          <span>Surveillance matérielle</span>
        </nav>
      </div>

      <div class="sm-hero__center">
        <h1 class="sm-hero__title">
          <span class="sm-hero__title-top">Surveillance</span>
          <span class="sm-hero__title-sep">
            <img :src="nvrImg" alt="" class="sm-hero__sep-img"  />
          </span>
          <span class="sm-hero__title-bottom">Matérielle</span>
        </h1>
      </div>

      <div class="sm-hero__footer">
        <div class="sm-hero__footer-left">
          <p class="sm-hero__sub">
            Caméras HD, alarmes autonomes et télésurveillance — installés en 48h, configurés clé en main, opérationnels 24/7.
          </p>
          <div class="sm-hero__actions">
            <router-link to="/contact" class="sm-cta-primary">
              <span>Demander un devis gratuit</span>
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </router-link>
            <a href="tel:0782564979" class="sm-cta-secondary">Être rappelé</a>
          </div>
        </div>
        <div class="sm-hero__stats">
          <div v-for="stat in heroStats" :key="stat.label" class="sm-hero__stat">
            <span class="sm-hero__stat-num">{{ stat.num }}</span>
            <span class="sm-hero__stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── SERVICE STRIP / TAB NAV ── -->
    <div class="sm-strip">
      <button
        v-for="(svc, i) in services"
        :key="svc.id"
        class="sm-strip__item"
        :class="{ active: activeService === i }"
        @click="activeService = i"
      >
        <div class="sm-strip__content">
          <span class="sm-strip__num">{{ svc.num }}</span>
          <span class="sm-strip__label">{{ svc.label }}</span>
        </div>
        <div class="sm-strip__bar"></div>
      </button>
    </div>

    <!-- ── SERVICE PANELS ── -->
    <div class="sm-panels">
      <Transition name="sm-fade" mode="out-in">
        <div :key="activeService" class="sm-panel">
          <div class="sm-panel__img">
            <img :src="services[activeService].img" :alt="services[activeService].label" />
          </div>
          <div class="sm-panel__text">
            <p class="sm-panel__num">{{ services[activeService].num }}</p>
            <h2 class="sm-panel__title">{{ services[activeService].title }}</h2>
            <p class="sm-panel__desc">{{ services[activeService].desc }}</p>
            <ul class="sm-panel__list">
              <li v-for="point in services[activeService].points" :key="point">
                <span class="sm-panel__dash">—</span>
                {{ point }}
              </li>
            </ul>
            <router-link :to="services[activeService].route" class="sm-panel__cta">
              En savoir plus
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </router-link>
          </div>
        </div>
      </Transition>
    </div>

    <!-- ── MÉTHODE ── -->
    <section class="sm-method" ref="methodRef">
      <div class="sm-method__container">
        <div class="sm-method__header">
          <p class="section-label reveal" :class="{ visible: methodVis }">Notre process</p>
          <h2 class="section-title reveal reveal-delay-1" :class="{ visible: methodVis }">INSTALLATION EN 4 ÉTAPES</h2>
          <p class="sm-method__intro reveal reveal-delay-2" :class="{ visible: methodVis }">
            Pas de matériel posé au hasard. Chaque installation est auditée, configurée et validée avec vous.
          </p>
        </div>
        <div class="sm-method__steps">
          <div
            v-for="(step, i) in steps"
            :key="step.title"
            class="sm-step reveal"
            :class="[`reveal-delay-${i + 1}`, { visible: methodVis }]"
          >
            <div class="sm-step__num">{{ String(i + 1).padStart(2, '0') }}</div>
            <div class="sm-step__body">
              <h3 class="sm-step__title">{{ step.title }}</h3>
              <p class="sm-step__text">{{ step.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--
    <section class="sm-testi" ref="testiRef">
      <div class="sm-testi__container">
        <p class="section-label reveal" :class="{ visible: testiVis }">Ils nous font confiance</p>
        <h2 class="section-title reveal reveal-delay-1" :class="{ visible: testiVis }">TÉMOIGNAGES</h2>
        <div class="sm-testi__grid">
          <div
            v-for="(t, i) in testimonials"
            :key="t.author"
            class="sm-testi__card reveal"
            :class="[`reveal-delay-${i + 2}`, { visible: testiVis }]"
          >
            <div class="sm-testi__stars">
              <svg v-for="s in 5" :key="s" width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <p class="sm-testi__text">« {{ t.text }} »</p>
            <div class="sm-testi__author">
              <span class="sm-testi__name">{{ t.author }}</span>
              <span class="sm-testi__role">{{ t.role }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cs-wrap">
      <div class="cs-card">
        <span class="cs-card__badge">Solution complémentaire</span>
        <h2 class="cs-card__title">Et si vous ajoutez<br />une surveillance humaine ?</h2>
        <p class="cs-card__text">
          La technologie seule ne suffit pas toujours. Nos agents certifiés CNAPS assurent
          présence, dissuasion et intervention immédiate là où les systèmes électroniques ne peuvent pas agir seuls.
        </p>
        <router-link to="/solutions/surveillance-humaine" class="cs-card__cta">
          Découvrir la surveillance humaine
          <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
            <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </router-link>
      </div>
    </section>-->

    <PageCTA
      label="Prêt à sécuriser votre site ?"
      title="Installation clé en main en 48h."
      subtitle="Devis gratuit · Certifié AJAX · CNIL/RGPD · Toute l'Île-de-France"
    />

    <FooterSection />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NavBar        from '../../components/NavBar.vue'
import FooterSection from '../../components/FooterSection.vue'
import PageCTA       from '../../components/PageCTA.vue'

import videoImg  from '../../assets/photos/camera-turret.png'
import alarmeImg from '../../assets/photos/alarme-hub.png'
import sitesImg  from '../../assets/photos/alarme-sites.png'
import nvrImg    from '../../assets/photos/nvr.png'

const activeService = ref(0)

const heroStats = [
  { num: '48h', label: 'Installation garantie' },
  { num: '3',   label: 'Solutions intégrées'   },
  { num: '24/7', label: 'Surveillance active'  },
]

const services = [
  {
    id: 'videosurveillance',
    num: '01',
    label: 'Vidéosurveillance',
    img: videoImg,
    route: '/solutions/videosurveillance',
    title: 'Vidéosurveillance',
    desc: 'Surveillez depuis votre smartphone, 24h/24, avec des alertes précises et zéro fausse alarme.',
    points: [
      'Caméras HD / 4K avec vision nocturne ultra claire',
      'Détection IA — reconnaissance humains et véhicules',
      'Accès à distance sécurisé via application mobile',
      'Enregistrement continu ou sur détection de mouvement',
      'Installation clé en main en moins de 48h',
    ],
  },
  {
    id: 'alarme',
    num: '02',
    label: 'Alarme anti-intrusion',
    img: alarmeImg,
    route: '/solutions/alarme-anti-intrusion',
    title: 'Alarme anti-intrusion',
    desc: 'Détection, télésurveillance et intervention physique — trois couches indissociables.',
    points: [
      'Système AJAX sans fil, sans électricité ni Internet',
      'Télésurveillance 24/7 par centre certifié APSAD P3',
      'Levée de doute photo/vidéo instantanée',
      "Intervention d'un agent sur site dès alarme confirmée",
      'Certifié Grade 2 / Grade 3 selon configuration',
    ],
  },
  {
    id: 'sites-inocupes',
    num: '03',
    label: 'Sites inoccupés',
    img: sitesImg,
    route: '/solutions/alarme-sites-inocupes',
    title: 'Alarme sites inoccupés',
    desc: 'Un site vide est une cible facile. Avec Sierra Sécurité, il devient inaccessible.',
    points: [
      'Installation sans travaux en 1h à 3h',
      'Autonomie complète — aucune électricité ni connexion requise',
      'Détecteurs extérieurs HD avec levée de doute visuelle',
      'Intervention humaine immédiate sur déclenchement',
      'Chantiers, entrepôts, logements vacants, successions',
    ],
  },
]

const steps = [
  { title: 'Audit & devis gratuit', text: 'Analyse de votre site, identification des zones stratégiques et définition du dispositif optimal.' },
  { title: 'Installation rapide & propre', text: 'Techniciens certifiés, pose sans gêner votre activité, câblage discret ou sans fil selon configuration.' },
  { title: 'Configuration & formation', text: 'Paramétrage complet de votre système, prise en main de l\'application, formation immédiate sur site.' },
  { title: 'Maintenance & assistance 24/7', text: 'Support technique disponible à toute heure. Interventions de maintenance et mises à jour régulières.' },
]

const testimonials = [
  {
    text: 'SIERRA nous a installé 6 caméras Hikvision en une journée. Résultat : dissuasion immédiate, vision parfaite depuis mon téléphone. Je recommande.',
    author: 'Responsable commerce',
    role: 'Saint-Denis, 93',
  },
  {
    text: 'Maison isolée sécurisée en 48h avec système AJAX + caméras. Application simple, service réactif, pose propre. Excellent travail.',
    author: 'Propriétaire particulier',
    role: 'Le Raincy, 93',
  },
]

const methodRef = ref(null); const methodVis = ref(false)
const testiRef  = ref(null); const testiVis  = ref(false)

function observe(el, flag) {
  const obs = new IntersectionObserver(
    ([e]) => { if (e.isIntersecting) { flag.value = true; obs.disconnect() } },
    { threshold: 0.1 }
  )
  if (el) obs.observe(el)
}

onMounted(() => {
  observe(methodRef.value, methodVis)
  observe(testiRef.value,  testiVis)
})
</script>

<style scoped>
.sm-page { background: var(--color-bg); }

/* ── HERO ── */
.sm-hero {
  min-height: 620px;
  padding-top: 72px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 0;
}

.sm-hero__meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 80px 0;
  flex-shrink: 0;
}

.sm-hero__breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
}

.sm-hero__breadcrumb a,
.sm-hero__breadcrumb span {
  font-family: var(--font-body);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted);
  text-decoration: none;
}

.sm-hero__breadcrumb span:last-child { color: var(--color-gold); }

.sm-hero__certs {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-body);
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.35);
}

.sm-hero__certs .dot { color: rgba(201,162,96,0.4); }

/* ── BIG TITLE ── */
.sm-hero__center {
  flex: 1;
  display: flex;
  align-items: center;
  padding: 40px 80px;
}

.sm-hero__title {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
  text-align: center;
}

.sm-hero__title-top,
.sm-hero__title-bottom {
  font-family: var(--font-display);
  font-size: clamp(72px, 10vw, 148px);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  line-height: 0.92;
  display: block;
}

.sm-hero__title-top { color: var(--color-white); }

.sm-hero__title-bottom {
  -webkit-text-stroke: 2px rgba(201,162,96,0.45);
  color: transparent;
}

.sm-hero__title-sep {
  display: flex;
  justify-content: center;
  padding: 16px 0;
}

.sm-hero__sep-img {
  height: 280px;
  width: auto;
  object-fit: contain;
  opacity: 1;
  margin-block: -120px;
  z-index: 100;
}

@media (max-width: 900px) {
  .sm-hero__sep-img { 
    height: 180px; 
    margin-block: -80px;
}
}

.sm-hero__sep-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(to right, rgba(201,162,96,0.6), rgba(201,162,96,0.15));
}

.sm-hero__title-sep .sm-hero__sep-line:last-child {
  background: linear-gradient(to left, rgba(201,162,96,0.6), rgba(201,162,96,0.15));
}

.sm-hero__sep-label {
  font-family: var(--font-body);
  font-size: 10px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: rgba(201,162,96,0.7);
  flex-shrink: 0;
}

/* ── HERO FOOTER ── */
.sm-hero__footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 60px;
  padding: 0 80px 48px;
  flex-shrink: 0;
}

.sm-hero__footer-left { max-width: 640px; }

.sm-hero__sub {
  font-family: var(--font-body);
  font-size: 22px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.75;
  margin-bottom: 28px;
}

@media (max-width: 900px) {
  .sm-hero__sub {
    font-size: 19px;
    line-height: 1.5;
    
  }
}

.sm-cta-primary {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 24px;
  background: var(--color-gold);
  color: var(--color-bg);
  text-decoration: none;
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: background 0.2s;
}

.sm-cta-primary:hover { background: var(--color-gold-light); }

.sm-cta-secondary {
  display: inline-flex;
  align-items: center;
  padding: 14px 24px;
  border: 1px solid rgba(255,255,255,0.12);
  color: var(--color-text);
  text-decoration: none;
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: all 0.2s;
}

.sm-cta-secondary:hover {
  border-color: rgba(201,162,96,0.4);
  color: var(--color-gold);
}

/* ── HERO STATS ── */
.sm-hero__stats {
  display: flex;
  gap: 0;
  flex-shrink: 0;
  border: 1px solid var(--color-border);
}

.sm-hero__stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 20px 36px;
  border-right: 1px solid var(--color-border);
}

.sm-hero__stat:last-child { border-right: none; }

.sm-hero__stat-num {
  font-family: var(--font-display);
  font-size: 34px;
  font-weight: 800;
  color: var(--color-gold);
  line-height: 1;
}

.sm-hero__stat-label {
  font-family: var(--font-body);
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-muted);
  white-space: nowrap;
}

/* ── SERVICE STRIP ── */
.sm-strip {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 180px;
  border-top: 1px solid var(--color-border);
}

.sm-strip__item {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border: none;
  border-right: 1px solid var(--color-border);
  padding: 0;
  background: var(--color-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  transition: background 0.3s;
}

.sm-strip__item:last-child { border-right: none; }

.sm-strip__item:hover { background: rgba(201,162,96,0.04); }
.sm-strip__item.active { background: rgba(201,162,96,0.06); }

.sm-strip__overlay { display: none; }

.sm-strip__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.sm-strip__num {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 56px;
  line-height: 1;
  color: rgba(201,162,96,0.2);
  transition: color 0.3s;
}

.sm-strip__item.active .sm-strip__num,
.sm-strip__item:hover .sm-strip__num { color: var(--color-gold); }

.sm-strip__label {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 40px;
  letter-spacing: 0em;
  font-weight: 500;
  color: rgba(255,255,255,0.35);
  transition: color 0.3s;
}

.sm-strip__item.active .sm-strip__label,
.sm-strip__item:hover .sm-strip__label { color: var(--color-white); }

/* gold bottom bar indicator */
.sm-strip__bar {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 2px;
  background: var(--color-gold);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.sm-strip__item.active .sm-strip__bar { transform: scaleX(1); }

/* ── PANELS ── */
.sm-panels {
  border-bottom: 1px solid var(--color-border);
}

.sm-panel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 580px;
}

@media (max-width: 900px) {
  .sm-panel {
    height: 300px;
  }
}

.sm-fade-enter-active,
.sm-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.sm-fade-enter-from { opacity: 0; transform: translateX(12px); }
.sm-fade-leave-to   { opacity: 0; transform: translateX(-8px); }

.sm-panel__img {
  overflow: hidden;
  border-right: 1px solid var(--color-border);
}

.sm-panel__img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  display: block;
  padding: 48px 40px;
  opacity: 0.75;
  transition: opacity 0.4s ease, transform 0.5s ease;
}

.sm-panel__img:hover img {
  opacity: 1;
  transform: scale(1.04);
}

.sm-panel__text {
  padding: 40px 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: auto;
}

.sm-panel__num {
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.22em;
  color: var(--color-gold);
  margin-bottom: 16px;
}

.sm-panel__title {
  font-family: var(--font-display);
  font-size: clamp(28px, 3vw, 44px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  letter-spacing: 0.02em;
  line-height: 1.05;
  margin-bottom: 20px;
}

.sm-panel__desc {
  font-family: var(--font-body);
  font-size: 22px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.7;
  margin-bottom: 20px;
  max-width: 550px;
}

.sm-panel__list {
  list-style: none;
  padding: 0;
  margin: 0 0 40px;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.sm-panel__list li {
  display: flex;
  align-items: baseline;
  gap: 14px;
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 300;
  color: var(--color-text);
  padding: 9px 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

.sm-panel__list li:first-child { border-top: 1px solid rgba(255,255,255,0.05); }

.sm-panel__dash {
  color: var(--color-gold);
  font-weight: 400;
  flex-shrink: 0;
  opacity: 0.7;
}

.sm-panel__cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-gold);
  text-decoration: none;
  border-bottom: 1px solid rgba(201,162,96,0.3);
  padding-bottom: 4px;
  align-self: flex-start;
  transition: gap 0.2s, border-color 0.2s;
}

.sm-panel__cta:hover {
  gap: 16px;
  border-color: var(--color-gold);
}


/* ── MÉTHODE ── */
.sm-method {
  background: var(--color-bg-2);
  border-top: 1px solid var(--color-border);
  padding: 120px 0;
}

.sm-method__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;
}

.sm-method__header { margin-bottom: 72px; }

.sm-method__intro {
  font-size: 15px;
  font-weight: 300;
  color: var(--color-muted);
  max-width: 560px;
  line-height: 1.7;
  margin-top: 16px;
}

.section-label {
  font-family: var(--font-body);
  font-size: 11px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 14px;
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(32px, 3.5vw, 52px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  letter-spacing: 0.02em;
  margin-bottom: 0;
  line-height: 1.05;
}

.sm-step {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 40px;
  padding: 36px 0;
  border-bottom: 1px solid var(--color-border);
  align-items: start;
}

.sm-step:first-of-type { border-top: 1px solid var(--color-border); }

.sm-step__num {
  font-family: var(--font-display);
  font-size: 56px;
  font-weight: 800;
  color: rgba(201,162,96,1);
  line-height: 1;
  transition: color 0.3s;
}

.sm-step:hover .sm-step__num { color: var(--color-gold); }

.sm-step__title {
  font-size: 25px;
  font-weight: 600;
  color: var(--color-white);
  margin-bottom: 8px;
}

.sm-step__text {
  font-size: 20px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.7;
}

/* ── TÉMOIGNAGES ── */
.sm-testi {
  background: var(--color-bg);
  border-top: 1px solid var(--color-border);
  padding: 120px 0;
}

.sm-testi__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;
}

.sm-testi__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;
  background: var(--color-border);
  margin-top: 56px;
}

.sm-testi__card {
  background: var(--color-bg-2);
  padding: 44px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  transition: background 0.3s;
}

.sm-testi__card:hover { background: rgba(201,162,96,0.03); }

.sm-testi__stars { display: flex; gap: 3px; color: var(--color-gold); }

.sm-testi__text {
  font-size: 15px;
  font-weight: 300;
  color: var(--color-text);
  line-height: 1.8;
  font-style: italic;
  flex: 1;
}

.sm-testi__author {
  border-top: 1px solid var(--color-border);
  padding-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.sm-testi__name { font-size: 13px; font-weight: 600; color: var(--color-white); }

.sm-testi__role {
  font-size: 11px;
  font-weight: 300;
  color: var(--color-gold);
  letter-spacing: 0.08em;
}

/* ── CROSS-SELL ── */
.cs-wrap {
  padding: 80px 0;
  background: var(--color-bg);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  justify-content: center;
}

.cs-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid rgba(201,162,96,0.35);
  padding: 56px 80px;
  max-width: 700px;
  width: 100%;
  transition: border-color 0.3s;
}

.cs-card:hover { border-color: rgba(201,162,96,0.6); }

.cs-card__badge {
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-gold);
  border: 1px solid rgba(201,162,96,0.3);
  padding: 4px 14px;
  margin-bottom: 28px;
}

.cs-card__title {
  font-family: var(--font-display);
  font-size: clamp(22px, 2.5vw, 30px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  line-height: 1.15;
  margin-bottom: 14px;
}

.cs-card__text {
  font-size: 14px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.7;
  margin-bottom: 28px;
  max-width: 500px;
}

.cs-card__cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--color-gold);
  color: #000;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 13px 24px;
  text-decoration: none;
  transition: opacity 0.2s;
}

.cs-card__cta:hover { opacity: 0.85; }

/* ── REVEAL ── */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal.visible { opacity: 1; transform: none; }
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }

/* ── RESPONSIVE ── */
@media (max-width: 1200px) {
  .sm-hero__meta,
  .sm-hero__center,
  .sm-hero__footer { padding-left: 40px; padding-right: 40px; }
  .sm-method__container,
  .sm-testi__container { padding: 56px 40px; }
  .sm-pillars { grid-template-columns: 1fr; }
}

@media (max-width: 1024px) {
  .sm-panel { grid-template-columns: 1fr; height: auto; }
  .sm-panel__img { height: 260px; border-right: none; border-bottom: 1px solid var(--color-border); }
  .sm-panel__text { padding: 40px; }
  .sm-hero__stats { display: none; }
}

@media (max-width: 768px) {
  .sm-hero__meta,
  .sm-hero__center,
  .sm-hero__footer { padding-left: 24px; padding-right: 24px; }
  .sm-hero__certs { display: none; }
  .sm-hero__title-top,
  .sm-hero__title-bottom { font-size: clamp(52px, 14vw, 80px); }
  .sm-strip { grid-template-columns: repeat(2, 1fr); height: auto; }
  .sm-strip__item { height: 100px; }
  .sm-strip__item:last-child { grid-column: 1 / -1; }
  .sm-strip__num { font-size: 36px; }
  .sm-strip__label { font-size: 23px; }
  .sm-panel__text { padding: 36px 24px; }
  .sm-method__container,
  .sm-testi__container { padding: 48px 24px; }
  .sm-method { padding: 72px 0; }
  .sm-testi { padding: 72px 0; }
  .sm-testi__grid { grid-template-columns: 1fr; }
  .sm-testi__card { padding: 28px 20px; }
  .sm-step { grid-template-columns: 72px 1fr; gap: 16px; padding: 24px 0; }
  .sm-step__num { font-size: 36px; }
  .sm-porte__options { grid-template-columns: 1fr; }
  .sm-hero__actions { flex-direction: column; }
  .sm-cta-primary, .sm-cta-secondary { justify-content: center; }
  .cs-wrap { padding: 48px 24px; }
  .cs-card { padding: 36px 20px; }
  .sm-panel__pour-qui { grid-template-columns: 1fr; }
  .sm-pq__sep { display: none; }
  .sm-hero__footer { flex-direction: column; gap: 28px; }
}
</style>

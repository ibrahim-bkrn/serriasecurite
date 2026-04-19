<template>
  <div class="ch-page">
    <NavBar />

    <!-- ── HERO ── -->
    <section class="ch-hero">
      <img :src="heroImg" alt="Sécurisation de chantier" class="ch-hero__img" />
      <div class="ch-hero__overlay"></div>
      <div class="ch-hero__content">
        <nav class="ch-hero__breadcrumb">
          <router-link to="/">Accueil</router-link>
          <span>/</span>
          <span>Chantiers BTP</span>
        </nav>
        <p class="ch-hero__label">Secteur d'intervention</p>
        <h1 class="ch-hero__title">
          Sécurisation<br />
          <span class="ch-hero__title-stroke">de chantier</span>
        </h1>
        <p class="ch-hero__sub">
          De la phase de terrassement à la livraison finale, protégez vos matériaux,
          évitez les retards et sécurisez votre chantier en moins de 48h.
        </p>
        <div class="ch-hero__actions">
          <router-link to="/contact" class="ch-cta-primary">
            <span>Demander un devis</span>
            <div class="ch-cta-arrow">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </router-link>
          <a href="tel:0782564979" class="ch-cta-secondary">Être rappelé</a>
        </div>
        <div class="ch-hero__stats">
          <div v-for="s in heroStats" :key="s.val" class="ch-hero__stat">
            <span class="ch-hero__stat-val">{{ s.val }}</span>
            <span class="ch-hero__stat-label">{{ s.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── MENACES ── -->
    <section class="ch-threats" ref="thrRef">
      <div class="ch-threats__container">
        <div class="ch-threats__header">
          <p class="section-label reveal" :class="{ visible: thrVis }">Risques identifiés</p>
          <h2 class="section-title reveal reveal-delay-1" :class="{ visible: thrVis }">MENACES SUR VOS CHANTIERS</h2>
          <p class="section-sub reveal reveal-delay-2" :class="{ visible: thrVis }">
            Un chantier non protégé est exposé à des pertes financières immédiates et des retards irréversibles.
          </p>
        </div>
        <div class="ch-threats__grid">
          <div
            v-for="(t, i) in threats"
            :key="t.title"
            class="ch-threat reveal"
            :class="[`reveal-delay-${i + 1}`, { visible: thrVis }]"
          >
            <div class="ch-threat__num">{{ String(i + 1).padStart(2, '0') }}</div>
            <h3 class="ch-threat__title">{{ t.title }}</h3>
            <p class="ch-threat__text">{{ t.text }}</p>
            <div class="ch-threat__stat">{{ t.stat }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── SOLUTIONS ── -->
    <section class="ch-solutions" ref="solRef">
      <div class="ch-solutions__container">
        <div class="ch-solutions__header">
          <p class="section-label reveal" :class="{ visible: solVis }">Ce qu'on déploie</p>
          <h2 class="section-title reveal reveal-delay-1" :class="{ visible: solVis }">NOS 3 SOLUTIONS CHANTIER</h2>
        </div>
        <div class="ch-solutions__list">
          <div
            v-for="(sol, i) in solutions"
            :key="sol.title"
            class="ch-sol reveal"
            :class="[`reveal-delay-${i + 1}`, { visible: solVis }]"
          >
            <div class="ch-sol__photo">
              <img :src="sol.img" :alt="sol.title" />
              <div class="ch-sol__photo-overlay"></div>
              <div class="ch-sol__photo-tag">{{ sol.tag }}</div>
            </div>
            <div class="ch-sol__body">
              <h3 class="ch-sol__title">{{ sol.title }}</h3>
              <p class="ch-sol__desc">{{ sol.desc }}</p>
              <ul class="ch-sol__points">
                <li v-for="p in sol.points" :key="p">
                  <span class="ch-sol__dot"></span>{{ p }}
                </li>
              </ul>
              <router-link :to="sol.link" class="ch-sol__link">
                Découvrir
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── WHY SIERRA ── -->
    <section class="ch-why" ref="whyRef">
      <div class="ch-why__container">
        <div class="ch-why__left reveal" :class="{ visible: whyVis }">
          <p class="section-label">Pourquoi Sierra</p>
          <h2 class="section-title">NOS ENGAGEMENTS CHANTIER</h2>
          <p class="ch-why__sub">
            Chaque chantier est unique. Nous adaptons notre dispositif à votre phase
            de construction, votre niveau de risque et votre budget.
          </p>
          <router-link to="/contact" class="ch-cta-primary" style="align-self: flex-start; margin-top: 16px;">
            <span>Obtenir un devis</span>
            <div class="ch-cta-arrow">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </router-link>
        </div>
        <div class="ch-why__right">
          <div
            v-for="(e, i) in engagements"
            :key="e.title"
            class="ch-engagement reveal"
            :class="[`reveal-delay-${i + 1}`, { visible: whyVis }]"
          >
            <div class="ch-engagement__top">
              <span class="ch-engagement__num">{{ String(i + 1).padStart(2, '0') }}</span>
              <h3 class="ch-engagement__title">{{ e.title }}</h3>
            </div>
            <p class="ch-engagement__text">{{ e.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── TÉMOIGNAGES ── -->
    <section class="ch-testi" ref="testiRef">
      <div class="ch-testi__container">
        <p class="section-label reveal" :class="{ visible: testiVis }">Ils nous font confiance</p>
        <div class="ch-testi__grid">
          <div
            v-for="(t, i) in testimonials"
            :key="t.name"
            class="ch-testi__card reveal"
            :class="[`reveal-delay-${i + 1}`, { visible: testiVis }]"
          >
            <div class="ch-testi__stars">
              <span v-for="n in 5" :key="n">★</span>
            </div>
            <p class="ch-testi__text">"{{ t.text }}"</p>
            <div class="ch-testi__author">
              <span class="ch-testi__name">{{ t.name }}</span>
              <span class="ch-testi__role">{{ t.role }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <PageCTA
      label="Chantier en risque ?"
      title="Protégez votre chantier\ndès aujourd'hui."
      subtitle="Intervention express · 48h chrono · Île-de-France"
    />

    <FooterSection />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NavBar        from '../../components/NavBar.vue'
import FooterSection from '../../components/FooterSection.vue'
import PageCTA       from '../../components/PageCTA.vue'

import heroImg      from '../../assets/photos/identite2.jpeg'
import alarmeImg    from '../../assets/photos/alarme.jpg'
import videoImg     from '../../assets/photos/surveillance2.jpeg'
import gardImg      from '../../assets/photos/gardiennage2.jpeg'

const heroStats = [
  { val: '48h',  label: 'Déploiement max' },
  { val: '92%',  label: 'Interventions < 45 min' },
  { val: '24/7', label: 'Télésurveillance' },
]

const threats = [
  {
    title: 'Vols de matériaux',
    text: 'Cuivre, câbles, fenêtres, électroportatifs... Les chantiers sont les cibles privilégiées des voleurs organisés.',
    stat: '+1 Md€/an dans le BTP',
  },
  {
    title: 'Vandalisme & dégradations',
    text: 'Tags, sabotages, incendies volontaires. Un seul incident peut retarder plusieurs semaines de travaux.',
    stat: 'Délais × 3 en moyenne',
  },
  {
    title: 'Intrusions & squats',
    text: 'Des procédures longues, coûteuses et complexes pour expulser les occupants illégaux d\'un chantier.',
    stat: 'Procédure 6-12 mois',
  },
  {
    title: 'Zones sensibles visées',
    text: 'Stockages, tableaux électriques, locaux techniques : les premiers points d\'attaque identifiés.',
    stat: '3× plus ciblées',
  },
]

const solutions = [
  {
    title: 'Alarme AJAX anti-intrusion',
    tag: 'Sans fil · Sans travaux',
    desc: 'Détection instantanée + télésurveillance 24/7 + intervention prioritaire. Déployée en moins de 48h, sans internet ni électricité.',
    img: alarmeImg,
    link: '/solutions/surveillance-materielle',
    points: [
      'Installation autonome GSM + batterie',
      'Levée de doute visuelle instantanée',
      'Certifiée Grade 2 / Grade 3',
    ],
  },
  {
    title: 'Vidéosurveillance HD/4K',
    tag: 'Vision nocturne · IA intégrée',
    desc: 'Surveillance en continu, vision nocturne jusqu\'à 50m et accès à distance. Effet dissuasif fort et preuves exploitables.',
    img: videoImg,
    link: '/solutions/surveillance-materielle',
    points: [
      'Caméras 4K Full Color avec IA',
      'Enregistrement horodaté',
      'Accès smartphone / PC sécurisé',
    ],
  },
  {
    title: 'Gardiennage humain',
    tag: 'CNAPS · 24/7',
    desc: 'Présence physique dissuasive et réactivité immédiate. Agent APS, cynophile ou mobile selon le niveau de risque.',
    img: gardImg,
    link: '/solutions/surveillance-humaine',
    points: [
      'Agents APS, cynophiles, mobiles',
      'Rondes planifiées et aléatoires',
      'Rapport d\'intervention digital',
    ],
  },
]

const engagements = [
  { title: 'Étude de sécurité offerte', text: 'Analyse de votre site et devis adapté à votre phase de construction et votre niveau de risque.' },
  { title: 'Déploiement en moins de 48h', text: 'Alarme, caméras ou agents déployés rapidement. Même sur sites sans électricité ni internet.' },
  { title: 'Technologie autonome', text: 'Systèmes sans fil AJAX fonctionnant par GSM et batterie. Aucune infrastructure préalable nécessaire.' },
  { title: 'Agents certifiés CNAPS', text: 'Tous nos agents disposent de cartes professionnelles valides et suivent une formation continue.' },
  { title: 'Suivi & reporting structuré', text: 'Rapports d\'intervention détaillés, QR code de rondes, main courante et alerte temps réel.' },
]

const testimonials = [
  { text: 'Installation d\'alarme et rondes en 24h sur un chantier ciblé à 3 reprises. Service précis, réactif, professionnel.', name: 'Thomas M.', role: 'Conducteur de travaux — Clichy' },
  { text: 'On a couplé alarme + agent de sécurité pour une livraison critique. Aucun incident pendant 4 mois. Je recommande.', name: 'Rania H.', role: 'Régie immobilière — Montreuil' },
]

const thrRef   = ref(null); const thrVis   = ref(false)
const solRef   = ref(null); const solVis   = ref(false)
const whyRef   = ref(null); const whyVis   = ref(false)
const testiRef = ref(null); const testiVis = ref(false)

function observe(el, flag) {
  if (!el) return
  const obs = new IntersectionObserver(
    ([e]) => { if (e.isIntersecting) { flag.value = true; obs.disconnect() } },
    { threshold: 0.1 }
  )
  obs.observe(el)
}

onMounted(() => {
  observe(thrRef.value, thrVis)
  observe(solRef.value, solVis)
  observe(whyRef.value, whyVis)
  observe(testiRef.value, testiVis)
})
</script>

<style scoped>
.ch-page { background: var(--color-bg); }

/* ── HERO ── */
.ch-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: flex-end;
  padding-top: 72px;
}

.ch-hero__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: saturate(0.3) brightness(0.55);
}

.ch-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.4) 60%, rgba(8,8,8,0.2) 100%);
}

.ch-hero__content {
  position: relative;
  z-index: 2;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.ch-hero__breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
}

.ch-hero__breadcrumb a {
  font-family: var(--font-body);
  font-size: 11px;
  letter-spacing: 0.1em;
  color: rgba(255,255,255,0.5);
  text-decoration: none;
  text-transform: uppercase;
}

.ch-hero__breadcrumb span:not(.ch-hero__breadcrumb a + span) {
  font-family: var(--font-body);
  font-size: 11px;
  letter-spacing: 0.1em;
  color: var(--color-gold);
  text-transform: uppercase;
}

.ch-hero__breadcrumb > span { color: rgba(255,255,255,0.3); font-size: 10px; }

.ch-hero__label {
  font-family: var(--font-body);
  font-size: 11px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-gold);
}

.ch-hero__title {
  font-family: var(--font-display);
  font-size: clamp(52px, 7vw, 96px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  line-height: 0.9;
  letter-spacing: 0.01em;
  max-width: 800px;
}

.ch-hero__title-stroke {
  -webkit-text-stroke: 2px rgba(201, 162, 96, 0.5);
  color: transparent;
}

.ch-hero__sub {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 300;
  color: rgba(232, 232, 232, 0.7);
  line-height: 1.7;
  max-width: 560px;
}

.ch-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.ch-cta-primary {
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

.ch-cta-primary:hover { background: var(--color-gold-light); }

.ch-cta-arrow {
  display: flex;
  align-items: center;
  transition: transform 0.2s;
}

.ch-cta-primary:hover .ch-cta-arrow { transform: translateX(4px); }

.ch-cta-secondary {
  display: inline-flex;
  align-items: center;
  padding: 14px 24px;
  border: 1px solid rgba(255,255,255,0.2);
  color: var(--color-white);
  text-decoration: none;
  font-family: var(--font-body);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: all 0.2s;
}

.ch-cta-secondary:hover {
  border-color: rgba(201, 162, 96, 0.5);
  color: var(--color-gold);
}

.ch-hero__stats {
  display: flex;
  gap: 40px;
  padding-top: 16px;
  border-top: 1px solid rgba(255,255,255,0.1);
  margin-top: 8px;
}

.ch-hero__stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.ch-hero__stat-val {
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 800;
  color: var(--color-gold);
  line-height: 1;
}

.ch-hero__stat-label {
  font-family: var(--font-body);
  font-size: 10px;
  font-weight: 300;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.4);
}

/* ── MENACES ── */
.ch-threats {
  background: var(--color-bg-2);
  border-top: 1px solid var(--color-border);
  padding: 120px 0;
}

.ch-threats__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;
}

.ch-threats__header { margin-bottom: 72px; }

.section-label {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 16px;
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(32px, 4vw, 52px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  letter-spacing: 0.02em;
  line-height: 1.05;
  margin-bottom: 16px;
}

.section-sub {
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 300;
  color: var(--color-muted);
  max-width: 560px;
  line-height: 1.7;
}

.ch-threats__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;
  background: var(--color-border);
}

.ch-threat {
  background: var(--color-bg);
  padding: 40px 36px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: background 0.3s;
}

.ch-threat:hover { background: rgba(201, 162, 96, 0.04); }

.ch-threat__num {
  font-family: var(--font-display);
  font-size: 48px;
  font-weight: 800;
  color: rgba(201, 162, 96, 0.15);
  line-height: 1;
  letter-spacing: -0.02em;
  transition: color 0.3s;
}

.ch-threat:hover .ch-threat__num { color: rgba(201, 162, 96, 0.35); }

.ch-threat__title {
  font-family: var(--font-body);
  font-size: 18px;
  font-weight: 600;
  color: var(--color-white);
}

.ch-threat__text {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.7;
}

.ch-threat__stat {
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-gold);
  margin-top: 8px;
  padding-top: 16px;
  border-top: 1px solid var(--color-border);
}

/* ── SOLUTIONS ── */
.ch-solutions {
  background: var(--color-bg);
  padding: 120px 0;
  border-top: 1px solid var(--color-border);
}

.ch-solutions__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;
}

.ch-solutions__header { margin-bottom: 72px; }

.ch-solutions__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  background: var(--color-border);
}

.ch-sol {
  background: var(--color-bg-2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: border-color 0.3s;
}

.ch-sol__photo {
  position: relative;
  height: 240px;
  overflow: hidden;
}

.ch-sol__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: saturate(0.3) brightness(0.9);
  transition: transform 0.5s, filter 0.5s;
}

.ch-sol:hover .ch-sol__photo img {
  transform: scale(1.04);
  filter: saturate(0.5) brightness(1);
}

.ch-sol__photo-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 40%, rgba(8,8,8,0.7) 100%);
}

.ch-sol__photo-tag {
  position: absolute;
  top: 16px;
  left: 16px;
  font-family: var(--font-body);
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-gold);
  background: rgba(8,8,8,0.8);
  border: 1px solid rgba(201, 162, 96, 0.2);
  padding: 4px 10px;
}

.ch-sol__body {
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}

.ch-sol__title {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-white);
  letter-spacing: 0.02em;
}

.ch-sol__desc {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.7;
}

.ch-sol__points {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 4px;
}

.ch-sol__points li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 300;
  color: var(--color-text);
}

.ch-sol__dot {
  width: 5px;
  height: 5px;
  background: var(--color-gold);
  flex-shrink: 0;
}

.ch-sol__link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-gold);
  text-decoration: none;
  margin-top: auto;
  padding-top: 16px;
  transition: gap 0.2s;
}

.ch-sol__link:hover { gap: 12px; }

/* ── WHY ── */
.ch-why {
  background: var(--color-bg-2);
  padding: 120px 0;
  border-top: 1px solid var(--color-border);
}

.ch-why__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;
  display: grid;
  grid-template-columns: 360px 1fr;
  gap: 100px;
  align-items: start;
}

.ch-why__left {
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: sticky;
  top: 100px;
}

.ch-why__sub {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.7;
}

.ch-why__right {
  display: flex;
  flex-direction: column;
}

.ch-engagement {
  padding: 28px 0;
  border-bottom: 1px solid var(--color-border);
}

.ch-engagement:first-child { border-top: 1px solid var(--color-border); }

.ch-engagement__top {
  display: flex;
  align-items: baseline;
  gap: 20px;
  margin-bottom: 8px;
}

.ch-engagement__num {
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 700;
  color: var(--color-gold);
  flex-shrink: 0;
}

.ch-engagement__title {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 500;
  color: var(--color-white);
}

.ch-engagement__text {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.7;
  padding-left: 48px;
}

/* ── TÉMOIGNAGES ── */
.ch-testi {
  background: var(--color-bg);
  padding: 100px 0;
  border-top: 1px solid var(--color-border);
}

.ch-testi__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;
}

.ch-testi__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;
  background: var(--color-border);
  margin-top: 40px;
}

.ch-testi__card {
  background: var(--color-bg-2);
  padding: 48px 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.ch-testi__stars {
  color: var(--color-gold);
  font-size: 14px;
  letter-spacing: 2px;
}

.ch-testi__text {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 300;
  color: var(--color-text);
  line-height: 1.8;
  font-style: italic;
}

.ch-testi__author { margin-top: auto; }

.ch-testi__name {
  display: block;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 600;
  color: var(--color-white);
  margin-bottom: 4px;
}

.ch-testi__role {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 300;
  color: var(--color-muted);
  letter-spacing: 0.05em;
}

/* ── RESPONSIVE ── */
@media (max-width: 1200px) {
  .ch-hero__content, .ch-threats__container,
  .ch-solutions__container, .ch-why__container,
  .ch-testi__container { padding-left: 40px; padding-right: 40px; }
}

@media (max-width: 1024px) {
  .ch-solutions__list { grid-template-columns: 1fr; }
  .ch-why__container { grid-template-columns: 1fr; gap: 48px; }
  .ch-why__left { position: static; }
  .ch-testi__grid { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
  .ch-hero__content { padding: 0 24px 60px; }
  .ch-threats__container, .ch-solutions__container,
  .ch-why__container, .ch-testi__container { padding: 0 24px; }
  .ch-threats { padding: 80px 0; }
  .ch-solutions { padding: 80px 0; }
  .ch-why { padding: 80px 0; }
  .ch-testi { padding: 72px 0; }
  .ch-threats__grid { grid-template-columns: 1fr; }
  .ch-hero__stats { gap: 24px; flex-wrap: wrap; }
  .ch-engagement__text { padding-left: 0; margin-top: 8px; }
  .ch-hero__actions { flex-direction: column; }
  .ch-cta-primary, .ch-cta-secondary { justify-content: center; }
}
</style>

<template>
  <div class="bv-page">
    <NavBar />

    <!-- ── HERO ── -->
    <section class="bv-hero">
      <div class="bv-hero__left">
        <nav class="bv-hero__breadcrumb">
          <router-link to="/">Accueil</router-link>
          <span>/</span>
          <span>Biens vacants</span>
        </nav>
        <p class="bv-hero__label">Secteur d'intervention</p>
        <h1 class="bv-hero__title">
          Biens<br />
          <span class="bv-hero__title-stroke">Vacants</span>
        </h1>
        <p class="bv-hero__sub">
          Appartements, locaux commerciaux, entrepôts inoccupés.
          Protégez vos biens contre squats, vols et dégradations en moins de 48h.
        </p>
        <div class="bv-hero__pills">
          <span>Installation 48h</span>
          <span>Sans travaux</span>
          <span>Location ou achat</span>
        </div>
        <div class="bv-hero__actions">
          <router-link to="/contact" class="bv-cta-primary">
            <span>Demander un devis</span>
            <div class="bv-cta-arrow">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </router-link>
          <a href="tel:0782564979" class="bv-cta-secondary">Être rappelé</a>
        </div>
      </div>
      <div class="bv-hero__right">
        <img :src="heroImg" alt="Bien vacant sécurisé" class="bv-hero__img" />
        <div class="bv-hero__overlay"></div>
        <div class="bv-hero__claim">
          <span class="bv-hero__claim-highlight">Aucun bien sécurisé<br/>par Sierra n'a jamais été squatté.</span>
        </div>
      </div>
    </section>

    <!-- ── POURQUOI SÉCURISER ── -->
    <section class="bv-why" ref="whyRef">
      <div class="bv-why__container">
        <div class="bv-why__header">
          <p class="section-label reveal" :class="{ visible: whyVis }">Le problème</p>
          <h2 class="section-title reveal reveal-delay-1" :class="{ visible: whyVis }">UN BIEN VIDE EST UNE CIBLE FACILE</h2>
        </div>
        <div class="bv-why__grid">
          <div
            v-for="(r, i) in risks"
            :key="r.title"
            class="bv-risk reveal"
            :class="[`reveal-delay-${i + 1}`, { visible: whyVis }]"
          >
            <div class="bv-risk__icon" v-html="r.icon"></div>
            <h3 class="bv-risk__title">{{ r.title }}</h3>
            <p class="bv-risk__text">{{ r.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── 3 PILIERS ── -->
    <section class="bv-pillars" ref="pilRef">
      <div class="bv-pillars__container">
        <div class="bv-pillars__header">
          <p class="section-label reveal" :class="{ visible: pilVis }">Notre approche</p>
          <h2 class="section-title reveal reveal-delay-1" :class="{ visible: pilVis }">3 PILIERS DE PROTECTION</h2>
          <p class="section-sub reveal reveal-delay-2" :class="{ visible: pilVis }">
            Sécurité · Rapidité · Impénétrabilité
          </p>
        </div>
        <div class="bv-pillars__list">
          <div
            v-for="(p, i) in pillars"
            :key="p.title"
            class="bv-pillar reveal"
            :class="[`reveal-delay-${i + 1}`, { visible: pilVis }]"
          >
            <div class="bv-pillar__num">{{ String(i + 1).padStart(2, '0') }}</div>
            <div class="bv-pillar__content">
              <span class="bv-pillar__tag">{{ p.tag }}</span>
              <h3 class="bv-pillar__title">{{ p.title }}</h3>
              <p class="bv-pillar__desc">{{ p.desc }}</p>
              <ul class="bv-pillar__features">
                <li v-for="f in p.features" :key="f">
                  <span class="bv-pillar__dot"></span>{{ f }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── PACK 360 ── -->
    <section class="bv-pack" ref="packRef">
      <div class="bv-pack__container">
        <div class="bv-pack__card reveal" :class="{ visible: packVis }">
          <div class="bv-pack__card-left">
            <p class="bv-pack__label">Offre complète</p>
            <h2 class="bv-pack__title">PACK<br />TRANQUILLITÉ<br /><span class="bv-pack__title-gold">360°</span></h2>
            <p class="bv-pack__sub">La solution clé en main pour une protection totale et immédiate.</p>
          </div>
          <div class="bv-pack__card-right">
            <div
              v-for="(step, i) in packSteps"
              :key="step"
              class="bv-pack__step reveal"
              :class="[`reveal-delay-${i + 1}`, { visible: packVis }]"
            >
              <span class="bv-pack__step-num">{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="bv-pack__step-text">{{ step }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── FAQ ── -->
    <section class="bv-faq" ref="faqRef">
      <div class="bv-faq__container">
        <p class="section-label reveal" :class="{ visible: faqVis }">Vos questions</p>
        <h2 class="section-title reveal reveal-delay-1" :class="{ visible: faqVis }">FAQ</h2>
        <div class="bv-faq__list">
          <div
            v-for="(item, i) in faq"
            :key="item.q"
            class="bv-faq__item reveal"
            :class="[`reveal-delay-${i + 1}`, { visible: faqVis }]"
            :class2="{ 'bv-faq__item--open': openFaq === i }"
            @click="openFaq = openFaq === i ? null : i"
          >
            <div class="bv-faq__q">
              <span>{{ item.q }}</span>
              <div class="bv-faq__toggle" :class="{ 'bv-faq__toggle--open': openFaq === i }">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8h12M8 2v12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </div>
            </div>
            <div class="bv-faq__a" :class="{ 'bv-faq__a--open': openFaq === i }">
              <p>{{ item.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── TÉMOIGNAGES ── -->
    <section class="bv-testi" ref="testiRef">
      <div class="bv-testi__container">
        <p class="section-label reveal" :class="{ visible: testiVis }">Témoignages</p>
        <div class="bv-testi__grid">
          <div
            v-for="(t, i) in testimonials"
            :key="t.name"
            class="bv-testi__card reveal"
            :class="[`reveal-delay-${i + 1}`, { visible: testiVis }]"
          >
            <div class="bv-testi__stars">★★★★★</div>
            <p class="bv-testi__text">"{{ t.text }}"</p>
            <div class="bv-testi__author">
              <span class="bv-testi__name">{{ t.name }}</span>
              <span class="bv-testi__role">{{ t.role }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <PageCTA
      label="Votre bien est vulnérable ?"
      title="Sécurisez-le\nen moins de 48h."
      subtitle="Sans travaux · Sans engagement long terme · Île-de-France"
    />

    <FooterSection />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NavBar        from '../../components/NavBar.vue'
import FooterSection from '../../components/FooterSection.vue'
import PageCTA       from '../../components/PageCTA.vue'

import heroImg from '../../assets/photos/porte-antisquat2.jpeg'

const risks = [
  {
    title: 'Blocage judiciaire',
    text: 'En cas de squat, la procédure d\'expulsion peut durer 6 à 12 mois. Pendant ce temps, votre bien est inutilisable.',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" fill="currentColor"/></svg>',
  },
  {
    title: 'Frais de remise en état',
    text: 'Vandalisme, dégradations, incendies volontaires. Les coûts de remise en état peuvent dépasser la valeur d\'une année de loyer.',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" fill="currentColor"/></svg>',
  },
  {
    title: 'Perte de valeur',
    text: 'Un bien dégradé ou squatté perd rapidement de sa valeur marchande. La sécurisation est un investissement rentable.',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" fill="currentColor"/></svg>',
  },
  {
    title: 'Responsabilité légale',
    text: 'Un bien mal sécurisé peut engager votre responsabilité en cas d\'accident ou d\'intrusion. Protégez-vous juridiquement.',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="currentColor"/></svg>',
  },
]

const pillars = [
  {
    tag: 'AJAX Systems · Grade 2/3',
    title: 'Alarme AJAX autonome',
    desc: 'Système sans fil fonctionnant sans électricité ni internet. Levée de doute visuelle, alertes instantanées.',
    features: [
      'Pose rapide, sans travaux',
      'GSM + batterie de secours',
      'Détecteurs intérieurs & extérieurs HD',
      'Sirènes puissantes + application mobile',
    ],
  },
  {
    tag: 'SEURITAS · APSAD P3',
    title: 'Télésurveillance 24/7',
    desc: 'Centres certifiés APSAD P3. Chaque alerte vérifiée par un opérateur humain avant intervention.',
    features: [
      'Levée de doute visuelle immédiate',
      'Transmission sécurisée, anti-brouillage',
      '2 centres en Île-de-France',
      'Coordination forces de l\'ordre',
    ],
  },
  {
    tag: 'Agents CNAPS · Intervention rapide',
    title: 'Agents agréés CNAPS',
    desc: 'Intervention physique sur site en cas d\'intrusion confirmée. Rapport détaillé avec photos à chaque mission.',
    features: [
      'Agents certifiés CNAPS',
      'Déploiement rapide sur alerte',
      'Rapport d\'intervention détaillé avec photos',
      'Coordination avec forces de l\'ordre',
    ],
  },
]

const packSteps = [
  'Diagnostic gratuit en 24h',
  'Installation alarme en moins de 48h',
  'Option porte blindée anti-squat A2P BP1',
  'Maintenance & suivi continu',
  'Location possible courte ou longue durée',
]

const faq = [
  { q: 'En combien de temps pouvez-vous sécuriser mon bien ?', a: 'En moins de 48h, partout en Île-de-France. Nous intervenons du lundi au dimanche sur simple appel.' },
  { q: 'L\'alarme fonctionne-t-elle sans Internet ni électricité ?', a: 'Oui. Notre système AJAX repose sur une double transmission GSM et une batterie de secours. Aucune connexion ni alimentation externe n\'est nécessaire.' },
  { q: 'Puis-je louer la porte anti-squat plutôt que l\'acheter ?', a: 'Oui, nous proposons une formule de location flexible, idéale pour les biens en attente de vente, de travaux ou entre deux locataires.' },
  { q: 'Est-ce reconnu légalement contre les squats ?', a: 'Oui. Une alarme active combinée à une porte anti-squat renforce votre dossier juridique et facilite les démarches en cas d\'intrusion.' },
  { q: 'Quels types de biens peut-on sécuriser ?', a: 'Appartements, maisons individuelles, immeubles entiers, locaux commerciaux, bureaux, entrepôts, sites industriels et terrains en construction.' },
]

const testimonials = [
  { text: 'Nous avions un immeuble vide à Paris menacé par un squat. Sierra est intervenu en 48h avec une alarme et une porte blindée. Aucun incident, une tranquillité totale.', name: 'Stéphane M.', role: 'Propriétaire immobilier — Paris' },
  { text: 'Mon local commercial était vacant entre deux locataires. Grâce à Sierra, j\'ai eu une solution rapide sans travaux. Efficace et professionnel.', name: 'Sarah K.', role: 'Gestionnaire de biens — Seine-et-Marne' },
]

const openFaq = ref(null)

const whyRef   = ref(null); const whyVis   = ref(false)
const pilRef   = ref(null); const pilVis   = ref(false)
const packRef  = ref(null); const packVis  = ref(false)
const faqRef   = ref(null); const faqVis   = ref(false)
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
  observe(whyRef.value,   whyVis)
  observe(pilRef.value,   pilVis)
  observe(packRef.value,  packVis)
  observe(faqRef.value,   faqVis)
  observe(testiRef.value, testiVis)
})
</script>

<style scoped>
.bv-page { background: var(--color-bg); }

/* ── HERO ── */
.bv-hero {
  display: flex;
  min-height: 100vh;
  padding-top: 72px;
}

.bv-hero__left {
  width: 48%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 64px 80px 80px;
  border-right: 1px solid var(--color-border);
  position: relative;
}

.bv-hero__left::before {
  content: '';
  position: absolute;
  left: 0; top: 20%; bottom: 20%;
  width: 2px;
  background: linear-gradient(to bottom, transparent, var(--color-gold), transparent);
}

.bv-hero__breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 40px;
}

.bv-hero__breadcrumb a {
  font-family: var(--font-body);
  font-size: 11px;
  letter-spacing: 0.1em;
  color: var(--color-muted);
  text-decoration: none;
  text-transform: uppercase;
}

.bv-hero__breadcrumb > span:not(.bv-hero__breadcrumb a + span) {
  font-family: var(--font-body);
  font-size: 11px;
  letter-spacing: 0.1em;
  color: var(--color-gold);
  text-transform: uppercase;
}

.bv-hero__breadcrumb > span { color: var(--color-muted); font-size: 10px; }

.bv-hero__label {
  font-family: var(--font-body);
  font-size: 11px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 16px;
}

.bv-hero__title {
  font-family: var(--font-display);
  font-size: clamp(48px, 5vw, 80px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  line-height: 0.95;
  letter-spacing: 0.01em;
  margin-bottom: 28px;
}

.bv-hero__title-stroke {
  -webkit-text-stroke: 2px rgba(201, 162, 96, 0.5);
  color: transparent;
}

.bv-hero__sub {
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.7;
  max-width: 420px;
  margin-bottom: 28px;
}

.bv-hero__pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 40px;
}

.bv-hero__pills span {
  font-family: var(--font-body);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(201, 162, 96, 0.7);
  border: 1px solid rgba(201, 162, 96, 0.2);
  padding: 5px 12px;
  background: rgba(201, 162, 96, 0.04);
}

.bv-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.bv-cta-primary {
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

.bv-cta-primary:hover { background: var(--color-gold-light); }
.bv-cta-arrow { display: flex; align-items: center; transition: transform 0.2s; }
.bv-cta-primary:hover .bv-cta-arrow { transform: translateX(4px); }

.bv-cta-secondary {
  display: inline-flex;
  align-items: center;
  padding: 14px 24px;
  border: 1px solid rgba(255,255,255,0.12);
  color: var(--color-text);
  text-decoration: none;
  font-family: var(--font-body);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: all 0.2s;
}

.bv-cta-secondary:hover {
  border-color: rgba(201, 162, 96, 0.4);
  color: var(--color-gold);
}

.bv-hero__right {
  flex: 1;
  position: relative;
  overflow: hidden;
}

.bv-hero__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  filter: saturate(0.4) brightness(0.85);
}

.bv-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(8,8,8,0.5) 0%, transparent 50%);
}

.bv-hero__claim {
  position: absolute;
  bottom: 48px;
  left: 48px;
  right: 48px;
  background: rgba(8,8,8,0.85);
  border: 1px solid var(--color-border);
  border-left: 3px solid var(--color-gold);
  padding: 20px 24px;
  backdrop-filter: blur(4px);
}

.bv-hero__claim-highlight {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text);
  line-height: 1.5;
}

/* ── WHY ── */
.bv-why {
  background: var(--color-bg-2);
  border-top: 1px solid var(--color-border);
  padding: 120px 0;
}

.bv-why__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;
}

.bv-why__header { margin-bottom: 72px; }

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
  max-width: 480px;
  line-height: 1.7;
}

.bv-why__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;
  background: var(--color-border);
}

.bv-risk {
  background: var(--color-bg);
  padding: 36px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: background 0.3s;
}

.bv-risk:hover { background: rgba(201, 162, 96, 0.04); }

.bv-risk__icon {
  color: rgba(201, 162, 96, 0.5);
  transition: color 0.3s;
}

.bv-risk:hover .bv-risk__icon { color: var(--color-gold); }

.bv-risk__title {
  font-family: var(--font-body);
  font-size: 18px;
  font-weight: 600;
  color: var(--color-white);
}

.bv-risk__text {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.7;
}

/* ── PILLARS ── */
.bv-pillars {
  background: var(--color-bg);
  padding: 120px 0;
  border-top: 1px solid var(--color-border);
}

.bv-pillars__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;
}

.bv-pillars__header { margin-bottom: 72px; }

.bv-pillars__list {
  display: flex;
  flex-direction: column;
}

.bv-pillar {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 48px;
  padding: 48px 0;
  border-bottom: 1px solid var(--color-border);
  align-items: start;
}

.bv-pillar:first-child { border-top: 1px solid var(--color-border); }

.bv-pillar__num {
  font-family: var(--font-display);
  font-size: 64px;
  font-weight: 800;
  color: rgba(201, 162, 96, 0.15);
  line-height: 1;
  letter-spacing: -0.03em;
  transition: color 0.3s;
}

.bv-pillar:hover .bv-pillar__num { color: rgba(201, 162, 96, 0.35); }

.bv-pillar__content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.bv-pillar__tag {
  font-family: var(--font-body);
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-gold);
  background: rgba(201, 162, 96, 0.08);
  border: 1px solid rgba(201, 162, 96, 0.2);
  padding: 5px 12px;
  align-self: flex-start;
}

.bv-pillar__title {
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-white);
  letter-spacing: 0.02em;
}

.bv-pillar__desc {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.7;
  max-width: 560px;
}

.bv-pillar__features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 4px;
}

.bv-pillar__features li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 300;
  color: var(--color-text);
}

.bv-pillar__dot {
  width: 5px;
  height: 5px;
  background: var(--color-gold);
  flex-shrink: 0;
}

/* ── PACK 360 ── */
.bv-pack {
  background: var(--color-bg-2);
  padding: 120px 0;
  border-top: 1px solid var(--color-border);
}

.bv-pack__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;
}

.bv-pack__card {
  display: grid;
  grid-template-columns: 340px 1fr;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  overflow: hidden;
}

.bv-pack__card-left {
  background: var(--color-gold);
  padding: 64px 48px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
}

.bv-pack__label {
  font-family: var(--font-body);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(8,8,8,0.6);
}

.bv-pack__title {
  font-family: var(--font-display);
  font-size: 40px;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-bg);
  line-height: 1.0;
  letter-spacing: 0.02em;
}

.bv-pack__title-gold {
  color: rgba(8,8,8,0.7);
}

.bv-pack__sub {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 400;
  color: rgba(8,8,8,0.65);
  line-height: 1.6;
}

.bv-pack__card-right {
  padding: 48px 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
}

.bv-pack__step {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 18px 0;
  border-bottom: 1px solid var(--color-border);
}

.bv-pack__step:last-child { border-bottom: none; }

.bv-pack__step-num {
  font-family: var(--font-display);
  font-size: 32px;
  font-weight: 800;
  color: rgba(201, 162, 96, 0.2);
  line-height: 1;
  flex-shrink: 0;
  transition: color 0.3s;
}

.bv-pack__step:hover .bv-pack__step-num { color: var(--color-gold); }

.bv-pack__step-text {
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 400;
  color: var(--color-text);
}

/* ── FAQ ── */
.bv-faq {
  background: var(--color-bg);
  padding: 120px 0;
  border-top: 1px solid var(--color-border);
}

.bv-faq__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;
}

.bv-faq__list {
  margin-top: 48px;
  max-width: 860px;
}

.bv-faq__item {
  border-bottom: 1px solid var(--color-border);
  cursor: pointer;
}

.bv-faq__item:first-child { border-top: 1px solid var(--color-border); }

.bv-faq__q {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 24px 0;
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 500;
  color: var(--color-white);
  transition: color 0.2s;
}

.bv-faq__item:hover .bv-faq__q { color: var(--color-gold); }

.bv-faq__toggle {
  width: 32px;
  height: 32px;
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-gold);
  flex-shrink: 0;
  transition: transform 0.3s, background 0.2s;
}

.bv-faq__toggle--open {
  transform: rotate(45deg);
  background: rgba(201, 162, 96, 0.1);
}

.bv-faq__a {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease, padding 0.35s ease;
}

.bv-faq__a--open {
  max-height: 200px;
  padding-bottom: 24px;
}

.bv-faq__a p {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.8;
}

/* ── TESTI ── */
.bv-testi {
  background: var(--color-bg-2);
  padding: 100px 0;
  border-top: 1px solid var(--color-border);
}

.bv-testi__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;
}

.bv-testi__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;
  background: var(--color-border);
  margin-top: 40px;
}

.bv-testi__card {
  background: var(--color-bg);
  padding: 48px 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.bv-testi__stars { color: var(--color-gold); font-size: 14px; letter-spacing: 2px; }

.bv-testi__text {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 300;
  color: var(--color-text);
  line-height: 1.8;
  font-style: italic;
}

.bv-testi__author { margin-top: auto; }

.bv-testi__name {
  display: block;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 600;
  color: var(--color-white);
  margin-bottom: 4px;
}

.bv-testi__role {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 300;
  color: var(--color-muted);
}

/* ── RESPONSIVE ── */
@media (max-width: 1200px) {
  .bv-hero__left { padding: 80px 48px 80px 40px; }
  .bv-why__container, .bv-pillars__container,
  .bv-pack__container, .bv-faq__container,
  .bv-testi__container { padding: 0 40px; }
}

@media (max-width: 1024px) {
  .bv-hero { flex-direction: column; min-height: auto; }
  .bv-hero__left { width: 100%; border-right: none; border-bottom: 1px solid var(--color-border); padding: 32px 40px 60px; }
  .bv-hero__left::before { display: none; }
  .bv-hero__right { height: 50vh; min-height: 320px; }
  .bv-pack__card { grid-template-columns: 1fr; }
  .bv-pack__card-left { padding: 48px; }
  .bv-testi__grid { grid-template-columns: 1fr; }
  .bv-why__grid { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
  .bv-hero__left { padding: 32px 24px 48px; }
  .bv-why__container, .bv-pillars__container,
  .bv-pack__container, .bv-faq__container,
  .bv-testi__container { padding: 0 24px; }
  .bv-why { padding: 80px 0; }
  .bv-pillars { padding: 80px 0; }
  .bv-pack { padding: 80px 0; }
  .bv-faq { padding: 80px 0; }
  .bv-testi { padding: 72px 0; }
  .bv-pillar { grid-template-columns: 72px 1fr; gap: 24px; }
  .bv-pillar__num { font-size: 48px; }
  .bv-hero__claim { left: 24px; right: 24px; bottom: 24px; }
  .bv-hero__actions { flex-direction: column; }
  .bv-cta-primary, .bv-cta-secondary { justify-content: center; }
  .bv-pack__card-right { padding: 32px 24px; }
}
</style>

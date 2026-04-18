<template>
  <div class="sh-page">
    <NavBar />

    <!-- ── HERO ── -->
    <section class="sh-hero">
      <div class="sh-hero__left">
        <nav class="sh-hero__breadcrumb">
          <router-link to="/">Accueil</router-link>
          <span>/</span>
          <router-link to="/solutions/surveillance-humaine">Surveillance humaine</router-link>
        </nav>
        <p class="sh-hero__label">Gardiennage humain</p>
        <h1 class="sh-hero__title">
          Surveillance<br />
          <span class="sh-hero__title-stroke">Humaine</span>
        </h1>
        <p class="sh-hero__sub">
          Des agents certifiés CNAPS, déployés en 24h sur toute l'Île-de-France.
          Présence dissuasive, rondes et intervention immédiate.
        </p>
        <div class="sh-hero__pills">
          <span>Agréé CNAPS</span>
          <span>Déploiement 24h</span>
          <span>24/7</span>
        </div>
        <div class="sh-hero__actions">
          <router-link to="/contact" class="sh-cta-primary">
            <span>Parler à un responsable sécurité</span>
            <div class="sh-cta-primary__arrow">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </router-link>
          <a href="tel:0782564979" class="sh-cta-secondary">Être rappelé</a>
        </div>
      </div>
      <div class="sh-hero__right">
        <img :src="heroImg" alt="Agent de sécurité Sierra Sécurité" class="sh-hero__img" />
        <div class="sh-hero__img-overlay"></div>
        <div class="sh-hero__stat-card">
          <span class="sh-hero__stat-num">24h</span>
          <span class="sh-hero__stat-label">Déploiement garanti</span>
        </div>
      </div>
    </section>

    <!-- ── POURQUOI CHOISIR ── -->
    <section class="sh-why" ref="whyRef">
      <div class="sh-why__container">
        <div class="sh-why__left reveal" :class="{ visible: whyVis }">
          <p class="section-label">serria securité</p>
          <h2 class="sh-why__title">Pourquoi choisir<br /><span class="gold">notre gardiennage ?</span></h2>
          <p class="sh-why__intro">
            Dans certaines situations, rien ne remplace une présence humaine sur site.
            Nos agents assurent une prévention active, une dissuasion visible
            et une capacité d'intervention immédiate.
          </p>
          <div class="sh-why__callout">
            <div class="sh-why__callout-line"></div>
            <p>Surveillance crédible, effet dissuasif fort et tranquillité immédiate — même en contexte tendu.</p>
          </div>
        </div>
        <div class="sh-why__right">
          <p class="sh-why__threats-intro reveal" :class="{ visible: whyVis }">
            Protection active contre 
          </p>
          <div
            v-for="(threat, i) in threats"
            :key="threat"
            class="sh-why__threat reveal"
            :class="[`reveal-delay-${i + 1}`, { visible: whyVis }]"
          >
            <span class="sh-why__threat-dot"></span>
            <span class="sh-why__threat-text">{{ threat }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── MÉTHODE ── -->
    <section class="sh-method" ref="mRef">
      <div class="sh-method__container">
        <div class="sh-method__header">
          <p class="section-label reveal" :class="{ visible: mVis }">Notre process</p>
          <h2 class="section-title reveal reveal-delay-1" :class="{ visible: mVis }">DÉPLOIEMENT EN 5 ÉTAPES</h2>
          <p class="sh-method__intro reveal reveal-delay-2" :class="{ visible: mVis }">
            Pas d'agent placé au hasard. Chaque mission est cadrée, suivie et adaptée à votre site.
          </p>
        </div>
        <div class="sh-method__steps">
          <div
            v-for="(step, i) in steps"
            :key="step.title"
            class="sh-step reveal"
            :class="[`reveal-delay-${i + 1}`, { visible: mVis }]"
          >
            <div class="sh-step__num">{{ String(i + 1).padStart(2, '0') }}</div>
            <div class="sh-step__body">
              <h3 class="sh-step__title">{{ step.title }}</h3>
              <p class="sh-step__text">{{ step.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── PROFILS AGENTS ── -->
    <section class="sh-agents" ref="agRef">
      <div class="sh-agents__container">
        <div class="sh-agents__header">
          <p class="section-label reveal" :class="{ visible: agVis }">Nos profils d’agents de sécurité</p>
          <h2 class="section-title reveal reveal-delay-1" :class="{ visible: agVis }">3 TYPES D'AGENTS</h2>
          <p class="section-sub reveal reveal-delay-2" :class="{ visible: agVis }">
            Chaque mission bénéficie du profil adapté à votre environnement et vos risques.
          </p>
        </div>

        <div class="sh-accordion reveal reveal-delay-2" :class="{ visible: agVis }">
          <div
            v-for="(agent, i) in agents"
            :key="agent.title"
            class="sh-accordion__item"
            :class="{ 'sh-accordion__item--open': activeAgent === i }"
            @click="activeAgent = activeAgent === i ? null : i"
          >
            <div class="sh-accordion__header">
              <span class="sh-accordion__num">{{ String(i + 1).padStart(2, '0') }}</span>
              <div class="sh-accordion__titles">
                <span class="sh-accordion__tag">{{ agent.tag }}</span>
                <h3 class="sh-accordion__title">{{ agent.title }}</h3>
              </div>
              <span class="sh-accordion__chevron">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M5 8l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </div>
            <div class="sh-accordion__body">
              <div class="sh-accordion__body-inner">
                <p class="sh-accordion__desc">{{ agent.desc }}</p>
                <ul class="sh-accordion__features">
                  <li v-for="f in agent.features" :key="f">
                    <span class="sh-accordion__dot"></span>{{ f }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CROSS-SELL V3 : carte sombre bordée or ── -->
    <section class="cs-v3-wrap">
      <div class="cs-v3">
        <span class="cs-v3__badge">Solution complémentaire</span>
        <h2 class="cs-v3__title">Et si vous ajoutez à cela<br />une surveillance matérielle ?</h2>
        <p class="cs-v3__text">Quand la sécurité est fragmentée, les failles apparaissent. SIERRA SÉCURITÉ intègre l’humain et la technologie pour une protection cohérente, réactive et maîtrisée, du terrain au centre de contrôle..</p>
        <router-link to="/solutions/surveillance-materielle" class="cs-v3__cta">
          Protection totale
          <svg width="15" height="15" viewBox="0 0 20 20" fill="none"><path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </router-link>
      </div>
    </section>

    <!-- ── ENGAGEMENTS ── -->
    <section class="sh-engagements" ref="sRef">
      <div class="sh-engagements__container">
        <p class="section-label reveal" :class="{ visible: sVis }">Sierra Sécurité</p>
        <h2 class="section-title reveal reveal-delay-1" :class="{ visible: sVis }">NOS ENGAGEMENTS</h2>
        <div class="sh-engagements__grid">
          <div
            v-for="(eng, i) in engagements"
            :key="eng"
            class="sh-engagement reveal"
            :class="[`reveal-delay-${i + 1}`, { visible: sVis }]"
          >
            <span class="sh-engagement__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" />
              </svg>
            </span>
            <span class="sh-engagement__text">{{ eng }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CTA ── -->
    <PageCTA
      label="Prêt à sécuriser votre site ?"
      title="Déployons vos agents dès demain."
      subtitle="Devis gratuit · Agents CNAPS · Déploiement 24h · Toute l'Île-de-France"
    />

    <FooterSection />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NavBar        from '../../components/NavBar.vue'
import FooterSection from '../../components/FooterSection.vue'
import PageCTA       from '../../components/PageCTA.vue'

import heroImg from '../../assets/photos/gardiennage.jpeg'

const activeAgent = ref(null)

const engagements = [
  'Réactivité express — mise en place possible en 24h',
  'Suivi personnalisé — référent unique, rapport structuré',
  'Agents encadrés, identifiables et équipés Sierra',
  'Prestations multi-services : gardiennage, alarme, télésurveillance',
  'Relation de confiance & retour terrain continu',
  'Contrôle qualité régulier & accompagnement client actif',
]

const agents = [
  {
    tag: 'Agent de Prévention & Sécurité',
    title: 'AGENT APS',
    desc: 'Présence dissuasive professionnelle pour le contrôle d\'accès, la surveillance continue et l\'intervention immédiate.',
    features: [
      'Filtrage & contrôle d\'accès',
      'Rondes régulières & surveillance continue',
      'Ouverture / fermeture de site',
      'Intervention immédiate sur incident',
      'Formation PSC1 – Secours aux personnes',
    ],
  },
  {
    tag: 'Surveillance renforcée',
    title: 'AGENT CYNOPHILE',
    desc: 'Binôme homme-chien pour une détection accrue et une dissuasion maximale, idéal pour les sites à risque ou nocturnes.',
    features: [
      'Surveillance renforcée via binôme homme/chien',
      'Dissuasion puissante et détection accrue',
      'Zones mal éclairées & terrains ouverts',
      'Gardiennage chantier sensible de nuit',
      'Conformité cynotechnique garantie',
    ],
  },
  {
    tag: 'Rondier mobile',
    title: 'AGENT MOBILE',
    desc: 'Rondes planifiées et aléatoires pour les sites étendus ou non permanents, avec intervention sur déclenchement d\'alarme.',
    features: [
      'Rondes planifiées & aléatoires',
      'Présence ponctuelle sur lieux étendus',
      'Intervention sur alarme avec levée de doute',
      'Coordination avec télésurveillance SEURITAS',
      'Rapport d\'intervention détaillé',
    ],
  },
]

const threats = [
  'Intrusions, effractions & vols',
  'Dégradations, vandalisme, conflits',
  'Squats ou occupations illégales',
  'Risques techniques, fuites, incendies',
  'Troubles dans les établissements publics ou privés',
]

const steps = [
  { title: 'Audit du site', text: 'Analyse approfondie de votre site, identification des zones vulnérables et définition du niveau de risque réel.' },
  { title: 'Définition des horaires stratégiques', text: 'Détermination des créneaux d\'intervention les plus pertinents et des zones sensibles à couvrir en priorité.' },
  { title: 'Affectation du profil agent adapté', text: 'Sélection du type d\'agent optimal : APS pour surveillance continue, cynophile pour sites sensibles, mobile pour rondes.' },
  { title: 'Déploiement avec consignes claires', text: 'Mise en place structurée avec cahier de consignes, QR code de rondes et main courante digitale ou papier.' },
  { title: 'Suivi opérationnel continu', text: 'Rapports d\'intervention détaillés transmis selon vos préférences. Contrôle qualité régulier et référent unique dédié.' },
]


// Intersection observers
const stRef  = ref(null); const stVis  = ref(false)
const whyRef = ref(null); const whyVis = ref(false)
const agRef  = ref(null); const agVis  = ref(false)
const mRef  = ref(null); const mVis  = ref(false)
const sRef  = ref(null); const sVis  = ref(false)

function observe(el, flag) {
  const obs = new IntersectionObserver(
    ([e]) => { if (e.isIntersecting) { flag.value = true; obs.disconnect() } },
    { threshold: 0.1 }
  )
  if (el) obs.observe(el)
}

onMounted(() => {
  observe(stRef.value,  stVis)
  observe(whyRef.value, whyVis)
  observe(agRef.value,  agVis)
  observe(mRef.value,  mVis)
  observe(sRef.value,  sVis)
})
</script>

<style scoped>
.sh-page { background: var(--color-bg); }

/* ── HERO ── */
.sh-hero {
  display: flex;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  padding-top: 72px;
}

.sh-hero__left {
  width: 48%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 64px 80px 80px;
  border-right: 1px solid var(--color-border);
  position: relative;
}

.sh-hero__left::before {
  content: '';
  position: absolute;
  left: 0; top: 20%; bottom: 20%;
  width: 2px;
  background: linear-gradient(to bottom, transparent, var(--color-gold), transparent);
}

.sh-hero__breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 40px;
}

.sh-hero__breadcrumb a {
  font-family: var(--font-body);
  font-size: 11px;
  letter-spacing: 0.1em;
  color: var(--color-muted);
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.2s;
}

.sh-hero__breadcrumb a:last-child { color: var(--color-gold); }

.sh-hero__breadcrumb span {
  color: var(--color-muted);
  font-size: 10px;
}

.sh-hero__label {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 16px;
}

.sh-hero__title {
  font-family: var(--font-display);
  font-size: clamp(48px, 5vw, 80px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  line-height: 0.95;
  letter-spacing: 0.01em;
  margin-bottom: 28px;
}

.sh-hero__title-stroke {
  -webkit-text-stroke: 2px rgba(201, 162, 96, 0.5);
  color: transparent;
}

.sh-hero__sub {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.7;
  max-width: 420px;
  margin-bottom: 28px;
}

.sh-hero__pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 40px;
}

.sh-hero__pills span {
  font-family: var(--font-body);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(201, 162, 96, 0.7);
  border: 1px solid rgba(201, 162, 96, 0.2);
  padding: 5px 12px;
  background: rgba(201, 162, 96, 0.04);
}

.sh-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.sh-cta-primary {
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

.sh-cta-primary:hover { background: var(--color-gold-light); }

.sh-cta-primary__arrow {
  display: flex;
  align-items: center;
  transition: transform 0.2s;
}

.sh-cta-primary:hover .sh-cta-primary__arrow { transform: translateX(4px); }

.sh-cta-secondary {
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

.sh-cta-secondary:hover {
  border-color: rgba(201, 162, 96, 0.4);
  color: var(--color-gold);
}

.sh-hero__right {
  flex: 1;
  position: relative;
  overflow: hidden;
}

.sh-hero__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  filter: saturate(0.4) brightness(0.9);
}

.sh-hero__img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(8,8,8,0.4) 0%, transparent 60%);
}

.sh-hero__stat-card {
  position: absolute;
  bottom: 48px;
  right: 48px;
  background: var(--color-gold);
  padding: 20px 28px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.sh-hero__stat-num {
  font-family: var(--font-display);
  font-size: 40px;
  font-weight: 800;
  color: var(--color-bg);
  line-height: 1;
}

.sh-hero__stat-label {
  font-family: var(--font-body);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(8,8,8,0.7);
}

/* ── STATEMENT ── */
.sh-statement {
  background: var(--color-bg-2);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  padding: 100px 0;
}

.sh-statement__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;
  display: grid;
  grid-template-columns: 4px 1fr 1fr;
  gap: 64px;
  align-items: center;
}

.sh-statement__line {
  width: 2px;
  height: 120px;
  background: linear-gradient(to bottom, transparent, var(--color-gold), transparent);
  justify-self: center;
}

.sh-statement__quote {
  font-family: var(--font-display);
  font-size: clamp(28px, 3vw, 44px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  line-height: 1.1;
  letter-spacing: 0.02em;
}

.gold { color: var(--color-gold); }

.sh-statement__body {
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.8;
}

/* ── POURQUOI CHOISIR ── */
.sh-why {
  background: var(--color-bg-2);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  padding: 100px 0;
}

.sh-why__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  align-items: center;
}

.sh-why__title {
  font-family: var(--font-display);
  font-size: clamp(32px, 3.5vw, 52px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  line-height: 1.05;
  letter-spacing: 0.02em;
  margin: 16px 0 24px;
}

.sh-why__intro {
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.8;
  max-width: 440px;
  margin-bottom: 36px;
}

.sh-why__callout {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.sh-why__callout-line {
  width: 2px;
  min-height: 52px;
  background: var(--color-gold);
  flex-shrink: 0;
  opacity: 0.6;
}

.sh-why__callout p {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 400;
  color: var(--color-text);
  line-height: 1.7;
  font-style: italic;
}

.sh-why__right {
  display: flex;
  flex-direction: column;
}

.sh-why__threats-intro {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-gold);
  margin-bottom: 8px;
}

.sh-why__threat {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
  border-bottom: 1px solid var(--color-border);
  transition: background 0.2s;
}

.sh-why__threat:first-child { border-top: 1px solid var(--color-border); }

.sh-why__threat-dot {
  width: 8px;
  height: 8px;
  background: var(--color-gold);
  flex-shrink: 0;
}

.sh-why__threat-text {
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 400;
  color: var(--color-text);
  letter-spacing: 0.01em;
}

/* ── AGENTS ── */
.sh-agents {
  background: var(--color-bg);
  padding: 120px 0;
}

.sh-agents__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;
}

.sh-agents__header {
  margin-bottom: 80px;
}

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
  font-size: clamp(36px, 4vw, 56px);
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

.sh-accordion {
  border-top: 1px solid var(--color-border);
}

.sh-accordion__item {
  border-bottom: 1px solid var(--color-border);
  cursor: pointer;
  transition: border-color 0.3s;
}

.sh-accordion__item--open {
  border-bottom-color: var(--color-gold);
}

.sh-accordion__header {
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 28px 0;
  user-select: none;
}

.sh-accordion__num {
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 700;
  color: var(--color-gold);
  opacity: 0.5;
  letter-spacing: 0.08em;
  flex-shrink: 0;
  transition: opacity 0.3s;
}

.sh-accordion__item--open .sh-accordion__num { opacity: 1; }

.sh-accordion__titles {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.sh-accordion__tag {
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-gold);
  opacity: 0.7;
}

.sh-accordion__title {
  font-family: var(--font-display);
  font-size: clamp(20px, 2.5vw, 28px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  letter-spacing: 0.03em;
  line-height: 1;
  transition: color 0.3s;
}

.sh-accordion__chevron {
  color: var(--color-gold);
  opacity: 0.5;
  transition: transform 0.35s ease, opacity 0.3s;
  flex-shrink: 0;
}

.sh-accordion__item--open .sh-accordion__chevron {
  transform: rotate(180deg);
  opacity: 1;
}

.sh-accordion__body {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.35s ease;
  overflow: hidden;
}

.sh-accordion__item--open .sh-accordion__body {
  grid-template-rows: 1fr;
}

.sh-accordion__body-inner {
  overflow: hidden;
}

.sh-accordion__desc {
  font-size: 14px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.7;
  padding-bottom: 20px;
  max-width: 600px;
}

.sh-accordion__features {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 32px;
  padding-bottom: 32px;
}

.sh-accordion__features li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  font-weight: 300;
  color: var(--color-text);
}

.sh-accordion__dot {
  width: 5px;
  height: 5px;
  background: var(--color-gold);
  flex-shrink: 0;
}

/* ── MÉTHODE ── */
.sh-method {
  background: var(--color-bg-2);
  border-top: 1px solid var(--color-border);
  padding: 120px 0;
}

.sh-method__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;
}

.sh-method__header { margin-bottom: 72px; }

.sh-method__intro {
  margin-top: 20px;
  color: var(--color-text-muted);
  font-size: 1rem;
  line-height: 1.7;
  max-width: 680px;
}

.sh-method__steps {
  display: flex;
  flex-direction: column;
}

.sh-step {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 40px;
  padding: 36px 0;
  border-bottom: 1px solid var(--color-border);
  align-items: start;
}

.sh-step:first-child { border-top: 1px solid var(--color-border); }

.sh-step__num {
  font-family: var(--font-display);
  font-size: 56px;
  font-weight: 800;
  color: rgba(201, 162, 96, 0.2);
  line-height: 1;
  letter-spacing: -0.02em;
  transition: color 0.3s;
}

.sh-step:hover .sh-step__num { color: var(--color-gold); }

.sh-step__title {
  font-family: var(--font-body);
  font-size: 18px;
  font-weight: 600;
  color: var(--color-white);
  margin-bottom: 10px;
  letter-spacing: 0.01em;
}

.sh-step__text {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.7;
  max-width: 560px;
}

/* ── CROSS-SELL ── */
.sh-crossell {
  border-top: 1px solid var(--color-border);
}

.sh-crossell__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;
}

.sh-crossell__body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding: 36px 0;
  text-decoration: none;
  transition: background 0.2s;
  cursor: pointer;
}

.sh-crossell__body:hover .sh-crossell__cta { gap: 16px; }
.sh-crossell__body:hover { background: rgba(201, 162, 96, 0.03); }

.sh-crossell__title {
  font-family: var(--font-display);
  font-size: clamp(16px, 1.8vw, 22px);
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-white);
  letter-spacing: 0.04em;
  line-height: 1.2;
}

.sh-crossell__title-sub {
  color: var(--color-gold);
}

.sh-crossell__text {
  font-size: 13px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.6;
  max-width: 480px;
}

.sh-crossell__cta {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-gold);
  transition: gap 0.25s ease;
}

/* ── CROSS-SELL ── */

/* V3 — carte sombre bordée or */
.cs-v3-wrap {
  padding: 80px 0;
  background: var(--color-bg);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  justify-content: center;
}
.cs-v3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-decoration: none;
  border: 1px solid rgba(201, 162, 96, 0.35);
  padding: 56px 80px;
  max-width: 700px;
  width: 100%;
  transition: border-color 0.3s, background 0.3s;
}
.cs-v3__badge {
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-gold);
  border: 1px solid rgba(201, 162, 96, 0.3);
  padding: 4px 14px;
  margin-bottom: 32px;
  display: inline-block;
}
.cs-v3__title {
  font-family: var(--font-display);
  font-size: clamp(22px, 2.5vw, 32px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  line-height: 1.15;
  margin-bottom: 16px;
}
.cs-v3__text {
  font-size: 14px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.7;
  margin-bottom: 32px;
}
.cs-v3__cta {
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
.cs-v3__cta:hover { opacity: 0.85; }

/* V3b — carte or inversée */
.cs-v3b-wrap {
  padding: 80px 0;
  background: var(--color-bg);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  justify-content: center;
}
.cs-v3b {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-decoration: none;
  background: var(--color-gold);
  padding: 56px 80px;
  max-width: 700px;
  width: 100%;
  gap: 32px;
  transition: opacity 0.25s;
}
.cs-v3b:hover { opacity: 0.9; }
.cs-v3b__title {
  font-family: var(--font-display);
  font-size: clamp(22px, 2.5vw, 32px);
  font-weight: 800;
  text-transform: uppercase;
  color: #000;
  line-height: 1.15;
}
.cs-v3b__cta {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #000;
  border-bottom: 1px solid rgba(0,0,0,0.3);
  padding-bottom: 3px;
}

/* ── ENGAGEMENTS ── */
.sh-engagements {
  background: var(--color-bg);
  padding: 120px 0;
  border-top: 1px solid var(--color-border);
}

.sh-engagements__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;
}

.sh-engagements__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  margin-top: 60px;
  background: var(--color-border);
}

.sh-engagement {
  background: var(--color-bg-2);
  padding: 40px 36px;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: background 0.3s;
}

.sh-engagement:hover { background: rgba(201, 162, 96, 0.05); }

.sh-engagement__icon {
  color: var(--color-gold);
  flex-shrink: 0;
  opacity: 0.8;
}

.sh-engagement__text {
  font-size: 14px;
  font-weight: 400;
  color: var(--color-text);
  letter-spacing: 0.02em;
  line-height: 1.4;
}

/* ── RESPONSIVE ── */
@media (max-width: 1200px) {
  .sh-hero__left { padding: 80px 48px 80px 40px; }
  .sh-agents__container, .sh-method__container,
  .sh-statement__container, .sh-engagements__container,
  .sh-why__container { padding: 0 40px; }
  .sh-engagements__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 1024px) {
  .sh-hero { flex-direction: column; height: auto; max-height: none; overflow: visible; }
  .sh-hero__left { width: 100%; border-right: none; border-bottom: 1px solid var(--color-border); padding: 32px 40px 48px; }
  .sh-hero__left::before { display: none; }
  .sh-hero__right { height: 45vh; min-height: 280px; }
  .sh-hero__stat-card { display: none; }
  .sh-statement__container { grid-template-columns: 4px 1fr; }
  .sh-statement__body { grid-column: 2; }
  .sh-why__container { grid-template-columns: 1fr; gap: 48px; }
  /* cross-sell tablet */
  .cs-v3 { padding: 48px 40px; }
  .cs-v3b__top { padding: 40px; }
  .cs-v3b__footer { padding: 20px 40px; }
}

@media (max-width: 768px) {
  /* Fix double padding : .sh-hero a déjà padding-top: 72px */
  .sh-hero__left { padding: 32px 24px 48px; }
  .sh-agents__container, .sh-method__container,
  .sh-statement__container, .sh-engagements__container { padding: 0 24px; }
  .sh-why { padding: 72px 0; }
  .sh-why__container { padding: 0 24px; }
  .sh-agents { padding: 80px 0; }
  .sh-method { padding: 80px 0; }
  .sh-engagements { padding: 80px 0; }
  .sh-engagements__grid { grid-template-columns: 1fr; }
  .sh-statement { padding: 72px 0; }
  .sh-statement__container { grid-template-columns: 1fr; gap: 32px; }
  .sh-statement__line { display: none; }
  .sh-step { grid-template-columns: 80px 1fr; gap: 20px; padding: 28px 0; }
  .sh-step__num { font-size: 40px; }

  .sh-hero__img { filter: saturate(0.6) brightness(1.05); }
  .sh-hero__img-overlay { background: linear-gradient(to bottom, rgba(8,8,8,0.3) 0%, rgba(8,8,8,0.15) 100%); }
  .sh-hero__actions { flex-direction: column; }
  .sh-cta-primary, .sh-cta-secondary { justify-content: center; }
  /* cross-sell mobile */
  .cs-v3-wrap { padding: 48px 24px; }
  .cs-v3 { padding: 36px 24px; }
  .cs-v3b-wrap { padding: 48px 24px; }
  .cs-v3b__top { padding: 36px 24px; }
  .cs-v3b__footer { padding: 18px 24px; }
}
</style>

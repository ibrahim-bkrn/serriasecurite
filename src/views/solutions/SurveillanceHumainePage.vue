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
        <h1 class="sh-hero__title">
          Surveillance<br />
          <span class="sh-hero__title-stroke">Humaine</span>
        </h1>
        <p class="sh-hero__label">Gardiennage humain • Rondes • Interventions sur alarme</p>
        <p class="sh-hero__sub">
          Des agents certifiés CNAPS, déployés en 24h sur toute l'Île-de-France.
          Prévenir les risques. Protéger vos biens. Agir immédiatement.
        </p>
        <div class="sh-hero__actions">
          <router-link to="/contact" class="sh-cta-primary">
            <span>Je sécurise mon bien</span>
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
        <img :src="heroAgent" alt="Agent de sécurité Sierra Sécurité" class="sh-hero__img" />
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
          <router-link to="/contact" class="sh-cta-primary">
            <span>Parlons-en plus en détails</span>
            <div class="sh-cta-primary__arrow">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </router-link>
        </div>
        <div class="sh-why__right">
          <p class="sh-why__threats-intro reveal" :class="{ visible: whyVis }">
            Protection active contre 
          </p>
          <div
            v-for="(threat, i) in threats"
            :key="threat.label"
            class="sh-why__threat reveal"
            :class="[`reveal-delay-${i + 1}`, { visible: whyVis }]"
          >
            <span class="sh-why__threat-icon" v-html="threat.icon"></span>
            <span class="sh-why__threat-text">{{ threat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── PROFILS AGENTS ── -->
    <section class="sh-agents" ref="agRef">
      <div class="sh-agents__header reveal" :class="{ visible: agVis }">
        <p class="section-label">Nos profils d'agents de sécurité</p>
        <h2 class="sh-agents__title">3 TYPES D'AGENTS</h2>
        <p class="sh-agents__sub">Chaque mission bénéficie du profil adapté à votre environnement et vos risques.</p>
      </div>

      <div class="sh-agents__grid">
        <div
          v-for="(agent, i) in agents"
          :key="agent.title"
          class="sh-agent-card"
        >
          <div class="sh-agent-card__photo">
            <img :src="agent.img" :alt="agent.title" class="sh-agent-card__img" />
            <div class="sh-agent-card__photo-overlay"></div>
            <span class="sh-agent-card__num">{{ String(i + 1).padStart(2, '0') }}</span>
          </div>
          <div class="sh-agent-card__body">
            <span class="sh-agent-card__tag">{{ agent.tag }}</span>
            <h3 class="sh-agent-card__title">{{ agent.title }}</h3>
            <div class="sh-agent-card__expandable">
              <p class="sh-agent-card__desc">{{ agent.desc }}</p>
              <ul class="sh-agent-card__features">
                <li v-for="f in agent.features" :key="f">
                  <span class="sh-agent-card__dot"></span>{{ f }}
                </li>
              </ul>
              <router-link to="/contact" class="sh-agent-card__cta">
                <span>Parlons de votre site</span>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="sh-agents__cta-row reveal reveal-delay-3" :class="{ visible: agVis }">
        <p class="sh-agents__cta-text">Vous ne savez pas quel profil correspond à votre situation ?</p>
        <router-link to="/contact" class="sh-cta-primary">
          <span>On définit ça ensemble</span>
          <div class="sh-cta-primary__arrow">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </router-link>
      </div>
    </section>

    <!-- ── MÉTHODE ── -->
    <section class="sh-method" ref="mRef">
      <div class="sh-method__container">
        <div class="sh-method__header">
          <div class="sh-method__header-text">
            <p class="section-label reveal" :class="{ visible: mVis }">Notre process</p>
            <h2 class="section-title reveal reveal-delay-1" :class="{ visible: mVis }">DÉPLOIEMENT EN 5 ÉTAPES</h2>
            <p class="sh-method__intro reveal reveal-delay-2" :class="{ visible: mVis }">
              Pas d'agent placé au hasard. Chaque mission est cadrée, suivie et adaptée à votre site.
            </p>
          </div>
          <div class="sh-method__header-logo">
            <img :src="logoFond" alt="" class="sh-method__logo" />
          </div>
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

    <!-- ── CROSS-SELL V3 : carte sombre bordée or ── -->
    <section class="cs-v3-wrap" :style="{ backgroundImage: `url(${crossImg})` }">
      <div class="cs-v3">
        <h2 class="cs-v3__title">Et si vous ajoutez à cela<br />une surveillance matérielle ?</h2>
        <p class="cs-v3__text">Quand la sécurité est fragmentée, les failles apparaissent. SIERRA SÉCURITÉ intègre l'humain et la technologie pour une protection cohérente, réactive et maîtrisée, du terrain au centre de contrôle..</p>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20" fill="currentColor">
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

import crossImg     from '../../assets/photos/videosurveillance.jpg'
import logoFond     from '../../assets/logo/Logo de fond 1.png'
import SH1          from '../../assets/photos/SH1.png'
import agentApsImg  from '../../assets/photos/agent-aps.png'
import agentCynoImg from '../../assets/photos/agent-cynophile.png'
import agentMobImg  from '../../assets/photos/agent-mobile.png'

import heroAgent from '../../assets/photos/agenthero.png'


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
    img: agentApsImg,
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
    img: agentCynoImg,
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
    img: agentMobImg,
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
  {
    label: 'Intrusions, effractions & vols',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="M9.5 9a2.5 2.5 0 1 1 5 0v2H9.5V9z"/>
      <rect x="8" y="11" width="8" height="5" rx="1"/>
    </svg>`,
  },
  {
    label: 'Dégradations, vandalisme, conflits',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>`,
  },
  {
    label: 'Squats ou occupations illégales',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <path d="M9 22V12h6v10"/>
      <line x1="4" y1="4" x2="20" y2="20"/>
    </svg>`,
  },
  {
    label: 'Risques techniques, fuites, incendies',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
    </svg>`,
  },
  {
    label: 'Troubles dans les établissements publics ou privés',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>`,
  },
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
.sh-page { background: var(--color-bg); overflow-x: hidden; }

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
  font-size: 15px;
  font-weight: 500;
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
  font-size: 19px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.7;
  max-width: 550px;
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
  object-position: center  ;
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
  font-size: 18px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.8;
  max-width: 500px;
  margin-bottom: 25px;
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

.sh-why__threat-icon {
  color: var(--color-gold);
  flex-shrink: 0;
  opacity: 0.85;
  display: flex;
  align-items: center;
}

.sh-why__threat-text {
  font-family: var(--font-body);
  font-size: 20px;
  font-weight: 400;
  color: var(--color-text);
  letter-spacing: 0.01em;
}

/* ── AGENTS ── */
.sh-agents {
  background: var(--color-bg);
  padding: 120px 0 0;
}

.sh-agents__header {
  max-width: 1280px;
  margin: 0 auto 72px;
  padding: 0 80px;
}

.sh-agents__title {
  font-family: var(--font-display);
  font-size: clamp(40px, 5vw, 72px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  letter-spacing: 0.02em;
  line-height: 1;
  margin: 12px 0 20px;
}

.sh-agents__sub {
  font-family: var(--font-body);
  font-size: 20px;
  font-weight: 300;
  color: var(--color-muted);
  max-width: 800px;
  line-height: 1.7;
}

/* ── AGENT CARDS GRID ── */
.sh-agents__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 80%;
  margin: 0 auto;
  gap: 12px;
}

.sh-agent-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
  border-right: 1px solid rgba(201, 162, 96, 0.12);
}

.sh-agent-card { border-right: none; }

/* ── PHOTO ZONE ── */
.sh-agent-card__photo {
  height: 50vh;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  border-radius: 4px 4px 0 0;
}

.sh-agent-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  filter: saturate(0.25) brightness(0.8);
  transition: transform 0.7s ease, filter 0.5s ease;
}


.sh-agent-card__photo-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(8,8,8,0.05) 0%, rgba(8,8,8,0.5) 100%);
}

.sh-agent-card__num {
  position: absolute;
  top: 24px;
  left: 28px;
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: var(--color-gold);
  opacity: 0.7;
}

/* ── TEXT ZONE ── */
.sh-agent-card__body {
  flex-shrink: 0;
  background: var(--color-bg-2);
  border-top: 1px solid rgba(201, 162, 96, 0.15);
  padding: 28px 32px 32px;
}

.sh-agent-card__tag {
  display: block;
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-gold);
  opacity: 0.7;
  margin-bottom: 10px;
}

.sh-agent-card__title {
  font-family: var(--font-display);
  font-size: clamp(18px, 1.8vw, 26px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  letter-spacing: 0.03em;
  line-height: 1.05;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sh-agent-card__title {
  white-space: normal;
}

.sh-agent-card__desc {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.75;
  margin-top: 18px;
  margin-bottom: 22px;
}

.sh-agent-card__features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin-bottom: 28px;
}

.sh-agent-card__features li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 400;
  color: var(--color-text);
  letter-spacing: 0.01em;
}

.sh-agent-card__dot {
  width: 5px;
  height: 5px;
  background: var(--color-gold);
  flex-shrink: 0;
}

.sh-agent-card__cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-gold);
  text-decoration: none;
  transition: gap 0.2s;
}

.sh-agent-card__cta:hover { gap: 16px; }

/* ── AGENTS CTA ROW ── */
.sh-agents__cta-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 48px 80px;
  border-top: 1px solid var(--color-border);
}

.sh-agents__cta-text {
  font-family: var(--font-body);
  font-size: 20px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.6;
}

.section-label {
  font-family: var(--font-body);
  font-size: 16px;
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
  font-size: 22px;
  font-weight: 300;
  color: var(--color-muted);
  max-width: 800px;
  line-height: 1.7;
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

.sh-method__header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 72px;
}

.sh-method__header-text { flex: 1; }

.sh-method__header-logo {
  flex-shrink: 0;
  opacity: 0.9;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sh-method__logo {
  height: 130px;
  width: auto;
  display: block;
}

.sh-method__intro {
  margin-top: 20px;
  color: var(--color-text-muted);
  font-size: 1.15rem;
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
  color: var(--color-gold);
  line-height: 1;
  letter-spacing: -0.02em;
  transition: color 0.3s;
}

.sh-step__title {
  font-family: var(--font-body);
  font-size: 22px;
  font-weight: 600;
  color: var(--color-white);
  margin-bottom: 10px;
  letter-spacing: 0.01em;
}

.sh-step__text {
  font-family: var(--font-body);
  font-size: 19px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.7;
  max-width: 680px;
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
  position: relative;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
}

.cs-v3-wrap::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(6, 6, 6, 0.85);
  z-index: 0;
}

.cs-v3-wrap > * { position: relative; z-index: 1; }

.cs-v3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-decoration: none;
  background: var(--color-bg);
  box-shadow: 0 0 0 1px rgba(201, 162, 96, 0.052);
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
  font-size: 18px;
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
  max-width: 1480px;
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
  font-size: 19px;
  font-weight: 400;
  color: var(--color-text);
  letter-spacing: 0.02em;
  line-height: 1.4;
}

/* ── RESPONSIVE ── */
@media (max-width: 1200px) {
  .sh-hero__left { padding: 80px 48px 80px 40px; }
  .sh-method__container, .sh-engagements__container,
  .sh-why__container { padding: 0 40px; }
  .sh-agents__header { padding: 0 40px; }
  .sh-agents__cta-row { padding: 48px 40px; }
  .sh-engagements__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 1024px) {
  .sh-hero { flex-direction: column; height: auto; max-height: none; overflow: visible; }
  .sh-hero__left { width: 100%; border-right: none; border-bottom: 1px solid var(--color-border); padding: 32px 40px 48px; }
  .sh-hero__left::before { display: none; }
  .sh-hero__right { height: 340px; min-height: unset; }
  .sh-hero__stat-card { display: none; }
  .sh-why__container { grid-template-columns: 1fr; gap: 48px; }
  .sh-agents__grid { grid-template-columns: 1fr !important; max-width: 100%; }
  .sh-agent-card { border-right: none; }
  .sh-agent-card__expandable { max-height: 500px !important; opacity: 1 !important; }
  .sh-agent-card__title { white-space: normal !important; font-size: clamp(22px, 4vw, 30px) !important; }
  .cs-v3 { padding: 48px 40px; }
}

@media (max-width: 768px) {
  .sh-hero__left { padding: 32px 20px 40px; }
  .sh-hero__right { height: 280px; }
  .sh-method__container, .sh-engagements__container { padding: 0 20px; }
  .sh-why { padding: 56px 0; }
  .sh-why__container { padding: 0 20px; }
  .sh-agents { padding: 56px 0 0; }
  .sh-agents__header { padding: 0 20px; margin-bottom: 48px; }
  .sh-agents__cta-row { padding: 32px 20px; flex-direction: column; align-items: flex-start; gap: 20px; }
  .sh-method { padding: 56px 0; }
  .sh-engagements { padding: 56px 0; }
  .sh-engagements__grid { grid-template-columns: 1fr; }
  .sh-step { grid-template-columns: 64px 1fr; gap: 16px; padding: 24px 0; }
  .sh-step__num { font-size: 36px; }
  .sh-method__header { flex-direction: column; gap: 0; }
  .sh-method__header-logo { display: none; }
  .sh-hero__img { filter: saturate(0.6) brightness(1.05); }
  .sh-hero__img-overlay { background: linear-gradient(to bottom, rgba(8,8,8,0.3) 0%, rgba(8,8,8,0.15) 100%); }
  .sh-hero__actions { flex-direction: column; }
  .sh-cta-primary, .sh-cta-secondary { justify-content: center; }
  .cs-v3-wrap { padding: 80px 20px; }
  .cs-v3 { padding: 32px 20px; }
}
</style>

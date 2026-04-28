<template>
  <div class="pp-page">
    <NavBar />

    <!-- HERO -->
    <section class="pp-hero">
      <div class="pp-hero__left">
        <nav class="pp-hero__breadcrumb">
          <router-link to="/">Accueil</router-link>
          <span>/</span>
          <router-link to="/solutions/protection-physique">Protection physique</router-link>
        </nav>
        <p class="pp-hero__label">Protection physique</p>
        <h1 class="pp-hero__title">
          Porte<br />
          <span class="pp-hero__title-stroke">Anti-Squat</span>
        </h1>
        <p class="pp-hero__sub">
          Protégez vos biens vacants contre toute intrusion –
          intervention en 48h chrono.
        </p>
        <div class="pp-hero__pills">
          <span>📍 Île-de-France</span>
          <span>🔐 Certifié A2P BP1</span>
          <span>🛠 Installation sans travaux</span>
          <span>⏱ Location ou achat</span>
        </div>
        <div class="pp-hero__actions">
          <router-link to="/contact" class="pp-cta-primary">
            <span>Sécuriser mon bien</span>
            <div class="pp-cta-primary__arrow">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </router-link>
          <a href="tel:0782564979" class="pp-cta-secondary">Être rappelé</a>
        </div>
      </div>
      <div class="pp-hero__right">
        <img :src="porteImg1" alt="Porte anti-squat Sierra Sécurité" class="pp-hero__img" />
        <div class="pp-hero__img-overlay"></div>
        <div class="pp-hero__stat-card">
          <span class="pp-hero__stat-num">48h</span>
          <span class="pp-hero__stat-label">Intervention garantie</span>
        </div>
      </div>
    </section>

    <!-- STATS -->
    <section class="pp-stats">
      <p class="pp-stats__title">La menace est réelle.</p>
      <div class="pp-stats__grid">
        <div class="pp-stats__item">
          <span class="pp-stats__num">7 000</span>
          <span class="pp-stats__label">logements squattés<br />en France aujourd'hui</span>
        </div>
        <div class="pp-stats__item">
          <span class="pp-stats__num">+ 10 000 €</span>
          <span class="pp-stats__label">de frais d'expulsion<br />en moyenne</span>
        </div>
        <div class="pp-stats__item">
          <span class="pp-stats__num">2 ans</span>
          <span class="pp-stats__label">de procédure légale<br />minimum</span>
        </div>
      </div>
      <p class="pp-stats__sub">
        La porte anti-squat évite tout ça — installation en 48h, résistance certifiée A2P BP1,
        sans travaux, location ou achat.
      </p>
    </section>

    <!-- LE PRODUIT -->
    <section class="pp-product">
      <div class="pp-product__img">
        <img :src="porteImg2" alt="Porte anti-squat Sierra Sécurité" />
        <div class="pp-product__img-overlay"></div>
      </div>
      <div class="pp-product__text">
        <p class="pp-label">Le produit</p>
        <h2 class="pp-product__title">UNE PORTE BLINDÉE<br />CONÇUE POUR L'URGENCE</h2>
        <p class="pp-product__desc">
          Certifiée A2P BP1, nos portes offrent un haut niveau de résistance
          aux effractions — posée en moins d'une heure, sans toucher au cadre existant.
        </p>
        <div class="pp-product__lists">
          <div class="pp-product__col">
            <p class="pp-product__col-title">Caractéristiques</p>
            <ul class="pp-product__specs">
              <li v-for="c in caracteristiques" :key="c">
                <span class="pp-product__dash">—</span>{{ c }}
              </li>
            </ul>
          </div>
          <div class="pp-product__divider"></div>
          <div class="pp-product__col">
            <p class="pp-product__col-title">Avantages</p>
            <ul class="pp-product__specs">
              <li v-for="a in avantages" :key="a">
                <span class="pp-product__dash">—</span>{{ a }}
              </li>
            </ul>
          </div>
        </div>
        <router-link to="/contact" class="pp-cta-primary">
          <span>Demander un devis gratuit</span>
          <div class="pp-cta-primary__arrow">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </router-link>
      </div>
    </section>

    <!-- FORMULES -->
    <section class="pp-formules">
      <div class="pp-formules__container">
        <p class="pp-label">Votre formule</p>
        <h2 class="pp-formules__title">LOCATION OU ACHAT —<br />CHOISISSEZ CE QUI VOUS CONVIENT</h2>
        <div class="pp-formules__grid">

          <!-- LOCATION -->
          <div class="pp-formule">
            <div class="pp-formule__header">
              <span class="pp-formule__icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </span>
              <h3 class="pp-formule__name">Location</h3>
              <p class="pp-formule__desc">Flexible, sans engagement long terme. Idéale pour les besoins ponctuels ou temporaires.</p>
            </div>
            <router-link to="/contact" class="pp-formule__cta-full">
              Demander un devis
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </router-link>
            <div class="pp-formule__section">
              <p class="pp-formule__section-title">Cas d'usage</p>
              <ul class="pp-formule__list">
                <li>Chantiers de construction</li>
                <li>Logements vacants temporaires</li>
                <li>Biens en succession ou transition</li>
                <li>Résiliation à tout moment</li>
              </ul>
            </div>
            <div class="pp-formule__divider"></div>
            <div class="pp-formule__section">
              <p class="pp-formule__section-title">Idéal si</p>
              <ul class="pp-formule__checks">
                <li>Votre besoin est temporaire ou incertain</li>
                <li>Le bien est en cours de vente ou de succession</li>
                <li>Vous gérez un chantier en cours</li>
              </ul>
            </div>
          </div>

          <!-- ACHAT -->
          <div class="pp-formule pp-formule--featured">
            <div class="pp-formule__header">
              <span class="pp-formule__icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
              </span>
              <h3 class="pp-formule__name">Achat définitif</h3>
              <p class="pp-formule__desc">Un seul investissement pour une protection permanente de votre bien.</p>
            </div>
            <router-link to="/contact" class="pp-formule__cta-full pp-formule__cta-full--gold">
              Demander un devis
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </router-link>
            <div class="pp-formule__section">
              <p class="pp-formule__section-title">Cas d'usage</p>
              <ul class="pp-formule__list">
                <li>Appartements & maisons</li>
                <li>Locaux commerciaux & bureaux</li>
                <li>Entrepôts & zones industrielles</li>
                <li>Protection long terme garantie</li>
              </ul>
            </div>
            <div class="pp-formule__divider"></div>
            <div class="pp-formule__section">
              <p class="pp-formule__section-title">Idéal si</p>
              <ul class="pp-formule__checks">
                <li>Votre bien est permanent ou de longue durée</li>
                <li>Vous souhaitez un investissement unique</li>
                <li>Vous gérez un patrimoine immobilier</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- INSTALLATION -->
    <section class="pp-method">
      <div class="pp-method__container">
        <div class="pp-method__header">
          <div class="pp-method__header-text">
            <p class="pp-label">Notre process</p>
            <h2 class="pp-method__title">INSTALLATION EN 4 ÉTAPES</h2>
            <p class="pp-method__intro">
              Techniciens spécialisés, aucune modification définitive du cadre. Votre bien est sécurisé le jour même.
            </p>
          </div>
          <div class="pp-method__header-logo">
            <img :src="logoFond" alt="" class="pp-method__logo" />
          </div>
        </div>
        <div class="pp-method__steps">
          <div v-for="(step, i) in installSteps" :key="step.title" class="pp-step">
            <div class="pp-step__num">{{ String(i + 1).padStart(2, '0') }}</div>
            <div class="pp-step__body">
              <h3 class="pp-step__title">{{ step.title }}</h3>
              <p class="pp-step__text">{{ step.text }}</p>
            </div>
          </div>
        </div>
        <p class="pp-method__note">⏱ Temps moyen : moins d'1h par porte</p>
      </div>
    </section>

    <!-- COMBINEZ LES COUCHES -->
    <section class="pp-layers">
      <div class="pp-layers__container">
        <p class="pp-label">Allez plus loin</p>
        <h2 class="pp-title">COMBINEZ LES COUCHES<br />POUR UNE PROTECTION TOTALE</h2>
        <p class="pp-layers__sub">
          La porte est le socle. Sierra Sécurité installe l'ensemble des couches pour
          rendre votre bien véritablement inaccessible.
        </p>
        <div class="pp-layers__grid">
          <router-link
            v-for="layer in layers"
            :key="layer.title"
            :to="layer.route"
            class="pp-layer"
          >
            <div class="pp-layer__decorator">
              <div class="pp-layer__decorator-grid"></div>
              <div class="pp-layer__icon-box" v-html="layer.icon"></div>
            </div>
            <span class="pp-layer__num">{{ layer.num }}</span>
            <h3 class="pp-layer__title">{{ layer.title }}</h3>
            <p class="pp-layer__desc">{{ layer.desc }}</p>
            <span class="pp-layer__link">Découvrir →</span>
          </router-link>
        </div>
      </div>
    </section>


    <PageCTA
      label="Votre bien mérite une première ligne de défense."
      title="Posée en moins d'une heure."
      subtitle="Devis gratuit · Certifié A2P BP1 · Réversible · Toute l'Île-de-France"
    />

    <FooterSection />
  </div>
</template>

<script setup>
import NavBar        from '../../components/NavBar.vue'
import FooterSection from '../../components/FooterSection.vue'
import PageCTA       from '../../components/PageCTA.vue'

import porteImg1   from '../../assets/photos/porte-antisquat.jpeg'
import porteImg2   from '../../assets/photos/porte-antisquat2.jpeg'
import logoFond    from '../../assets/logo/Logo de fond 1.png'


const installSteps = [
  {
    title: 'Diagnostic et prise de mesures',
    text: 'Un technicien se déplace pour évaluer l\'encadrement, prendre les cotes et définir la configuration adaptée.',
  },
  {
    title: 'Livraison et installation',
    text: 'La porte est livrée et posée sur site. Aucune modification définitive du cadre existant n\'est nécessaire.',
  },
  {
    title: 'Remise des clés + explication du fonctionnement',
    text: 'Vous repartez avec vos clés et une explication complète du système de verrouillage 3 points.',
  },
  {
    title: 'Raccordement alarme ou télésurveillance (option)',
    text: 'Sur demande, la porte peut être couplée à un système d\'alarme autonome sans fil ou à une télésurveillance APSAD P3.',
  },
]

const caracteristiques = [
  'Structure acier renforcé',
  'Serrure 3 points haute sécurité',
  'Système anti-dégondage',
  'Détection de choc (option)',
  'Finition propre et soignée',
]

const avantages = [
  'Pose en 30 à 60 minutes',
  'Adaptable à tous types de cadres',
  'Installation réversible sans dommage',
  'Résistance validée par tests agréés',
]

const layers = [
  {
    num: '01',
    title: 'Protection physique',
    desc: 'La porte — premier rempart contre toute intrusion.',
    route: '/solutions/protection-physique',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>',
  },
  {
    num: '02',
    title: 'Alarme anti-intrusion',
    desc: "Détecte toute tentative d'entrée et déclenche l'alerte.",
    route: '/solutions/alarme-anti-intrusion',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg>',
  },
  {
    num: '03',
    title: 'Vidéosurveillance',
    desc: 'Surveille, enregistre et alerte 24h/24 depuis votre téléphone.',
    route: '/solutions/videosurveillance',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.889L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/></svg>',
  },
  {
    num: '04',
    title: 'Surveillance humaine',
    desc: 'Agents certifiés CNAPS — intervention physique immédiate.',
    route: '/solutions/surveillance-humaine',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>',
  },
]

</script>

<style scoped>
.pp-page { background: var(--color-bg); }

/* ── SHARED ── */
.pp-label {
  font-family: var(--font-body);
  font-size: 14px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 16px;
  display: block;
}

.pp-label--muted { color: rgba(201,162,96,0.6); }

.pp-title {
  font-family: var(--font-display);
  font-size: clamp(36px, 4vw, 64px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  line-height: 1.02;
  letter-spacing: 0.02em;
}

/* ── HERO ── */
.pp-hero {
  display: flex;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  padding-top: 72px;
}

.pp-hero__left {
  width: 48%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 64px 80px 80px;
  border-right: 1px solid var(--color-border);
  position: relative;
}

.pp-hero__left::before {
  content: '';
  position: absolute;
  left: 0; top: 20%; bottom: 20%;
  width: 2px;
  background: linear-gradient(to bottom, transparent, var(--color-gold), transparent);
}

.pp-hero__breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 40px;
}

.pp-hero__breadcrumb a {
  font-family: var(--font-body);
  font-size: 11px;
  letter-spacing: 0.1em;
  color: var(--color-muted);
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.2s;
}

.pp-hero__breadcrumb a:last-child { color: var(--color-gold); }

.pp-hero__breadcrumb span {
  color: var(--color-muted);
  font-size: 10px;
}

.pp-hero__label {
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 16px;
}

.pp-hero__title {
  font-family: var(--font-display);
  font-size: clamp(48px, 5vw, 80px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  line-height: 0.95;
  letter-spacing: 0.01em;
  margin-bottom: 28px;
}

.pp-hero__title-stroke {
  -webkit-text-stroke: 2px rgba(201, 162, 96, 0.5);
  color: transparent;
}

.pp-hero__sub {
  font-family: var(--font-body);
  font-size: 19px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.7;
  max-width: 650px;
  margin-bottom: 28px;
}

.pp-hero__pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 40px;
}

.pp-hero__pills span {
  font-family: var(--font-body);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(201, 162, 96, 0.7);
  border: 1px solid rgba(201, 162, 96, 0.2);
  padding: 5px 12px;
  background: rgba(201, 162, 96, 0.04);
}

.pp-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.pp-cta-primary {
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

.pp-cta-primary:hover { background: var(--color-gold-light); }

.pp-cta-primary__arrow {
  display: flex;
  align-items: center;
  transition: transform 0.2s;
}

.pp-cta-primary:hover .pp-cta-primary__arrow { transform: translateX(4px); }

.pp-cta-secondary {
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

.pp-cta-secondary:hover {
  border-color: rgba(201, 162, 96, 0.4);
  color: var(--color-gold);
}

.pp-hero__right {
  flex: 1;
  position: relative;
  overflow: hidden;
}

.pp-hero__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: saturate(0.4) brightness(0.9);
}

.pp-hero__img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(8,8,8,0.4) 0%, transparent 60%);
}

.pp-hero__stat-card {
  position: absolute;
  bottom: 48px;
  right: 48px;
  background: var(--color-gold);
  padding: 20px 28px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

@media (max-width:900px){
  .pp-hero__stat-card {
    display: none;
  }
}

.pp-hero__stat-num {
  font-family: var(--font-display);
  font-size: 40px;
  font-weight: 800;
  color: var(--color-bg);
  line-height: 1;
}

.pp-hero__stat-label {
  font-family: var(--font-body);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(8,8,8,0.7);
}

/* ── STATS ── */
.pp-stats {
  background: var(--color-bg-2);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  padding: 56px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.pp-stats__title {
  font-family: var(--font-display);
  font-size: clamp(18px, 2vw, 34px);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: var(--color-white);
}

.pp-stats__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  max-width: 1060px;
  gap: 1px;
  background: var(--color-border);
}

.pp-stats__item {
  background: var(--color-bg-2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 36px 24px;
  text-align: center;
}

.pp-stats__num {
  font-family: var(--font-display);
  font-size: clamp(32px, 4vw, 70px);
  font-weight: 800;
  color: var(--color-gold);
  line-height: 1;
  letter-spacing: -0.02em;
}

.pp-stats__label {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted);
  line-height: 1.6;
}

.pp-stats__sub {
  font-family: var(--font-body);
  font-size: 19px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.7;
  text-align: center;
  max-width: 640px;
}

/* ── PRODUIT ── */
.pp-product {
  display: flex;
  height: 85vh;
  max-height: 100vh;
  overflow: hidden;
  border-bottom: 1px solid var(--color-border);
}

.pp-product__img {
  width: 42%;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  border-right: 1px solid var(--color-border);
}

.pp-product__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: saturate(0.25) brightness(0.75);
}

.pp-product__img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, transparent 60%, rgba(8,8,8,0.5));
}

.pp-product__text {
  flex: 1;
  padding: 0 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
}

.pp-product__title {
  font-family: var(--font-display);
  font-size: clamp(28px, 3vw, 48px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  line-height: 1.05;
  letter-spacing: 0.02em;
  margin-top: -20px;
}

.pp-product__desc {
  font-family: var(--font-body);
  font-size: 19px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.7;
  max-width: 700px;
}

.pp-product__lists {
  display: flex;
  gap: 0;
  border-top: 1px solid rgba(255,255,255,0.06);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.pp-product__col { flex: 1; padding: 16px 0; }
.pp-product__col:last-child { padding-left: 28px; }

.pp-product__divider {
  width: 1px;
  background: rgba(255,255,255,0.06);
  margin: 16px 28px 16px 0;
  flex-shrink: 0;
}

.pp-product__col-title {
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 8px;
}

.pp-product__specs {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.pp-product__specs li {
  display: flex;
  align-items: baseline;
  gap: 10px;
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 300;
  color: var(--color-text);
  padding: 8px 0;
  border-bottom: 1px solid rgba(255,255,255,0.04);
}

.pp-product__specs li:first-child { border-top: 1px solid rgba(255,255,255,0.04); }

.pp-product__dash {
  color: var(--color-gold);
  flex-shrink: 0;
  opacity: 0.7;
  font-size: 14px;
}

/* ── FORMULES ── */
.pp-formules {
  padding: 100px 0;
  border-bottom: 1px solid var(--color-border);
}

.pp-formules__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;
}

.pp-formules__title {
  font-family: var(--font-display);
  font-size: clamp(28px, 3vw, 48px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  line-height: 1.05;
  letter-spacing: 0.02em;
  margin-bottom: 48px;
}

.pp-formules__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: start;
}

.pp-formule {
  border: 1px solid rgba(255,255,255,0.08);
  display: flex;
  flex-direction: column;
  transition: border-color 0.3s;
  overflow: hidden;
}

.pp-formule:hover { border-color: rgba(201,162,96,0.25); }

.pp-formule--featured {
  border-color: rgba(201,162,96,0.35);
  background: rgba(201,162,96,0.02);
}

.pp-formule--featured:hover { border-color: rgba(201,162,96,0.65); }

.pp-formule__header {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 36px 36px 28px;
}

.pp-formule__icon { color: var(--color-gold); display: flex; }

.pp-formule__name {
  font-family: var(--font-display);
  font-size: 30px;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  letter-spacing: 0.03em;
}

.pp-formule__desc {
  font-family: var(--font-body);
  font-size: 19px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.65;
}

.pp-formule__cta-full {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 0 36px 28px;
  padding: 14px 24px;
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-text);
  border: 1px solid rgba(255,255,255,0.15);
  transition: all 0.2s;
}

.pp-formule__cta-full:hover {
  border-color: rgba(201,162,96,0.5);
  color: var(--color-gold);
}

.pp-formule__cta-full--gold {
  background: var(--color-gold);
  color: var(--color-bg);
  border-color: var(--color-gold);
}

.pp-formule__cta-full--gold:hover {
  opacity: 0.85;
  color: var(--color-bg);
}

.pp-formule__section {
  padding: 20px 36px;
  border-top: 1px solid rgba(255,255,255,0.06);
}

.pp-formule__section-title {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 5px;
  opacity: 0.8;
}

.pp-formule__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.pp-formule__list li {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 300;
  color: var(--color-text);
  padding: 6px 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  display: flex;
  align-items: center;
  gap: 10px;
}

.pp-formule__list li:last-child { border-bottom: none; }

.pp-formule__list li::before {
  content: '';
  width: 4px;
  height: 4px;
  background: var(--color-gold);
  border-radius: 50%;
  flex-shrink: 0;
  opacity: 0.6;
}

.pp-formule__divider {
  height: 1px;
  background: rgba(255,255,255,0.06);
}

.pp-formule__checks {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 8px;
}

.pp-formule__checks li {
  font-family: var(--font-body);
  font-size: 17px;
  font-weight: 300;
  color: var(--color-muted);
  display: flex;
  align-items: center;
  gap: 10px;
  line-height: 1.5;
}

.pp-formule__checks li::before {
  content: '✓';
  color: var(--color-gold);
  font-size: 12px;
  flex-shrink: 0;
  margin-top: 1px;
}

/* ── INSTALLATION ── */
.pp-method {
  background: var(--color-bg-2);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  padding: 120px 0;
}

.pp-method__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;
}

.pp-method__header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 72px;
}

.pp-method__header-text { flex: 1; }

.pp-method__header-logo {
  flex-shrink: 0;
  opacity: 0.9;
  pointer-events: none;
  display: flex;
  justify-content: center;
}

.pp-method__logo {
  height: 130px;
  width: auto;
  display: block;
}

.pp-method__title {
  font-family: var(--font-display);
  font-size: clamp(36px, 4vw, 56px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  line-height: 1.02;
  letter-spacing: 0.02em;
}

.pp-method__intro {
  margin-top: 20px;
  font-family: var(--font-body);
  font-size: 1.15rem;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.7;
  max-width: 680px;
}

.pp-method__steps { display: flex; flex-direction: column; }

.pp-step {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 40px;
  padding: 32px 0;
  border-bottom: 1px solid var(--color-border);
  align-items: start;
}

.pp-step:first-child { border-top: 1px solid var(--color-border); }

.pp-step__num {
  font-family: var(--font-display);
  font-size: 56px;
  font-weight: 800;
  color: var(--color-gold);
  line-height: 1;
}

.pp-step__title {
  font-family: var(--font-body);
  font-size: 22px;
  font-weight: 600;
  color: var(--color-white);
  margin-bottom: 6px;
  letter-spacing: 0.01em;
}

.pp-step__text {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.7;
}

.pp-method__note {
  margin-top: 40px;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-gold);
  opacity: 0.8;
}

/* ── COUCHES ── */
.pp-layers {
  padding: 70px 0;
  border-bottom: 1px solid var(--color-border);
}

.pp-layers__container {
  max-width: 1480px;
  margin: 0 auto;
  text-align: center;
  padding: 0 80px;
}

.pp-layers__sub {
  font-family: var(--font-body);
  font-size: 19px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.7;
  max-width: 560px;
  margin: 0 auto;
  margin-top: 16px;
  margin-bottom: 32px;
}

.pp-layers__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--color-border);
}

.pp-layer {
  background: var(--color-bg);
  padding: 40px 28px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 14px;
  text-decoration: none;
  transition: background 0.3s;
}



/* Decorator */
.pp-layer__decorator {
  position: relative;
  width: 110px;
  height: 110px;
  margin-bottom: 4px;
  mask-image: radial-gradient(ellipse 50% 50% at 50% 50%, #000 65%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse 50% 50% at 50% 50%, #000 65%, transparent 100%);
}

.pp-layer__decorator-grid {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to right, var(--color-border) 1px, transparent 1px),
    linear-gradient(to bottom, var(--color-border) 1px, transparent 1px);
  background-size: 18px 18px;
  opacity: 0.8;
}

.pp-layer__icon-box {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg);
  border-top: 1px solid var(--color-gold);
  border-left: 1px solid var(--color-gold);
  color: var(--color-gold);
  transition: background 0.3s;
}

.pp-layer:hover .pp-layer__icon-box {
  background: rgba(201,162,96,0.08);
}

.pp-layer:first-child .pp-layer__icon-box {
  border-top-color: var(--color-gold);
  border-left-color: var(--color-gold);
  background: rgba(201,162,96,0.1);
}

.pp-layer__num {
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-gold);
  opacity: 0.6;
}

.pp-layer__title {
  font-family: var(--font-display);
  font-size: 23px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-white);
  letter-spacing: 0em;
  line-height: 1.2;
}

.pp-layer__desc {
  font-family: var(--font-body);
  font-size: 17px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.6;
  flex: 1;
}

.pp-layer__link {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-gold);
  opacity: 0.7;
  transition: opacity 0.2s;
}

.pp-layer:hover .pp-layer__link { opacity: 1; }


/* ── RESPONSIVE ── */
@media (max-width: 1024px) {
  .pp-layers__grid { grid-template-columns: repeat(2, 1fr); }
  .pp-product { height: auto; max-height: none; flex-direction: column; }
  .pp-product__img { width: 100%; height: 280px; border-right: none; border-bottom: 1px solid var(--color-border); }
  .pp-product__text { padding: 48px 40px; }
  .pp-layers__container { padding: 0 40px; }
  .pp-manifeste__container { padding: 0 40px; }
  .pp-pourqui { padding: 80px 40px; }
  .pp-method__container { padding: 0 40px; }
  .pp-formules__container { padding: 0 40px; }
}

@media (max-width: 768px) {
  .pp-hero {
    flex-direction: column;
    height: auto;
    max-height: none;
    padding-top: 72px;
  }
  .pp-hero__left {
    width: 100%;
    padding: 48px 24px;
    border-right: none;
    border-bottom: 1px solid var(--color-border);
  }
  .pp-hero__left::before { display: none; }
  .pp-hero__breadcrumb { margin-bottom: 24px; }
  .pp-hero__right { height: 300px; }
  .pp-hero__stat-card { bottom: 24px; right: 24px; }
  .pp-stats { padding: 48px 24px; gap: 32px; }
  .pp-stats__grid { grid-template-columns: 1fr; max-width: 100%; }
  .pp-stats__item { padding: 28px 24px; }
  .pp-product__text { padding: 40px 24px; }
  .pp-product__lists { flex-direction: column; }
  .pp-product__divider { width: 100%; height: 1px; margin: 0; }
  .pp-product__col:last-child { padding-left: 0; padding-top: 16px; }
  .pp-formules { padding: 64px 0; }
  .pp-formules__container { padding: 0 24px; }
  .pp-formules__grid { grid-template-columns: 1fr; }
  .pp-formule__header { padding: 28px 24px 20px; }
  .pp-formule__cta-full { margin: 0 24px 20px; }
  .pp-formule__section { padding: 16px 24px; }
  .pp-method { padding: 56px 0; }
  .pp-method__container { padding: 0 24px; }
  .pp-method__header { flex-direction: column; gap: 0; }
  .pp-method__header-logo { display: none; }
  .pp-step { grid-template-columns: 64px 1fr; gap: 16px; padding: 24px 0; }
  .pp-step__num { font-size: 36px; }
  .pp-layers__grid { grid-template-columns: 1fr; }
  .pp-layers__container,
  .pp-manifeste__container { padding: 0 24px; }
  .pp-manifeste { padding: 72px 0; }
  .pp-pourqui { padding: 72px 24px; }
  .pp-pourqui__cards { grid-template-columns: 1fr; }
  .pp-pourqui__card { padding: 40px 28px; }
}
</style>

<template>
  <div class="fp">

    <!-- Nav -->
    <nav class="fp-nav">
      <span class="fp-nav__title">Comparatif polices — Sierra Sécurité</span>
      <div class="fp-nav__pills">
        <a v-for="p in proposals" :key="p.id" :href="`#${p.id}`" class="fp-nav__pill">
          {{ p.id.toUpperCase() }} — {{ p.displayName }}
        </a>
        <router-link to="/" class="fp-nav__pill fp-nav__pill--home">← Retour site</router-link>
      </div>
    </nav>

    <!-- Each proposal -->
    <div v-for="p in proposals" :key="p.id" :id="p.id" class="fp-block" :style="p.vars">

      <!-- Label -->
      <div class="fp-label">
        <span class="fp-label__id">{{ p.id.toUpperCase() }}</span>
        <div class="fp-label__info">
          <strong>Display : {{ p.displayName }}</strong>
          <span>Body : {{ p.bodyName }}</span>
        </div>
        <p class="fp-label__desc">{{ p.description }}</p>
      </div>

      <!-- SECTION 1 : Hero titre -->
      <div class="fp-section fp-section--dark">
        <div class="fp-section__tag">Hero — titre principal</div>
        <div class="fp-hero">
          <div class="fp-hero__left">
            <span class="fp-hero__brand">Systèmes de sécurité & gardiennage</span>
            <h1 class="fp-hero__title">
              Protégez vos biens.<br/>
              <span class="fp-hero__stroke">Sécurisez</span><br/>
              vos espaces.
            </h1>
            <div class="fp-hero__pills">
              <span>CNAPS certifiés</span>
              <span>48h déploiement</span>
              <span>24/7</span>
            </div>
            <a href="#" class="fp-hero__cta">
              <span>SÉCURISER MON BIEN</span>
              <div class="fp-hero__arrow">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </a>
          </div>
          <div class="fp-hero__right">
            <div class="fp-hero__img-wrap">
              <img :src="alarmeImg" alt="" />
              <div class="fp-hero__img-label">
                <span class="fp-hero__img-num">01</span>
                <span class="fp-hero__img-name">Alarme anti-intrusion</span>
              </div>
            </div>
            <div class="fp-hero__img-wrap">
              <img :src="gardImg" alt="" />
              <div class="fp-hero__img-label">
                <span class="fp-hero__img-num">02</span>
                <span class="fp-hero__img-name">Gardiennage</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- SECTION 2 : Stats bento -->
      <div class="fp-section fp-section--dark">
        <div class="fp-section__tag">Stats — bento</div>
        <div class="fp-stats">
          <div class="fp-stats__header">
            <h2 class="fp-stats__title">
              SÉCURISER VOTRE BIEN, C'EST
              <span class="gold">RÉDUIRE LES RISQUES</span>
            </h2>
            <p class="fp-stats__sub">Les bénéfices sont clairs et mesurables</p>
          </div>
          <div class="fp-bento">
            <div class="fp-bento__featured">
              <span class="fp-bento__eyebrow">Statistique clé</span>
              <span class="fp-bento__number">+80%</span>
              <span class="fp-bento__label">CAMBRIOLAGES ÉVITÉS</span>
            </div>
            <div class="fp-bento__grid">
              <div class="fp-bento__cell" v-for="s in statsCells" :key="s.n">
                <span class="fp-bento__cell-num">{{ s.n }}</span>
                <span class="fp-bento__cell-lbl">{{ s.l }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- SECTION 3 : Engagements -->
      <div class="fp-section fp-section--mid">
        <div class="fp-section__tag">Engagements — liste</div>
        <div class="fp-eng">
          <div class="fp-eng__left">
            <span class="fp-eng__label">Notre ADN</span>
            <h2 class="fp-eng__title">NOS<br/>ENGAGEMENTS</h2>
            <div class="fp-eng__line"></div>
            <p class="fp-eng__desc">Chaque mission est conduite avec rigueur, transparence et une exigence opérationnelle sans compromis.</p>
          </div>
          <div class="fp-eng__right">
            <div class="fp-eng__item" v-for="e in engItems" :key="e.t">
              <div class="fp-eng__item-top">
                <span class="fp-eng__item-num">{{ e.n }}</span>
                <h3 class="fp-eng__item-title">{{ e.t }}</h3>
              </div>
              <p class="fp-eng__item-text">{{ e.d }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup>
import alarmeImg from '../assets/photos/alarme.jpg'
import gardImg   from '../assets/photos/gardiennage.jpeg'

const statsCells = [
  { n: '+60%', l: 'RÉACTIVITÉ POLICE' },
  { n: '+75%', l: "TRANQUILLITÉ D'ESPRIT" },
  { n: '-50%', l: "RISQUE D'INTRUSION" },
  { n: '+20%', l: 'VALEUR DU BIEN' },
]

const engItems = [
  { n: '01', t: 'Agents agréés CNAPS', d: 'Cartes professionnelles valides, formation continue.' },
  { n: '02', t: 'Certifications reconnues', d: 'Conformité NF, A2P, Grade 2 et Grade 3.' },
  { n: '03', t: 'Audit & solution sur mesure', d: 'Analyse approfondie avant chaque déploiement.' },
]

const proposals = [
  {
    id: 'prop-a',
    displayName: 'Bebas Neue',
    bodyName: 'Inter',
    description: 'Plus dur, plus frontal. Impact maximal sur les titres. Ultra-bold, toutes capitales par nature.',
    vars: {
      '--fp-display': "'Bebas Neue', sans-serif",
      '--fp-body':    "'Inter', sans-serif",
      '--fp-title-weight': '400',
      '--fp-title-spacing': '0.04em',
    },
  },
  {
    id: 'prop-b',
    displayName: 'Oswald',
    bodyName: 'Source Sans 3',
    description: 'Institutionnel, presque gouvernemental. Angles géométriques nets, évoque les panneaux officiels.',
    vars: {
      '--fp-display': "'Oswald', sans-serif",
      '--fp-body':    "'Source Sans 3', sans-serif",
      '--fp-title-weight': '700',
      '--fp-title-spacing': '0.03em',
    },
  },
  {
    id: 'prop-c',
    displayName: 'Exo 2',
    bodyName: 'Outfit',
    description: 'Tech / high-end. Angles industriels modernes, évoque les systèmes embarqués et la surveillance digitale.',
    vars: {
      '--fp-display': "'Exo 2', sans-serif",
      '--fp-body':    "'Outfit', sans-serif",
      '--fp-title-weight': '800',
      '--fp-title-spacing': '0.01em',
    },
  },
  {
    id: 'prop-d',
    displayName: 'Rajdhani',
    bodyName: 'Nunito Sans',
    description: 'Le plus distinctif. Cuts quasi-militaires, très utilisé dans la défense et la cybersécurité.',
    vars: {
      '--fp-display': "'Rajdhani', sans-serif",
      '--fp-body':    "'Nunito Sans', sans-serif",
      '--fp-title-weight': '700',
      '--fp-title-spacing': '0.05em',
    },
  },
]
</script>

<style scoped>
/* ── Page wrapper ── */
.fp {
  background: #050505;
  min-height: 100vh;
  padding-top: 72px;
}

/* ── Nav ── */
.fp-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: #0a0a0a;
  border-bottom: 1px solid rgba(201,162,96,0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  height: 72px;
  gap: 24px;
}
.fp-nav__title {
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.35);
  flex-shrink: 0;
}
.fp-nav__pills {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.fp-nav__pill {
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(201,162,96,0.8);
  text-decoration: none;
  padding: 6px 14px;
  border: 1px solid rgba(201,162,96,0.2);
  transition: all 0.2s;
}
.fp-nav__pill:hover {
  background: rgba(201,162,96,0.1);
  color: #C9A260;
}
.fp-nav__pill--home {
  color: rgba(255,255,255,0.4);
  border-color: rgba(255,255,255,0.1);
}

/* ── Block (one proposal) ── */
.fp-block {
  border-top: 3px solid #C9A260;
  margin-bottom: 2px;
}

/* ── Label strip ── */
.fp-label {
  background: #C9A260;
  padding: 24px 80px;
  display: flex;
  align-items: center;
  gap: 32px;
}
.fp-label__id {
  font-family: var(--fp-display);
  font-size: 48px;
  font-weight: var(--fp-title-weight);
  color: #0a0a0a;
  line-height: 1;
  flex-shrink: 0;
}
.fp-label__info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-shrink: 0;
}
.fp-label__info strong {
  font-family: var(--fp-display);
  font-size: 18px;
  font-weight: var(--fp-title-weight);
  color: #0a0a0a;
  letter-spacing: var(--fp-title-spacing);
  text-transform: uppercase;
}
.fp-label__info span {
  font-family: var(--fp-body);
  font-size: 13px;
  color: rgba(15,15,15,0.65);
  letter-spacing: 0.05em;
}
.fp-label__desc {
  font-family: var(--fp-body);
  font-size: 14px;
  color: rgba(15,15,15,0.7);
  line-height: 1.5;
  max-width: 500px;
  padding-left: 32px;
  border-left: 1px solid rgba(15,15,15,0.2);
}

/* ── Section wrapper ── */
.fp-section {
  padding: 72px 80px;
  position: relative;
}
.fp-section--dark { background: #080808; }
.fp-section--mid  { background: #0F0F0F; }
.fp-section__tag {
  font-family: 'DM Sans', sans-serif;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(201,162,96,0.4);
  margin-bottom: 40px;
}

/* ── HERO ── */
.fp-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}
.fp-hero__left {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.fp-hero__brand {
  font-family: var(--fp-body);
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.45);
}
.fp-hero__title {
  font-family: var(--fp-display);
  font-size: clamp(48px, 5vw, 72px);
  font-weight: var(--fp-title-weight);
  text-transform: uppercase;
  color: #FFFFFF;
  line-height: 0.95;
  letter-spacing: var(--fp-title-spacing);
  margin: 0;
}
.fp-hero__stroke {
  -webkit-text-stroke: 2px rgba(201,162,96,0.5);
  color: transparent;
}
.fp-hero__pills {
  display: flex;
  gap: 8px;
}
.fp-hero__pills span {
  font-family: var(--fp-body);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(201,162,96,0.7);
  padding: 5px 12px;
  border: 1px solid rgba(201,162,96,0.2);
}
.fp-hero__cta {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
}
.fp-hero__cta span {
  font-family: var(--fp-body);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #C9A260;
}
.fp-hero__arrow {
  width: 40px;
  height: 40px;
  border: 1px solid rgba(201,162,96,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #C9A260;
}
.fp-hero__right {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  height: 280px;
}
.fp-hero__img-wrap {
  position: relative;
  overflow: hidden;
}
.fp-hero__img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.3) brightness(0.9);
}
.fp-hero__img-label {
  position: absolute;
  bottom: 14px;
  left: 14px;
}
.fp-hero__img-num {
  display: block;
  font-family: var(--fp-display);
  font-size: 10px;
  font-weight: var(--fp-title-weight);
  color: rgba(201,162,96,0.6);
  letter-spacing: 0.15em;
}
.fp-hero__img-name {
  display: block;
  font-family: var(--fp-body);
  font-size: 11px;
  color: rgba(255,255,255,0.8);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* ── STATS ── */
.fp-stats__header {
  text-align: center;
  margin-bottom: 48px;
}
.fp-stats__title {
  font-family: var(--fp-display);
  font-size: clamp(24px, 2.8vw, 40px);
  font-weight: var(--fp-title-weight);
  text-transform: uppercase;
  color: #FFFFFF;
  letter-spacing: var(--fp-title-spacing);
  line-height: 1.1;
  margin: 0 0 14px;
}
.gold { color: #C9A260; }
.fp-stats__sub {
  font-family: var(--fp-body);
  font-size: 15px;
  font-weight: 300;
  color: #888;
}
.fp-bento {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2px;
  background: rgba(201,162,96,0.15);
}
.fp-bento__featured {
  background: #C9A260;
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  min-height: 240px;
}
.fp-bento__eyebrow {
  font-family: var(--fp-body);
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(15,15,15,0.55);
}
.fp-bento__number {
  font-family: var(--fp-display);
  font-size: clamp(56px, 7vw, 88px);
  font-weight: var(--fp-title-weight);
  color: #0F0F0F;
  line-height: 1;
  letter-spacing: -0.02em;
}
.fp-bento__label {
  font-family: var(--fp-display);
  font-size: 16px;
  font-weight: var(--fp-title-weight);
  text-transform: uppercase;
  color: #0F0F0F;
  letter-spacing: var(--fp-title-spacing);
  line-height: 1.2;
}
.fp-bento__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;
  background: rgba(201,162,96,0.15);
}
.fp-bento__cell {
  background: #0F0F0F;
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10px;
}
.fp-bento__cell-num {
  font-family: var(--fp-display);
  font-size: clamp(36px, 4vw, 56px);
  font-weight: var(--fp-title-weight);
  color: #FFFFFF;
  line-height: 1;
  letter-spacing: -0.01em;
}
.fp-bento__cell-lbl {
  font-family: var(--fp-body);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #888;
}

/* ── ENGAGEMENTS ── */
.fp-eng {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 80px;
  align-items: start;
}
.fp-eng__left {
  display: flex;
  flex-direction: column;
}
.fp-eng__label {
  font-family: var(--fp-body);
  font-size: 11px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #C9A260;
  margin-bottom: 16px;
}
.fp-eng__title {
  font-family: var(--fp-display);
  font-size: clamp(36px, 4vw, 56px);
  font-weight: var(--fp-title-weight);
  text-transform: uppercase;
  color: #FFFFFF;
  letter-spacing: var(--fp-title-spacing);
  line-height: 1.0;
  margin: 0 0 28px;
}
.fp-eng__line {
  width: 48px;
  height: 2px;
  background: #C9A260;
  margin-bottom: 20px;
}
.fp-eng__desc {
  font-family: var(--fp-body);
  font-size: 14px;
  font-weight: 300;
  color: #888;
  line-height: 1.7;
}
.fp-eng__right {
  display: flex;
  flex-direction: column;
}
.fp-eng__item {
  padding: 24px 0;
  border-bottom: 1px solid rgba(201,162,96,0.1);
}
.fp-eng__item:first-child { border-top: 1px solid rgba(201,162,96,0.1); }
.fp-eng__item-top {
  display: flex;
  align-items: baseline;
  gap: 20px;
  margin-bottom: 8px;
}
.fp-eng__item-num {
  font-family: var(--fp-display);
  font-size: 26px;
  font-weight: var(--fp-title-weight);
  color: #C9A260;
  line-height: 1;
  flex-shrink: 0;
}
.fp-eng__item-title {
  font-family: var(--fp-body);
  font-size: 15px;
  font-weight: 500;
  color: #E8E8E8;
  margin: 0;
}
.fp-eng__item-text {
  font-family: var(--fp-body);
  font-size: 13px;
  font-weight: 300;
  color: #888;
  line-height: 1.6;
  padding-left: 46px;
  margin: 0;
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .fp-section { padding: 48px 24px; }
  .fp-label { padding: 20px 24px; flex-wrap: wrap; }
  .fp-hero { grid-template-columns: 1fr; }
  .fp-hero__right { height: 200px; }
  .fp-eng { grid-template-columns: 1fr; gap: 40px; }
  .fp-bento { grid-template-columns: 1fr; }
  .fp-nav { padding: 0 20px; }
  .fp-nav__title { display: none; }
}
</style>

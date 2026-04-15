<template>
  <section class="hero">
    <!-- Left content -->
    <div class="hero__left">
      <div class="hero__brand">
        <span class="hero__brand-mark"><img src="/src/assets/logo/Logo 2 Verticale.png" alt="" width="80px"></span>
        <span class="hero__brand-name">
          <span class="hero__brand-dot"></span>
          Systèmes de sécurité & gardiennage
          <span class="hero__brand-dot"></span>
        </span>
      </div>

      <h1 class="hero__title">
        Protégez vos biens.<br />
        <!--en<br />-->
        <span class="hero__title-stroke">Sécurisez</span><br />
        vos espaces.
      </h1>

      <div class="hero__meta">
        <span class="hero__meta-pill">CNAPS certifiés</span>
        <span class="hero__meta-pill">48h déploiement</span>
        <span class="hero__meta-pill">24/7</span>
      </div>

      <a href="#contact" class="hero__cta">
        <span>SÉCURISER MON BIEN</span>
        <div class="hero__cta-arrow">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </a>
    </div>

    <!-- Right: 2x2 service grid -->
    <div class="hero__grid">
      <div class="hero__cell" v-for="s in services" :key="s.label">
        <img :src="s.img" :alt="s.label" class="hero__cell-img" />
        <div class="hero__cell-overlay"></div>
        <div class="hero__cell-content">
          <span class="hero__cell-num">{{ s.num }}</span>
          <span class="hero__cell-label">{{ s.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import imgAlarme from '../assets/photos/alarme.jpg'
import imgVideo from '../assets/photos/surveillance.png'
import imgGard from '../assets/photos/gardiennage.jpeg'
import imgPorte from '../assets/photos/porte-antisquat.jpeg'

const services = [
  { num: '01', label: 'Alarme anti-intrusion', img: imgAlarme },
  { num: '02', label: 'Vidéosurveillance',     img: imgVideo  },
  { num: '03', label: 'Gardiennage',            img: imgGard   },
  { num: '04', label: 'Porte anti-squat',       img: imgPorte  },
]
</script>

<style scoped>
.hero {
  display: flex;
  height: 100vh;
  min-height: 700px;
  overflow: hidden;
}

/* ── LEFT ── */
.hero__left {
  width: 42%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 64px 56px 64px 72px;
  border-right: 1px solid rgba(201, 162, 96, 0.1);
  position: relative;
  background: var(--color-bg);
}

.hero__left::before {
  content: '';
  position: absolute;
  left: 0;
  top: 20%;
  bottom: 20%;
  width: 2px;
  background: linear-gradient(to bottom, transparent, var(--color-gold), transparent);
}

.hero__brand {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 0px;
}
.hero__brand-mark {
  color: var(--color-gold);
  font-size: 14px;
  flex-shrink: 0;
}
.hero__brand-name {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(201, 162, 96, 0.75);
  padding: 6px 14px;
  border: 1px solid rgba(201, 162, 96, 0.2);
  background: rgba(201, 162, 96, 0.04);
  border-radius: 16px;
}
.hero__brand-dot {
  display: inline-block;
  width: 4px;
  height: 4px;
  background: var(--color-gold);
  opacity: 0.5;
  flex-shrink: 0;
}

.hero__title {
  font-family: var(--font-display);
  font-size: clamp(44px, 4.2vw, 64px);
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-white);
  line-height: 1.05;
  letter-spacing: 0.01em;
  margin-bottom: 36px;
  margin-top: 10px;
}

.hero__title-stroke {
  -webkit-text-stroke: 2px rgba(201, 162, 96, 0.5);
  color: transparent;
}

.hero__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 48px;
}

.hero__meta-pill {
  display: inline-block;
  padding: 5px 12px;
  border: 1px solid rgba(201, 162, 96, 0.25);
  font-family: var(--font-body);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(201, 162, 96, 0.7);
  background: rgba(201, 162, 96, 0.04);
  border-radius: 2px;
}

.hero__cta {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
}

.hero__cta span {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-gold);
  transition: color 0.2s;
}

.hero__cta-arrow {
  width: 44px;
  height: 44px;
  border: 1px solid rgba(201, 162, 96, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-gold);
  transition: all 0.25s;
  flex-shrink: 0;
}

.hero__cta:hover .hero__cta-arrow {
  background: var(--color-gold);
  color: var(--color-bg);
  border-color: var(--color-gold);
}

/* ── RIGHT GRID ── */
.hero__grid {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  overflow: hidden;
}

.hero__cell {
  position: relative;
  overflow: hidden;
  cursor: default;
}

.hero__cell-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.6s ease;
  filter: saturate(0.3) brightness(1);
}

.hero__cell:hover .hero__cell-img {
  transform: scale(1.04);
  filter: saturate(0.5) brightness(1);
}

.hero__cell-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(8, 8, 8, 0.05) 0%,
    rgba(8, 8, 8, 0.0) 40%,
    rgba(8, 8, 8, 0.72) 100%
  );
  transition: background 0.4s ease;
}

.hero__cell:hover .hero__cell-overlay {
  background: linear-gradient(
    to bottom,
    rgba(8, 8, 8, 0.05) 0%,
    rgba(8, 8, 8, 0.0) 30%,
    rgba(8, 8, 8, 0.80) 100%
  );
}

.hero__cell:nth-child(1) { border-right: 1px solid rgba(201, 162, 96, 0.12); border-bottom: 1px solid rgba(201, 162, 96, 0.12); }
.hero__cell:nth-child(2) { border-bottom: 1px solid rgba(201, 162, 96, 0.12); }
.hero__cell:nth-child(3) { border-right: 1px solid rgba(201, 162, 96, 0.12); }

.hero__cell-content {
  position: absolute;
  bottom: 24px;
  left: 24px;
  z-index: 2;
}

.hero__cell-num {
  display: block;
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: var(--color-gold);
  margin-bottom: 5px;
}

.hero__cell-label {
  display: block;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #ffffff;
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.8);
}

@media (max-width: 900px) {
  .hero {
    flex-direction: column;
    height: auto;
  }
  .hero__left {
    width: 100%;
    padding: 80px 32px 48px;
    border-right: none;
    border-bottom: 1px solid rgba(201, 162, 96, 0.1);
  }
  .hero__left::before { display: none; }
  .hero__grid {
    height: 60vh;
  }
}

@media (max-width: 500px) {
  .hero__grid {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    height: 80vh;
  }
}
</style>

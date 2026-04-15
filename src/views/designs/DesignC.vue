<template>
  <div class="page-c">
    <DesignNav />

    <section class="hero-c">
      <!-- Content left -->
      <div class="hero-c__left">
        <div class="hero-c__brand">
          <span class="hero-c__brand-mark">◆</span>
          <span class="hero-c__brand-name">Sierra Sécurité</span>
        </div>

        <h1 class="hero-c__title">
          Experts<br />
          en<br />
          <span class="hero-c__title-stroke">sécurité</span><br />
          privée.
        </h1>

        <div class="hero-c__meta">
          <span class="hero-c__meta-pill">CNAPS certifiés</span>
          <span class="hero-c__meta-pill">48h déploiement</span>
          <span class="hero-c__meta-pill">24/7</span>
        </div>

        <a href="#" class="hero-c__cta">
          <span>Demander un devis</span>
          <div class="hero-c__cta-arrow">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </a>
      </div>

      <!-- Right: 2x2 service grid -->
      <div class="hero-c__grid">
        <div class="hero-c__cell" v-for="s in services" :key="s.label">
          <img :src="s.img" :alt="s.label" class="hero-c__cell-img" />
          <div class="hero-c__cell-overlay"></div>
          <div class="hero-c__cell-content">
            <span class="hero-c__cell-num">{{ s.num }}</span>
            <span class="hero-c__cell-label">{{ s.label }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import DesignNav from '../../components/DesignNav.vue'
import imgAlarme from '../../assets/photos/alarme.jpg'
import imgVideo from '../../assets/photos/videosurveillance.jpg'
import imgGard from '../../assets/photos/gardiennage.jpeg'
import imgPorte from '../../assets/photos/porte-antisquat.jpeg'

const services = [
  { num: '01', label: 'Alarme anti-intrusion', img: imgAlarme },
  { num: '02', label: 'Vidéosurveillance',     img: imgVideo  },
  { num: '03', label: 'Gardiennage',            img: imgGard   },
  { num: '04', label: 'Porte anti-squat',       img: imgPorte  },
]
</script>

<style scoped>
* { box-sizing: border-box; margin: 0; padding: 0; }

.page-c {
  background: #0C0C0C;
  font-family: 'DM Sans', sans-serif;
}

.hero-c {
  display: flex;
  height: 100vh;
  min-height: 700px;
  padding-top: 52px;
  overflow: hidden;
}

/* ── LEFT ── */
.hero-c__left {
  width: 42%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 64px 56px 64px 72px;
  border-right: 1px solid rgba(201, 162, 96, 0.1);
  position: relative;
}

/* Subtle left accent */
.hero-c__left::before {
  content: '';
  position: absolute;
  left: 0;
  top: 20%;
  bottom: 20%;
  width: 2px;
  background: linear-gradient(to bottom, transparent, #C9A260, transparent);
}

.hero-c__brand {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 52px;
}
.hero-c__brand-mark {
  color: #C9A260;
  font-size: 14px;
}
.hero-c__brand-name {
  font-size: 13px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.35);
}

.hero-c__title {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: clamp(60px, 5.5vw, 84px);
  font-weight: 800;
  text-transform: uppercase;
  color: #FFFFFF;
  line-height: 0.92;
  letter-spacing: -0.01em;
  margin-bottom: 36px;
}

.hero-c__title-stroke {
  -webkit-text-stroke: 2px rgba(201, 162, 96, 0.5);
  color: transparent;
}

.hero-c__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 48px;
}

.hero-c__meta-pill {
  display: inline-block;
  padding: 5px 12px;
  border: 1px solid rgba(201, 162, 96, 0.25);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(201, 162, 96, 0.7);
  background: rgba(201, 162, 96, 0.04);
  border-radius: 2px;
}

.hero-c__cta {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  group: true;
}

.hero-c__cta span {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #C9A260;
  transition: color 0.2s;
}

.hero-c__cta-arrow {
  width: 44px;
  height: 44px;
  border: 1px solid rgba(201, 162, 96, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #C9A260;
  transition: all 0.25s;
  flex-shrink: 0;
}

.hero-c__cta:hover .hero-c__cta-arrow {
  background: #C9A260;
  color: #0C0C0C;
  border-color: #C9A260;
}

/* ── RIGHT GRID ── */
.hero-c__grid {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  overflow: hidden;
}

.hero-c__cell {
  position: relative;
  overflow: hidden;
  cursor: default;
}

.hero-c__cell-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.6s ease;
  filter: saturate(0.3) brightness(0.5);
}

.hero-c__cell:hover .hero-c__cell-img {
  transform: scale(1.04);
  filter: saturate(0.5) brightness(0.55);
}

.hero-c__cell-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(12, 12, 12, 0.6) 0%,
    rgba(12, 12, 12, 0.3) 100%
  );
  transition: background 0.4s ease;
}

.hero-c__cell:hover .hero-c__cell-overlay {
  background: linear-gradient(
    135deg,
    rgba(201, 162, 96, 0.15) 0%,
    rgba(12, 12, 12, 0.3) 100%
  );
}

/* Grid borders */
.hero-c__cell:nth-child(1) { border-right: 1px solid rgba(201,162,96,0.12); border-bottom: 1px solid rgba(201,162,96,0.12); }
.hero-c__cell:nth-child(2) { border-bottom: 1px solid rgba(201,162,96,0.12); }
.hero-c__cell:nth-child(3) { border-right: 1px solid rgba(201,162,96,0.12); }

.hero-c__cell-content {
  position: absolute;
  bottom: 24px;
  left: 24px;
  z-index: 2;
}

.hero-c__cell-num {
  display: block;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: rgba(201, 162, 96, 0.6);
  margin-bottom: 4px;
}

.hero-c__cell-label {
  display: block;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.85);
}

@media (max-width: 900px) {
  .hero-c {
    flex-direction: column;
    height: auto;
  }
  .hero-c__left {
    width: 100%;
    padding: 48px 32px;
    border-right: none;
    border-bottom: 1px solid rgba(201,162,96,0.1);
  }
  .hero-c__left::before { display: none; }
  .hero-c__grid {
    height: 60vh;
  }
}

@media (max-width: 500px) {
  .hero-c__grid {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    height: 80vh;
  }
}
</style>

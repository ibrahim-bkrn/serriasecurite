<template>
  <section class="gateway" ref="sectionRef">
    <div class="gateway__header reveal" :class="{ visible: visible }">
      <p class="gateway__label">Nos solutions</p>
      <h2 class="gateway__title">DEUX APPROCHES,<br /><span class="gateway__title-stroke">UNE SEULE EXIGENCE</span></h2>
    </div>

    <div class="gateway__panels">
      <RouterLink
        v-for="(panel, i) in panels"
        :key="panel.slug"
        :to="panel.route"
        class="gateway__panel reveal"
        :class="[`reveal-delay-${i + 1}`, { visible: visible }]"
      >
        <img :src="panel.img" :alt="panel.title" class="gateway__panel-img" />
        <div class="gateway__panel-overlay"></div>

        <div class="gateway__panel-content">
          <span class="gateway__panel-num">0{{ i + 1 }}</span>
          <h3 class="gateway__panel-title">{{ panel.title }}</h3>
          <p class="gateway__panel-desc">{{ panel.desc }}</p>

          <ul class="gateway__panel-list">
            <li v-for="item in panel.items" :key="item">
              <span class="gateway__panel-dot"></span>
              {{ item }}
            </li>
          </ul>

          <div class="gateway__panel-cta">
            <span>Découvrir</span>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

import humainImg  from '../assets/photos/gardiennage3.jpeg'
import materielImg from '../assets/photos/alarme2.jpeg'

const sectionRef = ref(null)
const visible = ref(false)

const panels = [
  {
    slug: 'humaine',
    route: '/solutions/surveillance-humaine',
    img: humainImg,
    title: 'Surveillance Humaine',
    desc: 'Des agents certifiés CNAPS sur le terrain, disponibles 24h/24 pour assurer présence, dissuasion et intervention immédiate.',
    items: ['Gardiennage & rondes', 'Agents cynophiles', 'Agents mobiles', 'Contrôle d\'accès'],
  },
  {
    slug: 'materielle',
    route: '/solutions/surveillance-materielle',
    img: materielImg,
    title: 'Surveillance Matérielle',
    desc: 'Des systèmes électroniques de pointe installés en 48h pour détecter, enregistrer et alerter en temps réel.',
    items: ['Alarme anti-intrusion', 'Vidéosurveillance HD', 'Contrôle d\'accès', 'Porte anti-squat'],
  },
]

onMounted(() => {
  const obs = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) { visible.value = true; obs.disconnect() } },
    { threshold: 0.15 }
  )
  if (sectionRef.value) obs.observe(sectionRef.value)
})
</script>

<style scoped>
.gateway {
  background: var(--color-bg);
  padding: 120px 0;
  overflow: hidden;
}

/* ── HEADER ── */
.gateway__header {
  text-align: center;
  margin-bottom: 72px;
  padding: 0 24px;
}

.gateway__label {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 16px;
}

.gateway__title {
  font-family: var(--font-display);
  font-size: clamp(36px, 4vw, 56px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  letter-spacing: 0.02em;
  line-height: 1.1;
}

.gateway__title-stroke {
  -webkit-text-stroke: 2px rgba(201, 162, 96, 0.5);
  color: transparent;
}

/* ── PANELS ── */
.gateway__panels {
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;
  gap: 2px;
}

.gateway__panel {
  position: relative;
  height: 540px;
  overflow: hidden;
  text-decoration: none;
  display: block;
  cursor: pointer;
}

.gateway__panel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.7s ease;
  filter: saturate(0.25) brightness(0.9);
}

.gateway__panel:hover .gateway__panel-img {
  transform: scale(1.04);
  filter: saturate(0.45) brightness(0.95);
}

.gateway__panel-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(8, 8, 8, 0.2) 0%,
    rgba(8, 8, 8, 0.15) 30%,
    rgba(8, 8, 8, 0.82) 100%
  );
  transition: background 0.4s ease;
}

.gateway__panel:hover .gateway__panel-overlay {
  background: linear-gradient(
    to bottom,
    rgba(8, 8, 8, 0.2) 0%,
    rgba(8, 8, 8, 0.1) 25%,
    rgba(8, 8, 8, 0.88) 100%
  );
}

/* gold top border on hover */
.gateway__panel::after {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: var(--color-gold);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.gateway__panel:hover::after {
  transform: scaleX(1);
}

/* ── PANEL CONTENT ── */
.gateway__panel-content {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  padding: 40px;
  z-index: 2;
}

.gateway__panel-num {
  display: block;
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: var(--color-gold);
  margin-bottom: 12px;
}

.gateway__panel-title {
  font-family: var(--font-display);
  font-size: clamp(26px, 2.4vw, 34px);
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-white);
  letter-spacing: 0.03em;
  line-height: 1.1;
  margin-bottom: 14px;
}

.gateway__panel-desc {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.65;
  margin-bottom: 20px;
  max-width: 380px;
}

.gateway__panel-list {
  list-style: none;
  padding: 0;
  margin: 0 0 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
}

.gateway__panel-list li {
  display: flex;
  align-items: center;
  gap: 7px;
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
}

.gateway__panel-dot {
  width: 4px;
  height: 4px;
  background: var(--color-gold);
  opacity: 0.6;
  flex-shrink: 0;
}

.gateway__panel-cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-gold);
  border-bottom: 1px solid rgba(201, 162, 96, 0.3);
  padding-bottom: 4px;
  transition: border-color 0.2s, gap 0.2s;
}

.gateway__panel:hover .gateway__panel-cta {
  border-color: var(--color-gold);
  gap: 14px;
}

/* ── REVEAL ── */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.visible { opacity: 1; transform: none; }
.reveal-delay-1 { transition-delay: 0.15s; }
.reveal-delay-2 { transition-delay: 0.3s; }

/* ── RESPONSIVE ── */
@media (max-width: 1200px) {
  .gateway__panels { padding: 0 40px; }
}

@media (max-width: 768px) {
  .gateway {
    padding: 80px 0;
  }
  .gateway__panels {
    grid-template-columns: 1fr;
    padding: 0 24px;
  }
  .gateway__panel {
    height: 440px;
  }
  .gateway__header {
    margin-bottom: 48px;
  }
}
</style>

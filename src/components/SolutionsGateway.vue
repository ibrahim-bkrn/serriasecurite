<template>
  <section class="gateway" id="solutions" ref="sectionRef">
    <div class="gateway__header reveal" :class="{ visible: visible }">
      <div class="gateway__label-row">
        <span class="gateway__label-line"></span>
        <p class="gateway__label">Nos solutions</p>
        <span class="gateway__label-line"></span>
      </div>
      <h2 class="gateway__title">DEUX APPROCHES,<br /><span class="gateway__title-stroke">UNE SEULE EXIGENCE</span></h2>
      <p class="gateway__subtitle">Surveillance humaine et matérielle — choisissez votre dispositif, nous garantissons le même niveau d'excellence.</p>
    </div>

    <div class="gateway__panels">
      <RouterLink
        v-for="(panel, i) in panels"
        :key="panel.slug"
        :to="panel.route"
        class="gateway__panel reveal"
        :class="[`reveal-delay-${i + 1}`, { visible: visible }]"
      >
        <div class="gateway__panel-photo">
          <img :src="panel.img" :alt="panel.title" class="gateway__panel-img" />
          <span class="gateway__panel-bg-num">0{{ i + 1 }}</span>
        </div>

        <div class="gateway__panel-body">
          <div class="gateway__panel-header">
            <span class="gateway__panel-num">0{{ i + 1 }}</span>
            <span class="gateway__panel-tag">{{ panel.tag }}</span>
          </div>
          <h3 class="gateway__panel-title">{{ panel.title }}</h3>
          <p class="gateway__panel-desc">{{ panel.desc }}</p>

          <!--<ul class="gateway__panel-list">
            <li v-for="item in panel.items" :key="item">
              <svg class="gateway__panel-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              {{ item }}
            </li>
          </ul>-->

          <div class="gateway__panel-cta">
            <span>Découvrir la solution</span>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
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
    tag: 'Gardiennage',
    title: 'Surveillance Humaine',
    desc: 'Des agents certifiés CNAPS sur le terrain, disponibles 24h/24 pour assurer présence, dissuasion et intervention immédiate.',
    items: ['Gardiennage & rondes', 'Agents cynophiles', 'Agents mobiles', 'Contrôle d\'accès'],
  },
  {
    slug: 'materielle',
    route: '/solutions/surveillance-materielle',
    img: materielImg,
    tag: 'Installation 48h',
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
  margin-bottom: 80px;
  padding: 0 24px;
}

.gateway__label-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 24px;
}

.gateway__label-line {
  display: block;
  width: 48px;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(201, 162, 96, 0.6));
}

.gateway__label-row .gateway__label-line:last-child {
  background: linear-gradient(to left, transparent, rgba(201, 162, 96, 0.6));
}

.gateway__label {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin: 0;
}

.gateway__title {
  font-family: var(--font-display);
  font-size: clamp(36px, 4vw, 58px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  letter-spacing: 0.02em;
  line-height: 1.1;
  margin-bottom: 20px;
}

.gateway__title-stroke {
  -webkit-text-stroke: 2px rgba(201, 162, 96, 0.5);
  color: transparent;
}

.gateway__subtitle {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.45);
  line-height: 1.7;
  max-width: 520px;
  margin: 0 auto;
}

/* ── PANELS ── */
.gateway__panels {
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;
  gap: 3px;
}

.gateway__panel {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
}

/* gold top border on hover */
.gateway__panel::before {
  content: '';
  display: block;
  height: 2px;
  background: linear-gradient(to right, var(--color-gold), rgba(201, 162, 96, 0.3));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s ease;
}

.gateway__panel:hover::before {
  transform: scaleX(1);
}

/* ── PHOTO BLOCK ── */
.gateway__panel-photo {
  position: relative;
  height: 300px;
  overflow: hidden;
  flex-shrink: 0;
}

.gateway__panel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  filter: saturate(0.25) brightness(0.9);
}

.gateway__panel:hover .gateway__panel-img {
  transform: scale(1.05);
  filter: saturate(0.45) brightness(0.95);
}

.gateway__panel-bg-num {
  position: absolute;
  right: 12px;
  bottom: -20px;
  font-family: var(--font-display);
  font-size: 140px;
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 1px rgba(201, 162, 96, 0.12);
  letter-spacing: -0.05em;
  line-height: 1;
  pointer-events: none;
  user-select: none;
  transition: -webkit-text-stroke 0.5s ease;
}

.gateway__panel:hover .gateway__panel-bg-num {
  -webkit-text-stroke: 1px rgba(201, 162, 96, 0.25);
}

/* ── TEXT BLOCK ── */
.gateway__panel-body {
  background: #0e0e0e;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-top: none;
  padding: 36px 40px 40px;
  flex: 1;
  transition: border-color 0.3s ease;
}

.gateway__panel:hover .gateway__panel-body {
  border-color: rgba(201, 162, 96, 0.12);
}

.gateway__panel-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;
}

.gateway__panel-num {
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: var(--color-gold);
}

.gateway__panel-tag {
  font-family: var(--font-body);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(201, 162, 96, 0.65);
  border: 1px solid rgba(201, 162, 96, 0.2);
  padding: 3px 10px;
  transition: border-color 0.3s, color 0.3s;
}

.gateway__panel:hover .gateway__panel-tag {
  border-color: rgba(201, 162, 96, 0.5);
  color: var(--color-gold);
}

.gateway__panel-title {
  font-family: var(--font-display);
  font-size: clamp(24px, 2.2vw, 32px);
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
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.7;
  margin-bottom: 24px;
}

.gateway__panel-list {
  list-style: none;
  padding: 0;
  margin: 0 0 28px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 16px;
}

.gateway__panel-list li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-body);
  font-size: 11.5px;
  font-weight: 400;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
}

.gateway__panel-icon {
  color: var(--color-gold);
  opacity: 0.8;
  flex-shrink: 0;
}

.gateway__panel-cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-gold);
  padding: 10px 20px;
  border: 1px solid rgba(201, 162, 96, 0.3);
  transition: background 0.3s ease, border-color 0.3s ease, gap 0.3s ease;
}

.gateway__panel:hover .gateway__panel-cta {
  background: rgba(201, 162, 96, 0.07);
  border-color: rgba(201, 162, 96, 0.6);
  gap: 16px;
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
  .gateway { padding: 80px 0; }

  .gateway__panels {
    grid-template-columns: 1fr;
    padding: 0 24px;
  }

  .gateway__panel-photo { height: 240px; }

  .gateway__panel-body { padding: 28px 24px 32px; }

  .gateway__panel-list { grid-template-columns: 1fr; }

  .gateway__header { margin-bottom: 56px; }
}
</style>

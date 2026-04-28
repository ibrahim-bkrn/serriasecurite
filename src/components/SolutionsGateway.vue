<template>
  <section class="gateway" id="solutions" ref="sectionRef">

    <div class="gateway__header reveal" :class="{ visible: visible }">
      <p class="gateway__eyebrow">Nos solutions</p>
      <h2 class="gateway__title">Nos solutions de sécurisation</h2>
    </div>

    <div class="gateway__grid">
      <component
        v-for="(card, i) in cards"
        :key="card.title"
        :is="card.route ? 'RouterLink' : 'div'"
        v-bind="card.route ? { to: card.route } : {}"
        class="gateway__card reveal"
        :class="[`reveal-delay-${i + 1}`, { visible: visible }]"
      >
        <div class="gateway__card-top">
          <span class="gateway__card-num">0{{ i + 1 }}</span>
          <h3 class="gateway__card-title">{{ card.title }}</h3>
        </div>

        <div class="gateway__card-img-wrap">
          <img :src="card.img" :alt="card.title" class="gateway__card-img" />
        </div>

        <div class="gateway__card-body">
          <p class="gateway__card-desc">{{ card.desc }}</p>
          <div v-if="card.route" class="gateway__card-cta">
            <span>Découvrir</span>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div v-else class="gateway__card-cta gateway__card-cta--soon">
            <span>Bientôt disponible</span>
          </div>
        </div>
      </component>
    </div>

  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

import humainImg    from '../assets/photos/real-4.png'
import electroImg   from '../assets/photos/alarme2.jpeg'
import physiqueImg  from '../assets/photos/porte-antisquat2.jpeg'

const sectionRef = ref(null)
const visible = ref(false)

const cards = [
  {
    route: '/solutions/surveillance-humaine',
    img: humainImg,
    title: 'Surveillance Humaine',
    desc: 'Nos agents de gardiennage assurent une présence permanente sur vos sites. Nos agents cynophiles renforcent la dissuasion dans les zones sensibles. Nos agents mobiles effectuent des rondes et interviennent sur alarme, 24h/24 en Île-de-France.',
  },
  {
    route: '/solutions/surveillance-materielle',
    img: electroImg,
    title: 'Sécurisation Électronique',
    desc: "Nos systèmes d'alarme anti-intrusion détectent toute tentative d'effraction en temps réel. La vidéosurveillance HD couvre vos espaces en continu. La télésurveillance APSAD P3 garantit une levée de doute et une intervention rapide.",
  },
  {
    route:'/solutions/protection-physique',
    img: physiqueImg,
    title: 'Protection Physique',
    desc: "Nos portes anti-squat sécurisent vos accès et empêchent toute occupation illicite de vos biens vacants. Robustes, certifiées et installées rapidement sur toute l'Île-de-France.",
  },
]

onMounted(() => {
  const obs = new IntersectionObserver(
    ([e]) => { if (e.isIntersecting) { visible.value = true; obs.disconnect() } },
    { threshold: 0.1 }
  )
  if (sectionRef.value) obs.observe(sectionRef.value)
})
</script>

<style scoped>
.gateway {
  background: var(--color-bg);
  padding: 120px 0;
}

/* ── HEADER ── */
.gateway__header {
  text-align: center;
  margin-bottom: 72px;
  padding: 0 24px;
}

.gateway__eyebrow {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin: 0 0 16px;
}

.gateway__title {
  font-family: var(--font-display);
  font-size: clamp(32px, 3.5vw, 52px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  letter-spacing: 0.02em;
  line-height: 1.1;
  margin: 0;
}

/* ── GRID ── */
.gateway__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1480px;
  margin: 0 auto;
  padding: 0 80px;
  gap: 10px;
}

/* ── CARD ── */
.gateway__card {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  background: var(--color-bg-2);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: border-color 0.3s;
  cursor: default;
}

a.gateway__card {
  cursor: pointer;
}

a.gateway__card:hover {
  border-color: rgba(201, 162, 96, 0.2);
}

/* TOP : numéro + titre */
.gateway__card-top {
  padding: 36px 36px 28px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.gateway__card-num {
  display: block;
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: var(--color-gold);
  margin-bottom: 14px;
}

.gateway__card-title {
  font-family: var(--font-display);
  font-size: clamp(22px, 1.6vw, 28px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  letter-spacing: 0.03em;
  line-height: 1.1;
  margin: 0;
}

/* IMAGE */
.gateway__card-img-wrap {
  height: 270px;
  overflow: hidden;
  flex-shrink: 0;
}

.gateway__card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  filter: saturate(0.2) brightness(0.85);
  transition: transform 0.7s ease, filter 0.5s ease;
}

a.gateway__card:hover .gateway__card-img {
  transform: scale(1.04);
  filter: saturate(0.4) brightness(0.95);
}

/* BODY : texte + CTA */
.gateway__card-body {
  padding: 32px 36px 36px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 28px;
}

.gateway__card-desc {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 300;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.72);
  margin: 0;
}

.gateway__card-cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-gold);
  transition: gap 0.3s;
}

a.gateway__card:hover .gateway__card-cta {
  gap: 16px;
}

.gateway__card-cta--soon {
  color: rgba(255, 255, 255, 0.3);
  font-style: italic;
  letter-spacing: 0.05em;
  text-transform: none;
}

/* ── REVEAL ── */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.visible { opacity: 1; transform: none; }
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.25s; }
.reveal-delay-3 { transition-delay: 0.4s; }

/* ── RESPONSIVE ── */
@media (max-width: 1100px) {
  .gateway__grid { padding: 0 40px; }
}

@media (max-width: 768px) {
  .gateway { padding: 80px 0; }
  .gateway__grid {
    grid-template-columns: 1fr;
    padding: 0 24px;
  }
  .gateway__card-img-wrap { height: 200px; }
  .gateway__card-top { padding: 28px 24px 20px; }
  .gateway__card-body { padding: 24px 24px 28px; }
  .gateway__header { margin-bottom: 48px; }
}
</style>

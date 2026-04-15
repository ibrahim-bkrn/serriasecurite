<template>
  <section class="services" ref="sectionRef">
    <!-- Watermark -->
    <img :src="logoFond" class="services__watermark" aria-hidden="true" />

    <div class="services__container">
      <div class="services__header">
        <div class="services__header-left">
          <p class="section-label reveal" :class="{ visible: visible }">Nos solutions</p>
          <h2 class="section-title reveal reveal-delay-1" :class="{ visible: visible }">
            NOS SOLUTIONS
          </h2>
          <p class="section-subtitle reveal reveal-delay-2" :class="{ visible: visible }">
            Des dispositifs adaptés à chaque menace, déployés en 48h
          </p>
        </div>
      </div>

      <div class="services__grid">
        <article
          v-for="(card, i) in cards"
          :key="card.title"
          class="service-card reveal"
          :class="[`reveal-delay-${i + 1}`, { visible: cardsVisible }]"
        >
          <div class="service-card__image-wrap">
            <img :src="card.img" :alt="card.title" class="service-card__image" />
            <div class="service-card__img-overlay"></div>
          </div>
          <div class="service-card__body">
            <span class="service-card__tag">{{ card.tag }}</span>
            <h3 class="service-card__title">{{ card.title }}</h3>
            <p class="service-card__text">{{ card.text }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import logoFond from '../assets/logo/Logo de fond 1.png'
import alarmeImg from '../assets/photos/alarme2.jpeg'
import videoImg from '../assets/photos/surv.jpeg'
import gardiennageImg from '../assets/photos/gardiennage3.jpeg'
import porteImg from '../assets/photos/porte-antisquat2.jpeg'

const sectionRef = ref(null)
const visible = ref(false)
const cardsVisible = ref(false)

const cards = [
  {
    img: alarmeImg,
    title: 'Alarme anti-intrusion',
    text: 'Détection intelligente contre toute tentative d\'intrusion. Installation AJAX Systems certifiée Grade 2 / Grade 3, déployée en 48h. Alertes instantanées, télésurveillance APSAD P3.',
    tag: 'AJAX Systems · NF A2P',
  },
  {
    img: videoImg,
    title: 'Vidéosurveillance HD',
    text: 'Caméras 4K avec IA intégrée, vision nocturne et accès mobile sécurisé. Installation et configuration en 48h. Conformité CNIL & RGPD.',
    tag: 'Hikvision · Dahua · Uniview',
  },
  {
    img: gardiennageImg,
    title: 'Surveillance humaine',
    text: 'Agents de sécurité certifiés CNAPS : présence dissuasive, rondes, contrôle d\'accès et intervention immédiate. Agents APS, cynophiles et mobiles disponibles 24/7.',
    tag: 'Agents CNAPS · 24/7',
  },
  {
    img: porteImg,
    title: 'Porte anti-squat',
    text: 'Protection physique immédiate contre squats et intrusions sur biens vacants. Pose en moins d\'1h, sans travaux, certifiée A2P BP1. Location ou achat.',
    tag: 'A2P BP1 · Installation 48h',
  },
]

onMounted(() => {
  const headerObs = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) { visible.value = true; headerObs.disconnect() } },
    { threshold: 0.2 }
  )
  const cardsObs = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) { cardsVisible.value = true; cardsObs.disconnect() } },
    { threshold: 0.1 }
  )

  if (sectionRef.value) {
    headerObs.observe(sectionRef.value)
    cardsObs.observe(sectionRef.value)
  }
})
</script>

<style scoped>
.services {
  background: var(--color-bg);
  padding: 120px 0;
  position: relative;
  overflow: hidden;
}

.services__watermark {
  position: absolute;
  top: -20px;
  right: -80px;
  width: 580px;
  height: auto;
  pointer-events: none;
  z-index: 0;
  opacity: 0.06;
  filter: brightness(10);
}

.services__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;
  position: relative;
  z-index: 1;
}

.services__header {
  margin-bottom: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.services__header-left {
  flex: 1;
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
  font-size: 52px;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  letter-spacing: 0.02em;
  line-height: 1.05;
  margin-bottom: 16px;
}

.section-subtitle {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 300;
  color: var(--color-muted);
}

.services__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.service-card {
  background: var(--color-bg-2);
  border: 1px solid var(--color-border);
  overflow: hidden;
  transition: border-color var(--transition), transform var(--transition);
}

.service-card:hover {
  border-color: var(--color-gold);
  transform: translateY(-4px);
}

.service-card__image-wrap {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.service-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
}

.service-card:hover .service-card__image {
  transform: scale(1.03);
}

.service-card__img-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60%;
  background: linear-gradient(to bottom, transparent, rgba(8, 8, 8, 0.7));
  pointer-events: none;
}

.service-card__body {
  padding: 28px;
}

.service-card__tag {
  display: inline-block;
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-gold);
  background: rgba(201, 162, 96, 0.08);
  padding: 5px 12px;
  border: 1px solid rgba(201, 162, 96, 0.2);
  margin-bottom: 16px;
}

.service-card__title {
  font-family: var(--font-display);
  font-size: 26px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-white);
  letter-spacing: 0.03em;
  margin-bottom: 12px;
}

.service-card__text {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.7;
}

@media (max-width: 1200px) {
  .services__container {
    padding: 0 40px;
  }
}

@media (max-width: 768px) {
  .services {
    padding: 80px 0;
  }

  .services__container {
    padding: 0 24px;
  }

  .section-title {
    font-size: 38px;
  }

  .services__grid {
    grid-template-columns: 1fr;
  }

  .services__header {
    margin-bottom: 48px;
  }
}
</style>

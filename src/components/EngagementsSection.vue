<template>
  <section class="engagements" ref="sectionRef">
    <div class="engagements__container">
      <div class="engagements__left">
        <p class="section-label reveal" :class="{ visible: visible }">Notre ADN</p>
        <h2 class="section-title reveal reveal-delay-1" :class="{ visible: visible }">
          NOS<br />ENGAGEMENTS
        </h2>
        <div class="engagements__line reveal reveal-delay-2" :class="{ visible: visible }"></div>
        <p class="engagements__desc reveal reveal-delay-3" :class="{ visible: visible }">
          Chaque mission est conduite avec rigueur, transparence et une exigence
          opérationnelle sans compromis.
        </p>
        <div class="engagements__photo reveal reveal-delay-4" :class="{ visible: visible }">
          <img :src="equipmentImg" alt="Matériel d'installation Sierra Sécurité" />
        </div>
      </div>

      <div class="engagements__right">
        <div
          v-for="(item, i) in engagements"
          :key="item.title"
          class="engagement-item reveal"
          :class="[`reveal-delay-${i + 1}`, { visible: itemsVisible }]"
        >
          <div class="engagement-item__top">
            <span class="engagement-item__num">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3 class="engagement-item__title">{{ item.title }}</h3>
          </div>
          <p class="engagement-item__text">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import equipmentImg from '../assets/photos/WhatsApp Image 2026-03-23 at 22.38.12 (4).jpeg'

const sectionRef = ref(null)
const visible = ref(false)
const itemsVisible = ref(false)

const engagements = [
  {
    title: 'Agents agréés CNAPS',
    text: 'Cartes professionnelles valides délivrées par le CNAPS, encadrement strict et formation continue.',
  },
  {
    title: 'Certifications reconnues',
    text: 'Conformité aux normes NF, A2P, Grade 2 et Grade 3, répondant aux exigences des assurances.',
  },
  {
    title: 'Audit & solution sur mesure',
    text: 'Analyse approfondie de chaque site avant déploiement pour adapter le dispositif aux risques identifiés.',
  },
  {
    title: 'Installation & maintenance',
    text: 'Pose assurée par des techniciens qualifiés, avec entretien régulier et suivi technique rigoureux.',
  },
  {
    title: 'Réactivité garantie',
    text: 'Mise en place rapide des dispositifs et intervention maîtrisée dans toute l\'Île-de-France.',
  },
  {
    title: 'Traçabilité & transparence',
    text: 'Rapports détaillés après chaque intervention et suivi structuré des opérations.',
  },
]

onMounted(() => {
  const headerObs = new IntersectionObserver(
    ([e]) => { if (e.isIntersecting) { visible.value = true; headerObs.disconnect() } },
    { threshold: 0.2 }
  )
  const itemsObs = new IntersectionObserver(
    ([e]) => { if (e.isIntersecting) { itemsVisible.value = true; itemsObs.disconnect() } },
    { threshold: 0.1 }
  )
  if (sectionRef.value) {
    headerObs.observe(sectionRef.value)
    itemsObs.observe(sectionRef.value)
  }
})
</script>

<style scoped>
.engagements {
  background: var(--color-bg-2);
  padding: 120px 0;
  border-top: 1px solid var(--color-border);
}

.engagements__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 100px;
  align-items: start;
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
  font-size: 56px;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  letter-spacing: 0.02em;
  line-height: 1.0;
  margin-bottom: 32px;
}

.engagements__line {
  width: 48px;
  height: 2px;
  background: var(--color-gold);
  margin-bottom: 28px;
}

.engagements__desc {
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.7;
}

.engagements__photo {
  margin-top: 36px;
  width: 100%;
  height: 420px;
  overflow: hidden;
  border: 1px solid var(--color-border);
}

.engagements__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  filter: saturate(0.85) brightness(0.95);
  transition: transform 0.6s ease;
}

.engagements__photo:hover img {
  transform: scale(1.03);
}

.engagements__right {
  display: flex;
  flex-direction: column;
}

.engagement-item {
  padding: 28px 0;
  border-bottom: 1px solid var(--color-border);
}

.engagement-item:first-child {
  border-top: 1px solid var(--color-border);
}

.engagement-item__top {
  display: flex;
  align-items: baseline;
  gap: 20px;
  margin-bottom: 10px;
}

.engagement-item__num {
  font-family: var(--font-display);
  font-size: 30px;
  font-weight: 700;
  color: var(--color-gold);
  line-height: 1;
  flex-shrink: 0;
}

.engagement-item__title {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 500;
  color: var(--color-white);
  letter-spacing: 0.01em;
}

.engagement-item__text {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.7;
  padding-left: 50px;
}

@media (max-width: 1200px) {
  .engagements__container {
    padding: 0 40px;
    gap: 60px;
    grid-template-columns: 300px 1fr;
  }
}

@media (max-width: 768px) {
  .engagements {
    padding: 80px 0;
  }

  .engagements__container {
    padding: 0 24px;
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .section-title {
    font-size: 42px;
  }

  .engagement-item__text {
    padding-left: 0;
    margin-top: 8px;
  }
}
</style>

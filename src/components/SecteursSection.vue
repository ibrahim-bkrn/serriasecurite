<template>
  <section class="secteurs" ref="sectionRef">
    <div class="secteurs__container">
      <div class="secteurs__header">
        <p class="section-label reveal" :class="{ visible: visible }">Domaines</p>
        <h2 class="section-title reveal reveal-delay-1" :class="{ visible: visible }">
          NOS DOMAINES D'INTERVENTION
        </h2>
        <p class="section-subtitle reveal reveal-delay-2" :class="{ visible: visible }">
          Nous adaptons nos dispositifs à chaque environnement
        </p>
      </div>

      <div class="secteurs__list">
        <div
          v-for="(secteur, i) in secteurs"
          :key="secteur.name"
          class="secteur-item reveal"
          :class="[`reveal-delay-${i + 1}`, { visible: itemsVisible }]"
        >
          <div class="secteur-item__inner">
            <span class="secteur-item__icon" v-html="secteur.icon"></span>
            <span class="secteur-item__name">{{ secteur.name }}</span>
          </div>
          <div class="secteur-item__sep" v-if="i < secteurs.length - 1"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const sectionRef = ref(null)
const visible = ref(false)
const itemsVisible = ref(false)

const secteurs = [
  {
    name: 'Chantiers',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2 20h20M4 20V10l8-6 8 6v10M10 20v-6h4v6"/>
    </svg>`,
  },
  {
    name: 'Biens vacants inoccupés',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="1"/>
      <path d="M3 9h18M9 21V9"/>
    </svg>`,
  },
  {
    name: 'Commerces de proximité',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 3h18l-2 9H5L3 3z"/>
      <path d="M5 12v9h14v-9"/>
      <path d="M10 12v9M14 12v9"/>
    </svg>`,
  },
  {
    name: 'Maisons & Appartements',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 12l9-9 9 9M5 10v10h4v-6h6v6h4V10"/>
    </svg>`,
  },
  {
    name: 'Échafaudages',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="5" y1="3" x2="5" y2="21"/>
      <line x1="19" y1="3" x2="19" y2="21"/>
      <line x1="5" y1="7" x2="19" y2="7"/>
      <line x1="5" y1="12" x2="19" y2="12"/>
      <line x1="5" y1="17" x2="19" y2="17"/>
    </svg>`,
  },
]

onMounted(() => {
  const headerObs = new IntersectionObserver(
    ([e]) => { if (e.isIntersecting) { visible.value = true; headerObs.disconnect() } },
    { threshold: 0.2 }
  )
  const itemsObs = new IntersectionObserver(
    ([e]) => { if (e.isIntersecting) { itemsVisible.value = true; itemsObs.disconnect() } },
    { threshold: 0.15 }
  )
  if (sectionRef.value) {
    headerObs.observe(sectionRef.value)
    itemsObs.observe(sectionRef.value)
  }
})
</script>

<style scoped>
.secteurs {
  background: var(--color-bg-2);
  padding: 120px 0;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.secteurs__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;
}

.secteurs__header {
  margin-bottom: 72px;
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

.secteurs__list {
  display: flex;
  align-items: stretch;
  gap: 0;
}

.secteur-item {
  display: flex;
  align-items: center;
  flex: 1;
}

.secteur-item__inner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 0 40px 0 0;
  flex: 1;
}

.secteur-item__icon {
  color: var(--color-gold);
  display: flex;
  align-items: center;
  justify-content: center;
}

.secteur-item__name {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-white);
  line-height: 1.2;
}

.secteur-item__sep {
  width: 1px;
  height: 80px;
  background: var(--color-border);
  flex-shrink: 0;
  margin-right: 40px;
}

@media (max-width: 1200px) {
  .secteurs__container {
    padding: 0 40px;
  }

  .secteur-item__inner {
    padding-right: 24px;
  }

  .secteur-item__sep {
    margin-right: 24px;
  }

  .secteur-item__name {
    font-size: 15px;
  }
}

@media (max-width: 768px) {
  .secteurs {
    padding: 80px 0;
  }

  .secteurs__container {
    padding: 0 24px;
  }

  .section-title {
    font-size: 38px;
  }

  .secteurs__header {
    margin-bottom: 48px;
  }

  .secteurs__list {
    flex-direction: column;
    gap: 0;
  }

  .secteur-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .secteur-item__inner {
    flex-direction: row;
    align-items: center;
    padding: 24px 0;
    gap: 20px;
    width: 100%;
  }

  .secteur-item__sep {
    width: 100%;
    height: 1px;
    margin: 0;
  }
}
</style>

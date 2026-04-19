<template>
  <section class="clients" ref="sectionRef">
    <div class="clients__sep-top"></div>
    <div class="clients__container">
      <div class="clients__header">
        <p class="section-label reveal" :class="{ visible: visible }">Écosystème technique</p>
        <h2 class="section-title reveal reveal-delay-1" :class="{ visible: visible }">
          NOS PARTENAIRES TECHNIQUES
        </h2>
        <p class="section-subtitle reveal reveal-delay-2" :class="{ visible: visible }">
          Des équipements certifiés, sélectionnés pour leur fiabilité et leur performance sur le terrain.
        </p>
      </div>

      <div class="clients__grid">
        <div
          v-for="(client, i) in clients"
          :key="client.alt"
          class="client-logo reveal"
          :class="[`reveal-delay-${(i % 4) + 1}`, { visible: logosVisible }]"
        >
          <img :src="client.src" :alt="client.alt" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import ajaxImg      from '../assets/partenaires/ajax.png'
import dahuaImg     from '../assets/partenaires/dahua.png'
import hikImg       from '../assets/partenaires/hik.png'
import securitasImg from '../assets/partenaires/securitas.png'
import univiewImg   from '../assets/partenaires/uniview.png'

const sectionRef = ref(null)
const visible = ref(false)
const logosVisible = ref(false)

const clients = [
  { src: ajaxImg,      alt: 'Ajax Systems' },
  { src: dahuaImg,     alt: 'Dahua'        },
  { src: hikImg,       alt: 'Hikvision'    },
  { src: securitasImg, alt: 'Securitas'    },
  { src: univiewImg,   alt: 'Uniview'      },
]

onMounted(() => {
  const headerObs = new IntersectionObserver(
    ([e]) => { if (e.isIntersecting) { visible.value = true; headerObs.disconnect() } },
    { threshold: 0.2 }
  )
  const logosObs = new IntersectionObserver(
    ([e]) => { if (e.isIntersecting) { logosVisible.value = true; logosObs.disconnect() } },
    { threshold: 0.1 }
  )
  if (sectionRef.value) {
    headerObs.observe(sectionRef.value)
    logosObs.observe(sectionRef.value)
  }
})
</script>

<style scoped>
.clients {
  background: var(--color-bg);
  padding: 120px 0;
  position: relative;
}

.clients__sep-top {
  position: absolute;
  top: 0;
  left: 80px;
  right: 80px;
  height: 1px;
  background: var(--color-border);
}

.clients__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;
}

.clients__header {
  text-align: center;
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
  margin-bottom: 20px;
}

.section-subtitle {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 300;
  color: var(--color-muted);
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.7;
}

.clients__grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1px;
  background: var(--color-border);
  border: 1px solid var(--color-border);
}

.client-logo {
  background: var(--color-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 24px;
  transition: background var(--transition);
  cursor: default;
}

.client-logo:hover {
  background: rgba(201, 162, 96, 0.04);
}

.client-logo img {
  width: 100%;
  max-width: 130px;
  max-height: 56px;
  object-fit: contain;
  filter: opacity(0.75);
  transition: filter var(--transition);
}

.client-logo:hover img {
  filter: opacity(1);
}

@media (max-width: 1200px) {
  .clients__container {
    padding: 0 40px;
  }

  .clients__sep-top {
    left: 40px;
    right: 40px;
  }

  .clients__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .clients {
    padding: 80px 0;
  }

  .clients__container {
    padding: 0 24px;
  }

  .clients__sep-top {
    left: 24px;
    right: 24px;
  }

  .section-title {
    font-size: 34px;
  }

  .section-subtitle {
    font-size: 14px;
  }

  .clients__header {
    margin-bottom: 48px;
  }

  .clients__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .client-logo:first-child {
    grid-column: 1 / -1;
  }

  .client-logo {
    padding: 24px 16px;
  }
}
</style>

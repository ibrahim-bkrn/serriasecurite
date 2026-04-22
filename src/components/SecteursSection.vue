<template>
  <section class="secteurs" ref="sectionRef">

    <div class="secteurs__header reveal" :class="{ visible: visible }">
      <p class="section-label">Domaines</p>
      <h2 class="section-title">NOS DOMAINES D'INTERVENTION</h2>
      <p class="section-subtitle">Nous adaptons nos dispositifs à chaque environnement</p>
    </div>

    <div class="secteurs__carousel-wrap">
      <div class="secteurs__viewport" ref="viewportRef">
        <div class="secteurs__track" :style="trackStyle">
          <div
            v-for="(secteur, i) in secteurs"
            :key="secteur.name"
            class="secteur-card"
            :style="{ width: cardWidth + 'px' }"
          >
            <img :src="secteur.img" :alt="secteur.name" class="secteur-card__img" />
            <div class="secteur-card__overlay"></div>
            <div class="secteur-card__content">
              <span class="secteur-card__num">0{{ i + 1 }}</span>
              <h3 class="secteur-card__title">{{ secteur.name }}</h3>
            </div>
          </div>
        </div>
      </div>

      <button class="secteurs__arrow secteurs__arrow--prev" :class="{ disabled: !canPrev }" @click="prev" aria-label="Précédent">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
          <path d="M16 10H4M9 5l-5 5 5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button class="secteurs__arrow secteurs__arrow--next" :class="{ disabled: !canNext }" @click="next" aria-label="Suivant">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
          <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

    <div class="secteurs__dots">
      <button
        v-for="(_, i) in secteurs"
        :key="i"
        class="secteurs__dot"
        :class="{ active: current === i }"
        @click="current = i"
        :aria-label="`Slide ${i + 1}`"
      />
    </div>

    <div class="secteurs__cta reveal" :class="{ visible: visible }">
      <router-link to="/secteurs" class="secteurs__btn">
        <span>Secteurs d'intervention</span>
        <div class="secteurs__btn-arrow">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </router-link>
    </div>

  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

import gardiennageImg  from '../assets/photos/gardiennage3.jpeg'
import porteImg        from '../assets/photos/porte-antisquat2.jpeg'
import surveillanceImg from '../assets/photos/surveillance2.jpeg'
import identiteImg     from '../assets/photos/identite.jpeg'
import gardiennage2Img from '../assets/photos/gardiennage2.jpeg'

const sectionRef    = ref(null)
const viewportRef   = ref(null)
const visible       = ref(false)
const current       = ref(0)
const cardWidth     = ref(380)
const visibleCount  = ref(3)
const gap           = 12

const secteurs = [
  { name: 'Chantiers',               img: gardiennageImg  },
  { name: 'Biens vacants inoccupés', img: porteImg        },
  { name: 'Commerces de proximité',  img: gardiennage2Img },
  { name: 'Maisons & Appartements',  img: identiteImg     },
  { name: 'Échafaudages',            img: surveillanceImg },
]

const maxIndex = computed(() => secteurs.length - visibleCount.value)
const canPrev  = computed(() => current.value > 0)
const canNext  = computed(() => current.value < maxIndex.value)

const trackStyle = computed(() => ({
  transform: `translateX(-${current.value * (cardWidth.value + gap)}px)`,
}))

function prev() {
  if (canPrev.value) current.value--
}

function next() {
  if (canNext.value) current.value++
}

function updateLayout() {
  if (!viewportRef.value) return
  const vw = viewportRef.value.offsetWidth
  const ww = window.innerWidth
  if (ww >= 1100) {
    visibleCount.value = 3
    cardWidth.value = Math.floor((vw - gap * 2) / 3)
  } else if (ww >= 640) {
    visibleCount.value = 2
    cardWidth.value = Math.floor((vw - gap) / 2)
  } else {
    visibleCount.value = 1
    cardWidth.value = vw
  }
  current.value = Math.min(current.value, maxIndex.value)
}

onMounted(() => {
  updateLayout()
  window.addEventListener('resize', updateLayout)

  const obs = new IntersectionObserver(
    ([e]) => { if (e.isIntersecting) { visible.value = true; obs.disconnect() } },
    { threshold: 0.15 }
  )
  if (sectionRef.value) obs.observe(sectionRef.value)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateLayout)
})
</script>

<style scoped>
.secteurs {
  background: var(--color-bg-2);
  padding: 120px 0;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

/* ── HEADER ── */
.secteurs__header {
  text-align: center;
  margin-bottom: 72px;
  padding: 0 24px;
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
  font-size: clamp(32px, 4vw, 52px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  letter-spacing: 0.02em;
  line-height: 1.05;
  margin-bottom: 16px;
}

.section-subtitle {
  font-family: var(--font-body);
  font-size: 20px;
  font-weight: 300;
  color: var(--color-muted);
}

/* ── CAROUSEL WRAP ── */
.secteurs__carousel-wrap {
  position: relative;
  padding: 0 80px;
  max-width: 1480px;
  margin: 0 auto;
}

.secteurs__viewport {
  overflow: hidden;
}

.secteurs__track {
  display: flex;
  gap: 12px;
  transition: transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* ── CARD ── */
.secteur-card {
  position: relative;
  height: 480px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 6px;
}

.secteur-card__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  filter: saturate(0.25) brightness(0.75);
  transition: transform 0.8s ease, filter 0.5s ease;
}

.secteur-card:hover .secteur-card__img {
  transform: scale(1.04);
  filter: saturate(0.4) brightness(0.85);
}

.secteur-card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.82) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    transparent 100%
  );
}

.secteur-card__content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 32px 28px;
}

.secteur-card__num {
  display: block;
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: var(--color-gold);
  margin-bottom: 10px;
}

.secteur-card__title {
  font-family: var(--font-display);
  font-size: clamp(18px, 1.4vw, 22px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  letter-spacing: 0.04em;
  line-height: 1.15;
  margin: 0;
}

/* ── ARROWS ── */
.secteurs__arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: var(--color-white);
  cursor: pointer;
  z-index: 10;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
}

.secteurs__arrow:hover:not(.disabled) {
  background: rgba(201, 162, 96, 0.15);
  border-color: rgba(201, 162, 96, 0.4);
  color: var(--color-gold);
}

.secteurs__arrow.disabled {
  opacity: 0.25;
  cursor: default;
  pointer-events: none;
}

.secteurs__arrow--prev { left: 16px; }
.secteurs__arrow--next { right: 16px; }

/* ── DOTS ── */
.secteurs__dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
}

.secteurs__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
  padding: 0;
}

.secteurs__dot.active {
  background: var(--color-gold);
  transform: scale(1.4);
}

/* ── CTA ── */
.secteurs__cta {
  display: flex;
  justify-content: center;
  margin-top: 72px;
  padding: 0 24px;
}

.secteurs__btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  background: var(--color-gold);
  padding: 14px 28px;
  border-radius: 4px;
  transition: opacity 0.2s;
}

.secteurs__btn span {
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #0F0F0F;
}

.secteurs__btn-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0F0F0F;
  flex-shrink: 0;
}

.secteurs__btn:hover {
  opacity: 0.88;
}

/* ── REVEAL ── */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.visible { opacity: 1; transform: none; }

/* ── RESPONSIVE ── */
@media (max-width: 1100px) {
  .secteurs__carousel-wrap { padding: 0 52px; }
  .secteurs__arrow--prev { left: 4px; }
  .secteurs__arrow--next { right: 4px; }
}

@media (max-width: 768px) {
  .secteurs { padding: 80px 0; }
  .secteurs__header { margin-bottom: 48px; }
  .secteurs__carousel-wrap { padding: 0 44px; }
  .secteur-card { height: 360px; }
  .secteurs__cta { margin-top: 48px; }
}
</style>

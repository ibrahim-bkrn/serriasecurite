<template>
  <div class="terrain" ref="bannerRef">
    <img :src="terrainImg" alt="Site sous surveillance Sierra Sécurité" class="terrain__img" />
    <div class="terrain__overlay"></div>
    <div class="terrain__content reveal" :class="{ visible: vis }">
      <span class="terrain__label">Sur le terrain</span>
      <p class="terrain__text">
        Chaque bien sécurisé porte notre signature.<br />
        <span class="terrain__text-gold">Intervention sous 48h en Île-de-France.</span>
      </p>
      <router-link to="/contact" class="terrain__cta">
        <span>Demander un audit gratuit</span>
        <div class="terrain__cta-arrow">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import terrainImg2 from '../assets/photos/WhatsApp Image 2026-03-23 at 22.02.35 (4).jpeg'
import terrainImg from '../assets/photos/identite2.jpeg'

const bannerRef = ref(null)
const vis = ref(false)

onMounted(() => {
  if (!bannerRef.value) return
  const obs = new IntersectionObserver(
    ([e]) => { if (e.isIntersecting) { vis.value = true; obs.disconnect() } },
    { threshold: 0.2 }
  )
  obs.observe(bannerRef.value)
})
</script>

<style scoped>
.terrain {
  position: relative;
  height: 520px;
  overflow: hidden;
}

.terrain__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  filter: saturate(0.4) brightness(0.6);
}

.terrain__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(8, 8, 8, 0.75) 0%,
    rgba(8, 8, 8, 0.4) 50%,
    rgba(8, 8, 8, 0.65) 100%
  );
}

.terrain__content {
  position: relative;
  z-index: 2;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
}

.terrain__label {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-gold);
}

.terrain__text {
  font-family: var(--font-display);
  font-size: clamp(28px, 3.5vw, 48px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  line-height: 1.15;
  letter-spacing: 0.02em;
  max-width: 680px;
}

.terrain__text-gold {
  color: var(--color-gold);
}

.terrain__cta {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  margin-top: 8px;
}

.terrain__cta span {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-gold);
}

.terrain__cta-arrow {
  width: 44px;
  height: 44px;
  border: 1px solid rgba(201, 162, 96, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-gold);
  transition: all 0.25s;
}

.terrain__cta:hover .terrain__cta-arrow {
  background: var(--color-gold);
  color: var(--color-bg);
  border-color: var(--color-gold);
}

@media (max-width: 768px) {
  .terrain { height: 420px; }
  .terrain__content { padding: 0 24px; gap: 20px; }
}
</style>

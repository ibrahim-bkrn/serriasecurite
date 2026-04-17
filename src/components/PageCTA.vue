<template>
  <section class="page-cta" ref="ctaRef">
    <div class="page-cta__bg">
      <img :src="bgImg" alt="" class="page-cta__bg-img" />
      <div class="page-cta__overlay"></div>
    </div>
    <div class="page-cta__content reveal" :class="{ visible: vis }">
      <p class="page-cta__label">{{ label }}</p>
      <h2 class="page-cta__title">{{ title }}</h2>
      <p class="page-cta__sub">{{ subtitle }}</p>
      <div class="page-cta__actions">
        <router-link to="/contact" class="page-cta__btn page-cta__btn--primary">
          <span>Demander un audit gratuit</span>
          <div class="page-cta__btn-arrow">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </router-link>
        <a :href="'tel:' + phone" class="page-cta__btn page-cta__btn--secondary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" fill="currentColor"/>
          </svg>
          <span>Être rappelé sous 30 min</span>
        </a>
      </div>
      <div class="page-cta__badges">
        <span v-for="b in badges" :key="b" class="page-cta__badge">{{ b }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import bgImg from '../assets/photos/identite2.jpeg'

defineProps({
  label:    { type: String, default: 'Passez à l\'action' },
  title:    { type: String, default: 'Protégez votre site\ndès aujourd\'hui.' },
  subtitle: { type: String, default: 'Intervention sous 48h · Devis gratuit en 30 min · Toute l\'Île-de-France' },
  phone:    { type: String, default: '0782564979' },
})

const badges = ['Agréé CNAPS', 'Déploiement 48h', 'AJAX Certified', 'APSAD P3']

const ctaRef = ref(null)
const vis    = ref(false)

onMounted(() => {
  const obs = new IntersectionObserver(
    ([e]) => { if (e.isIntersecting) { vis.value = true; obs.disconnect() } },
    { threshold: 0.2 }
  )
  if (ctaRef.value) obs.observe(ctaRef.value)
})
</script>

<style scoped>
.page-cta {
  position: relative;
  padding: 120px 0;
  overflow: hidden;
}

.page-cta__bg {
  position: absolute;
  inset: 0;
}

.page-cta__bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: saturate(0.3) brightness(0.5);
}

.page-cta__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.75) 100%);
}

.page-cta__content {
  position: relative;
  z-index: 2;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
}

.page-cta__label {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-gold);
}

.page-cta__title {
  font-family: var(--font-display);
  font-size: clamp(36px, 5vw, 68px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  line-height: 1.0;
  letter-spacing: 0.02em;
  white-space: pre-line;
  max-width: 680px;
}

.page-cta__sub {
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.6;
}

.page-cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 8px;
}

.page-cta__btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: all 0.25s;
  padding: 14px 24px;
}

.page-cta__btn--primary {
  background: var(--color-gold);
  color: var(--color-bg);
}

.page-cta__btn--primary:hover {
  background: var(--color-gold-light);
}

.page-cta__btn-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
}

.page-cta__btn--primary:hover .page-cta__btn-arrow {
  transform: translateX(4px);
}

.page-cta__btn--secondary {
  color: var(--color-text);
  border: 1px solid rgba(255,255,255,0.15);
  background: rgba(255,255,255,0.04);
}

.page-cta__btn--secondary:hover {
  border-color: rgba(201, 162, 96, 0.4);
  color: var(--color-gold);
}

.page-cta__badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}

.page-cta__badge {
  font-family: var(--font-body);
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(201, 162, 96, 0.6);
  border: 1px solid rgba(201, 162, 96, 0.15);
  padding: 5px 12px;
  background: rgba(201, 162, 96, 0.04);
}

@media (max-width: 1024px) {
  .page-cta__content { padding: 0 40px; }
}

@media (max-width: 768px) {
  .page-cta { padding: 80px 0; }
  .page-cta__content { padding: 0 24px; gap: 20px; }
  .page-cta__actions { flex-direction: column; }
  .page-cta__btn { justify-content: center; text-align: center; }
}
</style>

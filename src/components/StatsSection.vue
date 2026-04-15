<template>
  <section class="stats" ref="sectionRef">
    <div class="stats__container">

      <div class="stats__header">
        <h2 class="stats__title reveal" :class="{ visible: vis }">
          SÉCURISER VOTRE BIEN, C'EST
          <span class="gold">RÉDUIRE LES RISQUES</span>
        </h2>
        <p class="stats__subtitle reveal reveal-delay-1" :class="{ visible: vis }">
          Installer un système d'alarme et de vidéosurveillance, c'est investir dans votre sérénité.
          Les bénéfices sont clairs et mesurables
        </p>
      </div>

      <div class="bento">
        <!-- Featured card -->
        <div class="bento__featured reveal reveal-delay-1" :class="{ visible: gridVis }">
          <span class="featured__eyebrow">Statistique clé</span>
          <span class="featured__number">+80%</span>
          <div class="featured__line"></div>
          <span class="featured__label">CAMBRIOLAGES ÉVITÉS grâce à la vidéosurveillance</span>
          <a href="#contact" class="bento__cta">
            <span>Nous contacter</span>
            <div class="bento__cta-arrow">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </a>
        </div>

        <!-- 2x2 grid of other stats -->
        <div class="bento__grid">
          <div
            v-for="(stat, i) in stats"
            :key="stat.label"
            class="bento__cell reveal"
            :class="[`reveal-delay-${i + 2}`, { visible: gridVis }]"
          >
            <span class="cell__number">{{ stat.number }}</span>
            <span class="cell__label">{{ stat.label }}</span>
          </div>
        </div>
      </div>

      <!-- 24/7 strip below -->
      <div class="stats__footer reveal reveal-delay-6" :class="{ visible: gridVis }">
        <div class="footer__247">
          <span class="footer__247-number">24 / 7</span>
          <span class="footer__247-label">UNE PROTECTION CONTINUE</span>
        </div>
        <div class="footer__sep"></div>
        <p class="footer__note">
          Sierra Sécurité assure une surveillance ininterrompue, 365 jours par an,
          avec télésurveillance APSAD P3 et intervention rapide.
        </p>
        <div class="footer__logo-wrap">
          <img :src="logoFond" alt="" class="footer__logo" />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import logoFond from '../assets/logo/Logo de fond 1.png'

const sectionRef = ref(null)
const vis     = ref(false)
const gridVis = ref(false)

const stats = [
  { number: '+60%', label: 'RÉACTIVITÉ DE LA POLICE'  },
  { number: '+75%', label: "TRANQUILLITÉ D'ESPRIT"    },
  { number: '-50%', label: "RISQUE D'INTRUSION"       },
  { number: '+20%', label: 'VALEUR DU BIEN'           },
]

onMounted(() => {
  if (!sectionRef.value) return
  const hObs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { vis.value = true; hObs.disconnect() } }, { threshold: 0.15 })
  const gObs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { gridVis.value = true; gObs.disconnect() } }, { threshold: 0.08 })
  hObs.observe(sectionRef.value)
  gObs.observe(sectionRef.value)
})
</script>

<style scoped>
.stats {
  background: var(--color-bg);
  padding: 120px 0;
  border-top: 1px solid var(--color-border);
}
.stats__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;
}

/* Header */
.stats__header {
  text-align: center;
  margin-bottom: 72px;
}
.stats__title {
  font-family: var(--font-display);
  font-size: clamp(28px, 3.5vw, 48px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  letter-spacing: 0.02em;
  line-height: 1.1;
  margin-bottom: 20px;
}
.gold { color: var(--color-gold); }
.stats__subtitle {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 300;
  color: var(--color-muted);
  max-width: 580px;
  margin: 0 auto;
  line-height: 1.7;
}

/* Bento */
.bento {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2px;
  background: var(--color-border);
}

/* Featured card */
.bento__featured {
  background: var(--color-gold);
  padding: 48px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 420px;
}
.featured__eyebrow {
  font-family: var(--font-body);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(15, 15, 15, 0.6);
}
.featured__number {
  font-family: var(--font-display);
  font-size: clamp(72px, 8vw, 120px);
  font-weight: 800;
  color: #0F0F0F;
  line-height: 1;
  letter-spacing: -0.03em;
}
.featured__line {
  width: 40px;
  height: 2px;
  background: rgba(15, 15, 15, 0.3);
}
.featured__label {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  color: #0F0F0F;
  letter-spacing: 0.04em;
  line-height: 1.2;
}

/* CTA inside featured */
.bento__cta {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
  margin-top: 8px;
}
.bento__cta span {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #0F0F0F;
}
.bento__cta-arrow {
  width: 40px;
  height: 40px;
  border: 1.5px solid rgba(15, 15, 15, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0F0F0F;
  transition: all 0.25s;
}
.bento__cta:hover .bento__cta-arrow {
  background: #0F0F0F;
  color: var(--color-gold);
  border-color: #0F0F0F;
}

/* 2x2 grid */
.bento__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;
  background: var(--color-border);
}

.bento__cell {
  background: var(--color-bg-2);
  padding: 40px 36px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 12px;
  transition: background 0.3s;
}

.bento__cell:hover {
  background: rgba(201, 162, 96, 0.06);
}

.cell__number {
  font-family: var(--font-display);
  font-size: clamp(48px, 5vw, 72px);
  font-weight: 800;
  color: var(--color-white);
  line-height: 1;
  letter-spacing: -0.02em;
}

.cell__label {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-muted);
}

/* Footer 24/7 */
.stats__footer {
  display: flex;
  align-items: center;
  gap: 48px;
  margin-top: 2px;
  background: var(--color-bg-2);
  border: 1px solid var(--color-border);
  border-top: none;
  padding: 32px 40px;
}
.footer__247 {
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-shrink: 0;
}
.footer__247-number {
  font-family: var(--font-display);
  font-size: 48px;
  font-weight: 800;
  color: var(--color-gold);
  line-height: 1;
  letter-spacing: -0.02em;
}
.footer__247-label {
  font-family: var(--font-body);
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-muted);
}
.footer__sep {
  width: 1px;
  height: 48px;
  background: var(--color-border);
  flex-shrink: 0;
}
.footer__note {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.7;
  max-width: 480px;
}

.footer__logo-wrap {
  margin-left: auto;
  flex-shrink: 0;
  opacity: 1;
  pointer-events: none;
}

.footer__logo {
  height: 80px;
  width: auto;
  display: block;
}

/* Responsive */
@media (max-width: 1200px) {
  .stats__container { padding: 0 40px; }
}
@media (max-width: 900px) {
  .stats { padding: 80px 0; }
  .bento { grid-template-columns: 1fr; }
  .bento__featured { min-height: 280px; }
  .stats__footer { flex-wrap: wrap; gap: 24px; }
  .footer__sep { display: none; }
}
@media (max-width: 600px) {
  .stats__container { padding: 0 24px; }
  .bento__grid { grid-template-columns: 1fr; }
  .stats__footer { padding: 24px; }
}
</style>

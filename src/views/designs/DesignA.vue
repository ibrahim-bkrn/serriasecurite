<template>
  <div class="page-a">
    <DesignNav />

    <section class="hero-a">
      <!-- Ghost number background -->
      <div class="hero-a__ghost" aria-hidden="true">SIERRA</div>

      <!-- Radial glow -->
      <div class="hero-a__glow" aria-hidden="true"></div>

      <!-- Left content -->
      <div class="hero-a__left">
        <div class="hero-a__tag-row">
          <div class="hero-a__tag-line"></div>
          <span class="hero-a__tag">Sécurité Privée · Île-de-France</span>
        </div>

        <h1 class="hero-a__title">
          Votre<br />
          protection,<br />
          <span class="hero-a__title-gold">notre priorité.</span>
        </h1>

        <p class="hero-a__desc">
          Agents certifiés CNAPS. Déploiement en 48h.<br />
          Protection sur mesure de vos sites.
        </p>

        <div class="hero-a__ctas">
          <a href="#" class="hero-a__btn hero-a__btn--fill">Obtenir un devis gratuit</a>
          <a href="#" class="hero-a__btn hero-a__btn--ghost">Nos solutions ↗</a>
        </div>
      </div>

      <!-- Right stats column -->
      <div class="hero-a__right">
        <div class="hero-a__divider-v"></div>

        <div class="hero-a__stats">
          <div class="hero-a__stat">
            <span class="hero-a__stat-n">24<span class="hero-a__stat-unit">/7</span></span>
            <span class="hero-a__stat-l">Surveillance<br />continue</span>
          </div>

          <div class="hero-a__stat-sep"></div>

          <div class="hero-a__stat">
            <span class="hero-a__stat-n">48<span class="hero-a__stat-unit">h</span></span>
            <span class="hero-a__stat-l">Délai de<br />déploiement</span>
          </div>

          <div class="hero-a__stat-sep"></div>

          <div class="hero-a__stat">
            <span class="hero-a__stat-n">+200</span>
            <span class="hero-a__stat-l">Sites<br />sécurisés</span>
          </div>

          <div class="hero-a__stat-sep"></div>

          <div class="hero-a__stat">
            <span class="hero-a__stat-n">100<span class="hero-a__stat-unit">%</span></span>
            <span class="hero-a__stat-l">Agents<br />certifiés CNAPS</span>
          </div>
        </div>
      </div>

      <!-- Service badges bottom -->
      <div class="hero-a__services">
        <div class="hero-a__service">
          <span class="hero-a__service-icon">◈</span>
          <span>Alarme anti-intrusion</span>
        </div>
        <div class="hero-a__service-dot">·</div>
        <div class="hero-a__service">
          <span class="hero-a__service-icon">◈</span>
          <span>Vidéosurveillance</span>
        </div>
        <div class="hero-a__service-dot">·</div>
        <div class="hero-a__service">
          <span class="hero-a__service-icon">◈</span>
          <span>Gardiennage</span>
        </div>
        <div class="hero-a__service-dot">·</div>
        <div class="hero-a__service">
          <span class="hero-a__service-icon">◈</span>
          <span>Porte anti-squat</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import DesignNav from '../../components/DesignNav.vue'
</script>

<style scoped>
* { box-sizing: border-box; margin: 0; padding: 0; }

.page-a {
  background: #080808;
  font-family: 'DM Sans', sans-serif;
}

.hero-a {
  position: relative;
  height: 100vh;
  min-height: 700px;
  overflow: hidden;
  padding-top: 52px;
  display: flex;
  align-items: center;
}

/* Ghost text in background */
.hero-a__ghost {
  position: absolute;
  bottom: -40px;
  left: -20px;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: clamp(160px, 22vw, 320px);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: -0.04em;
  color: transparent;
  -webkit-text-stroke: 1px rgba(201, 162, 96, 0.06);
  user-select: none;
  pointer-events: none;
  white-space: nowrap;
  z-index: 0;
}

/* Radial glow */
.hero-a__glow {
  position: absolute;
  top: 30%;
  left: 30%;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(201, 162, 96, 0.04) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

/* ── LEFT ── */
.hero-a__left {
  position: relative;
  z-index: 2;
  flex: 1;
  padding: 0 64px 80px 80px;
  max-width: 680px;
}

.hero-a__tag-row {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 48px;
}
.hero-a__tag-line {
  width: 28px;
  height: 1px;
  background: #C9A260;
  flex-shrink: 0;
}
.hero-a__tag {
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(201, 162, 96, 0.7);
}

.hero-a__title {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: clamp(68px, 7.5vw, 110px);
  font-weight: 800;
  text-transform: uppercase;
  color: #FFFFFF;
  line-height: 0.9;
  letter-spacing: -0.02em;
  margin-bottom: 36px;
}

.hero-a__title-gold {
  color: #C9A260;
  display: block;
}

.hero-a__desc {
  font-size: 15px;
  color: rgba(255,255,255,0.35);
  line-height: 1.8;
  margin-bottom: 48px;
  max-width: 420px;
}

.hero-a__ctas {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}

.hero-a__btn {
  display: inline-block;
  padding: 15px 32px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.25s;
}

.hero-a__btn--fill {
  background: #C9A260;
  color: #080808;
  border: 1px solid #C9A260;
}
.hero-a__btn--fill:hover {
  background: transparent;
  color: #C9A260;
}

.hero-a__btn--ghost {
  background: transparent;
  color: rgba(255,255,255,0.4);
  border: none;
  padding-left: 0;
  font-size: 13px;
  letter-spacing: 0.05em;
}
.hero-a__btn--ghost:hover {
  color: #C9A260;
}

/* ── RIGHT stats ── */
.hero-a__right {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 48px;
  padding-right: 80px;
  flex-shrink: 0;
}

.hero-a__divider-v {
  width: 1px;
  height: 280px;
  background: linear-gradient(to bottom, transparent, rgba(201,162,96,0.2), transparent);
  flex-shrink: 0;
}

.hero-a__stats {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.hero-a__stat {
  padding: 20px 0;
}

.hero-a__stat-n {
  display: block;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 52px;
  font-weight: 700;
  color: #FFFFFF;
  line-height: 1;
  margin-bottom: 6px;
}

.hero-a__stat-unit {
  font-size: 30px;
  color: #C9A260;
}

.hero-a__stat-l {
  font-size: 11px;
  color: rgba(255,255,255,0.3);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  line-height: 1.5;
}

.hero-a__stat-sep {
  height: 1px;
  background: rgba(255,255,255,0.05);
}

/* ── Service strip at bottom ── */
.hero-a__services {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 80px;
  border-top: 1px solid rgba(255,255,255,0.05);
  background: rgba(255,255,255,0.015);
}

.hero-a__service {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.25);
}

.hero-a__service-icon {
  color: rgba(201,162,96,0.5);
  font-size: 9px;
}

.hero-a__service-dot {
  color: rgba(255,255,255,0.1);
  font-size: 20px;
}

@media (max-width: 1000px) {
  .hero-a__right { display: none; }
  .hero-a__left { max-width: 100%; padding: 0 32px 100px; }
}

@media (max-width: 600px) {
  .hero-a__services { padding: 16px 24px; flex-wrap: wrap; gap: 12px; }
  .hero-a__service-dot { display: none; }
}
</style>

<template>
  <div class="page-d">
    <DesignNav />

    <section class="hero-d">
      <!-- Animated grid background -->
      <div class="hero-d__grid" aria-hidden="true">
        <div v-for="i in 20" :key="i" class="hero-d__grid-line hero-d__grid-line--v"></div>
        <div v-for="i in 10" :key="'h'+i" class="hero-d__grid-line hero-d__grid-line--h"></div>
      </div>

      <!-- Scan line animation -->
      <div class="hero-d__scan" aria-hidden="true"></div>

      <!-- Image -->
      <div class="hero-d__img-panel">
        <img :src="heroImg" alt="" class="hero-d__img" />
        <div class="hero-d__img-overlay"></div>
        <!-- Corner brackets -->
        <div class="hero-d__bracket hero-d__bracket--tl"></div>
        <div class="hero-d__bracket hero-d__bracket--br"></div>
        <!-- Data overlays -->
        <div class="hero-d__tag hero-d__tag--1">
          <span class="hero-d__tag-dot"></span>
          Périmètre actif
        </div>
        <div class="hero-d__tag hero-d__tag--2">
          <span class="hero-d__tag-dot hero-d__tag-dot--warn"></span>
          Zone surveillée
        </div>
      </div>

      <!-- Content -->
      <div class="hero-d__content">
        <div class="hero-d__system-label">SYS // SIERRA-SEC v2.4</div>

        <div class="hero-d__badge-row">
          <span class="hero-d__badge">
            <span class="hero-d__badge-dot"></span>
            CNAPS CERTIFIÉ
          </span>
          <span class="hero-d__badge">ÎLE-DE-FRANCE</span>
        </div>

        <h1 class="hero-d__title">
          SÉCURITÉ<br />
          <span class="hero-d__title-accent">PRIVÉE</span><br />
          NOUVELLE<br />GÉNÉRATION
        </h1>

        <div class="hero-d__divider">
          <div class="hero-d__divider-line"></div>
          <div class="hero-d__divider-icon">◆</div>
          <div class="hero-d__divider-line"></div>
        </div>

        <p class="hero-d__desc">
          Agents CNAPS · Protection 24/7<br />
          Déploiement opérationnel sous 48h
        </p>

        <div class="hero-d__ctas">
          <a href="#" class="hero-d__btn hero-d__btn--primary">
            <span class="hero-d__btn-icon">›</span>
            Contacter Sierra
          </a>
          <a href="#" class="hero-d__btn hero-d__btn--ghost">Nos solutions</a>
        </div>

        <!-- Status bar -->
        <div class="hero-d__status">
          <div class="hero-d__status-item">
            <span class="hero-d__status-dot"></span>
            <span>Disponible 24/7</span>
          </div>
          <div class="hero-d__status-item">
            <span class="hero-d__status-dot"></span>
            <span>Déploiement 48h</span>
          </div>
          <div class="hero-d__status-item">
            <span class="hero-d__status-dot"></span>
            <span>Agents certifiés</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import DesignNav from '../../components/DesignNav.vue'
import heroImg from '../../assets/photos/hero.jpeg'
</script>

<style scoped>
* { box-sizing: border-box; margin: 0; padding: 0; }

.page-d {
  background: #040D1A;
  font-family: 'DM Sans', sans-serif;
}

.hero-d {
  position: relative;
  height: 100vh;
  min-height: 700px;
  overflow: hidden;
  padding-top: 52px;
  display: flex;
  align-items: center;
  gap: 0;
}

/* ── GRID BACKGROUND ── */
.hero-d__grid {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}
.hero-d__grid-line--v {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: rgba(79, 195, 247, 0.04);
}
.hero-d__grid-line--h {
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(79, 195, 247, 0.04);
}
/* Distribute grid lines using nth-child magic */
.hero-d__grid-line--v:nth-child(1) { left: 5%; }
.hero-d__grid-line--v:nth-child(2) { left: 10%; }
.hero-d__grid-line--v:nth-child(3) { left: 15%; }
.hero-d__grid-line--v:nth-child(4) { left: 20%; }
.hero-d__grid-line--v:nth-child(5) { left: 25%; }
.hero-d__grid-line--v:nth-child(6) { left: 30%; }
.hero-d__grid-line--v:nth-child(7) { left: 35%; }
.hero-d__grid-line--v:nth-child(8) { left: 40%; }
.hero-d__grid-line--v:nth-child(9) { left: 45%; }
.hero-d__grid-line--v:nth-child(10) { left: 50%; }
.hero-d__grid-line--v:nth-child(11) { left: 55%; }
.hero-d__grid-line--v:nth-child(12) { left: 60%; }
.hero-d__grid-line--v:nth-child(13) { left: 65%; }
.hero-d__grid-line--v:nth-child(14) { left: 70%; }
.hero-d__grid-line--v:nth-child(15) { left: 75%; }
.hero-d__grid-line--v:nth-child(16) { left: 80%; }
.hero-d__grid-line--v:nth-child(17) { left: 85%; }
.hero-d__grid-line--v:nth-child(18) { left: 90%; }
.hero-d__grid-line--v:nth-child(19) { left: 95%; }
.hero-d__grid-line--h:nth-child(21) { top: 10%; }
.hero-d__grid-line--h:nth-child(22) { top: 20%; }
.hero-d__grid-line--h:nth-child(23) { top: 30%; }
.hero-d__grid-line--h:nth-child(24) { top: 40%; }
.hero-d__grid-line--h:nth-child(25) { top: 50%; }
.hero-d__grid-line--h:nth-child(26) { top: 60%; }
.hero-d__grid-line--h:nth-child(27) { top: 70%; }
.hero-d__grid-line--h:nth-child(28) { top: 80%; }
.hero-d__grid-line--h:nth-child(29) { top: 90%; }

/* ── SCAN LINE ── */
.hero-d__scan {
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(79, 195, 247, 0.4), transparent);
  z-index: 1;
  animation: scanDown 4s linear infinite;
}
@keyframes scanDown {
  0% { top: 52px; opacity: 0; }
  5% { opacity: 1; }
  95% { opacity: 1; }
  100% { top: 100%; opacity: 0; }
}

/* ── IMAGE PANEL ── */
.hero-d__img-panel {
  position: relative;
  width: 48%;
  height: calc(100% - 80px);
  margin: 40px 0 40px 60px;
  flex-shrink: 0;
  overflow: hidden;
}

.hero-d__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
  display: block;
  filter: saturate(0.7) brightness(0.7);
}

.hero-d__img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(4, 13, 26, 0.3) 0%,
    rgba(4, 13, 26, 0.1) 100%
  );
  border: 1px solid rgba(79, 195, 247, 0.12);
}

/* Corner brackets */
.hero-d__bracket {
  position: absolute;
  width: 24px;
  height: 24px;
}
.hero-d__bracket--tl {
  top: 12px;
  left: 12px;
  border-top: 2px solid #4FC3F7;
  border-left: 2px solid #4FC3F7;
}
.hero-d__bracket--br {
  bottom: 12px;
  right: 12px;
  border-bottom: 2px solid #4FC3F7;
  border-right: 2px solid #4FC3F7;
}

/* Data tags on image */
.hero-d__tag {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(4, 13, 26, 0.85);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(79, 195, 247, 0.2);
  padding: 6px 12px;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.7);
}
.hero-d__tag--1 { top: 24px; right: 24px; }
.hero-d__tag--2 { bottom: 24px; left: 24px; }

.hero-d__tag-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #4FC3F7;
  flex-shrink: 0;
  animation: blink 1.5s ease-in-out infinite;
}
.hero-d__tag-dot--warn { background: #C9A260; }

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

/* ── CONTENT ── */
.hero-d__content {
  flex: 1;
  padding: 0 60px 0 60px;
  z-index: 2;
  position: relative;
}

.hero-d__system-label {
  font-size: 10px;
  letter-spacing: 0.2em;
  color: rgba(79, 195, 247, 0.4);
  margin-bottom: 24px;
  font-weight: 400;
}

.hero-d__badge-row {
  display: flex;
  gap: 10px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.hero-d__badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 1px solid rgba(79, 195, 247, 0.25);
  padding: 4px 10px;
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(79, 195, 247, 0.7);
  background: rgba(79, 195, 247, 0.05);
}

.hero-d__badge-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #4FC3F7;
  animation: blink 1.5s ease-in-out infinite;
}

.hero-d__title {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: clamp(52px, 5.5vw, 76px);
  font-weight: 800;
  text-transform: uppercase;
  color: #FFFFFF;
  line-height: 1.0;
  letter-spacing: -0.01em;
  margin-bottom: 28px;
}

.hero-d__title-accent {
  color: #4FC3F7;
  -webkit-text-stroke: 0;
}

.hero-d__divider {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}
.hero-d__divider-line {
  flex: 1;
  height: 1px;
  background: rgba(79, 195, 247, 0.15);
}
.hero-d__divider-icon {
  font-size: 8px;
  color: rgba(79, 195, 247, 0.4);
}

.hero-d__desc {
  font-size: 13px;
  color: rgba(255,255,255,0.4);
  line-height: 1.8;
  letter-spacing: 0.03em;
  margin-bottom: 36px;
}

.hero-d__ctas {
  display: flex;
  gap: 12px;
  margin-bottom: 40px;
}

.hero-d__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.25s;
  border-radius: 2px;
}

.hero-d__btn--primary {
  background: #4FC3F7;
  color: #040D1A;
  border: 1px solid #4FC3F7;
}
.hero-d__btn--primary:hover {
  background: transparent;
  color: #4FC3F7;
}

.hero-d__btn--ghost {
  background: transparent;
  color: rgba(255,255,255,0.5);
  border: 1px solid rgba(79, 195, 247, 0.2);
}
.hero-d__btn--ghost:hover {
  border-color: rgba(79, 195, 247, 0.5);
  color: #4FC3F7;
}

.hero-d__btn-icon {
  font-size: 18px;
  font-weight: 300;
  line-height: 1;
}

/* Status */
.hero-d__status {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-left: 1px solid rgba(79, 195, 247, 0.15);
  padding-left: 16px;
}
.hero-d__status-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 11px;
  color: rgba(255,255,255,0.3);
  letter-spacing: 0.05em;
}
.hero-d__status-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #4FC3F7;
  flex-shrink: 0;
}

@media (max-width: 900px) {
  .hero-d {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    padding-bottom: 60px;
  }
  .hero-d__img-panel {
    width: calc(100% - 48px);
    height: 40vh;
    margin: 24px 24px 0;
  }
  .hero-d__content {
    padding: 32px 24px;
  }
}
</style>

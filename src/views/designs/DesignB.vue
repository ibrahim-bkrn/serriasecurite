<template>
  <div class="page-b">
    <DesignNav />

    <section class="hero-b">
      <!-- Background image -->
      <div class="hero-b__bg">
        <img :src="heroImg" alt="" class="hero-b__img" />
      </div>

      <!-- Diagonal overlay -->
      <div class="hero-b__diagonal"></div>
      <div class="hero-b__overlay"></div>

      <!-- Content -->
      <div class="hero-b__content">
        <div class="hero-b__eyebrow">
          <div class="hero-b__eyebrow-line"></div>
          <span>Sécurité Privée — Île-de-France</span>
        </div>

        <h1 class="hero-b__title">
          <span class="hero-b__title-lg">Votre</span>
          <span class="hero-b__title-xl">Sécurité</span>
          <span class="hero-b__title-sub">Sans compromis.</span>
        </h1>

        <div class="hero-b__ctas">
          <a href="#" class="hero-b__btn">
            <span>Nous contacter</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 9h10M9 4l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        </div>
      </div>

      <!-- Bottom stats bar -->
      <div class="hero-b__statsbar">
        <div class="hero-b__statsbar-inner">
          <div class="hero-b__sstat">
            <span class="hero-b__sstat-n">24/7</span>
            <span class="hero-b__sstat-l">Protection continue</span>
          </div>
          <div class="hero-b__sborder"></div>
          <div class="hero-b__sstat">
            <span class="hero-b__sstat-n">48h</span>
            <span class="hero-b__sstat-l">Délai de déploiement</span>
          </div>
          <div class="hero-b__sborder"></div>
          <div class="hero-b__sstat">
            <span class="hero-b__sstat-n">+200</span>
            <span class="hero-b__sstat-l">Sites sécurisés</span>
          </div>
          <div class="hero-b__sborder"></div>
          <div class="hero-b__sstat">
            <span class="hero-b__sstat-n">100%</span>
            <span class="hero-b__sstat-l">Agents certifiés CNAPS</span>
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

.page-b {
  background: #080808;
  font-family: 'DM Sans', sans-serif;
}

.hero-b {
  position: relative;
  height: 100vh;
  min-height: 700px;
  overflow: hidden;
  padding-top: 52px;
  display: flex;
  align-items: flex-end;
}

/* Full background image */
.hero-b__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.hero-b__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 65% center;
}

/* Dark overlay */
.hero-b__overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    100deg,
    rgba(8, 8, 8, 0.97) 0%,
    rgba(8, 8, 8, 0.92) 38%,
    rgba(8, 8, 8, 0.55) 58%,
    rgba(8, 8, 8, 0.1) 100%
  );
}

/* Diagonal accent */
.hero-b__diagonal {
  position: absolute;
  inset: 0;
  z-index: 2;
  background: linear-gradient(
    105deg,
    rgba(201, 162, 96, 0.08) 0%,
    transparent 45%
  );
  pointer-events: none;
}

/* Content */
.hero-b__content {
  position: relative;
  z-index: 3;
  padding: 0 80px 180px;
  max-width: 720px;
}

.hero-b__eyebrow {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 40px;
}

.hero-b__eyebrow-line {
  width: 32px;
  height: 1px;
  background: #C9A260;
  flex-shrink: 0;
}

.hero-b__eyebrow span {
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #C9A260;
}

.hero-b__title {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: 56px;
}

.hero-b__title-lg {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: clamp(48px, 5vw, 72px);
  font-weight: 300;
  text-transform: uppercase;
  color: rgba(255,255,255,0.5);
  line-height: 1;
  letter-spacing: 0.05em;
}

.hero-b__title-xl {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: clamp(96px, 12vw, 160px);
  font-weight: 800;
  text-transform: uppercase;
  color: #FFFFFF;
  line-height: 0.9;
  letter-spacing: -0.02em;
}

.hero-b__title-sub {
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(18px, 2vw, 26px);
  font-weight: 300;
  font-style: italic;
  color: #C9A260;
  letter-spacing: 0.05em;
  margin-top: 8px;
}

.hero-b__btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: #C9A260;
  color: #080808;
  padding: 16px 32px;
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid #C9A260;
}
.hero-b__btn:hover {
  background: transparent;
  color: #C9A260;
}
.hero-b__btn svg {
  transition: transform 0.3s ease;
}
.hero-b__btn:hover svg {
  transform: translateX(4px);
}

/* Stats bar at bottom */
.hero-b__statsbar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 4;
  background: rgba(201, 162, 96, 0.08);
  backdrop-filter: blur(12px);
  border-top: 1px solid rgba(201, 162, 96, 0.2);
}

.hero-b__statsbar-inner {
  display: flex;
  align-items: center;
  padding: 0 80px;
  height: 100px;
  gap: 0;
}

.hero-b__sstat {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 0 40px;
  flex: 1;
}
.hero-b__sstat:first-child {
  padding-left: 0;
}

.hero-b__sstat-n {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 36px;
  font-weight: 700;
  color: #C9A260;
  line-height: 1;
}

.hero-b__sstat-l {
  font-size: 11px;
  color: rgba(255,255,255,0.5);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.hero-b__sborder {
  width: 1px;
  height: 48px;
  background: rgba(201,162,96,0.2);
  flex-shrink: 0;
}

@media (max-width: 900px) {
  .hero-b__content {
    padding: 0 32px 160px;
  }
  .hero-b__statsbar-inner {
    padding: 0 24px;
    gap: 0;
  }
  .hero-b__sstat {
    padding: 0 16px;
  }
  .hero-b__sstat-n {
    font-size: 24px;
  }
  .hero-b__sstat-l {
    font-size: 9px;
  }
}

@media (max-width: 600px) {
  .hero-b__statsbar-inner {
    flex-wrap: wrap;
    height: auto;
    padding: 16px;
  }
  .hero-b__sborder { display: none; }
  .hero-b__sstat {
    width: 50%;
    padding: 8px;
  }
}
</style>

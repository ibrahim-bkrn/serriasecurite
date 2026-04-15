<template>
  <div class="page-e">
    <DesignNav />

    <section class="hero-e">
      <!-- Left dark panel -->
      <div class="hero-e__left">
        <div class="hero-e__top-row">
          <div class="hero-e__logo-area">
            <div class="hero-e__logo-icon">◆</div>
            <div class="hero-e__logo-text">
              <span class="hero-e__logo-name">Sierra</span>
              <span class="hero-e__logo-sub">Sécurité</span>
            </div>
          </div>
          <div class="hero-e__year">EST. 2018</div>
        </div>

        <div class="hero-e__mid">
          <div class="hero-e__tag-vertical">
            <span>Île-de-France</span>
          </div>

          <div class="hero-e__headline-wrap">
            <span class="hero-e__kicker">Protection · Confiance · Excellence</span>
            <h1 class="hero-e__title">
              La<br />
              sécurité<br />
              <em>d'abord.</em>
            </h1>
          </div>
        </div>

        <div class="hero-e__bottom">
          <div class="hero-e__quote">
            "Des agents certifiés CNAPS,<br />
            disponibles 24/7, déployés en 48h."
          </div>
          <div class="hero-e__ctas">
            <a href="#" class="hero-e__btn">Prendre contact</a>
          </div>
        </div>
      </div>

      <!-- Right image panel -->
      <div class="hero-e__right">
        <div class="hero-e__img-wrap">
          <img :src="heroImg" alt="Sierra Sécurité" class="hero-e__img" />
          <div class="hero-e__img-tint"></div>
        </div>

        <!-- Floating stats card -->
        <div class="hero-e__card">
          <div class="hero-e__card-top">
            <span class="hero-e__card-label">Performance</span>
          </div>
          <div class="hero-e__card-stats">
            <div class="hero-e__cs">
              <div class="hero-e__cs-n">24/7</div>
              <div class="hero-e__cs-l">Surveillance</div>
              <div class="hero-e__cs-bar">
                <div class="hero-e__cs-fill" style="width: 100%"></div>
              </div>
            </div>
            <div class="hero-e__cs">
              <div class="hero-e__cs-n">48h</div>
              <div class="hero-e__cs-l">Déploiement</div>
              <div class="hero-e__cs-bar">
                <div class="hero-e__cs-fill" style="width: 85%"></div>
              </div>
            </div>
            <div class="hero-e__cs">
              <div class="hero-e__cs-n">100%</div>
              <div class="hero-e__cs-l">Certifiés CNAPS</div>
              <div class="hero-e__cs-bar">
                <div class="hero-e__cs-fill" style="width: 100%"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Scroll hint -->
        <div class="hero-e__scroll">
          <span class="hero-e__scroll-text">Défiler</span>
          <div class="hero-e__scroll-line"></div>
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

.page-e {
  background: #0C0C0C;
  font-family: 'DM Sans', sans-serif;
}

.hero-e {
  display: flex;
  height: 100vh;
  min-height: 700px;
  padding-top: 52px;
  overflow: hidden;
}

/* ── LEFT PANEL ── */
.hero-e__left {
  width: 38%;
  background: #0C0C0C;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 48px 48px 48px 64px;
  border-right: 1px solid rgba(201, 162, 96, 0.12);
  position: relative;
  flex-shrink: 0;
}

.hero-e__top-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.hero-e__logo-area {
  display: flex;
  align-items: center;
  gap: 12px;
}

.hero-e__logo-icon {
  font-size: 18px;
  color: #C9A260;
}

.hero-e__logo-text {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.hero-e__logo-name {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  color: #FFFFFF;
  letter-spacing: 0.05em;
  line-height: 1;
}

.hero-e__logo-sub {
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #C9A260;
  line-height: 1;
}

.hero-e__year {
  font-size: 10px;
  letter-spacing: 0.15em;
  color: rgba(255,255,255,0.2);
  text-transform: uppercase;
}

/* Mid */
.hero-e__mid {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.hero-e__tag-vertical {
  padding-top: 8px;
}
.hero-e__tag-vertical span {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 9px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(201, 162, 96, 0.5);
}

.hero-e__kicker {
  display: block;
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.25);
  margin-bottom: 20px;
}

.hero-e__title {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: clamp(64px, 5.5vw, 84px);
  font-weight: 700;
  text-transform: uppercase;
  color: #FFFFFF;
  line-height: 0.9;
  letter-spacing: -0.01em;
}

.hero-e__title em {
  font-style: normal;
  color: #C9A260;
  display: block;
}

/* Bottom */
.hero-e__quote {
  font-size: 13px;
  color: rgba(255,255,255,0.3);
  line-height: 1.7;
  font-style: italic;
  border-left: 2px solid rgba(201, 162, 96, 0.3);
  padding-left: 16px;
  margin-bottom: 32px;
}

.hero-e__btn {
  display: inline-block;
  background: transparent;
  color: #C9A260;
  border: 1px solid rgba(201, 162, 96, 0.4);
  padding: 14px 32px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.3s;
}
.hero-e__btn:hover {
  background: #C9A260;
  color: #0C0C0C;
  border-color: #C9A260;
}

/* ── RIGHT PANEL ── */
.hero-e__right {
  flex: 1;
  position: relative;
  overflow: hidden;
}

.hero-e__img-wrap {
  position: absolute;
  inset: 0;
}

.hero-e__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 25%;
  display: block;
}

.hero-e__img-tint {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(12, 12, 12, 0.35) 0%,
    rgba(12, 12, 12, 0.05) 60%,
    rgba(12, 12, 12, 0.4) 100%
  );
}

/* Stats card */
.hero-e__card {
  position: absolute;
  bottom: 48px;
  right: 48px;
  background: rgba(12, 12, 12, 0.88);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(201, 162, 96, 0.2);
  padding: 24px;
  width: 220px;
}

.hero-e__card-top {
  margin-bottom: 20px;
}

.hero-e__card-label {
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(201, 162, 96, 0.7);
}

.hero-e__card-stats {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.hero-e__cs {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.hero-e__cs-n {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: #FFFFFF;
  line-height: 1;
}

.hero-e__cs-l {
  font-size: 10px;
  color: rgba(255,255,255,0.35);
  letter-spacing: 0.08em;
}

.hero-e__cs-bar {
  height: 2px;
  background: rgba(255,255,255,0.08);
  border-radius: 1px;
  overflow: hidden;
}

.hero-e__cs-fill {
  height: 100%;
  background: linear-gradient(90deg, #C9A260, #E8C88A);
  border-radius: 1px;
}

/* Scroll hint */
.hero-e__scroll {
  position: absolute;
  bottom: 48px;
  left: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.hero-e__scroll-text {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 9px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.3);
}

.hero-e__scroll-line {
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, rgba(201,162,96,0.5), transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}

@media (max-width: 900px) {
  .hero-e {
    flex-direction: column;
    height: auto;
  }
  .hero-e__left {
    width: 100%;
    min-height: 60vh;
    border-right: none;
    border-bottom: 1px solid rgba(201, 162, 96, 0.12);
    padding: 40px 24px;
  }
  .hero-e__right {
    height: 40vh;
  }
  .hero-e__card { display: none; }
  .hero-e__scroll { display: none; }
}
</style>

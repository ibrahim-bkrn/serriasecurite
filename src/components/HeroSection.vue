<template>
  <section class="hero">
    <img :src="heroBg" alt="" class="hero__bg" />
    <div class="hero__overlay"></div>

    <div class="hero__content">
      <h1 class="hero__title">
        Protégez vos biens.<br />
        <span class="hero__title-gold">Sécurisez vos espaces.</span>
      </h1>

      <p class="hero__intro">
        Sierra Sécurité accompagne particuliers et professionnels dans la mise en place
        de solutions de sécurité durables, adaptées à chaque environnement.
      </p>

      <div class="hero__actions">
        <router-link to="/contact" class="hero__cta-primary">
          <span>Je sécurise mon bien</span>
          <div class="hero__cta-arrow">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </router-link>
        <a href="tel:0180894979" class="hero__cta-secondary">Être rappelé</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import heroBg from '../assets/photos/hero1.png'
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  min-height: 680px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
}

.hero__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.hero__overlay {
  position: absolute;
  inset: 0;
}

.hero__content {
  position: relative;
  z-index: 2;
  padding: 0 80px 96px;
  /* max-width: 1000px; */
}

.hero__title {
  font-family: var(--font-display);
  font-size: clamp(48px, 5.5vw, 80px);
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-white);
  line-height: 1.05;
  letter-spacing: 0.01em;
  margin-bottom: 28px;
  animation: fadeUp 0.7s 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.hero__title-gold {
  color: var(--color-gold);
}

.hero__intro {
  font-family: var(--font-body);
  font-size: 19px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 40px;
  max-width: 700px;
  animation: fadeUp 0.7s 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.hero__actions {
  display: flex;
  align-items: center;
  gap: 32px;
  animation: fadeUp 0.7s 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.hero__cta-primary {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  background: var(--color-gold);
  padding: 14px 28px;
  border-radius: 4px;
  transition: opacity 0.2s;
}

.hero__cta-primary span {
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #0F0F0F;
}

.hero__cta-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0F0F0F;
  flex-shrink: 0;
}

.hero__cta-primary:hover {
  opacity: 0.88;
}

.hero__cta-secondary {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  /*background: rgba(255, 255, 255, 0.1);*/
  padding: 14px 28px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: background 0.2s;
}

.hero__cta-secondary:hover {
  background: rgba(255, 255, 255, 0.18);
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

@media (max-width: 900px) {
  .hero {
    align-items: flex-end;
    max-height: 680px;
  }

  .hero__content {
    padding: 0 24px 72px;
  }
  .hero__title {
    font-size: clamp(20px, 9vw, 56px);
    margin-bottom: 18px;
  }
  .hero__intro{
    font-size: 16px;
  }
  .hero__actions {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
}
</style>

<template>
  <div class="soon-page">
    <NavBar />
    <section class="soon">
      <p class="soon__label">Bientôt disponible</p>
      <h1 class="soon__title">Surveillance<br /><span class="soon__stroke">Matérielle</span></h1>
      <p class="soon__sub">Cette page est en cours de préparation. Contactez-nous directement.</p>
      <router-link to="/contact" class="soon__cta">Demander un devis</router-link>
    </section>
    <FooterSection />
  </div>
</template>

<script setup>
import NavBar        from '../../components/NavBar.vue'
import FooterSection from '../../components/FooterSection.vue'
</script>

<style scoped>
.soon-page { background: var(--color-bg); }
.soon {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 120px 24px 80px;
  border-bottom: 1px solid var(--color-border);
}
.soon__label {
  font-family: var(--font-body);
  font-size: 11px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 24px;
}
.soon__title {
  font-family: var(--font-display);
  font-size: clamp(48px, 8vw, 96px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  line-height: 0.95;
  letter-spacing: 0.01em;
  margin-bottom: 32px;
}
.soon__stroke {
  -webkit-text-stroke: 2px rgba(201,162,96,0.5);
  color: transparent;
}
.soon__sub {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 300;
  color: var(--color-muted);
  max-width: 480px;
  line-height: 1.7;
  margin-bottom: 40px;
}
.soon__cta {
  display: inline-flex;
  align-items: center;
  padding: 14px 32px;
  background: var(--color-gold);
  color: var(--color-bg);
  text-decoration: none;
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: background 0.2s;
}
.soon__cta:hover { background: var(--color-gold-light); }
</style>

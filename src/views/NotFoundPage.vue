<template>
  <div class="nf">
    <NavBar />
    <section class="nf__body">
      <p class="nf__code">404</p>
      <h1 class="nf__title">Page introuvable</h1>
      <p class="nf__sub">Cette page n'existe pas ou a été déplacée.</p>
      <RouterLink to="/" class="nf__cta">
        <span>Retour à l'accueil</span>
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
          <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </RouterLink>
    </section>
    <FooterSection />
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import FooterSection from '../components/FooterSection.vue'
</script>

<style scoped>
.nf__body {
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  text-align: center;
  padding: 80px 24px;
  background: var(--color-bg);
}

.nf__code {
  font-family: var(--font-display);
  font-size: clamp(80px, 14vw, 160px);
  font-weight: 800;
  color: transparent;
  -webkit-text-stroke: 2px rgba(201, 162, 96, 0.3);
  line-height: 1;
  letter-spacing: 0.04em;
}

.nf__title {
  font-family: var(--font-display);
  font-size: clamp(24px, 3vw, 36px);
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-white);
  letter-spacing: 0.04em;
}

.nf__sub {
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 300;
  color: var(--color-muted);
}

.nf__cta {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-top: 16px;
  padding: 14px 28px;
  background: var(--color-gold);
  color: var(--color-bg);
  text-decoration: none;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: background 0.2s;
}

.nf__cta:hover {
  background: var(--color-gold-light);
}
</style>

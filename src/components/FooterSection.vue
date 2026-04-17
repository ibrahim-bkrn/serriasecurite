<template>
  <div>
    <!-- Footer -->
    <footer class="footer">
      <div class="footer__top-line"></div>
      <div class="footer__container">
        <div class="footer__col footer__col--brand">
          <img :src="logo" alt="Sierra Sécurité" class="footer__logo" />
          <p class="footer__brand-text">
            Des solutions sur mesure, déployées en 48h, pour protéger vos actifs stratégiques en Île-de-France.
          </p>
        </div>

        <div class="footer__col">
          <h4 class="footer__col-title">Navigation</h4>
          <ul class="footer__nav">
            <li><router-link to="/">Accueil</router-link></li>
            <li><router-link to="/solutions/surveillance-humaine">Surveillance humaine</router-link></li>
            <li><router-link to="/solutions/surveillance-materielle">Surveillance matérielle</router-link></li>
            <li><router-link to="/secteurs/chantiers">Chantiers BTP</router-link></li>
            <li><router-link to="/secteurs/biens-vacants">Biens vacants</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>

        <div class="footer__col">
          <h4 class="footer__col-title">Contact</h4>
          <div class="footer__contact">
            <p>Île-de-France</p>
            <a href="tel:0782564979" class="footer__contact-phone">07 82 56 49 79</a>
            <p class="footer__contact-highlight">Devis gratuit · Réponse rapide</p>
            <router-link to="/contact" class="footer__contact-cta">Nous contacter →</router-link>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <span>© 2026 Sierra Sécurité — Tous droits réservés &nbsp;·&nbsp; Site réalisé par <a href="https://ib-studio.fr" target="_blank" rel="noopener" class="footer__credit">IB Studio</a></span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import logo from '../assets/logo/logo-horizontal.png'
</script>

<style scoped>
/* FOOTER */
.footer {
  background: var(--color-bg-2);
  position: relative;
}

.footer__top-line {
  height: 1px;
  background: var(--color-border);
}

.footer__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 72px 80px 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 60px;
}

.footer__logo {
  height: 60px;
  display: block;
  margin-bottom: 20px;
}

.footer__brand-text {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.7;
  max-width: 300px;
}

.footer__col-title {
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-gold);
  margin-bottom: 24px;
}

.footer__nav {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer__nav a,
.footer__nav :deep(a) {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 300;
  color: var(--color-muted);
  text-decoration: none;
  transition: color var(--transition);
}

.footer__nav a:hover,
.footer__nav :deep(a):hover {
  color: var(--color-gold);
}

.footer__contact {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer__contact p {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 300;
  color: var(--color-muted);
}

.footer__contact-phone {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 700;
  color: var(--color-white);
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: color 0.2s;
}

.footer__contact-phone:hover { color: var(--color-gold); }

.footer__contact-highlight {
  color: var(--color-text) !important;
  font-weight: 500 !important;
}

.footer__contact-cta {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-gold);
  text-decoration: none;
  transition: opacity 0.2s;
}

.footer__contact-cta:hover { opacity: 0.75; }

.footer__bottom {
  border-top: 1px solid var(--color-border);
  padding: 24px 80px;
  text-align: center;
}

.footer__bottom > span {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 300;
  color: var(--color-muted);
  letter-spacing: 0.04em;
}

.footer__credit {
  color: rgba(201, 162, 96, 0.5);
  font-weight: 500;
  text-decoration: none;
  transition: color 0.25s;
}

.footer__credit:hover {
  color: var(--color-gold);
}

@media (max-width: 1200px) {
  .partenaires__container,
  .footer__container {
    padding-left: 40px;
    padding-right: 40px;
  }

  .footer__bottom {
    padding-left: 40px;
    padding-right: 40px;
  }
}

@media (max-width: 768px) {
  .footer__container {
    padding: 48px 24px 40px;
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .footer__bottom {
    padding: 20px 24px;
  }
}
</style>

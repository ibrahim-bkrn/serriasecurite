<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
    <div class="navbar__inner">
      <a href="#" class="navbar__logo">
        <img :src="logo" alt="Sierra Sécurité" />
      </a>

      <ul class="navbar__links" :class="{ 'navbar__links--open': menuOpen }">
        <li><a href="#" @click="menuOpen = false">Accueil</a></li>
        <li><a href="#" @click="menuOpen = false">Nos services</a></li>
        <li><a href="#" @click="menuOpen = false">Secteurs d'intervention</a></li>
        <li><a href="#" @click="menuOpen = false">Contact</a></li>
        <li class="navbar__cta-mobile">
          <a href="#" class="btn-gold" @click="menuOpen = false">
            <span class="btn-gold__text">Nous contacter</span>
            <div class="btn-gold__icon">
              <svg height="18" width="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"/>
              </svg>
            </div>
          </a>
        </li>
      </ul>

      <div class="navbar__right">
        <a href="#" class="btn-gold navbar__cta-desktop">
          <span class="btn-gold__text">Nous contacter</span>
          <div class="btn-gold__icon">
            <svg height="18" width="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"/>
            </svg>
          </div>
        </a>
        <button
          class="navbar__burger"
          :class="{ 'navbar__burger--open': menuOpen }"
          @click="menuOpen = !menuOpen"
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import logo from '../assets/logo/logo-horizontal.png'

const isScrolled = ref(false)
const menuOpen = ref(false)

function onScroll() {
  isScrolled.value = window.scrollY > 80
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: transparent;
  border-bottom: 1px solid transparent;
  transition: background var(--transition), border-color var(--transition);
}

.navbar--scrolled {
  background: var(--color-bg);
  border-bottom-color: var(--color-border);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  height: 72px;
}

.navbar__logo img {
  height: 70px;
  display: block;
}

.navbar__links {
  display: flex;
  align-items: center;
  gap: 40px;
  list-style: none;
}

.navbar__links a {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.05em;
  color: var(--color-text);
  text-decoration: none;
  transition: color var(--transition);
}

.navbar__links a:hover {
  color: var(--color-gold);
}

.navbar__right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.btn-gold {
  background: rgba(8, 8, 8, 0.92);
  color: var(--color-gold);
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  border: none;
  display: inline-flex;
  align-items: center;
  height: 2.8em;
  padding: 0.35em 0.35em 0.35em 1.2em;
  padding-right: 3.3em;
  position: relative;
  overflow: hidden;
  border-radius: 0.9em;
  box-shadow: inset 0 0 1.6em -0.6em rgba(201, 162, 96, 0.25);
}

.btn-gold__text {
  position: relative;
  z-index: 1;
  transition: opacity 0.2s, transform 0.3s;
  white-space: nowrap;
}

.btn-gold:hover .btn-gold__text {
  opacity: 0;
  transform: translateX(-8px);
}

.btn-gold__icon {
  background: var(--color-gold);
  color: #080808;
  position: absolute;
  right: 0.3em;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2em;
  width: 2.2em;
  border-radius: 0.7em;
  box-shadow: 0.1em 0.1em 0.6em 0.2em rgba(201, 162, 96, 0.2);
  transition: width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: 2;
}

.btn-gold:hover .btn-gold__icon {
  width: calc(100% - 0.6em);
}

.btn-gold__icon svg {
  width: 1em;
  flex-shrink: 0;
  transition: transform 0.3s;
}

.btn-gold:hover .btn-gold__icon svg {
  transform: translateX(0.1em);
}

.btn-gold:active .btn-gold__icon {
  transform: scale(0.97);
}

.navbar__cta-mobile {
  display: none;
}

.navbar__burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.navbar__burger span {
  display: block;
  width: 24px;
  height: 1.5px;
  background: var(--color-text);
  transition: transform var(--transition), opacity var(--transition);
  transform-origin: center;
}

.navbar__burger--open span:nth-child(1) {
  transform: translateY(6.5px) rotate(45deg);
}
.navbar__burger--open span:nth-child(2) {
  opacity: 0;
}
.navbar__burger--open span:nth-child(3) {
  transform: translateY(-6.5px) rotate(-45deg);
}

@media (max-width: 768px) {
  .navbar__inner {
    padding: 0 24px;
  }

  .navbar__links {
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--color-bg);
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 40px 24px;
    gap: 32px;
    transform: translateX(-100%);
    transition: transform var(--transition);
    border-top: 1px solid var(--color-border);
  }

  .navbar__links--open {
    transform: translateX(0);
  }

  .navbar__links a {
    font-size: 18px;
  }

  .navbar__cta-desktop {
    display: none;
  }

  .navbar__cta-mobile {
    display: block;
    margin-top: 8px;
  }

  .navbar__burger {
    display: flex;
  }
}
</style>

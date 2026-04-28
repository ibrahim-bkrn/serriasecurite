<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
    <div class="navbar__inner">
      <router-link to="/" class="navbar__logo">
        <img :src="logo" alt="Sierra Sécurité" />
      </router-link>

      <ul class="navbar__links">
        <li><router-link to="/">Accueil</router-link></li>

        <!-- Dropdown Solutions -->
        <li
          class="navbar__item--dropdown"
          :class="{ 'navbar__item--open': solutionsOpen }"
          @mouseenter="solutionsOpen = true"
          @mouseleave="solutionsOpen = false"
        >
          <button class="navbar__dropdown-trigger" @click="toggleSolutions">
            Solutions
            <svg class="navbar__chevron" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <Transition name="nav-dropdown">
            <div v-show="solutionsOpen" class="navbar__dropdown">
              <div class="navbar__dropdown-group">
                <router-link to="/solutions/surveillance-humaine" class="navbar__dropdown-main" @click="closeAll">Surveillance humaine</router-link>
              </div>

              <div class="navbar__dropdown-group">
                <router-link to="/solutions/surveillance-materielle" class="navbar__dropdown-main" @click="closeAll">Surveillance matérielle</router-link>
                <router-link to="/solutions/videosurveillance" class="navbar__dropdown-sub" @click="closeAll">Vidéosurveillance</router-link>
                <router-link to="/solutions/alarme-anti-intrusion" class="navbar__dropdown-sub" @click="closeAll">Alarme anti-intrusion</router-link>
                <router-link to="/solutions/alarme-sites-inocupes" class="navbar__dropdown-sub" @click="closeAll">Alarme sites inoccupés</router-link>
              </div>

              <div class="navbar__dropdown-group">
                <router-link to="/solutions/protection-physique" class="navbar__dropdown-main" @click="closeAll">Protection physique</router-link>
              </div>
            </div>
          </Transition>
        </li>

        <li><router-link to="/secteurs">Secteurs</router-link></li>

        <li><router-link to="/contact">Contact</router-link></li>
      </ul>

      <div class="navbar__right">
        <router-link to="/contact" class="btn-gold navbar__cta-desktop">
          <span class="btn-gold__text">Contactez-nous</span>
          <div class="btn-gold__icon">
            <svg height="18" width="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"/>
            </svg>
          </div>
        </router-link>
        <button
          class="navbar__burger"
          :class="{ 'navbar__burger--open': menuOpen }"
          @click="toggleMenu"
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </nav>

  <!-- ── MOBILE FULLSCREEN OVERLAY ── -->
  <Transition name="mobile-overlay">
    <div v-if="menuOpen" class="mobile-overlay">

      <nav class="mobile-overlay__nav">
        <div class="mobile-overlay__item" style="--delay: 0.05s">
          <router-link to="/" class="mobile-overlay__link" @click="closeAll">
            Accueil
          </router-link>
        </div>

        <!-- Solutions accordéon -->
        <div class="mobile-overlay__item" style="--delay: 0.1s">
          <button
            class="mobile-overlay__link mobile-overlay__trigger"
            :class="{ 'mobile-overlay__trigger--open': solutionsOpen }"
            @click="toggleSolutions"
          >
            Solutions
            <svg class="mobile-overlay__chevron" width="14" height="14" viewBox="0 0 12 12" fill="none">
              <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="mobile-overlay__sub" :class="{ 'mobile-overlay__sub--open': solutionsOpen }">
            <router-link to="/solutions/surveillance-humaine" class="mobile-overlay__sub-link" @click="closeAll">Surveillance humaine</router-link>
            <router-link to="/solutions/surveillance-materielle" class="mobile-overlay__sub-link" @click="closeAll">Surveillance matérielle</router-link>
            <router-link to="/solutions/alarme-anti-intrusion" class="mobile-overlay__sub-link mobile-overlay__sub-link--child" @click="closeAll">↳ Alarme anti-intrusion</router-link>
            <router-link to="/solutions/videosurveillance" class="mobile-overlay__sub-link mobile-overlay__sub-link--child" @click="closeAll">↳ Vidéosurveillance</router-link>
            <router-link to="/solutions/alarme-sites-inocupes" class="mobile-overlay__sub-link mobile-overlay__sub-link--child" @click="closeAll">↳ Sites inoccupés</router-link>
            <router-link to="/solutions/protection-physique" class="mobile-overlay__sub-link" @click="closeAll">Protection physique</router-link>
          </div>
        </div>

        <div class="mobile-overlay__item" style="--delay: 0.15s">
          <router-link to="/secteurs" class="mobile-overlay__link" @click="closeAll">
            Secteurs
          </router-link>
        </div>

        <div class="mobile-overlay__item" style="--delay: 0.2s">
          <router-link to="/contact" class="mobile-overlay__link" @click="closeAll">
            Contact
          </router-link>
        </div>
      </nav>

      <div class="mobile-overlay__footer" style="--delay: 0.28s">
        <router-link to="/contact" class="mobile-overlay__cta" @click="closeAll">
          Demander un devis
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </router-link>
        <a href="tel:0782564979" class="mobile-overlay__phone" @click="closeAll">
          07 82 56 49 79
        </a>
      </div>

    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import logo from '../assets/logo/logo-horizontal.png'

const isScrolled    = ref(false)
const menuOpen      = ref(false)
const solutionsOpen = ref(false)

let savedScroll = 0

function lockScroll() {
  savedScroll = window.scrollY
  document.body.style.position = 'fixed'
  document.body.style.top      = `-${savedScroll}px`
  document.body.style.width    = '100%'
}

function unlockScroll(restorePosition = true) {
  document.body.style.position = ''
  document.body.style.top      = ''
  document.body.style.width    = ''
  window.scrollTo(0, restorePosition ? savedScroll : 0)
}

function onScroll() {
  isScrolled.value = window.scrollY > 80
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
  solutionsOpen.value = false
  if (menuOpen.value) lockScroll()
  else unlockScroll(true)
}

function toggleSolutions() {
  solutionsOpen.value = !solutionsOpen.value
}

function closeAll() {
  menuOpen.value      = false
  solutionsOpen.value = false
  unlockScroll(false)
}

function onClickOutside(e) {
  if (menuOpen.value) return
  if (!e.target.closest('.navbar__item--dropdown')) {
    solutionsOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('click', onClickOutside)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('click', onClickOutside)
  unlockScroll(false)
})
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
  padding-bottom: 5px;
}

.navbar::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0.5px;
  background: #70707077;
  opacity: 0.45;
}

.navbar--scrolled {
  background: rgba(8, 8, 8, 0.97);
  border-bottom-color: var(--color-border);
  backdrop-filter: blur(12px);
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
  gap: 36px;
  list-style: none;
}

.navbar__links > li > a,
.navbar__links > li > .router-link-active {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.05em;
  color: var(--color-text);
  text-decoration: none;
  transition: color var(--transition);
}

.navbar__links > li > a:hover,
.router-link-active {
  color: var(--color-gold) !important;
}

/* ── DROPDOWN TRIGGER ── */
.navbar__dropdown-trigger {
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.05em;
  color: var(--color-text);
  padding: 0;
  transition: color var(--transition);
}

.navbar__dropdown-trigger:hover {
  color: var(--color-gold);
}

.navbar__chevron {
  color: var(--color-muted);
  transition: transform 0.2s, color 0.2s;
}

.navbar__item--open .navbar__chevron {
  transform: rotate(180deg);
  color: var(--color-gold);
}

.navbar__item--open .navbar__dropdown-trigger {
  color: var(--color-gold);
}

/* ── DROPDOWN ── */
.navbar__item--dropdown {
  position: relative;
}

.navbar__dropdown {
  position: absolute;
  top: calc(100% + 12px);
  left: 25%;
  transform: translateX(-25%);
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  padding: 28px 32px;
  min-width: 380px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

/* ── Vue Transition: nav-dropdown ── */
.nav-dropdown-enter-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.nav-dropdown-leave-active {
  transition: opacity 0.12s ease, transform 0.12s ease;
}
.nav-dropdown-enter-from,
.nav-dropdown-leave-to {
  opacity: 0;
  transform: translateX(-25%) translateY(-4px);
}
.nav-dropdown-enter-to,
.nav-dropdown-leave-from {
  opacity: 1;
  transform: translateX(-25%) translateY(0);
}

.navbar__dropdown-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.navbar__dropdown-cat {
  font-family: var(--font-body);
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.25);
  margin: 0;
}

.navbar__dropdown-main {
  font-family: var(--font-body);
  font-size: 17px;
  font-weight: 400;
  color: var(--color-white);
  text-decoration: none;
  transition: color 0.15s;
  display: block;
}

.navbar__dropdown-main:hover {
  color: var(--color-gold);
}

.navbar__dropdown-sub {
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.45);
  text-decoration: none;
  transition: color 0.15s;
  display: block;
  padding-left: 12px;
}

.navbar__dropdown-sub:hover {
  color: var(--color-white);
}

/* ── CTA BUTTON ── */
.navbar__right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.btn-gold {
  background: var(--color-gold);
  color: #080808;
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.05em;
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
  border-radius: 4px;
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

/* ── BURGER ── */
.navbar__burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  z-index: 1001;
}

.navbar__burger span {
  display: block;
  width: 24px;
  height: 1.5px;
  background: var(--color-text);
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform-origin: center;
}

.navbar__burger--open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.navbar__burger--open span:nth-child(2) { opacity: 0; }
.navbar__burger--open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

/* ── MOBILE FULLSCREEN OVERLAY ── */
.mobile-overlay {
  position: fixed;
  inset: 0;
  background: #080808;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 96px 40px 48px;
  overflow-y: auto;
}

.mobile-overlay__nav {
  display: flex;
  flex-direction: column;
  gap: 0;
  flex: 1;
  justify-content: center;
}

.mobile-overlay__item {
  border-bottom: 1px solid rgba(201, 162, 96, 0.1);
  opacity: 0;
  transform: translateY(20px);
  animation: overlay-item-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) var(--delay, 0s) both;
}

.mobile-overlay__item:first-child {
  border-top: 1px solid rgba(201, 162, 96, 0.1);
}

@keyframes overlay-item-in {
  to { opacity: 1; transform: translateY(0); }
}

.mobile-overlay__link {
  display: block;
  font-family: var(--font-display);
  font-size: clamp(28px, 8vw, 48px);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: var(--color-white);
  text-decoration: none;
  padding: 20px 0;
  transition: color 0.2s;
}

.mobile-overlay__link:hover { color: var(--color-gold); }

.router-link-active.mobile-overlay__link { color: var(--color-gold); }

.mobile-overlay__trigger {
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.mobile-overlay__chevron {
  color: rgba(201, 162, 96, 0.5);
  transition: transform 0.3s, color 0.3s;
  flex-shrink: 0;
}

.mobile-overlay__trigger--open .mobile-overlay__chevron {
  transform: rotate(180deg);
  color: var(--color-gold);
}

.mobile-overlay__trigger--open {
  color: var(--color-gold);
}

/* Accordéon sous-liens */
.mobile-overlay__sub {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease;
}

.mobile-overlay__sub--open {
  max-height: 400px;
}

.mobile-overlay__sub-link--child {
  padding-left: 20px;
  font-size: 12px;
  opacity: 0.65;
}

.mobile-overlay__sub-link {
  display: block;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted);
  text-decoration: none;
  padding: 0px 0 10px 10px;
  margin-bottom: 6px;
  transition: color 0.2s, border-color 0.2s;
}

.mobile-overlay__sub-link:last-child { margin-bottom: 16px; }

.mobile-overlay__sub-link:hover {
  color: var(--color-gold);
  border-left-color: var(--color-gold);
}

.mobile-overlay__sub-link--soon {
  opacity: 0.4;
  cursor: default;
  pointer-events: none;
  display: flex;
  align-items: center;
  gap: 10px;
}

.mobile-overlay__soon-badge {
  font-size: 8px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-gold);
  border: 1px solid rgba(201, 162, 96, 0.4);
  padding: 1px 6px;
}

/* Footer CTA */
.mobile-overlay__footer {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 40px;
  opacity: 0;
  animation: overlay-item-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) var(--delay, 0s) both;
}

.mobile-overlay__cta {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 24px;
  background: var(--color-gold);
  color: var(--color-bg);
  text-decoration: none;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  align-self: flex-start;
  transition: background 0.2s;
}

.mobile-overlay__cta:hover { background: var(--color-gold-light); }

.mobile-overlay__phone {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 700;
  color: rgba(201, 162, 96, 0.6);
  text-decoration: none;
  letter-spacing: 0.04em;
  transition: color 0.2s;
}

.mobile-overlay__phone:hover { color: var(--color-gold); }

/* ── TRANSITIONS VUE ── */
.mobile-overlay-enter-active,
.mobile-overlay-leave-active {
  transition: opacity 0.35s ease;
}
.mobile-overlay-enter-from,
.mobile-overlay-leave-to {
  opacity: 0;
}

/* ── RESPONSIVE ── */
@media (max-width: 1024px) {
  .navbar__inner { padding: 0 40px; }
}

@media (max-width: 768px) {
  .navbar__inner { padding: 0 24px; }
  .navbar__links { display: none; }
  .navbar__cta-desktop { display: none; }
  .navbar__burger { display: flex; }
}
</style>

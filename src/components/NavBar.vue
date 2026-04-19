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
              <div class="navbar__dropdown-inner">
                <router-link to="/solutions/surveillance-humaine" class="navbar__dropdown-item" @click="closeAll">
                  <div class="navbar__dropdown-item-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div>
                    <span class="navbar__dropdown-item-title">Surveillance humaine</span>
                    <span class="navbar__dropdown-item-sub">Agents CNAPS · Gardiennage · Rondes</span>
                  </div>
                </router-link>
                <router-link to="/solutions/surveillance-materielle" class="navbar__dropdown-item" @click="closeAll">
                  <div class="navbar__dropdown-item-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div>
                    <span class="navbar__dropdown-item-title">Surveillance matérielle</span>
                    <span class="navbar__dropdown-item-sub">Alarme AJAX · Vidéosurveillance · Anti-squat</span>
                  </div>
                </router-link>
              </div>
            </div>
          </Transition>
        </li>

        <li><router-link to="/secteurs">Secteurs</router-link></li>

        <li><router-link to="/contact">Contact</router-link></li>
      </ul>

      <div class="navbar__right">
        <router-link to="/contact" class="btn-gold navbar__cta-desktop">
          <span class="btn-gold__text">Demander un audit</span>
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
            <router-link to="/solutions/surveillance-humaine" class="mobile-overlay__sub-link" @click="closeAll">
              Surveillance humaine
            </router-link>
            <router-link to="/solutions/surveillance-materielle" class="mobile-overlay__sub-link" @click="closeAll">
              Surveillance matérielle
            </router-link>
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
const secteursOpen  = ref(false)

function onScroll() {
  isScrolled.value = window.scrollY > 80
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
  solutionsOpen.value = false
  secteursOpen.value  = false
  document.body.style.overflow = menuOpen.value ? 'hidden' : ''
}

function toggleSolutions() {
  solutionsOpen.value = !solutionsOpen.value
  secteursOpen.value  = false
}


function closeAll() {
  menuOpen.value      = false
  solutionsOpen.value = false
  secteursOpen.value  = false
  document.body.style.overflow = ''
}

function onClickOutside(e) {
  if (menuOpen.value) return
  if (!e.target.closest('.navbar__item--dropdown')) {
    solutionsOpen.value = false
    secteursOpen.value  = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('click', onClickOutside)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('click', onClickOutside)
  document.body.style.overflow = ''
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
  font-size: 14px;
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
  font-size: 14px;
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

/* ── DROPDOWN PANEL ── */
.navbar__item--dropdown {
  position: relative;
}

.navbar__dropdown {
  position: absolute;
  top: calc(100% + 16px);
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-bg-2);
  border: 1px solid var(--color-border);
  min-width: 300px;
  z-index: 100;
  transform-origin: top center;
}

.navbar__dropdown::before {
  content: '';
  position: absolute;
  top: -5px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: var(--color-bg-2);
  border-left: 1px solid var(--color-border);
  border-top: 1px solid var(--color-border);
}

/* ── Vue Transition: nav-dropdown ── */
.nav-dropdown-enter-active {
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.nav-dropdown-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.nav-dropdown-enter-from,
.nav-dropdown-leave-to {
  opacity: 0;
  transform: translateX(-50%) scaleY(0.94) translateY(-6px);
}
.nav-dropdown-enter-to,
.nav-dropdown-leave-from {
  opacity: 1;
  transform: translateX(-50%) scaleY(1) translateY(0);
}

.navbar__dropdown-inner {
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.navbar__dropdown-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 14px;
  text-decoration: none;
  border: 1px solid transparent;
  transition: border-color 0.2s, background 0.2s;
}

.navbar__dropdown-item:hover {
  background: rgba(201, 162, 96, 0.05);
  border-color: var(--color-border);
}

.navbar__dropdown-item-icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(201, 162, 96, 0.08);
  border: 1px solid rgba(201, 162, 96, 0.15);
  color: var(--color-gold);
  flex-shrink: 0;
}

.navbar__dropdown-item-title {
  display: block;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
  color: var(--color-white);
  margin-bottom: 2px;
}

.navbar__dropdown-item-sub {
  display: block;
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 300;
  color: var(--color-muted);
  letter-spacing: 0.03em;
}

/* ── CTA BUTTON ── */
.navbar__right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.btn-gold {
  background: rgba(8, 8, 8, 0.92);
  color: var(--color-gold);
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
  max-height: 200px;
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

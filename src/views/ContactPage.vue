<template>
  <div class="contact-page">
    <NavBar />

    <!-- ── HERO ── -->
    <section class="c-hero">
      <div class="c-hero__bg-num">SIERRA</div>
      <div class="c-hero__content">
        <nav class="c-hero__breadcrumb">
          <router-link to="/">Accueil</router-link>
          <span>/</span>
          <span>Contact</span>
        </nav>
        <div class="c-hero__body">
          <div class="c-hero__left">
            <p class="c-hero__label">Parlons de votre projet</p>
            <h1 class="c-hero__title">
              Sécurisons<br />
              <span class="c-hero__title-stroke">votre bien.</span>
            </h1>
          </div>
          <div class="c-hero__right">
            <p class="c-hero__sub">
              Décrivez votre besoin, nous revenons vers vous avec
              une solution adaptée à votre site et votre budget.
            </p>
            <div class="c-hero__actions">
              <a href="#formulaire" class="c-hero__cta-primary">Envoyer un message</a>
              <a href="tel:0782564979" class="c-hero__cta-secondary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                07 82 56 49 79
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── BLOCS INFO ── -->
    <div class="c-info-row" ref="infoRef">
      <div
        v-for="(card, i) in infoCards"
        :key="card.title"
        class="c-info-card reveal"
        :class="[`reveal-delay-${i + 1}`, { visible: infoVis }]"
      >
        <div class="c-info-card__icon">
          <component :is="card.icon" />
        </div>
        <h3 class="c-info-card__title">{{ card.title }}</h3>
        <p class="c-info-card__sub">{{ card.sub }}</p>
        <a v-if="card.href" :href="card.href" class="c-info-card__value c-info-card__link">{{ card.value }}</a>
        <span v-else class="c-info-card__value">{{ card.value }}</span>
      </div>
    </div>

    <!-- ── FORMULAIRE ── -->
    <section class="c-main" id="formulaire" ref="mainRef">
      <div class="c-main__container">

        <div class="c-main__header reveal" :class="{ visible: mainVis }">
          <p class="c-label">Formulaire de contact</p>
          <h2 class="c-main__title">ENVOYEZ-NOUS UN MESSAGE</h2>
          <p class="c-main__subtitle">Nous vous répondons sous 24h, du lundi au dimanche.</p>
        </div>

        <div class="c-form-wrap reveal reveal-delay-1" :class="{ visible: mainVis }">
          <form class="c-form" @submit.prevent="submitForm" novalidate>

            <div class="c-form__row">
              <div class="c-form__field" :class="{ 'c-form__field--error': errors.nom }">
                <label class="c-form__label">Nom & Prénom *</label>
                <div class="c-form__input-wrap">
                  <svg class="c-form__icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <input v-model="form.nom" type="text" class="c-form__input" placeholder="Jean Dupont" />
                </div>
                <span v-if="errors.nom" class="c-form__error">{{ errors.nom }}</span>
              </div>

              <div class="c-form__field" :class="{ 'c-form__field--error': errors.telephone }">
                <label class="c-form__label">Téléphone *</label>
                <div class="c-form__input-wrap">
                  <svg class="c-form__icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <input v-model="form.telephone" type="tel" class="c-form__input" placeholder="06 XX XX XX XX" />
                </div>
                <span v-if="errors.telephone" class="c-form__error">{{ errors.telephone }}</span>
              </div>
            </div>

            <div class="c-form__field" :class="{ 'c-form__field--error': errors.email }">
              <label class="c-form__label">Email *</label>
              <div class="c-form__input-wrap">
                <svg class="c-form__icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <input v-model="form.email" type="email" class="c-form__input" placeholder="jean.dupont@email.com" />
              </div>
              <span v-if="errors.email" class="c-form__error">{{ errors.email }}</span>
            </div>

            <div class="c-form__row">
              <div class="c-form__field">
                <label class="c-form__label">Type de besoin</label>
                <div class="c-form__input-wrap c-form__input-wrap--select">
                  <svg class="c-form__icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <select v-model="form.besoin" class="c-form__input c-form__select">
                    <option value="">Sélectionner un service</option>
                    <option v-for="o in besoins" :key="o" :value="o">{{ o }}</option>
                  </select>
                  <svg class="c-form__select-arrow" width="13" height="13" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </div>
              </div>

              <div class="c-form__field">
                <label class="c-form__label">Localisation du bien</label>
                <div class="c-form__input-wrap">
                  <svg class="c-form__icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                  </svg>
                  <input v-model="form.localisation" type="text" class="c-form__input" placeholder="Paris 15, Versailles..." />
                </div>
              </div>
            </div>

            <div class="c-form__field">
              <label class="c-form__label">Votre message</label>
              <textarea v-model="form.message" class="c-form__textarea" placeholder="Décrivez votre situation : type de bien, surface, risques identifiés..." rows="4"></textarea>
            </div>

            <div class="c-form__footer">
              <button type="submit" class="c-form__submit" :class="{ 'c-form__submit--sent': sent }">
                <span v-if="!sent">Envoyer ma demande</span>
                <span v-else>Message envoyé ✓</span>
                <svg v-if="!sent" width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <p class="c-form__mention">Réponse garantie sous 24h</p>
            </div>

          </form>
        </div>
      </div>
    </section>

    <FooterSection />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, defineComponent, h } from 'vue'
import NavBar        from '../components/NavBar.vue'
import FooterSection from '../components/FooterSection.vue'

const IconPhone = defineComponent({ render: () => h('svg', { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none' }, [
  h('path', { d: 'M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z', fill: 'currentColor' })
]) })

const IconPin = defineComponent({ render: () => h('svg', { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none' }, [
  h('path', { d: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z', fill: 'currentColor' })
]) })

const IconClock = defineComponent({ render: () => h('svg', { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none' }, [
  h('circle', { cx: 12, cy: 12, r: 10, stroke: 'currentColor', 'stroke-width': 1.5 }),
  h('path', { d: 'M12 7v5l3 3', stroke: 'currentColor', 'stroke-width': 1.5, 'stroke-linecap': 'round' })
]) })

const infoCards = [
  { icon: IconPhone, title: 'Téléphone direct', sub: 'Nous répondons rapidement à toute demande.', value: '07 82 56 49 79', href: 'tel:0782564979' },
  { icon: IconPin,   title: "Zone d'intervention", sub: "Toute l'Île-de-France, Paris & grande couronne.", value: 'Paris · Île-de-France', href: null },
  { icon: IconClock, title: 'Disponibilité', sub: 'Urgences disponibles 24h/24, 7j/7.', value: 'Lun – Dim : 7h – 22h', href: null },
]

const besoins = [
  'Alarme anti-intrusion',
  'Vidéosurveillance',
  'Gardiennage humain',
  'Porte anti-squat',
  'Télésurveillance',
  'Sécurisation chantier',
  'Bien vacant',
  'Solution complète',
]

const form = reactive({ nom: '', telephone: '', email: '', besoin: '', localisation: '', message: '' })
const errors = reactive({ nom: '', telephone: '', email: '' })
const sent = ref(false)

function validate() {
  errors.nom       = form.nom.trim()       ? '' : 'Ce champ est requis'
  errors.telephone = form.telephone.trim() ? '' : 'Ce champ est requis'
  errors.email     = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : 'Email invalide'
  return !errors.nom && !errors.telephone && !errors.email
}

function submitForm() {
  if (!validate()) return
  const subject = encodeURIComponent('Demande de devis – Sierra Sécurité')
  const body    = encodeURIComponent(
    `Nom : ${form.nom}\nTéléphone : ${form.telephone}\nEmail : ${form.email}\nBesoin : ${form.besoin || 'Non précisé'}\nLocalisation : ${form.localisation || 'Non précisée'}\n\nMessage :\n${form.message}`
  )
  window.location.href = `mailto:contact@sierra-securite.fr?subject=${subject}&body=${body}`
  sent.value = true
}

const infoRef = ref(null); const infoVis = ref(false)
const mainRef = ref(null); const mainVis = ref(false)

function observe(el, flag) {
  if (!el) return
  const obs = new IntersectionObserver(
    ([e]) => { if (e.isIntersecting) { flag.value = true; obs.disconnect() } },
    { threshold: 0.1 }
  )
  obs.observe(el)
}

onMounted(() => {
  observe(infoRef.value, infoVis)
  observe(mainRef.value, mainVis)
})
</script>

<style scoped>
.contact-page { background: var(--color-bg); }

/* ── HERO ── */
.c-hero {
  padding-top: 72px;
  border-bottom: 1px solid var(--color-border);
  background: var(--color-bg-2);
  position: relative;
  overflow: hidden;
}

.c-hero__bg-num {
  position: absolute;
  right: -20px;
  bottom: -40px;
  font-family: var(--font-display);
  font-size: clamp(100px, 18vw, 240px);
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 1px rgba(201, 162, 96, 0.06);
  letter-spacing: -0.04em;
  line-height: 1;
  user-select: none;
  pointer-events: none;
}

.c-hero__content {
  max-width: 1280px;
  margin: 0 auto;
  padding: 56px 80px 64px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.c-hero__breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
}

.c-hero__breadcrumb a {
  font-family: var(--font-body);
  font-size: 11px;
  letter-spacing: 0.1em;
  color: var(--color-muted);
  text-decoration: none;
  text-transform: uppercase;
}

.c-hero__breadcrumb > span { color: var(--color-muted); font-size: 10px; }
.c-hero__breadcrumb > span:last-child {
  font-family: var(--font-body);
  font-size: 11px;
  letter-spacing: 0.1em;
  color: var(--color-gold);
  text-transform: uppercase;
}

.c-hero__body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: flex-end;
}

.c-hero__label {
  font-family: var(--font-body);
  font-size: 11px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 20px;
}

.c-hero__title {
  font-family: var(--font-display);
  font-size: clamp(48px, 6vw, 80px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  line-height: 0.95;
  letter-spacing: 0.01em;
}

.c-hero__title-stroke {
  -webkit-text-stroke: 2px rgba(201, 162, 96, 0.5);
  color: transparent;
}

.c-hero__right {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-bottom: 8px;
}

.c-hero__sub {
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.8;
}

.c-hero__actions {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.c-hero__cta-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  background: var(--color-gold);
  color: var(--color-bg);
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  transition: background 0.2s;
}

.c-hero__cta-primary:hover { background: var(--color-gold-light); }

.c-hero__cta-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-muted);
  text-decoration: none;
  transition: color 0.2s;
}

.c-hero__cta-secondary:hover { color: var(--color-gold); }

/* ── INFO ROW ── */
.c-info-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-bottom: 1px solid var(--color-border);
}

.c-info-card {
  padding: 48px 40px;
  border-right: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
  transition: background 0.3s;
}

.c-info-card:last-child { border-right: none; }
.c-info-card:hover { background: rgba(201, 162, 96, 0.03); }

.c-info-card__icon {
  width: 44px;
  height: 44px;
  border: 1px solid rgba(201, 162, 96, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-gold);
  margin-bottom: 8px;
  background: rgba(201, 162, 96, 0.05);
}

.c-info-card__title {
  font-family: var(--font-display);
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-white);
  letter-spacing: 0.04em;
}

.c-info-card__sub {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.6;
}

.c-info-card__value {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  color: var(--color-gold);
  letter-spacing: 0.04em;
  margin-top: 4px;
}

.c-info-card__link { text-decoration: none; transition: color 0.2s; }
.c-info-card__link:hover { color: var(--color-gold-light); }

/* ── MAIN ── */
.c-main {
  padding: 100px 0;
  background: var(--color-bg);
}

.c-main__container {
  max-width: 760px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.c-main__header { text-align: center; }

.c-label {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 16px;
}

.c-main__title {
  font-family: var(--font-display);
  font-size: clamp(26px, 3vw, 38px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  letter-spacing: 0.02em;
  line-height: 1.05;
  margin-bottom: 14px;
}

.c-main__subtitle {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.7;
}

/* ── FORM CARD ── */
.c-form-wrap {
  background: var(--color-bg-2);
  border: 1px solid var(--color-border);
  padding: 40px 44px;
}

.c-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.c-form__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.c-form__field {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.c-form__label {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-muted);
}

/* icon + input wrapper — inspired by the reference card */
.c-form__input-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  padding: 0 14px;
  transition: border-color 0.2s;
}

.c-form__input-wrap:focus-within { border-color: rgba(201, 162, 96, 0.5); }
.c-form__field--error .c-form__input-wrap { border-color: rgba(220, 80, 80, 0.5); }

.c-form__icon {
  color: rgba(201, 162, 96, 0.5);
  flex-shrink: 0;
}

.c-form__input {
  background: transparent;
  border: none;
  outline: none;
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 300;
  padding: 13px 0;
  width: 100%;
  appearance: none;
  -webkit-appearance: none;
}

.c-form__input::placeholder { color: rgba(136, 136, 136, 0.4); }

.c-form__input-wrap--select { position: relative; }

.c-form__select {
  cursor: pointer;
  padding-right: 28px;
  color: var(--color-text);
}

.c-form__select option { background: var(--color-bg-2); color: var(--color-text); }

.c-form__select-arrow {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-muted);
  pointer-events: none;
}

.c-form__textarea {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 300;
  padding: 13px 14px;
  outline: none;
  resize: vertical;
  min-height: 96px;
  width: 100%;
  transition: border-color 0.2s;
}

.c-form__textarea::placeholder { color: rgba(136, 136, 136, 0.4); }
.c-form__textarea:focus { border-color: rgba(201, 162, 96, 0.5); }

.c-form__error {
  font-family: var(--font-body);
  font-size: 11px;
  color: rgba(220, 80, 80, 0.8);
}

.c-form__footer {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  padding-top: 8px;
  margin-top: 4px;
}

.c-form__submit {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 28px;
  background: var(--color-gold);
  color: var(--color-bg);
  border: none;
  cursor: pointer;
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: background 0.2s, gap 0.2s;
}

.c-form__submit:hover { background: var(--color-gold-light); gap: 18px; }

.c-form__submit--sent {
  background: rgba(76, 175, 80, 0.8);
  pointer-events: none;
}

.c-form__mention {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 300;
  color: var(--color-muted);
  letter-spacing: 0.03em;
}

/* ── REVEAL ── */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.visible { opacity: 1; transform: none; }
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }

/* ── RESPONSIVE ── */
@media (max-width: 1200px) {
  .c-hero__content { padding-left: 40px; padding-right: 40px; }
}

@media (max-width: 1024px) {
  .c-hero__body { grid-template-columns: 1fr; gap: 32px; }
}

@media (max-width: 768px) {
  .c-hero__content { padding: 48px 24px 56px; }
  .c-info-row { grid-template-columns: 1fr; }
  .c-info-card { border-right: none; border-bottom: 1px solid var(--color-border); }
  .c-info-card:last-child { border-bottom: none; }
  .c-main { padding: 72px 0; }
  .c-main__container { padding: 0 24px; }
  .c-form-wrap { padding: 28px 24px; }
  .c-form__row { grid-template-columns: 1fr; }
}
</style>

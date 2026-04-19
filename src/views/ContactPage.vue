<template>
  <div class="contact-page">

    <!-- ── Mini nav immersive ── -->
    <header class="cp-nav">
      <router-link to="/" class="cp-nav__logo">
        <img :src="logo" alt="Sierra Sécurité" />
      </router-link>
      <router-link to="/" class="cp-nav__back">
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
          <path d="M16 10H4M9 5l-5 5 5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Retour à l'accueil
      </router-link>
    </header>

    <div class="cp-grid">

      <!-- ── Colonne gauche : infos ── -->
      <div class="cp-left">
        <div class="cp-left__content">
          <nav class="cp-breadcrumb">
            <router-link to="/">Accueil</router-link>
            <span>/</span>
            <span class="cp-breadcrumb__active">Contact</span>
          </nav>

          <p class="cp-label">Parlons de votre projet</p>
          <h1 class="cp-title">
            Sécurisons<br />
            <span class="cp-title-stroke">votre bien.</span>
          </h1>
          <p class="cp-sub">
            Décrivez votre besoin, nous revenons vers vous avec
            une solution adaptée à votre site et votre budget.
          </p>
        </div>

        <!--<div class="cp-actions">
          <a href="#formulaire" class="cp-cta-primary">Envoyer un message</a>
          <a href="tel:0782564979" class="cp-cta-secondary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            07 82 56 49 79
          </a>
        </div>-->

        <!-- 3 blocs info sur la même ligne -->
        <div class="cp-info-row">
          <div v-for="card in infoCards" :key="card.title" class="cp-info-card">
            <div class="cp-info-card__icon"><component :is="card.icon" /></div>
            <h3 class="cp-info-card__title">{{ card.title }}</h3>
            <p class="cp-info-card__sub">{{ card.sub }}</p>
            <a v-if="card.href" :href="card.href" class="cp-info-card__value cp-info-card__link">{{ card.value }}</a>
            <span v-else class="cp-info-card__value">{{ card.value }}</span>
          </div>
        </div>
      </div>

      <!-- ── Colonne droite : formulaire ── -->
      <div class="cp-right" id="formulaire">
        <p class="cp-label">Formulaire de contact</p>
        <h2 class="cp-form-title">ENVOYEZ-NOUS<br />UN MESSAGE</h2>
        <p class="cp-form-sub">Nous vous répondons sous 24h, du lundi au dimanche.</p>

        <form class="cp-form" @submit.prevent="submitForm" novalidate>

          <div class="cp-form__row">
            <div class="cp-form__field" :class="{ 'cp-form__field--error': errors.nom }">
              <label class="cp-form__label">Nom & Prénom *</label>
              <div class="cp-form__input-wrap">
                <svg class="cp-form__icon" width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <input v-model="form.nom" type="text" class="cp-form__input" placeholder="Jean Dupont" />
              </div>
              <span v-if="errors.nom" class="cp-form__error">{{ errors.nom }}</span>
            </div>

            <div class="cp-form__field" :class="{ 'cp-form__field--error': errors.telephone }">
              <label class="cp-form__label">Téléphone *</label>
              <div class="cp-form__input-wrap">
                <svg class="cp-form__icon" width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
                <input v-model="form.telephone" type="tel" class="cp-form__input" placeholder="06 XX XX XX XX" />
              </div>
              <span v-if="errors.telephone" class="cp-form__error">{{ errors.telephone }}</span>
            </div>
          </div>

          <div class="cp-form__field" :class="{ 'cp-form__field--error': errors.email }">
            <label class="cp-form__label">Email *</label>
            <div class="cp-form__input-wrap">
              <svg class="cp-form__icon" width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="1.5"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <input v-model="form.email" type="email" class="cp-form__input" placeholder="jean.dupont@email.com" />
            </div>
            <span v-if="errors.email" class="cp-form__error">{{ errors.email }}</span>
          </div>

          <div class="cp-form__row">
            <div class="cp-form__field">
              <label class="cp-form__label">Type de besoin</label>
              <div class="cp-form__input-wrap cp-form__input-wrap--select">
                <svg class="cp-form__icon" width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
                <select v-model="form.besoin" class="cp-form__input cp-form__select">
                  <option value="">Sélectionner un service</option>
                  <option v-for="o in besoins" :key="o" :value="o">{{ o }}</option>
                </select>
                <svg class="cp-form__select-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </div>
            </div>

            <div class="cp-form__field">
              <label class="cp-form__label">Localisation</label>
              <div class="cp-form__input-wrap">
                <svg class="cp-form__icon" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" opacity=".6"/>
                </svg>
                <input v-model="form.localisation" type="text" class="cp-form__input" placeholder="Paris 15, Versailles…" />
              </div>
            </div>
          </div>

          <div class="cp-form__field">
            <label class="cp-form__label">Votre message</label>
            <textarea v-model="form.message" class="cp-form__textarea" placeholder="Décrivez votre situation…" rows="4"></textarea>
          </div>

          <div class="cp-form__footer">
            <button type="submit" class="cp-form__submit" :class="{ 'cp-form__submit--sent': sent }">
              <span v-if="!sent">Envoyer ma demande</span>
              <span v-else>Message envoyé ✓</span>
              <svg v-if="!sent" width="15" height="15" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </button>
            <p class="cp-form__mention">Réponse garantie sous 24h</p>
          </div>

        </form>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, reactive, defineComponent, h } from 'vue'
import logo from '../assets/logo/logo-horizontal.png'

const IconPhone = defineComponent({ render: () => h('svg', { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none' }, [
  h('path', { d: 'M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z', fill: 'currentColor' })
]) })

const IconPin = defineComponent({ render: () => h('svg', { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none' }, [
  h('path', { d: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z', fill: 'currentColor' })
]) })

const IconClock = defineComponent({ render: () => h('svg', { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none' }, [
  h('circle', { cx: 12, cy: 12, r: 10, stroke: 'currentColor', 'stroke-width': 1.5 }),
  h('path', { d: 'M12 7v5l3 3', stroke: 'currentColor', 'stroke-width': 1.5, 'stroke-linecap': 'round' })
]) })

const infoCards = [
  { icon: IconPhone, title: 'Téléphone direct',    sub: 'Nous répondons rapidement à toute demande.',      value: '07 82 56 49 79',       href: 'tel:0782564979' },
  { icon: IconPin,   title: "Zone d'intervention", sub: "Toute l'Île-de-France, Paris & grande couronne.", value: 'Paris · Île-de-France', href: null },
  { icon: IconClock, title: 'Disponibilité',       sub: 'Urgences disponibles 24h/24, 7j/7.',              value: 'Lun – Dim : 7h – 22h',  href: null },
]

const besoins = [
  'Alarme anti-intrusion', 'Vidéosurveillance', 'Gardiennage humain',
  'Porte anti-squat', 'Télésurveillance', 'Sécurisation chantier',
  'Bien vacant', 'Solution complète',
]

const form   = reactive({ nom: '', telephone: '', email: '', besoin: '', localisation: '', message: '' })
const errors = reactive({ nom: '', telephone: '', email: '' })
const sent   = ref(false)

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
</script>

<style scoped>
.contact-page {
  background: var(--color-bg);
  overflow: hidden;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

/* ── Mini nav ── */
.cp-nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  height: 64px;
  background: rgba(8, 8, 8, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
}

.cp-nav__logo img { height: 60px; width: auto; display: block; }

.cp-nav__back {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-muted);
  text-decoration: none;
  transition: color 0.2s;
}

.cp-nav__back:hover { color: var(--color-gold); }

/* ── Grille 2 colonnes ── */
.cp-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex: 1;
  overflow: hidden;
  margin-top: 64px;
  height: calc(100vh - 64px);
}

/* ── GAUCHE ── */
.cp-left {
  background: var(--color-bg-2);
  border-right: 1px solid var(--color-border);
  padding: 40px 64px 40px 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
}

.cp-left__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding-bottom: 40px;
}

.cp-left::before {
  content: '';
  position: absolute;
  left: 0; top: 20%; bottom: 20%;
  width: 2px;
  background: linear-gradient(to bottom, transparent, var(--color-gold), transparent);
}

.cp-breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 40px;
}

.cp-breadcrumb a {
  font-size: 11px;
  letter-spacing: 0.1em;
  color: var(--color-muted);
  text-decoration: none;
  text-transform: uppercase;
  font-family: var(--font-body);
}

.cp-breadcrumb span { color: var(--color-muted); font-size: 10px; }
.cp-breadcrumb__active { font-size: 11px !important; letter-spacing: 0.1em; color: var(--color-gold) !important; text-transform: uppercase; font-family: var(--font-body); }

.cp-label {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 14px;
}

.cp-title {
  font-family: var(--font-display);
  font-size: clamp(36px, 4vw, 60px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  line-height: 0.95;
  letter-spacing: 0.01em;
  margin-bottom: 20px;
}

.cp-title-stroke {
  -webkit-text-stroke: 2px rgba(201, 162, 96, 0.5);
  color: transparent;
}

.cp-sub {
  font-size: 14px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.8;
  max-width: 400px;
  margin-bottom: 28px;
}

.cp-actions {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 48px;
}

.cp-cta-primary {
  display: inline-flex;
  align-items: center;
  padding: 12px 22px;
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

.cp-cta-primary:hover { background: var(--color-gold-light); }

.cp-cta-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-muted);
  text-decoration: none;
  transition: color 0.2s;
}

.cp-cta-secondary:hover { color: var(--color-gold); }

/* ── 3 blocs info — pleine largeur ── */
.cp-info-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid var(--color-border);
  margin: auto -80px -40px -80px;
}

.cp-info-card {
  padding: 32px 24px;
  border-right: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
}

.cp-info-card:last-child { border-right: none; }

.cp-info-card__icon {
  width: 48px;
  height: 48px;
  border: 1px solid rgba(201, 162, 96, 0.25);
  background: rgba(201, 162, 96, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-gold);
  margin-bottom: 10px;
}

.cp-info-card__title {
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-white);
  letter-spacing: 0.04em;
}

.cp-info-card__sub {
  font-size: 12px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.6;
}

.cp-info-card__value {
  font-size: 13px;
  font-weight: 600;
  color: var(--color-gold);
  letter-spacing: 0.04em;
  margin-top: 4px;
}

.cp-info-card__link { text-decoration: none; transition: color 0.2s; }
.cp-info-card__link:hover { color: var(--color-gold-light); }

/* ── DROITE ── */
.cp-right {
  background: var(--color-bg);
  padding: 40px 80px 40px 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}

.cp-form-title {
  font-family: var(--font-display);
  font-size: clamp(24px, 2.5vw, 36px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  letter-spacing: 0.02em;
  line-height: 1.05;
  margin-bottom: 8px;
}

.cp-form-sub {
  font-size: 14px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.7;
  margin-bottom: 32px;
}

/* ── Form ── */
.cp-form { display: flex; flex-direction: column; gap: 18px; }

.cp-form__row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }

.cp-form__field { display: flex; flex-direction: column; gap: 7px; }

.cp-form__label {
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.cp-form__input-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--color-bg-2);
  border: 1px solid var(--color-border);
  padding: 0 14px;
  transition: border-color 0.2s;
}

.cp-form__input-wrap:focus-within { border-color: rgba(201, 162, 96, 0.5); }
.cp-form__field--error .cp-form__input-wrap { border-color: rgba(220, 80, 80, 0.5); }

.cp-form__icon { color: rgba(201, 162, 96, 0.45); flex-shrink: 0; }

.cp-form__input {
  background: transparent;
  border: none;
  outline: none;
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 300;
  padding: 12px 0;
  width: 100%;
  appearance: none;
  -webkit-appearance: none;
}

.cp-form__input::placeholder { color: rgba(136, 136, 136, 0.35); }
.cp-form__input-wrap--select { position: relative; }
.cp-form__select { cursor: pointer; padding-right: 28px; color: var(--color-text); }
.cp-form__select option { background: var(--color-bg-2); color: var(--color-text); }

.cp-form__select-arrow {
  position: absolute; right: 14px; top: 50%;
  transform: translateY(-50%);
  color: var(--color-muted); pointer-events: none;
}

.cp-form__textarea {
  background: var(--color-bg-2);
  border: 1px solid var(--color-border);
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 300;
  padding: 12px 14px;
  outline: none;
  resize: vertical;
  min-height: 90px;
  width: 100%;
  transition: border-color 0.2s;
}

.cp-form__textarea::placeholder { color: rgba(136, 136, 136, 0.35); }
.cp-form__textarea:focus { border-color: rgba(201, 162, 96, 0.5); }

.cp-form__error { font-size: 11px; color: rgba(220, 80, 80, 0.8); }

.cp-form__footer {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  padding-top: 6px;
}

.cp-form__submit {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 13px 26px;
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

.cp-form__submit:hover { background: var(--color-gold-light); gap: 18px; }
.cp-form__submit--sent { background: rgba(76, 175, 80, 0.8); pointer-events: none; }

.cp-form__mention {
  font-size: 12px;
  font-weight: 300;
  color: var(--color-muted);
}

/* ── RESPONSIVE ── */
@media (max-width: 1200px) {
  .cp-left  { padding: 32px 40px 32px 48px; }
  .cp-right { padding: 32px 48px 32px 40px; }
  .cp-info-row { margin: auto -40px -32px -48px; }
}

@media (max-width: 1024px) {
  .contact-page { height: auto; overflow: auto; }
  .cp-grid { grid-template-columns: 1fr; height: auto; overflow: visible; }
  .cp-nav { padding: 0 32px; }
  .cp-left { border-right: none; border-bottom: 1px solid var(--color-border); padding: 40px; overflow: visible; }
  .cp-left::before { display: none; }
  .cp-right { padding: 40px; overflow: visible; }
  .cp-info-row { margin: auto -40px -40px -40px; }
}

@media (max-width: 768px) {
  .cp-nav { padding: 0 20px; }
  .cp-left  { padding: 28px 20px; }
  .cp-right { padding: 28px 20px; }
  .cp-info-row { grid-template-columns: repeat(3, 1fr); margin: auto -20px -28px -20px; }
  .cp-info-card { padding: 20px 12px; gap: 6px; }
  .cp-info-card__icon { width: 36px; height: 36px; margin-bottom: 6px; }
  .cp-info-card__title { font-size: 11px; }
  .cp-info-card__sub { font-size: 10px; }
  .cp-info-card__value { font-size: 11px; }
  .cp-form__row { grid-template-columns: 1fr; }
  .cp-actions { flex-direction: column; align-items: flex-start; }
}
</style>

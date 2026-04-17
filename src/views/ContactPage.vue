<template>
  <div class="contact-page">
    <NavBar />

    <!-- ── HERO ── -->
    <section class="c-hero">
      <div class="c-hero__content">
        <nav class="c-hero__breadcrumb">
          <router-link to="/">Accueil</router-link>
          <span>/</span>
          <span>Contact</span>
        </nav>
        <p class="c-hero__label">Parlons de votre projet</p>
        <h1 class="c-hero__title">
          Audit gratuit<br />
          <span class="c-hero__title-stroke">en 30 min.</span>
        </h1>
        <p class="c-hero__sub">
          Décrivez votre besoin, nous revenons vers vous sous 30 minutes
          avec une solution adaptée à votre site et votre budget.
        </p>
      </div>
    </section>

    <!-- ── FORMULAIRE + INFOS ── -->
    <section class="c-main" ref="mainRef">
      <div class="c-main__container">

        <!-- Informations gauche -->
        <div class="c-info reveal" :class="{ visible: mainVis }">
          <div class="c-info__block">
            <span class="c-info__title">Intervention</span>
            <p class="c-info__text">Toute l'Île-de-France<br />Paris & petite couronne<br />Grande couronne</p>
          </div>

          <div class="c-info__block">
            <span class="c-info__title">Disponibilité</span>
            <p class="c-info__text">Lun – Dim : 7h – 22h<br />Urgences : 24h/24</p>
          </div>

          <div class="c-info__block">
            <span class="c-info__title">Téléphone direct</span>
            <a href="tel:0782564979" class="c-info__phone">07 82 56 49 79</a>
            <p class="c-info__phone-sub">Rappel garanti sous 30 min</p>
          </div>

          <div class="c-info__badges">
            <span v-for="b in badges" :key="b" class="c-info__badge">{{ b }}</span>
          </div>

          <div class="c-info__promise">
            <div class="c-info__promise-line"></div>
            <p>
              <strong>Notre engagement :</strong> Aucun bien sécurisé par Sierra Sécurité
              n'a jamais été squatté après intervention.
            </p>
          </div>
        </div>

        <!-- Formulaire droite -->
        <div class="c-form-wrap reveal reveal-delay-2" :class="{ visible: mainVis }">
          <form class="c-form" @submit.prevent="submitForm" novalidate>
            <div class="c-form__row">
              <div class="c-form__field" :class="{ 'c-form__field--error': errors.nom }">
                <label class="c-form__label">Nom & Prénom *</label>
                <input v-model="form.nom" type="text" class="c-form__input" placeholder="Jean Dupont" />
                <span v-if="errors.nom" class="c-form__error">{{ errors.nom }}</span>
              </div>
              <div class="c-form__field" :class="{ 'c-form__field--error': errors.telephone }">
                <label class="c-form__label">Téléphone *</label>
                <input v-model="form.telephone" type="tel" class="c-form__input" placeholder="06 XX XX XX XX" />
                <span v-if="errors.telephone" class="c-form__error">{{ errors.telephone }}</span>
              </div>
            </div>

            <div class="c-form__field" :class="{ 'c-form__field--error': errors.email }">
              <label class="c-form__label">Email *</label>
              <input v-model="form.email" type="email" class="c-form__input" placeholder="jean.dupont@email.com" />
              <span v-if="errors.email" class="c-form__error">{{ errors.email }}</span>
            </div>

            <div class="c-form__field">
              <label class="c-form__label">Type de besoin</label>
              <div class="c-form__select-wrap">
                <select v-model="form.besoin" class="c-form__input c-form__select">
                  <option value="">Sélectionner un service</option>
                  <option v-for="o in besoins" :key="o" :value="o">{{ o }}</option>
                </select>
                <svg class="c-form__select-arrow" width="14" height="14" viewBox="0 0 12 12" fill="none">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </div>
            </div>

            <div class="c-form__field">
              <label class="c-form__label">Localisation du bien</label>
              <input v-model="form.localisation" type="text" class="c-form__input" placeholder="Paris 15, Versailles, Créteil..." />
            </div>

            <div class="c-form__field">
              <label class="c-form__label">Votre message</label>
              <textarea v-model="form.message" class="c-form__input c-form__textarea" placeholder="Décrivez votre situation : type de bien, surface, risques identifiés..." rows="4"></textarea>
            </div>

            <div class="c-form__actions">
              <button type="submit" class="c-form__submit" :class="{ 'c-form__submit--sent': sent }">
                <span v-if="!sent">Envoyer ma demande</span>
                <span v-else>Message envoyé ✓</span>
                <div v-if="!sent" class="c-form__submit-arrow">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </button>
              <p class="c-form__mention">Réponse garantie sous 30 minutes</p>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- ── RAPPEL RAPIDE ── -->
    <section class="c-recall" ref="recallRef">
      <div class="c-recall__container reveal" :class="{ visible: recallVis }">
        <div class="c-recall__left">
          <p class="c-recall__label">Besoin urgent ?</p>
          <h2 class="c-recall__title">Appelez directement</h2>
          <p class="c-recall__sub">Notre équipe répond du lundi au dimanche, de 7h à 22h. Pour les urgences, nous sommes disponibles 24h/24.</p>
        </div>
        <div class="c-recall__right">
          <a href="tel:0782564979" class="c-recall__phone">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" fill="currentColor"/>
            </svg>
            <span>07 82 56 49 79</span>
          </a>
          <p class="c-recall__time">Rappel sous 30 min garanti</p>
        </div>
      </div>
    </section>

    <FooterSection />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import NavBar        from '../components/NavBar.vue'
import FooterSection from '../components/FooterSection.vue'

const badges = ['Agréé CNAPS', 'AJAX Certified', 'APSAD P3', 'Déploiement 48h']

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
  errors.nom = form.nom.trim() ? '' : 'Ce champ est requis'
  errors.telephone = form.telephone.trim() ? '' : 'Ce champ est requis'
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : 'Email invalide'
  return !errors.nom && !errors.telephone && !errors.email
}

function submitForm() {
  if (!validate()) return
  // Construction du mailto avec les infos du formulaire
  const subject = encodeURIComponent(`Demande d'audit gratuit – Sierra Sécurité`)
  const body = encodeURIComponent(
    `Nom : ${form.nom}\nTéléphone : ${form.telephone}\nEmail : ${form.email}\nBesoin : ${form.besoin || 'Non précisé'}\nLocalisation : ${form.localisation || 'Non précisée'}\n\nMessage :\n${form.message}`
  )
  window.location.href = `mailto:contact@sierra-securite.fr?subject=${subject}&body=${body}`
  sent.value = true
}

const mainRef   = ref(null); const mainVis   = ref(false)
const recallRef = ref(null); const recallVis = ref(false)

function observe(el, flag) {
  if (!el) return
  const obs = new IntersectionObserver(
    ([e]) => { if (e.isIntersecting) { flag.value = true; obs.disconnect() } },
    { threshold: 0.1 }
  )
  obs.observe(el)
}

onMounted(() => {
  observe(mainRef.value,   mainVis)
  observe(recallRef.value, recallVis)
})
</script>

<style scoped>
.contact-page { background: var(--color-bg); }

/* ── HERO ── */
.c-hero {
  min-height: 52vh;
  display: flex;
  align-items: flex-end;
  padding-top: 72px;
  border-bottom: 1px solid var(--color-border);
  background: var(--color-bg-2);
  position: relative;
  overflow: hidden;
}

.c-hero::before {
  content: '';
  position: absolute;
  left: 0; top: 20%; bottom: 20%;
  width: 2px;
  background: linear-gradient(to bottom, transparent, var(--color-gold), transparent);
}

.c-hero__content {
  max-width: 1280px;
  margin: 0 auto;
  padding: 64px 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
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

.c-hero__label {
  font-family: var(--font-body);
  font-size: 11px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-gold);
}

.c-hero__title {
  font-family: var(--font-display);
  font-size: clamp(48px, 6vw, 88px);
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

.c-hero__sub {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.7;
  max-width: 520px;
}

/* ── MAIN ── */
.c-main {
  padding: 100px 0;
  background: var(--color-bg);
}

.c-main__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 80px;
  align-items: start;
}

/* ── INFO ── */
.c-info {
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: sticky;
  top: 100px;
}

.c-info__block {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.c-info__title {
  font-family: var(--font-body);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 4px;
}

.c-info__text {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 300;
  color: var(--color-text);
  line-height: 1.9;
}

.c-info__phone {
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 700;
  color: var(--color-white);
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: color 0.2s;
}

.c-info__phone:hover { color: var(--color-gold); }

.c-info__phone-sub {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 300;
  color: var(--color-muted);
  letter-spacing: 0.05em;
}

.c-info__badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.c-info__badge {
  font-family: var(--font-body);
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(201, 162, 96, 0.6);
  border: 1px solid rgba(201, 162, 96, 0.15);
  padding: 5px 10px;
  background: rgba(201, 162, 96, 0.04);
}

.c-info__promise {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.c-info__promise-line {
  width: 2px;
  min-height: 48px;
  background: var(--color-gold);
  flex-shrink: 0;
  opacity: 0.5;
}

.c-info__promise p {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.7;
}

.c-info__promise strong {
  color: var(--color-text);
  font-weight: 500;
}

/* ── FORM ── */
.c-form-wrap {
  background: var(--color-bg-2);
  border: 1px solid var(--color-border);
  padding: 48px;
}

.c-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.c-form__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.c-form__field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.c-form__label {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.c-form__input {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 300;
  padding: 14px 16px;
  outline: none;
  transition: border-color 0.2s;
  width: 100%;
  appearance: none;
  -webkit-appearance: none;
}

.c-form__input::placeholder { color: rgba(136, 136, 136, 0.5); }

.c-form__input:focus { border-color: rgba(201, 162, 96, 0.5); }

.c-form__field--error .c-form__input { border-color: rgba(220, 80, 80, 0.5); }

.c-form__error {
  font-family: var(--font-body);
  font-size: 11px;
  color: rgba(220, 80, 80, 0.8);
}

.c-form__select-wrap {
  position: relative;
}

.c-form__select {
  cursor: pointer;
  padding-right: 40px;
}

.c-form__select option { background: var(--color-bg); color: var(--color-text); }

.c-form__select-arrow {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-muted);
  pointer-events: none;
}

.c-form__textarea { resize: vertical; min-height: 100px; }

.c-form__actions {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.c-form__submit {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  padding: 16px 28px;
  background: var(--color-gold);
  color: var(--color-bg);
  border: none;
  cursor: pointer;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: background 0.2s;
}

.c-form__submit:hover { background: var(--color-gold-light); }

.c-form__submit--sent {
  background: rgba(76, 175, 80, 0.8);
  pointer-events: none;
}

.c-form__submit-arrow { display: flex; align-items: center; transition: transform 0.2s; }
.c-form__submit:hover .c-form__submit-arrow { transform: translateX(4px); }

.c-form__mention {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 300;
  color: var(--color-muted);
  letter-spacing: 0.03em;
}

/* ── RECALL ── */
.c-recall {
  background: var(--color-bg-2);
  border-top: 1px solid var(--color-border);
  padding: 80px 0;
}

.c-recall__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
}

.c-recall__label {
  font-family: var(--font-body);
  font-size: 11px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 12px;
}

.c-recall__title {
  font-family: var(--font-display);
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-white);
  letter-spacing: 0.02em;
  margin-bottom: 12px;
}

.c-recall__sub {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 300;
  color: var(--color-muted);
  line-height: 1.7;
  max-width: 480px;
}

.c-recall__phone {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  font-family: var(--font-display);
  font-size: 32px;
  font-weight: 700;
  color: var(--color-gold);
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: color 0.2s;
  white-space: nowrap;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}

.c-recall__phone svg { color: var(--color-gold); margin-bottom: 4px; }
.c-recall__phone:hover { color: var(--color-gold-light); }

.c-recall__time {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 300;
  color: var(--color-muted);
  letter-spacing: 0.05em;
  margin-top: 8px;
}

/* ── RESPONSIVE ── */
@media (max-width: 1200px) {
  .c-hero__content, .c-main__container, .c-recall__container { padding-left: 40px; padding-right: 40px; }
}

@media (max-width: 1024px) {
  .c-main__container { grid-template-columns: 1fr; gap: 48px; }
  .c-info { position: static; }
  .c-recall__container { flex-direction: column; align-items: flex-start; }
}

@media (max-width: 768px) {
  .c-hero__content { padding: 64px 24px; }
  .c-main__container, .c-recall__container { padding: 0 24px; }
  .c-main { padding: 72px 0; }
  .c-recall { padding: 60px 0; }
  .c-form-wrap { padding: 32px 24px; }
  .c-form__row { grid-template-columns: 1fr; }
}
</style>

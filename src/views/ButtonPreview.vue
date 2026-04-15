<template>
  <div class="bp">

    <nav class="bp-nav">
      <span class="bp-nav__title">Variations bouton — forme arrondie</span>
      <div class="bp-nav__pills">
        <a v-for="v in variations" :key="v.id" :href="`#btn-${v.id}`" class="bp-nav__pill">{{ v.id }}</a>
        <router-link to="/" class="bp-nav__pill bp-nav__pill--home">← Retour site</router-link>
      </div>
    </nav>

    <div v-for="btn in variations" :key="btn.id" :id="`btn-${btn.id}`" class="bp-block">

      <div class="bp-desc">
        <span class="bp-desc__num">{{ btn.id }}</span>
        <div>
          <strong class="bp-desc__name">{{ btn.name }}</strong>
          <p class="bp-desc__text">{{ btn.desc }}</p>
        </div>
      </div>

      <div class="bp-preview">
        <div class="bp-context-label">SUR IMAGE</div>
        <div class="bp-navbar bp-navbar--photo">
          <div class="bp-navbar__logo">SIERRA SÉCURITÉ</div>
          <div class="bp-navbar__links"><span>Accueil</span><span>Nos services</span><span>Secteurs</span></div>
          <component :is="btn.component" />
        </div>

        <div class="bp-context-label">SUR FOND SOMBRE</div>
        <div class="bp-navbar bp-navbar--dark">
          <div class="bp-navbar__logo">SIERRA SÉCURITÉ</div>
          <div class="bp-navbar__links"><span>Accueil</span><span>Nos services</span><span>Secteurs</span></div>
          <component :is="btn.component" />
        </div>

        <div class="bp-states">
          <div class="bp-state">
            <span class="bp-state__label">REPOS</span>
            <div class="bp-state-pair">
              <div class="bp-state-bg bp-state-bg--photo"><component :is="btn.component" /></div>
              <div class="bp-state-bg bp-state-bg--dark"><component :is="btn.component" /></div>
            </div>
          </div>
          <div class="bp-state">
            <span class="bp-state__label">HOVER (forcé)</span>
            <div class="bp-state-pair">
              <div class="bp-state-bg bp-state-bg--photo"><component :is="btn.componentHover" /></div>
              <div class="bp-state-bg bp-state-bg--dark"><component :is="btn.componentHover" /></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { h, defineComponent } from 'vue'

// Composant bouton générique réutilisable
function makeBtn(cls, hoverCls = cls + ' btn-hover') {
  return {
    normal: defineComponent({ render: () => h('a', { href: '#', class: ['bp-btn', cls] }, slots(cls)) }),
    hover:  defineComponent({ render: () => h('a', { href: '#', class: ['bp-btn', hoverCls] }, slots(cls)) }),
  }
}

// slots = contenu interne de chaque bouton
function slots(cls) {
  if (cls.startsWith('bv1')) return [
    h('span', { class: 'bv1__text' }, 'Nous contacter'),
    h('div', { class: 'bv1__icon' }, [arrowSvg()]),
  ]
  if (cls.startsWith('bv2')) return [
    h('span', { class: 'bv2__text' }, 'Nous contacter'),
    h('div', { class: 'bv2__icon' }, [arrowSvg()]),
  ]
  if (cls.startsWith('bv3')) return [
    h('span', { class: 'bv3__text' }, 'Nous contacter'),
    h('div', { class: 'bv3__icon' }, [arrowSvg()]),
  ]
  if (cls.startsWith('bv4')) return [
    h('span', { class: 'bv4__text' }, 'Nous contacter'),
    h('div', { class: 'bv4__icon' }, [arrowSvg()]),
  ]
  if (cls.startsWith('bv5')) return [
    h('span', { class: 'bv5__text' }, 'Nous contacter'),
    h('div', { class: 'bv5__icon' }, [arrowSvg()]),
  ]
  if (cls.startsWith('bv6')) return [
    h('span', { class: 'bv6__text' }, 'Nous contacter'),
    h('div', { class: 'bv6__icon' }, [arrowSvg()]),
  ]
  return []
}

function arrowSvg() {
  return h('svg', { height: '18', width: '18', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, [
    h('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
    h('path', { d: 'M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z', fill: 'currentColor' }),
  ])
}

const variations = [
  {
    id: 1,
    name: 'Gold plein + icône noir arrondi',
    desc: 'Le concept original adapté : fond gold, texte noir, icône sombre à droite qui s\'étend au hover. Radius 0.9em comme la source. Direct, premium, chaud.',
    component: defineComponent({ render: () => h('a', { href: '#', class: 'bp-btn bv1' }, slots('bv1')) }),
    componentHover: defineComponent({ render: () => h('a', { href: '#', class: 'bp-btn bv1 bv-hover' }, slots('bv1')) }),
  },
  {
    id: 2,
    name: 'Fond sombre + icône gold arrondi',
    desc: 'Inverse : fond noir opaque, texte gold, icône gold à droite. Au hover l\'icône gold envahit tout et le texte devient noir. Lisible sur n\'importe quelle photo.',
    component: defineComponent({ render: () => h('a', { href: '#', class: 'bp-btn bv2' }, slots('bv2')) }),
    componentHover: defineComponent({ render: () => h('a', { href: '#', class: 'bp-btn bv2 bv-hover' }, slots('bv2')) }),
  },
  {
    id: 3,
    name: 'Outline gold + icône contour arrondi',
    desc: 'Transparent avec border gold, texte gold. Icône en outline gold. Au hover le fond gold se remplit et l\'icône devient sombre. Élégant, sobre, haut de gamme.',
    component: defineComponent({ render: () => h('a', { href: '#', class: 'bp-btn bv3' }, slots('bv3')) }),
    componentHover: defineComponent({ render: () => h('a', { href: '#', class: 'bp-btn bv3 bv-hover' }, slots('bv3')) }),
  },
  {
    id: 4,
    name: 'Fond foncé semi-transparent + blur + icône',
    desc: 'Backdrop-filter blur — le fond s\'adapte à l\'image dessous. Border gold fine. Icône gold arrondi. Très propre sur photo, moderne.',
    component: defineComponent({ render: () => h('a', { href: '#', class: 'bp-btn bv4' }, slots('bv4')) }),
    componentHover: defineComponent({ render: () => h('a', { href: '#', class: 'bp-btn bv4 bv-hover' }, slots('bv4')) }),
  },
  {
    id: 5,
    name: 'Split : moitié sombre / moitié gold',
    desc: 'Le bouton est coupé en deux : gauche noir avec texte gold, droite gold avec icône sombre. Au hover la partie gold envahit tout. Très signature, unique.',
    component: defineComponent({ render: () => h('a', { href: '#', class: 'bp-btn bv5' }, slots('bv5')) }),
    componentHover: defineComponent({ render: () => h('a', { href: '#', class: 'bp-btn bv5 bv-hover' }, slots('bv5')) }),
  },
  {
    id: 6,
    name: 'Fond noir + icône pill gold séparé',
    desc: 'Texte à gauche sur fond noir, et à droite une petite pill gold indépendante avec juste la flèche. Deux éléments distincts mais solidaires. Effet badge accréditation.',
    component: defineComponent({ render: () => h('a', { href: '#', class: 'bp-btn bv6' }, slots('bv6')) }),
    componentHover: defineComponent({ render: () => h('a', { href: '#', class: 'bp-btn bv6 bv-hover' }, slots('bv6')) }),
  },
]
</script>

<style>
/* ── Shared ── */
.bp-btn {
  text-decoration: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  font-family: 'Oswald', sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: none;
  position: relative;
  overflow: hidden;
}

/* ── V1 : Gold plein + icône sombre ── */
.bv1 {
  background: #C9A260;
  color: #080808;
  padding: 0.35em 0.35em 0.35em 1.2em;
  height: 2.8em;
  padding-right: 3.3em;
  border-radius: 0.9em;
  box-shadow: inset 0 0 1.6em -0.6em rgba(100, 70, 10, 0.5);
}
.bv1__text { position: relative; z-index: 1; }
.bv1__icon {
  background: rgba(8,8,8,0.85);
  color: #C9A260;
  position: absolute;
  right: 0.3em;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2em;
  width: 2.2em;
  border-radius: 0.7em;
  transition: width 0.3s cubic-bezier(0.25,0.46,0.45,0.94);
}
.bv1__icon svg { width: 1em; transition: transform 0.3s; flex-shrink: 0; }
.bv1.bv-hover .bv1__icon,
.bp-btn.bv1:hover .bv1__icon { width: calc(100% - 0.6em); }
.bv1.bv-hover .bv1__icon svg,
.bp-btn.bv1:hover .bv1__icon svg { transform: translateX(0.1em); }

/* ── V2 : Fond noir + icône gold ── */
.bv2 {
  background: rgba(8,8,8,0.92);
  color: #C9A260;
  padding: 0.35em 0.35em 0.35em 1.2em;
  height: 2.8em;
  padding-right: 3.3em;
  border-radius: 0.9em;
  box-shadow: inset 0 0 1.6em -0.6em rgba(201,162,96,0.25);
}
.bv2__text { position: relative; z-index: 1; transition: color 0.3s; }
.bv2__icon {
  background: #C9A260;
  color: #080808;
  position: absolute;
  right: 0.3em;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2em;
  width: 2.2em;
  border-radius: 0.7em;
  box-shadow: 0.1em 0.1em 0.6em 0.2em rgba(201,162,96,0.2);
  transition: width 0.3s cubic-bezier(0.25,0.46,0.45,0.94);
}
.bv2__icon svg { width: 1em; transition: transform 0.3s; flex-shrink: 0; }
.bv2.bv-hover .bv2__icon,
.bp-btn.bv2:hover .bv2__icon { width: calc(100% - 0.6em); }
.bv2.bv-hover .bv2__text,
.bp-btn.bv2:hover .bv2__text { color: #080808; }
.bv2.bv-hover .bv2__icon svg,
.bp-btn.bv2:hover .bv2__icon svg { transform: translateX(0.1em); }

/* ── V3 : Outline gold ── */
.bv3 {
  background: transparent;
  color: #C9A260;
  padding: 0.35em 0.35em 0.35em 1.2em;
  height: 2.8em;
  padding-right: 3.3em;
  border-radius: 0.9em;
  border: 1px solid rgba(201,162,96,0.6);
}
.bv3__text { position: relative; z-index: 1; transition: color 0.3s; }
.bv3__icon {
  background: transparent;
  color: #C9A260;
  border: 1px solid rgba(201,162,96,0.4);
  position: absolute;
  right: 0.3em;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2em;
  width: 2.2em;
  border-radius: 0.7em;
  transition: width 0.3s cubic-bezier(0.25,0.46,0.45,0.94), background 0.3s;
}
.bv3__icon svg { width: 1em; transition: transform 0.3s; flex-shrink: 0; }
.bv3.bv-hover .bv3__icon,
.bp-btn.bv3:hover .bv3__icon {
  width: calc(100% - 0.6em);
  background: #C9A260;
  border-color: #C9A260;
}
.bv3.bv-hover .bv3__text,
.bp-btn.bv3:hover .bv3__text { color: #080808; }
.bv3.bv-hover .bv3__icon svg,
.bp-btn.bv3:hover .bv3__icon svg {
  transform: translateX(0.1em);
  color: #080808;
}

/* ── V4 : Blur + semi-transparent ── */
.bv4 {
  background: rgba(8,8,8,0.55);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #C9A260;
  padding: 0.35em 0.35em 0.35em 1.2em;
  height: 2.8em;
  padding-right: 3.3em;
  border-radius: 0.9em;
  border: 1px solid rgba(201,162,96,0.3);
}
.bv4__text { position: relative; z-index: 1; transition: color 0.3s; }
.bv4__icon {
  background: #C9A260;
  color: #080808;
  position: absolute;
  right: 0.3em;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2em;
  width: 2.2em;
  border-radius: 0.7em;
  transition: width 0.3s cubic-bezier(0.25,0.46,0.45,0.94);
}
.bv4__icon svg { width: 1em; transition: transform 0.3s; flex-shrink: 0; }
.bv4.bv-hover .bv4__icon,
.bp-btn.bv4:hover .bv4__icon { width: calc(100% - 0.6em); }
.bv4.bv-hover .bv4__text,
.bp-btn.bv4:hover .bv4__text { color: #080808; }
.bv4.bv-hover .bv4__icon svg,
.bp-btn.bv4:hover .bv4__icon svg { transform: translateX(0.1em); }

/* ── V5 : Split sombre/gold ── */
.bv5 {
  background: rgba(8,8,8,0.92);
  color: #C9A260;
  padding: 0.35em 0.35em 0.35em 1.2em;
  height: 2.8em;
  padding-right: 3.3em;
  border-radius: 0.9em;
  border: 1px solid rgba(201,162,96,0.2);
  transition: color 0.3s;
}
.bv5__text { position: relative; z-index: 1; transition: color 0.3s; }
.bv5__icon {
  background: #C9A260;
  color: #080808;
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 3em;
  border-radius: 0 0.9em 0.9em 0;
  transition: width 0.3s cubic-bezier(0.25,0.46,0.45,0.94), border-radius 0.3s;
}
.bv5__icon svg { width: 1em; transition: transform 0.3s; flex-shrink: 0; }
.bv5.bv-hover .bv5__icon,
.bp-btn.bv5:hover .bv5__icon { width: 100%; border-radius: 0.9em; }
.bv5.bv-hover .bv5__text,
.bp-btn.bv5:hover .bv5__text { color: #080808; position: relative; z-index: 1; }
.bv5.bv-hover .bv5__icon svg,
.bp-btn.bv5:hover .bv5__icon svg { transform: translateX(0.1em); }

/* ── V6 : Fond noir + pill séparée ── */
.bv6 {
  background: rgba(8,8,8,0.92);
  color: #C9A260;
  padding: 0.35em 0.35em 0.35em 1.2em;
  height: 2.8em;
  padding-right: 3.3em;
  border-radius: 0.9em;
  gap: 0;
}
.bv6__text { position: relative; z-index: 1; transition: color 0.3s; }
.bv6__icon {
  background: #C9A260;
  color: #080808;
  position: absolute;
  right: 0.3em;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2em;
  width: 2.2em;
  border-radius: 50%;
  transition: width 0.3s cubic-bezier(0.25,0.46,0.45,0.94), border-radius 0.3s;
  box-shadow: 0 0 0 3px rgba(201,162,96,0.15);
}
.bv6__icon svg { width: 1em; transition: transform 0.3s; flex-shrink: 0; }
.bv6.bv-hover .bv6__icon,
.bp-btn.bv6:hover .bv6__icon {
  width: calc(100% - 0.6em);
  border-radius: 0.7em;
}
.bv6.bv-hover .bv6__text,
.bp-btn.bv6:hover .bv6__text { color: #080808; }
.bv6.bv-hover .bv6__icon svg,
.bp-btn.bv6:hover .bv6__icon svg { transform: translateX(0.1em); }
</style>

<style scoped>
.bp {
  background: #050505;
  min-height: 100vh;
  padding-top: 72px;
}
.bp-nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  background: #0a0a0a;
  border-bottom: 1px solid rgba(201,162,96,0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  height: 72px;
}
.bp-nav__title {
  font-family: 'Source Sans 3', sans-serif;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.25);
  flex-shrink: 0;
}
.bp-nav__pills { display: flex; gap: 8px; }
.bp-nav__pill {
  font-family: 'Source Sans 3', sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.08em;
  color: rgba(201,162,96,0.8);
  text-decoration: none;
  padding: 6px 14px;
  border: 1px solid rgba(201,162,96,0.2);
  transition: all 0.2s;
}
.bp-nav__pill:hover { background: rgba(201,162,96,0.08); }
.bp-nav__pill--home { color: rgba(255,255,255,0.35); border-color: rgba(255,255,255,0.1); }

.bp-block {
  padding: 72px 80px;
  border-top: 1px solid rgba(201,162,96,0.07);
}
.bp-desc {
  display: flex;
  align-items: flex-start;
  gap: 24px;
  margin-bottom: 48px;
}
.bp-desc__num {
  font-family: 'Oswald', sans-serif;
  font-size: 64px;
  font-weight: 700;
  color: rgba(201,162,96,0.1);
  line-height: 1;
  flex-shrink: 0;
  width: 60px;
}
.bp-desc__name {
  display: block;
  font-family: 'Oswald', sans-serif;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #C9A260;
  margin-bottom: 8px;
}
.bp-desc__text {
  font-family: 'Source Sans 3', sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: rgba(255,255,255,0.4);
  line-height: 1.7;
  max-width: 600px;
}
.bp-preview { display: flex; flex-direction: column; gap: 12px; }
.bp-context-label {
  font-family: 'Source Sans 3', sans-serif;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.18);
  margin-top: 12px;
}
.bp-navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  height: 72px;
}
.bp-navbar--photo {
  background-image: url('/src/assets/photos/alarme.jpg');
  background-size: cover;
  background-position: center top;
}
.bp-navbar--dark {
  background: #080808;
  border: 1px solid rgba(201,162,96,0.1);
}
.bp-navbar__logo {
  font-family: 'Oswald', sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: #ffffff;
  text-shadow: 0 1px 8px rgba(0,0,0,0.7);
}
.bp-navbar__links {
  display: flex;
  gap: 36px;
  font-family: 'Source Sans 3', sans-serif;
  font-size: 13px;
  color: rgba(255,255,255,0.6);
  letter-spacing: 0.04em;
  text-shadow: 0 1px 6px rgba(0,0,0,0.5);
}
.bp-states { display: flex; gap: 48px; margin-top: 20px; align-items: flex-start; }
.bp-state { display: flex; flex-direction: column; gap: 12px; }
.bp-state__label {
  font-family: 'Source Sans 3', sans-serif;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.2);
}
.bp-state-pair { display: flex; gap: 16px; }
.bp-state-bg {
  padding: 24px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bp-state-bg--photo {
  background-image: url('/src/assets/photos/alarme.jpg');
  background-size: cover;
  background-position: center;
}
.bp-state-bg--dark { background: #080808; }

@media (max-width: 768px) {
  .bp-block { padding: 48px 24px; }
  .bp-nav { padding: 0 20px; }
  .bp-nav__title { display: none; }
  .bp-navbar { padding: 0 20px; }
  .bp-navbar__links { display: none; }
  .bp-states { flex-wrap: wrap; }
}
</style>

<template>
  <section class="partenaires">
    <div class="partenaires__header">
      <div class="partenaires__header-left">
        <span class="partenaires__header-eyebrow">Références</span>
        <h2 class="partenaires__header-title">ILS NOUS CONFIENT LEURS SITES</h2>
      </div>
      <div class="partenaires__header-line"></div>
    </div>

    <div class="partenaires__stage">
      <div class="partenaires__items">
        <div
          class="partenaires__item"
          v-for="(logo, i) in [...logos, ...logos]"
          :key="i"
        >
          <div class="partenaires__card">
            <img :src="logo.src" :alt="logo.name" class="partenaires__logo" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ecdImg         from '../assets/clients/ecd.png'
import essecImg        from '../assets/clients/essec.png'
import finTeycheneImg  from '../assets/clients/financiere-teychene.jpg'
import jpmImg          from '../assets/clients/jpm-batiment.jpeg'
import lncImg          from '../assets/clients/lnc.png'
import storexImg       from '../assets/clients/storex.webp'
import teycheneImg     from '../assets/clients/teychene.png'
import nrConseilImg    from '../assets/clients/nr-conseil.png'
import pierrefiteImg   from '../assets/clients/pierrefite.jpeg'
import splImg          from '../assets/clients/spl.png'

const logos = [
  { name: 'ECD',                  src: ecdImg        },
  { name: 'ESSEC',                src: essecImg       },
  { name: 'Financière Teychené',  src: finTeycheneImg },
  { name: 'JPM Bâtiment',         src: jpmImg         },
  { name: 'LNC',                  src: lncImg         },
  { name: 'Storex',               src: storexImg      },
  { name: 'Teychené',             src: teycheneImg    },
  { name: 'NR Conseil',           src: nrConseilImg   },
  { name: 'Pierrefite',           src: pierrefiteImg  },
  { name: 'SPL',                  src: splImg         },
]
</script>

<style scoped>
/* ── SECTION ── */
.partenaires {
  background: var(--color-bg-2);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  padding: 64px 0;
  overflow: hidden;
}

/* ── HEADER ── */
.partenaires__header {
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 0 80px;
  margin-bottom: 52px;
}

.partenaires__header-left {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.partenaires__header-eyebrow {
  font-family: var(--font-body);
  font-size: 11px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-gold);
}

.partenaires__header-title {
  font-family: var(--font-display);
  font-size: clamp(24px, 2.5vw, 36px);
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-white);
  letter-spacing: 0.03em;
  line-height: 1;
  margin: 0;
}

.partenaires__header-line {
  flex: 1;
  height: 1px;
  background: var(--color-border);
}

/* ── CAROUSEL STAGE ── */
.partenaires__stage {
  overflow: hidden;
  /*
    mask-image crée un vrai fondu d'opacité sur les logos eux-mêmes
    (pas juste un overlay de couleur) — les 2 logos aux extrémités
    s'effacent progressivement vers l'extérieur.
  */
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    rgba(0,0,0,0.5) 8%,
    black 18%,
    black 82%,
    rgba(0,0,0,0.5) 92%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    rgba(0,0,0,0.5) 8%,
    black 18%,
    black 82%,
    rgba(0,0,0,0.5) 92%,
    transparent 100%
  );
}

/* ── SCROLLING STRIP ── */
.partenaires__items {
  display: flex;
  align-items: center;
  gap: 24px;
  width: max-content;
  animation: scroll 30s linear infinite;
}

.partenaires__items:hover {
  animation-play-state: paused;
}

/* ── SINGLE ITEM ── */
.partenaires__item {
  flex-shrink: 0;
  /* Chaque carte fait ~220px → 5 logos ≈ 5×220 + 4×24 = 1196px visibles */
  width: 220px;
}

.partenaires__card {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  background: var(--color-bg);
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 20px 28px;
  transition: background 0.3s ease, border-color 0.3s ease;
}

.partenaires__item:hover .partenaires__card {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(201, 162, 96, 0.2);
}

/* ── LOGO IMAGE ── */
.partenaires__logo {
  max-height: 52px;
  max-width: 160px;
  width: auto;
  height: auto;
  object-fit: contain;
  /* grayscale + faible opacité : unifie les logos colorés sur fond sombre
     sans casser les fonds blancs (pas de brightness invert) */
  filter: opacity(0.75);
  transition: filter 0.35s ease;
}

.partenaires__item:hover .partenaires__logo {
  filter: opacity(1);
}

/* ── ANIMATION ── */
@keyframes scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

/* ── RESPONSIVE ── */
@media (max-width: 768px) {
  .partenaires {
    padding: 48px 0;
  }
  .partenaires__header {
    padding: 0 24px;
    margin-bottom: 36px;
  }
  .partenaires__item {
    width: 160px;
  }
  .partenaires__card {
    height: 80px;
    padding: 16px 20px;
  }
  .partenaires__logo {
    max-height: 40px;
  }
}
</style>

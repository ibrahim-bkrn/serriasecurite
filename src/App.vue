<template>
  <router-view />
</template>

<script setup>
</script>

<style>
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --color-bg:         #080808;
  --color-bg-2:       #0F0F0F;
  --color-gold:       #C9A260;
  --color-gold-light: #E8C88A;
  --color-white:      #FFFFFF;
  --color-text:       #E8E8E8;
  --color-muted:      #888888;
  --color-border:     rgba(201, 162, 96, 0.15);

  --font-display:     'Oswald', sans-serif;
  --font-body:        'Source Sans 3', sans-serif;

  --transition:       0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

html {
  scroll-behavior: auto;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

/* Reveal animation utility */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }
.reveal-delay-4 { transition-delay: 0.4s; }
.reveal-delay-5 { transition-delay: 0.5s; }
.reveal-delay-6 { transition-delay: 0.6s; }
</style>

<template>
  <nav class="dnav">
    <router-link to="/" class="dnav__back">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8L10 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      Site actuel
    </router-link>
    <div class="dnav__sep"></div>
    <div class="dnav__label">Choisir un design :</div>
    <div class="dnav__links">
      <router-link to="/design/a" class="dnav__item" :class="{ active: $route.path === '/design/a' }">
        <span class="dnav__letter">A</span>
        <span class="dnav__name">Luxe Épuré</span>
      </router-link>
      <router-link to="/design/b" class="dnav__item" :class="{ active: $route.path === '/design/b' }">
        <span class="dnav__letter">B</span>
        <span class="dnav__name">Cinématique</span>
      </router-link>
      <router-link to="/design/c" class="dnav__item" :class="{ active: $route.path === '/design/c' }">
        <span class="dnav__letter">C</span>
        <span class="dnav__name">Impact</span>
      </router-link>
      <router-link to="/design/d" class="dnav__item" :class="{ active: $route.path === '/design/d' }">
        <span class="dnav__letter">D</span>
        <span class="dnav__name">Tech</span>
      </router-link>
      <router-link to="/design/e" class="dnav__item" :class="{ active: $route.path === '/design/e' }">
        <span class="dnav__letter">E</span>
        <span class="dnav__name">Editorial</span>
      </router-link>
    </div>
  </nav>
</template>

<style scoped>
.dnav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0 24px;
  height: 52px;
  background: rgba(8, 8, 8, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(201, 162, 96, 0.2);
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
}

.dnav__back {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #888;
  text-decoration: none;
  letter-spacing: 0.05em;
  transition: color 0.2s;
  white-space: nowrap;
  flex-shrink: 0;
}
.dnav__back:hover { color: #C9A260; }

.dnav__sep {
  width: 1px;
  height: 20px;
  background: rgba(255,255,255,0.1);
  flex-shrink: 0;
}

.dnav__label {
  color: #555;
  white-space: nowrap;
  flex-shrink: 0;
  letter-spacing: 0.05em;
}

.dnav__links {
  display: flex;
  gap: 4px;
  overflow-x: auto;
}

.dnav__item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border: 1px solid rgba(255,255,255,0.08);
  text-decoration: none;
  color: #888;
  transition: all 0.2s;
  border-radius: 3px;
  white-space: nowrap;
}
.dnav__item:hover {
  color: #C9A260;
  border-color: rgba(201, 162, 96, 0.3);
}
.dnav__item.active {
  background: rgba(201, 162, 96, 0.12);
  border-color: rgba(201, 162, 96, 0.4);
  color: #C9A260;
}

.dnav__letter {
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.05em;
}
.dnav__name {
  font-size: 11px;
  letter-spacing: 0.04em;
}

@media (max-width: 640px) {
  .dnav__label { display: none; }
  .dnav__name { display: none; }
}
</style>

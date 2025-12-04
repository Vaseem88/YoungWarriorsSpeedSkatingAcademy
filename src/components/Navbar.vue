<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const open = ref(false)
const route = useRoute()

function toggle(){ open.value = !open.value }
</script>

<template>
  <header class="site-header" role="banner">
    <div class="container nav-wrap">
      <div class="brand">
        <router-link to="/" class="brand-link">
          <strong>Young Warriors</strong>
          <small>Speed Skating Academy</small>
        </router-link>
      </div>

      <nav :class="['main-nav', {open}]" aria-label="Main navigation">
        <router-link to="/" class="nav-item" :aria-current="route.name==='Home' ? 'page' : null">Home</router-link>
        <router-link to="/about" class="nav-item" :aria-current="route.name==='About' ? 'page' : null">About</router-link>
        <router-link to="/programs" class="nav-item" :aria-current="route.name==='Programs' ? 'page' : null">Programs</router-link>
        <router-link to="/locations" class="nav-item" :aria-current="route.name==='Locations' ? 'page' : null">Locations</router-link>
        <a class="nav-item" href="/#contact">Contact</a>
      </nav>

      <button class="hamburger" @click="toggle" aria-label="Toggle navigation">
        <i :class="open ? 'fa fa-times' : 'fa fa-bars'"></i>
      </button>
    </div>
  </header>
</template>

<style scoped>
.site-header{background:linear-gradient(90deg, rgba(11,11,11,.98), rgba(16,16,16,.95));color:var(--gold);position:sticky;top:0;z-index:60}
.nav-wrap{display:flex;align-items:center;justify-content:space-between;padding:.75rem 0}
.brand-link{color:var(--gold);display:flex;flex-direction:column;font-weight:700}
.brand-link small{font-weight:400;font-size:.7rem;opacity:.95}
.main-nav{display:flex;gap:1rem;align-items:center}
.main-nav .nav-item{color:var(--gold);padding:.35rem .5rem;border-radius:6px}
.main-nav .nav-item[aria-current='page']{background:rgba(212,175,55,0.12)}
.hamburger{display:none;background:transparent;border:0;color:var(--gold);font-size:1.25rem}

@media (max-width:768px){
  .main-nav{position:fixed;right:0;top:62px;background:white;flex-direction:column;padding:1rem;border-radius:8px;box-shadow:0 8px 30px rgba(0,0,0,0.08);transform:translateX(110%);transition:transform .25s ease}
  .main-nav.open{transform:translateX(0)}
  .hamburger{display:block}
}

</style>
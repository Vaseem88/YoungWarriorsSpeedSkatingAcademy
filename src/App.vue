<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const showMobileNav = ref(false)
</script>

<template>
  <div id="app-root">
    <Navbar />

    <main>
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <div :key="route.name">
            <component :is="Component"></component>
          </div>
        </transition>
      </router-view>
    </main>

    <Footer />
  </div>
</template>

<style>
:root {
  --black: #0b0b0b;
  --gold: #d4af37;
  --muted: #f4f4f6;
  --accent: #1f2937;
}
html {
  scroll-behavior: smooth;
}
body {
  font-family:
    Inter,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial;
  margin: 0;
  color: var(--black);
  background: var(--muted);
}
main {
  min-height: 70vh;
}
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.35s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Utility */
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;
}
</style>

<script setup>
import ProgramCard from '../components/ProgramCard.vue'

const programs = [
  { title: 'Tiny Warriors', desc: 'Intro to skating for ages 4-6', age: '4-6', schedule: 'Mon/Wed/Fri 4:00-5:00 PM', price: '₹1500/month' },
  { title: 'Junior Speed', desc: 'Skill & speed development for ages 7-12', age: '7-12', schedule: 'Tue/Thu 5:00-7:00 PM', price: '₹2200/month' },
  { title: 'Senior Squad', desc: 'Advanced training and competition prep', age: '13+', schedule: 'Mon-Fri 6:00-8:00 PM', price: '₹3500/month' },
  { title: 'Weekend Warriors', desc: 'Weekend classes for working families', age: 'All', schedule: 'Sat/Sun 9:00-11:00 AM', price: '₹1200/month' },
]
</script>

<template>
  <section class="container programs">
    <h2 id="programs">Programs</h2>
    <p class="muted">Programs designed for all ages and skill levels — structured, safe, and fun.</p>

    <div class="grid" style="margin-top:1rem;">
      <ProgramCard v-for="p in programs" :key="p.title" :title="p.title" :desc="p.desc" :age="p.age" :schedule="p.schedule" :price="p.price" />
    </div>
  </section>
</template>

<style scoped>
.programs .grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem}
@media (max-width:900px){.programs .grid{grid-template-columns:1fr}}
</style>

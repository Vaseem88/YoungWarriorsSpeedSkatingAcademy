<script setup>
</script>

<template>
  <section class="container about">
    <h2>About Young Warriors</h2>
    <div class="card">
      <p>Founded in Chennai, Young Warriors Speed Skating Academy is dedicated to training skaters of all ages. Our mission is to provide accessible, high-quality coaching, emphasize safety and foster competitive and recreational skating.</p>
    </div>

    <h3>Founders & Coaches</h3>
    <div class="grid staff">
      <div class="card">
        <img src="/public/coach1.jpg" alt="Coach 1" style="width:100%;height:160px;object-fit:cover;border-radius:8px" />
        <h4>R. Kumar</h4>
        <p>Head Coach — National level skater and coach with 12 years of experience.</p>
      </div>
      <div class="card">
        <img src="/public/coach2.jpg" alt="Coach 2" style="width:100%;height:160px;object-fit:cover;border-radius:8px" />
        <h4>S. Meera</h4>
        <p>Coach — Specialized in technique and youth development programs.</p>
      </div>
      <div class="card">
        <img src="/public/coach3.jpg" alt="Coach 3" style="width:100%;height:160px;object-fit:cover;border-radius:8px" />
        <h4>A. Patel</h4>
        <p>Coach — Strength & conditioning specialist for skaters.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.staff{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-top:1rem}
@media (max-width:900px){.staff{grid-template-columns:1fr}}
</style>

<script setup>
defineProps({
  title: String,
  desc: String,
  age: String,
  schedule: String,
  price: String,
})
</script>

<template>
  <article class="card program-card">
    <h4>{{ title }}</h4>
    <p class="muted">{{ desc }}</p>
    <ul>
      <li><strong>Age:</strong> {{ age }}</li>
      <li><strong>Schedule:</strong> {{ schedule }}</li>
      <li><strong>Price:</strong> {{ price }}</li>
    </ul>
    <div class="actions">
      <button class="btn">Enroll</button>
    </div>
  </article>
</template>

<style scoped>
.program-card h4{margin:0 0 .5rem}
.program-card .muted{color:#666;margin-bottom:.5rem}
.program-card ul{list-style:none;padding:0;margin:0 0 .75rem}
.program-card .actions{display:flex;justify-content:flex-end}
</style>

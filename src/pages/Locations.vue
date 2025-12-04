<script setup>
</script>

<template>
  <section class="container locations">
    <h2>Our Locations</h2>
    <div class="card">
      <h4>Chennai - Main Rink</h4>
      <p>No. 12, Race Course Road, Nungambakkam, Chennai 600034</p>
    </div>

    <div style="margin-top:1rem;">
      <h3>Find us on map</h3>
      <div class="map card" style="height:320px;overflow:hidden">
        <iframe width="100%" height="100%" style="border:0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15576.123456789!2d80.2170!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b0d8e0e0d1%3A0x123456789abcdef!2sChennai!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"></iframe>
      </div>
    </div>

    <div style="margin-top:1rem">
      <h3>Gallery</h3>
      <div class="grid">
        <img src="/public/rink1.jpg" alt="Rink 1" style="width:100%;height:160px;object-fit:cover;border-radius:8px" />
        <img src="/public/rink2.jpg" alt="Rink 2" style="width:100%;height:160px;object-fit:cover;border-radius:8px" />
        <img src="/public/rink3.jpg" alt="Rink 3" style="width:100%;height:160px;object-fit:cover;border-radius:8px" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.locations .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-top:.5rem}
@media (max-width:900px){.locations .grid{grid-template-columns:1fr}}
</style>

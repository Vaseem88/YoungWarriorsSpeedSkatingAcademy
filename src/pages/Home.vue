<script setup>
import ContactForm from '../components/ContactForm.vue'
import { onMounted } from 'vue'

onMounted(()=>{})
</script>

<template>
  <section class="hero" aria-hidden="false">
    <div class="hero-bg" role="img" aria-label="Skating banner">
      <!-- Background image via CSS -->
    </div>
    <div class="hero-content container">
      <h1>Young Warriors<br/><span>Speed Skating Academy</span></h1>
      <p class="quote">“Glide with courage — build strength, balance and confidence.”</p>
      <p><a class="btn" href="#programs">Explore Programs</a></p>
    </div>
  </section>

  <section class="container intro">
    <h2>About Our Academy</h2>
    <p class="card">Located in Chennai, Young Warriors nurtures young skaters with professional coaching, a focus on safety, and a passion for excellence. We combine fitness, skill, and sportsmanship for ages 4 and up.</p>
  </section>

  <section class="container benefits" id="benefits">
    <h2>Benefits of Skating</h2>
    <div class="grid">
      <div class="card">
        <h3><i class="fa fa-heart"></i> Health</h3>
        <p>Builds cardiovascular fitness, endurance and overall health.</p>
      </div>
      <div class="card">
        <h3><i class="fa fa-user"></i> Confidence</h3>
        <p>Perseverance and achievement boost self-esteem.</p>
      </div>
      <div class="card">
        <h3><i class="fa fa-balance-scale"></i> Balance</h3>
        <p>Enhances coordination and body awareness.</p>
      </div>
      <div class="card">
        <h3><i class="fa fa-shield"></i> Discipline</h3>
        <p>Structured practice develops focus and routine.</p>
      </div>
    </div>
  </section>

  <section class="container history">
    <h2>History of Skating</h2>
    <div class="card">
      <p>Skating in India has grown steadily; our academy began in 2015 to provide dedicated coaching and facilities, producing state-level competitors and community outreach programs.</p>
    </div>
  </section>

  <section class="container" id="contact">
    <h2>Contact Us</h2>
    <div class="grid contact-grid">
      <div>
        <ContactForm />
      </div>
      <aside class="card">
        <h4>Contact Details</h4>
        <p><strong>Email:</strong> info@youngwarriors.in</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>WhatsApp:</strong> +91 98765 43210</p>
        <p>
          <strong>Social:</strong>
          <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
          <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
        </p>
      </aside>
    </div>
  </section>

</template>

<style scoped>
.hero{position:relative;height:52vh;display:flex;align-items:center;color:var(--gold);margin-bottom:1.5rem}
.hero-bg{position:absolute;inset:0;background-image:url('/public/hero-skate.jpg');background-size:cover;background-position:center;filter:brightness(.45)}
.hero-content{position:relative;z-index:2;padding-top:2rem}
.hero-content h1{font-size:2rem;margin:0}
.hero-content .quote{font-style:italic;margin-top:.5rem}

.intro .card{padding:1rem}
.benefits .grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;margin-top:1rem}
.history .card{padding:1rem;margin-top:1rem}
.contact-grid{grid-template-columns:2fr 1fr;gap:1rem}

@media (max-width:900px){.benefits .grid{grid-template-columns:repeat(2,1fr)}.contact-grid{grid-template-columns:1fr}}

</style>

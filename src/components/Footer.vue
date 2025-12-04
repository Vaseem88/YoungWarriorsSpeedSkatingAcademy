<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <h3>Young Warriors Speed Skating Academy</h3>
        <p>Chennai, India • Inspiring young skaters since 2015</p>
        <p>
          <strong>Email:</strong> <a href="mailto:info@youngwarriors.in">info@youngwarriors.in</a><br>
          <strong>Phone:</strong> <a href="tel:+919876543210">+91 98765 43210</a>
        </p>
      </div>

      <div>
        <h4>Social</h4>
        <p class="social">
          <a href="#" aria-label="Facebook"><i class="fab fa-facebook fa-lg"></i></a>
          <a href="#" aria-label="Instagram"><i class="fab fa-instagram fa-lg"></i></a>
          <a href="#" aria-label="YouTube"><i class="fab fa-youtube fa-lg"></i></a>
        </p>
      </div>

      <div>
        <h4>Address</h4>
        <address>
          No. 12, Race Course Road<br>
          Nungambakkam, Chennai 600034
        </address>
      </div>
    </div>

    <div class="copyright">
      © {{ new Date().getFullYear() }} Young Warriors Speed Skating Academy. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.site-footer{background:var(--black);color:var(--gold);padding:2rem 0;margin-top:2rem}
.footer-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:1.25rem}
.social a{margin-right:.5rem;color:var(--gold)}
.copyright{text-align:center;padding-top:1rem;color:rgba(212,175,55,0.85)}

@media (max-width:768px){.footer-grid{grid-template-columns:1fr;gap:.75rem}}
</style>

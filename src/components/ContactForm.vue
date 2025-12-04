<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')
const errors = ref({})
const success = ref('')

function validate(){
  errors.value = {}
  if(!name.value) errors.value.name = 'Name is required'
  if(!email.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) errors.value.email = 'Valid email required'
  if(!phone.value || phone.value.length < 7) errors.value.phone = 'Valid phone required'
  if(!message.value) errors.value.message = 'Message required'
  return Object.keys(errors.value).length === 0
}

function submitForm(){
  if(!validate()) return
  // Placeholder: in real app, send to API
  success.value = 'Thanks! We received your message. We will contact you soon.'
  name.value = email.value = phone.value = message.value = ''
}
</script>

<template>
  <form class="card contact-form" @submit.prevent="submitForm" aria-labelledby="contact-heading">
    <h3 id="contact-heading">Join / Enquire</h3>

    <label>
      <div>Name</div>
      <input v-model="name" type="text" placeholder="Your full name" />
      <small class="err" v-if="errors.name">{{ errors.name }}</small>
    </label>

    <label>
      <div>Email</div>
      <input v-model="email" type="email" placeholder="name@example.com" />
      <small class="err" v-if="errors.email">{{ errors.email }}</small>
    </label>

    <label>
      <div>Phone</div>
      <input v-model="phone" type="tel" placeholder="+91 9xxxx xxxxx" />
      <small class="err" v-if="errors.phone">{{ errors.phone }}</small>
    </label>

    <label>
      <div>Message</div>
      <textarea v-model="message" rows="4" placeholder="Tell us about your interest..."></textarea>
      <small class="err" v-if="errors.message">{{ errors.message }}</small>
    </label>

    <button class="btn" type="submit">Submit</button>

    <p class="success" v-if="success">{{ success }}</p>
  </form>
</template>

<style scoped>
.contact-form label{display:block;margin-bottom:.75rem}
.contact-form input, .contact-form textarea{width:100%;padding:.6rem;border-radius:8px;border:1px solid #e6e6e9}
.contact-form .err{color:#d23a3a;font-size:.85rem}
.contact-form .success{color:green;margin-top:.5rem}
</style>

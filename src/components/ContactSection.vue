<script setup>
import { profile } from '../data/profile'
</script>

<template>
  <section id="contact" class="section wrap contact">
    <h2>Let's talk</h2>
    <p class="lead">Hiring for a backend or full stack role? Email is the quickest way to reach me.</p>
    <p><a class="big" :href="`mailto:${profile.email}`">{{ profile.email }}</a></p>
    <p class="muted">
      {{ profile.phone }}
      <template v-for="l in profile.links" :key="l.href"> &nbsp;/&nbsp; <a :href="l.href" target="_blank" rel="noopener">{{ l.label }}</a></template>
    </p>
  </section>
  <footer class="wrap foot muted">&copy; {{ new Date().getFullYear() }} {{ profile.name }}</footer>
</template>

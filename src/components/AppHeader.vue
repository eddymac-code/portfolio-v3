<script setup>
import { ref } from 'vue'
import { profile } from '../data/profile'

const theme = ref(document.documentElement.dataset.theme || 'light')
function toggle() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  document.documentElement.dataset.theme = theme.value
  try { localStorage.setItem('theme', theme.value) } catch (e) {}
}
</script>

<template>
  <header class="header">
    <div class="wrap header-in">
      <a class="brand" href="#top">{{ profile.name }}</a>
      <nav aria-label="Primary">
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
        <button class="theme" @click="toggle" :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`">
          <svg v-if="theme === 'dark'" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
          <svg v-else viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"/></svg>
        </button>
      </nav>
    </div>
  </header>
</template>

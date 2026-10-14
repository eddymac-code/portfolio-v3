<script setup>
import { projects } from '../data/profile'
</script>

<template>
  <section id="projects" class="section wrap">
    <h2>Projects</h2>
    <ul class="projects">
      <li v-for="p in projects" :key="p.title">
        <h3>{{ p.title }}</h3>
        <div>
          <p>{{ p.description }}</p>
          <p class="stack muted">{{ p.stack.join(', ') }}</p>
          <p v-if="p.live || p.repo" class="plinks">
            <a v-if="p.live" :href="p.live" target="_blank" rel="noopener">Live site</a>
            <a v-if="p.repo" :href="p.repo" target="_blank" rel="noopener">Source</a>
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { skills } from '../data/profile'
</script>

<template>
  <section id="skills" class="section wrap">
    <h2>Skills</h2>
    <dl class="skills">
      <template v-for="s in skills" :key="s.group">
        <dt>{{ s.group }}</dt>
        <dd>{{ s.items }}</dd>
      </template>
    </dl>
  </section>
</template>

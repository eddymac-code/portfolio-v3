<script setup>
import { experience } from '../data/profile'
</script>

<template>
  <section id="experience" class="section wrap">
    <h2>Experience</h2>
    <ol class="timeline">
      <li v-for="job in experience" :key="job.company + job.period">
        <div class="when">
          <p>{{ job.period }}</p>
          <p v-if="job.where" class="muted">{{ job.where }}</p>
        </div>
        <div>
          <h3>{{ job.title }}, {{ job.company }}</h3>
          <ul>
            <li v-for="p in job.points" :key="p">{{ p }}</li>
          </ul>
        </div>
      </li>
    </ol>
  </section>
</template>

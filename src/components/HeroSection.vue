<script setup>
import { profile } from '../data/profile'
const initials = profile.name.split(' ').map((p) => p[0]).join('')
</script>

<template>
  <section id="top" class="hero wrap">
    <div class="hero-copy">
      <div class="who">
        <img v-if="profile.photo" :src="profile.photo" :alt="`Portrait of ${profile.name}`" class="avatar" width="56" height="56" />
        <span v-else class="avatar initials" aria-hidden="true">{{ initials }}</span>
        <p>{{ profile.role }}, {{ profile.location }}</p>
      </div>
      <h1>{{ profile.headline }}</h1>
      <p class="lead">{{ profile.intro }}</p>
      <p v-if="profile.available" class="status"><span class="dot" aria-hidden="true"></span>Open to new roles</p>
      <div class="actions">
        <a class="btn primary" href="#projects">View projects</a>
        <a class="btn" :href="profile.cv" download>Download CV</a>
      </div>
    </div>

    <figure class="panel" aria-label="Illustrative bank notification request and response">
      <figcaption>bank-notification.http</figcaption>
<pre><code><span class="l" style="--i:0"><b>POST</b> /v1/bank/notifications</span>
<span class="l" style="--i:1">{</span>
<span class="l" style="--i:2">  <i>"account"</i>:   <s>"****4821"</s>,</span>
<span class="l" style="--i:3">  <i>"amount"</i>:    <s>18500</s>,</span>
<span class="l" style="--i:4">  <i>"currency"</i>:  <s>"KES"</s>,</span>
<span class="l" style="--i:5">  <i>"reference"</i>: <s>"INV-20931"</s></span>
<span class="l" style="--i:6">}</span>
<span class="l ok" style="--i:8">200 OK   reconciled   under 200 ms</span></code></pre>
    </figure>
  </section>
</template>

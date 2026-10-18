<script setup lang="ts">
import SiteNav from './components/SiteNav.vue';
</script>

<template>
  <SiteNav />
  <main class="main-container">
    <router-view />
  </main>
</template>

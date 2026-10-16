<script setup lang="ts">
  import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
      <RouterLink to="/teams">Teams</RouterLink>
      <RouterLink to="/news">News</RouterLink>
    </nav>
  </header>
</template>
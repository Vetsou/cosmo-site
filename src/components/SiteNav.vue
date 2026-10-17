<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">
        {{ $t('nav.home') }}
      </RouterLink>
      <RouterLink to="/projects">
        {{ $t('nav.projects') }}
      </RouterLink>
      <RouterLink to="/teams">
        {{ $t('nav.teams') }}
      </RouterLink>
      <RouterLink to="/news">
        {{ $t('nav.news') }}
      </RouterLink>
    </nav>
  </header>
</template>

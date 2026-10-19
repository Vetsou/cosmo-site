<script setup lang="ts">
import { RouterLink } from 'vue-router';
import LocaleSwitcher from './LocaleSwitcher.vue';
</script>

<template>
  <header class="flex relative z-10 p-3 bg-[#00000026] items-center justify-between">
    <div class="h-8">
      <RouterLink to="/">
        <img
          class="h-full cursor-pointer"
          src="../assets/cosmo-log-nav.png"
          alt="Cosmo PK"
        >
      </RouterLink>
    </div>
    <nav class="flex gap-3 items-center text-sm">
      <RouterLink
        to="/"
        class="nav-link"
      >
        {{ $t('nav.home') }}
      </RouterLink>

      <RouterLink
        to="/projects"
        class="nav-link"
      >
        {{ $t('nav.projects') }}
      </RouterLink>

      <RouterLink
        to="/teams"
        class="nav-link"
      >
        {{ $t('nav.teams') }}
      </RouterLink>

      <RouterLink
        to="/news"
        class="nav-link"
      >
        {{ $t('nav.news') }}
      </RouterLink>

      <LocaleSwitcher class="ml-10" />
    </nav>
  </header>
</template>

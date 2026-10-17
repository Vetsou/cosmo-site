<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { SUPPORTED_LOCALES, type Locale } from '../locales';

import enFlag from '../assets/flags/en.svg';
import plFlag from '../assets/flags/pl.svg';

const flags: Record<Locale, string> = { en: enFlag, pl: plFlag };
const labels: Record<Locale, string> = { en: 'English', pl: 'Polski' };

const { locale } = useI18n();

const isOpen = ref(false);
const pickerRef = ref<HTMLElement | null>(null);

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

function selectLanguage(l: Locale) {
  locale.value = l;
  isOpen.value = false;
}

function onClickOutside(e: MouseEvent) {
  if (pickerRef.value && !pickerRef.value.contains(e.target as Node)) {
    isOpen.value = false;
  }
}

onMounted(() => document.addEventListener('click', onClickOutside));
onUnmounted(() => document.removeEventListener('click', onClickOutside));
</script>

<template>
  <div
    ref="pickerRef"
    class="relative flex select-none"
  >
    <div
      class="relative flex items-center justify-center p-1.25 rounded-sm cursor-pointer transition-colors duration-300"
      @click="toggleDropdown"
    >
      <img
        :src="flags[locale as Locale]"
        alt="langs"
        class="h-6 w-6 object-cover"
      >
    </div>

    <div
      class="absolute right-0 top-full z-100 w-37.5 overflow-hidden
      rounded-sm bg-white shadow-gray-400 shadow-sm transition-all duration-200"
      :class="isOpen
        ? 'visible translate-y-1.25 opacity-100'
        : 'invisible -translate-y-1.25 opacity-0'"
    >
      <ul class="m-0 list-none p-0">
        <li
          v-for="l in SUPPORTED_LOCALES"
          :key="l"
          class="flex cursor-pointer items-center px-3 py-2.5 transition-colors duration-200 hover:bg-[#f5f5f5]"
          @click="selectLanguage(l)"
        >
          <img
            :src="flags[l]"
            :alt="`${labels[l]} flag`"
            class="h-6 w-6 object-cover"
          >
          <span class="ml-2 text-sm text-gray-800">{{ labels[l] }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

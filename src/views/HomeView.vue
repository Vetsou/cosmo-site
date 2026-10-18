<script setup lang="ts">
import logoAnimated from '../assets/logo-animated.svg';

import fbIcon from '../assets/socials/fb.png';
import ghIcon from '../assets/socials/gh.png';
import igIcon from '../assets/socials/ig.png';
import xIcon from '../assets/socials/x.png';

import wiimLogo from '../assets/partners/wiim-logo.webp';
import luxonisLogo from '../assets/partners/lux-logo.webp';
import futureLabLogo from '../assets/partners/future-lab-logo.png';
import pkLogo from '../assets/partners/pk-logo.webp';
import botlandLogo from '../assets/partners/botland-logo.webp';

const socials = [
  { href: 'https://www.facebook.com/cosmopk.kn', icon: fbIcon },
  { href: 'https://github.com/grupacosmo', icon: ghIcon },
  { href: 'https://www.instagram.com/cosmopk_kn/', icon: igIcon },
  { href: 'https://twitter.com/pkcosmopk', icon: xIcon },
];

const partners = [
  { src: wiimLogo, link: 'https://it.pk.edu.pl/' },
  { src: luxonisLogo, link: 'https://www.luxonis.com/' },
  { src: futureLabLogo, link: 'https://futurelab.pk.edu.pl/' },
  { src: pkLogo, link: 'https://www.pk.edu.pl/' },
  { src: botlandLogo, link: 'https://botland.com.pl/' },
];
</script>

<template>
  <section class="flex flex-col py-25">
    <h1 class="text-5xl font-normal">
      COSMO PK
    </h1>

    <p class="mb-2 text-2xl">
      Studenckie koło naukowe Politechniki Krakowskiej
    </p>

    <div class="flex gap-5 select-none bg-black">
      <a
        v-for="social in socials"
        :key="social.href"
        :href="social.href"
        target="_blank"
        rel="noreferrer"
        class="inline-block transition-transform duration-500
          ease-in-out hover:scale-140"
      >
        <img
          :src="social.icon"
          class="h-5 w-5"
        >
      </a>
    </div>
  </section>

  <div>
    <section class="grid grid-cols-2 gap-8 p-3">
      <div>
        <h2 class="mb-4 text-2xl font-semibold">
          {{ $t('home.aboutus.title') }}
        </h2>
        <p class="text-justify">
          {{ $t('home.aboutus.text') }}
        </p>
      </div>
      <div>
        <img
          src="../assets/pages/home/about-us-1.webp"
          alt="..."
          class="block h-full w-full object-cover object-center pointer-events-none select-none"
        >
      </div>
    </section>

    <section>
      <h2 class="mb-4 text-2xl font-semibold">
        {{ $t('home.projects.title') }}
      </h2>
      <div>
        Images
      </div>
    </section>

    <section>
      <div class="my-18 flex justify-center gap-8 w-6/10 mx-auto">
        <img
          :src="logoAnimated"
          class="h-30 w-30 shrink-0 select-none"
        >
        <div>
          <h2 class="mb-2 text-2xl font-semibold">
            {{ $t('home.join.title') }}
          </h2>
          <p class="mb-2 text-sm">
            {{ $t('home.join.text') }}
          </p>
          <a
            href="https://forms.gle/TvgdyiFCgxRbrSQ48"
            target="_blank"
          >
            {{ $t('home.join.button') }}
          </a>
        </div>
      </div>
    </section>

    <section>
      <h2 class="mb-4 text-2xl font-semibold">
        {{ $t('home.partners.title') }}
      </h2>

      <div class="flex flex-wrap items-center justify-center gap-6">
        <div
          v-for="partner in partners"
          :key="partner.link"
        >
          <a
            :href="partner.link"
            target="_blank"
            rel="noreferrer"
            class="block transition-opacity duration-200 hover:opacity-80"
          >
            <img
              :src="partner.src"
              class="h-16 w-auto object-contain select-none"
            >
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

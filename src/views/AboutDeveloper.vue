<template>
  <div class="font-sans">
    <div
      class="px-4 prose max-w-none flex justify-end bg-gradient-to-br from-green-800 to-green-600"
    >
      <HeaderNav />
    </div>

    <div
      class="flex justify-center items-center min-h-[16rem] p-4 bg-gradient-to-br from-green-900 via-[30%] to-green-700"
    >
      <div class="prose text-white lg:prose-lg !max-w-max">
        <h1 class="text-white">Hi 👋 I'am Lakshan Madhushanka (LakM)</h1>
        <blockquote class="text-white prose lg:prose-lg">
          I develop high-quality web applications with passion, applying everything I've learned
          over the past 5+ years. Learn more about me
          <a href="https://lakm.lovestoblog.com/" target="_blank" class="text-white">here</a> on my
          personal site.
        </blockquote>
      </div>
    </div>
    <div
      class="mx-4 lg:mx-12 prose lg:prose-lg max-w-none min-h-[calc(100svh-256px-66px-64px)] flex flex-col justify-start my-8 lg:ml-12"
    >
      <div>
        <h2>Motivation</h2>
        <p>
          I've worked on many e-commerce and SaaS projects over the years. Most of them required two
          key reusable features: a commenting system and a review system. We often had to rely on
          paid third-party plugins because there were no suitable open-source solutions that covered
          both the front-end and back-end effectively. A few packages handled the back-end only.
          Frankly, building the back-end isn't that time-consuming thanks to Laravel's powerful
          capabilities. However, creating a polished, user-friendly front-end requires significant
          time, effort, and creativity. So, I decided to tackle this problem for myself—and for
          others. i'am a heavy user of open-souce technologies so I also wanted to give someting
          back to the community. I started with the commenting system. After a huge effort, I was
          able to release
          <a href="https://github.com/Lakshan-Madushanka/laravel-comments" target="_blank"
            >Commenter</a
          >
          to the community. With 400+ stars and over 5,000 downloads, it’s clear that the effort
          paid off.
          <a href="https://github.com/Lakshan-Madushanka/laravel-comments" target="_blank"
            >Commenter</a
          >
          is full open-source and actively maintained.
        </p>
        <p>
          Then I began developing a review system. Commenter was built with Livewire, which made it
          cumbersome to use outside Livewire-based projects. So, this time, I wanted to build
          something that works with any Laravel project—regardless of the technologies used. The
          plan was to make it open source from the start, but I ended up spending far more time and
          effort than I had anticipated. I had to sacrifice a lot of my personal and professional
          work to get it done. Because of that, I made the difficult decision to release it as
          sponsorware. I hope you find it fair to charge a small fee for the effort involved—and I
          still hope to make it fully open source in the future, based on community feedback. I
          believe Reviewer is one of the most advanced review systems available for Laravel. I hope
          you enjoy using it and that it meets your needs. Reviewer will be actively maintained, and
          you're welcome to contact me with any questions at
          <a :href="'mailto:' + Contact.EMAIL" class="text-green-500">{{ Contact.EMAIL }}</a
          >.
        </p>
      </div>
      <div>
        <h2>Related Open-Source Projects</h2>
        <ul>
          <li><a href="https://github.com/Lakshan-Madushanka/laravel-comments">Commenter</a></li>
        </ul>
      </div>
      <div>
        <h2>Still doubting ?</h2>
        <p>
          You can browse my
          <a href="https://github.com/Lakshan-Madushanka" target="_blank">gitHub repo</a> track my
          contributions to open source.
        </p>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import FooterComponent from '@/components/FooterComponent.vue'
import HeaderNav from '@/components/home/sections/HeaderNav.vue'
import { useMetaTags } from '@/composables/useMetaTags'
import { Contact } from '@/enums/Contact'

useMetaTags({
  title: '@developer',
  description: 'About the developer'
})
</script>

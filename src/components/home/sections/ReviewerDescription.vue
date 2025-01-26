<template>
  <SectionComponent class="flex flex-col items-start justify-center">
    <template #header>Complete Review System </template>
    <template #content>
      <p class="!mb-0">
        TrueReviewer is a powerful review system featuring five thoughtfully crafted components
        designed to captivate users while maintaining a clean, intuitive interface. Each component
        is designed to make a visual impact without being overbearing, ensuring a seamless user
        experience. With the flexibility to integrate and utilize components independently,
        TrueReviewer effortlessly adapts to your application’s unique requirements.
      </p>
      <p>Did you know ?</p>
      <blockquote
        class="!mt-2 text-base"
        cite="https://www.businesswire.com/news/home/20241009362692/en/New-Survey-Reveals-the-Strong-Influence-of-Online-Reviews-on-Consumer-Decision-Making#:~:text=According%20to%20the%20findings%2C%2054,to%20be%20%E2%80%9Cmostly%E2%80%9D%20trustworthy."
      >
        <span
          >54% of consumers are putting their trust in online reviews first, outweighing the
          opinions of friends and family (24%), company claims (18%), social media influencers (2%),
          and media reviews (2%). Notably, 77% of respondents stated that they find online reviews
          to be “mostly” trustworthy.
        </span>
        <a
          class="flex justify-end font-normal text-xs mt-2"
          href="https://www.businesswire.com/news/home/20241009362692/en/New-Survey-Reveals-the-Strong-Influence-of-Online-Reviews-on-Consumer-Decision-Making#:~:text=According%20to%20the%20findings%2C%2054,to%20be%20%E2%80%9Cmostly%E2%80%9D%20trustworthy."
          >businesswire</a
        >
      </blockquote>
    </template>
  </SectionComponent>
</template>

<script setup lang="ts">
import SectionComponent from '@/components/SectionComponent.vue'
</script>

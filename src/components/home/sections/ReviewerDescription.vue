<template>
  <SectionComponent class="flex flex-col items-start justify-center">
    <template #header>The Complete Product Review Package </template>
    <template #content>
      <p class="!mb-0">
        TrueReviewer is a powerful review and rating system featuring five thoughtfully crafted
        components designed to captivate users while maintaining a clean, intuitive interface. Each
        component is designed to make a visual impact without being overbearing, ensuring a seamless
        user experience. With the flexibility to integrate and utilize components independently,
        TrueReviewer effortlessly adapts to your application’s unique requirements.
      </p>
      <p class="font-bold">Did you know ?</p>
      <blockquote
        class="!mt-2 text-sm lg:text-base font-normal"
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

      <div class="flex items-center justify-center w-full">
        <v-carousel
          class="lg:w-[75%] border rounded-xl p-4 bg-gray-100"
          :cycle="true"
          :interval="3000"
        >
          <v-carousel-item
            class="w-full"
            v-for="slide in images"
            :key="slide"
            :src="slide"
            alt="media gallery"
            cover
          ></v-carousel-item>
        </v-carousel>
      </div>
    </template>
  </SectionComponent>
</template>

<script setup lang="ts">
import SectionComponent from '@/components/SectionComponent.vue'
import img1 from '@/assets/img/reviewer/cuarousal/1.jpeg'
import img2 from '@/assets/img/reviewer/cuarousal/2.jpeg'
import img3 from '@/assets/img/reviewer/cuarousal/3.jpeg'
import img4 from '@/assets/img/reviewer/cuarousal/4.jpeg'
import img5 from '@/assets/img/reviewer/cuarousal/5.jpeg'
import img6 from '@/assets/img/reviewer/cuarousal/6.jpeg'
import img7 from '@/assets/img/reviewer/media_gallery/2.jpeg'

const images = [img1, img2, img3, img4, img5, img6, img7]
</script>

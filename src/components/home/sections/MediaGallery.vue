<template>
  <SectionComponent id="media__gallery" class="flex flex-col items-start justify-center">
    <template #header>{{ rcs.title() }}</template>
    <template #content>
      <p>{{ rcs.description() }}</p>

      <Carousel
        v-bind="carouselConfig"
        class="lg:w-[75%] border rounded p-4 bg-gradient-to-br from-green-400/10 to-green-500/80"
      >
        <Slide v-for="slide in images" :key="slide">
          <img :src="slide" alt="media gallery" class="object-contain w-full !m-0 lg:h-[70vh]" />
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </template>
  </SectionComponent>
</template>

<script setup lang="ts">
import SectionComponent from '@/components/SectionComponent.vue'
import { ReviewerComponent } from '@/enums/ReviewerComponent'
import { ReviewerComponentService } from '@/services/ReviewerComponentService'
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import img1 from '@/assets/img/reviewer/media_gallery/1.jpeg'
import img2 from '@/assets/img/reviewer/media_gallery/2.jpeg'
import img3 from '@/assets/img/reviewer/media_gallery/3.jpeg'
import img4 from '@/assets/img/reviewer/media_gallery/4.jpeg'

const rcs = new ReviewerComponentService(ReviewerComponent.MEDIA_GALLERY)

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay: 4000,
  pauseAutoplayOnHover: true
}

const images = [img1, img2, img3, img4]
</script>

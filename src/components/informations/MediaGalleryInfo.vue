<template>
  <SectionComponent id="media__gallery" class="flex flex-col items-start justify-center">
    <template #header>{{ rcs.title() }}</template>
    <template #content>
      <p>{{ rcs.description() }}</p>

      <v-carousel
        class="lg:w-[75%] border rounded p-4 bg-gradient-to-br from-[oklch(from_var(--secondary-bg-color)_l_c_h_/_10%)] to-[oklch(from_var(--primary-bg-color)_l_c_h_/_70%)]"
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

      <!--      <Carousel
        v-bind="carouselConfig"
        class="lg:w-[75%] border rounded p-4 bg-gradient-to-br from-[oklch(from_var(&#45;&#45;secondary-bg-color)_l_c_h_/_10%)] to-[oklch(from_var(&#45;&#45;primary-bg-color)_l_c_h_/_70%)]"
      >
        <Slide v-for="slide in images" :key="slide">
          <img :src="slide" alt="media gallery" class="object-contain w-full !m-0 lg:h-[70vh]" />
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>-->
    </template>
  </SectionComponent>
</template>

<script setup lang="ts">
import SectionComponent from '@/components/SectionComponent.vue'
import { ReviewerComponent } from '@/enums/ReviewerComponent'
import { ReviewerComponentService } from '@/services/ReviewerComponentService'
import img1 from '@/assets/img/reviewer/media_gallery/1.jpeg'
import img2 from '@/assets/img/reviewer/media_gallery/2.jpeg'
import img3 from '@/assets/img/reviewer/media_gallery/3.jpeg'
import img4 from '@/assets/img/reviewer/media_gallery/4.jpeg'

const rcs = new ReviewerComponentService(ReviewerComponent.MEDIA_GALLERY)

const images = [img1, img2, img3, img4]
</script>

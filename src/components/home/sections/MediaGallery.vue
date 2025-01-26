<template>
  <SectionComponent id="media__gallery" class="flex flex-col items-start justify-center">
    <template #header>{{ rcs.title() }}</template>
    <template #content>
      <p>{{ rcs.description() }}</p>
      <div class="flex items-start gap-4 flex-wrap lg:flex-nowrap">
        <a
          class="cursor-pointer border rounded p-4 lg:w-[35%]"
          :href="MediaGalleryImgLg"
          target="_blank"
        >
          <picture>
            <source media="(min-width:1024px)" :srcset="MediaGalleryImgLg" />
            <source media="(min-width:0px)" :srcset="MediaGalleryImgMd" />
            <img :src="MediaGalleryImgLg" alt="Media gallery" />
          </picture>
        </a>
        <a
          class="cursor-pointer lg:w-[65%] object-cover border rounded !mt-0"
          :href="ReviewModalImgLg"
          target="_blank"
        >
          <img :src="ReviewModalImgMd" alt="Media gallery modal" />
        </a>
      </div>
    </template>
  </SectionComponent>
</template>

<script setup lang="ts">
import SectionComponent from '@/components/SectionComponent.vue'
import { ReviewerComponent } from '@/enums/ReviewerComponent'
import { ReviewerComponentService } from '@/services/ReviewerComponentService'
import MediaGalleryImgMd from '@/assets/img/reviewer/md/3.png'
import MediaGalleryImgLg from '@/assets/img/reviewer/lg/3.png'
import ReviewModalImgLg from '@/assets/img/reviewer/lg/review_modal.png'
import ReviewModalImgMd from '@/assets/img/reviewer/review_modal.png'

const rcs = new ReviewerComponentService(ReviewerComponent.MEDIA_GALLERY)
</script>

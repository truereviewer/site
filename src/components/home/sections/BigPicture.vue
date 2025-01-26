<template>
  <SectionComponent>
    <template #header>{{ rcs.title() }}</template>
    <template #content>
      <div class="flex flex-flex gap-y-4 not-prose mb-8">
        <div class="shadow border">
          <a :href="WidgetImg" target="_blank">
            <img :src="WidgetImg" />
          </a>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-8 w-full">
        <div class="flex flex-col gap-y-4">
          <div class="lg:h-[36rem] rounded shadow border pt-2">
            <a :href="RatingDistributionImg" target="_blank">
              <picture>
                <source media="(min-width:1024px)" :srcset="RatingDistributionImg" />
                <source media="(min-width:768px)" :srcset="RatingDistributionImg" />
                <img :src="RatingDistributionImg" alt="Rating distribution" />
              </picture>
            </a>
          </div>
        </div>

        <div class="flex flex-col gap-y-4">
          <div class="lg:h-[36rem] rounded shadow border pt-2">
            <a :href="SubRatingDistributionImg" target="_blank">
              <picture>
                <source media="(min-width:1024px)" :srcset="SubRatingDistributionImg" />
                <source media="(min-width:768px)" :srcset="SubRatingDistributionImg" />
                <img :src="SubRatingDistributionImg" alt="Sub ratng distribution" />
              </picture>
            </a>
          </div>
        </div>

        <div class="flex flex-col gap-y-4 md:col-span-2 lg:col-span-1">
          <div class="lg:h-[36rem] rounded shadow border pt-2">
            <a :href="MediaGalleryImgLg" target="_blank">
              <picture>
                <source media="(min-width:1024px)" :srcset="MediaGalleryImgLg" />
                <source media="(min-width:768px)" :srcset="MediaGalleryImgMd" />
                <img :src="MediaGalleryImgSm" alt="Media gallery" />
              </picture>
            </a>
          </div>
        </div>
      </div>
      <div class="mt-8 w-full shadow border">
        <div class="border w-full rounded p-4">
          <a href="/src/assets/img/reviewer/lg/4-1.png" target="_blank">
            <picture class="!mb-0">
              <source media="(min-width:1024px)" srcset="/src/assets/img/reviewer/lg/4-1.png" />
              <source media="(min-width:768px)" srcset="/src/assets/img/reviewer/md/4-1.png" />
              <img
                class="object-fill min-[1366px]:object-none"
                src="/src/assets/img/reviewer/sm/4-1.png"
                alt="Review list"
              />
            </picture>
          </a>

          <a href="/src/assets/img/reviewer/lg/4-2.png" target="_blank">
            <img
              class="hidden lg:inline object-fill min-[1366px]:object-none !mt-0"
              src="/src/assets/img/reviewer/lg/4-2.png"
              alt="Review list"
            />
          </a>
          <a href="/src/assets/img/reviewer/md/4-2.png" target="_blank">
            <img
              class="hidden md:inline lg:hidden !mt-0"
              src="/src/assets/img/reviewer/md/4-2.png"
              alt="Review list"
            />
          </a>
          <a href="/src/assets/img/reviewer/sm/4-2.png" target="_blank">
            <img
              class="inline md:hidden !mt-0"
              src="/src/assets/img/reviewer/sm/4-2.png"
              alt="Review list"
            />
          </a>
        </div>
      </div>
    </template>
  </SectionComponent>
</template>

<script setup lang="ts">
import SectionComponent from '@/components/SectionComponent.vue'
import { ReviewerComponent } from '@/enums/ReviewerComponent'
import { ReviewerComponentService } from '@/services/ReviewerComponentService'
import WidgetImg from '@/assets/img/reviewer/widget.png'
import RatingDistributionImg from '@/assets/img/reviewer/lg/1.png'
import SubRatingDistributionImg from '@/assets/img/reviewer/lg/2.png'
import MediaGalleryImgMd from '@/assets/img/reviewer/md/3.png'
import MediaGalleryImgLg from '@/assets/img/reviewer/lg/3.png'
import MediaGalleryImgSm from '@/assets/img/reviewer/sm/3.png'

const rcs = new ReviewerComponentService(ReviewerComponent.BIG_PICTURE)
</script>

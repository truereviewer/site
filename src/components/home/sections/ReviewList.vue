<template>
  <SectionComponent id="component__list">
    <template #header>{{ rcs.title() }}</template>
    <template #content>
      <p>{{ rcs.description() }}</p>
      <div class="border rounded p-4">
        <a :href="ReviewListFiltersLg" target="_blank">
          <picture class="!mb-0">
            <source media="(min-width:1024px)" :srcset="ReviewListFiltersLg" />
            <source media="(min-width:768px)" :srcset="ReviewListFiltersMd" />
            <img
              class="object-fill min-[1366px]:object-none"
              :src="ReviewListFiltersSm"
              alt="Review list filters"
            />
          </picture>
        </a>

        <a :href="ReviewListLg" target="_blank">
          <img
            class="hidden lg:inline object-fill min-[1366px]:object-none !mt-0"
            :src="ReviewListLg"
            alt="Review list"
          />
        </a>
        <a :href="ReviewListMd" target="_blank">
          <img class="hidden md:inline lg:hidden !mt-0" :src="ReviewListMd" alt="Review list" />
        </a>
        <a :href="ReviewListSm" target="_blank">
          <img class="inline md:hidden !mt-0" :src="ReviewListSm" alt="Review list" />
        </a>
      </div>
    </template>
  </SectionComponent>
</template>

<script setup lang="ts">
import SectionComponent from '@/components/SectionComponent.vue'
import { ReviewerComponent } from '@/enums/ReviewerComponent'
import { ReviewerComponentService } from '@/services/ReviewerComponentService'
import ReviewListFiltersLg from '@/assets/img/reviewer/lg/4-1.png'
import ReviewListFiltersMd from '@/assets/img/reviewer/md/4-1.png'
import ReviewListFiltersSm from '@/assets/img/reviewer/sm/4-1.png'
import ReviewListLg from '@/assets/img/reviewer/lg/4-2.png'
import ReviewListMd from '@/assets/img/reviewer/md/4-1.png'
import ReviewListSm from '@/assets/img/reviewer/sm/4-1.png'

const rcs = new ReviewerComponentService(ReviewerComponent.REVIEW_LIST)
</script>

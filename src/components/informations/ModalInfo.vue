<template>
  <SectionComponent class="flex flex-col items-start justify-center" id="component__widget">
    <template #header>{{ rcs.title() }}</template>
    <template #content>
      <p>
        {{ rcs.description() }}
      </p>
      <a class="cursor-pointer" :href="FullModalImg" target="_blank">
        <picture class="border rounded p-4 inline-block">
          <source media="(min-width:1024px)" :srcset="FullModalImg" />
          <source media="(min-width:768px)" :srcset="SmallModalImg" />
          <img :src="SmallModalImg" alt="Filters" />
        </picture>
      </a>
    </template>
  </SectionComponent>
</template>

<script setup lang="ts">
import SectionComponent from '@/components/SectionComponent.vue'
import { ReviewerComponent } from '@/enums/ReviewerComponent'
import { ReviewerComponentService } from '@/services/ReviewerComponentService'
import FullModalImg from '@/assets/img/reviewer/media_gallery/2.jpeg'
import SmallModalImg from '@/assets/img/reviewer/review_modal_sm.png'

const rcs = new ReviewerComponentService(ReviewerComponent.Modal)
</script>

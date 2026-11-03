<template>
  <SectionComponent
    class="flex flex-col items-start justify-center"
    id="component__rating_distribution"
  >
    <template #header>{{ rcs.title() }}</template>
    <template #content>
      <p>{{ rcs.description() }}</p>
      <a class="cursor-pointer" :href="RatingDistributionImg" target="_blank">
        <picture class="border rounded p-4">
          <source media="(min-width:1024px)" :srcset="RatingDistributionImg" />
          <source media="(min-width:768px)" :srcset="RatingDistributionImg" />
          <img :src="RatingDistributionImg" alt="Rating distribution" />
        </picture>
      </a>
    </template>
  </SectionComponent>
</template>

<script setup lang="ts">
import SectionComponent from '@/components/SectionComponent.vue'
import { ReviewerComponent } from '@/enums/ReviewerComponent'
import { ReviewerComponentService } from '@/services/ReviewerComponentService'
import RatingDistributionImg from '@/assets/img/reviewer/lg/1.png'

const rcs = new ReviewerComponentService(ReviewerComponent.RATING_DISTRIBUTION)
</script>

<template>
  <SectionComponent id="component__sub_rating_distribution">
    <template #header>{{ rcs.title() }}</template>
    <template #content>
      <div v-html="rcs.description()" class="!mt-0"></div>

      <a class="cursor-pointer" :href="SubRatingDistributionImg" target="_blank">
        <picture class="border rounded p-4">
          <source media="(min-width:1024px)" :srcset="SubRatingDistributionImg" />
          <source media="(min-width:768px)" :srcset="SubRatingDistributionImg" />
          <img :src="SubRatingDistributionImg" alt="Sub ratng distribution" />
        </picture>
      </a>
    </template>
  </SectionComponent>
</template>

<script setup lang="ts">
import SectionComponent from '@/components/SectionComponent.vue'
import { ReviewerComponent } from '@/enums/ReviewerComponent'
import { ReviewerComponentService } from '@/services/ReviewerComponentService'
import SubRatingDistributionImg from '@/assets/img/reviewer/lg/2.png'

const rcs = new ReviewerComponentService(ReviewerComponent.SUB_RATING_DISTRIBUTION)
</script>

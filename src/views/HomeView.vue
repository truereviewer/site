<template>
  <div class="bg-gradient-to-r from-transparent to-green-100/[.2] font-sans">
    <div class="prose lg:prose-xl max-w-none overflow-hidden mb-8">
      <HeaderSection />
      <ReviewerDescription />
      <WidgetComponent />
      <RatingDistribution />
      <SubRatingDistribution />
      <ReviewList />
      <BigPicture />
      <SponserwareComponent />
    </div>
  </div>
</template>

<script setup lang="ts">
import BigPicture from '@/components/home/sections/BigPicture.vue'
import HeaderSection from '@/components/home/sections/HeaderSection.vue'
import RatingDistribution from '@/components/home/sections/RatingDistribution.vue'
import ReviewerDescription from '@/components/home/sections/ReviewerDescription.vue'
import ReviewList from '@/components/home/sections/ReviewList.vue'
import SponserwareComponent from '@/components/home/sections/SponserwareComponent.vue'
import SubRatingDistribution from '@/components/home/sections/SubRatingDistribution.vue'
import WidgetComponent from '@/components/home/sections/WidgetComponent.vue'

import { onMounted, reactive } from 'vue'

const showReviewComponents = reactive({ middle: false })

onMounted(() => {
  setTimeout(() => {
    showReviewComponents.middle = true
  }, 1500)
})
</script>

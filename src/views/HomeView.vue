<template>
  <main class="antialiased">
    <div class="prose lg:prose-xl max-w-none overflow-hidden">
      <HeaderSection />
      <DemoVideo />
      <ReviewerDescription />
      <FeaturesComponent />
      <WhyTrueReviewer />
      <ComponentsComponent />
      <WidgetComponent />
      <RatingDistribution />
      <SubRatingDistribution />
      <MediaGallery />
      <ReviewList />
      <BigPicture />
      <TechnologiesComponent />
      <SponserwareComponent />
      <FrequentlyAskedQuestions />
      <FooterComponent />
    </div>
    <ScrollTopButton />
  </main>
</template>

<script setup lang="ts">
import BigPicture from '@/components/home/sections/BigPicture.vue'
import HeaderSection from '@/components/home/sections/HeaderSection.vue'
import MediaGallery from '@/components/home/sections/MediaGallery.vue'
import RatingDistribution from '@/components/home/sections/RatingDistribution.vue'
import ReviewerDescription from '@/components/home/sections/ReviewerDescription.vue'
import ReviewList from '@/components/home/sections/ReviewList.vue'
import SponserwareComponent from '@/components/home/sections/SponserwareComponent.vue'
import SubRatingDistribution from '@/components/home/sections/SubRatingDistribution.vue'
import TechnologiesComponent from '@/components/home/sections/TechnologiesComponent.vue'
import WidgetComponent from '@/components/home/sections/WidgetComponent.vue'
import DemoVideo from '@/components/home/sections/DemoVideo.vue'
import FeaturesComponent from '@/components/home/sections/FeaturesComponent.vue'

import { onMounted, reactive } from 'vue'
import FrequentlyAskedQuestions from '@/components/home/sections/FrequentlyAskedQuestions.vue'
import ComponentsComponent from '@/components/home/sections/ComponentsComponent.vue'
import WhyTrueReviewer from '@/components/home/sections/WhyTrueReviewer.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { useMetaTags } from '@/composables/useMetaTags'
import ScrollTopButton from '@/components/ScrollTopButton.vue'

useMetaTags({ title: 'Home', description: 'Ideal review system for Laravel projects' })

const showReviewComponents = reactive({ middle: false })

onMounted(() => {
  setTimeout(() => {
    showReviewComponents.middle = true
  }, 1500)
})
</script>

<template>
  <main class="antialiased">
    <div class="prose lg:prose-lg xl:prose-xl max-w-none overflow-hidden">
      <HeaderSection />
      <DemoVideo />
      <ReviewerDescription />
      <FeaturesComponent />
      <WhyTrueReviewer />
      <AIComponent />
      <ComponentsComponent />
      <BigPicture />
      <TechnologiesComponent />
      <SponserwareComponent />
      <FrequentlyAskedQuestions />
      <FooterComponent />
    </div>
    <TopButtonNavigation />
  </main>
</template>

<script setup lang="ts">
import BigPicture from '@/components/home/sections/BigPicture.vue'
import HeaderSection from '@/components/home/sections/HeaderSection.vue'
import ReviewerDescription from '@/components/home/sections/ReviewerDescription.vue'
import SponserwareComponent from '@/components/home/sections/SponserwareComponent.vue'
import TechnologiesComponent from '@/components/home/sections/TechnologiesComponent.vue'
import DemoVideo from '@/components/home/sections/DemoVideo.vue'
import FeaturesComponent from '@/components/home/sections/FeaturesComponent.vue'

import FrequentlyAskedQuestions from '@/components/home/sections/FrequentlyAskedQuestions.vue'
import ComponentsComponent from '@/components/home/sections/ComponentsComponent.vue'
import WhyTrueReviewer from '@/components/home/sections/WhyTrueReviewer.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { useMetaTags } from '@/composables/useMetaTags'
import AIComponent from '@/components/home/sections/AIComponent.vue'
import TopButtonNavigation from '@/components/TopButtonNavigation.vue'

useMetaTags({ title: 'Home', description: 'Ideal review system for Laravel projects' })
</script>

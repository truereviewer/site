<template>
  <div class="max-w-none overflow-hidden font-serif text-lg antialiased documentation">
    <header
      class="relative px-6 bg-gradient-to-r from-green-600 via-green-600/60 via-[20%] to-green-600"
    >
      <div class="flex justify-end">
        <HeaderNav />
      </div>
    </header>
    <div class="flex">
      <SideBar />
      <main class="w-full xl:w-[75%] mt-4 space-y-8">
        <InstallationSection />
        <ComponentsSection />

        <!--Config-->
        <PublishConfigs />
        <ChangeTable />
        <DecimalRating />
        <SubRating />
        <MediaGallery />
        <ReviewPagination />
        <ReviewPermissions />
        <OtherOptions />

        <!--Theming-->
        <FrontendTechnologies />
        <PublishAssets />
        <BuildAssets />
        <CustomizeComponent />

        <AIComponent />

        <!--API-->
        <TraitComponent />

        <FooterComponent />

        <ScrollTopButton />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import ComponentsSection from '@/components/documentation/ComponentsSection.vue'
import ChangeTable from '@/components/documentation/config/ChangeTable.vue'
import DecimalRating from '@/components/documentation/config/DecimalRating.vue'
import PublishConfigs from '@/components/documentation/config/PublishConfigs.vue'
import SubRating from '@/components/documentation/config/SubRating.vue'
import InstallationSection from '@/components/documentation/InstallationSection.vue'
import SideBar from '@/components/documentation/SideBar.vue'
import BuildAssets from '@/components/documentation/theming/BuildAssets.vue'
import CustomizeComponent from '@/components/documentation/theming/customzation/CustomizeComponent.vue'
import FrontendTechnologies from '@/components/documentation/theming/FrontendTechnologies.vue'
import PublishAssets from '@/components/documentation/theming/PublishAssets.vue'
import HeaderNav from '@/components/home/sections/HeaderNav.vue'
import MediaGallery from '@/components/documentation/config/MediaGallery.vue'
import ReviewPagination from '@/components/documentation/config/ReviewPagination.vue'
import ReviewPermissions from '@/components/documentation/config/ReviewPermissions.vue'
import OtherOptions from '@/components/documentation/config/OtherOptions.vue'
import AIComponent from '@/components/documentation/AIComponent.vue'
import TraitComponent from '@/components/documentation/api/TraitComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { useMetaTags } from '@/composables/useMetaTags'
import ScrollTopButton from '@/components/ScrollTopButton.vue'

useMetaTags({
  title: 'Documentation',
  description: 'The documentation provides everything you need to know about TrueReviewer'
})
</script>

<style lang="css">
hr {
  margin: 2px 0 !important;
}
</style>

<template>
  <div class="max-w-none overflow-hidden font-serif text-lg antialiased documentation mb-8">
    <header
      class="relative p-6 bg-gradient-to-r from-green-600 via-green-600/60 via-[20%] to-green-600"
    >
      <div class="flex justify-end">
        <HeaderNav />
      </div>
    </header>
    <div class="flex">
      <SideBar />
      <main class="xl:w-[75%] my-4 space-y-8">
        <InstallationSection />
        <ComponentsSection />
        <FrontendTechnologies />
        <PublishAssets />
        <BuildAssets />
        <CustomizeComponent />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import ComponentsSection from '@/components/documentation/ComponentsSection.vue'
import InstallationSection from '@/components/documentation/InstallationSection.vue'
import SideBar from '@/components/documentation/SideBar.vue'
import BuildAssets from '@/components/documentation/theming/BuildAssets.vue'
import CustomizeComponent from '@/components/documentation/theming/customzation/CustomizeComponent.vue'
import FrontendTechnologies from '@/components/documentation/theming/FrontendTechnologies.vue'
import PublishAssets from '@/components/documentation/theming/PublishAssets.vue'
import HeaderNav from '@/components/home/sections/HeaderNav.vue'
</script>

<style lang="css">
hr {
  margin: 2px 0 !important;
}
</style>

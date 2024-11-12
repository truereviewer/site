<template>
  <div class="prose max-w-none overflow-hidden">
    <header
      class="relative p-6 bg-gradient-to-r from-green-600 via-green-600/60 via-[20%] to-green-600"
    >
      <div class="flex justify-end">
        <HeaderNav />
      </div>
    </header>
    <div class="flex">
      <SideBar />
      <main>
        <DocumentatonSection>
          <template #header>Installation</template>
          <template #content> <div>laks</div></template>
        </DocumentatonSection>
        <DocumentatonSection>
          <template #header>Installation</template>
          <template #content><div>content</div> </template>
        </DocumentatonSection>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import DocumentatonSection from '@/components/documentation/DocumentatonSection.vue'
import SideBar from '@/components/documentation/SideBar.vue'
import HeaderNav from '@/components/home/sections/HeaderNav.vue'
import SectionComponent from '@/components/SectionComponent.vue'
</script>

<style lang="css" scoped>
hr {
  margin: 2px 0 !important;
}
</style>

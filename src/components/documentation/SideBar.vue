<template>
  <aside @click="test" class="xl:w-[25%] text-base">
    <div :class="['absolute w-8 top-14 right-2', { 'opacity-0': show }]" @click="show = true">
      <img src="/src/assets/icons/menu.svg" alt="menu" />
    </div>
    <div class="fixed w-full sm:w-[75%] md:w-[50%] xl:w-[25%]">
      <nav
        :class="[
          'relative overflow-scroll w-full  top-0 right-0 z-50 xl:static bg-gradient-to-b from-white to-90% to-green-600/10 h-svh pb-12 transition-all',
          { '!w-0 opacity-0': !show }
        ]"
      >
        <div @click="show = false" class="flex justify-end p-2 !m-0 xl:hidden">
          <img class="w-6 !m-0" src="/src/assets/icons/cancel.svg" alt="Cancel" />
        </div>

        <div class="flex justify-left pl-8 py-8 text-wrap">
          <div class="space-y-6">
            <div class="flex flex-col">
              <a class="no-underline main-text-color font-bold">Getting Started </a>
              <ul class="mt-2 space-y-2">
                <li class="ml-2">
                  <a
                    :class="{ 'text-[var(--main-text-color)]': currentSection === '#installation' }"
                    href="#installation"
                    ><span v-if="currentSection === '#installation'" class="mr-1">#</span
                    ><span>Installation</span></a
                  >
                </li>
              </ul>
            </div>

            <div class="flex flex-col">
              <a class="no-underline main-text-color font-bold">Basics </a>
              <div class="mt-2">
                <div class="ml-2">
                  <a
                    :class="{ 'text-[var(--main-text-color)]': currentSection === '#components' }"
                    href="#components"
                    ><span v-if="currentSection === '#components'" class="mr-1">#</span
                    ><span>Componets</span></a
                  >
                </div>
                <ul class="ml-4 mt-2 space-y-2 text-sm">
                  <li>
                    <a
                      :class="{
                        'text-[var(--main-text-color)]': currentSection === '#components@widget'
                      }"
                      href="#components@widget"
                      ><span v-if="currentSection === '#components@widget'" class="mr-1">#</span
                      ><span>Widget</span></a
                    >
                  </li>
                  <li>
                    <a
                      :class="{
                        'text-[var(--main-text-color)]':
                          currentSection === '#components@ratingDistribution'
                      }"
                      href="#components@ratingDistribution"
                      ><span v-if="currentSection === '#components@ratingDistribution'" class="mr-1"
                        >#</span
                      ><span>Rating Distribution</span></a
                    >
                  </li>
                  <li>
                    <a
                      :class="{
                        'text-[var(--main-text-color)]':
                          currentSection === '#components@subRatingDistribution'
                      }"
                      href="#components@subRatingDistribution"
                      ><span
                        v-if="currentSection === '#components@subRatingDistribution'"
                        class="mr-1"
                        >#</span
                      ><span>Sub Rating Distribution</span></a
                    >
                  </li>

                  <li>
                    <a
                      :class="{
                        'text-[var(--main-text-color)]':
                          currentSection === '#components@mediaGallery'
                      }"
                      href="#components@mediaGallery"
                      ><span v-if="currentSection === '#components@mediaGallery'" class="mr-1"
                        >#</span
                      ><span>Media Gallery</span></a
                    >
                  </li>

                  <li>
                    <a
                      :class="{
                        'text-[var(--main-text-color)]': currentSection === '#components@reviewList'
                      }"
                      href="#components@reviewList"
                      ><span v-if="currentSection === '#components@reviewList'" class="mr-1">#</span
                      ><span>Review List</span></a
                    >
                  </li>

                  <li>
                    <a
                      :class="{
                        'text-[var(--main-text-color)]': currentSection === '#components@reviewer'
                      }"
                      href="#components@reviewer"
                      ><span v-if="currentSection === '#components@reviewer'" class="mr-1">#</span
                      ><span>Reviewer</span></a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex flex-col">
              <a class="no-underline main-text-color font-bold">Theming </a>
              <ul class="mt-2 space-y-2">
                <li class="ml-2">
                  <a
                    :class="{
                      'text-[var(--main-text-color)]': currentSection === '#theming@frontendtech'
                    }"
                    href="#theming@frontendtech"
                    ><span v-if="currentSection === '#theming@frontendtech'" class="mr-1">#</span
                    ><span>Frontend Technologies</span></a
                  >
                </li>

                <li class="ml-2">
                  <a
                    :class="{
                      'text-[var(--main-text-color)]': currentSection === '#theming@publishAssets'
                    }"
                    href="#theming@publishAssets"
                    ><span v-if="currentSection === '#theming@publishAssets'" class="mr-1">#</span
                    ><span>Publish Assets</span></a
                  >
                </li>

                <li class="ml-2">
                  <a
                    :class="{
                      'text-[var(--main-text-color)]': currentSection === '#theming@buildAssets'
                    }"
                    href="#theming@buildAssets"
                    ><span v-if="currentSection === '#theming@buildAssets'" class="mr-1">#</span
                    ><span>Build Assets</span></a
                  >
                </li>
              </ul>
              <div class="mt-2">
                <div class="ml-2">
                  <a
                    :class="{
                      'text-[var(--main-text-color)]': currentSection === '#customization'
                    }"
                    href="#customization"
                    ><span v-if="currentSection === '#customization'" class="mr-1">#</span
                    ><span>Customization</span></a
                  >
                </div>
                <ul class="ml-4 mt-2 space-y-2 text-sm">
                  <li>
                    <a
                      :class="{
                        'text-[var(--main-text-color)]':
                          currentSection === '#customization@components'
                      }"
                      href="#customization@components"
                      ><span v-if="currentSection === '#customization@components'" class="mr-1"
                        >#</span
                      ><span>Components</span></a
                    >
                  </li>
                  <li>
                    <a
                      :class="{
                        'text-[var(--main-text-color)]': currentSection === '#customization@presets'
                      }"
                      href="#customization@presets"
                      ><span v-if="currentSection === '#customization@presets'" class="mr-1">#</span
                      ><span>Presets</span></a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const show = ref<boolean>(false)

const currentSection = computed(() => {
  return route.hash
})

onMounted(() => {
  if (document.documentElement.clientWidth >= 1280) {
    show.value = true
  }
})

const test = () => {
  console.log(route.hash)
}
</script>

<style scoped>
a {
  text-decoration: none;
}

a:hover {
  color: var(--main-text-color);
}
</style>

<template>
  <aside
    @click="test"
    class="xl:w-[25%] text-base bg-gradient-to-r from-green-600 via-green-600/60 via-[20%] to-green-600"
  >
    <div
      v-if="!show"
      :class="['absolute w-8 top-18 right-2 z-[300]', { 'opacity-0': show }]"
      @click="show = true"
    >
      <img src="/src/assets/icons/menu.svg" alt="menu" />
    </div>
    <div class="fixed w-full z-[250] top-0 xl:top-auto sm:w-[75%] md:w-[50%] xl:w-[25%]">
      <nav
        :class="[
          'relative overflow-scroll w-full top-0 right-0 z-50 xl:static bg-gray-100 xl:bg-white h-svh pb-16 transition-all',
          { '!w-0 opacity-0': !show }
        ]"
      >
        <div v-if="show" @click="show = false" class="flex justify-end p-2 !m-0 xl:hidden">
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
                        'text-[var(--main-text-color)]': currentSection === '#components-widget'
                      }"
                      href="#components-widget"
                      ><span v-if="currentSection === '#components-widget'" class="mr-1">#</span
                      ><span>Widget</span></a
                    >
                  </li>
                  <li>
                    <a
                      :class="{
                        'text-[var(--main-text-color)]':
                          currentSection === '#components-ratingDistribution'
                      }"
                      href="#components-ratingDistribution"
                      ><span v-if="currentSection === '#components-ratingDistribution'" class="mr-1"
                        >#</span
                      ><span>Rating Distribution</span></a
                    >
                  </li>
                  <li>
                    <a
                      :class="{
                        'text-[var(--main-text-color)]':
                          currentSection === '#components-subRatingDistribution'
                      }"
                      href="#components-subRatingDistribution"
                      ><span
                        v-if="currentSection === '#components-subRatingDistribution'"
                        class="mr-1"
                        >#</span
                      ><span>Sub Rating Distribution</span></a
                    >
                  </li>

                  <li>
                    <a
                      :class="{
                        'text-[var(--main-text-color)]':
                          currentSection === '#components-mediaGallery'
                      }"
                      href="#components-mediaGallery"
                      ><span v-if="currentSection === '#components-mediaGallery'" class="mr-1"
                        >#</span
                      ><span>Media Gallery</span></a
                    >
                  </li>

                  <li>
                    <a
                      :class="{
                        'text-[var(--main-text-color)]': currentSection === '#components-reviewList'
                      }"
                      href="#components-reviewList"
                      ><span v-if="currentSection === '#components-reviewList'" class="mr-1">#</span
                      ><span>Review List</span></a
                    >
                  </li>

                  <li>
                    <a
                      :class="{
                        'text-[var(--main-text-color)]': currentSection === '#components-reviewer'
                      }"
                      href="#components-reviewer"
                      ><span v-if="currentSection === '#components-reviewer'" class="mr-1">#</span
                      ><span>Reviewer</span></a
                    >
                  </li>
                </ul>
              </div>
            </div>

            <div class="flex flex-col">
              <div class="ml-2">
                <a class="no-underline main-text-color font-bold">Config</a>
                <ul class="mt-2 space-y-2">
                  <li>
                    <a
                      :class="{
                        'text-[var(--main-text-color)]': currentSection === '#config-publish'
                      }"
                      href="#config-publish"
                      ><span v-if="currentSection === '#config-publish'" class="mr-1">#</span
                      ><span>Publish</span></a
                    >
                  </li>

                  <li>
                    <a
                      :class="{
                        'text-[var(--main-text-color)]': currentSection === '#config-table'
                      }"
                      href="#config-table"
                      ><span v-if="currentSection === '#config-table'" class="mr-1">#</span
                      ><span>Change table/model</span></a
                    >
                  </li>

                  <li>
                    <a
                      :class="{
                        'text-[var(--main-text-color)]': currentSection === '#config-decimalRating'
                      }"
                      href="#config-decimalRating"
                      ><span v-if="currentSection === '#config-decimalRating'" class="mr-1">#</span
                      ><span>Decimal Rating</span></a
                    >
                  </li>

                  <li>
                    <a
                      :class="{
                        'text-[var(--main-text-color)]': currentSection === '#config-subRating'
                      }"
                      href="#config-subRating"
                      ><span v-if="currentSection === '#config-subRating'" class="mr-1">#</span
                      ><span>Sub Rating Types</span></a
                    >
                  </li>

                  <li>
                    <a
                      :class="{
                        'text-[var(--main-text-color)]': currentSection === '#config-media'
                      }"
                      href="#config-media"
                      ><span v-if="currentSection === '#config-media'" class="mr-1">#</span
                      ><span>Media</span></a
                    >
                  </li>

                  <ul class="ml-2 mt-2 space-y-2 text-sm">
                    <li>
                      <a
                        :class="{
                          'text-[var(--main-text-color)]': currentSection === '#config-mediaSize'
                        }"
                        href="#config-mediaSize"
                        ><span v-if="currentSection === '#config-mediaSize'" class="mr-1">#</span
                        ><span>Media Size</span></a
                      >
                    </li>
                    <li>
                      <a
                        :class="{
                          'text-[var(--main-text-color)]': currentSection === '#config-mediaType'
                        }"
                        href="#config-mediaType"
                        ><span v-if="currentSection === '#config-mediaType'" class="mr-1">#</span
                        ><span>Media Types</span></a
                      >
                    </li>
                    <li>
                      <a
                        :class="{
                          'text-[var(--main-text-color)]': currentSection === '#config-mediaLimit'
                        }"
                        href="#config-mediaLimit"
                        ><span v-if="currentSection === '#config-mediaLimit'" class="mr-1">#</span
                        ><span>Media Limit</span></a
                      >
                    </li>
                  </ul>

                  <div class="mt-2">
                    <div>
                      <a
                        :class="{
                          'text-[var(--main-text-color)]': currentSection === '#config-pagination'
                        }"
                        href="#config-pagination"
                        ><span v-if="currentSection === '#config-pagination'" class="mr-1">#</span
                        ><span>Pagination</span></a
                      >
                    </div>
                    <ul class="ml-4 mt-2 space-y-2 text-sm">
                      <li>
                        <a
                          :class="{
                            'text-[var(--main-text-color)]':
                              currentSection === '#config-pagePagination'
                          }"
                          href="#config-pagePagination"
                          ><span v-if="currentSection === '#config-pagePagination'" class="mr-1"
                            >#</span
                          ><span>Page Pagination</span></a
                        >
                      </li>

                      <li>
                        <a
                          :class="{
                            'text-[var(--main-text-color)]':
                              currentSection === '#config-scrollPagination'
                          }"
                          href="#config-scrollPagination"
                          ><span v-if="currentSection === '#config-scrollPagination'" class="mr-1"
                            >#</span
                          ><span>Infinite Pagination</span></a
                        >
                      </li>
                    </ul>
                  </div>

                  <li>
                    <a
                      :class="{
                        'text-[var(--main-text-color)]': currentSection === '#config-permissions'
                      }"
                      href="#config-permissions"
                      ><span v-if="currentSection === '#config-permissions'" class="mr-1">#</span
                      ><span>Permissions</span></a
                    >
                  </li>

                  <li>
                    <a
                      :class="{
                        'text-[var(--main-text-color)]': currentSection === '#config-otherOptions'
                      }"
                      href="#config-otherOptions"
                      ><span v-if="currentSection === '#config-otherOptions'" class="mr-1">#</span
                      ><span>Other Options</span></a
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
                      'text-[var(--main-text-color)]': currentSection === '#theming-frontendtech'
                    }"
                    href="#theming-frontendtech"
                    ><span v-if="currentSection === '#theming-frontendtech'" class="mr-1">#</span
                    ><span>Frontend Technologies</span></a
                  >
                </li>

                <li class="ml-2">
                  <a
                    :class="{
                      'text-[var(--main-text-color)]': currentSection === '#theming-publishAssets'
                    }"
                    href="#theming-publishAssets"
                    ><span v-if="currentSection === '#theming-publishAssets'" class="mr-1">#</span
                    ><span>Publish Assets</span></a
                  >
                </li>

                <li class="ml-2">
                  <a
                    :class="{
                      'text-[var(--main-text-color)]': currentSection === '#theming-buildAssets'
                    }"
                    href="#theming-buildAssets"
                    ><span v-if="currentSection === '#theming-buildAssets'" class="mr-1">#</span
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
                          currentSection === '#customization-components'
                      }"
                      href="#customization-components"
                      ><span v-if="currentSection === '#customization-components'" class="mr-1"
                        >#</span
                      ><span>Components</span></a
                    >
                  </li>
                  <li>
                    <a
                      :class="{
                        'text-[var(--main-text-color)]': currentSection === '#customization-presets'
                      }"
                      href="#customization-presets"
                      ><span v-if="currentSection === '#customization-presets'" class="mr-1">#</span
                      ><span>Presets</span></a
                    >
                  </li>
                </ul>
              </div>
            </div>

            <div class="flex flex-col">
              <a class="no-underline main-text-color font-bold">API</a>
              <div class="mt-2">
                <div class="ml-2">
                  <a
                    :class="{
                      'text-[var(--main-text-color)]': currentSection === '#api-traits'
                    }"
                    href="#api-traits"
                    ><span v-if="currentSection === '#api-traits'" class="mr-1">#</span
                    ><span>Traits</span></a
                  >
                  <ul class="ml-4 mt-2 space-y-2 text-sm">
                    <li>
                      <a
                        :class="{
                          'text-[var(--main-text-color)]':
                            currentSection === '#api-traits-reviewable'
                        }"
                        href="#api-traits-reviewable"
                        ><span v-if="currentSection === '#api-traits-reviewable'" class="mr-1"
                          >#</span
                        ><span>Reviewable</span></a
                      >
                    </li>
                  </ul>
                </div>

                <!-- <ul class="ml-4 mt-2 space-y-2 text-sm">
                  <li>
                    <a
                      :class="{
                        'text-[var(--main-text-color)]':
                          currentSection === '#customization-components'
                      }"
                      href="#customization-components"
                      ><span v-if="currentSection === '#customization-components'" class="mr-1"
                        >#</span
                      ><span>Methods</span></a
                    >
                  </li>

                  <ul class="ml-4 mt-2 space-y-2 text-sm">
                    <li>
                      <a
                        :class="{
                          'text-[var(--main-text-color)]':
                            currentSection === '#customization-components'
                        }"
                        href="#customization-components"
                        ><span v-if="currentSection === '#customization-components'" class="mr-1"
                          >#</span
                        ><span>reviews</span></a
                      >
                    </li>
                  </ul>
                </ul> -->
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

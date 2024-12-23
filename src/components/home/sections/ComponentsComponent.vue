<template>
  <SectionComponent class="flex flex-col items-start justify-center">
    <template #header>Components </template>
    <template #content>
      <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          class="text-center pb-4 h-[25rem] border rounded bg-gradient-to-br from-green-400/10 to-green-500/80"
        >
          <div class="relative w-full h-full overflow-hidden">
            <h2 class="!text-black !m-4">Widget</h2>
            <div class="w-full h-full flex justify-center">
              <a
                class="flex justify-center"
                href="/src/assets/img/reviewer/full-widget.png"
                target="_blank"
              >
                <img
                  class="absolute !my-0 border-2 border-[var(--secondary-border-color)]"
                  src="/src/assets/img/reviewer/full-widget.png"
                  alt="Statistics"
                />
              </a>
            </div>
          </div>
        </div>
        <div
          class="text-center pb-4 h-[25rem] border rounded bg-gradient-to-br from-green-400/10 to-green-500/80"
        >
          <div class="relative w-full h-full overflow-hidden">
            <h2 class="!text-black !m-4">Review Statistics</h2>
            <div class="w-full h-full flex justify-center">
              <a
                class="flex justify-center"
                href="/src/assets/img/reviewer/lg/1.png"
                target="_blank"
              >
                <img
                  class="absolute w-72 h-92 object-cover !my-0 border-2 border-[var(--secondary-border-color)]"
                  src="/src/assets/img/reviewer/lg/1.png"
                  alt="Review Statistics"
                />
              </a>
            </div>
          </div>
        </div>
        <div
          class="text-center h-[25rem] border rounded bg-gradient-to-br from-green-400/10 to-green-500/80"
        >
          <div class="relative w-full h-full overflow-hidden">
            <h2 class="!text-black !m-4">Recommendation</h2>
            <div class="w-full h-full flex justify-center">
              <a
                class="flex justify-center h-[20rem]"
                href="/src/assets/img/reviewer/lg/2.png"
                target="_blank"
              >
                <img
                  class="w-72 object-cover !my-0 border-2 border-[var(--secondary-border-color)]"
                  src="/src/assets/img/reviewer/lg/2.png"
                  alt="Recommendation"
                />
              </a>
            </div>
          </div>
        </div>
        <div
          class="text-center h-[25rem] border rounded bg-gradient-to-br from-green-400/10 to-green-500/80"
        >
          <div class="relative w-full h-full overflow-hidden">
            <h2 class="!text-black !m-4">Dynamic Sub Ratings</h2>
            <div class="w-full h-full flex justify-center">
              <a
                class="flex justify-center"
                href="/src/assets/img/reviewer/sub_rating.png"
                target="_blank"
              >
                <img
                  class="absolute w-72 h-92 object-cover !my-0 border-2 border-[var(--secondary-border-color)]"
                  src="/src/assets/img/reviewer/sub_rating.png"
                  alt="Dynamic Sub Ratings"
                />
              </a>
            </div>
          </div>
        </div>

        <div
          class="text-center h-[25rem] border rounded bg-gradient-to-br from-green-400/10 to-green-500/80"
        >
          <div class="relative w-full h-full overflow-hidden">
            <h2 class="!text-black !m-4">Media Gallery</h2>
            <div class="w-full h-full flex justify-center">
              <a
                class="flex justify-center w-[18rem] h-[20rem] bg-white"
                href="/src/assets/img/reviewer/lg/3.png"
                target="_blank"
              >
                <img
                  class="object-contain !my-0"
                  src="/src/assets/img/reviewer/lg/3.png"
                  alt="Media Gallery"
                />
              </a>
            </div>
          </div>
        </div>
        <div
          class="text-center h-[25rem] border rounded bg-gradient-to-br from-green-400/10 to-green-500/80"
        >
          <div class="relative w-full h-full overflow-hidden">
            <h2 class="!text-black !m-4">Review Modal</h2>
            <div class="w-full h-full flex justify-center">
              <a
                class="flex w-[20rem] h-[20rem] bg-white justify-center border-2 border-[var(--secondary-border-color)]"
                href="/src/assets/img/reviewer/review_modal_sm.png"
                target="_blank"
              >
                <img
                  class="object-contain w-full !my-0"
                  src="/src/assets/img/reviewer/review_modal_sm.png"
                  alt="Review Modal"
                />
              </a>
            </div>
          </div>
        </div>
        <div
          class="text-center h-[25rem] border rounded bg-gradient-to-br from-green-400/10 to-green-500/80"
        >
          <div class="relative w-full h-full overflow-hidden">
            <h2 class="!text-black !m-4">Detailed Review List</h2>
            <div class="w-full h-full flex justify-center">
              <a
                class="flex justify-center w-[20rem] h-[20rem] bg-white border-2 border-[var(--secondary-border-color)]"
                href="/src/assets/img/reviewer/review.png"
                target="_blank"
                ><img
                  class="object-contain !my-0 border-2"
                  src="/src/assets/img/reviewer/review.png"
                  alt="Detailed Review List"
              /></a>
            </div>
          </div>
        </div>

        <div
          class="text-center h-[25rem] border rounded bg-gradient-to-br from-green-400/10 to-green-500/80"
        >
          <div class="relative w-full h-full overflow-hidden">
            <h2 class="!text-black !m-4">Advanced Filters</h2>
            <div class="w-full h-full flex justify-center">
              <a
                class="flex justify-center w-[20rem] h-[20rem] bg-white border-2 border-[var(--secondary-border-color)]"
                href="/src/assets/img/reviewer/filters_sm.png"
                target="_blank"
              >
                <img
                  class="w-84 h-92 object-contain !my-0"
                  src="/src/assets/img/reviewer/filters_sm.png"
                  alt="Advanced Filters"
                />
              </a>
            </div>
          </div>
        </div>
        <div
          class="text-center h-[25rem] border rounded bg-gradient-to-br from-green-400/10 to-green-500/80"
        >
          <div class="relative w-full h-full overflow-hidden">
            <h2 class="!text-black !m-4">Elegant Forms</h2>
            <div class="w-full h-full flex justify-center">
              <a
                class="flex justify-center w-[20rem] h-[20rem] bg-white border-2 border-[var(--secondary-border-color)]"
                href="/src/assets/img/reviewer/form.png"
                target="_blank"
                ><img
                  class="!my-0 object-contain"
                  src="/src/assets/img/reviewer/form.png"
                  alt="Elegant Forms"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </template>
  </SectionComponent>
</template>

<script setup lang="ts">
import SectionComponent from '@/components/SectionComponent.vue'
</script>

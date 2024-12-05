<template>
  <SectionComponent class="flex flex-col items-start justify-center">
    <template #header>{{ rcs.title() }}</template>
    <template #content>
      <p>{{ rcs.description() }}</p>
      <div class="flex items-start gap-4 flex-wrap lg:flex-nowrap">
        <picture class="border border-[var(--secondary-border-color)] rounded p-4 w-[35%]">
          <source media="(min-width:1024px)" srcset="/src/assets/img/reviewer/lg/3.png" />
          <source media="(min-width:0px)" srcset="/src/assets/img/reviewer/md/3.png" />
          <img src="/src/assets/img/reviewer/lg/3.png" alt="Media gallery" />
        </picture>
        <img
          class="w-[65%] object-cover border border-[var(--secondary-border-color)] rounded !mt-0"
          src="/src/assets/img/reviewer/review_modal.png"
          alt="Media gallery modal"
        />
      </div>
    </template>
  </SectionComponent>
</template>

<script setup lang="ts">
import SectionComponent from '@/components/SectionComponent.vue'
import { ReviewerComponent } from '@/enums/ReviewerComponent'
import { ReviewerComponentService } from '@/services/ReviewerComponentService'

const rcs = new ReviewerComponentService(ReviewerComponent.MEDIA_GALLERY)
</script>

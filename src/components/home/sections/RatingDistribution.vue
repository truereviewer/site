<template>
  <SectionComponent class="flex flex-col items-start justify-center">
    <template #header>{{ rcs.title() }}</template>
    <template #content>
      <p>{{ rcs.description() }}</p>
      <picture class="border border-[var(--secondary-border-color)] rounded p-4">
        <source media="(min-width:1024px)" srcset="/src/assets/img/reviewer/lg/1.png" />
        <source media="(min-width:768px)" srcset="/src/assets/img/reviewer/lg/1.png" />
        <img src="/src/assets/img/reviewer/lg/1.png" alt="Rating distribution" />
      </picture>
    </template>
  </SectionComponent>
</template>

<script setup lang="ts">
import SectionComponent from '@/components/SectionComponent.vue'
import { ReviewerComponent } from '@/enums/ReviewerComponent'
import { ReviewerComponentService } from '@/services/ReviewerComponentService'

const rcs = new ReviewerComponentService(ReviewerComponent.RATING_DISTRIBUTION)
</script>

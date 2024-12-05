<template>
  <SectionComponent>
    <template #header>{{ rcs.title() }}</template>
    <template #content>
      <p>{{ rcs.description() }}</p>
      <div class="border border-[var(--secondary-border-color)] rounded p-4">
        <picture class="!mb-0">
          <source media="(min-width:1024px)" srcset="/src/assets/img/reviewer/lg/4-1.png" />
          <img src="/src/assets/img/reviewer/sm/4-1.png" alt="Review list" />
        </picture>

        <img
          class="hidden lg:inline !mt-0"
          src="/src/assets/img/reviewer/lg/4-2.png"
          alt="Review list"
        />
        <img
          class="inline md:hidden !mt-0"
          src="/src/assets/img/reviewer/sm/4-2.png"
          alt="Review list"
        />
      </div>
    </template>
  </SectionComponent>
</template>

<script setup lang="ts">
import SectionComponent from '@/components/SectionComponent.vue'
import { ReviewerComponent } from '@/enums/ReviewerComponent'
import { ReviewerComponentService } from '@/services/ReviewerComponentService'

const rcs = new ReviewerComponentService(ReviewerComponent.REVIEW_LIST)
</script>

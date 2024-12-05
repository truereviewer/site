<template>
  <SectionComponent class="flex flex-col items-start justify-center">
    <template #header>{{ rcs.title() }}</template>
    <template #content>
      <p>
        {{ rcs.description() }}
      </p>
      <a class="cursor-pointer" href="/src/assets/img/reviewer/full-widget.png" target="_blank">
        <picture class="border border-[var(--secondary-border-color)] rounded p-4 inline-block">
          <source media="(min-width:1024px)" srcset="/src/assets/img/reviewer/full-widget.png" />
          <source media="(min-width:768px)" srcset="/src/assets/img/reviewer/full-widget.png" />
          <img src="/src/assets/img/reviewer/full-widget.png" alt="Full Widget" />
        </picture>
      </a>
    </template>
  </SectionComponent>
</template>

<script setup lang="ts">
import SectionComponent from '@/components/SectionComponent.vue'
import { ReviewerComponent } from '@/enums/ReviewerComponent'
import { ReviewerComponentService } from '@/services/ReviewerComponentService'

const rcs = new ReviewerComponentService(ReviewerComponent.WIDGET)
</script>

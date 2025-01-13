<template>
  <SectionComponent id="component__sub_rating_distribution">
    <template #header>{{ rcs.title() }}</template>
    <template #content>
      <div v-html="rcs.description()" class="!mt-0"></div>

      <picture class="border rounded p-4">
        <source media="(min-width:1024px)" srcset="/src/assets/img/reviewer/lg/2.png" />
        <source media="(min-width:768px)" srcset="/src/assets/img/reviewer/lg/2.png" />
        <img src="/src/assets/img/reviewer/lg/2.png" alt="Sub ratng distribution" />
      </picture>
    </template>
  </SectionComponent>
</template>

<script setup lang="ts">
import SectionComponent from '@/components/SectionComponent.vue'

import { ReviewerComponent } from '@/enums/ReviewerComponent'
import { ReviewerComponentService } from '@/services/ReviewerComponentService'

const rcs = new ReviewerComponentService(ReviewerComponent.SUB_RATING_DISTRIBUTION)
</script>

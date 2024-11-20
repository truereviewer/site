<template>
  <SectionComponent class="flex flex-col items-start justify-center">
    <template #header>{{ rcs.title() }}</template>
    <template #content>
      <p>{{ rcs.description() }}</p>
      <picture class="border rounded p-4">
        <source media="(min-width:1024px)" srcset="/src/assets/img/reviewer/lg/3.png" />
        <source media="(min-width:768px)" srcset="/src/assets/img/reviewer/md/3.png" />
        <img src="/src/assets/img/reviewer/lg/3.png" alt="Media gallery" />
      </picture>
    </template>
  </SectionComponent>
</template>

<script setup>
import SectionComponent from '@/components/SectionComponent.vue'
import { ReviewerComponent } from '@/enums/ReviewerComponent'
import { ReviewerComponentService } from '@/services/ReviewerComponentService'

const rcs = new ReviewerComponentService(ReviewerComponent.MEDIA_GALLERY)
</script>

<template>
  <SectionComponent id="media__gallery" class="flex flex-col items-start justify-center">
    <template #header>{{ rcs.title() }}</template>
    <template #content>
      <p>{{ rcs.description() }}</p>
      <div class="flex items-start gap-4 flex-wrap lg:flex-nowrap">
        <a
          class="cursor-pointer border rounded p-4 lg:w-[35%]"
          href="/src/assets/img/reviewer/lg/3.png"
          target="_blank"
        >
          <picture>
            <source media="(min-width:1024px)" srcset="/src/assets/img/reviewer/lg/3.png" />
            <source media="(min-width:0px)" srcset="/src/assets/img/reviewer/md/3.png" />
            <img src="/src/assets/img/reviewer/lg/3.png" alt="Media gallery" />
          </picture>
        </a>
        <a
          class="cursor-pointer lg:w-[65%] object-cover border rounded !mt-0"
          href="/src/assets/img/reviewer/lg/review_modal.png"
          target="_blank"
        >
          <img src="/src/assets/img/reviewer/review_modal.png" alt="Media gallery modal" />
        </a>
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

<template>
  <SectionComponent class="flex flex-col items-start justify-center" id="component__widget">
    <template #header>{{ rcs.title() }}</template>
    <template #content>
      <p>
        {{ rcs.description() }}
      </p>
      <a class="cursor-pointer" :href="FullFiltersImg" target="_blank">
        <picture class="border rounded p-4 inline-block">
          <source media="(min-width:1024px)" :srcset="FullFiltersImg" />
          <source media="(min-width:768px)" :srcset="MediumFiltersImg" />
          <img :src="SmallFiltersImg" alt="Filters" />
        </picture>
      </a>
    </template>
  </SectionComponent>
</template>

<script setup lang="ts">
import SectionComponent from '@/components/SectionComponent.vue'
import { ReviewerComponent } from '@/enums/ReviewerComponent'
import { ReviewerComponentService } from '@/services/ReviewerComponentService'
import FullFiltersImg from '@/assets/img/reviewer/lg/4-1.png'
import SmallFiltersImg from '@/assets/img/reviewer/sm/4-1.png'
import MediumFiltersImg from '@/assets/img/reviewer/md/4-1.png'

const rcs = new ReviewerComponentService(ReviewerComponent.Filters)
</script>

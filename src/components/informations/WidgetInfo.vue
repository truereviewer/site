<template>
  <SectionComponent class="flex flex-col items-start justify-center" id="component__widget">
    <template #header>{{ rcs.title() }}</template>
    <template #content>
      <p>
        {{ rcs.description() }}
      </p>
      <a class="cursor-pointer" :href="FullWidgetImg" target="_blank">
        <picture class="border rounded p-4 inline-block">
          <source media="(min-width:1024px)" :srcset="FullWidgetImg" />
          <source media="(min-width:768px)" :srcset="FullWidgetImg" />
          <img :src="FullWidgetImg" alt="Full Widget" />
        </picture>
      </a>
    </template>
  </SectionComponent>
</template>

<script setup lang="ts">
import SectionComponent from '@/components/SectionComponent.vue'
import { ReviewerComponent } from '@/enums/ReviewerComponent'
import { ReviewerComponentService } from '@/services/ReviewerComponentService'
import FullWidgetImg from '@/assets/img/reviewer/full-widget.png'

const rcs = new ReviewerComponentService(ReviewerComponent.WIDGET)
</script>

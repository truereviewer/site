<template>
  <div class="mb-8">
    <div
      v-if="props.type === 'notice'"
      class="flex flex-col gap-4 border-l-4 border-blue-400 bg-blue-100/30 py-2 px-4 [&_p]:!mt-0"
    >
      <div class="flex gap-4 items-center">
        <img class="w-8" :src="WarningImg" alt="notice" />
        <span class="text-blue-500 font-bold">Notice</span>
      </div>
      <div class="flx-1">
        <slot></slot>
      </div>
    </div>

    <div
      v-if="props.type === 'danger'"
      class="flex flex-col gap-4 border-l-4 border-red-600 bg-red-400/30 py-2 px-4 [&_p]:!mt-0"
    >
      <div class="flex gap-4 items-center">
        <img class="w-8" :src="DangerImg" alt="danger notice" />
        <span class="text-red-600 font-bold">Danger</span>
      </div>
      <div class="flx-1">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WarningImg from '@/assets/img/warning.png'
import DangerImg from '@/assets/img/danger.svg'

const props = defineProps({
  type: {
    type: String,
    required: true
  }
})
</script>

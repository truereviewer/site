<template>
  <div class="mb-8">
    <div
      v-if="props.type === 'notice'"
      class="flex flex-col gap-2 border-l-4 border-blue-400 bg-blue-100/30 py-4 px-4 [&_p]:!mt-0"
    >
      <div class="flex gap-4 items-center !mt-0">
        <img class="w-8 !my-0" :src="WarningImg" alt="notice" />
        <span class="text-blue-500 font-bold">Notice</span>
      </div>
      <div class="flx-1 !mt-2">
        <slot></slot>
      </div>
    </div>

    <div
      v-if="props.type === 'danger'"
      class="flex flex-col gap-2 border-l-4 border-red-600 bg-red-400/30 py-4 px-4 [&_p]:!mt-0"
    >
      <div class="flex gap-4 items-center !mt-0">
        <img class="w-8 !my-0" :src="DangerImg" alt="danger notice" />
        <span class="text-red-600 font-bold">Danger</span>
      </div>
      <div class="flx-1 !mt-2">
        <slot></slot>
      </div>
    </div>

    <div
      v-if="props.type === 'important'"
      class="flex flex-col gap-2 border-l-4 border-purple-600 bg-purple-100/40 py-4 px-4 [&_p]:!mt-0"
    >
      <div class="flex gap-4 items-center !mt-0">
        <img class="w-8 !my-0" :src="ImportantImg" alt="danger notice" />
        <span class="text-purple-800 font-bold">Important</span>
      </div>
      <div class="flx-1 !mt-2">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WarningImg from '@/assets/img/warning.png'
import DangerImg from '@/assets/img/danger.svg'
import ImportantImg from '@/assets/img/important.png'

const props = defineProps({
  type: {
    type: String,
    required: true
  }
})
</script>

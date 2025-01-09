<template>
  <div class="mb-8">
    <div
      v-if="props.type === 'notice'"
      class="flex flex-col gap-4 border-l-4 border-blue-400 bg-blue-100/30 py-2 px-4 [&_p]:!mt-0"
    >
      <div class="flex gap-4 items-center">
        <img class="w-8" src="/src/assets//img/warning.png" alt="notice" />
        <span class="text-blue-500 font-bold">Notice</span>
      </div>
      <div class="flx-1">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    required: true
  }
})
</script>

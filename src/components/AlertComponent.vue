<template>
  <div class="mb-8">
    <div v-if="props.type === 'notice'" class="flex items-center gap-6 bg-blue-200 p-4">
      <div><img class="w-12" src="/src/assets//img/warning.png" alt="notice" /></div>
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

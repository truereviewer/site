<template>
  <div class="w-full">
    <div
      v-if="!expand"
      @click="expand = true"
      class="cursor-pointer flex gap-x-4 items-center justify-between p-2 border"
    >
      <h3 class="!my-0 !text-lg !text-black"><slot name="header" /></h3>
      <span class="text-4xl">+</span>
    </div>
    <div
      v-else
      @click="expand = false"
      class="cursor-pointer flex items-center gap-x-4 justify-between p-2 border"
    >
      <h3 :class="['!my-0 !text-black  text-xs', { '!text-xl': expand }]">
        <slot name="header" />
      </h3>
      <span class="text-4xl">-</span>
    </div>
    <p
      :class="[
        'transition-all ease-in-out duration-700 border !mt-0 p-8',
        { 'overflow-hidden !h-0 !p-0': !expand, ' h-full': expand }
      ]"
    >
      <slot name="content" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const expand = ref<boolean>(false)
</script>

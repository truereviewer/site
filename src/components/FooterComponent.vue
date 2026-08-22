<template>
  <div
    class="text-white flex flex-col justify-center gap-4 md:gap-0 items-center text-base primary-bg-color px-4 py-8"
  >
    <HeaderNav :keepOpen="alwaysShowMenu" class="relative -start-4 !text-white" />
    <span class="">@ {{ new Date().getFullYear() }} Truereviewer</span>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import HeaderNav from './home/sections/HeaderNav.vue'

const alwaysShowMenu = ref(false)

onBeforeMount(() => {
  if (document.documentElement.clientWidth < 1024) {
    alwaysShowMenu.value = true
  }
})
</script>

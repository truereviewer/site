<template>
  <div
    class="flex flex-col justify-center gap-4 md:gap-0 items-center text-base px-4 py-8 bg-gradient-to-b from-[oklch(from_var(--primary-bg-color)_l_c_h_/_50%)] to-[oklch(from_var(--primary-bg-color)_l_c_h_/_80%)]"
  >
    <HeaderNav :keepOpen="alwaysShowMenu" class="relative -start-4" hoverColor="rgb(239 68 68)" />
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

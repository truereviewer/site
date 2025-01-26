<template>
  <div
    class="text-white relativeb bottom-0 flex justify-between items-center text-base bg-gradient-to-r from-green-800 to-green-600 px-4 py-8"
  >
    <span>@ {{ new Date().getFullYear() }} Truereviewer</span>
    <HeaderNav :keepOpen="alwaysShowMenu" />
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

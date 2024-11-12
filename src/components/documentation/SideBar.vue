<template>
  <aside class="xl:w-[25%]">
    <div :class="['absolute w-8 top-14 right-2', { 'opacity-0': show }]" @click="show = true">
      <img src="/src/assets/icons/menu.svg" alt="menu" />
    </div>
    <div class="fixed w-full sm:w-[75%] md:w-[50%] xl:w-[25%]">
      <nav
        :class="[
          'relative w-full  top-0 right-0 z-50 xl:static bg-gradient-to-b from-white to-90% to-green-600/10 h-svh transition-all',
          { '!w-0 opacity-0': !show }
        ]"
      >
        <div @click="show = false" class="flex justify-end p-2 !m-0 xl:hidden">
          <img class="w-6 !m-0" src="/src/assets/icons/cancel.svg" alt="Cancel" />
        </div>

        <div class="flex justify-center py-14 text-wrap">
          <div class="space-y-6">
            <div class="flex flex-col">
              <a class="no-underline main-text-color" href="">lakshan</a>
              <div>
                <p class="my- ml-2">a</p>
                <p class="my- ml-2">a</p>
                <p class="my- ml-2">a</p>
              </div>
            </div>
            <div>
              <a class="no-underline main-text-color" href="">lakshan lakshan lakshan </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const show = ref<boolean>(false)

onMounted(() => {
  if (document.documentElement.clientWidth >= 1280) {
    show.value = true
  }
})
</script>

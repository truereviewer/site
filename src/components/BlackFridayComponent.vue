<script setup>
import { onMounted, ref } from 'vue'

import { Countdown } from 'vue3-flip-countdown'

import ModalComponent from '@/components/ModalComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'

import BlackFridayImg from '@/assets/img/black-friday.jpg'

import { isDateAhead } from '@/helpers'

const visible = ref(false)

onMounted(() => {
  isDateAhead('2025-12-12') ? (visible.value = true) : false
})
</script>

<template>
  <ModalComponent containerClass="!p-0" size="lg" :show="visible">
    <div class="relative bg-black">
      <div class="absolute inset-0 top-4 z-50 gap-y-8 flex flex-col justify-center items-center">
        <p class="text-white font-bold text-5xl text-center">Up to 80% off</p>
        <Countdown
          class="shadow-xl p-2"
          deadline="2025-12-01 24:00:00"
          :showLabels="true"
          mainColor="white"
          secondFlipColor="red"
          labelColor="white"
          countdownSize="2.5rem"
        />
        <ButtonComponent class="bg-green-600 hover:bg-green-800" @click="visible = false">
          <a class="text-xl font-bold" href="/#sponserware">Explore Offers</a>
        </ButtonComponent>
      </div>
      <img class="w-full opacity-20" :src="BlackFridayImg" alt="Black Friday Deal" />
    </div>
  </ModalComponent>
</template>

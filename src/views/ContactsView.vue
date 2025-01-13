<template>
  <div class="font-sans">
    <div
      class="px-4 prose max-w-none flex justify-end bg-gradient-to-br from-green-800 to-green-600"
    >
      <HeaderNav />
    </div>

    <div
      class="flex justify-center items-center h-64 bg-gradient-to-br from-green-900 via-[30%] to-green-700"
    >
      <div class="prose text-white lg:prose-lg">
        <h1 class="text-white">Contact us</h1>
        <p>
          Don't hesitate to contact us. We do our best to respond and resolve your issues as soon as
          possible.
        </p>
      </div>
    </div>
    <div class="prose lg:prose-lg max-w-none flex justify-start items-center my-8 lg:ml-12">
      <ul class="list list-none">
        <li class="flex items-center gap-8">
          <span class="!text-black w-[8rem] text-xl font-bold !my-0">Email:</span>
          <a :href="'mailto:' + Contact.EMAIL" class="text-green-500">{{ Contact.EMAIL }}</a>
        </li>
        <li class="flex items-center gap-8">
          <span class="!text-black w-[8rem] text-xl font-bold !my-0">Discord:</span>
          <a :href="Contact.DISCORD" class="text-green-500">{{ Contact.DISCORD }}</a>
        </li>
        <li class="flex items-center gap-8">
          <span class="!text-black w-[8rem] text-xl font-bold !my-0">Github:</span>
          <a :href="Contact.GITHUB" class="text-green-500">{{ Contact.GITHUB }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderNav from '@/components/home/sections/HeaderNav.vue'
import { useMetaTags } from '@/composables/useMetaTags'
import { Contact } from '@/enums/Contact'

useMetaTags({ title: 'Contacts' })
</script>

<template>
  <div>
    <nav class="flex text-base justify-end lg:hidden relative left-4 z-[200]">
      <div v-if="!showMenu" class="mt-[8px]">
        <router-link
          class="no-underline !border-0 text-orange-400 inline-block pb-1"
          :to="{ name: 'home' }"
        >
          <img class="!p-0 !m-0 w-12" src="/src/assets/img/logo.webp" alt="review distribution"
        /></router-link>
      </div>
      <img
        v-if="!showMenu"
        @click="showMenu = true"
        class="w-8 !my-0"
        src="/src/assets/icons/menu.svg"
        alt="menu"
      />

      <ul
        v-if="showMenu"
        class="bg-gradient-to-tr space-y-4 from-green-200/25 to-green-400/50 relative min-w-72 px-4 py-2 rounded list-none bg-white top-0 m-0"
      >
        <li class="flex justify-end">
          <img
            @click="showMenu = false"
            class="w-8 !my-0"
            src="/src/assets/icons/cancel.svg"
            alt="menu"
          />
        </li>

        <li class="group">
          <router-link
            class="no-underline text-orange-400 inline-block pb-1"
            :to="{ name: 'documentation' }"
            >Documentation</router-link
          >
          <hr
            class="w-0 !my-0 transition-all ease-in-out duration-300 group-hover:w-full mx-auto h-px max-w-7xl border-none bg-gradient-to-r from-transparent via-white to-transparent"
          />
        </li>
        <li class="group">
          <a class="no-underline text-orange-400 inline-block pb-1" href="/#faq">FAQ</a>
          <hr
            class="w-0 !my-0 transition-all ease-in-out duration-300 group-hover:w-full mx-auto h-px max-w-7xl border-none bg-gradient-to-r from-transparent via-white to-transparent"
          />
        </li>
        <li class="group">
          <a class="no-underline text-orange-400 inline-block pb-1" href="/#sponserware"
            >Sponserware</a
          >
          <hr
            class="w-0 !my-0 transition-all ease-in-out duration-300 group-hover:w-full mx-auto h-px max-w-7xl border-none bg-gradient-to-r from-transparent via-white to-transparent"
          />
        </li>
        <li class="group">
          <a class="no-underline text-orange-400 inline-block pb-1" href="/#technologies"
            >Technologies</a
          >
          <hr
            class="w-0 !my-0 transition-all ease-in-out duration-300 group-hover:w-full mx-auto h-px max-w-7xl border-none bg-gradient-to-r from-transparent via-white to-transparent"
          />
        </li>
        <li class="group">
          <router-link class="no-underline text-orange-400 inline-block pb-1" :to="{ name: 'docs' }"
            >Contacts</router-link
          >
          <hr
            class="w-0 !my-0 transition-all ease-in-out duration-300 group-hover:w-full mx-auto h-px max-w-7xl border-none bg-gradient-to-r from-transparent via-white to-transparent"
          />
        </li>
        <li class="group">
          <a class="no-underline text-orange-400 inline-block pb-1" href="/#technologies">Demo</a>
          <hr
            class="w-0 !my-0 transition-all ease-in-out duration-300 group-hover:w-full mx-auto h-px max-w-7xl border-none bg-gradient-to-r from-transparent via-white to-transparent"
          />
        </li>
      </ul>
    </nav>

    <nav
      class="hidden lg:flex items-center text-base gap-x-4 gap-8 z-[200] relative cursor-pointer"
    >
      <div class="group mt-[12px]">
        <router-link
          class="no-underline !border-0 text-orange-400 inline-block pb-1"
          :to="{ name: 'home' }"
        >
          <img class="!p-0 !m-0 w-16" src="/src/assets/img/logo.webp" alt="review distribution"
        /></router-link>
      </div>
      <div class="group">
        <router-link
          class="no-underline text-orange-400 inline-block pb-1"
          :to="{ name: 'documentation' }"
          >Documentation</router-link
        >
        <hr
          class="w-0 !my-0 transition-all ease-in-out duration-300 group-hover:w-full mx-auto h-px max-w-7xl border-none bg-gradient-to-r from-transparent via-white to-transparent"
        />
      </div>

      <div class="group">
        <a class="no-underline text-orange-400 inline-block pb-1" href="/#faq">FAQ</a>
        <hr
          class="w-0 !my-0 transition-all ease-in-out duration-300 group-hover:w-full mx-auto h-px max-w-7xl border-none bg-gradient-to-r from-transparent via-white to-transparent"
        />
      </div>

      <div class="group">
        <a class="no-underline text-orange-400 inline-block pb-1" href="/#sponserware"
          >Sponserware</a
        >
        <hr
          class="w-0 !my-0 transition-all ease-in-out duration-300 group-hover:w-full mx-auto h-px max-w-7xl border-none bg-gradient-to-r from-transparent via-white to-transparent"
        />
      </div>
      <div class="group">
        <a class="no-underline text-orange-400 inline-block pb-1" href="/#technologies"
          >Technologies</a
        >
        <hr
          class="w-0 !my-0 transition-all ease-in-out duration-300 group-hover:w-full mx-auto h-px max-w-7xl border-none bg-gradient-to-r from-transparent via-white to-transparent"
        />
      </div>

      <div class="group">
        <router-link
          class="no-underline text-orange-400 inline-block pb-1"
          :to="{ name: 'contacts' }"
          >Contacts</router-link
        >
        <hr
          class="w-0 !my-0 transition-all ease-in-out duration-300 group-hover:w-full mx-auto h-px max-w-7xl border-none bg-gradient-to-r from-transparent via-white to-transparent"
        />
      </div>
      <div class="group">
        <a class="no-underline text-orange-400 inline-block pb-1" href="/#technologies">Demo</a>
        <hr
          class="w-0 !my-0 transition-all ease-in-out duration-300 group-hover:w-full mx-auto h-px max-w-7xl border-none bg-gradient-to-r from-transparent via-white to-transparent"
        />
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showMenu = ref(false)
</script>

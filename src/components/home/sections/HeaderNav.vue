<template>
  <div>
    <nav class="flex text-base justify-end md:hidden relative left-4 z-[300]">
      <div v-if="!showMenu" class="mt-[8px] mr-2">
        <router-link
          class="no-underline !border-0 text-inherit inline-block pb-1"
          :to="{ name: 'home' }"
        >
          <img class="!p-0 !m-0 w-8" src="/src/assets/img/logo.png" alt="logo"
        /></router-link>
      </div>

      <img
        v-if="!showMenu"
        ref="navButton"
        class="w-8 !my-0"
        src="/src/assets/icons/menu.svg"
        alt="menu"
      />

      <ul
        v-if="showMenu"
        ref="navMenu"
        class="bg-gradient-to-tr space-y-4 from-[oklch(from_var(--secondary-bg-color)_l_c_h_/_25%)] to-[oklch(from_var(--primary-bg-color)_l_c_h_/_50%)] relative min-w-72 px-4 py-2 rounded list-none bg-white top-0 m-0"
      >
        <li v-if="!props.keepOpen" class="flex justify-end">
          <img
            @click="showMenu = false"
            class="w-8 !my-0"
            src="/src/assets/icons/cancel.svg"
            alt="menu"
          />
        </li>

        <li v-if="props.keepOpen" class="group">
          <router-link class="no-underline text-inherit inline-block pb-1" :to="{ name: 'home' }"
            >Home</router-link
          >
          <hr
            class="w-0 !my-0 transition-all ease-in-out duration-300 group-hover:w-full mx-auto h-px max-w-7xl border-none secondary-bg-color"
            :style="`background: ${props.mobileHoverColor}`"
          />
        </li>
        <li class="group">
          <router-link
            class="no-underline text-inherit inline-block pb-1"
            :to="{ name: 'documentation' }"
            >Documentation</router-link
          >
          <hr
            class="w-0 !my-0 transition-all ease-in-out duration-300 group-hover:w-full mx-auto h-px max-w-7xl border-none secondary-bg-color"
            :style="`background: ${props.mobileHoverColor}`"
          />
        </li>
        <li class="group">
          <a class="no-underline text-inherit inline-block pb-1" href="/#faq">FAQ</a>
          <hr
            class="w-0 !my-0 transition-all ease-in-out duration-300 group-hover:w-full mx-auto h-px max-w-7xl border-none secondary-bg-color"
            :style="`background: ${props.mobileHoverColor}`"
          />
        </li>
        <li class="group block">
          <a class="no-underline text-inherit inline-block pb-1" href="/#sponserware"
            >Claim | Sponserware</a
          >
          <hr
            class="w-0 !my-0 transition-all ease-in-out duration-300 group-hover:w-full mx-auto h-px max-w-7xl border-none secondary-bg-color"
            :style="`background: ${props.mobileHoverColor}`"
          />
        </li>
        <li class="group">
          <a class="no-underline text-inherit inline-block pb-1" href="/#technologies"
            >Technologies</a
          >
          <hr
            class="w-0 !my-0 transition-all ease-in-out duration-300 group-hover:w-full mx-auto h-px max-w-7xl border-none secondary-bg-color"
            :style="`background: ${props.mobileHoverColor}`"
          />
        </li>
        <div class="group">
          <a class="no-underline text-inherit inline-block pb-1" href="/#ai">
            <img class="w-12 !my-0" src="/src/assets/img/ai.png" alt="AI" />
          </a>
          <hr
            class="w-0 !my-0 transition-all ease-in-out duration-300 group-hover:w-full mx-auto h-px max-w-7xl border-none secondary-bg-color"
            :style="`background: ${props.mobileHoverColor}`"
          />
        </div>
        <li class="group">
          <router-link
            class="no-underline text-inherit inline-block pb-1"
            :to="{ name: 'aboutDeveloper' }"
            >@developer</router-link
          >
          <hr
            class="w-0 !my-0 transition-all ease-in-out duration-300 group-hover:w-full mx-auto h-px max-w-7xl border-none secondary-bg-color"
            :style="`background: ${props.mobileHoverColor}`"
          />
        </li>
        <li class="group">
          <router-link
            class="no-underline text-inherit inline-block pb-1"
            :to="{ name: 'contacts' }"
            >Contacts</router-link
          >
          <hr
            class="w-0 !my-0 transition-all ease-in-out duration-300 group-hover:w-full mx-auto h-px max-w-7xl border-none secondary-bg-color"
            :style="`background: ${props.mobileHoverColor}`"
          />
        </li>
        <li class="group">
          <a
            class="no-underline text-inherit inline-block pb-1"
            href="https://reviewer-demo.vercel.app/products/nicce-mens-original-hood"
            target="_blank"
            >Demo</a
          >
          <hr
            class="w-0 !my-0 transition-all ease-in-out duration-300 group-hover:w-full mx-auto h-px max-w-7xl border-none secondary-bg-color"
            :style="`background: ${props.mobileHoverColor}`"
          />
        </li>
      </ul>
    </nav>

    <nav
      class="hidden md:flex flex-wrap items-center justify-center text-base gap-x-4 z-[200] relative cursor-pointer"
    >
      <div class="group">
        <router-link
          class="no-underline !border-0 text-primary-color inline-block"
          :to="{ name: 'home' }"
        >
          <img class="!p-0 !m-0 w-10" src="/src/assets/img/logo.png" alt="logo"
        /></router-link>
      </div>

      <div class="group">
        <router-link class="no-underline text-inherit inline-block pb-1" :to="{ name: 'home' }"
          >Home</router-link
        >
        <hr
          class="w-0 !my-0 transition-all ease-in-out duration-300 group-hover:w-full mx-auto h-px max-w-7xl border-none"
          :style="`background: ${props.hoverColor}`"
        />
      </div>
      <div class="group">
        <router-link
          class="no-underline text-inherit inline-block pb-1"
          :to="{ name: 'documentation' }"
          >Documentation</router-link
        >
        <hr
          class="w-0 !my-0 transition-all ease-in-out duration-300 group-hover:w-full mx-auto h-px max-w-7xl border-none"
          :style="`background: ${props.hoverColor}`"
        />
      </div>

      <div class="group">
        <a class="no-underline text-inherit inline-block pb-1" href="/#faq">FAQ</a>
        <hr
          class="w-0 !my-0 transition-all ease-in-out duration-300 group-hover:w-full mx-auto h-px max-w-7xl border-none"
          :style="`background: ${props.hoverColor}`"
        />
      </div>

      <div class="group block">
        <a class="no-underline text-inherit inline-block pb-1" href="/#sponserware"
          >Claim | Sponserware</a
        >
        <hr
          class="w-0 !my-0 transition-all ease-in-out duration-300 group-hover:w-full mx-auto h-px max-w-7xl border-none"
          :style="`background: ${props.hoverColor}`"
        />
      </div>
      <div class="group">
        <a class="no-underline text-inherit inline-block pb-1" href="/#technologies"
          >Technologies</a
        >
        <hr
          class="w-0 !my-0 transition-all ease-in-out duration-300 group-hover:w-full mx-auto h-px max-w-7xl border-none"
          :style="`background: ${props.hoverColor}`"
        />
      </div>

      <div class="group">
        <a class="no-underline text-inherit inline-block pb-1" href="/#ai">
          <img class="w-12 !my-0" src="/src/assets/img/ai.png" alt="AI" />
        </a>
        <hr
          class="w-0 !my-0 transition-all ease-in-out duration-300 group-hover:w-full mx-auto h-px max-w-7xl border-none"
          :style="`background: ${props.hoverColor}`"
        />
      </div>
      <div class="group">
        <router-link
          class="no-underline text-inherit inline-block pb-1"
          :to="{ name: 'aboutDeveloper' }"
          >@developer</router-link
        >
        <hr
          class="w-0 !my-0 transition-all ease-in-out duration-300 group-hover:w-full mx-auto h-px max-w-7xl border-none"
          :style="`background: ${props.hoverColor}`"
        />
      </div>
      <div class="group">
        <router-link class="no-underline text-inherit inline-block pb-1" :to="{ name: 'contacts' }"
          >Contacts</router-link
        >
        <hr
          class="w-0 !my-0 transition-all ease-in-out duration-300 group-hover:w-full mx-auto h-px max-w-7xl border-none"
          :style="`background: ${props.hoverColor}`"
        />
      </div>
      <div class="group">
        <a
          class="no-underline text-inherit inline-block pb-1"
          href="https://reviewer-demo.vercel.app/products/nicce-mens-original-hood"
          target="_blank"
          >Demo</a
        >
        <hr
          class="w-0 !my-0 transition-all ease-in-out duration-300 group-hover:w-full mx-auto h-px max-w-7xl border-none"
          :style="`background: ${props.hoverColor}`"
        />
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  keepOpen: { type: Boolean, required: false, default: false },
  hoverColor: { type: String, default: 'var(--secondary-bg-color)' },
  mobileHoverColor: { type: String, default: 'rgb(239 68 68)' }
})

import { onBeforeMount, onBeforeUnmount, ref } from 'vue'

const navButton = ref<Element>()

const navMenu = ref<Element>()

const showMenu = ref(false)

const onClickOutside = (event: Event) => {
  if (event.target === (navButton.value as Node)) {
    showMenu.value = true
    return
  }

  showMenu.value = false
}

onBeforeMount(() => {
  if (props.keepOpen) {
    showMenu.value = true
    return
  }
  document.addEventListener('click', onClickOutside)
})

onBeforeUnmount(() => {
  if (props.keepOpen) {
    return
  }
  document.removeEventListener('click', onClickOutside)
})
</script>

<style scoped>
.block:before,
.block:after {
  content: '';
  position: absolute;
  left: -2px;
  top: -2px;
  background: linear-gradient(
    45deg,
    #fb0094,
    #0000ff,
    #00ff00,
    #ffff00,
    #ff0000,
    #fb0094,
    #0000ff,
    #00ff00,
    #ffff00,
    #ff0000
  );
  background-size: 400%;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  z-index: -1;
  animation: steam 20s linear infinite;
}

@keyframes steam {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.block:after {
  filter: blur(0px);
}

.block {
  position: relative;
  background: #ffffff;
  padding: 0 4px 0 4px;
}
</style>

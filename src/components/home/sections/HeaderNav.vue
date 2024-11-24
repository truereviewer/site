<template>
  <nav class="flex gap-8 z-50 relative cursor-pointer">
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
      <a class="no-underline text-orange-400 inline-block pb-1" href="/#sponserware">Sponserware</a>
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
  </nav>
</template>

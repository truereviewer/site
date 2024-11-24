<template>
  <section class="flex flex-col items-start justify-center">
    <h2 v-if="$slots.header" class="text-4xl mt-8 mb-4 inline-block">
      <span class="w-6 mr-2">#</span><slot name="header"></slot>
    </h2>
    <div class="mx-6 w-full space-y-6 content">
      <slot name="content"> </slot>
    </div>
    <hr
      class="mx-auto !mt-8 my-4 h-px w-full max-w-7xl border-none bg-gradient-to-r from-transparent via-[var(--primary-shadow-color)] to-transparent"
    />
  </section>
</template>

<style scoped>
p {
  margin-top: 0 !important;
}
</style>

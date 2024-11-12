<template>
  <section data-aos="fade-up" class="flex flex-col items-start justify-center">
    <h2 v-if="$slots.header"><span class="w-6 inline-block">#</span><slot name="header"></slot></h2>
    <div class="mx-6">
      <slot name="content"> </slot>
    </div>
    <hr
      class="mx-auto my-4 h-px w-full max-w-7xl border-none bg-gradient-to-r from-transparent via-[var(--primary-shadow-color)] to-transparent"
    />
  </section>
</template>

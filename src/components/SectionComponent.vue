<template>
  <section data-aos="fade-up" class="flex flex-col items-start justify-center">
    <h2 v-if="$slots.header">
      <slot name="header"></slot>
    </h2>
    <slot name="content"></slot>
    <hr
      class="mx-auto h-px w-full max-w-7xl border-none bg-gradient-to-r from-transparent via-[var(--primary-shadow-color)] to-transparent"
    />
  </section>
</template>

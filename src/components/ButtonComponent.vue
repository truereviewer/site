<template>
  <button
    class="cursor-pointer rounded bg-gradient-to-r from-green-400/60 to-green-400/40 py-2 px-4 text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    type="button"
  >
    <slot></slot>
  </button>
</template>

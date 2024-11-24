<template>
  <div class="text-base !mt-4">
    <VCodeBlock :code="props.code" highlightjs :lang="props.language" theme="neon-bunny" />
  </div>
</template>

<script setup lang="ts">
import VCodeBlock from '@wdns/vue-code-block'

const props = defineProps({
  language: {
    type: String,
    required: true
  },
  code: {
    type: String
  }
})
</script>

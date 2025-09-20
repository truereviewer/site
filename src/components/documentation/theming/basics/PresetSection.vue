<template>
  <div id="theming-basics-preset">
    <h3><a href="#theming-basics-preset">Preset</a></h3>
    <p>
      Presets are themes that design overall design of the system. You can learn more about it
      <a href="https://primevue.org/theming/styled#presets" target="_blank">here</a>. Following
      presets are available.
    </p>
    <ul class="list list-disc list-inside mt-4">
      <li>aura</li>
      <li>lara</li>
      <li>nora</li>
      <li>material</li>
    </ul>
    <CodeBlock language="php" :code="changePreset" />
  </div>
</template>

<script lang="ts" setup>
import CodeBlock from '@/components/CodeBlock.vue'

const changePreset = `
// reviewer.php

'theme' => [
      /**
       * Available options: aura, lara, nora, material
       */
      'preset' => 'aura',

`
</script>

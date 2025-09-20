<template>
  <div id="theming-basics-colors">
    <h3><a href="#theming-basics-colors">Colors</a></h3>
    <p>Changing colors is super easy.</p>
    <CodeBlock language="php" :code="changeColor" />
    <div>
      <p>
        Predefined colors cover many design needs if you need custom color set, add it
        <a
          class="underline"
          href="https://github.com/truereviewer/vue-front/blob/main/src/components/ThemeSwitcher/primaryColors.ts"
          target="_blank"
          >here</a
        >.
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CodeBlock from '@/components/CodeBlock.vue'

const changeColor = `
// reviewer.php

/**
 * Available options: noir, emerald, green, lime, orange, amber, yellow, teal, cyan, sky,
 * blue, indigo, violet, purple, fuchsia, pink, rose
 *
 * @see https://github.com/truereviewer/reviewer/blob/main/resources/ts/components/ThemeSwitcher/primaryColors.ts
 *  to add custom primary colors
 */
'primary_color' => 'emerald',
`
</script>

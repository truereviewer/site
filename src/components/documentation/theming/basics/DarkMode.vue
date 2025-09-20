<template>
  <div id="theming-basics-darkMode">
    <h3><a href="#theming-basics-darkMode">Dark Mode</a></h3>
    <p>
      System uses the <code class="code-inline">system</code> as the default selector strategy. If
      you have a dark mode switch in your application, set the selector you utilize such as
      <code class="code-inline">.dark</code> so that system can fit in seamlessly with your color
      scheme.
    </p>
    <CodeBlock language="php" :code="changeDarkMode" />
  </div>
</template>

<script lang="ts" setup>
import CodeBlock from '@/components/CodeBlock.vue'

const changeDarkMode = `
// reviewer.php

'theme' => [   
  'dark_mode_selector' => '.dark',
`
</script>

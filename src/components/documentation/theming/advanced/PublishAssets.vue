<template>
  <div id="theming-publishAssets">
    <h3><a href="#theming-publishAssets">Publish Assets</a></h3>
    <p>Before begin you should publish commenter views executing below command.</p>
    <CodeBlock language="bash" code="php artisan vendor:publish --tag=reviewer-views" />
    <p>
      This will publish reviewer views in
      <code class="code-inline">/resources/reviewer</code> directory.
    </p>
  </div>
</template>

<script lang="ts" setup>
import CodeBlock from '@/components/CodeBlock.vue'
</script>

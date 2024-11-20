<template>
  <DocumentatonSection id="theming@publsihAssets">
    <template #header><a href="#theming@publsihAssets">Publish Assets</a></template>
    <template #content>
      <p>Before begin you should publish commenter views executing below command.</p>
      <CodeBlock language="bash" code="php artisan vendor:publish --tag=reviewer-views" />
      <p>
        This will publish reviewer views in
        <code class="code-inline">/resources/reviewer</code> directory.
      </p>
    </template>
  </DocumentatonSection>
</template>

<script lang="ts" setup>
import CodeBlock from '@/components/CodeBlock.vue'
import DocumentatonSection from '@/components/documentation/DocumentatonSection.vue'
</script>

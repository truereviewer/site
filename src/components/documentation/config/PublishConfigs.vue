<template>
  <DocumentationSection id="config-publish">
    <template #header><a href="#config-publish">Publish Configs</a></template>
    <template #content>
      <p>Before begin you should publish reviewer configs executing below command.</p>
      <CodeBlock language="bash" code="php artisan vendor:publish --tag=reviewer-config" />
      <p>
        This will publish reviewer configs in
        <code class="code-inline">/config/reviewer</code> directory.
      </p>
    </template>
  </DocumentationSection>
</template>

<script lang="ts" setup>
import CodeBlock from '@/components/CodeBlock.vue'
import DocumentationSection from '@/components/documentation/DocumentationSection.vue'
</script>

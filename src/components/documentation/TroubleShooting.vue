<template>
  <DocumentationSection id="troubleShooting">
    <template #header><a href="#troubleShooting">TroubleShooting</a></template>
    <template #content>
      <div class="!mt-0">
        <h3>Assets directives not rendering</h3>
        <p>
          You might see <code class="code-inline">@reviewerStyles, @reviewerScripts</code>
          as strings. This is due to caching issues. You can fix that by clearing cache.
        </p>
        <p class="mt-4">Clear the vew cache</p>
        <CodeBlock language="bash" :code="viewCacheClear" />
        <div>
          <p>If it still not rendering, you can clear everything</p>
          <CodeBlock language="bash" :code="cacheClear" />
        </div>
      </div>
    </template>
  </DocumentationSection>
</template>

<script lang="ts" setup>
import CodeBlock from '../CodeBlock.vue'
import DocumentationSection from './DocumentationSection.vue'

const viewCacheClear = `
php artisan view:clear
`

const cacheClear = `
php artisan optimize:clear
`
</script>

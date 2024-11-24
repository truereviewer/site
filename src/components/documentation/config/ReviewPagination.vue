<template>
  <DocumentatonSection id="config@pagination">
    <template #header><a href="#config@pagination">Pagination</a></template>
    <template #content>
      <p>Reviews are paginated by page. Reviewer support both page and infinite pagination.</p>
      <div class="space-y-12">
        <div class="space-y-2">
          <h3 id="config@pagePagination">
            <a href="#config@pagePagination">Page Pagination</a>
          </h3>
          <p>Page numbers are displayed.</p>
          <CodeBlock language="html" :code="page" />
        </div>
        <div class="space-y-2">
          <h3 id="config@scrollPagination">
            <a href="#config@scrollPagination">Media Types</a>
          </h3>
          <p>
            Load more button is displayed. Performance increase as
            <a
              class="font-bold"
              href="https://laravel.com/docs/11.x/pagination#cursor-pagination"
              target="_blank"
              >cursor pagination</a
            >
            is used.
          </p>
          <CodeBlock language="html" :code="scroll" />
        </div>
      </div>
    </template>
  </DocumentatonSection>
</template>

<script lang="ts" setup>
import CodeBlock from '@/components/CodeBlock.vue'
import DocumentatonSection from '@/components/documentation/DocumentationSection.vue'

const page = `
    /**
     * Available options, page, scroll
     */
   'pagination' => 'page',
`

const scroll = `
  /**
   * Available options, page, scroll
   */
  'pagination' => 'scroll',
`
</script>

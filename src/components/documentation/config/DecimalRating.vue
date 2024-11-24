<template>
  <DocumentatonSection id="config@decimalRating">
    <template #header><a href="#config@decimalRating">Decimal Rating</a></template>
    <template #content>
      <p>
        By default, decimal rating numbers are allowed. You can disable this option by modifying the
        <code class="code-inline">enable_decimal_rating</code> setting in the
        <code class="code-inline">/config/reviewer</code> file.
      </p>
      <CodeBlock language="bash" :code="enableDecimalRating" />
    </template>
  </DocumentatonSection>
</template>

<script lang="ts" setup>
import CodeBlock from '@/components/CodeBlock.vue'
import DocumentatonSection from '@/components/documentation/DocumentationSection.vue'

const enableDecimalRating = `
  /**
   * Overall rating can be decimal number (one decimal number)
   */
      'enable_decimal_rating' => true,
`
</script>

<template>
  <DocumentatonSection id="config@media">
    <template #header><a href="#config@media">Media</a></template>
    <template #content>
      <p>
        Media uploading feature is disabled by default. You can enable the feature by setting
        <code class="code-inline">enable_media</code> in the
        <code class="code-inline">/config/reviewer</code> file.
      </p>
      <CodeBlock language="bash" :code="enableMedia" />

      <div class="space-y-12">
        <div class="space-y-2">
          <h3 id="config@mediaSize">
            <a href="#config@mediaSize">Media Size</a>
          </h3>
          <p>Media size limit in bytes can be set as below.</p>
          <CodeBlock language="html" :code="mediaSize" />
        </div>
        <div class="space-y-2">
          <h3 id="config@mediaType">
            <a href="#config@mediaType">Media Types</a>
          </h3>
          <p>Uploadable media types can be set as below.</p>
          <CodeBlock language="html" :code="mediaType" />
        </div>
        <div class="space-y-2">
          <h3 id="config@mediaLimit">
            <a href="#config@mediaLimit">Media Limit for Review</a>
          </h3>
          <p>No of media that can be attached for a review can be set as below.</p>
          <CodeBlock language="html" :code="mediaLimit" />
        </div>
      </div>
    </template>
  </DocumentatonSection>
</template>

<script lang="ts" setup>
import CodeBlock from '@/components/CodeBlock.vue'
import DocumentatonSection from '@/components/documentation/DocumentationSection.vue'

const enableMedia = `
  /**
   * Overall rating can be decimal number (one decimal number)
   */
      'enable_media' => true,
`

const mediaSize = `
  /**
   * Max uploadable media size limit in killobytes
   */
  'media_size' => 2048,
`

const mediaType = `
  /**
   * Allowed media types as describe in
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept
   */
  'media_types' => 'image/*,video/*',
`

const mediaLimit = `
  /**
   * Attachable no of media per review
   */
  'no_of_media_per_review' => 5,
`
</script>

<template>
  <DocumentationSection id="config-permissions">
    <template #header><a href="#config-permissions">Permissions</a></template>
    <template #content>
      <p>
        Reviewer has been secured though authorization. You can find action and relavent policy in
        <code class="code-inline">permissions</code> array. You can overwrite the policiesas per
        your requirements.
      </p>

      <CodeBlock language="javascript" :code="permissions" />
    </template>
  </DocumentationSection>
</template>

<script lang="ts" setup>
import CodeBlock from '@/components/CodeBlock.vue'
import DocumentationSection from '@/components/documentation/DocumentationSection.vue'

const permissions = `
  'permissions' => [
      'create_review' => [ReviewPolicy::class, 'store'],
      'approve_review' => [ReviewPolicy::class, 'approve'],
      'verify_review' => [ReviewPolicy::class, 'verify'],
      'create_review_reaction' => [ReviewPolicy::class, 'storeReaction'],
      'create_review_report' => [ReviewPolicy::class, 'storeReport'],
      'update_review_report' => [ReviewPolicy::class, 'updateReport'],
      'delete_review_report' => [ReviewPolicy::class, 'deleteReport'],
  ],
`
</script>

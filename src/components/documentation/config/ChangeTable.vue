<template>
  <DocumentationSection id="config-table">
    <template #header><a href="#config-table">Change Table/Model</a></template>
    <template #content>
      <p>Before begin you should publish reviewer configs executing below command. .</p>
      <CodeBlock language="bash" code="php artisan vendor:publish --tag=reviewer-config" />
      <p>
        This will publish reviewer configs in
        <code class="code-inline">/config/reviewer</code> directory.
      </p>

      <div class="space-y-6">
        <p>Reviewer has its own migrations/tables as below .</p>

        <table
          class="w-full overflow-auto table-auto whitespace-nowrap text-sm !mb-6 text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">Migration Name</th>
              <th scope="col" class="px-6 py-3">Table Name</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                create_reviews_table
              </th>
              <td class="px-6 py-4">reviews</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                create_review_statistics_table
              </th>
              <td class="px-6 py-4">review_statistics</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                create_media_table
              </th>
              <td class="px-6 py-4">media</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                create_reactions_table
              </th>
              <td class="px-6 py-4">reactions</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                create_reports_table
              </th>
              <td class="px-6 py-4">reports</td>
            </tr>
          </tbody>
        </table>

        <p>
          When migrating these tables, name collisions may occur if your project already uses the
          same table names as Commenter's tables. This page provides guidance on how to avoid such
          collisions.
        </p>

        <p>
          Imagine your project already has a <code class="code-inline">reviews</code> table, and you
          want to rename Commenter's comments table to
          <code class="code-inline">lakm_reviews</code>.
        </p>

        <p>
          You can rename the reviews table by changing the
          <code class="code-inline">table</code> key in
          <code class="code-inline">models</code> array in the
          <code class="code-inline">config/reviewer.php</code> config file.
        </p>
        <CodeBlock language="php" :code="changeTable" />
      </div>
    </template>
  </DocumentationSection>
</template>

<script lang="ts" setup>
import CodeBlock from '@/components/CodeBlock.vue'
import DocumentationSection from '@/components/documentation/DocumentationSection.vue'

const changeTable = `
  ...
  'models' => [
        'review_model' => [
            /**
             * -extends Review
             */
            'class' => Review::class,
            'table' => 'lakm_reviews',
        ],
        ...
`
</script>

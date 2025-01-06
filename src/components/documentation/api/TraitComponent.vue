<template>
  <DocumentationSection>
    <template #header><a id="api-traits" href="#api-traits">Traits</a></template>
    <template #content>
      <div class="!mt-4">
        <h3 class="!text-2xl">
          <a id="api-traits-reviewable" href="api-traits-reviewable"></a>Reviewable
        </h3>
        <ul class="!mt-2 text-base">
          <li class="flex gap-6">
            <span class="basis-[8rem]">Namespace</span>
            <a
              class="hover:underline"
              href="https://github.com/truereviewer/reviewer/blob/main/src/Models/Concerns/Reviewable.php"
              target="_blank"
            >
              TrueReviewer\Reviewer\Models\Concerns
            </a>
          </li>
          <li class="flex gap-6">
            <span class="basis-[8rem]">Available</span>
            <span> <a class="hover:underline" href="#installation-step6">Reviewable Model</a></span>
          </li>
        </ul>
      </div>

      <div class="!mt-6">
        <h3>Methods</h3>
        <table
          class="w-full overflow-auto table-auto whitespace-nowrap text-sm !mb-6 text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">Name</th>
              <th scope="col" class="px-6 py-3">Return Type</th>
            </tr>
          </thead>
          <tbody>
            <tr
              @click="scrollTo('api-traits-reviewable-reviews')"
              class="bg-white hover:bg-gray-100 hover:cursor-pointer border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td
                scope="row"
                class="px-6 py-4 align-baseline font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                reviews()
              </td>
              <td class="px-6 py-4">
                <div class="flex flex-col">
                  <span>Illuminate\Database\Eloquent\Relations\MorphMany</span>
                  <span>Get all the reviews of a revewable model</span>
                </div>
              </td>
            </tr>

            <tr
              @click="scrollTo('api-traits-reviewable-reviews')"
              class="bg-white hover:bg-gray-100 hover:cursor-pointer border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td
                scope="row"
                class="px-6 py-4 align-baseline font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                reviewStats()
              </td>
              <td class="px-6 py-4">
                <div class="flex flex-col">
                  <span>Illuminate\Database\Eloquent\Relations\MorphOne</span>
                  <span>Get the reviews's statistics of a revewable model</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="space-y-8 [&_p]:!my-0">
        <h3>Details</h3>

        <div class="space-y-4 text-base !mt-4">
          <h4 id="api-traits-reviewable-reviews" class="mb-4 bg-gray-100 p-2">
            <a href="#api-traits-reviewable-reviews"
              >reviews(): Illuminate\Database\Eloquent\Relations\MorphMany</a
            >
          </h4>

          <p>Get all the reviews of a revewable model</p>

          <div>
            <p class="font-bold">Parameters</p>
            -
          </div>

          <div class="space-y-2">
            <p class="font-bold">Return Type</p>
            <p>Illuminate\Database\Eloquent\Relations\MorphMany</p>
          </div>
        </div>

        <div class="space-y-2 text-base">
          <h4 id="api-traits-reviewable-reviews" class="mb-4 bg-gray-100 p-2">
            <a href="#api-traits-reviewable-reviews"
              >reviewStats(): Illuminate\Database\Eloquent\Relations\MorphOne</a
            >
          </h4>

          <p>Get the reviews's statistics of a revewable model</p>

          <div>
            <p class="font-bold">Parameters</p>
            -
          </div>

          <div class="space-y-2">
            <p class="font-bold">Return Type</p>
            <p>Illuminate\Database\Eloquent\Relations\MorphMany</p>
          </div>
        </div>
      </div>
    </template>
  </DocumentationSection>
</template>

<script lang="ts" setup>
import CodeBlock from '@/components/CodeBlock.vue'
import DocumentationSection from '@/components/documentation/DocumentationSection.vue'

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView()
}
</script>

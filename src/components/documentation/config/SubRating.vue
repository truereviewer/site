<template>
  <DocumentatonSection id="config@subRating">
    <template #header><a href="#config@subRating">Sub Rating Types</a></template>
    <template #content>
      <p>
        Sub-ratings offer users valuable insights into the product. This feature is disabled by
        default but can be enabled by setting <code class="code-inline">enable_sub_rating</code> in
        the <code class="code-inline">/config/reviewer</code> file.
      </p>
      <CodeBlock language="bash" :code="enableSubRating" />
      <p>
        Then you should implement <code class="code-inline">subRatingTypes</code> method and add sub
        rating types.
      </p>
      <CodeBlock language="bash" :code="subRatingTypes" />
      <p>This will enable following sub ratings.</p>

      <div>
        <img class="border" src="/src/assets/img/reviewer/sub_rating.png" alt="sub rating" />
      </div>
    </template>
  </DocumentatonSection>
</template>

<script lang="ts" setup>
import CodeBlock from '@/components/CodeBlock.vue'
import DocumentatonSection from '@/components/documentation/DocumentationSection.vue'
import { ReviewerComponent } from '@/enums/ReviewerComponent'
import { ReviewerComponentService } from '@/services/ReviewerComponentService'

const srcs = new ReviewerComponentService(ReviewerComponent.SUB_RATING_DISTRIBUTION)

const enableSubRating = `
  /**
   * Overall rating can be decimal number (one decimal number)
   */
      'enable_sub_rating' => true,
`

const subRatingTypes = `
  public function subRatingTypes(): array
  {
      return [
          'quality' => ['title' => 'Quality'],
          'value' => ['title' => 'Value for money'],
          'durability' => ['title' => 'Durability'],
      ];
  }
`
</script>

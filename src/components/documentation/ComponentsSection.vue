<template>
  <DocumentatonSection id="components">
    <template #header><a href="#components">Components</a></template>
    <template #content>
      <p>
        Reviewer offers 5 standalone components that can be used individually or combined
        seamlessly.
      </p>

      <div class="space-y-12">
        <div class="space-y-4">
          <h3 id="components@widget">
            <a href="#components@widget">{{ wcs.title() }}</a>
          </h3>
          <p>{{ wcs.description() }}</p>
          <CodeBlock language="html" :code="useComponent('widget')" />

          <div class="flex gap-4 flex-wrap border p-4">
            <img v-for="img in wcs.images()" :src="img.src" :alt="img.alt" :key="img.src" />
          </div>
        </div>

        <div class="space-y-4">
          <h3 id="components@ratingDistribution">
            <a href="#components@ratingDistribution">{{ rdcs.title() }}</a>
          </h3>
          <p>{{ rdcs.description() }}</p>
          <CodeBlock language="html" :code="useComponent('rating-distribution')" />

          <div v-if="rdcs.images().length > 0" class="flex gap-4 flex-wrap border p-4">
            <img v-for="img in rdcs.images()" :src="img.src" :alt="img.alt" :key="img.src" />
          </div>
        </div>

        <div class="space-y-4">
          <h3 id="components@subRatingDistribution">
            <a href="#components@subRatingDistribution">{{ srdcs.title() }}</a>
          </h3>
          <p v-html="srdcs.description()"></p>
          <CodeBlock language="html" :code="useComponent('sub-rating-distribution')" />

          <div v-if="srdcs.images().length > 0" class="flex gap-4 flex-wrap border p-4">
            <img v-for="img in srdcs.images()" :src="img.src" :alt="img.alt" :key="img.src" />
          </div>
        </div>

        <div class="space-y-4">
          <h3 id="components@mediaGallery">
            <a href="#components@mediaGallery">{{ mgcs.title() }}</a>
          </h3>
          <p v-html="mgcs.description()"></p>
          <CodeBlock language="html" :code="useComponent('media-gallery')" />

          <div v-if="mgcs.images().length > 0" class="flex gap-4 flex-wrap border p-4">
            <img v-for="img in mgcs.images()" :src="img.src" :alt="img.alt" :key="img.src" />
          </div>
        </div>

        <div class="space-y-4">
          <h3 id="components@reviewList">
            <a href="#components@reviewList">{{ rlcs.title() }}</a>
          </h3>
          <p v-html="rlcs.description()"></p>
          <CodeBlock language="html" :code="useComponent('review-list')" />

          <div v-if="rlcs.images().length > 0" class="flex gap-4 flex-wrap border p-4">
            <img v-for="img in rlcs.images()" :src="img.src" :alt="img.alt" :key="img.src" />
          </div>
        </div>

        <div class="space-y-4">
          <h3 id="components@reviewer">
            <a href="#components@reviewer">{{ rcs.title() }}</a>
          </h3>
          <p v-html="rcs.description()"></p>
          <CodeBlock language="html" :code="useComponent('review-list')" />

          <div v-if="rcs.images().length > 0" class="flex gap-4 flex-wrap border p-4">
            <img v-for="img in rcs.images()" :src="img.src" :alt="img.alt" :key="img.src" />
          </div>
        </div>
      </div>
    </template>
  </DocumentatonSection>
</template>

<script lang="ts" setup>
import { ReviewerComponent } from '@/enums/ReviewerComponent'
import DocumentatonSection from './DocumentationSection.vue'
import { ReviewerComponentService } from '@/services/ReviewerComponentService'
import CodeBlock from '../CodeBlock.vue'

const wcs = new ReviewerComponentService(ReviewerComponent.WIDGET)
const rdcs = new ReviewerComponentService(ReviewerComponent.RATING_DISTRIBUTION)
const srdcs = new ReviewerComponentService(ReviewerComponent.SUB_RATING_DISTRIBUTION)
const mgcs = new ReviewerComponentService(ReviewerComponent.MEDIA_GALLERY)
const rlcs = new ReviewerComponentService(ReviewerComponent.REVIEW_LIST)
const rcs = new ReviewerComponentService(ReviewerComponent.BIG_PICTURE)

const useComponent = (name: string) => `
<${name} id="{{$product->getKey()}} modelType={{$product->getMorphClass()}}"/>
`
</script>

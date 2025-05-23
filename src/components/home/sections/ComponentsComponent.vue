<template>
  <SectionComponent class="flex flex-col items-start justify-center">
    <template #header>Components </template>
    <template #content>
      <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(img, name) in components"
          :key="name"
          class="text-center h-[25rem] border rounded bg-gradient-to-br from-green-400/10 to-green-500/80 hover:!bg-none group"
        >
          <div class="relative w-full h-full overflow-hidden">
            <h2
              class="!text-black !px-4 !m-0 w-full h-full flex justify-center items-center uppercase group-hover:invisible"
            >
              {{ img.title }}
            </h2>
            <div
              class="absolute top-0 left-0 w-full h-full z-10 opacity-20 group-hover:opacity-100 transition-[opacity]"
            >
              <a
                class="flex justify-center items-center w-full h-full"
                :href="img.id ? '#' + img.id : img.src"
                :target="img.id ? '_self' : '_blank'"
              >
                <img
                  :class="
                    'absolute !my-0 border-2 border-[var(--secondary-border-color)] w-full h-full ' +
                    img.objectFit
                  "
                  :src="img.src"
                  :alt="img.alt"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </template>
  </SectionComponent>
</template>

<script setup lang="ts">
import SectionComponent from '@/components/SectionComponent.vue'
import WidgetImg from '@/assets/img/reviewer/full-widget.png'
import StatsImg from '@/assets/img/reviewer/lg/1.png'
import RecommendationImg from '@/assets/img/reviewer/lg/2.png'
import SubRatingImg from '@/assets/img/reviewer/sub_rating.png'
import MediaGalleryImg from '@/assets/img/reviewer/lg/3.png'
import ModalImg from '@/assets/img/reviewer/review_modal_sm.png'
import ReviewImg from '@/assets/img/reviewer/review.png'
import FiltersImg from '@/assets/img/reviewer/filters_sm.png'
import FormImg from '@/assets/img/reviewer/form.png'

const components = {
  widget: {
    src: WidgetImg,
    alt: 'widget',
    title: 'widget',
    objectFit: 'object-none',
    id: 'component__widget'
  },
  stats: {
    src: StatsImg,
    alt: 'stats',
    title: 'Review Statistics',
    objectFit: 'object-contain',
    id: 'component__rating_distribution'
  },
  recommendations: {
    src: RecommendationImg,
    title: 'Recommendations',
    alt: 'recommendations',
    objectFit: 'object-contain',
    id: 'component__sub_rating_distribution'
  },
  dynamicSubRatings: {
    src: SubRatingImg,
    alt: 'dynamic sub ratings',
    title: 'dynamic sub ratings',
    objectFit: 'object-none',
    id: 'component__sub_rating_distribution'
  },
  mediaGallery: {
    src: MediaGalleryImg,
    alt: 'media gallery',
    title: 'Media Gallery',
    objectFit: 'object-contain',
    id: 'media__gallery'
  },
  modal: {
    src: ModalImg,
    alt: 'review modal',
    title: 'Review Modal',
    objectFit: 'object-contain',
    id: ''
  },
  list: {
    src: ReviewImg,
    alt: 'detailed review list',
    title: 'Detailed Review List',
    objectFit: 'object-contain',
    id: 'component__list'
  },
  filters: {
    src: FiltersImg,
    alt: 'advanced filters',
    title: 'Advanced Filters',
    objectFit: 'object-contain',
    id: ''
  },
  forms: {
    src: FormImg,
    alt: 'forms',
    title: 'Elegant Forms',
    objectFit: 'object-contain',
    id: ''
  }
}
</script>

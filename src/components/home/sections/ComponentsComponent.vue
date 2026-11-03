<template>
  <SectionComponent class="flex flex-col items-start justify-center">
    <template #header>Components </template>
    <template #content>
      <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 hover:cursor-pointer">
        <div
          ref="info"
          v-for="(img, name, index) in components"
          @click="showInfoDialog(img.component, index)"
          :key="name"
          class="text-center relative h-[25rem] border shadow rounded from-[oklch(from_var(--secondary-bg-color)_l_c_h_/_10%)] to-[oklch(from_var(--primary-bg-color)_l_c_h_/_70%)]"
        >
          <v-icon class="absolute bottom-0 right-0" icon="$information" size="1.6rem" />
          <div
            class="relative flex flex-col items-center justify-start w-full h-full overflow-hidden"
          >
            <h3 class="!px-4 !mt-4 flex justify-center items-center uppercase">
              {{ img.title }}
            </h3>
            <div>
              <img
                :style="`width: ${img.width}`"
                :class="'w-[15rem] !my-2 ' + img.objectFit"
                :src="img.src"
                :alt="img.alt"
              />
            </div>
          </div>
        </div>
      </div>

      <v-dialog @afterLeave="onDialogLeave" v-model="showDialog" :activator="dialogActivator">
        <template v-slot:default="{ isActive }">
          <v-card title="Dialog">
            <component class="prose lg:prose-lg max-w-none" :is="activeInfoComponent" />

            <template #title>
              <!--              <h2 class="!text-2xl">Widget</h2>-->
            </template>
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn @click="isActive.value = false" variant="tonal">Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </template>
  </SectionComponent>
</template>

<script setup lang="ts">
import { ref, useTemplateRef, shallowRef } from 'vue'
import SectionComponent from '@/components/SectionComponent.vue'
import WidgetImg from '@/assets/img/reviewer/full-widget.png'
import StatsImg from '@/assets/img/reviewer/lg/1.png'
import RecommendationImg from '@/assets/img/reviewer/lg/2.png'
import SubRatingImg from '@/assets/img/reviewer/sub_rating.png'
import MediaGalleryImg from '@/assets/img/reviewer/media_gallery/1.jpeg'
import ModalImg from '@/assets/img/reviewer/review_modal_sm.png'
import ReviewImg from '@/assets/img/reviewer/review.png'
import FiltersImg from '@/assets/img/reviewer/filters_sm.png'
import FormImg from '@/assets/img/reviewer/form.png'
import WidgetInfo from '@/components/informations/WidgetInfo.vue'
import RatingDistributionInfo from '@/components/informations/RatingDistributionInfo.vue'
import SubRatingDistributionInfo from '@/components/informations/SubRatingDistributionInfo.vue'
import MediaGalleryInfo from '@/components/informations/MediaGalleryInfo.vue'
import ReviewListInfo from '@/components/informations/ReviewListInfo.vue'

const components = {
  widget: {
    name: 'widget',
    component: WidgetInfo,
    src: WidgetImg,
    alt: 'widget',
    title: 'widget',
    objectFit: 'object-none',
    id: 'component__widget',
    width: '15rem'
  },
  stats: {
    component: RatingDistributionInfo,
    src: StatsImg,
    alt: 'stats',
    title: 'Review Statistics',
    objectFit: 'object-contain',
    id: 'component__rating_distribution',
    width: '17rem'
  },
  recommendations: {
    component: SubRatingDistributionInfo,
    src: RecommendationImg,
    title: 'Recommendations',
    alt: 'recommendations',
    objectFit: 'object-contain',
    id: 'component__sub_rating_distribution',
    width: '15rem'
  },
  dynamicSubRatings: {
    component: SubRatingDistributionInfo,
    src: SubRatingImg,
    alt: 'dynamic sub ratings',
    title: 'dynamic sub ratings',
    objectFit: 'object-none',
    id: 'component__sub_rating_distribution',
    width: '100rem'
  },
  mediaGallery: {
    component: MediaGalleryInfo,
    src: MediaGalleryImg,
    alt: 'media gallery',
    title: 'Media Gallery',
    objectFit: 'object-contain',
    id: 'media__gallery',
    width: '25rem'
  },
  modal: {
    src: ModalImg,
    alt: 'review modal',
    title: 'Review Modal',
    objectFit: 'object-contain',
    id: '',
    width: '14rem'
  },
  list: {
    component: ReviewListInfo,
    src: ReviewImg,
    alt: 'detailed review list',
    title: 'Detailed Review List',
    objectFit: 'object-contain',
    id: 'component__list',
    width: '18rem'
  },
  filters: {
    src: FiltersImg,
    alt: 'advanced filters',
    title: 'Advanced Filters',
    objectFit: 'object-contain',
    id: '',
    width: '18rem'
  },
  forms: {
    src: FormImg,
    alt: 'forms',
    title: 'Elegant Forms',
    objectFit: 'object-contain',
    id: '',
    width: '16rem'
  }
}

const infoRefs = useTemplateRef('info')

const dialogActivator = ref()
const showDialog = ref(false)

const activeInfoComponent = shallowRef()

function showInfoDialog(component: Element, index: number) {
  dialogActivator.value = infoRefs.value![index]
  activeInfoComponent.value = component
  showDialog.value = true
}

function onDialogLeave() {
  dialogActivator.value = undefined
  activeInfoComponent.value = undefined
  showDialog.value = false
}
</script>

<style scoped>
h3 {
  font-size: 1.6rem !important;
  font-weight: normal !important;
}
</style>

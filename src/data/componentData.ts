import type { ReviewerComponentData } from '@/interfaces'
import FullWidget from '@/assets/img/reviewer/full-widget.png'
import RatingDistribution from '@/assets/img/reviewer/lg/1.png'
import SubRatingDistribution from '@/assets/img/reviewer/lg/2.png'
import MediaGallery from '@/assets/img/reviewer/lg/3.png'
import SmallMediaGallery from '@/assets/img/reviewer/sm/3.png'

import ReviewListFilters from '@/assets/img/reviewer/lg/4-1.png'
import ReviewList from '@/assets/img/reviewer/lg/4-2.png'

const widgetComponentData: ReviewerComponentData = {
  title: 'Widget',
  description:
    'The widget gives users an overall idea of your product, with detailed statistics appearing as a popup when hovered over.',
  images: [{ src: FullWidget, alt: 'Full Widget' }]
}

const RatingDistributionComponentData: ReviewerComponentData = {
  title: 'Rating Distribution',
  description: 'This component provides detailed analytics about the ratings.',
  images: [{ src: RatingDistribution, alt: 'Rating distribution' }]
}

const subRatingDistributionComponentData: ReviewerComponentData = {
  title: 'Sub Rating Distribution and Recommendations',
  description: `<p class="!mt-0">Recommendations are an accurate way to get an idea about the overall product quality.</p>
  <p class="!mt-0">
    Sub-ratings provide additional value to users. These are dynamic, allowing you to add any
    characteristics to your product, such as quality, value for money, durability, etc.
  </p>`,
  images: [{ src: SubRatingDistribution, alt: 'Sub Rating distribution' }]
}

const mediaGalleryComponentData: ReviewerComponentData = {
  title: 'Advanced Media Gallery',
  description:
    'A picture is worth a thousand words. With our media gallery, users can comfortably preview images.',
  images: [{ src: MediaGallery, alt: 'Media Gallery' }]
}

const reviewListComponentData: ReviewerComponentData = {
  title: 'Review List',
  description: 'Beautifully paginated list with advanced filtering options.',
  images: [
    { src: ReviewListFilters, alt: 'Review List Filters' },
    { src: ReviewList, alt: 'Review List' }
  ]
}

const bigPictureComponentData: ReviewerComponentData = {
  title: 'Together, they create a complete picture.',
  description: '',
  images: [
    { src: FullWidget, alt: 'Review List Filters' },
    { src: RatingDistribution, alt: 'Review Stats' },
    { src: SubRatingDistribution, alt: 'Review Recommendation' },
    { src: MediaGallery, alt: 'Review Gallery' },
    { src: SmallMediaGallery, alt: 'Review Gallery' },
    { src: ReviewListFilters, alt: 'Review Filters' },
    { src: ReviewList, alt: 'Review List' }
  ]
}

export {
  widgetComponentData,
  RatingDistributionComponentData,
  subRatingDistributionComponentData,
  mediaGalleryComponentData,
  reviewListComponentData,
  bigPictureComponentData
}

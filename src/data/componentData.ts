import type { ReviewerComponentData } from '@/interfaces'

const widgetComponentData: ReviewerComponentData = {
  title: 'Widget',
  description:
    'The widget provides users with an overall idea about your product. Statistics appear as a popup when hovered over.',
  images: [{ src: '/src/assets/img/reviewer/full-widget.png', alt: 'Full Widget' }]
}

const RatingDistributionComponentData: ReviewerComponentData = {
  title: 'Rating Distribution',
  description: 'This component provides detailed analytics about the ratings.',
  images: [{ src: '/src/assets/img/reviewer/lg/1.png', alt: 'Rating distribution' }]
}

const subRatingDistributionComponentData: ReviewerComponentData = {
  title: 'Sub Rating Distribution and Recommendations',
  description: `<p class="!mt-0">Recommendations are an accurate way to get an idea about the overall product quality.</p>
  <p class="!mt-0">
    Sub-ratings provide additional value to users. These are dynamic, allowing you to add any
    characteristics to your product, such as quality, value for money, durability, etc.
  </p>`,
  images: [{ src: '/src/assets/img/reviewer/lg/2.png', alt: 'Sub Rating distribution' }]
}

const mediaGalleryComponentData: ReviewerComponentData = {
  title: 'Advanced Media Gallery',
  description:
    'A picture is worth a thousand words. With our media gallery, users can comfortably preview images.',
  images: [{ src: '/src/assets/img/reviewer/lg/3.png', alt: 'Media Gallery' }]
}

const reviewListComponentData: ReviewerComponentData = {
  title: 'Review List',
  description: 'Beautifully paginated list with advanced filtering options.',
  images: [
    { src: '/src/assets/img/reviewer/lg/4-1.png', alt: 'Review List Filters' },
    { src: '/src/assets/img/reviewer/lg/4-2.png', alt: 'Review List' }
  ]
}

const bigPictureComponentData: ReviewerComponentData = {
  title: 'Together, they create a complete picture.',
  description: '',
  images: [
    { src: '/src/assets/img/reviewer/widget.png.png', alt: 'Review List Filters' },
    { src: '/src/assets/img/reviewer/lg/1.png', alt: 'Review List' },
    { src: '/src/assets/img/reviewer/lg/2.png', alt: 'Review List' },
    { src: '/src/assets/img/reviewer/lg/3.png.png', alt: 'Review List' },
    { src: '/src/assets/img/reviewer/lg/4-1.png', alt: 'Review List' }
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

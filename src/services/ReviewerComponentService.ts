import { ReviewerComponent } from '@/enums/ReviewerComponent'
import {
  bigPictureComponentData,
  mediaGalleryComponentData,
  RatingDistributionComponentData,
  reviewListComponentData,
  subRatingDistributionComponentData,
  widgetComponentData
} from '@/data/componentData'
import type { ReviewerComponentData } from '@/interfaces'

export class ReviewerComponentService {
  type: ReviewerComponent
  data?: ReviewerComponentData

  constructor(componentType: ReviewerComponent) {
    this.type = componentType
    this.setData()
  }

  description(): string {
    return this.data?.description ?? ''
  }

  title(): string {
    return this.data?.title ?? ''
  }

  images(): { src: string; alt: string }[] {
    return this.data?.images ?? []
  }

  setData() {
    if (this.type === ReviewerComponent.WIDGET) {
      return (this.data = widgetComponentData)
    }

    if (this.type === ReviewerComponent.RATING_DISTRIBUTION) {
      return (this.data = RatingDistributionComponentData)
    }

    if (this.type === ReviewerComponent.SUB_RATING_DISTRIBUTION) {
      return (this.data = subRatingDistributionComponentData)
    }

    if (this.type === ReviewerComponent.MEDIA_GALLERY) {
      return (this.data = mediaGalleryComponentData)
    }

    if (this.type === ReviewerComponent.REVIEW_LIST) {
      return (this.data = reviewListComponentData)
    }

    if (this.type === ReviewerComponent.BIG_PICTURE) {
      return (this.data = bigPictureComponentData)
    }
  }
}

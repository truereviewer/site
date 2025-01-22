interface ReviewerComponentData {
  title: string
  description: string
  images?: { src: string; alt: string }[]
}

interface MetaTags {
  title: string
  description: string
}

export type { ReviewerComponentData, MetaTags }

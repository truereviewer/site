import type { MetaTags } from '@/interfaces'
import { onBeforeMount } from 'vue'

export function useMetaTags(tags: MetaTags) {
  onBeforeMount(() => {
    document.title = `${tags.title} - TrueReviewer`
  })
}

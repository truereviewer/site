import type { MetaTags } from '@/interfaces'
import { onBeforeMount } from 'vue'
import { useHead } from '@unhead/vue'

export function useMetaTags(tags: MetaTags) {
  //onBeforeMount(() => {
  useHead({
    title: `${tags.title} - TrueReviewer`,
    meta: [
      // Meta tags
      { name: 'description', content: tags.description },

      // OG tags
      { name: 'og:type', content: 'product' },
      { name: 'og:title', content: 'TrueReviewer' },
      { name: 'og:url', content: window.location.origin + window.location.pathname },
      { name: 'og:description', content: tags.description },
      { name: 'og:plural_title', content: 'TrueReviewer' },
      { name: 'og:image', content: window.location.origin + '/og.png' },

      // Twitter Card
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: 'TrueReviewer' },
      { name: 'twitter:site', content: '@Truereviewer_LM' },
      { name: 'twitter:description', content: tags.description },
      { name: 'twitter:image', content: window.location.origin + '/og.png' },
      { name: 'twitter:image:alt', content: 'TrueReviewer image' }
    ]
  })
  //})
}

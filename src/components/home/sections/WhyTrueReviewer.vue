<template>
  <SectionComponent class="flex flex-col items-start justify-center">
    <template #header>Why This is a Must-Have </template>
    <template #content>
      <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          class="text-center pb-4 border rounded bg-gradient-to-br from-green-400/10 to-green-500/80"
        >
          <div class="relative w-full h-full overflow-hidden">
            <h2 class="!text-black !m-4">Builds Trust and Credibility</h2>

            <div class="w-full flex justify-center items-center">
              <img class="w-24 !my-0" src="/src/assets/svg/trust.svg" alt="trust" />
            </div>

            <ul class="text-gray-900 list-inside z-100 relative">
              <li class="flex items-center text-start leading-normal px-2">
                Positive reviews act as social proof, reassuring potential customers of your product
                or service quality.
              </li>
              <li class="flex items-center text-start leading-normal px-2">
                Transparency in displaying reviews fosters trust in your brand.
              </li>
            </ul>
          </div>
        </div>

        <div
          class="text-center pb-4 border rounded bg-gradient-to-br from-green-400/10 to-green-500/80"
        >
          <div class="relative w-full h-full overflow-hidden">
            <h2 class="!text-black !m-4">Boosts Customer Engagement</h2>

            <div class="w-full flex justify-center items-center">
              <img class="w-24 !my-0" src="/src/assets/svg/customers.svg" alt="trust" />
            </div>

            <ul class="text-gray-900 list-inside z-100 relative">
              <li class="flex items-center text-start leading-normal px-2">
                Encourages customers to interact with your business.
              </li>
              <li class="flex items-center text-start leading-normal px-2">
                Responding to reviews shows customers that their opinions matter, strengthening
                relationships.
              </li>
            </ul>
          </div>
        </div>

        <div
          class="text-center pb-4 border rounded bg-gradient-to-br from-green-400/10 to-green-500/80"
        >
          <div class="relative w-full h-full overflow-hidden">
            <h2 class="!text-black !m-4">Improves Online Visibility</h2>

            <div class="w-full flex justify-center items-center">
              <img class="w-24 !my-0" src="/src/assets/svg/visibility.svg" alt="trust" />
            </div>

            <ul class="text-gray-900 list-inside z-100 relative">
              <li class="flex items-center text-start leading-normal px-2">
                Search engines often prioritize businesses with more frequent and higher-quality
                reviews, improving SEO rankings.
              </li>
              <li class="flex items-center text-start leading-normal px-2">
                Reviews can help your business appear in local search results and "best of" lists.
              </li>
            </ul>
          </div>
        </div>

        <div
          class="text-center pb-4 border rounded bg-gradient-to-br from-green-400/10 to-green-500/80"
        >
          <div class="relative w-full h-full overflow-hidden">
            <h2 class="!text-black !m-4">Provides Valuable Feedback</h2>

            <div class="w-full flex justify-center items-center">
              <img class="w-24 !my-0" src="/src/assets/svg/feedback.svg" alt="trust" />
            </div>

            <ul class="text-gray-900 list-inside z-100 relative">
              <li class="flex items-center text-start leading-normal px-2">
                Insights from reviews help identify strengths and areas for improvement in your
                product or service.
              </li>
              <li class="flex items-center text-start leading-normal px-2">
                Constructive criticism can guide strategic decisions.
              </li>
            </ul>
          </div>
        </div>

        <div
          class="text-center pb-4 border rounded bg-gradient-to-br from-green-400/10 to-green-500/80"
        >
          <div class="relative w-full h-full overflow-hidden">
            <h2 class="!text-black !m-4">Drives Sales Drives Sales</h2>

            <div class="w-full flex justify-center items-center">
              <img class="w-24 !my-0" src="/src/assets/svg/sales-up.svg" alt="trust" />
            </div>

            <ul class="text-gray-900 list-inside z-100 relative">
              <li class="flex items-center text-start leading-normal px-2">
                Engaging with reviews creates a positive experience that can inspire customer
                loyalty.
              </li>
              <li class="flex items-center text-start leading-normal px-2">
                Satisfied customers who leave positive reviews are more likely to return.
              </li>
            </ul>
          </div>
        </div>

        <div
          class="text-center pb-4 border rounded bg-gradient-to-br from-green-400/10 to-green-500/80"
        >
          <div class="relative w-full h-full overflow-hidden">
            <h2 class="!text-black !m-4">Encourages Repeat Business</h2>

            <div class="w-full flex justify-center items-center">
              <img class="w-24 !my-0" src="/src/assets/svg/repeat.svg" alt="trust" />
            </div>

            <ul class="text-gray-900 list-inside z-100 relative">
              <li class="flex items-center text-start leading-normal px-2">
                Engaging with reviews creates a positive experience that can inspire customer
                loyalty.
              </li>
              <li class="flex items-center text-start leading-normal px-2">
                Satisfied customers who leave positive reviews are more likely to return.
              </li>
            </ul>
          </div>
        </div>

        <div
          class="text-center pb-4 border rounded bg-gradient-to-br from-green-400/10 to-green-500/80"
        >
          <div class="relative w-full h-full overflow-hidden">
            <h2 class="!text-black !m-4">Differentiates Your Business</h2>

            <div class="w-full flex justify-center items-center">
              <img class="w-24 !my-0" src="/src/assets/svg/unique.svg" alt="trust" />
            </div>

            <ul class="text-gray-900 list-inside z-100 relative">
              <li class="flex items-center text-start leading-normal px-2">
                A strong review system sets your business apart from competitors, especially if you
                have a higher rating or more testimonials.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </template>
  </SectionComponent>
</template>

<script setup lang="ts">
import SectionComponent from '@/components/SectionComponent.vue'
</script>

<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import SectionComponent from '@/components/SectionComponent.vue'
</script>

<template>
  <SectionComponent id="sponserware" class="mt-12">
    <template #content>
      <div class="text-center w-full">
        <div class="flex items-center justify-center w-full">
          <h2 class="!m-0 !mr-4">Sponserware</h2>
          <img class="w-8 !m-0" src="/src/assets/img/give-love.png" alt="sponserware" />
        </div>
        <p class="!mb-0 w-full">
          This is a sponserware. Only the people who sponser to my github repo can access to this
          repo.
        </p>
        <p class="text-red-500 font-semibold !mt-0 w-full">* Only personnal accounts are allowed</p>

        <div class="flex flex-wrap items-center lg:flex-row justify-center gap-8 w-full">
          <div
            class="p-4 shadow border rounded w-[25rem] bg-gradient-to-r from-green-300/10 to-green-400"
          >
            <ul
              class="text-start leading-7 max-w-lg text-black list-inside dark:text-gray-400 !pl-0"
            >
              <li class="flex items-center !pl-0">
                <svg
                  class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                  />
                </svg>
                Unlimited Projects
              </li>
              <li class="flex items-center !pl-0">
                <svg
                  class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                  />
                </svg>
                Free Updates Forever
              </li>
              <li class="flex items-center !pl-0">
                <svg
                  class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                  />
                </svg>
                <span>Only personnal accounts, Not support organization</span>
              </li>
              <li class="flex items-center !pl-0">
                <svg
                  class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                  />
                </svg>
                Read-Only access to the repository
              </li>
            </ul>

            <div class="flex justify-between items-center text-start mt-12">
              <ButtonComponent
                class="flex justify-between items-center gap-x-8 !py-[0.8rem] !text-lg !from-green-800 !to-green-900"
              >
                <span>Forever</span>
                <span>$350</span>
              </ButtonComponent>
              <ButtonComponent
                class="flex justify-between items-center gap-x-8 !py-[0.8rem] !text-lg !from-green-800 !to-green-900"
              >
                <span>Monthly</span>
                <span>$15</span>
              </ButtonComponent>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8">
        <p class="!mb-0 font-bold">Note:</p>
        <p class="text-red-700 !my-0">
          * If you chosed forever plan, email must be sent to the ep@gmail.com address
        </p>
        <p class="!mt-0">* It can take up to 24 hours to get your subscription activated.</p>
      </div>
    </template>
  </SectionComponent>
</template>

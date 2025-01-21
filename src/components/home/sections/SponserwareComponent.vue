<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import SectionComponent from '@/components/SectionComponent.vue'
import { Contact } from '@/enums/Contact'
</script>

<template>
  <SectionComponent id="sponserware" class="mt-12">
    <template #content>
      <div class="text-center w-full">
        <div class="flex items-center justify-center w-full">
          <h2 class="!m-0 !mr-4">Sponsorware</h2>

          <img class="w-8 !m-0" src="/src/assets/img/give-love.png" alt="sponserware" />
        </div>
        <p class="!mb-0 w-full">
          This is a
          <a
            class="no-underline text-orange-400 inline-block pb-1"
            href="https://github.com/sponsorware/docs"
            >sponsorware</a
          >, meaning only those who sponsor to the GitHub account gain access to this repository.
        </p>
        <p class="text-red-500 font-semibold !mt-0 w-full">
          * Only personnal accounts are allowed.
          <a :href="'mailto:' + Contact.EMAIL" class="text-red-500">Contact us for team support</a>
        </p>

        <div class="mt-4">
          <p class="text-red-500 font-semibold !my-0">
            * If you chosed forever plan, email must be sent to the
            <a :href="'mailto:' + Contact.EMAIL" class="text-red-500">{{ Contact.EMAIL }}</a>
            address with followings.
          </p>
          <div
            class="list-none flex w-full italic text-base !mt-0 gap-x-8 items-center justify-center"
          >
            <ul class="list-none !mt-0">
              <li class="flex justify-between md:w-[25rem]">
                <span>Subject</span><span>Activate</span>
              </li>
              <li class="flex justify-between md:w-[25rem]">
                <span>Body</span
                ><span
                  >Github repository
                  <span class="text-xs">(must be the same used to sponser)</span></span
                >
              </li>
            </ul>
          </div>

          <p class="!mt-0">* It can take up to 24 hours to get your subscription activated.</p>
        </div>

        <div class="flex flex-wrap items-center px-2 lg:flex-row justify-center gap-8 w-full">
          <div
            class="p-4 shadow border rounded lg:w-[35rem] bg-gradient-to-r from-green-300/10 to-green-400"
          >
            <ul
              class="text-start leading-7 max-w-lg text-black list-inside dark:text-gray-400 !pl-0"
            >
              <li class="flex items-center !pl-0">
                <svg
                  class="w-3.5 h-3.5 me-4 text-green-500 dark:text-green-400 flex-shrink-0"
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
                  class="w-3.5 h-3.5 me-4 text-green-500 dark:text-green-400 flex-shrink-0"
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
                  class="w-3.5 h-3.5 me-4 text-green-500 dark:text-green-400 flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                  />
                </svg>
                Active customer support
              </li>

              <li class="flex items-center !pl-0">
                <svg
                  class="w-3.5 h-3.5 me-4 text-green-500 dark:text-green-400 flex-shrink-0"
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
              <li class="flex items-center !pl-0">
                <svg
                  class="w-3.5 h-3.5 me-4 text-green-500 dark:text-green-400 flex-shrink-0"
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
                  class="w-3.5 h-3.5 me-4 text-green-500 dark:text-green-400 flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                  />
                </svg>
                <span>No hidden agendas</span>
              </li>
            </ul>

            <div class="flex justify-between gap-4 items-center text-start mt-12">
              <a
                class="no-underline"
                href="https://github.com/sponsors/Lakshan-Madushanka/sponsorships?sponsor=Lakshan-Madushanka&tier_id=430277"
                target="_blank"
              >
                <ButtonComponent
                  class="flex justify-between items-center gap-x-8 !py-[0.6rem] !text-lg !from-green-800 !to-green-900"
                >
                  <span>Forever</span>
                  <span>$550</span>
                </ButtonComponent>
              </a>

              <a
                class="no-underline"
                href="https://github.com/sponsors/Lakshan-Madushanka/sponsorships?sponsor=Lakshan-Madushanka&tier_id=430275"
                target="_blank"
              >
                <ButtonComponent
                  class="flex justify-between items-center gap-x-8 !py-[0.6rem] !text-lg !from-green-800 !to-green-900"
                >
                  <span>Monthly</span>
                  <span>$25</span>
                </ButtonComponent>
              </a>
            </div>
            <div class="justify-self-start mt-4 text-base">
              <a :href="'mailto:' + Contact.EMAIL" class="text-red-500"
                >Contact us for team support</a
              >
            </div>
          </div>
        </div>
      </div>
    </template>
  </SectionComponent>
</template>

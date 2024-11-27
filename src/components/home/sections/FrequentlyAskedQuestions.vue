<template>
  <SectionComponent id="faq">
    <template #header>Frequently Asked Questions</template>
    <template #content>
      <AccordianComponent>
        <template #header>What is reviewer and why do I need it ?</template>
        <template #content
          >Reviewer is a top-tier review system specifically designed for Laravel projects. Its
          modern responsive design, rich feature set, high configurability, and ongoing maintenance
          make it a standout choice.
        </template>
      </AccordianComponent>

      <AccordianComponent>
        <template #header>Is there demo available ?</template>
        <template #content>Yes. A playground has been setup for you here. </template>
      </AccordianComponent>

      <AccordianComponent>
        <template #header>How do I have it ?</template>
        <template #content
          >You must
          <a class="no-underline text-orange-400 inline-block pb-1" href="/#sponserware">sponsor</a>
          to the repository. Then you can setup the package as described
          <router-link
            class="no-underline text-orange-400 inline-block pb-1"
            :to="{ name: 'documentation', hash: '#installation' }"
            >here</router-link
          >.
        </template>
      </AccordianComponent>

      <AccordianComponent>
        <template #header>What is sponsorware ?</template>
        <template #content
          >Sponsorware is simillar to github public repo but only the people who sponsored can
          access it. For more information refer this github repo about
          <a
            class="no-underline text-orange-400 inline-block pb-1"
            href="https://github.com/sponsorware/docs"
            >sponsorware</a
          >.
        </template>
      </AccordianComponent>
      <AccordianComponent>
        <template #header>How long will it take to my subscription get activated ?</template>
        <template #content
          >Monthly subscription will be activated within few minutes. One time subscription can take
          up to 24 hours (You should send a email after sponsored to the one time plan).
          <a
            class="no-underline text-orange-400 inline-block pb-1"
            href="https://github.com/sponsorware/docs"
            >sponsorware</a
          >.
        </template>
      </AccordianComponent>
    </template>
  </SectionComponent>
</template>

<script setup lang="ts">
import AccordianComponent from '@/components/AccordianComponent.vue'
import SectionComponent from '@/components/SectionComponent.vue'
</script>

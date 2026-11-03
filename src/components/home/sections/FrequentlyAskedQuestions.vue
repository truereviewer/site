<template>
  <SectionComponent id="faq">
    <template #header>Frequently Asked Questions</template>
    <template #content>
      <AccordianComponent>
        <template #header
          ><span class="font-normal secondary-text-color"
            >What is reviewer and why do I need it ?</span
          ></template
        >
        <template #content
          >Reviewer is a top-tier review system specifically designed for Laravel projects. Its
          modern responsive design, rich feature set, high configurability, and ongoing maintenance
          make it a standout choice.
        </template>
      </AccordianComponent>

      <AccordianComponent>
        <template #header
          ><span class="font-normal secondary-text-color">Is there demo available ?</span></template
        >
        <template #content>Yes. A playground has been setup for you here. </template>
      </AccordianComponent>

      <AccordianComponent>
        <template #header>
          <span class="font-normal secondary-text-color">How do I have it ?</span>
        </template>
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
        <template #header
          ><span class="font-normal secondary-text-color">What is sponsorware ?</span></template
        >
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
        <template #header
          ><span class="font-normal secondary-text-color">Why is sponsorware ?</span></template
        >
        <template #content
          >Sponsorware has more benefis over self hosted Repositories. Transparency is the biggest
          perk. As repository is in the github you can take all the advantages it offers(issues,
          discussions) plus you have leagal guarentee.Sponsorware offers more benefits than self
          hosted repositories. Transparency is one of the biggest advantages. Since the repository
          is hosted on GitHub, you gain access to all its features like issues and discussions along
          with the added benefit of legal assurance.
        </template>
      </AccordianComponent>
      <AccordianComponent>
        <template #header
          ><span class="font-normal secondary-text-color"
            >How long will it take to my subscription get activated ?</span
          ></template
        >
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
      <AccordianComponent>
        <template #header
          ><span class="font-normal secondary-text-color">Can I get a refund ?</span></template
        >
        <template #content>
          Due to the digital nature of the sponserware, we are unable to offer refunds once
          subscribed. We encourage you to carefully review the features and functionalities of
          TrueReviewer before purchasing.
        </template>
      </AccordianComponent>
    </template>
  </SectionComponent>
</template>

<script setup lang="ts">
import AccordianComponent from '@/components/AccordianComponent.vue'
import SectionComponent from '@/components/SectionComponent.vue'
</script>

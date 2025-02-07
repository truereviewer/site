<template>
  <SectionComponent id="ai">
    <template #header> AI Powered <span class="text-base">(Optional)</span> </template>
    <template #content>
      <div>
        <p class="!mt-0">
          The reviewer uses AI (LLM) to provide the following features. While these features are
          optional, they can help enhance productivity and deliver a seamless experience to users.
        </p>
      </div>
      <div>
        <h3 class="!mt-0">Integrity Checks</h3>
        <p>
          Most users rely on reviews when purchasing products. While reviews can be helpful, they
          can also be misleading. To address this, you can take certain measures. Leveraging AI to
          perform the following tests can help ensure the integrity of reviews.
        </p>
        <ul>
          <li>
            <h4>Profanity Check</h4>
            <p>
              Reviews are checked for profanity. If a review contains offensive language, it will be
              marked as failed and excluded.
            </p>
          </li>
          <li>
            <h4>Harassment Check</h4>
            <p>
              Reviews are checked for any form of harassment, including abuse or intentional insults
              directed at a product or person. If harassment is detected, the review will be marked
              as failed and excluded.
            </p>
          </li>
          <li>
            <h4>Robot Check</h4>
            <p>
              Verify whether a review was created by a human. If a review is identified as
              AI-generated, it will be marked as failed and excluded.
            </p>
          </li>
        </ul>
        <div>
          <h3>Sentiment Detector</h3>
          <p>
            Humans engage with sentiments. Reviews will be analyzed to identify the most intense
            sentiment, and a filterable badge will be displayed. This enhances the user experience
            by allowing users to filter reviews based on sentiment.
          </p>
        </div>
      </div>
    </template>
  </SectionComponent>
</template>

<script setup lang="ts">
import SectionComponent from '@/components/SectionComponent.vue'
</script>

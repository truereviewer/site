<template>
  <DocumentationSection id="ai-integration">
    <template #header><a href="#ai-integration">AI Integration</a></template>
    <template #content>
      <p>
        Though this is optional you can use this feature to enhance the productivity of your
        review-system. Refere the <a class="underline" href="/#ai">ai section</a> section for
        further details
      </p>

      <div class="space-y-2 !mt-8">
        <h3 id="ai-integration-requirements" class="mb-6 !text-3xl">
          <a href="#ai-integration-requirements">Requirements</a>
        </h3>

        <ul>
          <li>PHP: &nbsp; ^8.2</li>
          <li>Laravel: &nbsp; ^11.0 | ^12.0</li>
          <li>echolabsdev/prism: &nbsp; ^0.40.0</li>
        </ul>

        <AlertComponent class="!my-4" type="notice">
          <p>
            You must manually install and setup the
            <span class="font-semibold">echolabsdev/prism</span> package. Consult the
            <a
              class="underline"
              href="https://prism.echolabs.dev/getting-started/introduction.html"
              target="_blank"
              >documentation</a
            >
            for instructions.
          </p>
        </AlertComponent>
        <p>
          Define your LLM provider and model in <code class="code-inline">reviewer.json</code> file.
          Refer
          <a
            class="underline"
            href="https://prism.echolabs.dev/providers/anthropic.html"
            target="_blank"
            >here</a
          >
          for available providers.
        </p>

        <CodeBlock language="php" :code="llmConfigs" />
      </div>

      <div class="space-y-2 !mt-8">
        <h3 id="ai-integration-enable-features" class="mb-6 !text-3xl">
          <a href="#ai-integration-enable-features">Enable Features</a>
        </h3>
        <p>Reviewer support following AI features</p>
        <div>
          <ul class="list-disc ml-6">
            <li>Sentiment Detector</li>
            <li>Integrity Checks</li>
          </ul>
        </div>

        <div class="!mt-6">
          <h3 id="ai-integration-enable-sentiment-detector-feature" class="mb-6 !text-xl">
            <a href="#ai-integration-enable-sentiment-detector-feature"
              >Enable Sentiment Detector</a
            >
          </h3>
          <CodeBlock language="php" :code="enableSentimentDetector" />
        </div>

        <div class="!mt-8">
          <h3 id="ai-integration-enable-integrty-checks" class="mb-4 !text-xl">
            <a href="#ai-integration-enable-integrty-checks">Enable Integrity Checks</a>
          </h3>
          <p class="!mt-0">
            There are a few integrity checks. You can enable each of them by setting the enable key
            to true in the relevant array.
          </p>
          <CodeBlock language="php" :code="enableIntegrityChecks" />
        </div>
      </div>
    </template>
  </DocumentationSection>
</template>

<script lang="ts" setup>
import AlertComponent from '../AlertComponent.vue'
import DocumentationSection from '@/components/documentation/DocumentationSection.vue'
import CodeBlock from '../CodeBlock.vue'

const llmConfigs = `
  use EchoLabs\\Prism\\Enums\\Provider;

  'LLM' => [
          /**
            * Must be a type of EchoLabs\\Prism\\Enums\\Provider
            */
          'provider' => Provider::Gemini,
          'model' => 'gemini-1.5-flash',
  ],

`

const enableSentimentDetector = `
  /**
     * Detect reviews' sentiment
     * Required to set LLM and manual installation of prism package https://prism.echolabs.dev/
     */
    'sentiment_detector' => [
        'queue' => 'default',
        'enabled' => true, 
    ],
`

const enableIntegrityChecks = `
   /**
     * Perform checks to authenticate the integrity of the review
     * Required to set LLM and manual installation of prism package https://prism.echolabs.dev/
     */
    'checks' => [
        'queue' => 'default',

        'profanity' => [
            /**
             * Review will be rejected if it contains profanity
             */
            'enabled' => true,
            /**
             * Replace profanity with this approved word
             */
            'replace' => true,
            /**
             * Strictness level of the profanity check. 10 means most strict and 1 means least strict
             */
            'level' => 5,
        ],
        'harassment' => [
            /**
             * Review will be rejected if it implies harassment
             */
            'enabled' => true,
            /**
             * Strictness level of the harassment check. 10 means most strict and 1 means least strict
             */
            'level' => 5,
        ],
        'robot' => [
            /**
             * Review will be rejected if it implies harassment
             */
            'enabled' => true,
            /**
             * Strictness level of the harassment check. 10 means most strict and 1 means least strict
             */
            'level' => 5,
        ],
    ],
`
</script>

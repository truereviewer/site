<template>
  <DocumentationSection id="installation">
    <template #header><a href="#installation">Installation</a></template>
    <template #content>
      <AlertComponent type="notice">
        <p>
          You should have read-only access to the reviewer repository. For more information, please
          refer to the
          <a class="no-underline text-orange-400 inline-block pb-1" href="/#sponserware"
            >Sponserware</a
          >
          section.
        </p>
      </AlertComponent>

      <div class="space-y-6">
        <h3 id="installation-step1"><a href="#installation-step1">Step-1</a></h3>
        <p>Next, add the repository URL to your composer.json file.</p>

        <CodeBlock language="bash" :code="addRepo" />
      </div>

      <div class="space-y-6">
        <h3 id="installation-step2"><a href="#installation-step2">Step-2</a></h3>
        <p>Install the reviewer via composer.</p>

        <CodeBlock
          language="bash"
          code="composer require https://github.com/truereviewer/reviewer"
        />
      </div>
      <div class="space-y-6">
        <h3 id="installation-step3"><a href="#installation-step3">Step-3</a></h3>
        <p>Run below command to setup the package.</p>

        <CodeBlock language="bash" code="php artisan reviewer:setup" />
      </div>

      <div class="space-y-6">
        <h3 id="installation-step4"><a href="#installation-step4">Step-4</a></h3>
        <p>Run below command to setup package.</p>

        <CodeBlock language="bash" code="php artisan reviewer:setup" />
      </div>

      <div class="space-y-6">
        <h3 id="installation-step5"><a href="#installation-step5">Step-5</a></h3>
        <p>
          Include the reviewer assets in your template by adding
          <code class="code-inline">-reviewerStyles</code> and
          <code class="code-inline">-reviewerScripts</code> as shown below.
        </p>

        <CodeBlock language="html" :code="includeAssets" />
      </div>

      <div class="space-y-6">
        <h3 id="installation-step6"><a href="#installation-step6">Step 6</a></h3>
        <p>
          The Reviewable model must extend the Reviewable class. Since this class extends the
          <code class="code-inline">Model</code>
          class, you can leverage all the features and functionality provided by the base model.
        </p>

        <CodeBlock language="php" :code="extendClass" />
      </div>

      <div class="space-y-6">
        <h3 id="installation-step7"><a href="#installation-step7">Step-7</a></h3>
        <p>
          Use the components wherever needed. Refer to the Components section for detailed guidance.
          Each component requires <code>id</code> and <code>modelType</code> props.
        </p>

        <CodeBlock language="php" :code="useComponent" />
      </div>
    </template>
  </DocumentationSection>
</template>

<script lang="ts" setup>
import AlertComponent from '../AlertComponent.vue'
import CodeBlock from '../CodeBlock.vue'
import DocumentationSection from './DocumentationSection.vue'

const addRepo = `
 "repositories": [
              {
                  "type": "path",
                  "url": "https://github.com/truereviewer/reviewer",
              }
          ]
`
const includeAssets = `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Reviewer</title>

      -reviewerStyles
    </head>
    <body>
      <div id="app"></div>
  
      -reviewerScripts
    </body>
  </html>
  `

const useComponent = `
  <reviewer id="{{$product->getKey()}}" model-type="{{$product->getMorphClass()}}"></reviewer>
  `

const extendClass = `
  <?php

  namespace App\\Models;

  use LakM\\Reviewer\\Models\\Reviewable;

  class Product extends Reviewable
  {
      
  }
  `
</script>

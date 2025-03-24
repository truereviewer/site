<template>
  <DocumentationSection id="installation">
    <template #header><a href="#installation">Installation</a></template>
    <template #content>
      <p>
        You can install TrueReviewer in your monolithic Laravel project(server-side rendering) or
        API project(with a separate back-end and vue.js front-end).
      </p>

      <div class="space-y-6">
        <h3 id="installation-monolithic" class="mb-6 !text-2xl">
          <a href="#installation-monolithic"> Monolithic (server-side rendering) </a>
        </h3>
        <AlertComponent type="notice">
          <p>
            You should have read-only access to the reviewer repositories. For more information,
            please refer to the
            <a class="no-underline text-orange-400 inline-block pb-1" href="/#sponserware"
              >Sponserware</a
            >
            section.
          </p>
        </AlertComponent>

        <iframe
          class="aspect-video border w-full"
          src="https://www.youtube.com/embed/l-Ns1ym-HHM"
          title="Installation"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        <AlertComponent type="notice">
          <p>
            If you are using token-based authentication (classic token with full repo scope) for
            GitHub in a development environment, you might not need to follow
            <a class="underline" href="#installation-step1">step1</a> and
            <a class="underline" href="#installation-step2">step2</a>
          </p>
        </AlertComponent>

        <div class="space-y-4">
          <h3 id="installation-step1"><a href="#installation-step1">Step-1</a></h3>
          <p>
            Obtain a <b>classic</b> personal access token (fine-grained tokens won't support) with
            repo scope (Full control of private repositories) access to the following TrueReviewer
            Repositories.
          </p>
          <ul class="!mt-2 ml-2 list-disc list-inside">
            <li>
              <a class="underline" href="https://github.com/truereviewer/sdk" target="_blank"
                >TrueReviewer SDK</a
              >
            </li>
            <li>
              <a class="underline" href="https://github.com/truereviewer/vur-front" target="_blank">
                TrueReviewer vue-front
              </a>
            </li>

            <li>
              <a class="underline" href="https://github.com/truereviewer/reviewer" target="_blank">
                TrueReviewer Reviewer
              </a>
            </li>
          </ul>

          <p class="flex flex-col gap-y-4 !mb-8">
            <code class="code-inline"
              >Settings &rarr; Developer settings &rarr; Personal access tokens &rarr; Tokens
              (classic)</code
            >
            <img class="lg:object-none" :src="PATToken" alt="Token Scope" />
          </p>
        </div>

        <div class="space-y-4">
          <h3 id="installation-step2"><a href="#installation-step2">Step-2</a></h3>
          <p>
            Create <code class="code-inline">auth.json</code> in the root of your project and
            include the token.
          </p>

          <CodeBlock language="bash" :code="authJson" />
        </div>

        <div class="space-y-4">
          <h3 id="installation-step3"><a href="#installation-step3">Step-3</a></h3>
          <p>Next, add the repository URL to your composer.json file.</p>

          <CodeBlock language="bash" :code="addRepo" />
        </div>

        <div class="space-y-4">
          <h3 id="installation-step4"><a href="#installation-step4">Step-4</a></h3>
          <p>Install the reviewer via composer.</p>

          <CodeBlock language="bash" code="composer require truereviewer/reviewer" />
        </div>
        <div class="space-y-4">
          <h3 id="installation-step5"><a href="#installation-step5">Step-5</a></h3>
          <p>Run below command to setup the package.</p>

          <CodeBlock language="bash" code="php artisan reviewer:setup" />
        </div>

        <div class="space-y-4">
          <h3 id="installation-step6"><a href="#installation-step6">Step-6</a></h3>
          <p>
            Add <code class="code-inline">id</code> attribute to the root element and assign it
            value <code class="code-inline">reviewer</code>. Then include the reviewer assets in
            your template by adding <code class="code-inline">@reviewerStyles</code> and
            <code class="code-inline">@reviewerScripts</code> as shown below.
          </p>

          <CodeBlock language="html" :code="includeAssets" />
        </div>

        <div class="space-y-4">
          <h3 id="installation-step7"><a href="#installation-step7">Step-7</a></h3>
          <p>
            The Reviewable model must extend the Reviewable class. Since this class extends the
            <code class="code-inline">Model</code>
            class, you can leverage all the features and functionality provided by the base model.
          </p>

          <CodeBlock language="php" :code="extendClass" />
        </div>

        <div class="space-y-4">
          <h3 id="installation-step8"><a href="#installation-step8">Step-8</a></h3>
          <p>
            Use the components wherever needed. Refer to the Components section for detailed
            guidance. Each component requires <code>id</code> and <code>modelType</code> props.
          </p>

          <CodeBlock language="php" :code="useComponent" />
        </div>
      </div>

      <div class="!mt-12">
        <h3 id="installation-api" class="mb-6 !text-2xl">
          <a href="#installation-api"> API (with a separate back-end and vue.js front-end) </a>
        </h3>

        <AlertComponent type="notice">
          <p>
            You should have read-only access to the reviewer repository. For more information,
            please refer to the
            <a class="no-underline text-orange-400 inline-block pb-1" href="/#sponserware"
              >Sponserware</a
            >
            section.
          </p>
        </AlertComponent>

        <div class="mb-6">
          <h3 id="installation-api-front-end">
            <a href="#installation-api-front-end"> Front-End (Vue.js) </a>
          </h3>
          <div class="!mt-4">
            <div class="space-y-4">
              <div>
                <h3 id="installation-api-front-end-step1" class="!text-lg">
                  <a href="#installation-api-front-end-step1">Step-1</a>
                </h3>
                <p class="!mt-2">
                  Obtain a classic personal access token with full repo scope to the
                  <a
                    class="underline"
                    href="https://github.com/truereviewer/vue-front"
                    target="_blank"
                    >Reviewer vue-front repository
                  </a>
                  &nbsp; as described in
                  <a class="underline" href="#installation-step1">step-1</a>.
                </p>
              </div>
              <div>
                <h3 id="installation-api-front-end-step2" class="!text-lg">
                  <a href="#installation-api-front-end-step2">Step-2</a>
                </h3>
                <p class="!mt-2">
                  Add the package to the dependencies array in the following format.
                </p>
                <CodeBlock language="js" :code="addRepoPackageJson" />
              </div>
              <div>
                <h3 id="installation-api-front-end-step3" class="!text-lg">
                  <a href="#installation-api-front-end-step3">Step-3</a>
                </h3>
                <p class="!mt-2">Install the package.</p>
                <CodeBlock language="bash" code="npm install @truereviewer/vue-front" />
              </div>
              <div>
                <h3 id="installation-api-front-end-step4" class="!text-lg">
                  <a href="#installation-api-front-end-step4">Step-4</a>
                </h3>
                <p class="!mt-2">Setup the reviewer.</p>
                <CodeBlock language="js" :code="setupFrontend" />
              </div>
              <div>
                <h3 id="installation-api-front-end-step5" class="!text-lg">
                  <a href="#installation-api-front-end-step5">Step-5</a>
                </h3>
                <p class="!mt-2">Use the components.</p>
                <p class="font-bold text-base !mt-2">Globally</p>
                <CodeBlock language="js" :code="useComponentsGlobaly" />

                <p class="font-bold text-base !mt-4">Locally</p>
                <CodeBlock language="js" :code="useComponentsLocally" />
              </div>
            </div>
          </div>
        </div>

        <div class="!mt-8">
          <h3 id="installation-api-back-end">
            <a href="#installation-api-back-end"> Back-End </a>
          </h3>

          <p class="!mt-4">
            Obtain a personal access token (fine-grained) with read-only access to the
            <a class="underline" href="https://github.com/truereviewer/sdk" target="_blank"
              >Reviewer sdk repository
            </a>
            &nbsp; as described in
            <a class="underline" href="#installation-step1">step-1</a>.
          </p>

          <p class="!mt-4">
            The steps
            <a class="text-[var(--main-text-color)] font-bold" href="#installation-step1">Step-1</a
            >,
            <a class="text-[var(--main-text-color)] font-bold" href="#installation-step2">Step-2</a
            >,
            <a class="text-[var(--main-text-color)] font-bold" href="#installation-step3">Step-3</a
            >,
            <a class="text-[var(--main-text-color)] font-bold" href="#installation-step4">Step-4</a
            >,
            <a class="text-[var(--main-text-color)] font-bold" href="#installation-step5">Step-5</a>
            and
            <a class="text-[var(--main-text-color)] font-bold" href="#installation-step7">Step-7</a>
            should be followed in order.
          </p>

          <div>
            <p class="!mt-4">
              <a class="text-[var(--main-text-color)] font-bold" href="#installation-step2"
                >Step-4</a
              >
              is slighly differ.
            </p>
            <CodeBlock language="bash" code="composer require truereviewer/sdk" />
          </div>
        </div>
      </div>
    </template>
  </DocumentationSection>
</template>

<script lang="ts" setup>
import AlertComponent from '../AlertComponent.vue'
import CodeBlock from '../CodeBlock.vue'
import DocumentationSection from './DocumentationSection.vue'
import PATToken from '@/assets/img/reviewer-pat-scope.png'

const addRepo = `
 "repositories": [
      {
          "type": "vcs",
          "url": "https://github.com/truereviewer/reviewer"
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

      @reviewerStyles
    </head>
    <body>
      <div id="reviewer"></div>
  
      @reviewerScripts
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
  use TrueReviewer\\Reviewer\\Models\\Contracts\\ReviewableContract;
  use TrueReviewer\\Reviewer\\Models\\Concerns\\Reviewable;

  class Product implements ReviewableContract
  {
     use Reviewable;

    // Optional
    public function subRatingTypes(): array
    {
        return [
            'quality' => ['title' => 'Quality'],
            'value' => ['title' => 'Value for money'],
            'durability' => ['title' => 'Durability'],
        ];
    }
  }
  `

const authJson = `
  {
    "github-oauth": {
        "github.com": "YOUR_TOKEN"
    }
  }
  `

const addRepoPackageJson = `
  "dependencies": {
    "@truereviewer/vue-front": "git+https://truereviewer:<GITHUB_TOKEN>@github.com/truereviewer/vue-front.git"
  }

  /* 
    if the token is abdhfjglglleuguutututu
    "@truereviewer/vue-front": "git+https://truereviewer:abdhfjglglleuguutututu@github.com/truereviewer/vue-front.git"
  */
  `

const setupFrontend = `
  \import { createApp } from 'vue'
  \import App from './App.vue'
  \import { TrueReviewer } from '@truereviewer/vue-front'

  import '@truereviewer/vue-front/style.css'

  const app = createApp(App)
  /*
   * If your backend domain is https//demo.com 
   * REVIEWER_BACKEND_API_URL is https//demo.com/api 
   * You can change prefix here https://github.com/truereviewer/sdk/blob/4012f47187470fe485447cb7d2617b38513dce8c/config/reviewer.php#L63
   */
  app.use(TrueReviewer, { url: <REVIEWER_BACKEND_API_URL> }) // app.use(TrueReviewer, { url: https//demo.com/api })
  app.mount('#app')
`

const useComponentsGlobaly = `
  import { TrueReviewer, ReviewWidget,RatingDistribution,SubRatingDistribution, ReviewMediaGallery, ReviewList, Reviewer } from '@truereviewer/vue-front'

  app
  .component('ReviewWidget', ReviewWidget)
  .component('RatingDistribution', RatingDistribution)
  .component('RatingDistribution', RatingDistribution)
  .component('SubRatingDistribution', SubRatingDistribution)
  .component('ReviewMediaGallery', ReviewMediaGallery)
  .component('ReviewList', ReviewList)
  .component('Reviewer', Reviewer)

  <template>
  <div>
    <Reviewer :id="1" modelType="App\\Models\\Product" />
  </div>
  </template>
`

const useComponentsLocally = `
<template>
  <div>
    <Reviewer :id="1" modelType="App\\Models\\Product" />
  </div>
</template>

<script setup lang="ts">
import { Reviewer, ReviewWidget } from '@truereviewer/vue-front'
<//script>
`
</script>

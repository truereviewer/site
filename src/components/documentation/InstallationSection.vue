<template>
  <DocumentatonSection id="installation">
    <template #header><a href="#installation">Installation</a></template>
    <template #content>
      <AlertComponent type="notice">
        <p>
          You should have read-only access to the reviewer repository. Please refer to the
          <a class="no-underline text-orange-400 inline-block pb-1" href="/#sponserware"
            >Sponserware</a
          >
          section for more details.
        </p>
      </AlertComponent>

      <div class="space-y-6">
        <h3 id="installation@step1"><a href="#installation@step1">Step-1</a></h3>
        <p>Then add repository url in composer.json file</p>

        <CodeBlock language="bash">
          <pre>
            <!-- prettier-ignore -->
            "repositories": [
              {
                  "type": "path",
                  "url": "D:\\Packages\\lakm\\laravel-comments-admin-panel",
                  "options": {
                      "symlink": true
                  }
              }
          ]
          </pre>
        </CodeBlock>
      </div>

      <div class="space-y-6">
        <h3 id="installation@step2"><a href="#installation@step2">Step-2</a></h3>
        <p>Install the reviewer via composer</p>

        <CodeBlock language="bash">
          <pre>
            <!-- prettier-ignore -->
            composer require truereviewer/reviewer
          </pre>
        </CodeBlock>
      </div>
      <div class="space-y-6">
        <h3 id="installation@step3"><a href="#installation@step3">Step-3</a></h3>
        <p>Run below command to setup package</p>

        <CodeBlock language="bash">
          <pre>
            <!-- prettier-ignore -->
            php artisan reviewer:setup
          </pre>
        </CodeBlock>
      </div>

      <div class="space-y-6">
        <h3 id="installation@step4"><a href="#installation@step4">Step-4</a></h3>
        <p>Run below command to setup package</p>

        <CodeBlock language="bash">
          <pre>
            <!-- prettier-ignore -->
            php artisan reviewer:setup
          </pre>
        </CodeBlock>
      </div>

      <div class="space-y-6">
        <h3 id="installation@step5"><a href="#installation@step5">Step-5</a></h3>
        <p>
          Include reviewer assets (@reviewerStyles and @reviewerScripts) in your template as below
        </p>

        <CodeBlock language="html">
          <pre>
            <!-- prettier-ignore -->
            {{ includeAssets }}
          </pre>
        </CodeBlock>
      </div>

      <div class="space-y-6">
        <h3 id="installation@step5"><a href="#installation@step5"></a>Step</h3>
        <p>
          Reviewable model must extend the Reviewable class. This model extend
          <code class="code-inline">Model</code> class so you can use whatever model class provides.
        </p>

        <CodeBlock language="html">
          <pre>
            <!-- prettier-ignore -->
            {{ useComponent }}
          </pre>
        </CodeBlock>
      </div>

      <div class="space-y-6">
        <h3 id="installation@step6"><a href="#installation@step6">Step-6</a></h3>
        <p>
          Use components wherever you want. Refer components section for more details. Each
          components must have <code>id</code> and <code>modelType</code> props
        </p>

        <CodeBlock language="php">
          <pre>
            <!-- prettier-ignore -->
            {{ extendClass }}
          </pre>
        </CodeBlock>
      </div>
    </template>
  </DocumentatonSection>
</template>

<script lang="ts" setup>
import AlertComponent from '../AlertComponent.vue'
import CodeBlock from '../CodeBlock.vue'
import DocumentatonSection from './DocumentatonSection.vue'

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
                    <div id="app"></div>
                
                    @reviewerScripts
                  </body>
                </html>
                `

const useComponent = `
  <reviewer id="{{$product->getKey()}} modelType={{$product->getMorphClass()}}"/>
  `

const extendClass = `
    class product extends Reviewable {
    }
  `
</script>

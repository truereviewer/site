<template>
  <DocumentationSection id="theming@buildAssets">
    <template #header><a href="#theming@buildAssets">Build Assets</a></template>
    <template #content>
      <p>
        <a class="font-bold" href="#theming@publishAssets">
          Before begin you should publish commenter views.
        </a>
      </p>

      <div class="space-y-6">
        <div>
          <h3>Step-1</h3>
          <p>
            Install and setup tailwind css. You can do that by following
            <a
              class="font-bold"
              href="#https://tailwindcss.com/docs/guides/laravel"
              target="_blank"
            >
              documentation.
            </a>
          </p>
        </div>

        <div>
          <h3>Step-2</h3>
          <p>
            Add following reviewer front-end dependencies in
            <code class="code-inline">package.json</code> file.
          </p>
          <CodeBlock language="js" :code="frontEndDependencies" />

          <p>Install the dependencies.</p>
          <CodeBlock language="bash" code="npm run dev" />
        </div>

        <div>
          <h3>Step-3</h3>
          <p>Create <code class="code-inline">tsconfig.json</code> file. and add following.</p>
          <CodeBlock language="js" :code="tsconfig" />
        </div>

        <div>
          <h3>Step-4</h3>
          <p>
            Finally your <code class="code-inline">vite.config.js</code> should have following
            entries.
          </p>
          <CodeBlock language="js" :code="vite" />
        </div>

        <div>
          <h3>Step-5</h3>
          <p>Finally build the assets.</p>
          <CodeBlock language="js" code="npm run build" />
        </div>
      </div>
    </template>
  </DocumentationSection>
</template>

<script lang="ts" setup>
import CodeBlock from '@/components/CodeBlock.vue'
import DocumentationSection from '@/components/documentation/DocumentationSection.vue'

const frontEndDependencies = `
  "devDependencies": {
        "@primevue/themes": "^4.0.7",
        "@vitejs/plugin-vue": "^5.2.0",
        "autoprefixer": "^10.4.20",
        "axios": "^1.7.7",
        "laravel-vite-plugin": "^1.0.2",
        "moment": "^2.30.1",
        "pinia": "^2.2.2",
        "postcss": "^8.4.45",
        "prettier": "3.3.3",
        "primeicons": "^7.0.0",
        "primevue": "^4.0.7",
        "tailwindcss": "^3.4.11",
        "ts-loader": "^9.5.1",
        "typescript": "^5.6.2",
        "vite": "^5.2.7",
        "vue": "^3.5.4",
        "vue-loader": "^17.4.2",
        "vue-star-rating": "^2.1.0",
        "vue-tsc": "^2.1.6"
    },
    "dependencies": {
        "countries-list": "^3.1.1",
        "moment-timezone": "^0.5.46"
    }
`

const tsconfig = `
  {
    "compilerOptions": {
        "target": "esnext",
        "module": "esnext",
        "strict": true,
        "jsx": "preserve",
        "moduleResolution": "node",
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true,
        "baseUrl": ".",
        "paths": {
            "@reviewer/*": ["resources/reviewer/ts/*"]
        }
    },
    "include": ["resources/**/*.ts", "resources/**/*.vue"],
    "exclude": ["node_modules"]
 }
`

const vite = `
  import { defineConfig } from 'vite';
  import laravel from 'laravel-vite-plugin';
  import path from 'path'
  import vue from '@vitejs/plugin-vue'

  export default defineConfig({
      plugins: [
          laravel({
              input: [
                  'resources/css/app.css',
                  'resources/js/app.js',
                  'resources/reviewer/css/app.css',
                  'resources/reviewer/ts/app.ts'
              ],
              refresh: true,
          }),
          vue({
              template: {
                  transformAssetUrls: {
                      base: null,
                      includeAbsolute: false,
                  },
              },
          }),
      ],
      resolve: {
          alias: {
              '@reviewer': path.resolve(__dirname, 'resources/reviewer/ts'),
              vue: 'vue/dist/vue.esm-bundler.js',
          },
      },
  });
`
</script>

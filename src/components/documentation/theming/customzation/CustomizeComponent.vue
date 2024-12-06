<template>
  <DocumentationSection id="customization">
    <template #header><a href="#customization">Customization</a></template>
    <template #content>
      <AlertComponent type="notice">
        You should've published the reviewer assets. You can refer the instruction
        <a class="font-bold" href="#theming@publishAssets"> here. </a>
      </AlertComponent>
      <p>
        Reviewer leverge the primevue ui components package. So you can customize reviewer
        components as described in the
        <a class="font-bold" href="https://primevue.org/theming/styled/" target="_blank">
          documentation.
        </a>
      </p>

      <div class="space-y-6">
        <div class="space-y-4">
          <h3 id="customization@components">
            <a href="#customization@components">Components</a>
          </h3>
          <p>
            All the reviewer components are published at
            <code class="code-inline">/resources/reviewer/ts</code>
            you are free to cunstomize components as you wish but make sure to
            <a class="font-bold" href="#theming@buildAssets">build assets.</a>
          </p>
        </div>

        <div class="space-y-4">
          <h3 id="customization@presets">
            <a href="#customization@presets">Presets</a>
          </h3>
          <p>
            Reviewer support serveral
            <a class="font-bold" href="https://primevue.org/theming/styled/#presets" target="_blank"
              >presets.
            </a>
            Reviewer uses Aura theme by default. You can change it in
            <code class="code-inline">app.ts</code> file, in
            <code class="code-inline">/resources/reviewer/ts/app.ts</code> path.
            <CodeBlock language="ts" :code="defaultTheme" />
          </p>
        </div>

        <div class="space-y-4">
          <h3 id="customization@definePresets">
            <a href="#customization@presets">Customizng Presets</a>
          </h3>
          <p>
            With primevue, customizing presets are super easy. Let's imaging your site's main theme
            color indigo. You can change reviewer to match your main theme color(indigo) with below
            simple steps.

            <a class="font-bold" href="https://primevue.org/theming/styled/#presets" target="_blank"
              >presets.
            </a>
          </p>
          <CodeBlock language="ts" :code="customPreset" />

          <div>
            <p>
              You can find predifined color sets
              <a
                class="font-bold"
                href="https://primevue.org/theming/styled/#colors"
                target="_blank"
                >here.</a
              >
            </p>

            <p>
              Please consult primevue
              <a class="font-bold" href="https://primevue.org/theming/styled/#customization"
                >documentation</a
              >
              for more customization options.
            </p>
          </div>
        </div>
      </div>
    </template>
  </DocumentationSection>
</template>

<script lang="ts" setup>
import AlertComponent from '@/components/AlertComponent.vue'
import DocumentationSection from '@/components/documentation/DocumentationSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'

const defaultTheme = `
  import Lara from '@primevue/themes/aura'

  createApp({})
  ...
  .use(PrimeVue, {
    theme: {
      preset: Lara, // Changing to Lara preset
    },
  })
  ...
  .mount('#app')
`

const customPreset = `
  import Aura from '@primevue/themes/aura'

  const MyPreset = definePreset(Aura, {
      semantic: {
          primary: {
              50: '{indigo.50}', // youcan use rgb color codes (#eef2ff)
              100: '{indigo.100}',
              200: '{indigo.200}',
              300: '{indigo.300}',
              400: '{indigo.400}',
              500: '{indigo.500}',
              600: '{indigo.600}',
              700: '{indigo.700}',
              800: '{indigo.800}',
              900: '{indigo.900}',
              950: '{indigo.950}'
          }
      }
  });

  createApp({})
    ...
    .use(PrimeVue, {
      theme: {
        preset: Lara, // Changing to Lara preset
      },
    })
    ...
    .mount('#app')
`
</script>

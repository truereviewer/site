<template>
  <DocumentationSection id="theming-basics">
    <template #header><a href="#theming-basics">Basic Section</a></template>
    <template #content>
      <p>This section guide you how you can customize the design.</p>
      <AlertComponent type="important">
        Before begin you need to follow the step
        <a class="underline" href="/documentation#config-publish">here</a>.
      </AlertComponent>
      <AlertComponent type="notice">
        You can experience all the available theming options by enabling the theme switcher.
        <CodeBlock language="php" :code="switchTheme" />
        <div>
          <p>
            You can also experience it in our live
            <a
              class="underline"
              href="https://reviewer-demo.vercel.app/products/nicce-mens-original-hood"
              target="_blank"
              >demo</a
            >.
          </p>
        </div>
      </AlertComponent>
      <div class="[&>div_h3]:!mb-6 [&>div_h3]:text-2xl">
        <PresetSection />
        <ColorsSection />
        <DarkMode />
      </div>
    </template>
  </DocumentationSection>
</template>

<script lang="ts" setup>
import AlertComponent from '@/components/AlertComponent.vue'
import DocumentationSection from '@/components/documentation/DocumentationSection.vue'
import PresetSection from './basics/PresetSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import ColorsSection from './basics/ColorsSection.vue'
import DarkMode from './basics/DarkMode.vue'

const switchTheme = `
// reviewer.php

...
  'dark_mode_selector' => '.dark',
],
'show_theme_switcher' => true,
`
</script>

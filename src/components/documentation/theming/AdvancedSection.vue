<template>
  <DocumentationSection id="theming-advanced">
    <template #header><a href="#theming-advanced">Advanced Section</a></template>
    <template #content>
      <p>
        This section guide you how you can build your own assets. Unless you need to deeply
        customize the system, you don't need to refer this section. Basic section is enough to match
        your design most of the time.
      </p>
      <div class="[&>div_h3]:!mb-6 [&>div_h3]:text-2xl">
        <FrontendTechnologies />
        <PublishAssets />
        <BuildAssets />
        <CustomizeComponent />
      </div>
    </template>
  </DocumentationSection>
</template>

<script lang="ts" setup>
import DocumentationSection from '@/components/documentation/DocumentationSection.vue'
import FrontendTechnologies from '@/components/documentation/theming/advanced/FrontendTechnologies.vue'
import BuildAssets from '@/components/documentation/theming/advanced/BuildAssets.vue'
import PublishAssets from '@/components/documentation/theming/advanced/PublishAssets.vue'
import CustomizeComponent from '@/components/documentation/theming/advanced/customzation/CustomizeComponent.vue'
</script>

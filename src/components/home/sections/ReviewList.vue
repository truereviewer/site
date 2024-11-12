<template>
  <SectionComponent>
    <template #header>Review List</template>
    <template #content>
      <p>Beautifully paginated list with advanced filtering options.</p>
      <div class="border rounded p-4">
        <picture class="!mb-0">
          <source media="(min-width:1024px)" srcset="/src/assets/img/reviewer/lg/4-1.png" />
          <source media="(min-width:768px)" srcset="/src/assets/img/reviewer/md/4.png" />
          <img src="/src/assets/img/reviewer/sm/4-1.png" alt="Review list" />
        </picture>

        <img
          class="hidden lg:inline !mt-0"
          src="/src/assets/img/reviewer/lg/4-2.png"
          alt="Review list"
        />
        <img
          class="inline md:hidden !mt-0"
          src="/src/assets/img/reviewer/sm/4-2.png"
          alt="Review list"
        />
      </div>
    </template>
  </SectionComponent>
</template>

<script setup lang="ts">
import SectionComponent from '@/components/SectionComponent.vue'
</script>

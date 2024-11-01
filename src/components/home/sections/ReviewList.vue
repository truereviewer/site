<template>
  <section data-aos="fade-up" class="flex flex-col items-start justify-center">
    <h2>Review List</h2>
    <p>
      orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
      the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
    </p>
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
    <hr
      class="mx-auto h-px w-full max-w-7xl border-none bg-gradient-to-r from-transparent via-[var(--primary-shadow-color)] to-transparent"
    />
  </section>
</template>

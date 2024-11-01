<template>
  <section>
    <h2 data-aos="fade-up">All together make big picture</h2>
    <div class="flex flex-flex gap-y-4 not-prose mb-8" data-aos="zoom-in">
      <div class="shadow border">
        <img src="/src/assets/img/reviewer/widget.png" />
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-8 w-full">
      <div class="flex flex-col gap-y-4">
        <div class="lg:h-[36rem] rounded shadow border" data-aos="slide-right">
          <picture>
            <source media="(min-width:1024px)" srcset="/src/assets/img/reviewer/lg/1.png" />
            <source
              media="(min-width:768px)"
              srcset="/src/assets/img/reviewer/tablet/component_2.png"
            />

            <img src="/src/assets/img/reviewer/mobile/component_2.png" alt="Component 2" />
          </picture>
        </div>
      </div>

      <div class="flex flex-col gap-y-4">
        <div class="lg:h-[36rem] rounded shadow border" data-aos="slide-down">
          <picture>
            <source media="(min-width:1024px)" srcset="/src/assets/img/reviewer/lg/2.png" />
            <source
              media="(min-width:768px)"
              srcset="/src/assets/img/reviewer/tablet/component_3.png"
            />

            <img src="/src/assets/img/reviewer/mobile/component_3.png" alt="Component 3" />
          </picture>
        </div>
      </div>

      <div class="flex flex-col gap-y-4 md:col-span-2 lg:col-span-1">
        <div class="lg:h-[36rem] rounded shadow border" data-aos="slide-left">
          <picture>
            <source
              media="(min-width:1024px)"
              srcset="/src/assets/img/reviewer/desktop/component_4.png"
            />
            <source
              media="(min-width:768px)"
              srcset="/src//assets/img/reviewer/tablet/component_4.png"
            />

            <img src="/src/assets/img/reviewer/mobile/component_4.png" alt="Component 4" />
          </picture>
        </div>
      </div>
    </div>
    <div class="mt-8 shadow border" data-aos="slide-up">
      <div class="border rounded p-4">
        <picture>
          <source media="(min-width:1024px)" srcset="/src/assets/img/reviewer/lg/4-1.png" />
          <source
            media="(min-width:768px)"
            srcset="/src/assets/img/reviewer/tablet/component_2.png"
          />

          <img src="/src/assets/img/reviewer/mobile/component_2.png" alt="Component 2" />
        </picture>
        <picture>
          <source media="(min-width:1024px)" srcset="/src//assets/img/reviewer/lg/4-2.png" />
          <source
            media="(min-width:768px)"
            srcset="/src/assets/img/reviewer/tablet/component_2.png"
          />

          <img src="/src/assets/img/reviewer/mobile/component_2.png" alt="Component 2" />
        </picture>
      </div>
    </div>
    <hr
      class="mx-auto h-px w-full max-w-7xl border-none bg-gradient-to-r from-transparent via-[var(--primary-shadow-color)] to-transparent"
    />
  </section>
</template>

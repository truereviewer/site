<template>
  <!-- Backdrop -->
  <div
    v-if="showModal"
    class="fixed inset-0 bg-black/25 flex items-center justify-center z-50"
    @click="closeOnBackdrop ? close() : null"
  >
    <!-- Modal container -->
    <div
      :class="`bg-white rounded-lg shadow-2xl w-full p-6 relative mx-4 ${size} ${containerClass}`"
      @click.stop
    >
      <!-- Close button -->
      <button
        v-if="showClose"
        class="absolute right-3 top-2 z-[100] text-2xl font-bold bg-gray-200 px-[5px] rounded-full hover:bg-gray-400"
        @click="close"
      >
        ✕
      </button>

      <!-- Title Slot -->
      <h2 v-if="$slots.title" class="text-xl font-semibold">
        <slot name="title" />
      </h2>

      <!-- Default Slot -->
      <slot />

      <!-- Footer Slot -->
      <div v-if="$slots.footer" class="flex justify-end gap-2">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch, ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  containerClass: { type: String, default: '' },
  size: { type: String, default: 'md' },
  show: { type: Boolean, default: false },
  closeOnBackdrop: { type: Boolean, default: true },
  showClose: { type: Boolean, default: true }
})

const showModal = ref(props.show)

const size = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'max-w-sm'
    case 'lg':
      return 'max-w-3xl'
    case 'xl':
      return 'max-w-5xl'
    default:
      return 'max-w-xl'
  }
})

watch(
  () => props.show,
  (newVal) => {
    showModal.value = newVal
  }
)

const emit = defineEmits(['update:modelValue', 'close'])

function close() {
  console.log('Closing modal')
  emit('update:modelValue', false)
  emit('close')
  showModal.value = false
}

function onEsc(event) {
  if (event.key === 'Escape' && showModal.value) {
    close()
  }
}

onMounted(() => {
  window.addEventListener('keydown', onEsc)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onEsc)
})
</script>

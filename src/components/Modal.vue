<script setup lang="ts">
interface Props {
  title: string
  modalActive: boolean
}
interface Emits {
  (e: 'close'): void
}

const { modalActive, title } = defineProps<Props>()
const emit = defineEmits<Emits>()
</script>

<template>
  <div
    v-show="modalActive"
    class="flex z-20 justify-center items-center h-screen w-screen fixed top-0 left-0 bg-slate-50/80"
  >
    <div v-show="modalActive" class="relative max-w-2xl w-4/5 bg-white p-4 border-2 rounded-md">
      <h1 class="text-xl">{{ title }}</h1>
      <slot />
      <div class="flex flex-row-reverse">
        <slot name="footer">
          <button class="m-1 px-4 text-sm bg-cyan-600 text-white rounded" @click="emit('close')">
            {{ $t('modal.close') }}
          </button>
        </slot>
      </div>
    </div>
  </div>
</template>

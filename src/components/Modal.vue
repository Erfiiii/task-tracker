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
    class="fixed left-0 top-0 z-20 flex h-screen w-screen items-center justify-center bg-slate-50/80"
  >
    <div v-show="modalActive" class="relative w-4/5 max-w-2xl rounded-md border-2 bg-white p-4">
      <h1 class="text-xl">{{ title }}</h1>
      <slot />
      <div class="flex flex-row-reverse">
        <slot name="footer">
          <button class="m-1 rounded bg-cyan-600 px-4 text-sm text-white" @click="emit('close')">
            {{ $t('modal.close') }}
          </button>
        </slot>
      </div>
    </div>
  </div>
</template>

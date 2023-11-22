<script setup lang="ts">
import type { SortType } from '@/client/types'
import { sortValues } from './utils'

interface Props {
  modelValue: SortType
}

interface Emits {
  (e: 'update:modelValue', value: SortType): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const onChange = (e: Event) => {
  const value = (e.target as HTMLInputElement).value as SortType
  emit('update:modelValue', value)
}
</script>

<template>
  <span>
    {{ $t('tasks.sort_by') }}:
    <select class="rounded-md border-none" :value="props.modelValue" @change="onChange">
      <option v-for="item in sortValues" :key="item.value" :value="item.value">
        {{ item.label }}
      </option>
    </select>
  </span>
</template>

<script setup lang="ts">
import type { FilterType } from '@/client/types'
import { stautsFilters } from './utils'

interface Props {
  modelValue: FilterType
}

interface Emits {
  (e: 'update:modelValue', value: FilterType): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const onChange = (e: Event) => {
  const value = (e.target as HTMLInputElement).value as FilterType
  emit('update:modelValue', value)
}
</script>

<template>
  <span>
    {{ $t('tasks.filter_by') }}:
    <select class="border-none" :value="props.modelValue" @change="onChange">
      <option v-for="item in stautsFilters" :key="item.value" :value="item.value">
        {{ item.label }}
      </option>
    </select>
  </span>
</template>

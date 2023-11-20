<script setup lang="ts">
import { formatDate } from './utils'

interface Props {
  value: Date
}
const props = defineProps<Props>()
const text = formatDate(new Date(props.value))
</script>

<template>
  <span class="text-xs font-mono font-light">{{ text }}</span>
</template>

<script setup lang="ts">
import { formatDate } from './utils'

interface Props {
  value: Date
}
const props = defineProps<Props>()
const text = formatDate(new Date(props.value))
</script>

<template>
  <span class="font-mono text-xs font-light">{{ text }}</span>
</template>

<script setup lang="ts">
import { formatDate } from './utils'

interface Props {
  value: Date
}
const props = defineProps<Props>()
const text = formatDate(new Date(props.value))
</script>

<template>
  <span class="date">{{ text }}</span>
</template>

<style scoped>
.date {
    font-size: 12px;
    font-weight: 600;
}
</style>

<script setup lang="ts">
import type { TaskStatus } from '@/client/types'
import { statusDetails } from './utils'

interface Props {
  value: TaskStatus
}
const props = defineProps<Props>()
const statusDetail = statusDetails[props.value]
</script>

<template>
  <code
    class="status"
    :style="{ color: statusDetail.color, backgroundColor: statusDetail.backgroundColor }"
  >
    {{ statusDetail.label }}
  </code>
</template>

<style scoped>
.status {
  min-width: 60px;
  text-align: center;
  font-size: 10px;
  padding: 8px;
  border-radius: 16px;
}
</style>

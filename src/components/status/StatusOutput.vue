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
    class="rounded-2xl p-2 text-center text-xs font-extralight"
    :style="{ color: statusDetail.color, backgroundColor: statusDetail.backgroundColor }"
  >
    {{ statusDetail.label }}
  </code>
</template>

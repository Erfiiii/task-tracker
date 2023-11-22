<script setup lang="ts">
import StatusOutput from '@/components/status/StatusOutput.vue'
import DateOutput from '@/components/date/DateOutput.vue'
import type { Task } from '@/client/types.ts'
import { RouterLink } from 'vue-router'
import { useClient } from '@/client'

interface Props {
  task: Task
}
interface Emits {
  (e: 'delete', id: string): void
}

const { task } = defineProps<Props>()
const emit = defineEmits<Emits>()
const { deleteTask } = useClient()

const onDeleteTask = async () => {
  await deleteTask(task.id)
  emit('delete', task.id)
}
</script>

<template>
  <div class="m-1 min-w-max rounded-lg border-2 border-solid border-gray-200 bg-white p-4">
    <div class="mb-2 flex justify-between">
      <div>
        <router-link
          class="cursor-pointer text-lg font-bold"
          :to="{ name: 'task', params: { id: task.id } }"
        >
          {{ task.title }}
        </router-link>
        <span class="my-2 block text-xs font-semibold">
          {{ $t('task.created_at') }}: <date-output :value="new Date(task.createdAt)"></date-output>
        </span>
        <span class="my-2 block text-xs font-semibold">
          {{ $t('task.due_date') }}: <date-output :value="new Date(task.dueDate)"></date-output>
        </span>
      </div>
      <div>
        <status-output class="mr-2" :value="task.status"></status-output>
        <button @click="onDeleteTask" class="text-xs text-red-400 underline">
          {{ $t('task.delete') }}
        </button>
      </div>
    </div>
    <p class="font-light" v-if="task.description">{{ task.description }}</p>
    <p v-else class="font-extralight">No description...</p>
  </div>
</template>

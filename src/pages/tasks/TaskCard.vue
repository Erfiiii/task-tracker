<script setup lang="ts">
import StatusOutput from '@/components/status/StatusOutput.vue'
import DateOutput from '@/components/date/DateOutput.vue'
import type { Task, ClientType } from '@/client/types.ts'
import { inject } from 'vue'
import { RouterLink } from 'vue-router'

interface Props {
  task: Task
}

interface Emits {
  (e: 'delete', id: string): void
}

const { task } = defineProps<Props>()
const emit = defineEmits<Emits>()

const client = inject<ClientType>('client')

const deleteTask = async () => {
  await client?.deleteTask(task.id)
  emit('delete', task.id)
}
</script>

<template>
  <div class="m-1 p-4 border-2 border-solid bg-white border-gray-200 rounded-lg">
    <div class="flex mb-2 justify-between">
      <div>
        <router-link :to="{ name: 'task', params: { id: task.id } }">
          <h1 class="font-bold text-lg cursor-pointer">{{ task.title }}</h1>
        </router-link>
        <span class="text-xs font-semibold block my-2">
          {{ $t('task.created_at') }}: <date-output :value="new Date(task.createdAt)"></date-output>
        </span>
        <span class="text-xs font-semibold block my-2">
          {{ $t('task.due_date') }}: <date-output :value="new Date(task.dueDate)"></date-output>
        </span>
      </div>
      <div>
        <status-output class="mr-2" :value="task.status"></status-output>
        <button @click="deleteTask" class="text-xs text-red-400 underline">
          {{ $t('task.delete') }}
        </button>
      </div>
    </div>
    <p class="font-light">{{ task.description }}</p>
  </div>
</template>

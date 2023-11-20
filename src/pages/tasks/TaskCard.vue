<script setup lang="ts">
import StatusOutput from '@/components/status/StatusOutput.vue'
import DateOutput from '@/components/date/DateOutput.vue'
import type { Task, ClientType } from '@/client/types.ts'
import { inject } from 'vue'

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
  <div class="task">
    <div class="task__title">
      <div>
        <h1 class="task__title-text">{{ task.title }}</h1>
        <span class="task__sub-title">
          Created at: <date-output :value="new Date(task.createdAt)"></date-output>
        </span>
        <span class="task__sub-title">
          Due date: <date-output :value="new Date(task.dueDate)"></date-output>
        </span>
      </div>
      <div>
        <status-output :value="task.status"></status-output>
        <button @click="deleteTask" class="delete-task">{{ $t("task_card.delete") }}</button>
      </div>
    </div>
    <p>{{ task.description }}</p>
  </div>
</template>

<style scoped>
.task {
  margin: 8px;
  padding: 16px;
  border: 1px solid #cad9f6;
  border-radius: 6px;
  background-color: #fff;
}

.task__title {
  display: flex;
  margin-bottom: 16px;
  align-items: center;
  justify-content: space-between;
}

.task__title-text {
  width: 100%;
  font-weight: 700;
  font-size: 16px;
}

.task__sub-title {
  width: 100%;
  display: 'block';
  font-size: 12px;
}

.delete-task {
  color: red;
  font-size: 12;
  text-decoration: underline;
}
</style>

<script setup lang="ts">
import TaskCard from './TaskCard.vue'
import type { Task } from '@/client/types'
import { ref } from 'vue'
import AddTaskModal from './AddTaskModal.vue'
import { onMounted } from 'vue'
import { useClient } from '@/client'

const modalActive = ref<boolean>(false)
const tasks = ref<Task[]>([])
const { getTasks } = useClient()

onMounted(async () => {
  await loadTasks()
})
const closeModal = () => {
  modalActive.value = false
}
const loadTasks = async () => {
  tasks.value = await getTasks()
}
</script>

<template>
  <div class="flex justify-between">
    <h1 class="text-xl font-semibold">{{ $t('tasks.title') }}</h1>
    <button class="bg-cyan-700 text-white text-sm p-2 rounded" @click="modalActive = true">
      {{ $t('tasks.add_task') }}
    </button>
  </div>
  <div class="flex justify-center align-middle">
    <div class="mt-4 flex-col flex tasks">
      <task-card v-for="task in tasks" :key="task.id" :task="task" @delete="loadTasks"></task-card>
    </div>
  </div>
  <add-task-modal :modalActive="modalActive" @close="closeModal" @add="loadTasks"></add-task-modal>
</template>

<style scoped>
.tasks {
  max-width: 700px;
}
</style>

<script setup lang="ts">
import TaskCard from './TaskCard.vue'
import type { ClientType, Task } from '@/client/types'
import { ref } from 'vue'
import AddTaskModal from './AddTaskModal.vue'
import { inject } from 'vue'
import { onMounted } from 'vue'

const modalActive = ref<boolean>(false)
const client = inject<ClientType>('client')
const tasks = ref<Task[]>([])

onMounted(async () => {
  await loadTasks()
})
const openModal = () => {
  modalActive.value = true
}
const closeModal = () => {
  modalActive.value = false
}
const loadTasks = async () => {
  tasks.value = (await client?.getTasks()) ?? []
}
</script>

<template>
  <div class="tasks__header">
    <h1>{{ $t('tasks.title') }}</h1>
    <button class="add-task" @click="openModal">{{ $t('tasks.add_task') }}</button>
  </div>
  <div class="tasks__container">
    <div class="tasks">
      <task-card v-for="task in tasks" :key="task.id" :task="task" @delete="loadTasks"></task-card>
    </div>
  </div>
  <add-task-modal :modalActive="modalActive" @close="closeModal" @add="loadTasks"></add-task-modal>
</template>

<style scoped>
.tasks__header {
  display: flex;
  justify-content: space-between;
}

.add-task {
  background-color: #2563dc;
}
.tasks__container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.tasks {
  margin-top: 16px auto;
  padding: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 700px;
}
</style>

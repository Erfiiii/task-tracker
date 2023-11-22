<script setup lang="ts">
import TaskCard from './TaskCard.vue'
import type { Task, FilterType, SortType } from '@/client/types'
import { ref } from 'vue'
import AddTaskModal from './AddTaskModal.vue'
import { onMounted } from 'vue'
import { useClient } from '@/client'
import { watch } from 'vue'
import StatusFilter from './filters/StatusFilter.vue'
import TasksSort from './sort/TasksSort.vue'

const modalActive = ref<boolean>(false)
const tasks = ref<Task[]>([])
const filter = ref<FilterType>('ALL')
const sort = ref<SortType>('createdAt')
const { getTasks } = useClient()

watch(filter, async () => await loadTasks())
watch(sort, async () => await loadTasks())

onMounted(async () => await loadTasks())

const closeModal = () => (modalActive.value = false)

const loadTasks = async () => (tasks.value = await getTasks(filter.value, sort.value))

</script>

<template>
  <div class="flex justify-between">
    <h1 class="text-xl font-semibold">{{ $t('tasks.title') }}</h1>
    <status-filter v-model="filter"></status-filter>
    <tasks-sort v-model="sort"></tasks-sort>
    <button class="bg-cyan-700 text-white text-sm p-2 rounded" @click="modalActive = true">
      {{ $t('tasks.add_task') }}
    </button>
  </div>
  <div class="flex justify-center mt-4">
    <div class="mt-4 flex-col flex" v-if="tasks.length">
      <task-card v-for="task in tasks" :key="task.id" :task="task" @delete="loadTasks"></task-card>
    </div>
    <p v-else class="font-extralight">{{ $t('tasks.no_task') }}</p>
  </div>
  <add-task-modal :modalActive="modalActive" @close="closeModal" @add="loadTasks"></add-task-modal>
</template>

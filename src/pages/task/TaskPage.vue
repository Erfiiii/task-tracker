<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Task } from '@/client/types.ts'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import DateOutput from '@/components/date/DateOutput.vue'
import { statusDetails } from '@/components/status'
import { useClient } from '@/client'

const task = ref<Task>()
const route = useRoute()
const router = useRouter()
const { changeTaskStatus, getTask } = useClient()

onMounted(async () => {
  task.value = await getTask(route.params.id as string)
})

const saveTask = async () => {
  if (task.value) {
    await changeTaskStatus(task.value.id, task.value.status)
    router.push({ name: 'tasks' })
  }
}
</script>

<template>
  <div v-if="task">
    <h1 class="my-6 text-xl font-bold">{{ task.title }}</h1>
    <p class="my-6 text-sm font-light" v-if="task.description">{{ task.description }}</p>
    <p v-else class="my-6 font-extralight">{{ $t('task.no_description') }}</p>
    <div class="flex flex-wrap">
      <span class="w-1/2 text-xs font-extralight">
        {{ $t('task.created_at') }}:
        <date-output class="ml-4" :value="new Date(task.createdAt)"></date-output>
      </span>
      <span class="w-1/2 text-xs font-extralight">
        {{ $t('task.due_date') }}:
        <date-output class="ml-4" :value="new Date(task.dueDate)"></date-output>
      </span>
      <span class="w-1/2 text-xs font-extralight">
        {{ $t('task.status') }}
        <select
          class="ml-4 mt-4 border-0 border-b-2 border-gray-200 bg-inherit focus:border-black focus:ring-0"
          v-model="task.status"
        >
          <option v-for="item in statusDetails" :key="item.value" :value="item.value">
            {{ item.label }}
          </option>
        </select>
      </span>
    </div>
    <div class="flex flex-row-reverse">
      <button
        class="m-1 rounded bg-cyan-600 px-4 py-2 text-sm text-white disabled:bg-slate-400"
        @click="saveTask"
      >
        {{ $t('task.save') }}
      </button>
      <router-link
        :to="{ name: 'tasks' }"
        class="m-1 rounded bg-cyan-600 px-4 py-2 text-sm text-white"
      >
        {{ $t('task.back') }}
      </router-link>
    </div>
  </div>
</template>

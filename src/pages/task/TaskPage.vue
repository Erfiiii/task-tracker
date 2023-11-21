<script setup lang="ts">
import { onMounted } from 'vue'
import type { Task, ClientType } from '@/client/types.ts'
import { inject } from 'vue'
import { ref } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import DateOutput from '@/components/date/DateOutput.vue'
import { statusDetails } from '@/components/status'

const client = inject<ClientType>('client') as ClientType
const task = ref<Task>()
const route = useRoute()
const router = useRouter()

onMounted(async () => {
  task.value = await client.getTask(route.params.id as string)
})


const saveTask = async () => {
  if (task.value) {
    await client.changeTaskStatus(task.value.id, task.value.status)
    router.push({name: 'tasks'})
  }
}
</script>

<template>
  <div v-if="task">
    <h1 class="text-xl font-bold my-6">{{ task?.title }}</h1>
    <p class="text-sm font-light my-6">{{ task?.description }}</p>
    <div class="flex flex-wrap">
      <span class="w-1/2 font-extralight text-xs"
        >Created at: <date-output class="ml-4" :value="task?.createdAt"></date-output
      ></span>
      <span class="w-1/2 font-extralight text-xs"
        >Due date: <date-output class="ml-4" :value="task?.dueDate"></date-output
      ></span>
      <span class="w-1/2 font-extralight text-xs">
        {{ $t('task.status') }}
        <select
          class="mt-4 ml-4 bg-inherit border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
          v-model="task.status"
        >
          <option
            v-for="item in statusDetails"
            :key="item.value"
            :value="item.value"
          >
            {{ item.label }}
          </option>
        </select>
      </span>
    </div>
    <div class="flex flex-row-reverse">
      <button
        class="m-1 px-4 py-2 text-sm disabled:bg-slate-400 bg-cyan-600 text-white rounded"
        @click="saveTask"
      >
        Save
      </button>
      <router-link
        :to="{ name: 'tasks' }"
        class="m-1 px-4 py-2 text-sm bg-cyan-600 text-white rounded"
      >
        Cancel
      </router-link>
    </div>
  </div>
</template>

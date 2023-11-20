<script setup lang="ts">
import Modal from '@/components/Modal.vue'
import { inject, ref } from 'vue'
import type { ClientType } from '@/client/types'

interface Props {
  modalActive: boolean
}
interface Emits {
  (e: 'close'): void
  (e: 'add'): void
}

const { modalActive } = defineProps<Props>()
const emit = defineEmits<Emits>()

const title = ref<string>('')
const description = ref<string>('')
const dueDate = ref<string>(new Date().toISOString().slice(0, 10))

const client = inject<ClientType>('client')

const saveTask = async () => {
  await client?.addTask(title.value, description.value, new Date(dueDate.value))
  emit('close')
  emit('add')
}
</script>

<template>
  <modal title="Create Task" :modal-active="modalActive" @save="saveTask" @close="emit('close')">
    <form>
      <label class="block my-4">
        <span class="text-grey-700">Title</span>
        <input
          placeholder="Title of the task..."
          class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
          type="text"
          v-model="title"
        />
      </label>
      <label class="block my-4">
        <span class="text-grey-700">Due date</span>
        <input
          placeholder="When should you finish the task?..."
          class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
          type="date"
          :min="new Date().toISOString().slice(0, 10)"
          v-model="dueDate"
        />
      </label>
      <label class="block my-4">
        <span class="text-grey-700">Description</span>
        <textarea
          placeholder="Say some words about the task..."
          class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
          type="date"
          rows="4"
          v-model="description"
        />
      </label>
    </form>
    <template #footer>
      <button class="m-1 px-4 py-2 text-sm bg-cyan-600 text-white rounded" @click="saveTask">
        Save
      </button>
      <button class="m-1 px-4 py-2 text-sm bg-cyan-600 text-white rounded" @click="emit('close')">
        Close
      </button>
    </template>
  </modal>
</template>

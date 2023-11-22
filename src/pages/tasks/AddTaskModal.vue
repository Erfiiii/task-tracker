<script setup lang="ts">
import Modal from '@/components/Modal.vue'
import { ref } from 'vue'
import { useClient } from '@/client'
import { computed } from 'vue'

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
const dueDate = ref<string>('')
const { addTask } = useClient()

const isButtonDisabled = computed(() => {
  return !title.value || !dueDate.value
})

const saveTask = async () => {
  await addTask(title.value, description.value, new Date(dueDate.value))
  emit('add')
  emit('close')
}
</script>

<template>
  <modal title="Create Task" :modal-active="modalActive" @save="saveTask" @close="emit('close')">
    <form>
      <label class="block my-4">
        <span class="text-grey-700">{{ $t('task.title') }}</span>
        <input
          :placeholder="$t('add_task.title_placeholder')"
          class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
          type="text"
          v-model="title"
        />
      </label>
      <label class="block my-4">
        <span class="text-grey-700">{{ $t('task.due_date') }}</span>
        <input
          :placeholder="$t('add_task.due_date_placeholder')"
          class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
          type="date"
          :min="new Date().toISOString().slice(0, 10)"
          v-model="dueDate"
        />
      </label>
      <label class="block my-4">
        <span class="text-grey-700">{{ $t('task.description') }}</span>
        <textarea
          :placeholder="$t('add_task.description_placeholder')"
          class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
          type="date"
          rows="4"
          v-model="description"
        />
      </label>
    </form>
    <template #footer>
      <button
        :disabled="isButtonDisabled"
        class="m-1 px-4 py-2 text-sm bg-cyan-600 text-white rounded disabled:bg-slate-500 disabled:opacity-50"
        @click="saveTask"
      >
        {{ $t('task.save') }}
      </button>
      <button class="m-1 px-4 py-2 text-sm bg-cyan-600 text-white rounded" @click="emit('close')">
        {{ $t('task.close') }}
      </button>
    </template>
  </modal>
</template>

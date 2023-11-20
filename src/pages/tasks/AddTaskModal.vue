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
      <label for="fname">Title</label>
      <input class="input" id="fname" type="text" v-model="title" />
      <label for="lname">Due Date</label>
      <input
        class="input"
        id="lname"
        type="date"
        :min="new Date().toISOString().slice(0, 10)"
        v-model="dueDate"
      />
      <label for="description">Description</label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        v-model="description"
      ></textarea>
    </form>
    <template #footer>
      <button @click="saveTask">Save</button>
      <button @click="emit('close')">Close</button>
    </template>
  </modal>
</template>


<style scoped>

button {
  margin: 8px;
  padding: 8px;
  border: none;
  background-color: #2563dc;
  cursor: pointer;
}

</style>
<script setup lang="ts">
import { ref } from 'vue'
import { languages, type Language, languageDetails, getLocale, setLocale } from '@/locale'
const lang = ref<Language>(getLocale())

function changeLanguage(e: Event) {
  const value = (e.target as HTMLInputElement).value as Language
  lang.value = value
  setLocale(value)
}
</script>

<template>
  <header class="fixed bg-white flex z-20 right-0 left-0 w-full border-b-2 justify-between p-6 align-middle">
    <h1 class="text-3xl font-bold">{{ $t('header.title') }}</h1>
    <select :value="lang" @change="changeLanguage">
      <option :key="item" v-for="item in languages" :value="languageDetails[item].value">
        {{ languageDetails[item].label }}
      </option>
    </select>
  </header>
</template>

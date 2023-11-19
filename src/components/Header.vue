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
  <header class="header">
    <h1 class="header__title">{{ $t('header.title') }}</h1>
    <select class="header__language" placeholder="" :value="lang" @change="changeLanguage">
      <option :key="item" v-for="item in languages" :value="languageDetails[item].value">
        {{ languageDetails[item].label }}
      </option>
    </select>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  top: 0;
  left: 0;
  padding: 24px;
  background-color: #fff;
  border-bottom: 1px solid #efefef;
}

.header__title {
  font-weight: 600;
}

.header__language {
  border: none;
  cursor: pointer;
  padding: 8px;
}
</style>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-slate-100">
    <Header />
    <div class="my-28 px-20">
      <RouterView />
    </div>
  </div>
</template>


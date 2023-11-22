<script setup lang="ts">
import { RouterView } from 'vue-router'
import CustomHeader from '@/components/CustomHeader.vue'
</script>

<template>
  <div class="font-Roboto flex min-h-screen flex-col bg-slate-100">
    <custom-header />
    <div class="my-28 px-20">
      <RouterView />
    </div>
  </div>
</template>

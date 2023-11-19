<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
</script>

<template>
  <Header />
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  margin-top: 80px;
}
</style>

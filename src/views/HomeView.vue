<script setup lang="ts">
import Content from '../components/homepage/Content.vue';
import Sidebar from '../components/homepage/Sidebar.vue';

</script>

<template>
  <main>
    <Sidebar />
    <Content />
  </main>
</template>

<style scoped>
  main {
    display: flex;
    gap: 20px;
  }
</style>


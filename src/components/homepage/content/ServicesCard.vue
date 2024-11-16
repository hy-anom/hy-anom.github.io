<script setup lang="ts">
  defineProps<{
    title: string,
    text: string,
    url: string,
  }>()
</script>

<template>
  <div class="service-card">
    <h3>{{ title }}</h3>
    <p class="text-overlay-1">
      {{ text }}
    </p>
    <a :href="url">
      See more detail >
    </a>
  </div>
</template>

<style lang="scss" scoped>
  .service-card {
    background-color: #303446;
    border-radius: 2px;
    padding: 20px 20px 30px 20px;
    flex: 30%;

    h3 {
      margin-bottom: 10px;
      font-size: 18px;
    }
    
    p {
      line-height: 1.4;
      margin-bottom: 20px;
    }

    a {
      color: #81c8be;
    }
  }
</style>
<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>


<template>
  <nav>
    <RouterLink active-class="active" class="nav-link" to="/">Home</RouterLink>
    <RouterLink active-class="active" class="nav-link" to="/quiz">Quizes</RouterLink>
  </nav>
</template>

<style scoped>
  nav {
    padding: 0 20px;
    height: 80px;
    display: flex;
    align-items: center;
    font-size: 30px;
    background-color: salmon;
    gap: 20px;
  }

  .nav-link {
  }

  .active {
    font-weight: bold;
    color:blueviolet
  }
</style>

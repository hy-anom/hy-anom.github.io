<script setup lang="ts">
import { RouterView } from "vue-router";
import MobileWarning from "./components/MobileWarning.vue";

</script>

<template>
  <div class="app">
    <MobileWarning />
    <!-- <Navbar /> -->
    <div class="container">
      <div class="window">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style>
.app {
  background-color: #292c3c;
  color: #c6d0f5;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
  overflow: hidden;
}
.window {
  padding-top: 20px;
  overflow: hidden;
}

.text-overlay-1 {
  color: #838ba7;
}
.text-overlay-0 {
  color: #737994;
}

</style>

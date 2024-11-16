<script setup lang="ts">
import Hero from "./content/Hero.vue";
import Services from "./content/Services.vue";
import SkillList from "./content/SkillList.vue";
import WorkExperiences from "./content/WorkExperiences.vue";
</script>

<template>
  <div class="content">
    <Hero />
    <SkillList />
    <Services />
    <WorkExperiences />
  </div>
</template>

<style scoped>
.content {
  width: 100%;
  height: calc(100vh - 20px);
  overflow-y: scroll;
  scrollbar-color: #414559 #303446;
  scrollbar-width: none;
  scrollbar-gutter: stable;
}
</style>

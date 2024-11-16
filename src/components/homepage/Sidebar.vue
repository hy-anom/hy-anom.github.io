<script setup lang="ts">
import DownloadCV from "./sidebar/DownloadCV.vue";
import Information from "./sidebar/Information.vue";
import Profile from "./sidebar/Profile.vue";
import SidebarButton from "./sidebar/SidebarButton.vue";
import SkillBar from "./sidebar/SkillBar.vue";
import SkillCircle from "./sidebar/SkillCircle.vue";
import SkillSets from "./sidebar/SkillSets.vue";
</script>

<template>
  <div class="sidebar">
    <Profile />
    <div class="scrollable">
      <Information />
      <SkillCircle />
      <SkillBar />
      <SkillSets />
      <DownloadCV />
    </div>
    <SidebarButton />
  </div>
</template>

<style scoped>
.sidebar {
  background-color: #303446;
  width: 400px;
  height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.scrollable {
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #414559 #303446;
  scrollbar-width: thin;
  scrollbar-gutter: stable;
  height: 100%;
}



</style>

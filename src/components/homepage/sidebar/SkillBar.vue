<script setup lang="ts">
interface SkillBar {
  text: string;
  percentage: string;
}

const skillsBar: SkillBar[] = [
  {
    text: "HTML / CSS",
    percentage: "90%",
  }, {
    text: "TypeScript",
    percentage: "75%",
  }, {
    text: 'VueJs',
    percentage: "80%"
  },  {
    text: 'React',
    percentage: "70%"
  }
];
</script>

<template>
  <div class="skillbar">
    <div class="skillbar-container">
      <div class="skillbar-item" v-for="(skillBar, id) in skillsBar" :key="id">
        <div class="skillbar-text">
          <p>{{ skillBar.text }}</p>
          <p class="text-overlay-1">{{ skillBar.percentage }}</p>
        </div>
        <div class="skillbar-empty">
          <div
            class="skillbar-fill"
            :style="{ width: skillBar.percentage }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.skillbar {
  padding: 0 20px;
  color: #c6d0f5;
}
.skillbar-container {
  border-bottom: 1px solid #414559;
  padding: 20px 0;
}
.skillbar-item {
  margin-bottom: 16px;
}

.skillbar-text {
  display: flex;
  justify-content: space-between;
}
.skillbar-empty {
  margin-top: 4px;
  background-color: #292c3c;
  height: 8px;
  border-radius: 100px;

  .skillbar-fill {
    background-color: #81c8be;
    height: 100%;
    border-radius: 100px;
  }
}

p {
  margin-bottom: 6px;
  font-weight: bold;
}
</style>

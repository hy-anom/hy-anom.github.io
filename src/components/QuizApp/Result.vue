<script setup lang="ts">
import { RouterLink } from "vue-router";

const { numberOfCorrectAnswer, quizQuestionLength } = defineProps([
  "numberOfCorrectAnswer",
  "quizQuestionLength",
]);
</script>

<template>
  <div class="result">
    <p class="">Your result...</p>
    <h1>{{ numberOfCorrectAnswer }}/ {{ quizQuestionLength }}</h1>
    <RouterLink class="back" to="/quiz">Go Back</RouterLink>
  </div>
</template>

<style scoped>
.result {
  text-align: center;
  padding: 100px 0;
}

p {
  font-size: 25px;
}

h1 {
  font-size: 80px;
}

.back {
  display: block;
  margin-top: 50px;
  font-size: 30px;
  color: salmon;
}
</style>

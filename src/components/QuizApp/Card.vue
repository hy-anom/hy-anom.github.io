<script setup lang="ts">
import { useRouter } from 'vue-router';

const { quiz } = defineProps(['quiz']);
const router = useRouter();

const navigateToQuiz = () => {
  router.push(`/quiz/${quiz.id}`);
}

</script>

<template>
  <div class="card" @click="navigateToQuiz">
    <img :src="quiz.img" alt="">
    <div class="card-text">
      <h2>{{ quiz.name }}</h2>
      <p>{{ quiz.questions.length }} Questions</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 310px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 35px;
  cursor: pointer;
}

.card img {
  width: 100%;
  height: 190px;
  margin: 0;
}

.card .card-text {
  padding: 10px 20px;
}

.card h2 {
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
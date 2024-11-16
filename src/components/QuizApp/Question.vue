<script setup lang="ts">
const { question } = defineProps(["question"]);
const emit = defineEmits(["selectOption"]);

const emitSelectedOption = (isCorrect: boolean) => {
  emit("selectOption", isCorrect);
};
</script>

<template>
  <div>
    <div class="question-container">
      <h1 class="question">
        {{ question.text }}
      </h1>
      <div class="quizes-container">
        <div
          v-for="option in question.options"
          :key="option.id"
          @click="emitSelectedOption(option.isCorrect)"
          class="option"
        >
          <p class="option-label">{{ option.label }}</p>
          <div class="option-value">{{ option.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.question-container {
  margin-top: 20px;
}

.question {
  font-size: 40px;
  margin-bottom: 20px;
}

.option {
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
  align-items: center;
}

.option-label {
  background-color: bisque;
  width: 50px;
  height: 50px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.option-value {
  background-color: rgb(233, 233, 233);
  width: 100%;
  height: 50px;
  font-size: 30px;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
</style>

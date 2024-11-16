`
<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import Question from "../components/QuizApp/Question.vue";
import QuizHeader from "../components/QuizApp/QuizHeader.vue";
import Result from "../components/QuizApp/Result.vue";
import quizes from "../data/quizes.json";

const route = useRoute();

const getQuizId = (): number => {
  if (!route.params || !route.params.id) return 0;
  return parseInt(route.params.id as string);
};

const getQuiz = () => {
  const quiz = quizes.find((q) => q.id === getQuizId());
  if (!quiz) {
    return {
      questions: [],
    };
  }
  return quiz;
};

const quiz = getQuiz();

const currentQuestionIndex = ref(0);
const numberOfCorrectAnswer = ref(0);
const showResult = ref(false);

const questionStatus = computed(
  () => `${currentQuestionIndex.value}/${quiz?.questions.length}`
);
const barPercentage = computed(
  () => `${(currentQuestionIndex.value / quiz?.questions.length) * 100}%`
);

const onOptionSelected = (isCorrect: boolean) => {
  if (isCorrect) numberOfCorrectAnswer.value++;

  if (quiz?.questions.length - 1 === currentQuestionIndex.value)
    showResult.value = true;

  currentQuestionIndex.value++;
};
</script>

<template>
  <div>
    <QuizHeader
      :barPercentage="barPercentage"
      :questionStatus="questionStatus"
    />
    <div v-if="!quiz">This quiz doesn't have any questions</div>
    <div v-else>
      <Result
        v-if="showResult"
        :quizQuestionLength="quiz.questions.length"
        :numberOfCorrectAnswer="numberOfCorrectAnswer"
      />
      <Question
        v-else
        :question="quiz.questions[currentQuestionIndex]"
        @selectOption="onOptionSelected"
      />
    </div>
  </div>
</template>

<style scoped></style>
`

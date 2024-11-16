<script setup lang="ts">
import { nextTick, Ref, ref } from "vue";

interface Note {
  id: number;
  text: string;
  date: Date;
  backgroundColor: string;
}

const showModal = ref(false);
const newNote = ref('');
const notes: Ref<Note[]> = ref([]);
const errorMessage = ref('');
const newNoteInput: Ref<HTMLInputElement | null> = ref(null);

const addNote = () => {
  if (newNote.value.length < 10) {
    return errorMessage.value = 'Note needs to be 10 characters or more.';
  }
  notes.value.push({
    id: Math.floor(Math.random() * 1000000),
    text: newNote.value,
    date: new Date(),
    backgroundColor: getRandomColor()
  });
  showModal.value = false;
  newNote.value = '';
  errorMessage.value = '';
}

const getRandomColor = () => {
  return `hsl(${Math.random() * 360}, 100%, 75%)`;
}

const openModal = async () => {
  showModal.value = true;

  await nextTick();
  if (newNoteInput.value)
    newNoteInput.value.focus()
}

</script>

<template>
  <main>
    <div v-if="showModal" class="overlay" @click.self="showModal = false" @keyup.escape="showModal = false">
      <div class="modal">
        <textarea v-model.trim="newNote" name="note" id="note" cols="30" rows="10" ref="newNoteInput"></textarea>
        <p v-if="errorMessage">{{ errorMessage }}</p>
        <button @click="addNote">Add note</button>
        <button @click="showModal = false" class="close">Close</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="openModal">+</button>
      </header>
      <div class="cards-container" v-if="notes.length === 0">
        <p>Your note is empty, use the button above to add a new one ☝️</p>
      </div>
      <div class="cards-container" v-else>
        <div v-for="note in notes" :key="note.id" class="card" :style="{ backgroundColor: note.backgroundColor }">
          <p class="main-text">{{ note.text }}</p>
          <p class="date">{{ note.date.toLocaleDateString() }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
}

.container {
  max-width: 600px;
  padding: 10px;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 75px;
}

header button {
  border: none;
  padding: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: rgb(21, 20, 20);
  border-radius: 100%;
  color: white;
  font-size: 20px;
}

.card {
  width: 225px;
  height: 225px;
  background-color: rgb(237, 182, 44);
  padding: 10px 15px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  margin-bottom: 20px;
}

.date {
  font-size: 12px;
  font-weight: bold;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 25px;
}

.cards-container p {
  font-size: 20px;
  width: 100%;
}

/* modal */
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  width: 300px;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.modal button {
  padding: 10px 20px;
  font-size: 20px;
  width: 100%;
  background-color: blueviolet;
  border: none;
  color: white;
  cursor: pointer;
  margin-top: 15px;
}

.modal .close {
  background-color: crimson;
  margin-top: 7px;
}

.modal p {
  color: crimson;
}

.modal textarea {
  max-width: 300px;
}
</style>
<template>
  <div class="profile">
    <div class="dp-container">
      <img src="https://picsum.photos/300" alt="dp" />
    </div>
    <h3>Anom Yulian Hartanto</h3>
    <p>Front-end Developer</p>
  </div>
</template>

<style scoped>
  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 20px;
    background-color: #414559;
  }

  .dp-container {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }

  h3 {
    margin-top: 10px;
    color: #c6d0f5;
  }

  p {
    margin-top: 10px;
  }
</style>
<template>
  <div class="information">
    <div class="information-container">
      <div class="questions">
        <p>Residence</p>
        <p>Country</p>
        <p>Date Of Birth</p>
        <p>WhatsApp</p>
        <p>Email</p>
      </div>
      <div class="answers text-overlay-1">
        <p>Semarang</p>
        <p>Indonesia</p>
        <p>08 July 1994</p>
        <p>+628122013808</p>
        <p>a.yulian.h@gmail.com</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .information {
    padding: 0 20px;
  }
  .information-container {
    border-bottom: 1px solid #414559;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;

    .questions {
      color: #c6d0f5;
      font-weight: bold;
    }

    .answers {
      text-align: right;
    }
  }
  p {
    margin-bottom: 6px;
  }
</style>
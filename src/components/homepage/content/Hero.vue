<template>
  <div class="hero">
    <h1>Discover My Work Space!</h1>
    <code>
      <span>&lt;</span>code<span>&gt;</span
      ><span class="content-text">I build website using React and Vue</span
      ><span>&lt;</span><span>/</span>code<span>&gt;</span>
    </code>

    <div class="button-container">
      <div>EXPLORE NOW</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero {
  background-color: #414559;
  width: 100%;
  padding: 40px 60px;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("https://picsum.photos/900/250");
  background-blend-mode: darken;
  background-repeat: no-repeat;
  background-position: center;

  h1 {
    margin-bottom: 16px;
    font-size: 50px;
    letter-spacing: -2px;
  }

  code {
    color: #8caaee;
    font-family: "Courier New", Courier, monospace;
    font-weight: bold;
    letter-spacing: 1px;
  }
  span {
    color: #c6a0f6;
  }
  .content-text {
    color: #c6d0f5;
  }

  .button-container {
    margin-top: 26px;

    div {
      display: inline-block;
      background-color: #81c8be;
      color: #292c3c;
      padding: 16px 24px;
      cursor: pointer;
      letter-spacing: 1px;
      font-size: 12px;
    }
  }
}
</style>

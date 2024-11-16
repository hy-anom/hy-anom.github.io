<template>
  <div class="skill-circle">
    <div class="skill-circle-container">
      <div>
        <div class="progress-circle over50 p100">
          <span class="text-overlay-1">100%</span>
          <div class="left-half-clipper">
            <div class="first50-bar"></div>
            <div class="value-bar"></div>
          </div>
        </div>
        <div><b>Indonesian</b></div>
      </div>
      <div>
        <div class="progress-circle over50 p80">
          <span class="text-overlay-1">80%</span>
          <div class="left-half-clipper">
            <div class="first50-bar"></div>
            <div class="value-bar"></div>
          </div>
        </div>
        <div><b>English</b></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skill-circle {
  padding: 0 20px;
}
.skill-circle-container {
  border-bottom: 1px solid #414559;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  text-align: center;
}

.progress-circle {
  font-size: 12px;
  margin: 10px 20px;
  position: relative;
  padding: 0;
  width: 5em;
  height: 5em;
  background-color: #292c3c;
  border-radius: 50%;
  line-height: 5em;
}

.progress-circle:after {
  border: none;
  position: absolute;
  top: 0.35em;
  left: 0.35em;
  text-align: center;
  display: block;
  border-radius: 50%;
  width: 4.3em;
  height: 4.3em;
  background-color: #303446;
  content: " ";
}

.progress-circle span {
  position: absolute;
  font-size: 14px;
  line-height: 4.4em;
  width: 100%;
  text-align: center;
  display: block;
  z-index: 2;
}
.left-half-clipper {

  border-radius: 50%;
  width: 5em;
  height: 5em;
  position: absolute; 
  clip: rect(0, 5em, 5em, 2.5em);
}

.progress-circle.over50 .left-half-clipper {
  clip: rect(auto, auto, auto, auto);
}
.value-bar {
  position: absolute;
  clip: rect(0, 2.5em, 5em, 0);
  width: 5em;
  height: 5em;
  border-radius: 50%;
  border: 0.45em solid #81c8be;
  box-sizing: border-box;
}
.progress-circle.over50 .first50-bar {
  position: absolute;
  clip: rect(0, 5em, 5em, 2.5em);
  background-color: #81c8be;
  border-radius: 50%;
  width: 5em;
  height: 5em;
}
.progress-circle:not(.over50) .first50-bar {
  display: none;
}

.progress-circle.p80 .value-bar {
  transform: rotate(288deg);
}
.progress-circle.p100 .value-bar {
  transform: rotate(360deg);
}
</style>

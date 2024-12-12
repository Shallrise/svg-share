<template>
  <h3>ease</h3>
  <div class="progress" id="progress" style="--ease: ease"></div>
  <h3>linear</h3>
  <div class="progress" style="--ease: linear"></div>
  <h3>cubic-bezier(.08,.81,.29,.99)</h3>
  <div class="progress"  style="--ease: cubic-bezier(.08,.81,.29,.99)"></div>
  <h3>linear(...)</h3>
  <div class="progress"  style="--ease: linear(0 0%, 0.14 1.21%, 0.27 5.26%, 0.29 13.05%, 0.44 16.25%, 0.52 21.42%, 0.56 28.01%, 0.66 34.81%, 0.81 40.55%, 0.83 49.43%, 0.9 56.92%, 0.98 66.11%, 0.99 79.22%, 1 88.79%, 1 100%)"></div>
  <button id="btn" @click="ClickOutside()">立刻完成</button>
<div style="width:100px;min-height:100px"></div>
</template>

<script setup>
// const btn = document.getElementById('btn');
function ClickOutside(){
  document.body.style.setProperty('--running', 'paused, running')
}
</script>

<style scoped>
html,body{
      font-family: -apple-system, "BlinkMacSystemFont", sans-serif;
      margin: 0;
      height: 100%;
      display: flex;
      justify-content: safe center;
      flex-direction: column;
      align-items: center;
      background: aliceblue;
    }
    .progress{
      /* --ease: cubic-bezier(.08,.81,.29,.99); */
      position: relative;
      width: 300px;
      height: 10px;
      margin: 25px 0;
      border-radius: 10px;
      overflow: hidden;
      background-color: #E4CCFF;
      flex-shrink: 0;
    }
.progress::before{
  position: absolute;
  content: '';
  width: 0%;
  height: 100%;
  background: #9747FF;
  animation: progress var(--dur, 10s) var(--ease) forwards, progress 1s forwards;
  animation-play-state: var(--running, running, paused);
}

@keyframes progress {
  99%{
    background-color: #9747FF;
  }
  100%{
    background-color: #14AE5C;
    width: 100%;
  }
}
</style>
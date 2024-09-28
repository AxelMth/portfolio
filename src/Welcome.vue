<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Define reactive variables
const visible = ref(true);
const letterCount = ref(1);
const waiting = ref(false);
let x = 1;
let intervalId: number | null = null;
let underscoreIntervalId: number | null = null;

// Function to handle console text effect
function consoleText(words: string[], id: string, colors: string[]) {
  if (!colors || colors.length === 0) {
    colors = ['#fff'];
  }

  const target = document.getElementById(id);
  const con = document.getElementById('console');

  if (!target || !con) return;

  target.setAttribute('style', 'color:' + colors[0]);

  intervalId = window.setInterval(function () {
    if (letterCount.value === 0 && waiting.value === false) {
      waiting.value = true;
      target.innerHTML = words[0].substring(0, letterCount.value);
      window.setTimeout(function () {
        const usedColor = colors.shift()!;
        colors.push(usedColor);
        const usedWord = words.shift()!;
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0]);
        letterCount.value += x;
        waiting.value = false;
      }, 1000);
    } else if (letterCount.value === words[0].length + 1 && waiting.value === false) {
      waiting.value = true;
      window.setTimeout(function () {
        x = -1;
        letterCount.value += x;
        waiting.value = false;
      }, 1000);
    } else if (waiting.value === false) {
      target.innerHTML = words[0].substring(0, letterCount.value);
      letterCount.value += x;
    }
  }, 120);

  underscoreIntervalId = window.setInterval(function () {
    if (visible.value === true) {
      con.className = 'console-underscore hidden';
      visible.value = false;
    } else {
      con.className = 'console-underscore';
      visible.value = true;
    }
  }, 400);
}

// Call the function on mount and clean up on unmount
onMounted(() => {
  consoleText(
    ['Hello World.', 'Console Text', 'Made with Love.'],
    'text',
    ['tomato', 'rebeccapurple', 'lightblue']
  );
});

onBeforeUnmount(() => {
  if (intervalId !== null) {
    clearInterval(intervalId);
  }
  if (underscoreIntervalId !== null) {
    clearInterval(underscoreIntervalId);
  }
});
</script>

<template>
  <div class="console-container">
    <span id="text"></span>
    <div class="console-underscore" id="console">&#95;</div>
  </div>
</template>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Khula:700);
body {
  background: #111;
}
.hidden {
  opacity: 0;
}
.console-container {
  font-family: Khula;
  font-size: 4em;
  text-align: center;
  height: 200px;
  width: 600px;
  display: block;
  position: absolute;
  color: white;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.console-underscore {
  display: inline-block;
  position: relative;
  top: -0.14em;
  left: 10px;
}
</style>
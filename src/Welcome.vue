<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, ref } from 'vue';

const textToDisplay = [
  'Hello, World!',
  'Welcome to my portfolio!',
  'I am a full-stack developer.',

];
const textIndex = ref<number>(0);
const displayedText = ref<string>('');
const textDirection = ref<'forward' | 'backward'>('forward');
const textDisplayIntervalId = setInterval(
  () => {
    const text = textToDisplay[textIndex.value];
    const currentText = displayedText.value;
    if (currentText.length < text.length && textDirection.value === 'forward') {
      displayedText.value = text.slice(0, currentText.length + 1);
    } else if (currentText.length > 0 && textDirection.value === 'backward') {
      displayedText.value = text.slice(0, currentText.length - 1);
    } else {
      textDirection.value = textDirection.value === 'forward' ? 'backward' : 'forward';
    }

    // if (currentText.length === 0) {
    //   textIndex.value = (textIndex.value + 1) % textToDisplay.length;
    // }
  },
  160
);

const isUnderscoreVisible = ref<boolean>(true);
const underscoreIntervalId = setInterval(() => {
  isUnderscoreVisible.value = !isUnderscoreVisible.value;
}, 400);

onBeforeUnmount(() => {
  clearInterval(textDisplayIntervalId);
  clearInterval(underscoreIntervalId);
});
</script>

<template>
  <div class="console-container">
    <span id="text">{{ displayedText }}</span>
    <div class="console-underscore" id="console" :class="{ 'hidden': isUnderscoreVisible }">&#95;</div>
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
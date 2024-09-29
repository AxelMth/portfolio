<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue';

const textToDisplay = [
  'Hello visitor!',
  'I am Axel, a Web Developer.',
  'Welcome to my portfolio!',
];
const textIndex = ref<number>(0);
const displayedText = ref<string>('');
const textDisplayIntervalId = ref<number | undefined>(undefined);

const displayNextText = () => {
  const text = textToDisplay[textIndex.value];
  const currentText = displayedText.value;

  if (currentText.length < text.length) {
    displayedText.value = text.slice(0, currentText.length + 1);
  } else {
    clearInterval(textDisplayIntervalId.value);
    setTimeout(() => {
      textIndex.value = (textIndex.value + 1) % textToDisplay.length;
      displayedText.value = ''; // Clear displayedText before starting next
      startDisplayingText(); // Start the next text
    }, 1500); // 1 second pause before showing the next text
  }
};

const startDisplayingText = () => {
  textDisplayIntervalId.value = setInterval(displayNextText, 160);
};

// Start displaying the first text
startDisplayingText();

const isUnderscoreVisible = ref<boolean>(true);
const underscoreIntervalId = setInterval(() => {
  isUnderscoreVisible.value = !isUnderscoreVisible.value;
}, 400);

onBeforeUnmount(() => {
  clearInterval(textDisplayIntervalId.value);
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
<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue';

const textToDisplay = [
  'Hello visitor!',
  'I am Axel, a Web Developer.',
  'Welcome to my portfolio!',
  'You will kno',
];
const textIndex = ref<number>(0);
const displayedText = ref<string>('');
const textDisplayIntervalId = ref<number | undefined>(undefined);

const textDisplayIsOver = ref<boolean>(false);
const shouldShowBlueScreen = ref<boolean>(false);
const displayNextText = () => {
  const text = textToDisplay[textIndex.value];
  const currentText = displayedText.value;

  if (currentText.length < text.length) {
    displayedText.value = text.slice(0, currentText.length + 1);
  } else {
    clearInterval(textDisplayIntervalId.value);
    if (textIndex.value === textToDisplay.length - 1) {
      textDisplayIsOver.value = true;
      clearInterval(underscoreIntervalId);
      setTimeout(() => {
        shouldShowBlueScreen.value = true;
      }, 5000);
      return
    }
    setTimeout(() => {
      textIndex.value = (textIndex.value + 1) % textToDisplay.length;
      displayedText.value = '';
      startDisplayingText();
    }, 1500);
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
    <span id="text" :class="{ glitch: textDisplayIsOver }">{{ displayedText }}</span>
    <span class="console-underscore" :class="{ hidden: isUnderscoreVisible, glitch: textDisplayIsOver  }">&#95;</span>
  </div>
  <div id="blueScreen" :class="{ hidden: !shouldShowBlueScreen }"> 
    <p>A problem has been detected and Windows has been shut down to prevent damage to your computer.</p>
    <p>*** STOP: 0x000000D1 (0x00000000, 0x00000002, 0x00000001, 0xF748E0BF)</p>
  </div>
</template>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Khula:700);
@import url(https://fonts.googleapis.com/css?family=monospace:700);

.console-container {
  font-family:Khula;
  font-size:3em;
  height:200px;
  width:600px;
  display:block;
  position:absolute;
  color:white;
  top:0;
  bottom:0;
  left:0;
  right:0;
  margin:auto;

}

.glitch {
  animation: glitch 0.2s steps(2) infinite;
}

.hidden {
  display: none !important;
}

#blueScreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: blue;
  color: white;
  font-family: monospace;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  flex-direction: column;
  font-size: 20px;
  line-height: 1.5;
}

@keyframes glitch {
  0% {
    text-shadow: 2px 2px red, -2px -2px blue;
  }
  25% {
    text-shadow: -2px -2px red, 2px 2px blue;
  }
  50% {
    transform: translate(2px, -2px);
  }
  75% {
    transform: translate(-2px, 2px);
  }
  100% {
    text-shadow: none;
    transform: none;
  }
}
</style>
<script setup lang="ts">
import { onMounted, ref } from 'vue';

const text = ref<string>('');
const logs = ref<string[]>([]);
const inputRef = ref<HTMLInputElement | null>(null);

const commands: Record<string, () => void> = {
  help: () => {
    logs.value.push('Available commands:');
    logs.value.push('about - About this terminal');
    logs.value.push('contact - Contact information');
  },
  about: () => {
    logs.value.push('This is a simple terminal created with Vue 3.');
  },
  clear: () => {
    logs.value = [];
  },
  contact: () => {
    logs.value.push('Email: some-email@gmail.com');
  }
}

const onEnter = () => {
  if (commands[text.value]) {
    commands[text.value]();
  } else {
    logs.value.push(`Command not found: ${text.value}`);
  }
  logs.value = [...logs.value];

  text.value = '';
}

onMounted(() => {
  if (inputRef.value) {
    inputRef.value.focus();
  }
  logs.value.push('Welcome to my terminal! Type help to see the available commands.');
});
</script>

<template>
  <main>
    <p v-for="log in logs" :key="log">{{ log }}</p>
    <p>
      admin> <input type="text" v-model="text" @keyup.enter="onEnter" ref="inputRef"/>
    </p>
  </main>
</template>

<style scoped>
  input {
    background-color: black;
    color: white;
    border: none;
    outline: none;
  }
  input {
    font-family: Courier;
    font-size: medium;
  }
</style>
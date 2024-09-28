<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Resume from './components/Resume.vue';
import Projects from './components/Projects.vue';

const text = ref<string>('');
const logs = ref<string[]>([]);
const inputRef = ref<HTMLInputElement | null>(null);
const shouldShowResume = ref<boolean>(false);
const shouldShowProjects = ref<boolean>(false);
const projectItems = ref<{ type: "file" | "folder", name: string; iconUrl: string }[]>([
  { type: 'file', name: 'Project 1', iconUrl: '/file.png' },
  { type: 'folder', name: 'Project 2', iconUrl: '/folder.png' },
  { type: 'file', name: 'Project 3', iconUrl: '/file.png' },
  { type: 'folder', name: 'Project 4', iconUrl: '/folder.png' },
]);

const commands: Record<string, () => void> = {
  help: () => {
    logs.value.push('Available commands:');
    logs.value.push('about - About this terminal');
    logs.value.push('projects - Projects');
    logs.value.push('contact - Contact information');
    logs.value.push('socials - Social media links');
  },
  about: () => {
    logs.value.push('This is a simple terminal created with Vue 3.');
  },
  clear: () => {
    logs.value = [];
  },
  contact: () => {
    logs.value.push('Email: some-email@gmail.com');
  },
  socials: () => {
    logs.value.push('LinkedIn           @some-twitter');
    logs.value.push('GitHub             @some-github');
  },
  resume: () => {
    shouldShowResume.value = true;
  },
  projects: () => {
    shouldShowProjects.value = true;
  },
}

const onEnter = () => {
  logs.value.push(`guest> ${text.value}`);
  if (commands[text.value]) {
    commands[text.value]();
  } else {
    logs.value.push(`Command not found: ${text.value}`);
  }
  text.value = '';
}

const onCloseWindow = () => {
  shouldShowResume.value = false;
  shouldShowProjects.value = false;
}

onMounted(() => {
  if (inputRef.value) {
    inputRef.value.focus();
  }
  logs.value.push('Welcome to my terminal! Type help to see the available commands.');
});
</script>

<template>
  <div>
    <p v-for="log in logs" :key="log">{{ log }}</p>
    <p>
      guest> <input type="text" v-model="text" @keyup.enter="onEnter" ref="inputRef"/>
    </p>
  </div>
  <Resume v-if="shouldShowResume" :close="onCloseWindow"/>
  <Projects v-if="shouldShowProjects" :close="onCloseWindow" :items="projectItems"/>
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
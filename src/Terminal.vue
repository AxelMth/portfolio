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
  { type: 'file', name: 'Earthunt', iconUrl: '/earthunt.png' },
  { type: 'file', name: 'Twit\'Hair', iconUrl: '/twit-hair.png' },
  { type: 'file', name: 'Verdict', iconUrl: '/twit-hair.png' },
]);

const logHelpCommand = (commands: { name: string; description: string}[]) => {
  const commandWithMaxLength = commands.reduce((acc, curr) => {
    return curr.name.length > acc ? curr.name.length : acc;
  }, 0);
  const getHtmlSpacing = (command: string) => {
    return '&nbsp;'.repeat(commandWithMaxLength - command.length);
  }
  logs.value.push('Available commands:');
  commands.forEach(command => {
    logs.value.push(`<span class="command">${command.name}</span>${getHtmlSpacing(command.name)}&nbsp;&nbsp;&nbsp;${command.description}`);
  });
}
const commands: Record<string, () => void> = {
  help: () => {
    logHelpCommand([
      { name: 'about', description: 'About me' },
      { name: 'contact', description: 'Contact information' },
      { name: 'socials', description: 'Social media links' },
      { name: 'resume', description: 'Show my resume' },
      { name: 'projects', description: 'Show my projects' },
      { name: 'clear', description: 'Clear the terminal' },
    ])
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
    const github = '<a class="social" href="https://github.com/AxelMth" target="_blank">Github</a>';
    const linkedin = '<a class="social" href="https://www.linkedin.com/in/axel-mathieu-le-gall-361b1510a/" target="_blank">LinkedIn</a>';
    logs.value.push(github + '&nbsp;&nbsp;&nbsp;' + linkedin);
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
    <p v-for="(log, index) in logs" :key="index" v-html="log"></p>   
    <div class="command-text">
      <span>guest&gt;</span>
      <input type="text" v-model="text" @keyup.enter="onEnter" ref="inputRef"/>
    </div>
  </div>
  <Resume v-if="shouldShowResume" :close="onCloseWindow"/>
  <Projects v-if="shouldShowProjects" :close="onCloseWindow" :items="projectItems"/>
</template>

<style scoped>
  input {
    background-color: transparent;
    color: #22eae0;
    border: none;
    outline: none;
    font-family: Courier;
    font-size: medium;
    flex: 1;
    margin-left: 5px;
  }
  .command-text {
    display: flex;
    align-items: center;
    white-space: nowrap;
  }
</style>
<style>
span.command {
  color: #e60efe;
}
a.social {
  color: #9d0ffd;
}
a.social:hover {
  background: #22eae0;
  color: #211830;
  cursor: pointer;
}
</style>
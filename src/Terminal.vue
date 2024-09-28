<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Resume from './components/Resume.vue';
import type { FileItem } from './interfaces/file.interface';
import type { FolderItem } from './interfaces/folder.interface';
import { getLogsForCommands } from './helpers/log.helper';
import FileExplorer from './components/FileExplorer.vue';
import Experience from './components/Experience.vue';
import type {Experience as IExperience} from './interfaces/experience.interface';
import { CitronExperience, HubloExperience, PadoaExperience } from './constants/experiences.constant';

const text = ref<string>('');
const logs = ref<string[]>([]);
const inputRef = ref<HTMLInputElement | null>(null);

const shouldShowResume = ref<boolean>(false);
const shouldShowProjects = ref<boolean>(false);
const shouldShowExperiences = ref<boolean>(false);
const currentExperience = ref<IExperience | null>(null);

const experiencesItems = ref<(FileItem|FolderItem)[]>([
  { type: 'file', name: 'Hublo', iconUrl: '/hublo.jpeg', action: () => {
    currentExperience.value = HubloExperience;
  } },
  { type: 'file', name: 'Padoa', iconUrl: '/padoa.jpeg', action: () => {
    currentExperience.value = PadoaExperience;
  }  },
  { type: 'file', name: 'Citron', iconUrl: '/citron.jpeg', action: () => {
    currentExperience.value = CitronExperience;
  }  },
]);
const projectItems = ref<(FileItem|FolderItem)[]>([
  { type: 'file', name: 'Earthunt', iconUrl: '/earthunt.png', action: () => {
    window.open('https://marcel.games', '_blank')
  } },
  { type: 'file', name: 'Twit\'Hair', iconUrl: '/twit-hair.png', action: () => {
    window.open('https://twitter.com/twitt_hair_', '_blank')
  }  },
  { type: 'file', name: 'Verdict', iconUrl: '/twit-hair.png', action: () => {
    window.open('https://verdict.axelmathi.eu', '_blank')
  }  },
]);

const commands: Record<string, () => void> = {
  help: () => {
  logs.value.push('Available commands: ')
  const helpLogs = getLogsForCommands([
      { name: 'about', description: 'About me' },
      { name: 'experiences', description: 'Show my experiences' },
      { name: 'socials', description: 'Social media links' },
      { name: 'resume', description: 'Show my resume' },
      { name: 'projects', description: 'Show my projects' },
      { name: 'clear', description: 'Clear the terminal' },
    ])
  helpLogs.forEach(log => logs.value.push(log));
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
  experiences: () => {
    shouldShowExperiences.value = true;
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
  shouldShowExperiences.value = false;
}

const onCloseExperience = () => {
  currentExperience.value = null;
}

onMounted(() => {
  if (inputRef.value) {
    inputRef.value.focus();
  }
  logs.value.push('Welcome to my portfolio!');
  logs.value.push('Type "help" to see available commands.');
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
  <FileExplorer v-if="shouldShowProjects" title="Projects" :close="onCloseWindow" :items="projectItems"/>
  <FileExplorer v-if="shouldShowExperiences" title="Experiences" :close="onCloseWindow" :items="experiencesItems"/>
  <Experience v-if="shouldShowExperiences && currentExperience" :experience="currentExperience" :close="onCloseExperience"/>
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
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
import { earthuntAsciiArt } from './constants/earthunt-ascii-art';

const text = ref<string>('');
const logs = ref<string[]>([]);
const inputRef = ref<HTMLInputElement | null>(null);

const shouldShowResume = ref<boolean>(false);
const shouldShowProjects = ref<boolean>(false);
const shouldShowExperiences = ref<boolean>(false);
const currentExperience = ref<IExperience | null>(null);

const experiencesItems = ref<(FileItem|FolderItem)[]>([
  { type: 'file', name: 'Hublo', iconUrl: '/homepage/hublo.jpeg', action: () => {
    currentExperience.value = HubloExperience;
  } },
  { type: 'file', name: 'Padoa', iconUrl: '/homepage/padoa.jpeg', action: () => {
    currentExperience.value = PadoaExperience;
  }  },
  { type: 'file', name: 'Citron', iconUrl: '/homepage/citron.jpeg', action: () => {
    currentExperience.value = CitronExperience;
  }  },
]);
const projectItems = ref<(FileItem|FolderItem)[]>([
  { type: 'file', name: 'Earthunt', iconUrl: '/homepage/earthunt.png', action: () => {
    window.open('https://marcel.games', '_blank')
  } },
  { type: 'file', name: 'Twit\'Hair', iconUrl: '/homepage/twit-hair.png', action: () => {
    window.open('https://twitter.com/twitt_hair_', '_blank')
  }  },
  { type: 'file', name: 'Verdict', iconUrl: '/homepage/verdict.png', action: () => {
    window.open('https://verdict.axelmathi.eu', '_blank')
  }  },
]);

const commands: Record<string, (args?: string[]) => void> = {
  help: () => {
  logs.value.push('Available commands: ')
  const helpLogs = getLogsForCommands([
      { name: 'experiences', description: 'Show my experiences' },
      { name: 'socials', description: 'Social media links' },
      { name: 'resume', description: 'Show my resume' },
      { name: 'projects', description: 'Show my projects' },
      { name: 'clear', description: 'Clear the terminal' },
    ])
  helpLogs.forEach(log => logs.value.push(log));
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
  locate: (args: string[] = []) => {
    const [entryType, typeId] = args
    console.log(entryType, typeId, args);
    if (!entryType) {
      logs.value.push(`Please provide a entry type (ex: house) to locate it.`);
      return;
    }
    if (entryType !== 'house') {
      logs.value.push(`Entry type not found: ${entryType}`);
      return;
    }
    if (!typeId) {
      logs.value.push(`Please provide a house id to locate it.`);
      return;
    }
    if (typeId === "34f05701-277d-407f-b861-8a7d01bbf12f") {
      logs.value.push(`Cherche Bonnetan sur la carte et la localisation se dévoilera à toi...`);
      const earthuntLines = earthuntAsciiArt.split('\n').map(line => line.replace(/s/g, '&nbsp;'));
      earthuntLines.forEach(line => logs.value.push(line));
      return
    } 
    logs.value.push(`House not found with id: ${typeId}`);
  }
}

const onEnter = () => {
  logs.value.push(`guest> ${text.value}`);
  const cleanedText = text.value.trim().toLowerCase();
  const [command, ...args] = cleanedText.split(' ');
  if (commands[command]) {
    commands[command](args);
  } else {
    logs.value.push(`Command not found: ${cleanedText}`);
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
});
</script>

<template>
  <div>
    <div class="welcome-message">
      <p>Welcome to my portfolio !</p>
      <p>Type "help" to see available commands.</p>
    </div>
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
  * {
    box-sizing: border-box;
  }
  input {
    background-color: transparent;
    color: #22eae0;
    border: none;
    outline: none;
    font-family: Courier;
    font-size: medium;
    flex: 1;
    margin-left: 5px;
    min-width: 0;
  }
  .command-text {
    display: flex;
    align-items: center;
    white-space: nowrap;
    width: 100%;
    overflow-x: hidden;
  }
  .welcome-message {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
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
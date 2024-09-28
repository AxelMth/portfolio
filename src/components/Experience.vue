<script lang="ts" setup>
import { computed } from 'vue';
import Window from './Window.vue';
import type { Experience } from '@/interfaces/experience.interface';
const props = defineProps<{ experience: Experience; close: () => void }>();

const formattedStartDate = computed(() => {
  return new Date(props.experience.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
})
const formattedEndDate = computed(() => {
  if (!props.experience.endDate) return 'Present';
  return new Date(props.experience.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
})
</script>

<template>
  <Window :title="experience.companyName" :close="close" :show-toolbar="true">
    <div class="experience">
      <img :src="experience.companyLogo" alt="Company logo" class="company-logo"/>
      <div class="content">
        <h2>{{ experience.jobTitle }}</h2>
        <p>
          {{ formattedStartDate }} - {{ formattedEndDate }}
        </p>
        <p>{{ experience.description }}</p>
        <p class="frameworks">
          <span class="framework" v-for="framework in experience.frameworks">{{ framework }}</span>
        </p>
        <p class="softwares">
          <span class="software" v-for="software in experience.softwares">{{ software }}</span>
        </p>
      </div>
    </div>
  </Window>
</template>

<style scoped>
.experience {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: calc(100% - 120px);
}
.company-logo {
  width: 100px;
  height: 100px;
  object-fit: contain;
}
.frameworks, .softwares {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
p > span {
  background-color: #22eae0;
  color: #000;
  padding-left: 4px;
  padding-right: 4px;
  border-radius: 5px;
}
.framework {
  background-color: #22eae0;
}
.software {
  background-color: #9d0ffd;
  color: #fff
}
</style>
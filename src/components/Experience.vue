<script lang="ts" setup>
import { computed } from 'vue';
import Window from './Window.vue';
import type { Experience } from '@/interfaces/experience.interface';
const props = defineProps<{ experience: Experience; close: () => void }>();

const formattedStartDate = computed(() => {
  return new Date(props.experience.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
})
const formattedEndDate = computed(() => {
  return new Date(props.experience.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
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
        <p>
          <span v-for="skill in experience.skills">{{ skill }}</span>
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
}
.company-logo {
  width: 100px;
  height: 100px;
  object-fit: contain;
}
p > span {
  background-color: #22eae0;
  color: #000;
  padding: 5px;
  margin-right: 5px;
  border-radius: 5px;
}
</style>
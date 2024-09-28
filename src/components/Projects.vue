<script lang="ts" setup>
import File from './File.vue';
import Folder from './Folder.vue';
import Window from './Window.vue';
defineProps<{ items: { type: "file" | "folder", name: string; iconUrl: string }[]; close: () => void }>();
</script>

<template>
  <Window title="Projets" :close="close">
    <div class="projects">
      <div v-for="item in items" :key="item.name"  class="project">
        <File v-if="item.type === 'file'" :name="item.name" :icon-url="item.iconUrl"/>
        <Folder v-else="item.type === 'folder'" :name="item.name"/>
      </div>
    </div>
  </Window>
</template>

<style scoped>
div.projects {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: baseline;
}
div.project {
  display: flex;
  flex-direction: column;
}
</style>
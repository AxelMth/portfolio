<script lang="ts" setup>
import type { FileItem } from '@/interfaces/file.interface';
import File from './File.vue';
import Folder from './Folder.vue';
import Window from './Window.vue';
import type { FolderItem } from '@/interfaces/folder.interface';
defineProps<{ title: string; items: (FileItem|FolderItem)[]; close: () => void }>();
</script>

<template>
  <Window :title="title" :close="close" :show-toolbar="false">
    <div class="items">
      <div v-for="item in items" :key="item.name"  class="item">
        <File v-if="item.type === 'file'" :name="item.name" :icon-url="item.iconUrl" @click="item.action()"/>
        <Folder v-else="item.type === 'folder'" :name="item.name"/>
      </div>
    </div>
  </Window>
</template>

<style scoped>
div.items {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: baseline;
}
div.item {
  display: flex;
  flex-direction: column;
}
</style>
<script lang="ts" setup>
import VuePdfEmbed from 'vue-pdf-embed'
import Window from './Window.vue';
defineProps<{ close: () => void }>();

const menuOptions = [{
  name: 'File',
  subMenuOptions: [
    {
      name: 'Download',
      action: () => {
        const link = document.createElement('a');
        link.href = '/portfolio/Axel_Mathieu_Software_Engineer.pdf';
        link.download = 'Axel_Mathieu_Software_Engineer.pdf';
        link.click();
      },
    },
  ],
}]
</script>

<template>
  <Window title="Curriculum Vitae" :close="close" :show-toolbar="true" :menu-options="menuOptions">
    <VuePdfEmbed source="/portfolio/Axel_Mathieu_Software_Engineer.pdf" />
  </Window>
</template>

<style scoped>
</style>
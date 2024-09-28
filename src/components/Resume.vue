<script lang="ts" setup>
import VuePdfEmbed from 'vue-pdf-embed'
import Window from './Window.vue';
defineProps<{ close: () => void }>();
</script>

<template>
  <Window title="Curriculum Vitae" :close="close" :show-toolbar="true">
    <VuePdfEmbed source="/Axel_Mathieu_Software_Engineer.pdf" />
  </Window>
</template>

<style scoped>
</style>
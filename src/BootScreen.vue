<script setup lang="ts">
import { ref } from 'vue';
import { logs as bootLogs } from './constants/logs.constant'; 
import { BOOT_SCREEN_TIMEOUT } from './constants/timings.constant';

const logs = ref<string[]>([]);

let cumulatedTimeout = 0
for (let i = 0; i < bootLogs.length; i++) {
  cumulatedTimeout += Math.random() * 200;
  setTimeout(() => {
    logs.value.push(bootLogs[i]);
  }, cumulatedTimeout);
}

const emit = defineEmits(['logsEnded'])
setTimeout(() => {
  emit('logsEnded');
}, cumulatedTimeout + BOOT_SCREEN_TIMEOUT);

</script>
<template>
  <main>
    <p v-for="log in logs">
        {{ log }}
    </p>   
  </main>
</template>

<style scoped lang="scss">
main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  background: black;
  overflow-y: auto;
}
</style>
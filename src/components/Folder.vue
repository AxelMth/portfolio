<script lang="ts" setup>
defineProps<{ name: string; }>();
</script>

<template>
  <img src="/folder.png">
  <p>{{ name }}</p>
</template>

<style scoped>
  p {
    font-weight: bold;
    font-size: medium;
    color: black;
    text-align: center;
  }
</style>
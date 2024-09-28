<script lang="ts" setup>
defineProps<{ name: string; iconUrl: string }>();
</script>

<template>
  <img :src="iconUrl">
  <p>{{ name }}</p>
</template>

<style scoped>
  img {
    width: 100px;
    height: 100px;
  }
  p {
    font-weight: bold;
    font-size: medium;
    color: black;
    text-align: center;
  }
</style>

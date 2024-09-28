<script lang="ts" setup>
defineProps<{ name: string; iconUrl: string }>();
</script>

<template>
  <img :src="iconUrl">
  <p>{{ name }}</p>
</template>

<style scoped>
  img {
    width: 60px;
    height: 60px;
    display: flex;
    justify-self: center;
    align-self: center;
  }
  p {
    font-weight: bold;
    font-size: medium;
    color: black;
    text-align: center;
  }
</style>

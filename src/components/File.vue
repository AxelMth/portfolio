<script lang="ts" setup>
defineProps<{ name: string; iconUrl: string }>();
const emit = defineEmits(['click']);
</script>

<template>
  <div class="container" @click="emit('click')">
      <img :src="iconUrl">
      <p>{{ name }}</p>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    width: 90px;
    height: 90px;
    padding: 15px;
  }
  img:hover {
    cursor: pointer;
  }
  img:hover + p {
    color: #fff;
    cursor: pointer;

    background: #9d0ffd;
    background: url(../img/bk.png), -moz-linear-gradient(left, #9d0ffd 0%, #e60efe 100%);
    background: url(../img/bk.png), -webkit-linear-gradient(left, #9d0ffd 0%, #e60efe 100%);
    background: url(../img/bk.png), linear-gradient(to right, #9d0ffd 0%, #e60efe 100%);
  }
  p {
    font-weight: bold;
    font-size: medium;
    color: black;
    text-align: center;
  }
  p:hover {
    color: #fff;
    cursor: pointer;

    background: #9d0ffd;
    background: url(../img/bk.png), -moz-linear-gradient(left, #9d0ffd 0%, #e60efe 100%);
    background: url(../img/bk.png), -webkit-linear-gradient(left, #9d0ffd 0%, #e60efe 100%);
    background: url(../img/bk.png), linear-gradient(to right, #9d0ffd 0%, #e60efe 100%);
  }
</style>

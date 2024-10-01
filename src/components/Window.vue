<script lang="ts" setup>
defineProps<{ title: string; showToolbar: boolean; close: () => void }>();

import { ref, onMounted, onBeforeUnmount } from 'vue';

const isDragging = ref(false);
const position = ref({ x: 0, y: 0 });
const offset = ref({ x: 0, y: 0 });

const onMouseDown = (event: MouseEvent) => {
  isDragging.value = true;
  offset.value = {
    x: event.clientX - position.value.x,
    y: event.clientY - position.value.y,
  };
};

const onMouseMove = (event: MouseEvent) => {
  if (isDragging.value) {
    position.value = {
      x: event.clientX - offset.value.x,
      y: event.clientY - offset.value.y,
    };
  }
};

const isMouseDownOnCloseButton = ref(false);

const onMouseUp = () => {
  isDragging.value = false;
};

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);
});

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMouseMove);
  window.removeEventListener('mouseup', onMouseUp);
});
</script>

<template>
    <div class="container" :style="{ top: `${position.y}px`, left: `${position.x}px` }">
      <div class="header" @mousedown="onMouseDown">
          {{ title }}
          <img :src="isMouseDownOnCloseButton ? '/close-button-clicked.png' : '/close-button.png'" @click="close" @mousedown="isMouseDownOnCloseButton = true" @mouseup="isMouseDownOnCloseButton = false">
      </div>
      
      <div v-if="showToolbar" class="undrag">
        <a href="#" id="start"></a>
        <a class="linkTop" href="#">File</a>
        <a class="linkTop" href="#">Edit</a>
        <a class="linkTop" href="#">View</a>
        <a class="linkTop" href="#">Help</a>

        <div class="body bordered">
          <slot></slot>
        </div>
      </div>

      <div v-if="!showToolbar" class="body">
        <slot></slot>
      </div>
    </div>
</template>

<style scoped>
    div.container {
        display: block;
        border-radius: 5px;
        margin: 1rem;

        background: #c0c0c0;
        border: 4px #000 outset;

        font-weight: bold;
        touch-action: none;

        position: absolute;
        height: 600px;
        max-height: 75%;
        width: calc(100% - 10vw);
        max-width: 560px;
        top: 10vh;
        left: 10vw;
    }
    div.header {
        background-color: #333;
        color: white;
        padding: 10px;
        text-align: center;

        display: flex;
        justify-content: space-between;
        align-items: center;

        font-weight: bold;

        height: 30px;
        line-height: 25px;
        color: #fff;
        background: #9d0ffd;
        background: -moz-linear-gradient(left, #9d0ffd 0%, #e60efe 100%);
        background: -webkit-linear-gradient(left, #9d0ffd 0%, #e60efe 100%);
        background: linear-gradient(to right, #9d0ffd 0%, #e60efe 100%);
        width: 100%;
    }
    .body {
        background: #fff;
        height: calc(100% - 10px);
        overflow-y: scroll;
        padding: 10px;
    }
    .body.bordered {
        border: 3px #969696 inset;
        margin: 0 4px 4px;
    }
    img {
        cursor: pointer;
    }
    .undrag {
      background: #c0c0c0;
      width: 100%;
      height: calc(100% - 50px);
      color: #000;
    }
    .linkTop {
      display: inline;
      color: #000;
      padding: 3px;
      line-height: 24px;
    }
    .linkTop:hover {
      background: #969696;
      color: #211830;
    }
    .bottom p {
      height: 20px;
      border: 3px #969696 inset;
      padding: 2px 4px;
    }
    .b1 {
      flex: initial;
      margin-right: 6px;
    }
</style>

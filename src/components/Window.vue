<script lang="ts" setup>
interface MenuOption {
  name: string;
  subMenuOptions: {
    name: string;
    action: () => void;
  }[];
}
defineProps<{ title: string; showToolbar?: boolean; close: () => void; menuOptions?: MenuOption[] }>();

import { ref, onMounted, onBeforeUnmount } from 'vue';

const isDragging = ref(false);
const position = ref({ x: 0, y: 0 });
const offset = ref({ x: 0, y: 0 });

const activeMenuOption = ref<MenuOption | null>(null);

const toggleActiveMenuOption = (option: MenuOption) => {
  if (activeMenuOption.value?.name === option?.name) {
    activeMenuOption.value = null;
  } else {
    activeMenuOption.value = option;
  }
};


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
          <img :src="isMouseDownOnCloseButton ? '/portfolio/close-button-clicked.png' : '/portfolio/close-button.png'" @click="close" @mousedown="isMouseDownOnCloseButton = true" @mouseup="isMouseDownOnCloseButton = false">
      </div>
      
      <div v-if="showToolbar" class="undrag">
        <a href="#" id="start"></a>
        <a class="linkTop" href="#" @click="toggleActiveMenuOption(option)" v-for="option in menuOptions" v-bind:class="{ active: activeMenuOption?.name === option.name }">{{  option.name  }}</a>
        <div v-if="activeMenuOption" class="subMenu">
          <p v-for="subOption in activeMenuOption.subMenuOptions" @click="subOption.action(); toggleActiveMenuOption(activeMenuOption)" class="linkTop b1">{{ subOption.name }}</p>
        </div>

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
    .subMenu {    
      position: absolute;
      top: 55px;
      left: 6px;
      background: #c0c0c0;
      z-index: 1;
    }
    .subMenu:hover {
      cursor: pointer;
    }
    .active {
      background: #969696;
      color: #211830;
    }
</style>

<script setup lang="ts">
import Applications from './components/Applications.vue';
import Experiences from './components/Experiences.vue';
import Formations from './components/Formations.vue';

import { computed, ref, type Component } from 'vue'

const routes: Record<string, Component> = {
  // '/about': About,
  '/formations': Formations,
  '/experiences': Experiences,
  '/applications': Applications
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/formations']
})
</script>

<template>
  <aside>
    <header>
      <img class="logo" src="../assets/profile-picture.jpeg" alt="Logo" width="100" height="100" />
      <h1>Portfolio</h1>
    </header>
    <nav>
      <ul>
        <li><a href="#/formations">Formations</a></li>
        <li><a href="#/experiences">Experiences</a></li>
        <li><a href="#/applications">Applications</a></li>
      </ul>
    </nav>
  </aside>
  <main>
    <component :is="currentView" />
  </main>
</template>

<style scoped>
  aside {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 200px;
    background-color: var(--color-primary);
    color: white;
  }
  main {
    height: 100%;
    margin-left: 200px;
    width: calc(100vw - 200px);
  }
  header {
    line-height: 1.5;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }
</style>

<style>
/* Add this to your main CSS file or a new CSS file */
.full-screen-item {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  scroll-snap-align: start;
}

.container {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
}</style>
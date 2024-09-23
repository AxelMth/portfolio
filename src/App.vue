<script setup lang="ts">
import Applications from './Applications.vue';
import Experiences from './Experiences.vue';

import { computed, ref, type Component } from 'vue'

const routes: Record<string, Component> = {
  // '/about': About,
  '/experiences': Experiences,
  '/applications': Applications,
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
    <div class="contact">
        <img class="logo" src="/profile-picture.jpeg" alt="Logo" width="100" height="100" />
        <p>Axel Mathieu</p>
        <div class="socials">
          <a href="https://github.com/AxelMth" target="_blank">
            <img src="/github.png" alt="Github" width="20" height="20" />
          </a>
          <a href="https://www.linkedin.com/in/axel-mathieu-le-gall-361b1510a/" target="_blank">
            <img src="/linkedin.png" alt="Linkedin" width="20" height="20" />
          </a>
        </div>
      </div>
    <nav>
      <a href="#/experiences">Experiences</a>
      <a href="#/applications">Applications</a>
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
    height: 100vh;
    margin-left: 200px;
    width: calc(100vw - 400px);
    padding: 2rem;
  }

  .contact {
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .logo {
    display: block;
    border-radius: 50px;
    margin-top: 1rem;
  }

  .socials {
    display: flex;
    justify-content: space-around;
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
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
<script setup lang="ts">
import MainPage from './components/MainPage.vue';
</script>

<template>
  <header>
    <img alt="My logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <main>
    <MainPage></MainPage>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

}
</style>

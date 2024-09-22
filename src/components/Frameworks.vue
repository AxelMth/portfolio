<script lang="ts" setup>
import ApplicationItem from './ApplicationItem.vue';
const frameworks = [
    {
        name: 'Vue.js',
    },
    {
        name : 'React',

    },
    {
        name: 'Angular',
    }, {
        name: 'Svelte',
    },
    {
        name: 'Nuxt.js',
    },
    {
        name: 'Next.js',
    },
    {
        name: 'Gatsby',
    },
    {
        name: 'Gridsome',
    },
    {
        name: 'Sapper',
    },
    {
        name: 'Quasar',
    },
    {
        name: 'Vuetify',
    },
    {
        name: 'Bootstrap',
    },
    {
        name: 'Tailwind',
    },
    {
        name: 'Materialize',
    },
    {
        name: 'Bulma',
    },
    {
        name: 'Chakra',
    },
    {
        name: 'Ant Design',
    },
    {
        name: 'Element',
    },
    {
        name: 'PrimeVue',
    },
    {
        name: 'PrimeReact',
    },
    {
        name: 'PrimeNG',
    },
    {
        name: 'Material-UI',
    },
    {
        name: 'Quasar',
    },
    {
        name: 'Vuetify',
    },
    {
        name: 'Bootstrap',
    },
    {
        name: 'Tailwind',
    },
    {
        name: 'Materialize',
    },
    {
        name: 'Bulma',
    },
    {
        name: 'Chakra',
    },
    {
        name: 'Ant Design',
    },
    {
        name: 'Element',
    },
    {
        name: 'PrimeVue',
    },
    {
        name: 'PrimeReact',
    },
    {
        name: 'PrimeNG',
    },
    {
        name: 'Material-UI',
    },
    {
        name: 'Quasar',
    },
    {
        name: 'Vuetify',
    },
    {
        name: 'Bootstrap',
    },
    {
        name: 'Tailwind',
    },
    {
        name: 'Materialize',
    },
    {
        name: 'Bulma',
    },
    {
        name: 'Chakra',
    },
    {
        name: 'Ant Design',
    },
    {
        name: 'Element',
    },
    {
        name: 'PrimeVue',
    },
    {
        name: 'PrimeReact',
    },
    {
        name: 'PrimeNG',
    },
    {
        name: 'Material-UI',
    },
    {
        name: 'Quasar',
    },
]
</script>
<template>
    <div class="container">
        <div v-for="application in applications" :key="application.name" class="full-screen-item">
            <ApplicationItem :name="application.name" :description="application.description" :siteUrl="application.siteUrl" :logo="application.logo" :repositoryUrl="application.repositoryUrl" />
        </div>
    </div>
</template>
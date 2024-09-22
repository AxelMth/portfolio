<script lang="ts" setup>
import ApplicationItem from './ApplicationItem.vue';
const applications = [
    {
        name: 'Earthunt',
        description: 'An exciting game available on iOS.',
        logo: './assets/earthunt.png',
        siteUrl: 'https://marcel.games'
    },
    {
        name: 'Verdict',
        description: 'An app to create quizz fully configurable. Ask for a demo.',
        logo: './assets/twit-hair.png',
        siteUrl: 'https://verdict.axelmathi.eu'
    },
    {
        name: 'Twit\'hair',
        description: 'A Twitter bot that tweets about hair saloons with a pun.',
        logo: './assets/twit-hair.png',
        siteUrl: 'https://twitter.com/twitt_hair_'
    }
]
</script>
<template>
    <div class="container">
        <div v-for="application in applications" :key="application.name" class="full-screen-item">
            <ApplicationItem :name="application.name" :description="application.description" :siteUrl="application.siteUrl" :logo="application.logo" />
        </div>
    </div>
</template>
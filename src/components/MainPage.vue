<script setup lang="ts">
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
    My portfolio

    <div v-for="application in applications" :key="application.name">
        <ApplicationItem :name="application.name" :description="application.description" :logo="application.logo" :site-url="application.siteUrl" />
    </div>
</template>
<!-- <div class="container">
    <div class="project">
        <img src="assets/earthunt.png" alt="Earthunt Logo">
        <div>
            <h2>Earthunt</h2>
            <p>An exciting game available on iOS.</p>
        </div>
    </div>
    <div class="project">
        <img src="assets/word-climb.png" alt="WordClimb Logo">
        <div>
            <h2>WordClimb</h2>
            <p>A word game that is currently in progress.</p>
        </div>
    </div>
    <div class="project">
        <img src="assets/twit-hair.jpg" alt="Twit'Hait Bot Logo">
        <div>
            <h2>Twit'Hait Bot</h2>
            <p>A Twitter bot that tweets about hair saloons with a pun.</p>
            <a href="https://twitter.com/twitt_hair_" target="_blank">Twitter</a>.
        </div>
    </div>
    <div class="project">
        <img src="path/to/f1app-logo.png" alt="F1 App Logo">
        <div>
            <h2>F1 App</h2>
            <p>An app for Formula 1 enthusiasts, currently in progress.</p>
        </div>
    </div>
    <div class="project">
        <img src="path/to/verdict-logo.png" alt="Verdict Logo">
        <div>
            <h2>Verdict</h2>
            <p>A project available at <a href="https://verdict.axelmathi.eu" target="_blank">verdict.axelmathi.eu</a>. <a href="https://verdict.axelmathi.eu/demo" target="_blank">Ask for a demo</a>.</p>
        </div>
    </div>
</div>
<footer>
    <p>Contact me at: your-email@example.com</p>
</footer> -->
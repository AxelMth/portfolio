<script lang="ts" setup>
    import { defineProps } from 'vue';
    defineProps<{ name: string; description: string; siteUrl?: string; logo: string; repositoryUrl?: string }>();
</script>
<template>
    <article>
        <header>
            <img :alt="name" :src="logo" width="125" height="125" />
            <h2>{{ name }}</h2>
        </header>
        <p>{{ description }}</p>
        <footer>
            <a :href="siteUrl" target="_blank" rel="noopener noreferrer">Visit</a>
        </footer>
    </article>
</template>
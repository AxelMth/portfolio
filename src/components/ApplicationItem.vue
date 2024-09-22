<script lang="ts" setup>
    import { defineProps } from 'vue';
    defineProps<{ name: string; description: string; siteUrl?: string; logo: string; repositoryUrl?: string }>();
</script>
<template>
    <article>
            <img :alt="name" :src="logo" width="125" height="125" />
            <div class="info">
                <h2>{{ name }}</h2>
                <p>{{ description }}</p>
                <a :href="siteUrl" target="_blank" rel="noopener noreferrer">Visit</a>
            </div>
    </article>
</template>

<style scoped>
article {
    display: flex;
    align-items: center;
}

.info {
    margin-left: 1rem;
}

h2 {
    margin: 0;
}

p {
    margin: 0;
}
</style>
<script lang="ts" setup>
defineProps<{ title: string; description: string; startDate: string; endDate: string }>();
</script>
<template>
    <article>
        <header>
            <h2>{{ title }}</h2>
            <p>{{ startDate }} - {{ endDate }}</p>
        </header>
        <p>{{ description }}</p>
        <span>{{  new Date(startDate) }} - {{ new Date(endDate) }}</span>
    </article>
</template>
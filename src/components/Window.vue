<script lang="ts" setup>
defineProps<{ title: string; body: string; close: () => void }>();
</script>

<template>
    <header>
        {{  title }}
        <button @click="close">Close button</button>
    </header>
    <main>
        {{ body }}
    </main>

</template>

<style scoped>
    header {
        background-color: #333;
        color: white;
        padding: 1rem;
        text-align: center;
    }
    main {
        background-color: #f4f4f4;
        padding: 1rem;
    }
</style>
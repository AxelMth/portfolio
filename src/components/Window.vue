<script lang="ts" setup>
defineProps<{ title: string; body: string; close: () => void }>();
</script>

<template>
    <div class="container">
        <div class="header">
            {{  title }}
            <button @click="close">Close button</button>
        </div>
        <div class="body">
            {{  body }}
        </div>
    </div>
</template>

<style scoped>
    div.container {
        display: block;
        width: 300px;
        height: 200px;
        border: 1px solid white;
        border-radius: 5px;
        margin: 1rem;
    }
    div.header {
        background-color: #333;
        color: white;
        padding: 1rem;
        text-align: center;
    }
    div.body {
        padding: 1rem;
    }
    button {
        background-color: red;
        color: white;
        border: none;
        padding: 0.5rem;
        border-radius: 5px;
        cursor: pointer;
    }
</style>
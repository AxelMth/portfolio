<script lang="ts" setup>
defineProps<{ 
    companyName: string; 
    companyLogo: string; 
    jobTitle: string; 
    description: string; 
    siteUrl: string;   
    startDate: string; 
    endDate: string 
}>();
</script>
<template>
    <article>
            <img :alt="companyName" :src="companyLogo" width="125" height="125" />
            <div class="info">
                <h2>{{ jobTitle }}</h2>
                <p>{{ description }}</p>
                <p>{{ startDate }} - {{ endDate }}</p>
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
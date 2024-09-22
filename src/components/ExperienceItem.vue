<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{ 
    companyName: string; 
    companyLogo: string; 
    jobTitle: string; 
    description: string; 
    siteUrl: string;   
    startDate: string; 
    endDate: string | null
}>();

const formatDate = (dateStr: string | null) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    const formattedDate = date.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
};

const formattedStartDate = computed(() => formatDate(props.startDate));;
const formattedEndDate = computed(() => formatDate(props.endDate));
</script>
<template>
    <article>
            <img :alt="companyName" :src="companyLogo" width="150" height="150" />
            <div class="info">
                <h2>{{ jobTitle }}</h2>
                <p>{{ description }}</p>
                <p>{{ formattedStartDate }} - {{ formattedEndDate }}</p>
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
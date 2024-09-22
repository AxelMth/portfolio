<script lang="ts" setup>
import ExperienceItem from './ExperienceItem.vue';
const experiences = [
    {
        companyName: 'BTS SIO',
        companyLogo: './assets/earthunt.png',
        jobTitle: 'BTS Services Informatiques aux Organisations',
        description: 'BTS Services Informatiques aux Organisations',
        siteUrl: 'https://earthunt.com',
        startDate: '2016-09-01',
        endDate: '2018-06-30'
    }
]
</script>
<template>
    <div class="container">
        <div v-for="experience in experiences" :key="experience.companyName" class="full-screen-item">
            <ExperienceItem :companyName="experience.companyName" :companyLogo="experience.companyLogo" :jobTitle="experience.jobTitle" :description="experience.description" :siteUrl="experience.siteUrl" :startDate="experience.startDate" :endDate="experience.endDate" />
        </div>
    </div>
</template>
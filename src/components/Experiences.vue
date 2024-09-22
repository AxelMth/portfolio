<script lang="ts" setup>
import ExperienceItem from './ExperienceItem.vue';
const experiences = [
    {
        companyName: 'Hublo',
        companyLogo: './assets/hublo.jpeg',
        jobTitle: 'Développeur Fullstack',
        description: `
Écriture et mise en place d’une nouvelle architecture microservices. Découpage des tâches et plannification des sujets techniques pour une équipe de 3 personnes. Mise en place de nouveaux process agiles.
        `,
        siteUrl: 'https://hublo.com',
        startDate: '2019-02-01',
        endDate: '2020-12-01'
    },
    {
        companyName: 'Citron',
        companyLogo: './assets/citron.jpeg',
        jobTitle: 'Tech Lead',
        description: `
Mise en place de l'automatisation de l'éxecution des tests. Automatisation du process de déploiement. Création d'un système d'import simple pour le paramétrage client. Migration Mongoose. 
        `,
        siteUrl: 'https://citron.io',
        startDate: '2023-07-01',
        endDate: null
    },
    {
        companyName: 'Padoa',
        companyLogo: './assets/padoa.jpeg',
        jobTitle: 'Développeur Fullstack Sénior',
        description: `
Développement de nouvelles fonctionnalités au sein de l’outil padoa. Mise en place de nouveaux
process agiles.
        `,
        siteUrl: 'https://padoa.fr',
        startDate: '2021-01-01',
        endDate: '2023-07-01'
    }
]
</script>
<template>
    <div v-for="experience in experiences" :key="experience.companyName">
        <ExperienceItem :companyName="experience.companyName" :companyLogo="experience.companyLogo" :jobTitle="experience.jobTitle" :description="experience.description" :siteUrl="experience.siteUrl" :startDate="experience.startDate" :endDate="experience.endDate" />
        <div v-if="experience !== experiences[experiences.length - 1]" class="timeline"></div>
    </div>
</template>

<style scoped>
.timeline {
    border-left: 1px solid #ccc;
    height: 80px;
    margin-left: 40px;
}
</style>
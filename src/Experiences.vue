<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import ExperienceItem from './ExperienceItem.vue';

const experiences = ref([
    {
        companyName: 'Hublo',
        companyLogo: '/hublo.jpeg',
        jobTitle: 'Tech Lead',
        description: `
Écriture et mise en place d’une nouvelle architecture microservices. Découpage des tâches et plannification des sujets techniques pour une équipe de 3 personnes. Mise en place de nouveaux process agiles.
        `,
        siteUrl: 'https://hublo.com',
        startDate: '2019-02-01',
        endDate: '2020-12-01'
    },
    {
        companyName: 'Padoa',
        companyLogo: '/padoa.jpeg',
        jobTitle: 'Développeur Fullstack Sénior',
        description: `
Développement de nouvelles fonctionnalités au sein de l’outil padoa. Mise en place de nouveaux
process agiles.
        `,
        siteUrl: 'https://padoa.fr',
        startDate: '2021-01-01',
        endDate: '2023-07-01'
    },
    {
        companyName: 'Citron',
        companyLogo: '/citron.jpeg',
        jobTitle: 'Tech Lead',
        description: `
Mise en place de l'automatisation de l'éxecution des tests. Automatisation du process de déploiement. Création d'un système d'import simple pour le paramétrage client. Migration Mongoose. 
        `,
        siteUrl: 'https://citron.io',
        startDate: '2023-07-01',
        endDate: null
    }
]);

const visibleExperiences = ref<{
    companyName: string;
    companyLogo: string;
    jobTitle: string;
    description: string;
    siteUrl: string;
    startDate: string;
    endDate: string | null;
}[]>([]);

onMounted(() => {
    experiences.value.forEach((experience, index) => {
        setTimeout(() => {
            visibleExperiences.value.push(experience);
        }, index * 1000);
    });
});
</script>

<template>
    <div v-for="experience in experiences" :key="experience.companyName">
        <div v-if="experience !== experiences[0]" class="timeline" 
        :style="{ opacity: visibleExperiences.includes(experience) ? 1 : 0 }"></div>
        <ExperienceItem
        :companyName="experience.companyName"
        :companyLogo="experience.companyLogo"
        :jobTitle="experience.jobTitle"
        :description="experience.description"
        :siteUrl="experience.siteUrl"
        :startDate="experience.startDate"
        :endDate="experience.endDate"
        class="experience-item"
        :style="{ opacity: visibleExperiences.includes(experience) ? 1 : 0 }"/>
    </div>
</template>

<style scoped>
.timeline {
    border-left: 1px solid grey;
    height: 100px;
    margin-left: 40px;
    transition: opacity 0.5s ease-in-out;
}

.experience-item {
    transition: opacity 0.5s ease-in-out;
}
</style>
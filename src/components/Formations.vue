<script lang="ts" setup>
import FormationItem from './FormationItem.vue';
const formations = [
    {
        title: 'BTS SIO',
        description: 'BTS Services Informatiques aux Organisations',
        startDate: '2016-09-01',
        endDate: '2018-06-30'
    },
    {
        title: 'Licence Pro',
        description: 'Licence Professionnelle Développeur Web et Mobile',
        startDate: '2016-09-01',
        endDate: '2018-06-30'
    },
    {
        title: 'Master',
        description: 'Master Informatique',
        startDate: '2016-09-01',
        endDate: '2018-06-30'
    }
]
</script>
<template>
    <div class="container">
        <div v-for="formation in formations" :key="formation.title" class="full-screen-item">
            <FormationItem :title="formation.title" :description="formation.description" :startDate="formation.startDate" :endDate="formation.endDate" />
        </div>
    </div>
</template>
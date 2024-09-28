import type { Experience } from "@/interfaces/experience.interface";

export const HubloExperience: Experience = {
    companyName: 'Hublo',
    companyLogo: '/hublo.jpeg',
    jobTitle: 'Software Engineer',
    startDate: '2019-02-01',
    endDate: '2020-12-01',
    description: 'Écriture et mise en place d’une nouvelle architecture microservices. Découpage des tâches et plannification des sujets techniques pour une équipe de 3 personnes. Mise en place de nouveaux process agiles.',
    frameworks: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Docker', 'RabbitMQ'],
    softwares: ['GitHub', 'Notion', 'Slack', 'Heroku', 'Monday'],
};
export const PadoaExperience: Experience = {
    companyName: 'Padoa',
    companyLogo: '/padoa.jpeg',
    jobTitle: 'Senior Software Engineer',
    startDate: '2021-01-01',
    endDate: '2023-07-01',
    description: `Développement de nouvelles fonctionnalités au sein de l’outil padoa. Mise en place de nouveaux
    process agiles.`,
    frameworks: ['Angular', 'Node.js', 'Express.js', 'PostgreSQL', 'Docker', 'ArgoCD', 'ArgoWorkflows'],
    softwares: ['GitHub', 'Notion', 'Slack', 'Azure'],
};
export const CitronExperience: Experience = {
    companyName: 'Citron',
    companyLogo: '/citron.jpeg',
    jobTitle: 'Tech Lead',
    startDate: '2023-07-01',
    endDate: null,
    description: `Mise en place de l'automatisation de l'éxecution des tests. Automatisation du process de déploiement. Création d'un système d'import simple pour le paramétrage client. Migration Mongoose.`,
    frameworks: ['Angular', 'Node.js', 'Express.js', 'Nest.js', 'MongoDB', 'Docker', 'ArgoCD', 'ArgoWorkflows'],
    softwares: ['AWS', 'Github', 'Slack', 'Notion', 'Jira']
};
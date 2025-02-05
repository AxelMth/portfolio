import type { Experience } from "@/interfaces/experience.interface";

export const HubloExperience: Experience = {
    companyName: 'Hublo',
    companyLogo: '/homepage/hublo.jpeg',
    jobTitle: 'Software Engineer',
    startDate: '2019-02-01',
    endDate: '2020-12-01',
    description: 'Developed a custom front-end framework (AngularJS layer) and a service-oriented architecture (Domain Driven Design) on the back-end (NodeJS).',
    frameworks: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Docker', 'RabbitMQ'],
    softwares: ['GitHub', 'Notion', 'Slack', 'Heroku', 'Monday'],
};
export const PadoaExperience: Experience = {
    companyName: 'Padoa',
    companyLogo: '/homepage/padoa.jpeg',
    jobTitle: 'Senior Software Engineer',
    startDate: '2021-01-01',
    endDate: '2023-07-01',
    description: `Designed and implemented a new microservices architecture. Task breakdown and planning of technical topics for a team of 3. Developed new features within the Hublo tool. Introduced new agile processes. Improved deployments and continuous integration. Migrated to Typescript.`,
    frameworks: ['Angular', 'Node.js', 'Express.js', 'PostgreSQL', 'Docker', 'ArgoCD', 'ArgoWorkflows'],
    softwares: ['GitHub', 'Notion', 'Slack', 'Azure'],
};
export const CitronExperience: Experience = {
    companyName: 'Citron',
    companyLogo: '/homepage/citron.jpeg',
    jobTitle: 'Tech Lead',
    startDate: '2023-07-01',
    endDate: null,
    description: `Implemented automated test execution. Automated the deployment process. Created an import system for customer configuration. Migrated to Mongoose.`,
    frameworks: ['Angular', 'Node.js', 'Express.js', 'Nest.js', 'MongoDB', 'Docker', 'ArgoCD', 'ArgoWorkflows'],
    softwares: ['AWS', 'Github', 'Slack', 'Notion', 'Jira']
};
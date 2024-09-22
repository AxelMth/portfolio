<script lang="ts" setup>
import ApplicationItem from './ApplicationItem.vue';
const applications = [
    {
        name: 'Github',
        weight: 1
    },
    {
        name: 'Notion',
        weight: 1
    },
    {
        name: 'Slack',
        weight: 1,
    },{
        name: 'Jira',
    }, {
        name: 'Trello',


    }, {
        name: "Sentry"
    }, {
    name: "Rollbar"
    }, {
        name: "ArgoCD"
    }, {
        name: "Grafana"
    }, {
        name: "Prometheus"
    }, {
        name: "Kibana"
    }, {
        name: "ElasticSearch"
    }, {
        name: "Logstash"
    }, {
        name: "Kafka"
    }, {
        name: "RabbitMQ"
    }, {
        name: "Redis"
    }, {
        name: "PostgreSQL"
    }, {
        name: "MySQL"
    }, {
        name: "MongoDB"
    }, {
        name: "Docker"
    }, {
        name: "Kubernetes"
    }, {
        name: "Helm"
    }, {
        name: "Terraform"
    }, {
        name: "Ansible"
    }, {
        name: "Jenkins"
    }, {
        name: "Gitlab"
    }, {
        name: "Github Actions"
    }, {
        name: "CircleCI"
    }, {
        name: "TravisCI"
    }, {
        name: "AWS"
    }, {
        name: "GCP"
    }, {
        name: "Azure"
    }, {
        name: "DigitalOcean"
    }, {
        name: "Heroku"
    }, {
        name: "Netlify"
    }, {
        name: "Vercel"
    }, {
        name: "Nginx"
    }, {
        name: "Apache"
    }, {
        name: "HAProxy"
    }, {
        name: "Caddy"
    }, {
        name: "Cloudflare"
    }, {
        name: "Fastly"
    }, {
        name: "Akamai"
    }, {
        name: "Varnish"
    }, {
        name: "S3"
    }, {
        name: "CloudFront"
    }, {
        name: "CloudWatch"
    }, {
        name: "Route53"
    }, {
        name: "Lambda"
    }, {
        name: "API Gateway"
    }, {
        name: "ECS"
    }, {
        name: "EKS"
    }, {
        name: "RDS"
    }, {
        name: "DynamoDB"
    }, {
        name: "SNS"
    }, {
        name: "SQS"
    }, {
        name: "SES"
    }, {
        name: "Elasticache"
    }, {
        name: "Elastic Beanstalk"
    }, {
        name: "CloudFormation"
    }, {
        name: "IAM"
    }, {
        name: "Cognito"
    }, {
        name: "KMS"
    }, {
        name: "Secrets Manager"
    }, {
        name: "Systems Manager"
    }, {
        name: "CloudTrail"
    }, {
        name: "Config"
    }, {
        name: "GuardDuty"
    }, {
        name: "Inspector"
    }, {
        name: "Macie"
    }, {
        name: "WAF"
    }, {
        name: "Shield"
    }, {
        name: "Artifact"
    }, {
        name: "Certificate Manager"
    }, {
        name: "CloudHSM"
    }, {
        name: "Key Management Service"
    }, {
        name: "Directory Service"
    }, {
        name: "WorkSpaces"
    }, {
        name: "AppStream"
    }, {
        name: "WorkDocs"
    }, {
        name: "WorkMail"
    }, {
        name: "Chime"
    }, {
        name: "Connect"
    }, {
        name: "Alexa for Business"
    }, {
        name: "Kinesis"
    }, {
        name: "Data Pipeline"
    }, {
        name: "Glue"
    }, {
        name: "EMR"
    }, {
        name: "Athena"
    }, {
        name: "QuickSight"
    }, {
        name: "Redshift"
    }, {
        name: "RDS"
    }, {
        name: "DMS"
    }, {
        name: "Elasticsearch Service"
    }, {
        name: "Neptune"
    }, {
        name: "QLDB"
    }, {
        name: "DocumentDB"
    }, {
        name: "Managed Blockchain"
    }, {
        name: "ElastiCache"
    }, {
        name: "Fly.io"
    }, {
        name: "Neon"
    }

]
</script>
<template>
    <div class="container">
        <div v-for="application in applications" :key="application.name" class="full-screen-item">
            <ApplicationItem :name="application.name" :description="application.description" :siteUrl="application.siteUrl" :logo="application.logo" :repositoryUrl="application.repositoryUrl" />
        </div>
    </div>
</template>
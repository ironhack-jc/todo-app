<template>
    <div>
        Estoy en la home page:
        <ul>
            <li v-for="project in projectsStore.projects">
                {{ project.name }}
            </li>
        </ul>

        <ListOfProjects />
    </div>
</template>

<script>
import { mapStores } from 'pinia'
import projectsStore from '../stores/projects'

import ListOfProjects from '../components/ListOfProjects.vue';
export default {
    components: { ListOfProjects },
    computed: {
        ...mapStores(projectsStore)
    },
}
</script>

<style scoped>
div {
    background-color: green;
}
</style>
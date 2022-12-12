<template>
    <div id="some">
        List of projects
        <button @click="createProject">Add random project</button>
    </div>
</template>
<script>
import { mapActions, mapState, mapStores } from 'pinia'
import projectsStore from '../stores/projects'

export default {
    computed: {
        ...mapStores(projectsStore),
        // ...mapState(projectsStore, ['projects'])
    },
    methods: {
        // ...mapActions(projectsStore, ['fetchAPI']),
        createProject() {
            this.projectsStore.addProject({
                uuid: Math.random(),
                name: "new project"
            })
        }
    }
}
</script>
<style scoped>
#some {
    background-color: red;
}
</style>
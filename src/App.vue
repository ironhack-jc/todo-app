<template>
  <div>
    <RouterLink to="/">Go To Home</RouterLink>
    <RouterLink to="/projects">Go To Projects Page</RouterLink>
  </div>

  <RouterView />

  <div>
    Estoy en APP.vue:
    <ul>
      <li v-for="project in projectsStore.projects" :key="project.uuid">
        {{ project.name }}
      </li>
    </ul>
  </div>

</template>


<script>

import { mapStores } from 'pinia'
import projectsStore from './stores/projects'

export default {
  computed: {
    ...mapStores(projectsStore)
  },
  mounted() {
    this.projectsStore.fetchAPI()
  }
}

</script>
<style scoped>
div {
  background-color: gray;
}
</style>
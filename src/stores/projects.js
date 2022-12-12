import { defineStore } from "pinia";

const API_URL =
  "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";

export default defineStore("projects", {
  state() {
    return {
      projects: [],
    };
  },
  getters: {},
  actions: {
    async fetchAPI() {
      const response = await fetch(API_URL);
      this.projects = await response.json();
    },
    addProject(project) {
      if (project.uuid) {
      }
      this.projects.push(project);

      // comunicación a API
    },
  },
});

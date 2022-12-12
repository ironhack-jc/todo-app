import { defineStore } from "pinia";

const API_URL = "google.es/login";

export default defineStore("user", {
  state() {
    return {
      user: null,
    };
  },
  getters: {
    isUserAdmin() {
      return this.user?.admin; // user puede ser null
    },
  },
  actions: {
    async login() {
      await fetch(API_URL);
      // ...
    },
    signUp() {},
  },
});

import { defineStore } from "pinia";
import type { Tornado } from "../types";
import { fetchDefaultQuery } from "../services/tornadoService";

export const useTornadoStore = defineStore("tornadoStore", {
  state: () => ({
    tornadoes: [] as Tornado[],
  }),

  actions: {
    async fetchDefault() {
      try {
        const data = await fetchDefaultQuery();
        this.tornadoes = data;
      } catch (error) {
        console.error("Error fetching tornadoes:", error);
        throw error;
      }
    },
  },
});

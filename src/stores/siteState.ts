import { defineStore } from "pinia";

export const useSiteStore = defineStore("siteSettings", {
  state: () => ({
    darkMode: false,
    locale: "en",
  }),
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },
    setLocale(locale: string) {
      this.locale = locale;
    },
  },
});

<script setup lang="ts">
import { useSiteStore } from "./stores/siteState";
import Navbar from "./components/Navbar.vue";

const settings = useSiteStore();
</script>

<template>
  <div
    :class="settings.darkMode ? 'dark' : ''"
    class="flex min-h-screen min-w-screen dark:bg-gray-950 dark:text-gray-100 font-inter transition-colors duration-200"
  >
    <Navbar />
    <router-view class="h-full w-full"></router-view>
  </div>
</template>

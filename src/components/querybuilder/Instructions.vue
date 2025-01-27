<script setup lang="ts"></script>

<template>
  <div class="flex flex-col h-full w-full xl:w-1/2 mb-3 sm:mb-0">
    <h1 class="text-2xl font-bold text-black dark:text-gray-100">
      Query Builder
    </h1>
    <p class="py-1 mb-3 hidden sm:block">
      Welcome to TornadoTrax v2. Build your tornado data query by specifying a
      date range (required) along with optional state and magnitude filters.
      Select multiple states and/or multiple EF ratings to refine your search.
      The date range allows you to explore historical tornado data from 1950 to
      present. Click "Submit query" to generate your results or "Clear form" to
      reset all fields.
    </p>
  </div>
</template>

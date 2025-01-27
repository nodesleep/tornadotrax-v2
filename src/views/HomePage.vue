<script setup lang="ts">
import TornadoTable from "../components/HomePage/TornadoTable.vue";
import QueryBuilder from "../components/QueryBuilder/QueryBuilder.vue";
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="trax-container">
      <div class="flex flex-col space-y-5">
        <QueryBuilder />
        <TornadoTable />
      </div>
    </div>
  </div>
</template>

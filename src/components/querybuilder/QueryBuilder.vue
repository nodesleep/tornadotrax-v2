<script setup lang="ts">
import { ref } from "vue";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/vue/24/outline";
import FullWidthCard from "../ui/FullWidthCard.vue";
import Instructions from "./Instructions.vue";
import QueryBuilderForm from "./QueryBuilderForm.vue";

const queryBuilderVisible = ref(true);

const toggleQueryBuilder = () => {
  queryBuilderVisible.value = !queryBuilderVisible.value;
};
</script>

<template>
  <FullWidthCard>
    <div
      :class="queryBuilderVisible ? 'top-6' : 'top-2'"
      class="absolute left-4"
    >
      <div
        class="flex items-center cursor-pointer"
        @click="toggleQueryBuilder"
        v-if="queryBuilderVisible"
      >
        <ChevronDownIcon class="h-4 w-4" />
        <span class="ml-2 text-xs">Hide</span>
      </div>
      <div
        class="flex items-center cursor-pointer"
        @click="toggleQueryBuilder"
        v-else
      >
        <ChevronUpIcon class="h-4 w-4" />
        <h1 class="text-base font-bold ml-2 text-black dark:text-gray-100">
          Query Builder
        </h1>
      </div>
    </div>
    <div
      class="flex flex-col xl:flex-row w-full mt-12 lg:space-x-5 text-sm"
      v-if="queryBuilderVisible"
    >
      <Instructions />
      <QueryBuilderForm />
    </div>
  </FullWidthCard>
</template>

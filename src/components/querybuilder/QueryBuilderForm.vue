<script setup lang="ts">
import { ref } from "vue";
import { states } from "../../data";
import Button from "../ui/Button.vue";

const selectedStates = ref<string[]>([]);
const startDate = ref<string>("");
const endDate = ref<string>("");
const magRating = ref([]);

const clearForm = (): void => {
  selectedStates.value = [];
  startDate.value = "";
  endDate.value = "";
  magRating.value = [];
};
</script>
<template>
  <div class="flex flex-col h-full xl:ml-auto">
    <form
      class="flex space-x-5 w-full justify-between h-full text-xs sm:text-sm"
    >
      <div class="flex flex-col h-full justify-between">
        <div class="flex flex-col">
          <label
            class="font-semibold block mb-2 text-xs lg:text-sm text-gray-900 dark:text-gray-100"
            >Start Date</label
          >
          <input
            v-model="startDate"
            type="date"
            min="1950-01-01"
            max="2022-12-31"
            required
            class="bg-white dark:bg-gray-700 border dark:border-gray-600 text-black dark:text-gray-300 rounded-md px-2 py-1 w-full"
          />
        </div>
        <div class="flex flex-col">
          <label
            class="font-semibold block mb-2 text-xs lg:text-sm text-gray-900 dark:text-gray-100"
            >End Date</label
          >
          <input
            v-model="endDate"
            type="date"
            min="1950-01-01"
            max="2022-12-31"
            required
            class="bg-white dark:bg-gray-700 border dark:border-gray-600 text-black dark:text-gray-300 rounded-md px-2 py-1 w-full"
          />
        </div>
      </div>
      <div class="flex flex-col h-full">
        <label
          for="countries"
          class="font-semibold block mb-2 text-xs lg:text-sm text-gray-900 dark:text-gray-100"
          >Select state(s)</label
        >
        <select
          v-model="selectedStates"
          id="countries"
          multiple
          class="bg-white dark:bg-gray-700 border dark:border-gray-600 text-black dark:text-gray-300 rounded-md px-2 py-1 w-full h-full"
        >
          <option
            v-for="stateCode in Object.keys(states)"
            :key="stateCode"
            :value="stateCode"
          >
            {{ stateCode }}
          </option>
        </select>
      </div>
      <div class="flex flex-col h-full">
        <label
          for="mag"
          class="font-semibold block mb-2 text-xs lg:text-sm text-gray-900 dark:text-gray-100"
          >Magnitude (EF Rating)</label
        >
        <select
          v-model="magRating"
          id="mag"
          multiple
          class="bg-white dark:bg-gray-700 border dark:border-gray-600 text-black dark:text-gray-300 rounded-md px-2 py-1 w-full h-full"
        >
          <option value="" selected>None</option>
          <option value="0">EF0</option>
          <option value="1">EF1</option>
          <option value="2">EF2</option>
          <option value="3">EF3</option>
          <option value="4">EF4</option>
          <option value="5">EF5</option>
        </select>
      </div>
      <div class="flex flex-col space-y-2 h-full">
        <Button
          type="button"
          text="Clear form"
          @click="clearForm"
          bgColor="bg-white dark:bg-gray-200"
          text-color="text-black"
          extras="border border-black mt-auto"
        />
        <Button
          type="submit"
          text="Submit query"
          bgColor="bg-sky-100 dark:bg-sky-900"
          text-color="text-sky-700 dark:text-sky-100"
          extras="border border-sky-600 dark:border-sky-700"
        />
      </div>
    </form>
  </div>
</template>

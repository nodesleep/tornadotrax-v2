<script setup lang="ts">
import { onMounted } from "vue";
import { useTornadoStore } from "../../stores/tornadoStore";

const tornadoStore = useTornadoStore();

onMounted(() => {
  tornadoStore.fetchDefault();
});
</script>
<template>
  <div class="font-medium text-xs">
    <div class="relative">
      <div
        class="overflow-x-auto overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 max-h-96 border border-gray-200 dark:border-gray-800 rounded-md"
      >
        <div class="inline-block min-w-full align-middle">
          <div
            class="overflow-hidden border border-gray-200 dark:border-gray-800 rounded-md"
          >
            <table
              class="min-w-full divide-y divide-gray-300 dark:divide-gray-700"
            >
              <thead class="w-full">
                <tr class="bg-gray-200 dark:bg-gray-800 font-bold">
                  <th
                    scope="col"
                    class="sticky left-0 z-10 bg-gray-200 dark:bg-gray-700 px-4 py-2"
                  >
                    #
                  </th>
                  <th scope="col" class="px-4 py-2">Year</th>
                  <th scope="col" class="px-4 py-2">Month</th>
                  <th scope="col" class="px-4 py-2">Day</th>
                  <th scope="col" class="px-4 py-2">Date</th>
                  <th scope="col" class="px-4 py-2">Time</th>
                  <th scope="col" class="px-4 py-2">State</th>
                  <th scope="col" class="px-4 py-2">Rating</th>
                  <th scope="col" class="px-4 py-2">Inj</th>
                  <th scope="col" class="px-4 py-2">Fat</th>
                  <th scope="col" class="px-4 py-2">Loss</th>
                  <th scope="col" class="px-4 py-2">CLoss</th>
                  <th scope="col" class="px-4 py-2">Start Lat</th>
                  <th scope="col" class="px-4 py-2">Start Lon</th>
                  <th scope="col" class="px-4 py-2">End Lat</th>
                  <th scope="col" class="px-4 py-2">End Lon</th>
                  <th scope="col" class="px-4 py-2">Length</th>
                  <th scope="col" class="px-4 py-2">Width</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-300 dark:divide-gray-800">
                <tr
                  v-for="(tornado, index) in tornadoStore.tornadoes"
                  :key="index"
                  class="even:bg-gray-50 even:dark:bg-gray-900 hover:bg-gray-200 hover:dark:bg-sky-600"
                >
                  <td
                    class="sticky left-0 z-10 bg-inherit whitespace-nowrap px-4 py-2 border-r border-gray-300 dark:border-gray-700"
                  >
                    {{ tornado.om }}
                  </td>
                  <td class="whitespace-nowrap px-4 py-2">
                    {{ tornado.yr }}
                  </td>
                  <td class="whitespace-nowrap px-4 py-2">
                    {{ tornado.mo }}
                  </td>
                  <td class="whitespace-nowrap px-4 py-2">
                    {{ tornado.dy }}
                  </td>
                  <td class="whitespace-nowrap px-4 py-2">
                    {{ tornado.date }}
                  </td>
                  <td class="whitespace-nowrap px-4 py-2">
                    {{ tornado.time }}
                  </td>
                  <td class="whitespace-nowrap px-4 py-2">
                    {{ tornado.st }}
                  </td>
                  <td class="whitespace-nowrap px-4 py-2">
                    EF{{ tornado.mag }}
                  </td>
                  <td class="whitespace-nowrap px-4 py-2">
                    {{ tornado.inj }}
                  </td>
                  <td class="whitespace-nowrap px-4 py-2">
                    {{ tornado.fat }}
                  </td>
                  <td class="whitespace-nowrap px-4 py-2">
                    {{ tornado.loss }}
                  </td>
                  <td class="whitespace-nowrap px-4 py-2">
                    {{ tornado.closs }}
                  </td>
                  <td class="whitespace-nowrap px-4 py-2">
                    {{ tornado.slat }}
                  </td>
                  <td class="whitespace-nowrap px-4 py-2">
                    {{ tornado.slon }}
                  </td>
                  <td class="whitespace-nowrap px-4 py-2">
                    {{ tornado.elat }}
                  </td>
                  <td class="whitespace-nowrap px-4 py-2">
                    {{ tornado.elon }}
                  </td>
                  <td class="whitespace-nowrap px-4 py-2">
                    {{ tornado.len }}
                  </td>
                  <td class="whitespace-nowrap px-4 py-2">
                    {{ tornado.wid }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

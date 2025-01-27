<script setup lang="ts">
import { onMounted } from "vue";
import { useTornadoStore } from "../stores/tornadoStore";
import QueryBuilder from "../components/querybuilder/QueryBuilder.vue";

const tornadoStore = useTornadoStore();

onMounted(() => {
  tornadoStore.fetchDefault();
});
</script>
<template>
  <div class="flex flex-col w-full">
    <div class="trax-container">
      <div class="flex flex-col space-y-5">
        <QueryBuilder />
        <div class="font-display font-medium text-xs">
          <table
            class="min-w-full table-auto border-collapse border border-gray-300"
          >
            <thead>
              <tr class="bg-gray-200 font-bold">
                <th class="px-4 py-2 border border-gray-300">#</th>
                <th class="px-4 py-2 border border-gray-300">Year</th>
                <th class="px-4 py-2 border border-gray-300">Month</th>
                <th class="px-4 py-2 border border-gray-300">Day</th>
                <th class="px-4 py-2 border border-gray-300">Date</th>
                <th class="px-4 py-2 border border-gray-300">Time</th>
                <th class="px-4 py-2 border border-gray-300">State</th>
                <th class="px-4 py-2 border border-gray-300">Rating</th>
                <th class="px-4 py-2 border border-gray-300">Inj</th>
                <th class="px-4 py-2 border border-gray-300">Fat</th>
                <th class="px-4 py-2 border border-gray-300">Loss</th>
                <th class="px-4 py-2 border border-gray-300">Close Loss</th>
                <th class="px-4 py-2 border border-gray-300">Start Latitude</th>
                <th class="px-4 py-2 border border-gray-300">
                  Start Longitude
                </th>
                <th class="px-4 py-2 border border-gray-300">End Latitude</th>
                <th class="px-4 py-2 border border-gray-300">End Longitude</th>
                <th class="px-4 py-2 border border-gray-300">Length</th>
                <th class="px-4 py-2 border border-gray-300">Width</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(tornado, index) in tornadoStore.tornadoes"
                :key="index"
                class="even:bg-gray-50"
              >
                <td class="px-4 py-2 border border-gray-300">
                  {{ tornado.om }}
                </td>
                <td class="px-4 py-2 border border-gray-300">
                  {{ tornado.yr }}
                </td>
                <td class="px-4 py-2 border border-gray-300">
                  {{ tornado.mo }}
                </td>
                <td class="px-4 py-2 border border-gray-300">
                  {{ tornado.dy }}
                </td>
                <td class="px-4 py-2 border border-gray-300">
                  {{ tornado.date }}
                </td>
                <td class="px-4 py-2 border border-gray-300">
                  {{ tornado.time }}
                </td>
                <td class="px-4 py-2 border border-gray-300">
                  {{ tornado.st }}
                </td>
                <td class="px-4 py-2 border border-gray-300">
                  EF{{ tornado.mag }}
                </td>
                <td class="px-4 py-2 border border-gray-300">
                  {{ tornado.inj }}
                </td>
                <td class="px-4 py-2 border border-gray-300">
                  {{ tornado.fat }}
                </td>
                <td class="px-4 py-2 border border-gray-300">
                  {{ tornado.loss }}
                </td>
                <td class="px-4 py-2 border border-gray-300">
                  {{ tornado.closs }}
                </td>
                <td class="px-4 py-2 border border-gray-300">
                  {{ tornado.slat }}
                </td>
                <td class="px-4 py-2 border border-gray-300">
                  {{ tornado.slon }}
                </td>
                <td class="px-4 py-2 border border-gray-300">
                  {{ tornado.elat }}
                </td>
                <td class="px-4 py-2 border border-gray-300">
                  {{ tornado.elon }}
                </td>
                <td class="px-4 py-2 border border-gray-300">
                  {{ tornado.len }}
                </td>
                <td class="px-4 py-2 border border-gray-300">
                  {{ tornado.wid }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

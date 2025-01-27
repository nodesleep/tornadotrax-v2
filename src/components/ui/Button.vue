<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: "bg-black",
    required: true,
  },
  textColor: {
    type: String,
    default: "text-white",
    required: true,
  },
  extras: {
    type: String,
    default: "",
    required: false,
  },
});
</script>
<template>
  <button
    :class="[props.bgColor, props.textColor, extras]"
    class="font-semibold px-3 py-2 rounded-md cursor-pointer"
  >
    {{ props.text }}
  </button>
</template>

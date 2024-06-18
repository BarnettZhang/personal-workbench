<template>
  <FunctionEntryButton
    v-for="func in functionMap"
    :key="func.id"
    :function="func"
  />
</template>

<script setup>
import { functionMap } from "@/constant/functionMap.js";
import FunctionEntryButton from "./components/function-entry-button.vue";
</script>

<style></style>

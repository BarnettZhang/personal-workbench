<template>
  <div class="function-entry-button-wrapper">
    <FunctionEntryButton
      v-for="func in functionMap"
      :key="func.id"
      :function="func"
      @select-function="selectFunction(func)"
      @go-to-function="goToFunction(func)"
    />
  </div>
</template>

<script setup>
import { functionMap } from "@/constant/functionMap.js";
import { useRouter } from "vue-router";
import FunctionEntryButton from "./components/function-entry-button.vue";

const router = useRouter();

function goToFunction(func) {
  router.push({ name: func.routeName });
}

function selectFunction(func) {
  func.quickAccess();
}
</script>

<style lang="scss" scoped>
.function-entry-button-wrapper {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>

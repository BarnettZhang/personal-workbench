<template>
  <div
    class="function-entry-wrapper"
    @click="$emit('select-function', props.functionKey)"
  ></div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  iconName: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  functionKey: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.function-entry-wrapp {
  min-width: 200px;
  min-height: 400px;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f7;
  }
}
</style>

<template>
  <svg :class="`svg-icon ${props.iconName}`" aria-hidden="true" v-bind="$attrs">
    <use :xlink:href="svgIconName" />
  </svg>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  iconName: {
    type: String,
    required: true,
  },
});

const svgIconName = computed(() => {
  return `#icon-${props.iconName}`;
});
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
}
</style>

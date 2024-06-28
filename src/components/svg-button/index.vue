<template>
  <div
    class="svg-button-wrapper"
    :style="wrapperStyle"
    @mouseenter="hover"
    @mouseleave="cancelHover"
  >
    <svg-icon :icon-name="props.iconName" :style="iconStyle" />
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  iconName: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "#8c8c8c",
  },
  hoverColor: {
    type: String,
    default: "#83D6E4",
  },
  bgHoverColor: {
    type: String,
    default: "#f7f7f7",
  },
  size: {
    type: Number,
    default: 16,
  },
});

const wrapperStyle = ref({
  backgroundColor: "transparent",
  width: `${props.size * 1.5}px`,
  height: `${props.size * 1.5}px`,
});
const iconStyle = ref({ color: props.color, fontSize: `${props.size}px` });

function hover() {
  wrapperStyle.value.backgroundColor = props.bgHoverColor;
  iconStyle.value.color = props.hoverColor;
}

function cancelHover() {
  wrapperStyle.value.backgroundColor = "transparent";
  iconStyle.value.color = props.color;
}
</script>

<style lang="scss" scoped>
.svg-button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>

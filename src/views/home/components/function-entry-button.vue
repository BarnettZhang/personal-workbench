<template>
  <div
    class="function-entry-wrapper"
    @click="$emit('select-function', props.function.functionKey)"
    @mouseenter="mouseEnterButton()"
    @mouseleave="mouseLeaveButton()"
  >
    <svg-icon
      class="function-entry-button-icon"
      :style="{ color: iconStyle.iconColor }"
      :icon-name="props.function.iconName"
    />
  </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";

const props = defineProps({
  function: {
    type: Object,
    required: true,
  },
});

const iconStyle = reactive({ iconColor: props.function.iconColor });

function mouseEnterButton() {
  iconStyle.iconColor = "#83D6E4";
}

function mouseLeaveButton() {
  iconStyle.iconColor = props.function.iconColor;
}
</script>

<style lang="scss" scoped>
.function-entry-wrapper {
  width: 50px;
  height: 70px;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;

  .function-entry-button-icon {
    height: 40px;
    width: 40px;
    background-color: transparent;
    transition: all 0.3s;
  }

  &:hover {
    background-color: #f7f7f7;
  }
}
</style>

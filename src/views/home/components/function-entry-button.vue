<template>
  <div
    class="function-entry-wrapper"
    @mouseenter="mouseEnterButton()"
    @mouseleave="mouseLeaveButton()"
  >
    <div
      class="quick-function-wrapper"
      @click="$emit('select-function', props.function.functionKey)"
    >
      <svg-icon
        class="function-entry-button-icon"
        :style="{ color: iconStyle.iconColor }"
        :icon-name="props.function.iconName"
      />
      <div class="function-name">{{ props.function.functionName }}</div>
    </div>
    <div
      class="enter-function-wrapper"
      @click="$emit('go-to-function', props.function.functionKey)"
    >
      <svg-icon class="enter-function-page-button" icon-name="right-btn" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

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
  width: 70px;
  height: 100px;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  background-color: rgba(0, 0, 0, 0.02);

  &:hover {
    background-color: #e6e6e6;
  }

  .quick-function-wrapper {
    display: inherit;
    justify-content: inherit;
    flex-direction: inherit;
    align-items: inherit;
    width: inherit;

    .function-entry-button-icon {
      height: 40px;
      width: 40px;
      background-color: transparent;
      transition: all 0.3s;
    }

    .function-name {
      font-size: 16px;
    }
  }

  .enter-function-wrapper {
    display: inherit;
    justify-content: inherit;
    flex-direction: row;
    align-items: inherit;
    width: inherit;
    padding-top: 5px;

    &:hover .enter-function-page-button {
      color: #83d6e4;
    }
    .enter-function-page-button {
      padding: auto;
      font-size: 20px;
      color: #d5d5d5;
    }
  }
}
</style>

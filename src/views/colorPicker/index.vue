<template>
  <div class="color-picker-content-wrapper">
    <div class="title-wrapper">
      <svg-button icon-name="return" @click="backToHome" />
      <div>拾色器：</div>
      <el-button @click="getColorPickerValue">Get Color</el-button>
    </div>
    <div
      v-if="hex"
      class="color-example-block"
      :style="{ backgroundColor: hex }"
    ></div>
    <div>HEX: {{ hex }}</div>
    <div>RGB: {{ rgb }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { nativePick } from "@/utils/colorPicker.js";

const router = useRouter();

const hex = ref("");
const rgb = ref("");

function backToHome() {
  router.push({ name: "home" });
}

async function getColorPickerValue(e) {
  const colorResult = await nativePick(e);
  hex.value = colorResult[0].value;
  rgb.value = colorResult[1].value;
}
</script>

<style lang="scss" scoped>
.color-picker-content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;

  .title-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  }

  .color-example-block {
    width: 70px;
    height: 30px;
    border: 1px solid #262626;
    border-radius: 4px;
  }
}
</style>

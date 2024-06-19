<template>
  <el-button @click="backToHome">Back</el-button>
  <el-button v-if="hasEyeDrop" @click="nativePick">Get Color</el-button>
  <input v-else type="color" @input="nativePick" />
  <div
    v-if="hex"
    class="color-example-block"
    :style="{ backgroundColor: hex }"
  ></div>
  <div>HEX: {{ hex }}</div>
  <div>RGB: {{ rgb }}</div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { hexToRgb } from "@/utils/color.js";
import useClipboard from "vue-clipboard3";
const { toClipboard } = useClipboard();

const router = useRouter();

const hasEyeDrop = ref("EyeDropper" in window);

const hex = ref("");

const rgb = ref("");

function backToHome() {
  router.push({ name: "home" });
}

async function nativePick(e) {
  const val = e ? e.target.value : null;
  if (!val) {
    const eyeDropper = new window.EyeDropper(); // 初始化一个EyeDropper对象
    try {
      const colorResult = await eyeDropper.open(); // 开始拾取颜色
      hex.value = colorResult.sRGBHex;
      rgb.value = hexToRgb(colorResult.sRGBHex);
      new window.Notification("取到颜色噜！", {
        body: `HEX: ${hex.value}, RGB: ${rgb.value}`,
      }).onclick = () => {
        toClipboard(hex.value);
      };
    } catch (e) {
      console.log(e);
    }
  }
}
</script>

<style lang="scss" scoped>
.color-example-block {
  width: 50px;
  height: 20px;
  border: 1px solid #262626;
  border-radius: 4px;
}
</style>

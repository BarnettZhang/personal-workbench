<template>
  <el-button @click="backToHome">Back</el-button>
  <el-button v-if="state.hasEyeDrop" @click="nativePick">Get Color</el-button>
  <input v-else type="color" @input="nativePick" />
  <div
    v-if="result.hex"
    class="color-example-block"
    :style="{ backgroundColor: result.hex }"
  ></div>
  <div>HEX: {{ result.hex }}</div>
  <div>RGB: {{ result.rgb }}</div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { hexToRgb } from "@/utils/color.js";
import useClipboard from "vue-clipboard3";
const { toClipboard } = useClipboard();

const router = useRouter();

const state = reactive({
  hasEyeDrop: "EyeDropper" in window,
});

const result = reactive({
  hex: "",
  rgb: "",
});

function backToHome() {
  router.push({ name: "home" });
}

async function nativePick(e) {
  const val = e ? e.target.value : null;
  if (!val) {
    const eyeDropper = new window.EyeDropper(); // 初始化一个EyeDropper对象
    try {
      const colorResult = await eyeDropper.open(); // 开始拾取颜色
      result.hex = colorResult.sRGBHex;
      result.rgb = hexToRgb(colorResult.sRGBHex);
      new window.Notification("取到颜色噜！", {
        body: `HEX: ${result.hex}, RGB: ${result.rgb}`,
      }).onclick = () => {
        toClipboard(result.hex);
      };
    } catch (e) {
      console.log(e);
      console.log("用户取消了取色");
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

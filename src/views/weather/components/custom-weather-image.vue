<template>
  <el-image
    v-if="props.currentWeatherInfo.text?.includes('晴')"
    style="width: 60px; height: 60px"
    src="src/assets/images/sunny.png"
    fit="fill"
  />
  <el-image
    v-else-if="props.currentWeatherInfo.text?.includes('雷')"
    style="width: 60px; height: 60px"
    src="src/assets/images/thunder.png"
    fit="fill"
  />
  <el-image
    v-else-if="props.currentWeatherInfo.text?.includes('沙')"
    style="width: 60px; height: 60px"
    src="src/assets/images/wind.png"
    fit="fill"
  />
  <el-image
    v-else-if="props.currentWeatherInfo.text?.includes('雨')"
    style="width: 60px; height: 60px"
    src="src/assets/images/rain.png"
    fit="fill"
  />
  <el-image
    v-else-if="props.currentWeatherInfo.text?.includes('雪')"
    style="width: 60px; height: 60px"
    src="src/assets/images/snow.png"
    fit="fill"
  />
  <svg-icon
    v-else
    class="weather-icon"
    :icon-name="`${props.currentWeatherInfo.icon}-fill`"
    :style="{ color: weatherColorMap(props.currentWeatherInfo) }"
  />
</template>

<script setup>
import { defineProps, onMounted } from "vue";
import { weatherColorMap } from "@/constant/weatherColorMap.js";

const props = defineProps({
  currentWeatherInfo: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped>
.weather-icon {
  font-size: 60px;
}
</style>

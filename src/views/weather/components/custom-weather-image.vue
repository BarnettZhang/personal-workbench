<template>
  <el-image
    v-if="weatherImageMapFunc(currentWeatherInfo.text)"
    style="width: 60px; height: 60px"
    :src="weatherImageMapFunc(currentWeatherInfo.text)"
    fit="fill"
  />
  <svg-icon
    v-else
    class="weather-icon"
    :icon-name="`${currentWeatherInfo.icon}-fill`"
    :style="{ color: weatherColorMapFunc(currentWeatherInfo) }"
  />
</template>

<script setup>
import {
  weatherColorMapFunc,
  weatherImageMapFunc,
} from "@/constant/weather.js";

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

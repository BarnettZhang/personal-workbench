<template>
  <el-image
    v-if="weatherImageMapFunc(props.currentWeatherInfo.text)"
    style="width: 60px; height: 60px"
    :src="weatherImageMapFunc(props.currentWeatherInfo.text)"
    fit="fill"
  />
  <svg-icon
    v-else
    class="weather-icon"
    :icon-name="`${props.currentWeatherInfo.icon}-fill`"
    :style="{ color: weatherColorMapFunc(props.currentWeatherInfo) }"
  />
</template>

<script setup>
import { defineProps } from "vue";
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

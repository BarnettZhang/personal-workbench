<template>
  <el-image
    v-if="weatherImageMap(props.currentWeatherInfo.text)"
    style="width: 60px; height: 60px"
    :src="weatherImageMap(props.currentWeatherInfo.text)"
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
import { defineProps } from "vue";
import { weatherColorMap } from "@/constant/weatherColorMap.js";
import { weatherImageMap } from "@/constant/weatherImageMap.js";

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

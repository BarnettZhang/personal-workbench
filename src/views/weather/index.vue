<template>
  <div class="weather-content-wrapper">
    <div class="title-wrapper">
      <div class="title-left">
        <svg-button icon-name="return" @click="backToHome" />
        <div>天气：</div>
      </div>
      <el-select
        class="location-select"
        v-model="selectedLocation"
        placeholder="选择目标地点"
        size="large"
      >
        <el-option
          v-for="item in locationList"
          :key="item.id"
          :label="item.name"
          :value="item.id"
        />
      </el-select>
    </div>

    <CurrentWeatherInfo :current-weather-info="currentWeatherInfo" />
  </div>
</template>

<script setup>
import { getGeoInfo } from "@/api/weather/geo.js";
import { getCurrentWeather } from "@/api/weather/weather.js";
import { getCurrentWarning } from "@/api/weather/warning.js";

import { useRouter } from "vue-router";
import { onMounted, ref, watch } from "vue";

import CurrentWeatherInfo from "./components/current-weather-info.vue";

const router = useRouter();

const locationList = ref([]);
const selectedLocation = ref("");
const currentWeatherInfo = ref({});

function backToHome() {
  router.push({ name: "home" });
}

function getLocation() {
  getGeoInfo({ location: "beijing" }).then((res) => {
    locationList.value = res.location;
    selectedLocation.value = res.location[0].id;
  });
}

function getCurrentWeatherInfo() {
  getCurrentWeather({ location: selectedLocation.value }).then((res) => {
    currentWeatherInfo.value = res.now;
  });
}

function getCurrentWarningInfo() {
  getCurrentWarning({ location: selectedLocation.value }).then((res) => {
    console.log(res);
  });
}

function reload() {
  getCurrentWeatherInfo();
  getCurrentWarningInfo();
}

watch(selectedLocation, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    reload();
  }
});

onMounted(() => {
  getLocation();
});
</script>

<style lang="scss" scoped>
.weather-content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;

  .title-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    .title-left {
      display: flex;
      font-size: 18px;
      gap: 5px;
    }

    .location-select {
      width: 300px;
    }
  }
}
</style>

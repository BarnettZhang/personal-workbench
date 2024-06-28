<template>
  <div class="current-weather-info-wrapper">
    <div class="current-weather-info-title">实时天气信息：</div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
</script>

<style lang="scss" scoped>
.current-weather-info-wrapper {
  .current-weather-info-title {
    font-size: 20px;
    font-weight: 500;
  }
}
</style>

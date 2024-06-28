<template>
  <div class="color-picker-content-wrapper">
    <div class="title-wrapper">
      <svg-button icon-name="return" @click="backToHome" />
      <div>天气：</div>
      <el-button @click="getLocation">测试geoapi</el-button>
    </div>
  </div>
</template>

<script setup>
import { getGeoInfo } from "@/api/geo.js";
import { useRouter } from "vue-router";

const router = useRouter();

function backToHome() {
  router.push({ name: "home" });
}

function getLocation() {
  getGeoInfo({ location: "chaoyang", adm: "beijing" });
}
</script>

<style lang="scss" scoped></style>

<template>
  <div class="current-weather-info-wrapper">
    <span class="current-weather-info-title"
      >实时天气信息：
      <span class="update-at">
        观测于
        {{
          props.currentWeatherInfo
            ? $dayjs(props.currentWeatherInfo.obsTime).format(
                "YYYY-MM-DD HH:mm"
              )
            : ""
        }}
      </span>
    </span>
    <div class="current-weather-into-wrapper">
      <div class="icon-box-left">
        <CustomWeatherImage :current-weather-info="props.currentWeatherInfo" />
        <div
          class="weather-desc-text"
          :style="{ color: weatherColorMapFunc(props.currentWeatherInfo) }"
        >
          {{ props.currentWeatherInfo.text }}
        </div>
      </div>
      <el-descriptions class="weather-info-desc">
        <el-descriptions-item label="温度"
          >{{ props.currentWeatherInfo.temp }}&#8451;</el-descriptions-item
        >
        <el-descriptions-item label="体感温度"
          >{{ props.currentWeatherInfo.feelsLike }}&#8451;</el-descriptions-item
        >
        <el-descriptions-item label="风向角度"
          >{{ props.currentWeatherInfo.wind360 }}&#176;</el-descriptions-item
        >
        <el-descriptions-item label="风向">{{
          props.currentWeatherInfo.windDir
        }}</el-descriptions-item>
        <el-descriptions-item label="风速"
          >{{
            props.currentWeatherInfo.windSpeed
          }}公里/小时</el-descriptions-item
        >
        <el-descriptions-item label="相对湿度"
          >{{ props.currentWeatherInfo.humidity }}%</el-descriptions-item
        >
        <el-descriptions-item label="当前小时累计降水量"
          >{{ props.currentWeatherInfo.precip }}毫米</el-descriptions-item
        >
        <el-descriptions-item label="大气压强"
          >{{ props.currentWeatherInfo.pressure }}百帕</el-descriptions-item
        >
        <el-descriptions-item label="能见度"
          >{{ props.currentWeatherInfo.vis }}公里</el-descriptions-item
        >
      </el-descriptions>
    </div>
  </div>
</template>

<script setup>
import { weatherColorMapFunc } from "@/constant/weather.js";
import CustomWeatherImage from "./custom-weather-image.vue";

const props = defineProps({
  currentWeatherInfo: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped>
.current-weather-info-wrapper {
  .current-weather-info-title {
    font-size: 18px;
    font-weight: 500;

    .update-at {
      font-size: 14px;
      color: #c3c3c3;
    }
  }

  .current-weather-into-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .icon-box-left {
      .weather-desc-text {
        width: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
      }
    }

    .weather-info-desc {
      padding-top: 12px;
      :deep(
          .el-descriptions__body
            .el-descriptions__table:not(.is-bordered)
            .el-descriptions__cell:not(:last-child)
        ) {
        padding-right: 20px;
      }
    }
  }
}
</style>

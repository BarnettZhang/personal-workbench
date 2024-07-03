<template>
  <div class="weather-24h-info-wrapper">
    <span class="weather-24h-info-title"
      >24小时天气信息：
      <span class="update-at">
        更新于
        {{
          weather24hInfo
            ? $dayjs(weather24hInfo.updateAt).format("YYYY-MM-DD HH:mm")
            : ""
        }}
      </span>
    </span>
    <div class="hourly-info-wrapper">
      <div
        v-for="(hourly, index) in weather24hInfo.hourly"
        :key="index"
        class="hourly-info"
      >
        <div class="hour-info">
          {{ $dayjs(hourly.fxTime).format("M/D H") }}时
        </div>
        <span>
          <svg-icon
            class="hour-weather-icon"
            :icon-name="`${hourly.icon}`"
            :style="{ color: weatherColorMapFunc(hourly) }"
          />
          {{ hourly.temp }}&#8451;
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { weatherColorMapFunc } from "@/constant/weather.js";

const props = defineProps({
  weather24hInfo: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped>
.weather-24h-info-wrapper {
  .weather-24h-info-title {
    font-size: 18px;
    font-weight: 500;

    .update-at {
      font-size: 14px;
      color: #c3c3c3;
    }
  }

  .hourly-info-wrapper {
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    align-content: flex-start;
    justify-content: space-between;
    gap: 5px;
    margin-top: 5px;
    color: #595959;

    .hourly-info {
      border: 1px solid #e6e6e6;
      border-radius: 4px;
      padding: 5px;
      flex: 0 0 16%;
      max-width: 85px;

      .hour-info {
        font-size: 14px;
      }

      .hour-weather-icon {
        font-size: 20px;
      }
    }
  }
}
</style>

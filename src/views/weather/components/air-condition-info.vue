<template>
  <div class="air-condition-info-wrapper">
    <span class="air-condition-info-title"
      >空气质量：
      <span class="update-at">
        更新于：
        {{
          airConditionInfo
            ? $dayjs(airConditionInfo.updateTime).format("YYYY-MM-DD HH:mm")
            : ""
        }}
      </span>
    </span>
    <el-descriptions class="weather-info-desc">
      <el-descriptions-item label="发布时间">{{
        $dayjs(airConditionInfo.now.pubTime).format("MM-DD HH:mm")
      }}</el-descriptions-item>
      <el-descriptions-item label="空气质量指数">{{
        airConditionInfo.now.aqi
      }}</el-descriptions-item>
      <el-descriptions-item label="空气质量指数登记">{{
        airConditionInfo.now.level
      }}</el-descriptions-item>
      <el-descriptions-item label="空气质量指数级别">{{
        airConditionInfo.now.category
      }}</el-descriptions-item>
      <el-descriptions-item label="主要污染物">{{
        airConditionInfo.now.primary === "NA"
          ? "无"
          : airConditionInfo.now.primary
      }}</el-descriptions-item>
      <el-descriptions-item label="PM10">{{
        airConditionInfo.now.pm10
      }}</el-descriptions-item>
      <el-descriptions-item label="PM2.5">{{
        airConditionInfo.now.pm2p5
      }}</el-descriptions-item>
      <el-descriptions-item label="二氧化氮">{{
        airConditionInfo.now.no2
      }}</el-descriptions-item>
      <el-descriptions-item label="二氧化硫">{{
        airConditionInfo.now.so2
      }}</el-descriptions-item>
      <el-descriptions-item label="一氧化碳">{{
        airConditionInfo.now.co
      }}</el-descriptions-item>
      <el-descriptions-item label="臭氧">{{
        airConditionInfo.now.o3
      }}</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script setup>
const props = defineProps({
  airConditionInfo: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped>
.air-condition-info-wrapper {
  .air-condition-info-title {
    font-size: 18px;
    font-weight: 500;

    .update-at {
      font-size: 14px;
      color: #c3c3c3;
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
</style>

<template>
  <el-alert
    v-for="warning in weatherWarningInfo"
    :key="warning.id"
    :title="warning.text"
    type="warning"
    show-icon
    :closable="false"
  ></el-alert>
</template>

<script setup>
const props = defineProps({
  weatherWarningInfo: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped></style>

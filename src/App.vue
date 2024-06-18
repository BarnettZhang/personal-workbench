<template>
  <div>{{ route.path }}</div>
  <svg-icon class="color-picker-icon" icon-name="color-picker" />
  <router-view></router-view>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style lang="scss" scoped>
.color-picker-icon {
  width: 20px;
  height: 20px;
}
</style>

<template>
  <div class="hots-content-wrapper">
    <div class="title-wrapper">
      <div class="title-left">
        <svg-button icon-name="return" @click="backToHome" />
        <div>集锦：</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function backToHome() {
  router.push({ name: "home" });
}
</script>

<style lang="scss" scoped>
.hots-content-wrapper {
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
  }
}
</style>

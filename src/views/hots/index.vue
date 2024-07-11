<template>
  <div class="hots-content-wrapper">
    <div class="title-wrapper">
      <div class="title-left">
        <svg-button icon-name="return" @click="backToHome" />
        <div>集锦：</div>
      </div>
      <el-upload
        :show-file-list="false"
        class="upload-demo"
        action
        multiple
        accept="video/*"
        :http-request="httpRequest"
      >
        <el-button type="primary">上传集锦</el-button>
      </el-upload>
    </div>
  </div>
  <el-button @click="loadVideo(videoPathArray[1])">点击！</el-button>
  <video :src="source" controls></video>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { HOTS_VIDEO_PATH } from "@/constant/videoPath.js";

const fs = require("fs");
const electron = require("electron");
const path = require("node:path");

const userDataPath = ref("");
const videoPathArray = ref([]);
const source = ref("");
const router = useRouter();

function backToHome() {
  router.push({ name: "home" });
}

async function httpRequest(option) {
  const arrayBuffer = await option.file.arrayBuffer();
  const buffer = Uint8Array.from(Buffer.from(arrayBuffer));
  fs.writeFileSync(
    `${userDataPath.value}/${HOTS_VIDEO_PATH}/${option.file.name}`,
    buffer
  );
}

function getAllHotsVideos() {
  const directoryPath = `${userDataPath.value}/${HOTS_VIDEO_PATH}/`;

  videoPathArray.value.length = 0;

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }

    // Loop through all the files
    files.forEach((file, index) => {
      const filePath = path.join(directoryPath, file);
      videoPathArray.value.push(filePath);
    });
  });
}

function loadVideo(filePath) {
  fs.readFile(filePath, (err, data) => {
    const dataBlob = new Blob([data]);
    source.value = URL.createObjectURL(dataBlob);
  });
}

onMounted(() => {
  electron.ipcRenderer.invoke("getUserDataPath").then((res) => {
    userDataPath.value = res;
    getAllHotsVideos();
  });
});
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

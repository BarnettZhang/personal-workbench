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
  <el-button
    v-for="(filePathObj, index) of videoPathArray"
    :key="index"
    @click="loadVideo(filePathObj.filePath)"
    >{{ filePathObj.fileName }}</el-button
  >

  <div v-if="showVideo">
    <div class="video-play-mapper" @click="turnOffVideo"></div>
    <video
      class="hots-video-play"
      :src="source"
      controls
      :loop="true"
      :autoplay="true"
    ></video>
  </div>
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
const showVideo = ref(false);
const source = ref("");
const router = useRouter();

function backToHome() {
  router.push({ name: "home" });
}

// 上传集锦视频
async function httpRequest(option) {
  const arrayBuffer = await option.file.arrayBuffer();
  const buffer = Uint8Array.from(Buffer.from(arrayBuffer));
  fs.writeFileSync(
    `${userDataPath.value}/${HOTS_VIDEO_PATH}/${option.file.name}`,
    buffer
  );

  getAllHotsVideos();
}

// 获取所有集锦视频，把路径存在videoPathArray里
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
      if (filePath.endsWith(".mp4")) {
        videoPathArray.value.push({ filePath, fileName: file });
      }
    });
  });
}

// 根据path读取视频
function loadVideo(filePath) {
  fs.readFile(filePath, (err, data) => {
    const dataBlob = new Blob([data]);
    source.value = URL.createObjectURL(dataBlob);
    showVideo.value = true;
  });
}

// 关闭视频
function turnOffVideo() {
  showVideo.value = false;
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

.hots-video-play {
  z-index: 999;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

.video-play-mapper {
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.4;
  z-index: 998;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
</style>

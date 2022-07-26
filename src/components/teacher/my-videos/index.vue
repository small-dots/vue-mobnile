<!--
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-07-15 17:25:00
 * @Description: 
-->
<template>
  <div class="h-full">
    <Header @tabActive="tabActive">
      <template #tab1> 我的视频 </template>
      <template #tab2> 发布视频 </template>
    </Header>
    <div class="h-full mt-4">
      <VideoList v-if="currentIndex === 1" />
      <Publish v-if="currentIndex === 2" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Header from "../../../layout/header-teacher.vue";
import Publish from "./publish-video.vue";
import VideoList from "./my-video.vue";
const currentIndex = ref(1);
const tabActive = (index) => {
  currentIndex.value = index;
};
</script>

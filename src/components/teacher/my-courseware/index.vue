<template>
  <div class="h-full">
    <Header @tabActive="tabActive">
      <template #tab1> 我的课件 </template>
      <template #tab2> 上传课件 </template>
    </Header>
    <div class="h-full mt-4">
      <CoursewareList v-if="currentIndex === 1" />
      <Publish v-if="currentIndex === 2" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Header from "../../../layout/header-teacher.vue";
import Publish from "./upload-courseware.vue";
import CoursewareList from "./my-courseware.vue";
const currentIndex = ref(1);
const tabActive = (index) => {
  currentIndex.value = index;
};
</script>

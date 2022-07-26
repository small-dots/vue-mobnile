<template>
  <div class="h-full">
    <Header @tabActive="tabActive">
      <template #tab1> 我的习题 </template>
      <template #tab2> 上传习题 </template>
    </Header>
    <div class="h-full mt-4">
      <ExerciseList v-if="currentIndex === 1" />
      <Publish v-if="currentIndex === 2" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Header from "../../../layout/header-teacher.vue";
import Publish from "./uploader.vue";
import ExerciseList from "./my-exercise.vue";
const currentIndex = ref(1);
const tabActive = (index) => {
  currentIndex.value = index;
};
</script>

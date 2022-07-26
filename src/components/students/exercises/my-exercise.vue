<template>
  <div class="w-full h-full">
    <div class="flex items-center gap-4">
      <span
        class="px-4 py-2 bg-gray-100 rounded"
        :class="{ actived: currentIndex === '1' }"
        @click="currentIndex = '1'"
        >习题试卷</span
      >
      <span
        class="px-4 py-2 bg-gray-100 rounded"
        :class="{ actived: currentIndex === '2' }"
        @click="currentIndex = '2'"
        >错题集</span
      >
    </div>
    <van-divider />
    <div>
      <exercises v-if="currentIndex === '1'" />
      <errorExercise v-if="currentIndex === '2'" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import exercises from "./exercises.vue";
import errorExercise from "./error-exercises.vue";
const currentIndex = ref("1");
</script>
<style lang="css" scoped>
.actived {
  background: #d7f7f4;
  color: #009688;
}
</style>

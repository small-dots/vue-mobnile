<!--
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-07-13 15:07:41
 * @Description: 
-->
<template>
  <div class="h-full">
    <Header @tabActive="tabActive">
      <template #tab1> 我的课程安排 </template>
      <template #tab2> 在线备课 </template>
    </Header>
    <div class="h-full mt-4">
      <Mycourse v-if="currentIndex === 1" />
      <OnlineClass v-if="currentIndex === 2" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Header from "../../../layout/header-teacher.vue";
import OnlineClass from './online-make.vue'
import Mycourse from "./my-course.vue"
const currentIndex = ref(1);
const tabActive = (index) => {
  currentIndex.value = index;
};
</script>

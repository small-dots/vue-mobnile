<!--
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-07-13 13:56:27
 * @Description: 
-->
<template>
  <div class="h-full">
    <Header @tabActive="tabActive">
      <template #tab1> 我的班级 </template>
      <template #tab2> 我的学生 </template>
    </Header>
    <div class="h-full mt-4">
      <Myclass v-if="currentIndex === 1" />
      <Mystudent v-if="currentIndex === 2" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Header from "../../../layout/header-teacher.vue";
import Myclass from "./my-class.vue";
import Mystudent from "./my-student.vue";
const currentIndex = ref(1);
const tabActive = (index) => {
  currentIndex.value = index;
};
</script>

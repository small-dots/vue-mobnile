<!--
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-06-30 15:04:58
 * @Description: 
-->
<template>
  <div
    class="
      h-24
      w-full
      fixed
      bottom-0
      right-0
      rounded-t-lg
      bg-gray-900
      flex flex-row
      gap-2
      justify-between
      items-center
      pr-1
      pl-1
    "
  >
    <div
      class="h-full flex flex-col gap-2 justify-center items-center"
      v-for="(menu, index) in memulist"
      :key="index"
    >
      <img class="w-8 h-8" :src="menu.icon" />
      <span class="text-base text-white subpixel-antialiased">
        {{ menu.name }}</span
      >
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import baseinfo from "../assets/baseinfo.png";
import report from "../assets/report.png";
const memulist = reactive([
  {
    name: "基本信息",
    icon: baseinfo,
  },
  {
    name: "成绩信息",
    icon: report,
  },
  {
    name: "轨迹信息",
    icon: report,
  },
  {
    name: "奖惩信息",
    icon: report,
  },
  {
    name: "奖惩信息",
    icon: report,
  },
]);
</script>
<style scoped>
</style>

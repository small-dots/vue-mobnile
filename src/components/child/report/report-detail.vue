<!--
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-07-21 11:09:52
 * @Description: 
-->
<template>
  <div class="bg-white w-3/4 rounded-lg relative">
    <p
      class="text-center rounded-t-lg font-medium py-2 bg-orange-600 text-white"
    >
      各科成绩及排名
    </p>
    <div>
      <p class="text-sm text-gray-600 text-center my-2">
        2021学年高二第一学期3月份开学考试
      </p>
      <div class="flex items-center justify-between px-3 text-white">
        <p class="bg-o-3 rounded-md text-center p-2">
          <span class="text-xs">成绩总分</span
          ><span class="block font-bsd">655</span>
        </p>
        <p class="bg-o-1 rounded-md text-center p-2">
          <span class="text-xs">年级名次</span
          ><span class="block font-bsd">21</span>
        </p>
        <p class="bg-r-2 rounded-md text-center p-2">
          <span class="text-xs">班级名次</span
          ><span class="block font-bsd">2</span>
        </p>
      </div>
      <div class="grid grid-cols-2 gap-4 p-3">
        <div
          class="shadow-1 rounded-lg p-2 flex justify-between"
          v-for="(item, index) in list"
          :key="index"
        >
          <div>
            <p class="text-sm">{{ item.subject }}</p>
            <p class="font-bsd text-lg">{{ item.fs }}</p>
          </div>
          <div class="flex flex-col gap-2">
            <van-tag color="#e5483b">班 {{ item.b }}</van-tag>
            <van-tag color="#22b6b4">年 {{ item.x }}</van-tag>
          </div>
        </div>
      </div>
    </div>
    <div class="d absolute top-1 right-1" @click="close">
      <van-icon size="20px" color="white" name="close" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const list = ref([
  { subject: "语文", fs: 98, b: 1, x: 4 },
  { subject: "数学", fs: 88, b: 4, x: 52 },
  { subject: "英语", fs: 63, b: 13, x: 69 },
  { subject: "化学", fs: 95, b: 2, x: 18 },
  { subject: "生物", fs: 91, b: 1, x: 21 },
  { subject: "物理", fs: 92, b: 2, x: 12 },
]);

const emit = defineEmits(["close"]);
const close = () => {
  emit("close");
};
</script>
<style lang="css" scoped>
.color-o {
  color: #fd5b43;
}

.color-g {
  color: #308c89;
}
.bg-o-1 {
  background: #22b6b4;
}
.bg-r-2 {
  background: #e5483b;
}
.bg-o-3 {
  background: #663bb7;
}
.font-bsd {
  font-family: "sfb";
}
</style>

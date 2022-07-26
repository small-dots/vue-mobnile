<!--
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-07-21 14:09:15
 * @Description: 
-->
<template>
  <div class="h-full w-full divide-y">
    <div v-for="(item, index) in list" :key="index" class="py-3 px-2">
      <p>{{ item.title }}</p>
      <div class="flex text-sm gap-3 my-1 items-center text-gray-600">
        <p>
          科目：<span class="text-black">{{ item.subjuect }}</span>
        </p>
        <p>
          练习时间：<span class="text-black">{{ item.time }}</span>
        </p>
        <p>
          状态：<span v-if="item.status === '1'" class="text-black">已完成</span>
          <span v-if="item.status === '2'" class="text-orange-500">未完成</span>
        </p>
      </div>
      <div class="text-gray-600 text-sm my-1">
        <van-icon name="underway-o" /> 发布日期：<span class="text-black">{{
          item.publishDate
        }}</span>
      </div>
      <div class="mt-2 flex gap-3">
        <span class="bg-g-1 text-sm rounded-xl font-normal px-2 py-1 text-white"
          >{{item.status==='1'?"查看结果":"继续作答"}}</span
        >
        <div class="text-sm flex items-center justify-between">
          <span class="bg-g-3 text-white rounded-xl px-2 py-1">详情</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const list = ref([
  {
    title: "数学期末考试历年真题一",
    subjuect: "数学",
    time: "2020-12-14",
    status: "1",
    publishDate: "2020-12-01",
  },
  {
    title: "语文期中考试历年真题一",
    subjuect: "语文",
    time: "2020-12-14",
    status: "2",
    publishDate: "2020-12-01",
  },
  {
    title: "语文摸底考",
    subjuect: "语文",
    time: "2020-12-14",
    status: "2",
    publishDate: "2020-12-01",
  },
  {
    title: "语文古诗词大杂考",
    subjuect: "语文",
    time: "2020-12-14",
    status: "2",
    publishDate: "2020-12-01",
  },
]);
</script>
<style lang="css" scoped>
.bg-g-1 {
  background: linear-gradient(to right, #ff6034, #ee0a24);
}
.bg-g-3 {
  background: linear-gradient(to right, #10b6b5, #1fc9a2);
}
</style>

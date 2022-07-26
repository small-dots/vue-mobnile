<!--
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-07-13 16:19:27
 * @Description: 
-->
<template>
  <div class="flex flex-nowrap gap-2 px-3">
    <el-input placeholder="请输入学号"></el-input>
    <el-input placeholder="请输入姓名"></el-input>
    <van-button color="linear-gradient(to right, #ff6034, #ee0a24)">
      搜索
    </van-button>
  </div>
  <div class="h-full">
    <van-tabs v-model:active="active" animated sticky>
      <van-tab title="已通过">
        <van-divider />
        <div class="relative rounded-md bg-green w-full px-3 py-4 mb-20">
          <p class="text-center text-white pb-3 title">高中一年级选课信息</p>
          <div class="
              h-full
              divide-y divide-gray-200
              bg-white
              rounded-md
              p-3
              overflow-auto
            ">
            <div v-for="(item, index) in list" :key="index" class="flex flex-col gap-2">
              <p class="mt-3">{{ item.course }}</p>
              <div class="text-sm flex flex-nowrap gap-4">
                <p>
                  <span class="text-gray-500">学号：</span><span>{{ item.num }}</span>
                </p>
                <p>
                  <span class="text-gray-500">姓名：</span><span>{{ item.name }}</span>
                </p>
                <p>
                  <span class="text-gray-500">性别：</span><span>{{ item.sex }}</span>
                </p>
              </div>
              <p class="text-sm">
                <span class="text-gray-500">
                  <van-icon name="clock-o" /> 提交时间：
                </span>
                {{ item.submitTime }}
              </p>
              <div class="mb-2">
                <el-switch v-model="item.status" class="ml-2" inline-prompt style="
                    --el-switch-on-color: #13ce66;
                    --el-switch-off-color: #ff4949;
                  " active-text="通过" inactive-text="拒绝" />
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="未通过">
        <van-divider />
        <div class="relative rounded-md bg-green w-full px-3 py-4 mb-20">
          <p class="text-center text-white pb-3">高中一年级选课信息</p>
          <div class="
              h-full
              divide-y divide-gray-200
              bg-white
              rounded-md
              p-3
              overflow-auto
            ">
            <div v-for="(item, index) in list1" :key="index" class="flex flex-col gap-2">
              <p class="mt-3">{{ item.course }}</p>
              <div class="text-sm flex flex-nowrap gap-4">
                <p>
                  <span class="text-gray-500">学号：</span><span>{{ item.num }}</span>
                </p>
                <p>
                  <span class="text-gray-500">姓名：</span><span>{{ item.name }}</span>
                </p>
                <p>
                  <span class="text-gray-500">性别：</span><span>{{ item.sex }}</span>
                </p>
              </div>
              <p class="text-sm">
                <span class="text-gray-500">
                  <van-icon name="clock-o" /> 提交时间：
                </span>
                {{ item.submitTime }}
              </p>
              <div class="mb-2">
                <el-switch v-model="item.status" class="ml-2" inline-prompt style="
                    --el-switch-on-color: #13ce66;
                    --el-switch-off-color: #ff4949;
                  " active-text="通过" inactive-text="拒绝" />
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title=""></van-tab>
      <van-tab title=""> </van-tab>
      <van-tab title=""></van-tab>
    </van-tabs>
  </div>
</template>
<script setup>
import { ref } from "vue";
const active = ref(0);
const list = ref([
  {
    course: "物理+数学+化学",
    name: "李娜",
    sex: "女",
    num: "17080041",
    submitTime: "2021-12-23",
    status: true,
  },
  {
    course: "物理+语文+历史",
    name: "吉美",
    sex: "女",
    num: "17080042",
    submitTime: "2021-12-13",
    status: true,
  },
  {
    course: "英语+数学+地理",
    name: "张全",
    sex: "男",
    num: "17080043",
    submitTime: "2021-11-23",
    status: true,
  },
  {
    course: "物理+数学+化学",
    name: "胡可",
    sex: "女",
    num: "17080041",
    submitTime: "2021-12-23",
    status: true,
  },
  {
    course: "物理+数学+化学",
    name: "李娜",
    sex: "女",
    num: "17080041",
    submitTime: "2021-12-23",
    status: true,
  },
  {
    course: "物理+数学+化学",
    name: "李娜",
    sex: "女",
    num: "17080041",
    submitTime: "2021-12-23",
    status: true,
  },
]);
const list1 = ref([
  {
    course: "物理+数学+化学",
    name: "李娜",
    sex: "女",
    num: "17080041",
    submitTime: "2021-12-23",
    status: false,
  },
  {
    course: "物理+语文+历史",
    name: "吉美",
    sex: "女",
    num: "17080042",
    submitTime: "2021-12-13",
    status: false,
  },
  {
    course: "英语+数学+地理",
    name: "张全",
    sex: "男",
    num: "17080043",
    submitTime: "2021-11-23",
    status: false,
  },
  {
    course: "物理+数学+化学",
    name: "胡可",
    sex: "女",
    num: "17080041",
    submitTime: "2021-12-23",
    status: false,
  },
  {
    course: "物理+数学+化学",
    name: "李娜",
    sex: "女",
    num: "17080041",
    submitTime: "2021-12-23",
    status: false,
  },
  {
    course: "物理+数学+化学",
    name: "李娜",
    sex: "女",
    num: "17080041",
    submitTime: "2021-12-23",
    status: false,
  },
]);
</script>
<style lang="css" scoped>
.title:after,
.title:before {
  content: "";
  width: 1rem;
  display: inline-block;
  vertical-align: middle;
  border-radius: 10px;
  margin: 0 10px;
  height: 0.25rem;
  background: #fff;
}

.bg-green {
  background: #009688;
}
</style>
<style >
.el-switch__core {
  width: 54px;
}
</style>

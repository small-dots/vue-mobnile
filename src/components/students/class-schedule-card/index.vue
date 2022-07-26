<!--
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-07-21 15:32:25
 * @Description: 
-->
<template>
  <div class="w-full h-full">
    <van-nav-bar
      title="我的课程表"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="p-2">
      <van-calendar
        title="课程表时间"
        :show-subtitle="false"
        :poppable="false"
        :show-confirm="false"
        :style="{ height: '150px' }"
      />
      <div class="">
        <div
          class="p-2 shadow-1 mb-3"
          v-for="(course, index) in list"
          :style="{ background: index % 2 === 0 ? '#fef4f3' : '' }"
          :key="index"
        >
          <p>
            课程：<span>{{ course.subject }}</span>
          </p>
          <div class="flex items-center gap-5 my-1 py-1">
            <div class="text-sm text-gray-600">
              班级：<span class="text-normal text-orange-500">{{
                course.grade
              }}</span>
            </div>
            <div class="text-sm text-gray-600">
              上课老师：<span class="text-normal text-black">{{
                course.teacher
              }}</span>
            </div>
          </div>
          <div class="flex items-center gap-5 my-1 py-1">
            <div class="text-sm text-gray-600">
              时间：<span class="text-normal text-orange-500">{{
                course.time
              }}</span>
            </div>
            <div class="text-sm text-gray-600">
              上课地点：<span class="text-normal text-black">{{
                course.place
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const list = ref([
  {
    subject: "语文",
    grade: "高一",
    teacher: "李淑英",
    time: "08:30 ~ 09:15",
    place: "北楼一楼自媒体教室",
  },
  {
    subject: "化学",
    grade: "高一",
    teacher: "姜太华",
    time: "09:30 ~ 10:15",
    place: "北楼一楼自媒体教室",
  },
  {
    subject: "物理",
    grade: "高一",
    teacher: "张天书",
    time: "10:30 ~ 11:15",
    place: "北楼三楼物理实验室",
  },
  {
    subject: "数学",
    grade: "高一",
    teacher: "张德川",
    time: "13:30 ~ 14:15",
    place: "北楼一楼自媒体教室",
  },
  {
    subject: "生物",
    grade: "高一",
    teacher: "梅淑芬",
    time: "14:30 ~ 15:15",
    place: "北楼一楼自媒体教室",
  },
  {
    subject: "地理",
    grade: "高一",
    teacher: "仲华",
    time: "14:30 ~ 15:15",
    place: "北楼一楼自媒体教室",
  },
]);
const onClickLeft = () => history.back();
</script>



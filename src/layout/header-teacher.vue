<!--
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-07-13 14:23:39
 * @Description: 
-->
<template>
  <van-sticky>
    <div class="flex flex-row items-center justify-start p-2 bg-white gap-4">
      <div class="h-7 w-7" @click="showPop">
        <img class="rounded-full" src="../assets/teacher_avator.png" alt="" />
      </div>
      <div class="flex gap-8">
        <div
          class="text-sm"
          :class="{ active: currentIndex === 1 }"
          @click="tabClick(1)"
        >
          <slot name="tab1"></slot>
        </div>
        <div
          class="text-sm"
          :class="{ active: currentIndex === 2 }"
          @click="tabClick(2)"
        >
          <slot name="tab2"></slot>
        </div>
      </div>
    </div>
  </van-sticky>

  <van-popup
    v-model:show="show"
    position="left"
    :style="{ height: '100%', width: '70%' }"
  >
    <div class="px-3 py-5">
      <div class="flex flex-nowrap items-center gap-3">
        <img
          src="../assets/avactor.png"
          class="rounded-full ring-2 ring-green-600 h-10 w-10"
          alt=""
        />
        李淑芬
      </div>
      <div class="grid grid-cols-2 gap-2 mt-5">
        <div class="bg-blue-300 text-blue-900 rounded-md p-1">
          <span class="text-sm block">班级</span>
          <span class="font-b text-2xl">3</span>
        </div>
        <div class="bg-orange-300 text-orange-900 rounded-md p-1">
          <span class="text-sm block">学生</span>
          <span class="font-b text-2xl">102</span>
        </div>
        <div class="bg-teal-300 text-teal-900 rounded-md p-1">
          <span class="text-sm block">课程</span>
          <span class="font-b text-2xl">4</span>
        </div>
        <div class="bg-green-300 text-green-900 rounded-md p-1">
          <span class="text-sm block">视频</span>
          <span class="font-b text-2xl">31</span>
        </div>
        <div class="bg-indigo-300 text-indigo-900 rounded-md p-1">
          <span class="text-sm block">课件</span>
          <span class="font-b text-2xl">77</span>
        </div>
        <div class="bg-sky-300 text-sky-900 rounded-md p-1">
          <span class="text-sm block">习题</span>
          <span class="font-b text-2xl">871</span>
        </div>
      </div>
      <van-divider />
      <div>
        <p class="text-sm my-4 flex items-center gap-3" @click="goFriends">
          <van-icon name="friends-o" /><span>我的联系人</span>
        </p>
        <p class="text-sm my-4 flex items-center gap-3" @click="goMessage">
          <van-icon name="chat-o" /><span>我的消息</span>
        </p>
        <p class="text-sm my-4 flex items-center gap-3">
          <van-icon name="star-o" /><span>我的收藏</span>
        </p>
        <p class="text-sm my-4 flex items-center gap-3" @click="goAddress">
          <van-icon name="location-o" /><span>我的收货地址</span>
        </p>
      </div>
      <van-divider />
      <div>
        <p class="text-sm my-4 flex items-center gap-3" @click="goBaseInfo">
          <van-icon name="setting-o" /><span>基本信息</span>
        </p>
        <p class="text-sm my-4 flex items-center gap-3" @click="goPassword">
          <van-icon name="closed-eye" /><span>密码修改</span>
        </p>
      </div>
    </div>
  </van-popup>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const currentIndex = ref(1);
const emit = defineEmits(["tabActive"]);
const router = useRouter();
const tabClick = (index) => {
  currentIndex.value = index;
  emit("tabActive", index);
};
const show = ref(false);
const showPop = () => {
  show.value = true;
};

const goBaseInfo = () => {
  router.push({ path: "/teacher-baseinfo" });
};
const goAddress = () => {
  router.push({ path: "/teacher-address" });
};
const goPassword = () => {
  router.push({ path: "/edit-password" });
};
const goFriends = () => {
  router.push({ path: "/my-friends" });
};
const goMessage = () => {
  router.push({ path: "/my-message" });
};
</script>
<style scoped>
.active {
  font-size: 16px;
  font-weight: 600;
  position: relative;
  transition: all 0.1s ease;
}

.active:after {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  content: "";
  display: block;
  height: 0.25rem;
  width: 1rem;
  border-radius: 20px;
  background: #000;
}

.font-b {
  font-family: "sfb";
}
</style>

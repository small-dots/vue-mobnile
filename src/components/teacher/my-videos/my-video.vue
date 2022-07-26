<!--
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-07-15 17:26:29
 * @Description: 
-->
<template>
  <div class="w-full p-2">
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value3" :options="[{ text: '全部分类', value: 0 }]" />
    </van-dropdown-menu>
    <van-divider />
    <div class="">
      <div class="mb-8">
        <div class="flex items-center justify-between">
          <div class="flex gap-2 items-center">
            <img class="h-4 w-4 rounded-full" src="../../../assets/avactor.png" alt="" />
            <span class="text-sm">李老师</span>
          </div>
          <van-icon name="ellipsis" />
        </div>
        <div class="relative">
          <video @click="playt('1')" ref="video1" class="w-full  rounded-md" preload="auto" muted
            src="../../../assets/190204084208765161.mp4"></video>
          <van-icon v-if="show1" class="icon_tyle" size="50px" color="#ffffff" name="play-circle-o"
            @click="playt('1')" />
          <div class="absolute top-0 flex items-center gap-1  bg-black bg-opacity-10 px-1 py-0.5 rounded-r">
            <svg t="1657892072341" class="h-5 w-5 inline-block" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="1412">
              <path
                d="M816.85 974.24h-609.7c-81.64 0-148.06-66.42-148.06-148.06v-609.7c0-81.64 66.42-148.06 148.06-148.06h609.7c81.64 0 148.06 66.42 148.06 148.06v609.7c0 81.64-66.42 148.06-148.06 148.06z m-609.7-789.82c-17.67 0-32.06 14.39-32.06 32.06v609.7c0 17.67 14.39 32.06 32.06 32.06h609.7c17.67 0 32.06-14.39 32.06-32.06v-609.7c0-17.67-14.39-32.06-32.06-32.06h-609.7z"
                fill="#f65131" p-id="1413"></path>
              <path d="M694.81 594.42H454V272.71h116v205.71h124.81z" fill="#f65131" p-id="1414"></path>
            </svg>
            <span class="text-white text-sm bg-black bg-opacity-10" p-2>01:34</span>
          </div>
        </div>
        <div class="bg-g rounded px-3 p-2">
          <p class="font-semibold">你不知道的函数类型</p>
          <div class="flex items-center text-gray-500 text-sm justify-between">
            <span>
              <van-icon name="clock-o" /> 2021-06-22 21:45:09
            </span>
            <span>
              <van-icon name="eye-o" /> 233
            </span>
          </div>
        </div>
      </div>
      <div class="mb-8">
        <div class="flex items-center justify-between">
          <div class="flex gap-2 items-center">
            <img class="h-4 w-4 rounded-full" src="../../../assets/avactor.png" alt="" />
            <span class="text-sm">李老师</span>
          </div>
          <van-icon name="ellipsis" />
        </div>
        <div class="relative">
          <video ref="video2" @click="playt('2')" class="w-full rounded-md" preload="auto" muted
            src="../../../assets/oceans.mp4"></video>
          <van-icon v-if="show2" class="icon_tyle" size="50px" color="#ffffff" name="play-circle-o"
            @click="playt('2')" />
          <div class="absolute top-0 flex items-center gap-1  bg-black bg-opacity-10 px-1 py-0.5 rounded-r">
            <svg t="1657892072341" class="h-5 w-5 inline-block" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="1412">
              <path
                d="M816.85 974.24h-609.7c-81.64 0-148.06-66.42-148.06-148.06v-609.7c0-81.64 66.42-148.06 148.06-148.06h609.7c81.64 0 148.06 66.42 148.06 148.06v609.7c0 81.64-66.42 148.06-148.06 148.06z m-609.7-789.82c-17.67 0-32.06 14.39-32.06 32.06v609.7c0 17.67 14.39 32.06 32.06 32.06h609.7c17.67 0 32.06-14.39 32.06-32.06v-609.7c0-17.67-14.39-32.06-32.06-32.06h-609.7z"
                fill="#f65131" p-id="1413"></path>
              <path d="M694.81 594.42H454V272.71h116v205.71h124.81z" fill="#f65131" p-id="1414"></path>
            </svg>
            <span class="text-white text-sm"> 01:34</span>
          </div>
        </div>
        <div class="bg-g rounded px-3 p-2">
          <p class="font-semibold">还有什么可以阻止我解答这道题目</p>
          <div class="flex items-center text-gray-500 text-sm justify-between">
            <span>
              <van-icon name="clock-o" /> 2021-06-22 21:45:09
            </span>
            <span>
              <van-icon name="eye-o" /> 1,117
            </span>
          </div>
        </div>
      </div>
      <div class="mb-8">
        <div class="flex items-center justify-between">
          <div class="flex gap-2 items-center">
            <img class="h-4 w-4 rounded-full" src="../../../assets/avactor.png" alt="" />
            <span class="text-sm">王任</span>
          </div>
          <van-icon name="ellipsis" />
        </div>
        <div class="relative">
          <video ref="video3" @click="playt('3')" class="w-full rounded-md" preload="auto" muted
            src="../../../assets/190319212559089721.mp4"></video>
          <van-icon v-if="show3" class="icon_tyle" size="50px" color="#ffffff" name="play-circle-o"
            @click="playt('3')" />
          <div class="absolute top-0 flex items-center gap-1  bg-black bg-opacity-10 px-1 py-0.5 rounded-r">
            <svg t="1657892072341" class="h-5 w-5 inline-block" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="1412">
              <path
                d="M816.85 974.24h-609.7c-81.64 0-148.06-66.42-148.06-148.06v-609.7c0-81.64 66.42-148.06 148.06-148.06h609.7c81.64 0 148.06 66.42 148.06 148.06v609.7c0 81.64-66.42 148.06-148.06 148.06z m-609.7-789.82c-17.67 0-32.06 14.39-32.06 32.06v609.7c0 17.67 14.39 32.06 32.06 32.06h609.7c17.67 0 32.06-14.39 32.06-32.06v-609.7c0-17.67-14.39-32.06-32.06-32.06h-609.7z"
                fill="#f65131" p-id="1413"></path>
              <path d="M694.81 594.42H454V272.71h116v205.71h124.81z" fill="#f65131" p-id="1414"></path>
            </svg>
            <span class="text-white text-sm bg-black bg-opacity-10">01:34</span>
          </div>
        </div>

        <div class="bg-g rounded px-3 p-2">
          <p class="font-semibold">李老师的函数精讲</p>
          <div class="flex items-center text-gray-500 text-sm justify-between">
            <span>
              <van-icon name="clock-o" /> 2021-06-22 21:45:09
            </span>
            <span>
              <van-icon name="eye-o" /> 1,561
            </span>
          </div>
        </div>
      </div>
      <div class="mb-20">
        <div class="flex items-center justify-between">
          <div class="flex gap-2 items-center">
            <img class="h-4 w-4 rounded-full" src="../../../assets/avactor.png" alt="" />
            <span class="text-sm">张布</span>
          </div>
          <van-icon name="ellipsis" />
        </div>
        <div class="relative">
          <video ref="video4" @click="playt('4')" class="w-full rounded-md" preload="auto" muted
            src="../../../assets/190319222227698228.mp4"></video>
          <van-icon v-if="show4" class="icon_tyle" size="50px" color="#ffffff" name="play-circle-o"
            @click="playt('4')" />
          <div class="absolute top-0 flex items-center gap-1  bg-black bg-opacity-10 px-1 py-0.5 rounded-r">
            <svg t="1657892072341" class="h-5 w-5 inline-block" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="1412">
              <path
                d="M816.85 974.24h-609.7c-81.64 0-148.06-66.42-148.06-148.06v-609.7c0-81.64 66.42-148.06 148.06-148.06h609.7c81.64 0 148.06 66.42 148.06 148.06v609.7c0 81.64-66.42 148.06-148.06 148.06z m-609.7-789.82c-17.67 0-32.06 14.39-32.06 32.06v609.7c0 17.67 14.39 32.06 32.06 32.06h609.7c17.67 0 32.06-14.39 32.06-32.06v-609.7c0-17.67-14.39-32.06-32.06-32.06h-609.7z"
                fill="#f65131" p-id="1413"></path>
              <path d="M694.81 594.42H454V272.71h116v205.71h124.81z" fill="#f65131" p-id="1414"></path>
            </svg>
            <span class="text-white text-sm bg-black bg-opacity-10">03:34</span>
          </div>
        </div>

        <div class="bg-g rounded px-3 p-2">
          <p class="font-semibold">张布带你了解真正的化学实验</p>
          <div class="flex items-center text-gray-500 text-sm justify-between">
            <span>
              <van-icon name="clock-o" /> 2021-06-22 21:45:09
            </span>
            <span>
              <van-icon name="eye-o" /> 22,561
            </span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const video1 = ref(null)
const video2 = ref(null)
const video3 = ref(null)
const video4 = ref(null)

const show1 = ref(true)
const show2 = ref(true)
const show3 = ref(true)
const show4 = ref(true)

const value1 = ref(0);
const value2 = ref('a');
const value3 = ref(0)
const option1 = [
  { text: '语文', value: 0 },
  { text: '数学', value: 1 },
  { text: '英语', value: 2 },
  { text: '历史', value: 3 },
  { text: '地理', value: 4 },
  { text: '化学', value: 5 },
  { text: '生物', value: 6 },
];
const option2 = [
  { text: '高一(1)年级', value: 'a' },
  { text: '高一(2)年级', value: 'b' },
  { text: '高二(1)年级', value: 'c' },
  { text: '高二(2)年级', value: 'd' },
  { text: '高三(1)年级', value: 'r' },
  { text: '高三(2)年级', value: 'f' },
];

const playt = (key) => {
  if (key === '1') {
    if (video1.value.paused) {
      video1.value.play()
      show1.value = false
    } else {
      video1.value.pause();
      show1.value = true
    }
  }
  if (key === '2') {
    if (video2.value.paused) {
      video2.value.play()
      show2.value = false
    } else {
      video2.value.pause();
      show2.value = true
    }
  }
  if (key === '3') {
    if (video3.value.paused) {
      video3.value.play()
      show3.value = false
    } else {
      video3.value.pause();
      show3.value = true
    }
  }
  if (key === '4') {
    if (video4.value.paused) {
      video4.value.play()
      show4.value = false
    } else {
      video4.value.pause();
      show4.value = true
    }
  }

}
</script>
<style lang="css">
.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
.van-dropdown-menu__bar{
  border-radius: 12px;
}
</style>
<style lang="css" scoped>
.bg-g {
  background: #fafafa;
}

video {
  height: 10rem;
  object-fit: cover;
}

.icon_tyle {
  position: absolute !important;
  top: 50%;
  z-index: 1;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

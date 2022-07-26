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
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 auto-cols-fr mb-20">
      <div class="rounded-md shadow-1">
        <div class="relative">
          <img src="../../../assets/PPT2.png" class="h-28 rounded-md w-full object-cover" alt="" srcset="">
        </div>
        <div class="rounded  px-3 p-2">
          <p class="font-semibold text-sm">你不知道的函数类型</p>
          <p class="text-xs text-gray-500 my-1">高考重难点解析，如何获取</p>
          <div class="flex items-center text-gray-500 text-xs my-1 justify-between">
            <span>
              <van-icon name="clock-o" /> 2021-06-22
            </span>
          </div>
        </div>
      </div>
      <div class="rounded-md shadow-1 ">
        <div class="relative">
          <img src="../../../assets/pp3.png" class="h-28  rounded-md  w-full object-cover" alt="" srcset="">
        </div>
        <div class="rounded px-3 p-2">
          <p class="font-semibold text-sm">还有什么可以阻止我解答这道题目</p>
          <p class="text-xs text-gray-500 my-1">高考重难点解析，如何获取</p>
          <div class="flex items-center text-gray-500 my-1 text-xs justify-between">
            <span>
              <van-icon name="clock-o" /> 2021-06-22
            </span>
          </div>
        </div>
      </div>
      <div class="rounded-md shadow-1">
        <div class="relative">
          <img src="../../../assets/ppt1.png" class="h-28 w-full object-cover rounded-md" srcset="">
        </div>

        <div class="rounded px-3 p-2">
          <p class="font-semibold text-sm">李老师的函数精讲</p>
          <p class="text-xs text-gray-500 my-1">高考重难点解析，如何获取</p>
          <div class="flex items-center text-gray-500 text-xs my-1 justify-between">
            <span>
              <van-icon name="clock-o" /> 2021-06-22
            </span>
          </div>
        </div>
      </div>
      <div class="rounded-md shadow-1 ">
        <div class="relative">
          <img src="../../../assets/pp3.png" class="h-28  rounded-md  w-full object-cover" alt="" srcset="">
        </div>
        <div class="rounded px-3 p-2">
          <p class="font-semibold text-sm">还有什么可以阻止我解答这道题目</p>
          <p class="text-xs text-gray-500 my-1">高考重难点解析，如何获取</p>
          <div class="flex items-center text-gray-500 my-1 text-xs justify-between">
            <span>
              <van-icon name="clock-o" /> 2021-06-22
            </span>
          </div>
        </div>
      </div>
      <div class="rounded-md shadow-1">
        <div class="relative">
          <img src="../../../assets/ppt1.png" class="h-28 w-full object-cover rounded-md" srcset="">
        </div>

        <div class="rounded px-3 p-2">
          <p class="font-semibold text-sm">李老师的函数精讲</p>
          <p class="text-xs text-gray-500 my-1">高考重难点解析，如何获取</p>
          <div class="flex items-center text-gray-500 text-xs my-1 justify-between">
            <span>
              <van-icon name="clock-o" /> 2021-06-22
            </span>
          </div>
        </div>
      </div>
      <div class="rounded-md shadow-1">
        <div class="relative">
          <img src="../../../assets/PPT2.png" class="h-28 rounded-md w-full object-cover" alt="" srcset="">
        </div>
        <div class="rounded  px-3 p-2">
          <p class="font-semibold text-sm">你不知道的函数类型</p>
          <p class="text-xs text-gray-500 my-1">高考重难点解析，如何获取</p>
          <div class="flex items-center text-gray-500 text-xs my-1 justify-between">
            <span>
              <van-icon name="clock-o" /> 2021-06-22
            </span>
          </div>
        </div>
      </div>
      <div class="rounded-md shadow-1">
        <div class="relative">
          <img src="../../../assets/ppt1.png" class="h-28 w-full object-cover rounded-md" srcset="">
        </div>

        <div class="rounded px-3 p-2">
          <p class="font-semibold text-sm">李老师的函数精讲</p>
          <p class="text-xs text-gray-500 my-1">高考重难点解析，如何获取</p>
          <div class="flex items-center text-gray-500 text-xs my-1 justify-between">
            <span>
              <van-icon name="clock-o" /> 2021-06-22
            </span>
          </div>
        </div>
      </div>
      <div class="rounded-md shadow-1 ">
        <div class="relative">
          <img src="../../../assets/pp3.png" class="h-28  rounded-md  w-full object-cover" alt="" srcset="">
        </div>
        <div class="rounded px-3 p-2">
          <p class="font-semibold text-sm">还有什么可以阻止我解答这道题目</p>
          <p class="text-xs text-gray-500 my-1">高考重难点解析，如何获取</p>
          <div class="flex items-center text-gray-500 my-1 text-xs justify-between">
            <span>
              <van-icon name="clock-o" /> 2021-06-22
            </span>
          </div>
        </div>
      </div>
      <div class="rounded-md shadow-1">
        <div class="relative">
          <img src="../../../assets/ppt1.png" class="h-28 w-full object-cover rounded-md" srcset="">
        </div>

        <div class="rounded px-3 p-2">
          <p class="font-semibold text-sm">李老师的函数精讲</p>
          <p class="text-xs text-gray-500 my-1">高考重难点解析，如何获取</p>
          <div class="flex items-center text-gray-500 text-xs my-1 justify-between">
            <span>
              <van-icon name="clock-o" /> 2021-06-22
            </span>
          </div>
        </div>
      </div>
      <div class="rounded-md shadow-1">
        <div class="relative">
          <img src="../../../assets/PPT2.png" class="h-28 rounded-md w-full object-cover" alt="" srcset="">
        </div>
        <div class="rounded  px-3 p-2">
          <p class="font-semibold text-sm">你不知道的函数类型</p>
          <p class="text-xs text-gray-500 my-1">高考重难点解析，如何获取</p>
          <div class="flex items-center text-gray-500 text-xs my-1 justify-between">
            <span>
              <van-icon name="clock-o" /> 2021-06-22
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

.van-dropdown-menu__bar {
  border-radius: 12px;
}
</style>
<style lang="css" scoped>
video {
  height: 10rem;
  object-fit: cover;
}

.shadow-1 {
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
}

.icon_tyle {
  position: absolute !important;
  top: 50%;
  z-index: 1;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

<template>
  <div class="h-full w-full p-2">
    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
      <div class="flex flex-col gap-2 p-2  rounded-md items-center shadow-1">
        <img class="h-40 rounded ring-4 ring-orange-600" src="../../../assets/ebboks/smaller1.png" alt="">
        <p class="font-semibold text-sm">决胜高中三年关键期</p>
        <p class="text-xs">张雪峰</p>
      </div>
      <div class="flex flex-col gap-2 p-2 items-center shadow-1">
        <img class="h-40 rounded ring-4 ring-orange-600" src="../../../assets/ebboks/smaller6.png" alt="">
        <p class="font-semibold text-sm">陪孩子走过高中三年</p>
        <p class="text-xs">刘称莲</p>
      </div>
       <div class="flex flex-col gap-2 p-2  rounded-md items-center shadow-1">
        <img class="h-40 rounded ring-4 ring-orange-600" src="../../../assets/ebboks/smaller2.png" alt="">
        <p class="font-semibold text-sm">高中英语常考短语与句型</p>
        <p class="text-xs">新东方考试研究中心</p>
      </div>
      <div class="flex flex-col gap-2 p-2 items-center shadow-1">
        <img class="h-40 rounded ring-4 ring-orange-600" src="../../../assets/ebboks/smaller3.png" alt="">
        <p class="font-semibold text-sm">高中英语词汇词根+联想记忆法：乱序版便携版</p>
        <p class="text-xs">俞敏洪</p>
      </div>
       <div class="flex flex-col gap-2 p-2  rounded-md items-center shadow-1">
        <img class="h-40 rounded ring-4 ring-orange-600" src="../../../assets/ebboks/smaller4.png" alt="">
        <p class="font-semibold text-sm">高中英语优秀论文集(下)</p>
        <p class="text-xs">陶纯恭</p>
      </div>
      <div class="flex flex-col gap-2 p-2 items-center shadow-1">
        <img class="h-40 rounded ring-4 ring-orange-600" src="../../../assets/ebboks/smaller5.png" alt="">
        <p class="font-semibold text-sm">高中化学实验疑难问题探究</p>
        <p class="text-xs">林肃浩</p>
      </div>
       <div class="flex flex-col gap-2 p-2  rounded-md items-center shadow-1">
        <img class="h-40 rounded ring-4 ring-orange-600" src="../../../assets/ebboks/smaller7.png" alt="">
        <p class="font-semibold text-sm">什么是高中物理</p>
        <p class="text-xs">长尾君</p>
      </div>
      <div class="flex flex-col gap-2 p-2 items-center shadow-1">
        <img class="h-40 rounded ring-4 ring-orange-600" src="../../../assets/ebboks/smaller8.png" alt="">
        <p class="font-semibold text-sm">高中文言文精华品鉴</p>
        <p class="text-xs">徐昌才</p>
      </div>
       <div class="flex flex-col gap-2 p-2  rounded-md items-center shadow-1">
        <img class="h-40 rounded ring-4 ring-orange-600" src="../../../assets/ebboks/smaller9.png" alt="">
        <p class="font-semibold text-sm">高中生满分作文1000篇</p>
        <p class="text-xs">周文涛</p>
      </div>
      <div class="flex flex-col gap-2 p-2 items-center shadow-1">
        <img class="h-40 rounded ring-4 ring-orange-600" src="../../../assets/ebboks/smaller10.png" alt="">
        <p class="font-semibold text-sm">高中三年早知道——高中卷(第三版)</p>
        <p class="text-xs">丁晓山</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue"
const props = defineEmits({
  status: {
    type: String,
    default: ''
  }
})
</script>

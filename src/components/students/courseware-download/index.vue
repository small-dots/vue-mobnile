<!--
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-07-22 17:28:14
 * @Description: 
-->
<template>
  <div class="h-full w-full p-2">
    <van-nav-bar
      title="我下载的课件"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="relative flex flex-col gap-3 divide-y">
      <div
        class="flex w-full flex-col"
        v-for="(item, index) in list"
        :key="index"
      >
        <div class="flex w-full gap-2 items-center py-3 px-2">
          <img
            v-if="index % 2 === 0"
            class="h-16 w-24 rounded-md"
            src="../../../assets/ppt1.png"
            alt=""
          />
          <img
            v-if="index % 2 !== 0"
            class="h-16 w-24 rounded-md"
            src="../../../assets/ppt2.png"
            alt=""
          />
          <div class="flex flex-1 flex-col justify-between">
            <p class="text-sm color-g flex-1 article-container">
              {{ item.name }}
            </p>
            <p class="text-xs w-full text-slate-600 truncate flex gap-2">
              下载时间：{{ item.downtime }}
            </p>
          </div>
          <div class="flex items-center gap-1">
            <van-button
              size="mini"
              color="linear-gradient(to right, #ff6034, #ee0a24)"
              @click="show = true"
            >
              删除
            </van-button>
            <van-icon color="#308c89" size="20px" name="more-o" />
          </div>
        </div>
        <div class="text-sm text-gray-600">所属专题：<span class="text-black">{{item.zhuanti}}</span></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const list = ref([
  {
    name: "化学九年级下册第九单元溶液课题2溶解度第一课时",
    qianming: "来感受一个故事吧，不说其他的了",
    downtime: "2021-06-08",
    zhuanti: "化学高中一年级课件",
    follow: 92,
    grade: "高二(1)班",
  },
  {
    name: "集合及其表示方法",
    qianming: "来黑世界，做回自己",
    downtime: "2021-06-08",
    zhuanti: "化学高中一年级课件",
    follow: 92,
    grade: "高二(1)班",
  },
  {
    name: "集合的基本关系",
    qianming: "该用户很懒，没有设置个性签名",
    downtime: "2021-06-08",
    zhuanti: "化学高中一年级课件",
    follow: 92,
    grade: "高二(1)班",
  },
  {
    name: "等式的性质与方程的解集",
    qianming: "该用户很懒，没有设置个性签名",
    downtime: "2021-06-08",
    zhuanti: "化学高中一年级课件",
    follow: 92,
    grade: "高二(1)班",
  },
  {
    name: "一元二次方程的解集及其根与系数的关系",
    qianming: "该用户很懒，没有设置个性签名",
    downtime: "2021-06-08",
    zhuanti: "化学高中一年级课件",
    follow: 92,
    grade: "高二(1)班",
  },
  {
    name: "方程组的解集",
    qianming: "life is moive",
    downtime: "2021-06-08",
    zhuanti: "化学高中一年级课件",
    follow: 92,
    grade: "高二(1)班",
  },
  {
    name: "不等式及其性质",
    qianming: "过去终究是过去，过去的遗憾不能填补",
    downtime: "2021-06-08",
    zhuanti: "化学高中一年级课件",
    follow: 92,
    grade: "高二(1)班",
  },
  {
    name: "函数及其表示方法",
    qianming: "等待没有尽头的希望，终会变成绝望。",
    downtime: "2021-06-08",
    zhuanti: "化学高中一年级课件",
    follow: 92,
    grade: "高二(1)班",
  },
  {
    name: "函数的单调性",
    qianming: "life is moive",
    downtime: "2021-06-08",
    zhuanti: "化学高中一年级课件",
    follow: 92,
    grade: "高二(1)班",
  },
  {
    name: "函数的奇偶性",
    qianming: "过去终究是过去，过去的遗憾不能填补",
    downtime: "2021-06-08",
    zhuanti: "化学高中一年级课件",
    follow: 92,
    grade: "高二(1)班",
  },
  {
    name: "函数与方程、不等式之间的关系",
    qianming: "等待没有尽头的希望，终会变成绝望。",
    downtime: "2021-06-08",
    zhuanti: "化学高中一年级课件",
    follow: 92,
    grade: "高二(1)班",
  },
]);

const onClickLeft = () => history.back();
</script>

<style lang="css" scoped>
.article-container {
  display: -webkit-box;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}
.color-g {
  color: #0a9c8c;
}
</style>

<!--
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-07-13 13:52:59
 * @Description: 
-->
<template>
  <div class="h-full w-full px-3 py-5 bg-slate-50">
    <!-- 人物卡片 -->
    <div
      class="
        flex flex-col
        justify-between
        rounded-md
        gap-4
        bg-white
        shadow-1
        p-3
      "
    >
      <div class="flex items-center gap-3">
        <img
          class="h-14 w-14 rounded-full"
          src="../../assets//lixaniren2.png"
          alt=""
        />
        <span class="font-semibold flex-1"
          >张淑芬
          <span class="text-sm font-semibold text-gray-500 block"
            >17020190205105</span
          >
        </span>
        <van-badge dot>
          <svg
            @click="goMsgs"
            t="1658301388615"
            class="h-6 w-6"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4072"
            width="200"
            height="200"
          >
            <path
              d="M889.828994 749.637494c-1.204099-1.548127-119.205779-166.165631-119.205779-287.435579 0-168.401814-76.202251-254.752898-162.725349-286.919536L607.897867 159.973123c0-52.980346-43.175542-95.983874-95.983874-95.983874S415.930119 107.164791 415.930119 159.973123l0 16.685369c-10.836889 7.912649-16.169326 21.845792-11.868974 35.262893 5.332437 16.857383 23.393919 25.974131 40.251302 20.641693 17.717453-5.676466 36.983034-8.428691 56.936671-8.428691l21.32975 0c115.249454 0 184.055098 89.103309 184.055098 238.239543 0 108.024861 72.933983 235.315303 110.261045 293.456073-57.452713 26.146145-183.023014 76.202251-304.809004 76.202251-121.441962 0-247.356291-50.400134-304.809004-76.546279 37.327062-57.968755 110.089031-184.915169 110.089031-293.112044 0-62.441122 11.524945-114.217369 34.574836-153.952629 8.77272-15.309256 3.612296-34.918864-11.69696-43.691584-15.48127-8.944734-34.918864-3.612296-43.691584 11.69696-28.554342 49.540064-43.175542 112.1532-43.175542 185.947253 0 121.269948-118.00168 285.199395-119.205779 286.919536-5.332437 7.568621-7.396607 16.857383-5.332437 25.974131 2.064169 8.944734 7.912649 16.685369 15.997312 20.985721 5.676466 3.096254 107.336805 57.280699 233.423148 84.458928 21.32975 66.397447 73.966068 111.29313 133.654964 111.29313s112.325214-44.895683 133.654964-111.29313c126.086343-27.178229 227.746682-81.018646 233.423148-83.942886 8.084663-4.472367 13.933143-12.040988 16.169326-20.985721C897.225601 766.666891 895.333445 757.206115 889.828994 749.637494zM501.249118 159.973123c-7.224593 0-14.277171 1.032085-21.32975 1.548127L479.919368 159.973123c0-17.545439 14.449185-31.994625 31.994625-31.994625 17.545439 0 31.994625 14.449185 31.994625 31.994625l0 0.860071c-7.224593-0.516042-14.277171-0.860071-21.32975-0.860071L501.249118 159.973123zM511.913993 928.016126c-22.361834 0-43.175542-13.417101-57.968755-35.262893 19.26558 2.064169 38.531161 3.268268 57.968755 3.268268s38.875189-1.376113 57.968755-3.268268C555.089535 914.599026 534.275827 928.016126 511.913993 928.016126z"
              p-id="4073"
              data-spm-anchor-id="a313x.7781069.0.i0"
              class="selected"
              fill="#000000"
            ></path>
          </svg>
        </van-badge>
      </div>
      <div class="flex items-center justify-between px-2">
        <div
          class="flex flex-col items-center justify-center"
          @click="goFollow"
        >
          <span class="font-f-1 text-xl">32</span>
          <span class="text-xs text-gray-500">关注</span>
        </div>
        <div class="flex flex-col items-center justify-center" @click="goFans">
          <span class="font-f-1 text-xl">12</span>
          <span class="text-xs text-gray-500">粉丝</span>
        </div>
        <div
          class="flex flex-col items-center justify-center"
          @click="goIntergal"
        >
          <span class="font-f-1 text-xl">451</span>
          <span class="text-xs text-gray-500">积分</span>
        </div>
        <div
          class="flex flex-col items-center justify-center"
          @click="goIntergal"
        >
          <span class="font-f-1 text-xl">
            <van-icon name="shopping-cart-o" />
          </span>
          <span class="text-xs text-gray-500">积分商城</span>
        </div>
      </div>
    </div>
    <!-- 快捷栏工具 -->
    <div
      class="flex justify-between rounded-md bg-white shadow-1 py-3 px-5 mt-3"
    >
      <div class="flex flex-col items-center" @click="goChat">
        <van-badge :content="4">
          <svg
            t="1658234986383"
            class="h-10 w-10"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3337"
            width="200"
            height="200"
          >
            <path
              d="M802.6 752.1H240v-411h621v352.6c0 32.3-26.2 58.4-58.4 58.4z"
              fill="#25B195"
              p-id="3338"
            ></path>
            <path
              d="M800.8 263.7H236.1c-42.4 0-76.6 34.3-76.6 74.6v344.9c0 40.3 34.3 74.6 74.6 74.6h566.7c40.3 0 74.6-34.3 74.6-74.6V338.3c2-40.3-32.3-74.6-74.6-74.6z m46.4 74.6v344.9c0 6-2 12.1-4 18.2L647.5 505.7l191.6-191.6c4 8.1 8.1 16.1 8.1 24.2z m-46.4-44.4c6.1 0 10.1 2 16.1 2h-2L550.7 562.2c-16.1 16.1-46.4 16.1-64.5 0L222 298h-2c4-2 10.1-2 16.1-2l564.7-2.1zM193.7 701.3c-2-6.1-4-10.1-4-16.1V338.3c0-8.1 2-18.2 8.1-24.2l191.6 191.6-195.7 195.6z m42.4 28.3c-8.1 0-14.1-2-22.2-6L409.5 528l56.5 56.5c14.1 14.1 32.3 22.2 52.4 22.2 20.2 0 38.3-8.1 52.4-22.2l54.5-54.4 195.6 195.6c-6.1 4-14.1 6.1-22.2 6.1H236.1v-2.2z m0 0"
              fill="#595857"
              p-id="3339"
            ></path>
          </svg> </van-badge
        ><span class="text-xs">私信</span>
      </div>
      <div class="flex flex-col items-center">
        <span>
          <svg
            t="1658235036092"
            class="h-10 w-10"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3492"
            width="200"
            height="200"
          >
            <path
              d="M298 518.9c0 133.7 108.4 242.5 242.5 242.5 43.5 0 84.4-11.5 119.5-31.5l68 11.1c8.4 1.3 17.3-1.3 23.5-7.6 4.9-4.9 8-12 8-19.1 0-1.3 0-3.1-0.4-4.4L748 643.7c22.2-36.4 35.1-79.1 35.1-124.8 0-133.7-108.4-242.5-242.5-242.5-133.8 0-242.6 108.4-242.6 242.5"
              fill="#25B195"
              p-id="3493"
            ></path>
            <path
              d="M481.9 487.9c0 8.3 3.6 16.6 9.3 22.3 5.7 5.7 14 9.3 22.3 9.3s16.6-3.6 22.3-9.3c5.7-5.7 9.3-14 9.3-22.3s-3.6-16.6-9.3-22.3c-5.7-5.7-14-9.3-22.3-9.3s-16.6 3.6-22.3 9.3c-5.7 5.8-9.3 14.1-9.3 22.3"
              fill="#E9CB5A"
              p-id="3494"
            ></path>
            <path
              d="M647.1 526.3c-10.4 0-20.2-4.1-27.4-11.4s-11.4-17.1-11.4-27.4c0-10.4 4.1-20.2 11.4-27.4 7.3-7.3 17.1-11.4 27.4-11.4 10.4 0 20.2 4.1 27.4 11.4 7.3 7.3 11.4 17.1 11.4 27.4 0 10.4-4.1 20.2-11.4 27.4-6.7 7.7-17.1 11.4-27.4 11.4z m-134.1 0c-10.4 0-20.2-4.1-27.4-11.4-7.3-7.3-11.4-17.1-11.4-27.4 0-10.4 4.1-20.2 11.4-27.4 7.3-7.3 17.1-11.4 27.4-11.4s20.2 4.1 27.4 11.4c7.3 7.3 11.4 17.1 11.4 27.4 0 10.4-4.1 20.2-11.4 27.4-7.2 7.7-17.6 11.4-27.4 11.4z m-134.7 0c-10.4 0-20.2-4.1-27.4-11.4s-11.4-17.1-11.4-27.4c0-10.4 4.1-20.2 11.4-27.4 7.3-7.3 17.1-11.4 27.4-11.4 10.4 0 20.2 4.1 27.4 11.4 7.3 7.3 11.4 17.1 11.4 27.4 0 10.4-4.1 20.2-11.4 27.4-6.7 7.7-17 11.4-27.4 11.4z m0 0"
              fill="#595857"
              p-id="3495"
            ></path>
            <path
              d="M513.5 790.4c-166.7 0-302.4-135.7-302.4-302.4s135.7-302.4 302.4-302.4S815.9 321.3 815.9 488c0 52.3-14 103.6-39.9 149.1l11.9 69.9c0.5 2.6 0.5 5.7 0.5 8.3 0 13.5-5.2 26.4-15 36.2-11.4 11.4-28.4 17.1-44.5 14.5l-72.5-11.9c-44 23.3-93.2 36.3-142.9 36.3z m0-565.5c-145 0-263.1 118.1-263.1 263.1 0 145 118.1 263.1 263.1 263.1 45.1 0 90.1-11.9 129.5-34.7l6.2-3.6 86.5 14.5c4.1 0.5 7.8-0.5 10.4-3.1 2.1-2.1 3.6-5.2 3.6-8.3v-2.1l-14.5-84.4 3.6-6.2c24.9-40.9 37.8-88 37.8-135.7-0.1-144.6-118.1-262.6-263.1-262.6z m0 0"
              fill="#595857"
              p-id="3496"
            ></path>
          </svg> </span
        ><span class="text-xs">评论</span>
      </div>
      <div class="flex flex-col items-center" @click="goCollection">
        <span>
          <svg
            t="1658235059830"
            class="h-10 w-10"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3805"
            width="200"
            height="200"
          >
            <path
              d="M583 288.2l51.9 105.1c5.9 4.1 23.6-2.7 35.4-1l108 22.7c29.6 4.3 41.2 55.7 19.8 76.6l-83.9 81.8c-8.5 8.3-12.4 20.2-10.4 32l19.8 115.5c5.1 29.5-20.1 86.7-46.6 72.8l-103.3-46c-10.5-5.5-42.8-34.2-53.3-28.7l-90.2 39.9c-26.5 13.9-57.4-8.6-52.4-38.1l19.8-115.5c2-11.7-1.9-23.7-10.4-32l-83.9-81.8c-21.4-20.9-9.6-57.3 20-61.6l116-16.9c11.8-1.7 21.9-9.1 27.2-19.8l51.9-105.1c13.1-26.7 51.4-26.7 64.6 0.1z"
              fill="#25B195"
              p-id="3806"
            ></path>
            <path
              d="M348.9 817.5c-12.7 0-25.3-4-36-11.8-19-13.8-28.4-36.8-24.4-60L312 608.5c1.4-7.9-1.3-16-7-21.6l-99.7-97.2c-16.9-16.4-22.8-40.5-15.5-62.9 7.3-22.4 26.3-38.4 49.5-41.8L377 365c7.9-1.2 14.8-6.1 18.3-13.3l61.6-124.8c10.4-21.1 31.5-34.2 55-34.2s44.6 13.1 55 34.2l61.6 124.8c3.6 7.2 10.4 12.2 18.3 13.3l137.7 20c23.3 3.4 42.3 19.4 49.5 41.8s1.3 46.5-15.5 62.9l-99.7 97.2c-5.7 5.6-8.4 13.7-7 21.6l23.5 137.2c4 23.2-5.4 46.2-24.4 60-19 13.8-43.8 15.6-64.6 4.7l-123.2-64.8c-7.1-3.7-15.6-3.7-22.7 0l-123.2 64.8c-8.7 4.8-18.5 7.1-28.3 7.1z m163.2-111.7c9.8 0 19.6 2.4 28.6 7.1l123.2 64.8c8.4 4.4 18 3.7 25.7-1.9 7.7-5.6 11.3-14.5 9.7-23.8l-23.5-137.2c-3.4-19.9 3.2-40.2 17.6-54.3l99.7-97.2c6.8-6.6 9.1-16 6.2-25-2.9-9-10.3-15.2-19.7-16.6l-137.7-20c-20-2.9-37.3-15.5-46.2-33.6l-61.6-124.8c-4.2-8.5-12.4-13.6-21.9-13.6-9.5 0-17.7 5.1-21.9 13.6l-61.6 124.8c-8.9 18.1-26.2 30.7-46.2 33.6l-137.7 20c-9.4 1.4-16.7 7.6-19.7 16.6-2.9 9-0.6 18.4 6.2 25l99.7 97.2c14.5 14.1 21.1 34.4 17.6 54.3L325 752c-1.6 9.3 2 18.3 9.7 23.8 7.7 5.6 17.3 6.3 25.7 1.9l123.2-64.8c8.9-4.7 18.7-7.1 28.5-7.1z"
              fill="#595857"
              p-id="3807"
            ></path>
          </svg> </span
        ><span class="text-xs">收藏</span>
      </div>
      <div class="flex flex-col items-center">
        <span>
          <svg
            t="1658235048963"
            class="h-10 w-10"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3649"
            width="200"
            height="200"
          >
            <path
              d="M535.8 227.5c-123.9 0-222.1 101.3-222.1 229 0 44 12.8 79.3 29.9 114.5 0 4.4 170.9 264.2 170.9 264.2 4.3 4.4 12.8 8.8 21.4 8.8 8.5 0 17.1-4.4 21.4-8.8l170.9-259.8c21.4-35.2 34.2-74.9 34.2-118.9-0.2-127.8-102.7-229-226.6-229z"
              fill="#25B195"
              p-id="3650"
            ></path>
            <path
              d="M510.9 902.5c-14.5 0-30.2-6.4-40.1-16.2l-1.4-1.4-1.1-1.6c-0.5-0.8-51.8-76.4-102.4-151.7-29.8-44.3-53.5-79.8-70.5-105.5-10.1-15.3-18-27.4-23.4-35.7-5.7-9-8.9-13.9-10.5-17.8-19.5-39.2-37.4-83.4-37.4-141 0-77.3 29.6-149.5 83.4-203.3s126-83.4 203.3-83.4c39.1 0 77 7.5 112.9 22.3 34.7 14.3 66 34.8 92.8 61 55.6 54.1 86.2 126.4 86.2 203.5 0 52.1-14.8 102.3-44.1 149.1l-0.4 0.6-205.9 303.5-1.4 1.4c-9.8 9.8-25.6 16.2-40 16.2zM500.7 858c2.1 1.5 6.3 3.4 10.1 3.4s8-1.9 10.1-3.4L724 558.4c25-40.1 37.6-82.8 37.6-127.1 0-135.5-112.5-245.7-250.9-245.7-137.8 0-245.7 107.9-245.7 245.7 0 49.7 16.2 89 33.7 124l1.1 2.3c12.9 22 125.5 189.1 200.9 300.4z"
              fill="#666767"
              p-id="3651"
            ></path>
            <path
              d="M514.5 631.5C408.4 631.5 322 545.1 322 439s86.4-192.5 192.5-192.5S707 332.9 707 439s-86.4 192.5-192.5 192.5z m0-344C431 287.5 363 355.5 363 439s68 151.5 151.5 151.5S666 522.5 666 439s-68-151.5-151.5-151.5z"
              fill="#595857"
              p-id="3652"
            ></path>
          </svg> </span
        ><span class="text-xs">足迹</span>
      </div>
    </div>
    <!-- 其他导航 -->
    <div
      class="
        flex
        justify-between
        flex-col
        rounded-md
        bg-white
        shadow-1
        py-3
        mt-3
      "
    >
      <van-cell title="我的选课" icon="apps-o" is-link to="course-choose" />
      <van-cell
        title="我的课件下载"
        icon="tv-o"
        is-link
        to="courseware-download"
      />
      <van-cell
        title="我的提问"
        icon="question-o"
        is-link
        to="student-put-question"
      />
      <van-cell
        title="我的成绩单"
        icon="orders-o"
        is-link
        to="student-class-reqport"
      />
      <van-cell title="综合素质评价" icon="shield-o" is-link to="index" />
      <van-cell title="我的习题" icon="records" is-link to="student-exercise" />
      <van-cell
        title="我的课程表"
        icon="calendar-o"
        is-link
        to="class-schedule-card"
      />
      <van-cell
        title="我的社团"
        icon="friends-o"
        is-link
        to="student-association"
      />
      <van-cell
        title="我的成长"
        icon="chart-trending-o"
        is-link
        to="student-grow"
      />
      <van-cell
        title="我的阅读"
        icon="newspaper-o"
        is-link
        to="student-reading"
      />
      <van-cell title="资料与账户" icon="setting-o" is-link to="student-info" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const goFollow = () => {
  router.push({ path: "follow-list-student" });
};
const goFans = () => {
  router.push({ path: "fans-list-student" });
};
const goCollection = () => {
  router.push({ path: "collection" });
};
/* 我的消息 */
const goMsgs = () => {
  router.push({ path: "my-message" });
};
const goIntergal = () => {
  router.push({ path: "intergal" });
};
const goChat = () => {
  router.push({ path: "/student-chat" });
};
</script>
<style lang="css" scoped>
.shadow-1 {
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
}

.font-f-1 {
  font-family: "sfb";
}
</style>

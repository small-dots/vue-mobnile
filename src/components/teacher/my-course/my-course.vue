<!--
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-07-14 11:50:17
 * @Description: 
-->
<template>
  <div class="h-full">
    <div class="flex flex-nowrap gap-2 px-3">
      <el-input
        placeholder="请选择日期"
        v-model="date"
        @click="show = true"
      ></el-input>
      <el-input placeholder="请输入备课名称"></el-input>
      <van-calendar v-model:show="show" type="range" @confirm="onConfirm" />
      <van-button color="linear-gradient(to right, #ff6034, #ee0a24)">
        搜索
      </van-button>
    </div>
    <div
      class="flex flex-nowrap gap-6 justify-start items-center py-2 pl-2 mt-2"
    >
      <span
        class="text-grays"
        :class="{ activeed: curr === '1' }"
        @click="curr = '1'"
        >高一</span
      >
      <span
        class="text-grays"
        :class="{ activeed: curr === '2' }"
        @click="curr = '2'"
        >高二</span
      >
      <span
        class="text-grays"
        :class="{ activeed: curr === '3' }"
        @click="curr = '3'"
        >高三</span
      >
    </div>
    <van-divider />
    <div class="px-2 pb-20">
      <div
        class="p-2 my-3 shadow-md bg-p rounded-xl"
        v-for="(item, index) in corses"
        :key="index"
      >
        <p>{{ item.title }}</p>
        <div class="text-sm flex gap-5 my-2">
          <div>
            <span class="text-gray-500">科目：</span>
            <span>{{ item.km }}</span>
          </div>
          <div>
            <span class="text-gray-500">年级：</span>
            <span>{{ item.nj }}</span>
          </div>
          <div>
            <span class="text-gray-500">备课时间：</span>
            <span>{{ item.date }}</span>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-3 text-sm">
            <svg
              t="1657808419377"
              class="h-4 w-4 inline-block align-middle"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1381"
            >
              <path
                d="M919.893333 209.92H529.066667c-10.24 0-20.48-5.12-27.306667-11.946667l-104.106667-124.586666c-6.826667-8.533333-17.066667-11.946667-27.306666-11.946667H104.106667C66.56 59.733333 34.133333 90.453333 34.133333 129.706667v764.586666c0 39.253333 32.426667 69.973333 69.973334 69.973334h814.08c39.253333 0 69.973333-32.426667 69.973333-69.973334V281.6c1.706667-39.253333-30.72-71.68-68.266667-71.68zM713.386667 549.546667l-204.8 204.8c-25.6 25.6-59.733333 39.253333-93.866667 39.253333s-68.266667-13.653333-93.866667-39.253333c-25.6-25.6-39.253333-58.026667-39.253333-93.866667s13.653333-68.266667 39.253333-93.866667l170.666667-170.666666c11.946667-11.946667 29.013333-11.946667 40.96 0s11.946667 29.013333 0 40.96l-170.666667 170.666666c-13.653333 13.653333-22.186667 32.426667-22.186666 52.906667 0 20.48 8.533333 39.253333 22.186666 52.906667 29.013333 29.013333 76.8 29.013333 105.813334 0l203.093333-203.093334c15.36-15.36 15.36-40.96 0-58.026666-15.36-15.36-42.666667-15.36-58.026667 0L411.306667 655.36c-1.706667 1.706667-1.706667 6.826667 0 8.533333 1.706667 1.706667 6.826667 1.706667 8.533333 0l170.666667-170.666666c11.946667-11.946667 29.013333-11.946667 40.96 0s11.946667 29.013333 0 40.96l-170.666667 170.666666c-11.946667 11.946667-27.306667 18.773333-44.373333 18.773334s-32.426667-6.826667-44.373334-18.773334c-11.946667-11.946667-18.773333-27.306667-18.773333-44.373333s6.826667-32.426667 18.773333-44.373333l203.093334-203.093334c18.773333-18.773333 42.666667-29.013333 69.973333-29.013333 25.6 0 51.2 10.24 69.973333 29.013333 35.84 35.84 35.84 98.986667-1.706666 136.533334z"
                fill="#009688"
                p-id="1382"
              ></path>
            </svg>
            备课课件
            <span class="text-green-800" @click="viewDatailCourse">查看</span>
          </div>
          <div class="flex gap-1">
            <van-button
              round
              size="small"
              color="#7232dd"
              type="primary"
              @click="viewDetail"
              >查看详情</van-button
            >
            <van-button
              round
              size="small"
              color="linear-gradient(to right, #ff6034, #ee0a24)"
              type="primary"
              @click="del"
            >
              删除
            </van-button>
          </div>
        </div>
      </div>
    </div>
    <van-popup
      v-model:show="popshow"
      closeable
      round
      position="bottom"
      :style="{ height: '80%' }"
    >
      <div>
        <p class="text-center text-lg my-2">课件详情</p>
        <div class="bg-gray-100 pt-3">
          <div class="bg-white px-2">
            <p class="text-lg">《就一元二次函数的解法》</p>
            <div class="text-sm flex gap-5 my-2">
              <div>
                <span class="text-gray-500">文件大小：</span>
                <span>27.2M</span>
              </div>
              <div>
                <span class="text-gray-500">科目：</span>
                <span>数学</span>
              </div>
              <div>
                <span class="text-gray-500">年级：</span>
                <span>高一</span>
              </div>
            </div>
            <div class="text-sm flex gap-5 my-2">
              <div>
                <span class="text-gray-500">备课时间：</span>
                <span>2021-12-09 12:43:09</span>
              </div>
            </div>
            <van-divider />
            <div class="p-2">
              <p class="text-gray-600 pb-3">一元二次函数的表达式</p>
              <img
                src="../../../assets/Snipaste_2022-07-14_23-04-07.png"
                alt=""
                srcset=""
              />
              <p class="pt-2 pb-1">1.顶点式</p>
              <p>
                y=a(x-h)²+k（a≠0，a、h、k为常数），顶点坐标为（h,k)，对称轴为直线x=h，顶点的位置特征和图像的开口方向与函数y=ax²的图像相同，当x=h时，y最大（小）值=k。
              </p>
              <p class="pt-2 pb-1">2.交点式</p>
              <p>
                y=a(x-x₁)(x-x₂)
                [仅限于与x轴即y=0有交点时的抛物线，即b²-4ac＞0],函数与图像交于（x₁，0)和(x₂，0)
              </p>
              <p class="pt-2 pb-1">3.一般式</p>
              <p>y=aX²+bX+c=0（a≠0）（a、b、c是常数）</p>
            </div>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Notify } from "vant";
import { useRouter } from "vue-router";

const router = useRouter();
const show = ref(false);
const date = ref("");
const curr = ref("1");
const popshow = ref(false);
const corses = ref([
  { title: "一元二次函数的解法", km: "语文", nj: "高一", date: "2022-01-22" },
  {
    title:
      "等边三角形中，深入探究边和叫之间的关系，（学生自己动手了解）辅助做题",
    km: "语文",
    nj: "高一",
    date: "2022-01-22",
  },
  { title: "一元二次函数的解法", km: "语文", nj: "高一", date: "2022-01-22" },
  {
    title:
      "等边三角形中，深入探究边和叫之间的关系，（学生自己动手了解）辅助做题",
    km: "语文",
    nj: "高一",
    date: "2022-01-22",
  },
  { title: "一元二次函数的解法", km: "语文", nj: "高一", date: "2022-01-22" },
  {
    title:
      "等边三角形中，深入探究边和叫之间的关系，（学生自己动手了解）辅助做题",
    km: "语文",
    nj: "高一",
    date: "2022-01-22",
  },
  { title: "一元二次函数的解法", km: "语文", nj: "高一", date: "2022-01-22" },
  {
    title:
      "等边三角形中，深入探究边和叫之间的关系，（学生自己动手了解）辅助做题",
    km: "语文",
    nj: "高一",
    date: "2022-01-22",
  },
]);

const formatDate = (date) =>
  `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
const onConfirm = (values) => {
  const [start, end] = values;
  console.log(start);
  show.value = false;
  date.value = `${formatDate(start)} - ${formatDate(end)}`;
};

/* 查看详情 */
const viewDetail = () => {
  router.push({path:'/my-course-detail'})
};
const viewDatailCourse = () => {
  popshow.value = true;
};
const del = () => {
  Notify({ type: "success", message: "已删除课件" });
};
</script>
<style scoped>
.text-grays {
  color: #b7b7ba;
}

.activeed {
  transition: all 0.3s;
  color: #000;
}

.bg-p {
  background: #f9fbfc;
}
</style>

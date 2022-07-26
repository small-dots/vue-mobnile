<!--
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-07-15 16:22:03
 * @Description: 课程详情
-->
<template>
  <div class="h-full w-full p-2">
    <van-nav-bar
      title="课程详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div>
      <p class="text-center text-lg font-semibold">一元二次函数的解法研究</p>
      <div class="text-sm flex gap-5 my-2">
        <div>
          <span class="text-gray-500">科目：</span>
          <span>数学</span>
        </div>
        <div>
          <span class="text-gray-500">年级：</span>
          <span>高一</span>
        </div>
        <div>
          <span class="text-gray-500">备课时间：</span>
          <span>2021-08-12</span>
        </div>
      </div>
    </div>
    <van-divider />
    <div>
      <div class="text-sm leading-relaxed">
        <p class="title"><span></span> 教学目标</p>
        <p>
          <span class="block m-1">（一）教学知识点 </span>
          1、能够利用二次函数的图象求一元二次方程的近似根. 2.进一步发展估算能力.
          <span class="block m-1"> （二）能力训练要求 </span>
          1、经历用图象法求一元二次方程的近似根的过程，获得用图象法求方程近似根的体验.
          2、利用图象法求一元二次方程的近似根，重要的是让学生懂得这种求解方程的思路，体验数形结合思想.
          <span class="block m-1">（三）情感与价值观要求 </span>
          通过利用二次函数的图象估计一元二次方程的根，进一步掌握二次函数图象与x轴的交点坐标和一元二次方程的根的关系，提高估算能力.
        </p>
        <p class="title"><span></span> 教学重点</p>
        <p>
          <ol>1、经历探索二次函数与一元二次方程的关系的过程，体会方程与函数之间的联系</ol>
          <ol>2、能够利用二次函数的图象求一元二次方程的近似根</ol>
        </p>
        <p class="title"> <span></span> 教学难点</p>
        <p><ol>利用二次函数的图象求一元二次方程的近似根</ol></p>
        <p class="title"><span></span> 教学方法</p>
        <p><ol>学生合作交流学习法</ol></p>
      </div>
    </div>
  </div>
</template>
<script setup>
const onClickLeft = () => history.back();
</script>
<style lang="css" scoped>
.title {
  font-size: 18px;
  font-weight: 500;
  margin: 0.5rem 0;
}
.title p {
  font-size: 14px;
}
.title span {
  content: "";
  display: inline-block;
  width: 0.3rem;
  height: 0.8rem;
  background: #806bf6;
  border-radius: 20px;
}
</style>

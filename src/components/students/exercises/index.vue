<!--
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-07-21 14:06:23
 * @Description: 
-->
<template>
  <div class="w-full h-full">
    <van-nav-bar
      title="我的习题"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-tabs v-model:active="active" animated sticky>
      <van-tab
        v-for="(item, index) in ['我的习题', '习题推荐']"
        :title="item"
        :key="index"
      >
        <div class="p-2">
          <myExercise v-if="index === 0" /> 
          <exercises v-if="index === 1" />
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script setup>
import myExercise from "./my-exercise.vue";
import exercises from "./exercises.vue";
const onClickLeft = () => history.back();
</script>


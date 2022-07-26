<!--
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-07-20 17:30:06
 * @Description: 
-->
<template>
  <div class="w-full h-full">
    <van-nav-bar
      title="我的提问"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-tabs v-model:active="active" animated sticky>
      <van-tab
        v-for="(item, index) in ['我的提问', '我的回复']"
        :title="item"
        :key="index"
      >
        <div class="p-2">
          <question v-if="index === 0" /> <replay v-if="index === 1" />
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script setup>
import question from "./my-questions.vue";
import replay from "./my-replay.vue";
const onClickLeft = () => history.back();
</script>

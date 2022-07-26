<!--
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-07-21 16:19:32
 * @Description: 
-->
<template>
  <div class="w-full h-full">
    <van-nav-bar
      title="我的社团"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-tabs v-model:active="active" animated sticky>
      <van-tab
        v-for="(item, index) in ['社团活动', '我的报名']"
        :title="item"
        :key="index"
      >
        <div class="p-2">
          <association v-if="index === 0" /> 
          <associationSq v-if="index === 1" />
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script setup>
import association from "./associations.vue";
import associationSq from "./association-sq.vue";
const onClickLeft = () => history.back();
</script>


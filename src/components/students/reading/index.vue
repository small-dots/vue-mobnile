<template>
  <div class="w-full h-full">
    <van-nav-bar title="我的成长" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-tabs v-model:active="active" animated sticky @click-tab="onClickTab">
      <van-tab v-for="(item, index) in ['全部阅读', '正在阅读', '阅读结束']" :title="item" :key="index">
        <div class="p-2">
          <readList />
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script setup>
import { ref } from "vue"
import readList from "./read-list.vue"
const active = ref('全部阅读')
const current = ref('全部阅读')
const onClickLeft = () => history.back();
const onClickTab = (title) => {
  current.value = title
}
</script>

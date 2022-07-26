<template>
  <div class="w-full h-full">
    <van-nav-bar title="我的成长" left-text="返回" left-arrow @click-tab="onClickTab" @click-left="onClickLeft" />
    <van-tabs v-model:active="active" animated sticky>
      <van-tab v-for="(item, index) in ['成长故事', '我的奖罚', '我的证书']" :title="item" :key="index">
        <div class="p-2">
          <growGS v-if="index === 0" />
          <growJF v-if="index === 1" />
          <certificates v-if="index === 2" />
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script setup>
import { ref } from "vue"
import growGS from "./story.vue"
import growJF from "./rewardPunishment.vue"
import certificates from "./certificates.vue"
const active = ref('成长故事')

const current = ref('成长故事')
const onClickLeft = () => history.back();
const onClickTab = (title) => {
  current.value = title
}
</script>

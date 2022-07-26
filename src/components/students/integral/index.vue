<template>
  <div class="w-full h-full">
    <van-nav-bar title="我的积分" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-tabs v-model:active="active" animated sticky @click-tab="onClickTab">
      <van-tab v-for="(item, index) in ['积分商城', '已商品兑换']" :title="item" :key="index">
        <div class="p-2">
          <intergalmall v-if="index===0"/>
          <order v-if="index===1"/>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script setup>
import { ref } from "vue"
import intergalmall from "./Integralmall.vue"
import order from "./order.vue";
const active = ref('积分商城')
const current = ref('积分商城')
const onClickLeft = () => history.back();
const onClickTab = (title) => {
  current.value = title
}
</script>

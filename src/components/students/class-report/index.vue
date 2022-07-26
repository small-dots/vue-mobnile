<template>
  <div class="w-full h-full">
    <van-nav-bar title="我的成绩单" left-text="返回" left-arrow @click-left="onClickLeft" />
    <report />
  </div>
</template>

<script setup>
import report from "../../child/report/index.vue"
const onClickLeft = () => history.back();

</script>

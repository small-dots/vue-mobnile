<!--
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-07-05 13:49:00
 * @Description: 
-->
<template>
  <div class="h-full overflow-auto bg-clolrs p-3">
    <div class="bg-white rounded-md px-2">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-divider />
        <van-steps direction="vertical" :active="0">
          <van-step v-for="item in list" :key="item.id">
            <h3>{{ item.label }}</h3>
            <van-tag v-if="item.type === 5" type="success">电子书</van-tag>
            <van-tag v-if="item.type === 3" type="danger">视频</van-tag>
            <van-tag v-if="item.type === 4" type="primary">试卷</van-tag>
            <p>{{ item.time }}</p>
          </van-step>
        </van-steps>
      </van-list>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const list = ref([]);
const loading = ref(false);
const finished = ref(false);
const listss = ref([
  "查看了胡晓晓的个人主页",
  "解答“函数最优解“",
  "与王中天聊天,时长2小时3分钟",
  "观看视屏”最美题解“",
  "作答习题”期末试卷“",
  "浏览电子书城，阅读《海底十万里》",
  "修改个人信息【电话号变更为：15812346587】【家庭住址变更为：甘肃省陇南市】",
]);
const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    for (let i = 0; i < 7; i++) {
      list.value.push({
        id: list.value.length + 1,
        label: listss.value[i],
        type: i,
        time: `0${Math.floor(Math.random() * 10 + 1)}-21 ${Math.floor(
          Math.random() * 24
        )}:${Math.floor(Math.random() * 60)}`,
      });
    }

    // 加载状态结束
    loading.value = false;

    // 数据全部加载完成
    if (list.value.length >= 10) {
      finished.value = true;
    }
  }, 1000);
};
</script>
<style scoped>
.bg-clolrs {
  background: #e8e7e7;
}

.bgs {
  background: #fd5b43;
}

.label {
  flex: 10rem 0 0;
}

.scrolls {
  height: 100%;
  overflow: auto;
}
</style>

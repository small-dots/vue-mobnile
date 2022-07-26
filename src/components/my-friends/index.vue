<!--
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-07-19 11:08:29
 * @Description: 
-->
<template>
  <div>
    <van-nav-bar
      title="我的联系人"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="p-3">
      <van-search v-model="value" placeholder="请输入搜索关键词" />
<van-divider />

      <div class="flex flex-nowrap flex-col gap-3">
        <div
          class="flex flex-nowrap shadow-1 py-2 px-3 rounded-md items-center gap-2"
          v-for="(item, index) in list"
          :key="index"
        >
          <div>
            <img
              class="h-10 w-10 rounded-full"
              src="../../assets//lianxiren.png"
              alt=""
            />
          </div>
          <div class="flex flex-col justify-between">
            <p class="font-semibold text-gray-600">{{ item.name }}</p>
            <p class="text-sm text-gray-600">{{ item.tel }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Toast } from "vant";

const list = ref([
  {
    tel: "13000000000",
    name: "张权贵",
    index: "A",
  },
  {
    tel: "15098762832",
    name: "胡美丽",
    index: "B",
  },
  {
    tel: "13109876153",
    name: "张主任",
    index: "C",
  },
  {
    tel: "18971237931",
    name: "王副校长",
    index: "D",
  },
  {
    tel: "13000000000",
    name: "张权贵",
    index: "E",
  },
  {
    tel: "15098762832",
    name: "胡美丽",
    index: "F",
  },
  {
    tel: "13109876153",
    name: "张主任",
    index: "G",
  },
  {
    tel: "18971237931",
    name: "王副校长",
    index: "H",
  },
]);
const onEdit = () => {
  Toast("编辑");
};
const onClickLeft = () => history.back();
</script>
<style lang="css" scoped>
.shadow-1 {
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
}
</style>

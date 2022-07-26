<!--
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-07-22 16:30:33
 * @Description: 
-->
<template>
  <div class="h-full w-full">
    <div class="p-3 grid gap-2 divide-y  divide-slate-100">
      <div
        v-for="(item, index) in addresslist"
        :key="index"
        class="flex items-center justify-between"
      >
        <div class="flex flex-col gap-1 mt-2">
          <div class="flex items-center gap-2">
            <span class="font-semibold">{{ item.user }}</span>
            <span class="font-semibold text-sm">{{ item.phone }}</span>
            <span
              v-if="item.default"
              class="text-sm px-1 ring-1 ring-blue-500 text-blue-600"
              >{{ item.default ? "默认" : "" }}</span
            >
          </div>
          <div>
            <p class="text-sm">{{ item.address }}</p>
          </div>
        </div>
        <div>
          <svg
            @click="onClickRight"
            class="h-4 w-4"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            data-v-78e17ca8=""
          >
            <path
              d="m199.04 672.64 193.984 112 224-387.968-193.92-112-224 388.032zm-23.872 60.16 32.896 148.288 144.896-45.696L175.168 732.8zM455.04 229.248l193.92 112 56.704-98.112-193.984-112-56.64 98.112zM104.32 708.8l384-665.024 304.768 175.936L409.152 884.8h.064l-248.448 78.336L104.32 708.8zm384 254.272v-64h448v64h-448z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <div class="mt-2"><van-button round block type="primary" @click="onClickRight">新增地址</van-button></div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const addresslist = ref([
  {
    user: "张淑芬",
    phone: "15509672654",
    default: true,
    address: "甘肃省 陇南市 东城区 陇南市地址中学门口",
  },
  {
    user: "张淑芬",
    phone: "15509672654",
    default: false,
    address: "甘肃省 陇南市 东城区 天华街12号",
  },
  {
    user: "张淑芬",
    phone: "15509672654",
    default: false,
    address: "甘肃省 陇南市 东城区 天裕小区12号楼3单元1902",
  },
]);
const onClickRight = () => {
  router.push({ path: "/add-address" });
};
</script>

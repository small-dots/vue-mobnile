<!--
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-07-22 14:19:01
 * @Description: 
-->
<template>
  <div class="w-full h-full">
    <div>
      <van-nav-bar
        title="我的私信"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
      <div class="flex flex-col gap-6 w-full p-3 mt-2">
        <div v-for="(item, index) in list" :key="index">
          <div class="flex gap-3 items-center w-full">
            <img
              class="h-14 w-14 rounded-full"
              src="../../../assets/avator-s.png"
              alt=""
            />
            <div
              class="flex flex-col flex-1 gap-1 justify-between h-full"
              @click="open(item)"
            >
              <p class="font-semibold flex items-center justify-between w-full">
                <span class="flex-1">{{ item.name }} </span
                ><span class="color-g font-normal text-sm">{{
                  item.time
                }}</span>
              </p>
              <p class="flex items-center justify-betwee color-g-1">
                <span class="flex-1 truncate">{{ item.content[0] }}</span>
                <span
                  v-if="item.num"
                  class="
                    bg-r
                    rounded-full
                    text-white
                    inline-flex
                    items-center
                    justify-center
                    h-3
                    w-3
                    text-xs
                    p-2.5
                  "
                  >{{ item.num }}</span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-chat
      :isopenChat="isopenChat"
      :rowData="row"
      @close="isopenChat = false"
    />
  </div>
</template>
<script setup>
import { ref } from "vue";
import vChat from "../../../components/chat/index.vue";
const isopenChat = ref(false);
const row = ref({});
const list = ref([
  {
    name: "Meme",
    content: ["我不管，你欠着吧", "上次欠我的鸡腿什么时候还"],
    time: "刚刚",
    num: "2",
  },
  {
    name: "奶瓶打不开",
    content: ["哈喽，你好呀！"],
    time: "12分钟前",
    num: "1",
  },
  {
    name: "张全蛋",
    content: ["那我下次再请教你吧"],
    time: "1小时前",
    num: "1",
  },
  {
    name: "小贝🤔",
    content: ["老师，请问今天布置的作业有哪些？"],
    time: "昨天",
    num: "",
  },
  {
    name: "˙*灬糖綶",
    content: ["今天的作业题你全会吗？"],
    time: "4天前",
    num: "",
  },
  {
    name: "˙*恩雅",
    content: ["晚自习在哪上课？"],
    time: "4天前",
    num: "",
  },
]);

const open = (data) => {
  isopenChat.value = true;
  row.value = data;
};
const onClickLeft = () => history.back();
</script>
<style lang="css" scoped>
.color-g {
  color: #bdbcd3;
}
.color-g-1 {
  color: #797999;
}
.bg-r {
  background: #fc5655;
}
</style>

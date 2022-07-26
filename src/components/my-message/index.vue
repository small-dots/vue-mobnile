<!--
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-07-19 13:43:40
 * @Description: 
-->
<template>
  <div>
    <van-nav-bar
      title="我的消息"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="p-3">
      <div class="mb-2">
        <van-tabs class="msg" v-model:active="active" sticky animated>
          <van-tab
            v-for="(item, index) in ['未读(12)', '已读']"
            :title="item"
            :key="index"
          >
            <div
              class="mt-4"
              v-for="(msg, msgindex) in msgList"
              :key="msgindex"
            >
              <div
                v-if="msg.type === index"
                class="flex flex-nowrap gap-3 items-center"
                @click="viewDatail"
              >
                <div>
                  <van-icon
                    v-if="msg.msgType === '0'"
                    color="#308c89"
                    size="20px"
                    name="bullhorn-o"
                    :dot="index === 0"
                  />
                  <van-icon
                    v-if="msg.msgType === '1'"
                    color="#ffac46"
                    size="20px"
                    name="chat-o"
                    :dot="index === 0"
                  />
                </div>
                <div class="flex flex-1  flex-col gap-1 justify-between">
                  <p class="flex items-center justify-between">
                    <span class="flex-1 text-sm truncate">{{ msg.msg }} </span
                    ><span class="text-sm">{{ msg.date }}</span>
                  </p>
                  <div class="text-xs text-gray-500">{{ msg.content }}</div>
                </div>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const onClickLeft = () => history.back();
const msgList = ref([
  {
    type: 0,
    msgType: "0",
    typeCh: "已读",
    date: "12-09 12:12:09",
    msg: "您申请的宿舍已被批准",
    content:
      "标准装修时间是多少大概是1-3周时间，请耐心等待，可点击一下连接查询装修进度！",
  },
  {
    type: 0,
    msgType: "0",
    typeCh: "已读",
    date: "12-09 12:12:09",
    msg: "您申请的C冻门禁卡已被批准",
    content:
      "标准装修时间是多少大概是1-3周时间，请耐心等待，可点击一下连接查询装修进度！",
  },
  {
    type: 0,
    msgType: "1",
    typeCh: "未读",
    date: "12-09 12:12:09",
    msg: "老师，咨询下二次函数的解法",
    content: "练习册12页第三道题，理解题意，但是不知道如何下手做",
  },
  {
    type: 0,
    msgType: "0",
    typeCh: "未读",
    date: "12-09 12:12:09",
    msg: "您申请的宿舍已被批准",
    content:
      "标准装修时间是多少大概是1-3周时间，请耐心等待，可点击一下连接查询装修进度！",
  },
  {
    type: 0,
    msgType: "0",
    typeCh: "已读",
    date: "12-09 12:12:09",
    msg: "您申请的C冻门禁卡已被批准",
    content:
      "标准装修时间是多少大概是1-3周时间，请耐心等待，可点击一下连接查询装修进度！",
  },
  {
    type: 0,
    msgType: "1",
    typeCh: "未读",
    date: "12-09 12:12:09",
    msg: "张老师，请统计下你班级的情况",
    content:
      "张老师，请统计下你班级中在这次模拟考试中排名在全校前100的学生名单，反馈至我",
  },
  {
    type: 1,
    msgType: "1",
    typeCh: "未读",
    date: "12-09 12:12:09",
    msg: "老师，咨询下二次函数的解法",
    content: "练习册12页第三道题，理解题意，但是不知道如何下手做",
  },
  {
    type: 0,
    msgType: "0",
    typeCh: "未读",
    date: "12-09 12:12:09",
    msg: "您申请的宿舍已被批准",
    content:
      "标准装修时间是多少大概是1-3周时间，请耐心等待，可点击一下连接查询装修进度！",
  },
  {
    type: 0,
    msgType: "0",
    typeCh: "未读",
    date: "08-19 12:12:09",
    msg: "您发布的视频已审核通过",
    content: "您发布的视频已审核通过，可点击一下连接查询装修进度！",
  },

  {
    type: 1,
    msgType: "0",
    typeCh: "未读",
    date: "12-09 12:12:09",
    msg: "您申请的宿舍已被批准",
    content:
      "标准装修时间是多少大概是1-3周时间，请耐心等待，可点击一下连接查询装修进度！",
  },
]);

const viewDatail = () => {
  router.push({ path: "my-message-detail" });
};
</script>
<style lang="css">
/* .msg .van-tabs__nav {
  background: #c3dedd;
  padding: 20px 0;
  border-radius: 10px;
} */
</style>
<style lang="css" socped>
.shadow-1 {
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
}
.bg-green-1 {
  background: #308c89;
}
.bg-green-2 {
  background: #c3dedd;
}
</style>

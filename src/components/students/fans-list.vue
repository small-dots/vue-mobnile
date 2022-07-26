<template>
  <div class="h-full w-full p-2">
    <van-nav-bar title="我的粉丝" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="relative flex flex-col gap-3 py-3 divide-y">
      <div class="flex w-full gap-2 items-center p-1 px-2" v-for="item, index in list " :key="index">
        <img v-if="index % 2 === 0" class="h-10 w-10 rounded-full" src="../../assets/lianxiren.png" alt="">
        <img v-if="index % 2 !== 0" class="h-10 w-10 rounded-full" src="../../assets/lixaniren2.png" alt="">
        <div class="flex flex-1 flex-col justify-between">
          <p class="text-sm">{{ item.name }}
            <span class="text-xs" v-if="item.role!=='师'">{{item.grade}}</span>
          <van-tag class="ml-2" :color="item.role === '师' ? '#7232dd' : '#1989fa'">
              {{ item.role }}</van-tag>
          </p>
          <p class="text-xs w-full text-slate-600 truncate flex gap-2">
            <span>粉丝:{{ item.fans }}</span>
            <span>关注:{{ item.follow }}</span>
          </p>
        </div>
        <div class="flex items-center gap-1">
          <van-button size="mini" color="linear-gradient(to right, #ff6034, #ee0a24)" @click="show = true">
            + 关注
          </van-button>
          <van-icon color="#308c89" size="20px" name="more-o" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue"
const list = ref([
  {
    name: '努力的lorre',
    qianming: '来感受一个故事吧，不说其他的了',
    role: '师',
    fans: 12,
    follow: 92,
    grade: '高二(1)班'
  },
  {
    name: '张梅',
    qianming: '来黑世界，做回自己',
    role: '师',
    fans: 12,
    follow: 92,
    grade: '高二(1)班'
  },
  {
    name: '王晓丽',
    qianming: '该用户很懒，没有设置个性签名',
    role: '生',
    fans: 12,
    follow: 92,
    grade: '高二(1)班'
  },
  {
    name: '郑佩佩',
    qianming: '该用户很懒，没有设置个性签名',
    role: '生',
    fans: 12,
    follow: 92,
    grade: '高二(1)班'
  },
  {
    name: '张桂兰',
    qianming: '该用户很懒，没有设置个性签名',
    role: '生',
    fans: 12,
    follow: 92,
    grade: '高二(1)班'
  },
  {
    name: '刘莹',
    qianming: 'life is moive',
    role: '师',
    fans: 12,
    follow: 92,
    grade: '高二(1)班'
  },
  {
    name: '张桂桂',
    qianming: '过去终究是过去，过去的遗憾不能填补',
    role: '生',
    fans: 12,
    follow: 92,
    grade: '高二(1)班'
  },
  {
    name: '安琪儿',
    qianming: '等待没有尽头的希望，终会变成绝望。',
    role: '生',
    fans: 12,
    follow: 92,
    grade: '高二(1)班'
  },
  {
    name: '刘莹',
    qianming: 'life is moive',
    role: '师',
    fans: 12,
    follow: 92,
    grade: '高二(1)班'
  },
  {
    name: '张桂桂',
    qianming: '过去终究是过去，过去的遗憾不能填补',
    role: '生',
    fans: 12,
    follow: 92,
    grade: '高二(1)班'
  },
  {
    name: '安琪儿',
    qianming: '等待没有尽头的希望，终会变成绝望。',
    role: '生',
    fans: 12,
    follow: 92,
    grade: '高二(1)班'
  }
])

const onClickLeft = () => history.back();

</script>

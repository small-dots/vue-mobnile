<template>
  <div class="h-full w-full bg-clolrs p-3 overflow-auto py-4 px-2">
    <div class="px-2 pt-2 bg-white rounded-md">
      <div class="text-center">资料与账户</div>
      <div class="flex flex-nowrap justify-around text-sm">
        <span class="transition-all mt-4 mb-2" :class="{ actived: currentindex === '1' }"
          @click="currentindex = '1'">基础信息</span>
        <span class="transition-all mt-4 mb-2" :class="{ actived: currentindex === '2' }"
          @click="currentindex = '2'">修改密码</span>
      </div>
    </div>
    <div v-show="currentindex === '1'" class="p-2 bg-white rounded-md divide-y divide-gray-200 mt-2">
      <div class="pb-3">
        <div class="flex flex-col gap-4 justify-center items-center">
          <img class="h-24 w-24 rounded-full" src="../../assets/avactor.png" alt="">
          <p>点击修改头像</p>
        </div>
        <div>
          <van-field v-model="username" label="姓名" placeholder="请输入姓名" />
          <van-cell title="性别" is-link value="请选择性别" @click="xb" />
          <van-field v-model="zz" label="家庭住址" placeholder="请输入家庭住址" />
          <van-field v-model="ss" label="身份证信息" placeholder="请输入身份证信息" />

          <van-field v-model="zz" label="手机号码" placeholder="请输入手机号码" />
          <van-field v-model="ss" label="邮箱" placeholder="请输入邮箱" />

          <p>关联孩子 <span class=" text-sm text-oc inline-flex justify-center items-center">关联孩子<svg
                class="h-3 w-3 inline-block" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
                data-v-78e17ca8="">
                <path fill="currentColor" d="M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"></path>
                <path fill="currentColor" d="M480 672V352a32 32 0 1 1 64 0v320a32 32 0 0 1-64 0z"></path>
                <path fill="currentColor"
                  d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z">
                </path>
              </svg></span></p>
          <van-field v-model="username1" label="姓名" placeholder="请输入姓名" />
          <van-field v-model="xh6" label="学号" placeholder="请输入所在高校的学校" />
          <van-field v-model="xh5" label="姓名" placeholder="请输入姓名" />
          <van-field v-model="xh4" label="学号" placeholder="请输入所在高校的学校" />
        </div>
      </div>
    </div>
    <div v-show="currentindex === '2'" class="p-2 bg-white rounded-md mt-2">
      <div class="b-3">
        <van-field v-model="username1" label="原始密码" placeholder="请输入原始密码" />
        <van-field v-model="xh" label="新密码" placeholder="请输入新密码" />
        <van-field v-model="xh1" label="确认密码" placeholder="请输入确认密码" />
        <p class="bg-color py-4 text-white text-center rounded-md my-2">
          <button>确认修改</button>
        </p>
      </div>
    </div>
    <van-popup v-model:show="show" round position="bottom" :style="{ height: '30%' }">
      <van-picker title="性别" :columns="columns" />
    </van-popup>
  </div>
</template>
<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router";
const router = useRouter();
const show = ref(false)
const username = ref('张权贵')
const currentindex = ref('1')
const chongzhi = () => {
  router.push({ path: 'czdetail' });
}
const columns = ['男', '女',];
const xb = () => {
  show.value = true
}
</script>
<style scoped>
.bg-clolrs {
  background: #e8e7e7;
}

.actived {
  color: #fd5b43;
}

.font-f {
  font-family: "siyuan";
}

.font-sf {
  font-family: "sfb";
}

.actived::after {
  content: "";
  display: block;
  height: 0.2rem;
  width: 1.3rem;
  background: #fd5b43;
  margin: auto;
}

.text-oc {
  color: #fd5b43;
  font-family: "sfb";
}

.bg-cz {
  background: #009688;
}

.kp-bg {
  font-family: "sfb";
  background: url("../../assets/OTHER-COLOR.png") no-repeat;
  background-size: 100% 100%;
  background-position: center;
}

.text-oc {
  color: #fd5b43;
}

.bg-color {
  background: #009988;
}
</style>

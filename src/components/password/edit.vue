<!--
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-07-19 11:08:29
 * @Description: 
-->
<template>
  <div class="w-full h-full">
    <van-nav-bar
      v-if="!arrts.unshowBanner"
      title="密码修改"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="p-2">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="oldpassword"
            required
            name="原密码"
            label="原密码"
            placeholder="填写原密码"
            :rules="[{ required: true, message: '请填写原密码' }]"
          />
          <van-field
            v-model="password"
            required
            type="password"
            name="新密码"
            label="新密码"
            placeholder="填写新密码"
            :rules="[{ required: true, message: '请填写新密码' }]"
          />
          <van-field
            v-model="repassword"
            required
            type="password"
            name="确认密码"
            label="确认密码"
            placeholder="填写确认密码"
            :rules="[{ required: true, message: '请填写确认密码' }]"
          />
        </van-cell-group>
        <div style="margin: 16px">
          <van-button round block type="primary" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script setup>
import { ref, useAttrs } from "vue";
const oldpassword = ref("");
const arrts = useAttrs();
const password = ref("");
const repassword = ref("");

const onSubmit = (values) => {
  console.log("submit", values);
  setTimeout(() => {
    history.back();
  }, 1000);
};

const onClickLeft = () => history.back();
</script>

<!--
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-07-14 11:50:10
 * @Description: 
-->
<template>
  <div class="h-full w-full p-2 overflow-auto">
    <van-form @failed="onFailed" class="mb-24">
      <van-cell-group inset>
        <!-- 通过 pattern 进行正则校验 -->
        <van-field
          v-model="value1"
          name="pattern"
          required
          label="备课课题"
          placeholder="请输入备课课题"
        />
        <!-- 通过 validator 进行函数校验 -->
        <van-field
          v-model="value2"
          is-link
          required
          name="picker"
          label="科目"
          placeholder="请选择科目"
          @click="showPicker = true"
        />
        <van-popup v-model:show="showPicker" position="bottom">
          <van-picker
            :columns="['语文', '数学', '英语', '化学', '离地']"
            @confirm="onConfirm"
            @cancel="showPicker = false"
          />
        </van-popup>
        <!-- 通过 validator 返回错误提示 -->
        <van-field
          v-model="value3"
          is-link
          readonly
          required
          name="picker"
          label="科目"
          placeholder="请选择科目"
          @click="showPicker1 = true"
        />
        <van-popup v-model:show="showPicker1" position="bottom">
          <van-picker
            :columns="['高一', '高二', '高三']"
            @confirm="onConfirm1"
            @cancel="showPicker1 = false"
          />
        </van-popup>
        <van-field name="uploader" label="课件上传">
          <template #input>
            <van-uploader v-model="value4" />
          </template>
        </van-field>
        <van-field
          v-model="value5"
          rows="6"
          autosize
          required
          label="课件内容"
          type="textarea"
          placeholder="请输入课件内容"
        />
        <van-field name="uploader" label="其他附件">
          <template #input>
            <van-uploader v-model="value6" />
          </template>
        </van-field>
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script setup>
import { ref } from "vue";
const showPicker = ref(false);
const showPicker1 = ref(false);
const value1 = ref("");
const value2 = ref("");
const value3 = ref("");
const value4 = ref([]);
const value5 = ref("");
const value6 = ref([]);

const onFailed = (errorInfo) => {
  console.log("failed", errorInfo);
};
const onConfirm = (value) => {
  value2.value = value;
  showPicker.value = false;
};
const onConfirm1 = (value) => {
  value3.value = value;
  showPicker1.value = false;
};
</script>

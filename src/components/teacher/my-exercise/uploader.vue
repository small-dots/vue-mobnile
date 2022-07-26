<template>
  <div class="h-full overflow-auto w-full p-2">
    <van-form @submit="onSubmit" class="h-full  mb-24">
      <van-cell-group inset>
        <van-field v-model="videoTitle" name="习题题目" label="习题题目" placeholder="请填写习题题目"
          :rules="[{ required: true, message: '请填写习题题目' }]" />
        <van-field v-model="videoKm" is-link readonly name="picker" label="科目" placeholder="点击选择科目"
          @click="showPickerkm = true" />
        <van-popup v-model:show="showPickerkm" position="bottom">
          <van-picker :columns="columnskm" @confirm="onConfirmkm" @cancel="showPickerkm = false" />
        </van-popup>
        <van-field v-model="videoBj" is-link readonly name="picker" label="班级" placeholder="点击选择班级"
          @click="showPickerbj = true" />
        <van-popup v-model:show="showPickerbj" position="bottom">
          <van-picker :columns="columnsbj" @confirm="onConfirmbj" @cancel="showPickerbj = false" />
        </van-popup>
        <van-field v-model="videoTitle" name="所属试卷" label="所属试卷" placeholder="所属试卷"
          :rules="[{ required: true, message: '请填写所属试卷' }]" />
        <van-field v-model="kjlx" is-link readonly name="picker" label="试卷类型" placeholder="点击选择试卷类型"
          @click="showPickerkjlx = true" />
        <van-popup v-model:show="showPickerkjlx" position="bottom">
          <van-picker :columns="columnskjlx" @confirm="onConfirmkjlx" @cancel="showPickerkjlx = false" />
        </van-popup>
        <van-field v-model="daan1" name="习题答案" label="答案(默认)" placeholder="请填写习题默认题目"
          :rules="[{ required: true, message: '请填写习题默认题目' }]">
        </van-field>
        <van-field v-model="daan2" name="习题答案" label="习题答案" placeholder="请填写习题答案2"
          :rules="[{ required: true, message: '请填写习题题目' }]" />
        <van-icon size="23px" color="#ee0a24" class="ml-4 mt-2" name="add-o" />
        <van-field name="uploader" label="习题缩略图(最小比例286*190)">
          <template #input>
            <van-uploader v-model="videoimg" />
          </template>
        </van-field>
        <van-field v-model="videoDesc" rows="3" autosize label="习题描述" type="textarea" maxlength="250"
          placeholder="请输入习题描述信息" show-word-limit />
        <van-field v-model="videoFile" readonly label="习题文件" placeholder="请选择习题文件上传" />
        <van-uploader class="w-full relative m-auto video_uploader">
          <div class="h-24 w-full rounded-md bg-gray-100 flex gap-1 flex-col items-center justify-cente">
            <van-icon size="40px" name="plus" />
            <span class="text-sm text-gray-400"> 添加习题文件</span>
          </div>
        </van-uploader>
      </van-cell-group>
      <div class="m-4">
        <van-button round block type="primary" native-type="submit">
          上传
        </van-button>
      </div>
    </van-form>
  </div>
</template> 
<script setup>
import { ref } from "vue"
const videoTitle = ref('');
const videoKm = ref('');
const videoBj = ref('')
const daan1 = ref('');
const daan2 = ref('')
const showPickerkm = ref(false);
const showPickerbj = ref(false);
const showPickerkjlx = ref(false)
const videoimg = ref([])
const videoDesc = ref('')
const videoFile = ref('')
const kjlx = ref('')
const columnskm = ['语文', '数学', '英语', '化学', '地理', '物理', '生物', '政治'];
const columnsbj = ['高一1年级', '高一2年级', '高二1年级', '高二2年级', '高三1年级', '高三2年级'];
const columnskjlx = ['模拟', '期中', '期末'];

const onSubmit = (values) => {
  console.log('submit', values);
};

const onConfirmkm = (value) => {
  videoKm.value = value;
  showPickerkm.value = false;
};
const onConfirmbj = (value) => {
  videoBj.value = value;
  showPickerbj.value = false;
};
const onConfirmkjlx = (value) => {
  videokjlx.value = value;
  showPickerkjlx.value = false;
};
</script>
<style>
.video_uploader .van-uploader__input-wrapper {
  width: 100%;
}
</style>

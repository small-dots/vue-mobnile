<template>
  <div class="h-full w-full p-2 overflow-auto">
    <van-form @submit="onSubmit" class="mb-24"> 
      <van-cell-group inset>
        <van-field v-model="videoTitle" name="课件标题" label="课件标题" placeholder="课件标题"
          :rules="[{ required: true, message: '请填写课件标题' }]" />
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
        <van-field v-model="videoTitle" name="所属专题" label="所属专题" placeholder="所属专题"
          :rules="[{ required: true, message: '请填写所属专题' }]" />
        <van-field v-model="kjlx" is-link readonly name="picker" label="文件类型" placeholder="点击选择文件类型"
          @click="showPickerkjlx = true" />
        <van-popup v-model:show="showPickerkjlx" position="bottom">
          <van-picker :columns="columnskjlx" @confirm="onConfirmkjlx" @cancel="showPickerkjlx = false" />
        </van-popup>
        <van-field name="uploader" label="课件缩略图(最小比例286*190)">
          <template #input>
            <van-uploader v-model="videoimg" />
          </template>
        </van-field>
        <van-field v-model="videoDesc" rows="4" autosize label="课件描述" type="textarea" maxlength="250"
          placeholder="请输入课件描述信息" show-word-limit />
        <van-field v-model="videoFile" readonly label="课件文件" placeholder="请选择课件文件上传" />
        <van-uploader class="w-full relative m-auto video_uploader">
          <div class="h-24 w-full rounded-md bg-gray-100 flex gap-1 flex-col items-center justify-cente">
            <van-icon size="40px" name="plus" />
            <span class="text-sm text-gray-400"> 添加课件文件</span>
          </div>
        </van-uploader>
      </van-cell-group>
      <div style="margin: 16px;">
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
const showPickerkm = ref(false);
const showPickerbj = ref(false);
const showPickerkjlx = ref(false)
const videoimg = ref([])
const videoDesc = ref('')
const videoFile = ref('')
const kjlx = ref('')
const columnskm = ['语文', '数学', '英语', '化学', '地理', '物理', '生物', '政治'];
const columnsbj = ['高一1年级', '高一2年级', '高二1年级', '高二2年级', '高三1年级', '高三2年级'];
const columnskjlx = ['视频', 'ppt',];

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

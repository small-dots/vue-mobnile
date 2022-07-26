<template>
  <div class="h-full w-full overflow-auto p-2">
    <van-form @submit="onSubmit" class="mb-24">
      <van-cell-group inset>
        <van-field v-model="videoTitle" name="视频标题" label="视频标题" placeholder="视频标题"
          :rules="[{ required: true, message: '请填写视频标题' }]" />
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
        <van-field name="uploader" label="视频缩略图(最小比例286*190)">
          <template #input>
            <van-uploader v-model="videoimg" />
          </template>
        </van-field>
        <van-field v-model="videoDesc" rows="4" autosize label="视频描述" type="textarea" maxlength="250"
          placeholder="请输入视频描述信息" show-word-limit />
        <van-field v-model="videoFile" readonly label="视频文件" placeholder="支持格式有mp4,wmv,asf,asx" />
        <van-uploader class="w-full  relative m-auto video_uploader">
          <div class="h-24 w-full rounded-md bg-gray-100 flex gap-1 flex-col items-center justify-center">
            <svg t="1658035027636" class="h-9 w-9" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="5591" width="200" height="200">
              <path d="M21.333329 405.333462l981.333129 0 0 597.333209-981.333129 0 0-597.333209Z" fill="#9FDBAD"
                p-id="5592"></path>
              <path
                d="M959.9998 426.666791a21.333329 21.333329 0 0 1 21.333329 21.333329v511.999893a21.333329 21.333329 0 0 1-21.333329 21.333329H63.999987a21.333329 21.333329 0 0 1-21.333329-21.333329V448.00012a21.333329 21.333329 0 0 1 21.333329-21.333329h895.999813m0-42.666658H63.999987a63.999987 63.999987 0 0 0-63.999987 63.999987v511.999893a63.999987 63.999987 0 0 0 63.999987 63.999987h895.999813a63.999987 63.999987 0 0 0 63.999987-63.999987V448.00012a63.999987 63.999987 0 0 0-63.999987-63.999987z"
                fill="#5C2D51" p-id="5593"></path>
              <path
                d="M66.986653 407.040129a15.999997 15.999997 0 0 1-15.359997-11.946665L21.333329 281.600155a15.999997 15.999997 0 0 1 11.519997-19.626663L951.679802 21.333542h4.053332a15.999997 15.999997 0 0 1 15.359997 11.946664l29.653327 113.49331a15.999997 15.999997 0 0 1-11.519997 19.626663L71.039985 406.613462z"
                fill="#FFFFFF" p-id="5594"></path>
              <path
                d="M951.893135 43.946871l27.093328 103.253312L70.826652 384.000133l-26.879994-102.613312L951.893135 43.946871M955.733134 0.000213a37.333326 37.333326 0 0 0-9.386664 1.28L27.946661 241.493496a37.333326 37.333326 0 0 0-26.666661 45.439991l29.653327 113.49331A37.333326 37.333326 0 0 0 76.373317 426.666791L994.986459 186.880174a37.333326 37.333326 0 0 0 26.666661-45.653323L991.999793 27.946874A37.333326 37.333326 0 0 0 955.733134 0.000213z"
                fill="#5C2D51" p-id="5595"></path>
              <path
                d="M177.493296 224.426833l78.933317-20.693329 9.173332 151.893302-78.933317 20.693329-9.173332-151.893302z"
                fill="#F05071" p-id="5596"></path>
              <path
                d="M236.799951 230.826832l6.399998 108.586644-36.906659 9.599998-6.399998-108.586644 36.906659-9.599998m39.466658-54.399989L155.306634 208.213503l11.519998 195.413293 120.959975-31.573327-11.519998-195.413292z"
                fill="#5C2D51" p-id="5597"></path>
              <path
                d="M369.919923 174.080177l78.933317-20.693329 8.959998 152.106635-78.933317 20.479996-8.959998-151.893302z"
                fill="#F05071" p-id="5598"></path>
              <path
                d="M429.013244 180.693509l6.399999 108.586644-36.693326 9.386665-6.399999-108.586644 36.906659-9.599998M469.333236 126.29352L347.519928 157.866847l11.519997 195.413293 120.959975-31.573327-10.666664-195.413293z"
                fill="#5C2D51" p-id="5599"></path>
              <path
                d="M562.133216 123.733521l78.933317-20.693329 9.173332 152.106635-79.146651 20.693329-8.959998-152.106635z"
                fill="#F05071" p-id="5600"></path>
              <path
                d="M621.439871 130.346853l6.399998 108.586644-36.906659 9.599998-6.399998-108.586644 36.906659-9.599998M661.333196 75.946864L539.946554 106.666858l11.519998 195.413292 120.959975-31.573326L661.333196 75.946864z"
                fill="#5C2D51" p-id="5601"></path>
              <path
                d="M754.559843 73.386865l78.719983-20.479996 9.173332 151.893302-78.933317 20.693329-8.959998-152.106635z"
                fill="#F05071" p-id="5602"></path>
              <path
                d="M813.653164 80.000197l6.399998 108.586644-36.906658 9.599998-6.399999-108.586644 36.906659-9.599998M853.333156 25.600208l-121.173309 31.573327 11.519998 195.413292 120.959975-31.573326L853.333156 25.600208z"
                fill="#5C2D51" p-id="5603"></path>
              <path
                d="M429.013244 842.026705a42.666658 42.666658 0 0 1-42.666658-42.666658v-189.866627a42.666658 42.666658 0 0 1 42.666658-42.666658 42.666658 42.666658 0 0 1 21.333329 5.759999l165.973299 94.933313a42.666658 42.666658 0 0 1 0 74.666651l-165.973299 94.079981a42.666658 42.666658 0 0 1-21.333329 5.759999z"
                fill="#FDCA89" p-id="5604"></path>
              <path
                d="M429.013244 587.306758a21.333329 21.333329 0 0 1 10.666664 2.986666l165.973299 94.933313a21.333329 21.333329 0 0 1 0 37.759992l-165.973299 94.933314a21.333329 21.333329 0 0 1-10.666664 2.986666 21.333329 21.333329 0 0 1-21.333329-21.333329v-189.866627a21.333329 21.333329 0 0 1 21.333329-21.333329m0-42.666658a63.999987 63.999987 0 0 0-63.999987 63.999987v189.866627a63.999987 63.999987 0 0 0 96.426647 55.893322l165.973299-94.933314a63.999987 63.999987 0 0 0 0-111.786643l-165.973299-94.933314a63.999987 63.999987 0 0 0-31.78666-8.533331z"
                fill="#5C2D51" p-id="5605"></path>
            </svg>
            <span class="text-sm text-gray-400"> 添加视频</span>
          </div>

        </van-uploader>
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          发布
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
const videoimg = ref([])
const videoDesc = ref('')
const videoFile = ref('')
const columnskm = ['语文', '数学', '英语', '化学', '地理', '物理', '生物', '政治'];
const columnsbj = ['高一1年级', '高一2年级', '高二1年级', '高二2年级', '高三1年级', '高三2年级'];

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
</script>
<style>
.video_uploader .van-uploader__input-wrapper {
  width: 100%;
}
</style>

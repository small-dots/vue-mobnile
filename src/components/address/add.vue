<template>
  <div>
    <van-nav-bar title="基本信息" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-address-edit :area-list="areaList" show-postal show-delete show-set-default show-search-result
      :search-result="searchResult" :area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSave" @delete="onDelete"
      @change-detail="onChangeDetail" />
  </div>
</template> 
<script setup>
import { ref } from 'vue';
import { Toast } from 'vant';
import { areaList } from '@vant/area-data';
const searchResult = ref([]);
const onSave = () => {
  Toast('新增成功')
  setTimeout(() => {
    history.back();
  }, 1000);
};
const onDelete = () => {
  Toast('删除成功')
  setTimeout(() => {
    history.back();
  }, 1000);
};
const onChangeDetail = (val) => {
  if (val) {
    searchResult.value = [
      {
        name: '黄龙万科中心',
        address: '杭州市西湖区',
      },
    ];
  } else {
    searchResult.value = [];
  }
};
const onClickLeft = () => history.back();
</script>

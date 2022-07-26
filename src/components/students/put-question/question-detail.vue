<template>
  <div class="w-full h-full">
    <van-nav-bar title="问题内容" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="p-4">
      <p class="my-2">
        <van-icon name="question" color="#fd5b43" /> <span class="text-blue-600">{{ routeInfo.title }}</span>
      </p>
      <p>提问内容：</p>
      <p class="text-sm leading-relaxed">{{ routeInfo.content }}</p>
      <p class="mt-2">图片：</p>
      <img class="h-16 w-16 rounded-md" src="../../../assets//ebboks/smaller26.png" alt="" />
      <p class="mt-2">文件：</p>
      <van-icon name="description" size="30px" color="#fd5b43" />
      <p class="mt-2">提问对象：<span class="text-sm text-gray-700">{{ routeInfo.user }}</span></p>
      <p class="mt-2">提问时间：<span class="text-sm text-gray-700">2021-09-12 12:21:09</span></p>
      <p class="mt-2">回复状态：<span class="color-o text-sm">{{ routeInfo.status === '1' ? "有回复" : "未回复" }}</span></p>
      <p class="mt-2" v-if="routeInfo.status === '1'">回复内容：<span class="text-sm text-gray-700">{{ routeInfo.content_re
      }}</span></p>
      <p class="mt-2" v-if="routeInfo.status === '1'">回复时间：<span class="text-sm text-gray-700">{{ routeInfo.date_re
      }}</span></p>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const route = useRouter()
const routeInfo = ref({})
const status = ref(false)
const onClickLeft = () => history.back();
onMounted(() => {
  routeInfo.value = JSON.parse(route.currentRoute.value.query.rowData)
  status.value = JSON.parse(route.currentRoute.value.query.rowData)?.status === '1' ? true : false
})
</script>
<style scoped>
.color-o {
  color: #fd5b43;
}
</style>

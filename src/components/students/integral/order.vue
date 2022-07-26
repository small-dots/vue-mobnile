<template>
  <div class="h-full w-full p-2 orderlist">
    <van-search class="p-0" v-model="value" show-action label="订单号" placeholder="请输入搜索订单号" @search="onSearch">
      <template #action>
        <van-button type="success" @click="onClickButton" size="small">搜索</van-button>
      </template>
    </van-search>
    <div>
      <div class="flex shadow-1 p-2 flex-col gap-2 divide-y">
        <div class="text-xs flex justify-between text-gray-600">
          <span>订单编号：37129037891028301</span>
          <span>已完成</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="shadow-1 rounded-lg p-1">
            <img class="h-20 ring-2  ring-white rounded-lg asp" src="../../../assets/intergal/tergal1.png" alt="">
          </div>
          <div class="flex-1">
            <p>精品文具套餐(尺具)</p>
            <div class="grid grid-cols-3 my-1 divide-x divide-gray-200">
              <div class="flex flex-col  items-center">
                <span class="text-sm">数量</span>
                <span class="font-sfb text-xl">2</span>
              </div>
              <div class="flex flex-col items-center">
                <span class="text-sm">单价(积分)</span>
                <span class="font-sfb color-o text-xl">2</span>
              </div>
              <div class="flex flex-col items-center">
                <span class="text-sm">实付(积分)</span>
                <span class="font-sfb color-o text-xl">4</span>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm">2020-12-09 20:09:19</span>
              <van-button type="success" size="mini" @click="orderDetail">订单详情</van-button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex mt-4 shadow-1 p-2 flex-col gap-2 divide-y">
        <div class="text-xs flex justify-between text-gray-600">
          <span>订单编号：37129037891028301</span>
          <span class="color-o">配送中</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="shadow-1 rounded-lg p-1">
            <img class="h-20 ring-2  ring-white rounded-lg asp" src="../../../assets/intergal/tergal4.png" alt="">
          </div>
          <div class="flex-1">
            <p>精品文具套餐(签名钢笔)</p>
            <div class="grid grid-cols-3 my-1 divide-x divide-gray-200">
              <div class="flex flex-col  items-center">
                <span class="text-sm">数量</span>
                <span class="font-sfb text-xl">1</span>
              </div>
              <div class="flex flex-col items-center">
                <span class="text-sm">单价(积分)</span>
                <span class="font-sfb color-o text-xl">141</span>
              </div>
              <div class="flex flex-col items-center">
                <span class="text-sm">实付(积分)</span>
                <span class="font-sfb color-o text-xl">141</span>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm">2020-12-09 20:09:19</span>
              <van-button type="success" size="mini" @click="orderDetail">订单详情</van-button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex mt-4 shadow-1 p-2 flex-col gap-2 divide-y">
        <div class="text-xs flex justify-between text-gray-600">
          <span>订单编号：37129037891028301</span>
          <span class="color-o">未发货</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="shadow-1 rounded-lg p-1">
            <img class="h-20 ring-2  ring-white rounded-lg asp" src="../../../assets/intergal/tergal2.png" alt="">
          </div>
          <div class="flex-1">
            <p>电动牙刷</p>
            <div class="grid grid-cols-3 my-1 divide-x divide-gray-200">
              <div class="flex flex-col  items-center">
                <span class="text-sm">数量</span>
                <span class="font-sfb text-xl">1</span>
              </div>
              <div class="flex flex-col items-center">
                <span class="text-sm">单价(积分)</span>
                <span class="font-sfb color-o text-xl">500</span>
              </div>
              <div class="flex flex-col items-center">
                <span class="text-sm">实付(积分)</span>
                <span class="font-sfb color-o text-xl">500</span>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm">2020-12-09 20:09:19</span>
              <van-button type="success" size="mini" @click="orderDetail">订单详情</van-button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex mt-4 shadow-1 p-2 flex-col gap-2 divide-y">
        <div class="text-xs flex justify-between text-gray-600">
          <span>订单编号：37129037891028301</span>
          <span class="color-o">已发货</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="shadow-1 rounded-lg p-1">
            <img class="h-20 ring-2  ring-white rounded-lg asp" src="../../../assets/intergal/tergal3.png" alt="">
          </div>
          <div class="flex-1">
            <p>舒软擦脸毛巾4条</p>
            <div class="grid grid-cols-3 my-1 divide-x divide-gray-200">
              <div class="flex flex-col  items-center">
                <span class="text-sm">数量</span>
                <span class="font-sfb text-xl">1</span>
              </div>
              <div class="flex flex-col items-center">
                <span class="text-sm">单价(积分)</span>
                <span class="font-sfb color-o text-xl">321</span>
              </div>
              <div class="flex flex-col items-center">
                <span class="text-sm">实付(积分)</span>
                <span class="font-sfb color-o text-xl">321</span>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm">2020-12-09 20:09:19</span>
              <van-button type="success" size="mini" @click="orderDetail">订单详情</van-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 
<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router";
const value = ref('');
const router = useRouter()
const onSearch = (val) => Toast(val);
const onClickButton = () => Toast(value.value);
const orderDetail = () => {
  router.push({ path: 'order-detail' })
}
</script>
<style scoped>
.asp {
  aspect-ratio: 1/1;
}

.font-sfb {
  font-family: "sfb";
}

.color-o {
  color: #fd5b43;
}
</style>
<style>
.orderlist .van-search {
  padding-left: 0;
}
</style>

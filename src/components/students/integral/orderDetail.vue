<template>
  <div class="p-2">
    <van-nav-bar title="商品订单详情" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="flex p-2 flex-col gap-2 divide-y">
      <div class="text-xs flex justify-between text-gray-600">
        <span>订单编号：37129037891028301</span>
        <span>已发货</span>
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
        </div>
      </div>
    </div>
    <div class="text-sm p-2 text-gray-700">
      <p class="color-o font-sfb text-normal my-1">订单详情</p>
      <p>订单编号：<span>84023804923242</span></p>
      <p>订单时间：<span>2020-12-12 13:12:09</span></p>
      <p>支付方式：<span>积分兑换</span></p>
      <p>配送方式：<span>标准3-4天【常规物流配送】</span></p>
      <p>收货信息：<span>甘肃省陇南市西城区天邑花园12号楼</span></p>
      <van-divider />
      <p>商品总额：<span class="color-o ">19 积分</span></p>
      <p>实付款：<span class="color-o font-sfb text-lg">19 </span></p>
    </div>
    <div class="text-sm text-gray-700">
      <p class="color-o font-sfb text-normal my-1">物流信息</p>
      <p>物流单号：<span>84023804923242</span></p>
      <p>物流公司：<span>中通快递</span></p>
      <p>物流跟踪：<span></span></p>
      <van-steps direction="vertical" :active="0">
        <van-step>
          <h3>【甘肃】待派送，派送员：王钊，电话：18930182891</h3>
          <p>2016-07-12 12:40</p>
        </van-step>
        <van-step>
          <h3>【甘肃】待派送</h3>
          <p>2016-07-12 12:40</p>
        </van-step>
        <van-step>
          <h3>【佛山】商品正在打包中</h3>
          <p>2016-07-11 10:00</p>
        </van-step>
        <van-step>
          <h3>【佛山】商品正在出库中</h3>
          <p>2016-07-10 09:30</p>
        </van-step>
      </van-steps>
    </div>


  </div>
</template> 
<script setup>
const onClickLeft = () => history.back();

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

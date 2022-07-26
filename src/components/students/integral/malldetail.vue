<template>
  <div class="w-full h-full">
    <van-nav-bar title="商品积分详情" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="p-2">
      <div class="flex items-center gap-2">
        <img class=" asp rounded-md w-2/5" src="../../../assets/intergal/tergal4.png" alt="">
        <div class="flex h-full gap-3 flex-col justify-between">
          <p>精品书籍函数百解</p>
          <div class="text-sm text-gray-600">
            售价：<span class="color-o font-sfb">31</span>
            库存：<span class="color-o font-sfb">987</span>
          </div>
          <p class="text-sm text-gray-600">您的积分：<span class="color-o font-sfb">1987</span></p>
          <div>数量：
            <van-stepper v-model="value" />
          </div>
        </div>
      </div>
      <div class="text-center mt-2">
        <van-button type="primary" round color="#fd5b43" @click="buy">立即兑换</van-button>
      </div>
      <van-divider />
      <div class="text-sm text-gray-700">
        <p class="color-o font-sfb text-normal my-1">商品详情</p>
        <p>
          1、兑换权益后，进入相关页面，点击【立即领取】，输入手机号和验证码进行登录，登录成功后即可完成优惠券
          领取;
        </p>
        <p>
          2、滑到页面最上方，点击【立即使用】，选择心仪的商品加入购物车;
        </p>
        <p>
          3、点击【购物车】-【结算】，输入收货地址并确认优
        </p>
        <p>
          4 本券不限制新老用户，每位用户可领取三次，每个订
          单限用一张，本优惠不与店铺其他优惠同享，优惠券领取
          后30日内有效，请在有效期内使用;
        </p>
        <p>
          5、新疆、西藏、港澳台不发货，不可使用本优惠券;
        </p>
        <p>
          6、订单查询:搜索并关注“维达生活家”微信公众号，使用领券时的手机号进行登录，点击【个人中心】-【个人中心】-【我的订单】中查看;
        </p>
        <p>
          7 如需咨询优惠券使用问题，可拨打客服电话
          400-688-1612;订单及物流问题，可咨询“维达生活家
        </p>
      </div>
      <div class="text-sm text-gray-700 mt-2">
        <p class="color-o font-sfb text-normal my-1">兑换规则</p>
        <p>
          1、兑换权益后，进入相关页面，点击【立即领取】，输入手机号和验证码进行登录，登录成功后即可完成优惠券
          领取;
        </p>
        <p>
          2、滑到页面最上方，点击【立即使用】，选择心仪的商品加入购物车;
        </p>
        <p>
          3、点击【购物车】-【结算】，输入收货地址并确认优
        </p>
        <p>
          4 本券不限制新老用户，每位用户可领取三次，每个订
          单限用一张，本优惠不与店铺其他优惠同享，优惠券领取
          后30日内有效，请在有效期内使用;
        </p>
        <p>
          5、新疆、西藏、港澳台不发货，不可使用本优惠券;
        </p>
        <p>
          6、订单查询:搜索并关注“维达生活家”微信公众号，使用领券时的手机号进行登录，点击【个人中心】-【个人中心】-【我的订单】中查看;
        </p>
        <p>
          7 如需咨询优惠券使用问题，可拨打客服电话
          400-688-1612;订单及物流问题，可咨询“维达生活家
        </p>
      </div>
    </div>
    <van-dialog v-model:show="show" title="兑换确认" @confirm="confirm" show-cancel-button>
      <div class=" p-3 rounded gap-3 flex items-center">
        <img class="w-2/5 shadow-1 asp rounded-md" src="../../../assets/intergal/tergal4.png" alt="">
        <div class="flex flex-col gap-3">
          <p>精品书籍函数百解</p>
          <p class="text-gray-600">数量：<span class="color-o font-sfb">4</span></p>
          <p class="text-gray-600">实付：<span class="color-o font-sfb">4234积分</span></p>
        </div>
      </div>
    </van-dialog>

    <van-dialog v-model:show="show1" title="收货方式" @confirm="confirm" show-cancel-button>
      <div class="p-2">
        <p class="color-o font-semibold my-2">配送方式</p>
        <van-radio-group v-model="checked">
          <van-radio class="text-sm mb-2" name="1">标准2-4天【常规物流配送】</van-radio>
          <van-radio class="text-sm " name="2">标准1-2天【快捷物流配送】</van-radio>
        </van-radio-group>
        <p class="color-o font-semibold mb-2 mt-4">选择收件人</p>
        <van-contact-list v-model="chosenContactId" :list="list" default-tag-text="默认" @add="onAdd" add-text="确认兑换"
          @edit="onEdit" @select="onSelect" />
      </div>
    </van-dialog>

    <van-dialog v-model:show="show2" title="兑换成功" @confirm="confirm1" show-cancel-button>
      <div class="p-2 text-center my-1">
        <p>订单号： <span class="color-o font-sfb my-1">4802384028203847028</span></p>
        <p class="text-sm font-extrabold my-1">恭喜你！获得精品书籍函数百解一本</p>
        <p class="text-sm text-gray-400 my-1">请在我的兑换中心查看订单</p>
      </div>
    </van-dialog>
  </div>
</template>
<script setup>
import { ref } from "vue"
const value = ref(1)
const onClickLeft = () => history.back();
const show = ref(false)
const checked = ref('1')
const show1 = ref(false)
const show2 = ref(false)
const chosenContactId = ref('1');
const list = ref([
  {
    id: '1',
    name: '丽娜',
    tel: '13000000000',
    isDefault: true,
  },
  {
    id: '2',
    name: '丽娜',
    tel: '144098718782',
  },]);

const buy = () => {
  show.value = true
}
const confirm = () => {
  show.value = false
  show1.value = true
}
const onAdd = () => {
  show1.value = false
  show2.value = true
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

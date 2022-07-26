<template>
  <div class="h-full w-full p-2">
    <div
      class="bg-gradient-to-r px-2 py-3 flex items-center justify-between text-xs rounded-md from-orange-600 to-orange-300">
      <div><span class="text-white">当前积分：</span> <span class="font-sfb text-xl text-white">831</span>
      </div>
      <div>
        <span class=" text-white rounded-lg border-white border-2 bg-transparent p-1">积分明细</span>
        <span class=" text-white rounded-lg border-white mx-1 border-2 bg-transparent p-1">兑换礼品</span>
        <span class=" text-white rounded-lg border-white border-2 bg-transparent p-1">积分规则</span>
      </div>
    </div>
    <p class="m-2">积分商城</p>
    <div class="flex gap-8">
      <div class="text-sm" :class="{ active: currentIndex === 1 }" @click="tabClick(1)">
        精选推荐
      </div>
      <div class="text-sm" :class="{ active: currentIndex === 2 }" @click="tabClick(2)">
        精品书籍
      </div>
      <div class="text-sm" :class="{ active: currentIndex === 3 }" @click="tabClick(3)">
        文具饭票
      </div>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
      <div class="shadow-1 rounded-md" @click="viewDetail">
        <img class="w-full asp rounded-md" src="../../../assets/intergal/tergal4.png" alt="">
        <p class="my-2 px-2">精品文具套餐</p>
        <div class="flex items-center px-2 pb-2 justify-between">
          <div>
            <van-icon color="#ee6d22" name="gem-o" />
            <span class="color-o font-sfb text-lg"> 6</span>
          </div>
          <div class="text-sm text-gray-500">已有39人兑换</div>
        </div>
      </div>
      <div class="shadow-1 rounded-md">
        <img class="w-full asp rounded-md" src="../../../assets/intergal/tergal1.png" alt="">
        <p class="my-2 px-2">文具尺套餐完整版</p>
        <div class="flex items-center px-2 pb-2 justify-between">
          <div>
            <van-icon color="#ee6d22" name="gem-o" />
            <span class="color-o font-sfb text-lg"> 31</span>
          </div>
          <div class="text-sm text-gray-500">已有10人兑换</div>
        </div>
      </div>
      <div class="shadow-1 rounded-md">
        <img class="w-full asp rounded-md" src="../../../assets/intergal/tergal2.png" alt="">
        <p class="my-2 px-2">电动美白牙刷</p>
        <div class="flex items-center px-2 pb-2 justify-between">
          <div>
            <van-icon color="#ee6d22" name="gem-o" />
            <span class="color-o font-sfb text-lg"> 890</span>
          </div>
          <div class="text-sm text-gray-500">已有14人兑换</div>
        </div>
      </div>
      <div class="shadow-1 rounded-md">
        <img class="w-full asp rounded-md" src="../../../assets/intergal/tergal3.png" alt="">
        <p class="my-2 px-2">舒适擦脸毛巾4条</p>
        <div class="flex items-center px-2 pb-2 justify-between">
          <div>
            <van-icon color="#ee6d22" name="gem-o" />
            <span class="color-o font-sfb text-lg"> 19</span>
          </div>
          <div class="text-sm text-gray-500">已有329人兑换</div>
        </div>
      </div>
      <div class="shadow-1 rounded-md">
        <img class="w-full asp rounded-md" src="../../../assets/intergal/tergal4.png" alt="">
        <p class="my-2 px-2">精品文具套餐</p>
        <div class="flex items-center px-2 pb-2 justify-between">
          <div>
            <van-icon color="#ee6d22" name="gem-o" />
            <span class="color-o font-sfb text-lg"> 6</span>
          </div>
          <div class="text-sm text-gray-500">已有39人兑换</div>
        </div>
      </div>
      <div class="shadow-1 rounded-md">
        <img class="w-full asp rounded-md" src="../../../assets/intergal/tergal1.png" alt="">
        <p class="my-2 px-2">文具尺套餐完整版</p>
        <div class="flex items-center px-2 pb-2 justify-between">
          <div>
            <van-icon color="#ee6d22" name="gem-o" />
            <span class="color-o font-sfb text-lg"> 31</span>
          </div>
          <div class="text-sm text-gray-500">已有10人兑换</div>
        </div>
      </div>
      <div class="shadow-1 rounded-md">
        <img class="w-full asp rounded-md" src="../../../assets/intergal/tergal2.png" alt="">
        <p class="my-2 px-2">电动美白牙刷</p>
        <div class="flex items-center px-2 pb-2 justify-between">
          <div>
            <van-icon color="#ee6d22" name="gem-o" />
            <span class="color-o font-sfb text-lg"> 890</span>
          </div>
          <div class="text-sm text-gray-500">已有14人兑换</div>
        </div>
      </div>
      <div class="shadow-1 rounded-md">
        <img class="w-full asp rounded-md" src="../../../assets/intergal/tergal3.png" alt="">
        <p class="my-2 px-2">舒适擦脸毛巾4条</p>
        <div class="flex items-center px-2 pb-2 justify-between">
          <div>
            <van-icon color="#ee6d22" name="gem-o" />
            <span class="color-o font-sfb text-lg"> 19</span>
          </div>
          <div class="text-sm text-gray-500">已有329人兑换</div>
        </div>
      </div>
    </div>
  </div>

</template>
<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router";
const router = useRouter()
const active = ref(0)
const currentIndex = ref(1);
const tabClick = (index) => {
  currentIndex.value = index;
};
const viewDetail = () => {
  console.log(11)
  router.push({ path: "integral-detail" })
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

.active {
  font-size: 16px;
  font-weight: 600;
  position: relative;
  transition: all 0.1s ease;
}

.active:after {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  content: "";
  display: block;
  height: 0.25rem;
  width: 1rem;
  border-radius: 20px;
  background: #fd5b43;
}
</style>

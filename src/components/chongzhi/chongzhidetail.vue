<template>
  <div class="h-full w-full bg-clolrs p-3 overflow-auto py-4 px-2 relative">
    <div class="bg-white p-3 rounded-md">
      <p class="">
        当前可用余额： <span class="text-oc text-2xl"> ￥284.09</span>
      </p>
      <p class="text-gray-400 mb-5">注：可以在食堂吃饭，小卖部购买商品等</p>
      <div class="ring-1 ring-gray-200 py-3 px-1 mb-5">
        充值金额 <span class="mx-3 text-gray-300">|</span>
        <input type="text" placeholder="请输入充值的金额" />
      </div>
      <div class="ring-1 ring-gray-200">
        <p class="text-red-500 font-bold py-3 px-2 bg-slate-100">
          选择支付方式
        </p>
        <el-radio-group v-model="radio1" class="flex flex-col mb-2">
          <el-radio label="1" size="large">支付宝</el-radio>
          <el-radio label="2" size="large">微信</el-radio>
          <el-radio label="3" size="large"
            >银行卡支付
            <svg
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              class="inline-block h-3 w-3"
              data-v-78e17ca8=""
            >
              <path
                fill="currentColor"
                d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"
              ></path>
            </svg>
          </el-radio>
        </el-radio-group>
        <div class="grid grid-cols-2 gap-y-5 pb-2">
          <div class="flex items-center justify-center gap-2">
            <input type="radio" />
            <div class="h-10">
              <img
                class="ring-1 ring-gray-100"
                src="../../assets/Snipaste_2022-07-03_15-39-45.png"
                alt=""
              />
            </div>
          </div>
          <div class="flex items-center justify-center gap-2">
            <input type="radio" />
            <div class="h-10">
              <img
                class="ring-1 ring-gray-100"
                src="../../assets/Snipaste_2022-07-03_15-40-25.png"
                alt=""
              />
            </div>
          </div>
          <div class="flex items-center justify-center gap-2">
            <input type="radio" />
            <div class="h-10">
              <img
                class="ring-1 ring-gray-100"
                src="../../assets/Snipaste_2022-07-03_15-40-50.png"
                alt=""
              />
            </div>
          </div>
          <div class="flex items-center justify-center gap-2">
            <input type="radio" />
            <div class="h-10">
              <img
                class="ring-1 ring-gray-100"
                src="../../assets/Snipaste_2022-07-03_15-41-03.png"
                alt=""
              />
            </div>
          </div>
          <div class="flex items-center justify-center gap-2">
            <input type="radio" />
            <div class="h-10">
              <img
                class="ring-1 ring-gray-100"
                src="../../assets/Snipaste_2022-07-03_15-41-15.png"
                alt=""
              />
            </div>
          </div>
          <div class="flex items-center justify-center gap-2">
            <input type="radio" />
            <div class="h-10">
              <img
                class="ring-1 ring-gray-100"
                src="../../assets/Snipaste_2022-07-03_15-41-28.png"
                alt=""
              />
            </div>
          </div>
          <div class="flex items-center justify-center gap-2">
            <input type="radio" />
            <div class="h-10">
              <img
                class="ring-1 ring-gray-100"
                src="../../assets/Snipaste_2022-07-03_15-41-37.png"
                alt=""
              />
            </div>
          </div>
          <div class="flex items-center justify-center gap-2">
            <input type="radio" />
            <div class="h-10">
              <img
                class="ring-1 ring-gray-100"
                src="../../assets/Snipaste_2022-07-03_15-41-49.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <p class="inline-flex items-center py-4 ml-2">
        <span class="text-sm">充值金额:</span>
        <span class="text-oc text-2xl"> ￥284.09</span>
      </p>
      <div class="flex justify-center gap-1">
        <button
          class="bg-gray-600 flex-1 rounded-l-md px-2 py-1 text-white"
          @click="back"
        >
          返回
        </button>
        <button
          class="bg-color rounded-r-md flex-1 px-2 py-1 text-white"
          @click="chongzhiing"
        >
          确认充值
        </button>
      </div>
    </div>
    <div class="modal" v-if="visible">
      <div class="bg-white w-full rounded-xl modal-content">
        <p class="bg-clolr text-white text-xl text-center py-3 rounded-t-xl">
          充值支付成功
        </p>
        <div class="flex flex-col justify-center items-center gap-2 px-4">
          <svg
            t="1656835206681"
            class="h-9 w-9 mt-4"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="17835"
            width="200"
            height="200"
          >
            <path
              d="M520.265143 0.585143h-9.435429C234.496 0.512 5.632 225.28 0.512 501.540571c-5.12 281.6 219.721143 514.633143 501.248 519.826286h9.508571c276.187429 0 505.197714-224.841143 510.244572-501.101714A511.195429 511.195429 0 0 0 520.265143 0.585143z m283.501714 391.753143L473.234286 732.598857a30.500571 30.500571 0 0 1-20.626286 8.118857c-8.557714 2.194286-15.872-3.218286-21.577143-8.923428L265.142857 531.090286c-11.483429-11.702857-11.922286-44.470857 0-55.515429 11.776-11.190857 46.08-11.702857 57.417143 0l130.706286 167.277714 293.010285-306.029714c11.922286-11.044571 46.006857-11.483429 57.563429 0 11.337143 11.556571 11.849143 44.470857 0 55.588572z"
              p-id="17836"
              data-spm-anchor-id="a313x.7781069.0.i19"
              class="selected"
              fill="#009688"
            ></path>
          </svg>
          <p class="text-center">您的充值付款成功</p>
          <p class="text-center text-gray-600">
            您的付款方式：支付宝，支付金额：<span class="text-red-500"
              >392</span
            >
            元
          </p>
          <div class="w-full bg-gray-100 pt-2 pb-3 px-2 rounded-md">
            <p class="inline-flex items-center gap-1">
              <svg
                t="1656835376638"
                class="h-4 w-4 inline-block"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="18818"
                width="200"
                height="200"
              >
                <path
                  d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0zM512 928c-229.76 0-416-186.24-416-416S282.24 96 512 96s416 186.24 416 416S741.76 928 512 928zM448 256 576 256 576 384 448 384zM640 768 384 768 384 704 448 704 448 512 384 512 384 448 576 448 576 704 640 704z"
                  p-id="18819"
                ></path>
              </svg>
              <span class="text-xl font-bold">提示</span>
            </p>
            <p>请在我的中指页面查看充值记录</p>
          </div>
          <p class="bg-color w-full py-3 text-center text-xl rounded-lg mb-3">
            <button class="text-white">立即查看</button>
          </p>
        </div>
        <div class="close" @click="visible = !visible">
          <svg
            class="h-6 w-6"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            data-v-78e17ca8=""
          >
            <path
              fill="#ffffff"
              d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const radio1 = ref("3");
const visible = ref(false);

const chongzhiing = () => {
  visible.value = true;
};
const back = () => {
  router.push({ path: "cz" });
};
</script>
<style scoped>
.text-oc {
  color: #fd5b43;
  font-family: "sfb";
}

.bg-clolr {
  background: #fd5b43;
}

.bg-clolrs {
  background: #e8e7e7;
}

.el-radio {
  margin-right: 0;
  width: 100%;
  border-top: 1px solid #ebeaea;
  padding: 1rem;
}

img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.bg-color {
  background: #009988;
}

.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.el-radio-group {
  width: 100%;
  align-items: flex-start;
}

.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2000;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
  z-index: 1000;
}

.modal-content {
  position: absolute;
  width: 90%;
  top: 20%;
  left: 5%;
  z-index: 1002;
  cursor: pointer;
}

.close {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  z-index: 1001;
  display: flex;
  cursor: pointer;
}
</style>

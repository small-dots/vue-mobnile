<template>
  <div class="bg lg:px-6 overflow-auto h-full w-full flex flex-col lg:flex-row items-center pt-6 gap-6">
    <div class="bg1 md:bg1 lg:bg1 w-4/5 md:w-3/5 lg:w-1/2 relative rounded-lg">
      <div class="absolute w-full h-full flex flex-col gap-9 items-center justify-center">
        <img src="../../assets/tx1.png" class="rounded-full  w-3/5 mt-3 imgs sm:imgs lg:imgs object-cover" alt="">
        <div class="flex w-full justify-between px-8  mb-9">
          <div class="flex flex-col gap-2">
            <span class="text-bj px-2 py-1 rounded-md">
              张帅帅
              <svg t="1656780976112" class="h-4 w-4 inline-block" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="1348" width="200" height="200">
                <path d="M512 671.67m-160 0a160 160 0 1 0 320 0 160 160 0 1 0-320 0Z" fill="#FFFFFF" p-id="1349"></path>
                <path d="M512 671.67m-160 0a160 160 0 1 0 320 0 160 160 0 1 0-320 0Z" fill="#FFFFFF" p-id="1350"></path>
                <path
                  d="M670.39 513.28c-34.67-34.67-78.7-56.58-126.39-63.35V235.05l83.3 83.29c12.44 12.45 32.81 12.45 45.25 0 12.45-12.44 12.45-32.81 0-45.25L536.79 137.32c-6.46-6.46-15.06-9.56-23.57-9.31-0.4-0.01-0.81-0.02-1.22-0.02-0.25 0-0.51 0-0.76 0.01a0.064 0.064 0 0 0-0.06 0c-8.3-0.09-16.62 3.02-22.92 9.32L352.49 273.09c-12.44 12.44-12.44 32.81 0 45.25 12.45 12.45 32.81 12.45 45.26 0L480 236.09v213.84c-47.69 6.77-91.72 28.68-126.39 63.35C311.3 555.59 288 611.84 288 671.67c0 59.84 23.3 116.09 65.61 158.4 42.31 42.3 98.56 65.6 158.39 65.6s116.08-23.3 158.39-65.6C712.7 787.76 736 731.51 736 671.67c0-59.83-23.3-116.08-65.61-158.39zM512 831.67c-88.37 0-160-71.63-160-160 0-88.36 71.63-160 160-160s160 71.64 160 160c0 88.37-71.63 160-160 160z"
                  fill="#2B97D0" p-id="1351"></path>
              </svg></span>
            <span class=" text-sm">高三（1）班</span>
          </div>
          <div class="flex gap-2 py-1">
            <div class="text-center flex flex-col gap-2">
              <p class="">关注</p>
              <p class="text-colors">2</p>
            </div>
            <div class="text-center flex flex-col gap-2">
              <p class="">粉丝</p>
              <p class="text-colors">19</p>
            </div>
          </div>
        </div>
        <div class="w-full text-center absolute bottom-0 rounded-b-md py-1 bg-color-text" @click="gobase">查看更多
        </div>
      </div>
    </div>
    <div class="bg1 md:bg1 lg:bg1 w-4/5 md:w-3/5 lg:w-1/2 relative rounded-lg">
      <div class="rounded-md w-full h-full absolute flex flex-col gap-9 items-center justify-center">
        <img src="../../assets/avactor.png" class="rounded-full w-3/5  mt-3 imgs sm:imgs lg:imgs object-cover" alt="">
        <div class="flex w-full justify-between px-8 mb-9">
          <div class="flex flex-col gap-2">
            <span class="text-bj px-2 py-1 rounded-md">张秀秀
              <svg t="1656781041497" class="h-4 w-4 inline-block" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="1498" width="200" height="200">
                <path
                  d="M622.1 618.6h-82.3v-55.1c41.1-5.6 79.1-23.9 109-52.9 36.3-35.3 56.2-82.2 56.2-132.1 0-49.9-20-96.8-56.2-132.1-36.3-35.3-84.5-54.7-135.8-54.7-51.3 0-99.5 19.4-135.8 54.7C341 281.8 321 328.7 321 378.6c0 49.9 20 96.8 56.2 132.1 29.6 28.8 67.1 47 107.7 52.7v55.2h-82.3c-7.5 0-14.4 3-19.4 7.8-5 4.8-8.1 11.5-8.1 18.8 0 14.7 12.3 26.7 27.4 26.7H485v133.2c0 7.3 3.1 14 8.1 18.8 5 4.8 11.8 7.8 19.4 7.8 15.1 0 27.4-12 27.4-26.7V672h82.3c7.5 0 14.4-3 19.4-7.8 5-4.8 8.1-11.5 8.1-18.8-0.2-14.8-12.5-26.8-27.6-26.8z m-246.2-240c0-73.7 61.4-133.4 137.1-133.4 75.7 0 137.1 59.7 137.1 133.4S588.7 512 513 512c-75.7 0-137.1-59.7-137.1-133.4z"
                  fill="#CE2C2C" p-id="1499"></path>
              </svg>
            </span>
            <span class="text-sm">高二（8）班</span>
          </div>
          <div class="flex gap-2 py-1">
            <div class="text-center flex flex-col gap-2">
              <p class="">关注</p>
              <p class="text-colors">31</p>
            </div>
            <div class="text-center flex flex-col gap-2">
              <p class="">粉丝</p>
              <p class="text-colors">231</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full text-center absolute bottom-0 rounded-b-md py-1 bg-color-text" @click="gobase">查看更多</div>
    </div>
    <div class="bg1 md:bg1 lg:bg1 w-4/5 md:w-3/5 lg:w-1/2 relative rounded-lg mb-3">
      <div class="rounded-md w-full h-full absolute flex flex-col gap-9 items-center justify-center">
        <img src="../../assets/student1.png" class="rounded-full w-3/5  mt-3 imgs sm:imgs lg:imgs object-cover" alt="">
        <div class="flex w-full justify-between px-8 mb-9">
          <div class="flex flex-col gap-2">
            <span class="text-bj px-2 py-1 rounded-md">张妹妹
              <svg t="1656781041497" class="h-4 w-4 inline-block" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="1498" width="200" height="200">
                <path
                  d="M622.1 618.6h-82.3v-55.1c41.1-5.6 79.1-23.9 109-52.9 36.3-35.3 56.2-82.2 56.2-132.1 0-49.9-20-96.8-56.2-132.1-36.3-35.3-84.5-54.7-135.8-54.7-51.3 0-99.5 19.4-135.8 54.7C341 281.8 321 328.7 321 378.6c0 49.9 20 96.8 56.2 132.1 29.6 28.8 67.1 47 107.7 52.7v55.2h-82.3c-7.5 0-14.4 3-19.4 7.8-5 4.8-8.1 11.5-8.1 18.8 0 14.7 12.3 26.7 27.4 26.7H485v133.2c0 7.3 3.1 14 8.1 18.8 5 4.8 11.8 7.8 19.4 7.8 15.1 0 27.4-12 27.4-26.7V672h82.3c7.5 0 14.4-3 19.4-7.8 5-4.8 8.1-11.5 8.1-18.8-0.2-14.8-12.5-26.8-27.6-26.8z m-246.2-240c0-73.7 61.4-133.4 137.1-133.4 75.7 0 137.1 59.7 137.1 133.4S588.7 512 513 512c-75.7 0-137.1-59.7-137.1-133.4z"
                  fill="#CE2C2C" p-id="1499"></path>
              </svg>
            </span>
            <span class="text-sm">高二（12）班</span>
          </div>
          <div class="flex gap-2 py-1">
            <div class="text-center flex flex-col gap-2">
              <p class="">关注</p>
              <p class="text-colors">18</p>
            </div>
            <div class="text-center flex flex-col gap-2">
              <p class="">粉丝</p>
              <p class="text-colors">21</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full text-center absolute bottom-0 rounded-b-md py-1 bg-color-text" @click="gobase">查看更多</div>
    </div>

  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const gobase = () => {
  router.push({ path: '/child/baseinfo' });
}
onMounted(() => {
  document.title = "我的孩子"
})
</script>
<style scoped>
.bg {
  background-color: #eeecec;

}

.bg1 {
  background-color: #ffffff;
  padding-bottom: 80%;

}

@media (min-width: 768px) {
  .md\:bg1 {
    padding-bottom: 60%;
  }
}

@media (min-width: 1024px) {
  .lg\:bg1 {
    padding-bottom: 50%;
  }
}

@media (min-width: 375px) {
  .sm\:imgs {
    width: 50%;
  }
}

@media (min-width: 1024px) {
  .lg\:imgs {
    width: 50%;
  }
}

.imgs {
  aspect-ratio: 1/1;
}

.text-colors {
  color: #fd5b43;
  font-weight: bold;
}

.text-bj {
  font-weight: bold;
  color: #6860eb;
  background-color: #e8ebfd;
}

.bg-color-text {
  background-color: #3f40ef;
  color: #f7f6ff;
}
</style>

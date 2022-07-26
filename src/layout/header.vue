<!--
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-07-05 15:16:00
 * @Description: 
-->
<template>
  <div class="w-full bg-white h-14 flex items-center justify-center">
    <div class="absolute left-3" @click="backs">
      <svg
        t="1657006224069"
        class="h-4 w-4"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3754"
      >
        <path
          d="M639.3 151.4L314 476.6c-19.5 19.5-19.5 51.2 0 70.7l325.3 325.3c19.5 19.5 51.2 19.5 70.7 0s19.5-51.2 0-70.7L420.1 512 710 222.1c19.5-19.5 19.5-51.2 0-70.7-19.5-19.6-51.2-19.6-70.7 0z"
          p-id="3755"
        ></path>
      </svg>
    </div>
    <p class="w-full rounded-b text-gray-600 text-center py-1">我的孩子<span class="text-black">(张秀秀)</span></p>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const backs = () => {
  router.push({ name: "childIndex" });
};
</script>
<style scoped>
.bg-clolrs {
  background: #e8e7e7;
}
</style>

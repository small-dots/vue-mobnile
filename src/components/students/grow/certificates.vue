<template>
  <div class="h-full w-full p-2">
    <div class="grid grid-cols-2 sm:grid-cols-3 bg-white gap-2">
      <div class="flex flex-col items-center rounded gap-2 bg-slate-100 p-3">
        <img class="asp ring-4 ring-white h-40 rounded" src="../../../assets/zs/zs1.png" alt="">
        <p>每周之星</p>
      </div>
      <div class="flex flex-col items-center gap-2 bg-slate-100 p-3">
        <img class="asp ring-4 ring-white h-40 rounded" src="../../../assets/zs/zs2.png" alt="">
        <p>三好学生</p>
      </div>
      <div class="flex flex-col items-center gap-2 bg-slate-100 p-3">
        <img class="asp ring-4 ring-white h-40 rounded" src="../../../assets/zs/zs3.png" alt="">
        <p>最美学生称号</p>
      </div>
      <div class="flex flex-col items-center gap-2 bg-slate-100 p-3">
        <img class="asp ring-4 ring-white h-40 rounded" src="../../../assets/zs/zs4.png" alt="">
        <p>英语等级证书(甲)</p>
      </div>
      <div class="flex flex-col items-center rounded gap-2 bg-slate-100 p-3">
        <img class="asp h-40 rounded" src="../../../assets/zs/zs1.png" alt="">
        <p>每周之星</p>
      </div>
      <div class="flex flex-col items-center gap-2 bg-slate-100 p-3">
        <img class="asp ring-4 ring-white h-40 rounded" src="../../../assets/zs/zs2.png" alt="">
        <p>三好学生</p>
      </div>
      <div class="flex flex-col items-center gap-2 bg-slate-100 p-3">
        <img class="asp ring-4 ring-white h-40 rounded" src="../../../assets/zs/zs3.png" alt="">
        <p>最美学生称号</p>
      </div>
      <div class="flex flex-col items-center gap-2 bg-slate-100 p-3">
        <img class="asp ring-4 ring-white h-40 rounded" src="../../../assets/zs/zs4.png" alt="">
        <p>英语等级证书(甲)</p>
      </div>

    </div>
  </div>
</template> 
<script setup>
import { ref } from "vue"
const list = ref([
  {}
])
</script>
<style scoped>
.asp {
  aspect-ratio: 1/1.4;
}
</style>

<template>
  <div class="w-full p-2">
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value3" :options="[{ text: '全部分类', value: 0 }]" />
    </van-dropdown-menu>
    <van-divider />
    <div class="grid grid-cols-1 gap-4 mb-20">
      <div class="flex flex-nowrap bg-g-2 relative color-o justify-between items-center rounded-md border-l-8 p-3"
        v-for="item, index in exerciseList" :key="index">
        <div>
          <p class="color-g-2 text-sm font-semibold">{{ item.title }}</p>
          <van-divider :style="{ color: '#308c89', borderColor: '#308c89', }" />
          <div class="text-sm flex items-center justify-between gap-2 font-semibold">
            <span class="bg-g text-white rounded-lg px-2 py-0.5">难度：
              <van-rate :size="14" v-model="item.nandu" />
            </span>
            <span class="bg-g text-white rounded-lg px-2 py-0.5">积分：
              <van-icon color="#ffac46" name="balance-o" />{{ item.jifen }}
            </span>
            <span class="bg-g text-white rounded-lg px-2 py-0.5">{{ item.type }}
            </span>
          </div>
        </div>
        <div>
          <van-icon size="25px" color="#308c89" name="arrow" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const value1 = ref(0);
const value2 = ref('a');
const value3 = ref(0)
const option1 = [
  { text: '语文', value: 0 },
  { text: '数学', value: 1 },
  { text: '英语', value: 2 },
  { text: '历史', value: 3 },
  { text: '地理', value: 4 },
  { text: '化学', value: 5 },
  { text: '生物', value: 6 },
];
const option2 = [
  { text: '高一(1)年级', value: 'a' },
  { text: '高一(2)年级', value: 'b' },
  { text: '高二(1)年级', value: 'c' },
  { text: '高二(2)年级', value: 'd' },
  { text: '高三(1)年级', value: 'r' },
  { text: '高三(2)年级', value: 'f' },
];
const exerciseList = ref([
  {
    title: '解答一元二次函数最简答的方法',
    type: '多选',
    nandu: 4,
    jifen: '5',
    status: '1',
    reason: ''
  }, {
    title: '就时间复杂度求解就时间复杂度求解就时间复杂度求解',
    type: '填空',
    nandu: 1,
    jifen: '13',
    status: '2',
    reason: '题目不符合要求'
  },
  {
    title: '某校学生用化学只是解决生活中的问题，下列做法不正确的',
    type: '单选',
    nandu: 4,
    jifen: '5',
    status: '2',
    reason: '题目不符合要求'
  }, {
    title: '土壤的可交换性阳离子有两类，一类是致酸离子；另一类是盐基离子，下面离子中属于致酸离子是?',
    type: '单选',
    nandu: 2,
    jifen: '23',
    status: '1',
    reason: ''
  }, {
    title: '解答一元二次函数最简答的方法',
    type: '多选',
    nandu: 4,
    jifen: '5',
    status: '1',
    reason: ''
  }, {
    title: '就时间复杂度求解就时间复杂度求解就时间复杂度求解',
    type: '填空',
    nandu: 1,
    jifen: '13',
    status: '2',
    reason: '题目不符合要求'
  },
  {
    title: '某校学生用化学只是解决生活中的问题，下列做法不正确的',
    type: '单选',
    nandu: 4,
    jifen: '5',
    status: '2',
    reason: '题目不符合要求'
  }, {
    title: '土壤的可交换性阳离子有两类，一类是致酸离子；另一类是盐基离子，下面离子中属于致酸离子是?',
    type: '单选',
    nandu: 2,
    jifen: '23',
    status: '1',
    reason: ''
  }
])
</script>
<style lang="css">
.van-dropdown-menu__bar {
  border-radius: 12px;
}
</style>
<style lang="css" scoped>
.color-g {
  border-color: #0ac3cb;
}

.bg-g {
  /* background: #ffac46; */
  background: #308c89;
}

.color-g-2 {
  color: #308c89;
}

.color-g-1 {
  background: #009988;
}

.color-o {
  border-color: #308c89;
}

.bg-g-2 {
  background: #c3dedd;
}

.color-error {
  color: #ee0a24;
}
</style>


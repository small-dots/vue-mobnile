<template>
  <div class="w-full p-2">
    <div>
      <van-cell-group>
        <van-field
          v-model="tmmc"
          center
          clearable
          label="题目名称"
          placeholder="请输入内容搜索"
        >
          <template #button>
            <van-button
              icon="search"
              size="small"
              color="linear-gradient(to right, #ff6034, #ee0a24)"
              type="primary"
              >搜索</van-button
            >
          </template>
        </van-field>
      </van-cell-group>
    </div>
    <van-divider />
    <div class="grid grid-cols-1 gap-4">
      <div
        class="
          flex flex-nowrap
          bg-g-2
          relative
          color-o
          justify-between
          items-center
          rounded-md
          border-l-8
          p-3
        "
        v-for="(item, index) in exerciseList"
        :key="index"
      >
        <div>
          <p class="color-g-2 text-sm font-semibold">{{ item.title }}</p>
          <van-divider :style="{ color: '#308c89', borderColor: '#308c89' }" />
          <div
            class="
              text-sm
              flex
              items-center
              justify-between
              gap-2
              font-semibold
            "
          >
            <span class="bg-g text-white rounded-lg px-2 py-0.5"
              >难度：
              <van-rate :size="14" v-model="item.nandu" />
            </span>
            <span class="bg-g text-white rounded-lg px-2 py-0.5"
              >积分： <van-icon color="#ffac46" name="balance-o" />{{
                item.jifen
              }}
            </span>
            <span class="bg-g text-white rounded-lg px-2 py-0.5"
              >{{ item.type }}
            </span>
          </div>
          <p class="text-sm my-2 color-g-2"><span>发布日期：</span><span class="text-gray-600 font-semibold">2021-12-23</span></p>
          <div class="mt-2 flex gap-3">
            <span
              class="bg-g-1 text-sm rounded-xl font-normal px-2 py-1 text-white"
              >查看详情</span
            >
            <div class="text-sm flex items-center justify-between">
              <span class="bg-g-3 text-white rounded-xl px-2 py-1"
                >删除</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const value1 = ref(0);
const value2 = ref("a");
const value3 = ref(0);
const tmmc = ref("");
const exerciseList = ref([
  {
    title: "解答一元二次函数最简答的方法",
    type: "多选",
    nandu: 4,
    jifen: "5",
    status: "1",
    reason: "",
  },
  {
    title: "就时间复杂度求解就时间复杂度求解就时间复杂度求解",
    type: "填空",
    nandu: 1,
    jifen: "13",
    status: "2",
    reason: "题目不符合要求",
  },
  {
    title: "某校学生用化学只是解决生活中的问题，下列做法不正确的",
    type: "单选",
    nandu: 4,
    jifen: "5",
    status: "2",
    reason: "题目不符合要求",
  },
  {
    title:
      "土壤的可交换性阳离子有两类，一类是致酸离子；另一类是盐基离子，下面离子中属于致酸离子是?",
    type: "单选",
    nandu: 2,
    jifen: "23",
    status: "1",
    reason: "",
  },
  {
    title: "解答一元二次函数最简答的方法",
    type: "多选",
    nandu: 4,
    jifen: "5",
    status: "1",
    reason: "",
  },
  {
    title: "就时间复杂度求解就时间复杂度求解就时间复杂度求解",
    type: "填空",
    nandu: 1,
    jifen: "13",
    status: "2",
    reason: "题目不符合要求",
  },
  {
    title: "某校学生用化学只是解决生活中的问题，下列做法不正确的",
    type: "单选",
    nandu: 4,
    jifen: "5",
    status: "2",
    reason: "题目不符合要求",
  },
  {
    title:
      "土壤的可交换性阳离子有两类，一类是致酸离子；另一类是盐基离子，下面离子中属于致酸离子是?",
    type: "单选",
    nandu: 2,
    jifen: "23",
    status: "1",
    reason: "",
  },
]);
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
  background: #d2f0ef;
}

.color-error {
  color: #ee0a24;
}
.bg-g-1 {
  background: linear-gradient(to right, #ff6034, #ee0a24);
}
.bg-g-3 {
  background: linear-gradient(to right, #10b6b5, #1fc9a2);
}
</style>

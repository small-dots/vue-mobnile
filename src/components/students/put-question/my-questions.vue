<!--
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-07-20 17:29:34
 * @Description: 
-->
<template>
  <div class="w-full h-full">
    <div class="flex justify-between">
      <van-tabs class="w-52" v-model:active="active" animated sticky type="card" @click-tab="onClickTab">
        <van-tab v-for="(item, index) in ['全部', '已回复', '未回复']" :title="item" :key="index">
        </van-tab>
      </van-tabs>
      <p class="text-sm">您有<span class="color-o">3条</span>提问得到回复</p>
    </div>

    <div class="p-2 divide-y">
      <div class="mb-3 flex flex-col gap-3" v-for="(item, index) in queList" :key="index">
        <div class="flex gap-2 mt-2">
          <img class="h-16 w-16 rounded-md" src="../../../assets//ebboks/smaller26.png" alt="" />
          <div class="flex-1">
            <p class=" text-blue-600">{{ item.title }}</p>
            <p class="w-full ellipis text-gray-500 text-sm">
              {{ item.content }}
            </p>
          </div>
        </div>
        <div class="text-sm text-gray-600 flex justify-between items-center" @click="viewDetail(item)">
          <div>
            <van-icon color="#308c89" name="description" class="mr-3" />
          </div>
          <div>提问者：<span class="text-black mr-4">数学李老师</span></div>
          <div class="flex-1">
            状态：
            <span v-if="item.status === '1'" class="color-o">有回复</span>
            <span v-if="item.status === '2'" class="color-g">未回复</span>
          </div>
          <div>
            <van-icon name="arrow" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter()
const active = ref('全部')
const currentIndex = ref("");
const lists = ref([
  {
    title: "平时如何有效的提高数学成绩？",
    content:
      "课后及时复习 接受一种新的知识,主要实在课堂上进行的,所以要重视课堂上的学习效率,找到适合自己的学习方法,上课时要跟住老师的思路,积极思考。下课之后要及时复习,遇到不懂的地方要及时去问,在做作业的时候,",
    user: "数学李老师",
    status: "1",
    date_re:"2021-12-09 12:09:19",
    content_re: '孩子最近的学习状态确实非常好，看得出来是下了功夫学了。功夫不负有心人，成绩慢慢上来之后，能感觉得出来，自信心都增加了，也希望家长平时多给孩子肯定与鼓励，共同助力孩子进步！'

  },
  {
    title: "您认为教师现在在学生的心中或是社会中是怎样一个地位？",
    content:
      "课后及时复习 接受一种新的知识,主要实在课堂上进行的,所以要重视课堂上的学习效率,找到适合自己的学习方法,上课时要跟住老师的思路,积极思考。下课之后要及时复习,遇到不懂的地方要及时去问,在做作业的时候,",
    user: "数学李老师",
    status: "2",
  },
  {
    title: "您曾经是否有过特别偏好或是讨厌某个学生？ ",
    content:
      "课后及时复习 接受一种新的知识,主要实在课堂上进行的,所以要重视课堂上的学习效率,找到适合自己的学习方法,上课时要跟住老师的思路,积极思考。下课之后要及时复习,遇到不懂的地方要及时去问,在做作业的时候,",
    user: "数学李老师",
    status: "1",
    date_re:"2021-12-09 12:09:19",
    content_re: '孩子最近的学习状态确实非常好，看得出来是下了功夫学了。功夫不负有心人，成绩慢慢上来之后，能感觉得出来，自信心都增加了，也希望家长平时多给孩子肯定与鼓励，共同助力孩子进步！'

  },
  {
    title: "学生做什么会令您特别高兴或是失望？",
    content:
      "课后及时复习 接受一种新的知识,主要实在课堂上进行的,所以要重视课堂上的学习效率,找到适合自己的学习方法,上课时要跟住老师的思路,积极思考。下课之后要及时复习,遇到不懂的地方要及时去问,在做作业的时候,",
    user: "数学李老师",
    status: "2",
  },
  {
    title: "平时如何有效的提高数学成绩？",
    content:
      "课后及时复习 接受一种新的知识,主要实在课堂上进行的,所以要重视课堂上的学习效率,找到适合自己的学习方法,上课时要跟住老师的思路,积极思考。下课之后要及时复习,遇到不懂的地方要及时去问,在做作业的时候,",
    user: "数学李老师",
    status: "2",
  },
  {
    title: "老师，从现在的这个社会来看，您觉得教师这个职业的就业前景如何呢",
    content:
      "课后及时复习 接受一种新的知识,主要实在课堂上进行的,所以要重视课堂上的学习效率,找到适合自己的学习方法,上课时要跟住老师的思路,积极思考。下课之后要及时复习,遇到不懂的地方要及时去问,在做作业的时候,",
    user: "数学李老师",
    status: "2",
  },
  {
    title: "平时如何有效的提高数学成绩？",
    content:
      "课后及时复习 接受一种新的知识,主要实在课堂上进行的,所以要重视课堂上的学习效率,找到适合自己的学习方法,上课时要跟住老师的思路,积极思考。下课之后要及时复习,遇到不懂的地方要及时去问,在做作业的时候,",
    user: "数学李老师",
    status: "1",
    date_re:"2021-12-09 12:09:19",
    content_re: '孩子最近的学习状态确实非常好，看得出来是下了功夫学了。功夫不负有心人，成绩慢慢上来之后，能感觉得出来，自信心都增加了，也希望家长平时多给孩子肯定与鼓励，共同助力孩子进步！'
  },
]);
const queList = ref([])
onMounted(() => {
  queList.value = lists.value
})
const onClickTab = ({ title }) => {
  if (title === "已回复") {
    currentIndex.value = "1";
    queList.value = lists.value.filter(item => {
      return item.status === '1'
    })
  } else if (title === "未回复") {
    currentIndex.value = "2";
    queList.value = lists.value.filter(item => {
      return item.status === '2'
    })
  } else {
    currentIndex.value = "";
    queList.value = lists.value
  }
};

const viewDetail = (row) => {
  router.push({
    path: '/student-question-detail', query: {
      rowData: JSON.stringify(row)
    }
  })
}

</script>
<style lang="css" scoped>
.shadow-1 {
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
}

.font-f-1 {
  font-family: "sfb";
}

.color-o {
  color: #fd5b43;
}

.color-g {
  color: #308c89;
}

.ellipis {
  display: -webkit-box;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

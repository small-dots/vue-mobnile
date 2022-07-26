<template>
  <div class="w-full p-2">
    <div
      v-if="current === 'allClass'"
      class="relative rounded-md bg-green w-full px-3 py-4 mb-20"
    >
      <p class="text-center text-white pb-3 title">所有班级学生及选课信息</p>
      <div
        class="bg-white divide-y divide-gray-200 rounded p-2 mb-3"
        v-for="(item, index) in list"
        :key="index"
      >
        <div class="flex items-center justify-between mb-2">
          <span
            ><span
              class="inline-block w-2 h-2 rounded-full bg-gray-400 mr-2"
            ></span
            >{{ item.name }}</span
          >
          <span
            class="text-sm color-o border-o py-1 px-2 rounded-lg"
            @click="viewAll"
            >全部学生</span
          >
        </div>
        <div class="flex justify-start gap-12">
          <div class="flex flex-col">
            <span class="text-sm text-gray-500 mt-2">总人数</span>
            <span class="font-o color-g">{{ item.total }}</span>
          </div>
          <div class="flex flex-col">
            <span class="text-sm text-gray-500 mt-2">授课</span>
            <span class="text-sm">{{ item.class }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="px-2 mb-20" v-if="current === 'allStudent'">
      <div class="flex flex-nowrap items-center gap-2 justify-between">
        <van-search
          class="px-0"
          v-model="serarchKey"
          label="学生"
          placeholder="请输入搜索关键词"
          @search="onSearch"
        >
        </van-search>
        <van-button
          round
          size="small"
          color="linear-gradient(to right, #ff6034, #ee0a24)"
          @click="onSearch"
        >
          搜索
        </van-button>
        <van-button
          round
          size="small"
          color="linear-gradient(to right, #ff6034, #ee0a24)"
          @click="current = 'allClass'"
        >
          返回
        </van-button>
      </div>
      <div class="bg-grays p-2 rounded-2xl">
        <div
          class="flex flex-nowrap gap-6 justify-start items-center py-2 pl-2"
        >
          <span
            class="text-grays"
            :class="{ activeed: curr === '1' }"
            @click="curr = '1'"
            >名称排序</span
          >
          <span
            class="text-grays"
            :class="{ activeed: curr === '2' }"
            @click="curr = '2'"
            >性别排序</span
          >
        </div>
        <div
          class="w-full my-3 p-3 rounded-xl shadow-md bg-white-400 relative"
          v-for="(item, index) in slist"
          :key="index"
        >
          <div class="flex gap-2">
            <div class="w-12 h-12 ring-1 ring-white">
              <img
                class="rounded-full"
                src="../../../assets/avator-s.png"
                alt=""
              />
            </div>
            <div class="w-full flex flex-col justify-between gap-2">
              <span class="font-semibold text-sm"
                >{{ item.name }}
                <svg
                  v-if="item.sex === '2'"
                  t="1657768808892"
                  class="h-4 w-4 inline-block"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2699"
                >
                  <path
                    d="M510.887666 512m-446.708971 0a446.708971 446.708971 0 1 0 893.417942 0 446.708971 446.708971 0 1 0-893.417942 0Z"
                    fill="#FFFFFF"
                    p-id="2700"
                  ></path>
                  <path
                    d="M510.87948 578.902736c-123.673717 0-224.282113-100.607372-224.282113-224.282113s100.607372-224.282113 224.282113-224.282113 224.282113 100.607372 224.282112 224.282113-100.608396 224.282113-224.282112 224.282113z m0-364.80559c-77.486792 0-140.523477 63.036685-140.523477 140.523477s63.036685 140.523477 140.523477 140.523477 140.523477-63.036685 140.523477-140.523477-63.036685-140.523477-140.523477-140.523477z"
                    fill="#FF3EC9"
                    p-id="2701"
                  ></path>
                  <path
                    d="M510.87948 896.635217c-23.12058 0-41.878806-18.744923-41.878806-41.878806V537.02393c0-23.133883 18.758226-41.878806 41.878806-41.878806s41.878806 18.744923 41.878806 41.878806v317.732481c0 23.133883-18.758226 41.878806-41.878806 41.878806z"
                    fill="#FF3EC9"
                    p-id="2702"
                  ></path>
                  <path
                    d="M669.752884 737.762837H352.033705c-23.12058 0-41.878806-18.744923-41.878806-41.878806s18.758226-41.878806 41.878806-41.878807h317.719179c23.12058 0 41.878806 18.744923 41.878806 41.878807s-18.758226 41.878806-41.878806 41.878806z"
                    fill="#FF3EC9"
                    p-id="2703"
                  ></path>
                </svg>
                <svg
                  v-if="item.sex === '1'"
                  t="1657768912707"
                  class="h-4 w-4 inline-block"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2848"
                >
                  <path
                    d="M511.843434 512m-446.708971 0a446.708971 446.708971 0 1 0 893.417942 0 446.708971 446.708971 0 1 0-893.417942 0Z"
                    fill="#FFFFFF"
                    p-id="2849"
                  ></path>
                  <path
                    d="M424.111301 818.825061c-59.328223 0-115.140367-23.107277-157.101038-65.081251-86.620823-86.620823-86.620823-227.581252 0-314.215378 41.960671-41.973974 97.771791-65.081251 157.101038-65.081251 59.355853 0 115.140367 23.12058 157.101037 65.081251 41.960671 41.973974 65.081251 97.771791 65.081251 157.11434s-23.12058 115.140367-65.081251 157.101038-97.745185 65.081251-157.101037 65.081251z m0-360.620268c-36.97103 0-71.733765 14.409175-97.881285 40.543392-53.957913 53.984518-53.957913 141.804656 0 195.775872 26.14752 26.14752 60.910255 40.543392 97.881285 40.543391s71.733765-14.395872 97.881284-40.543391c26.14752-26.14752 40.543392-60.910255 40.543392-97.881285s-14.395872-71.733765-40.543392-97.894587c-26.146497-26.14752-60.909232-40.543392-97.881284-40.543392z"
                    fill="#75B9EB"
                    p-id="2850"
                  ></path>
                  <path
                    d="M551.602973 511.016603c-10.715039 0-21.430078-4.090155-29.609365-12.269442-16.358573-16.358573-16.358573-42.874483 0-59.219753L672.577209 288.943808h-42.833551c-23.12058 0-41.878806-18.744923-41.878806-41.878806s18.758226-41.878806 41.878806-41.878806h143.958716c16.931624 0 32.200376 10.210549 38.689161 25.847691 6.488785 15.650445 2.889817 33.67189-9.078773 45.641503L581.212338 498.747161c-8.179286 8.179286-18.894326 12.269441-29.609365 12.269442z"
                    fill="#75B9EB"
                    p-id="2851"
                  ></path>
                  <path
                    d="M773.703397 288.943808h-143.958716c-23.12058 0-41.878806-18.744923-41.878806-41.878806s18.758226-41.878806 41.878806-41.878806h143.958716c23.12058 0 41.878806 18.744923 41.878806 41.878806s-18.758226 41.878806-41.878806 41.878806z"
                    fill="#75B9EB"
                    p-id="2852"
                  ></path>
                  <path
                    d="M779.864724 439.050548c-23.12058 0-41.878806-18.744923-41.878806-41.878806V253.226329c0-23.133883 18.758226-41.878806 41.878806-41.878807s41.878806 18.744923 41.878806 41.878807v143.945413c0 23.133883-18.758226 41.878806-41.878806 41.878806z"
                    fill="#75B9EB"
                    p-id="2853"
                  ></path>
                  <path
                    d="M779.864724 439.050548c-23.12058 0-41.878806-18.744923-41.878806-41.878806V253.226329c0-23.133883 18.758226-41.878806 41.878806-41.878807s41.878806 18.744923 41.878806 41.878807v143.945413c0 23.133883-18.758226 41.878806-41.878806 41.878806z"
                    fill="#75B9EB"
                    p-id="2854"
                  ></path>
                </svg>
              </span>
              <div class="text-sm text-gray-500 font-semibold">{{ item.num }}</div>
            </div>
          </div>
          <div class="flex gap-5 justify-around items-center mt-5">
            <span class="text-sm text-gray-600">
              <svg
                t="1657722945768"
                class="inline-block h-5 w-5"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1553"
              >
                <path
                  d="M872.802928 755.99406 872.864326 755.99406 872.864326 755.624646Z"
                  p-id="1554"
                ></path>
                <path
                  d="M809.889039 214.109426c-164.252925-164.278507-431.528224-164.278507-595.778078 0-164.280554 164.250878-164.280554 431.527201 0 595.781148 164.250878 164.276461 431.526177 164.276461 595.778078 0C974.16857 645.636626 974.16857 378.360304 809.889039 214.109426M767.13326 767.130701c-140.681066 140.712789-369.617176 140.683113-510.281869 0-140.694369-140.67902-140.694369-369.585453 0-510.279822 140.664693-140.664693 369.601826-140.694369 510.281869 0C907.812279 397.516596 907.812279 626.481358 767.13326 767.130701"
                  fill="#964ccf"
                  p-id="1555"
                ></path>
                <path
                  d="M602.493525 338.736864c-32.254611 0-63.968917 16.619516-90.523713 47.111994-26.464745-30.491455-58.211796-47.111994-90.465384-47.111994-75.30715 0-136.547933 66.088184-136.547933 147.31823 0 38.565341 24.124444 89.705068 55.092759 117.8992 28.496008 35.20685 144.231939 140.649344 172.305321 140.649344 26.764574 0 139.576919-100.787474 170.33955-139.365094 32.132838-29.330002 56.360635-80.55978 56.360635-119.18345C739.056807 404.825049 677.801698 338.736864 602.493525 338.736864M644.593366 563.495838l-3.310396 3.013637-2.805906 3.491521c-23.599488 29.627784-93.117794 91.060949-126.208447 112.990401-33.985022-22.557762-106.159832-87.301322-128.297015-114.603131l-2.685155-3.311419-3.163039-2.892887c-21.005406-19.094894-36.640502-55.959499-36.640502-76.128865 0-50.065256 35.894512-90.792842 80.021521-90.792842 15.33629 0 32.31294 9.801227 47.829332 27.643594l42.636053 49.097208 42.663682-49.067532c15.516392-17.841344 32.522718-27.67327 47.860031-27.67327 44.128033 0 80.051197 40.726563 80.051197 90.792842C682.544723 506.314511 666.940326 543.117718 644.593366 563.495838"
                  fill="#964ccf"
                  p-id="1556"
                ></path></svg
              > 关注</span
            >
            <span class="text-sm text-gray-600">
              <svg
                t="1657768553176"
                class="inline-block h-5 w-5"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1275"
              >
                <path
                  d="M896 128H128A85.426667 85.426667 0 0 0 42.666667 213.333333v512a85.426667 85.426667 0 0 0 85.333333 85.333334h247.166667l121.746666 121.753333a21.333333 21.333333 0 0 0 30.173334 0L648.833333 810.666667H896a85.426667 85.426667 0 0 0 85.333333-85.333334V213.333333a85.426667 85.426667 0 0 0-85.333333-85.333333zM298.666667 512a42.666667 42.666667 0 1 1 42.666666-42.666667 42.666667 42.666667 0 0 1-42.666666 42.666667z m213.333333 0a42.666667 42.666667 0 1 1 42.666667-42.666667 42.666667 42.666667 0 0 1-42.666667 42.666667z m213.333333 0a42.666667 42.666667 0 1 1 42.666667-42.666667 42.666667 42.666667 0 0 1-42.666667 42.666667z"
                  fill="#308c89"
                  p-id="1276"
                ></path></svg
              > 私信
            </span>
            <span class="text-sm color-p ring-1 ring-gray-200 rounded-2xl p-1"
              >个人主页</span
            >
          </div>
          <div
            v-if="item.zw"
            :class="{ 'bg-p': item.zw === '班长' }"
            class="
              text-white
              p-1
              rounded-bl-xl
              text-xs
              absolute
              top-0
              right-0
              bg-green-600
              font-semibold
            "
          >
            {{ item.zw }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const serarchKey = ref("");
const list = ref([
  {
    name: "高中一年级（21）班",
    total: 54,
    class: "班主任、历史、数学",
  },
  {
    name: "高中一年级（1）班",
    total: 32,
    class: "班主任、数学",
  },
  {
    name: "高中三年级（5）班",
    total: 49,
    class: "班主任、英语",
  },
  {
    name: "高中二年级（7）班",
    total: 23,
    class: "班主任、语文",
  },
]);
const slist = ref([
  {
    name: "李芳",
    sex: "2",
    num: "1755202109001",
    zw: "班长",
  },
  {
    name: "张强",
    sex: "1",
    num: "1755202109002",
  },
  {
    name: "李强强",
    sex: "1",
    num: "1755202109003",
    zw: "体育委员",
  },
  {
    name: "张淑芬",
    sex: "2",
    num: "1755202109004",
  },
  {
    name: "李芳",
    sex: "2",
    num: "1755202109001",
    zw: "卫生委员",
  },
  {
    name: "张强",
    sex: "1",
    num: "1755202109002",
  },
  {
    name: "李强强",
    sex: "1",
    num: "1755202109003",
    zw: "英语课代表",
  },
  {
    name: "张淑芬",
    sex: "2",
    num: "1755202109004",
  },
  {
    name: "张强",
    sex: "1",
    num: "1755202109002",
  },
  {
    name: "李强强",
    sex: "1",
    num: "1755202109003",
  },
  {
    name: "张强",
    sex: "1",
    num: "1755202109002",
  },
  {
    name: "李强强",
    sex: "1",
    num: "1755202109003",
  },
  {
    name: "张强",
    sex: "1",
    num: "1755202109002",
  },
  {
    name: "李强强",
    sex: "1",
    num: "1755202109003",
  },
]);
const current = ref("allClass");
const curr = ref("1");
const viewAll = () => {
  current.value = "allStudent";
};
const onSearch = () => {};
</script>
<style scoped>
.title:after,
.title:before {
  content: "";
  width: 1rem;
  display: inline-block;
  vertical-align: middle;
  border-radius: 10px;
  margin: 0 10px;
  height: 0.25rem;
  background: #fff;
}

.bg-o {
  background-color: #ff4a35;
}

.border-o {
  border: 1px solid #ff4a35;
}

.bg-gray {
  background: #e8e7e7;
}

.color-o {
  color: #ff4a35;
}

.color-b {
  color: #308c89;
}

.color-c {
  color: #ffac46;
}
.color-p {
  color: #6e7dea;
}
.bg-p {
  background: #549dff;
}
.bg-green {
  background: #009688;
}

.color-g {
  color: #009688;
}

.font-o {
  font-size: 18px;
  font-family: "sfb";
}

.bg-image {
  font-family: "sfb";
  background: url("../../../assets/27-OTHER-COLORS.png") no-repeat;
  background-size: cover;
  background-position: center;
}
.bg-grays {
  background: #f7f7f7;
}
.text-grays {
  color: #b7b7ba;
}
.activeed {
  transition: all 0.3s;
  color: #000;
}
.bg-white-400 {
  background: #fdfdfd;
}
</style>

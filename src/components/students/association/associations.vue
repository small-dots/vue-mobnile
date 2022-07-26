<!--
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-07-21 16:21:14
 * @Description: 
-->
<template>
  <div class="w-full h-full">
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
      <div class="shadow-1 rounded-md">
        <img class="asp object-cover" src="../../../assets/st1.png" alt="" />
        <p class="my-2 pl-2">体育足球集训活动社团</p>
        <div class="flex items-center gap-3 pb-3 pl-2">
          <van-button
            size="mini"
            color="linear-gradient(to right, #ff6034, #ee0a24)"
          >
            报名参加
          </van-button>
          <van-button
            size="mini"
            color="linear-gradient(to right, #10b6b5, #1fc9a2)"
          >
            了解社团
          </van-button>
        </div>
      </div>
      <div class="shadow-1 rounded-md">
        <img class="asp object-cover" src="../../../assets/st2.png" alt="" />
        <p class="my-2 pl-2">书法活动社团</p>
        <div class="flex items-center gap-3 pb-3 pl-2">
          <van-button
            size="mini"
            color="linear-gradient(to right, #ff6034, #ee0a24)"
          >
            报名参加
          </van-button>
          <van-button
            size="mini"
            color="linear-gradient(to right, #10b6b5, #1fc9a2)"
          >
            了解社团
          </van-button>
        </div>
      </div>
      <div class="shadow-1 rounded-md">
        <img class="asp object-cover" src="../../../assets/st3.png" alt="" />
        <p class="my-2 pl-2">体育足球集训活动社团</p>
        <div class="flex items-center gap-3 pb-3 pl-2">
          <van-button
            size="mini"
            color="linear-gradient(to right, #ff6034, #ee0a24)"
          >
            报名参加
          </van-button>
          <van-button
            size="mini"
            color="linear-gradient(to right, #10b6b5, #1fc9a2)"
          >
            了解社团
          </van-button>
        </div>
      </div>
      <div class="shadow-1 rounded-md">
        <img class="asp object-cover" src="../../../assets/st4.png" alt="" />
        <p class="my-2 pl-2">摇滚巨星活动社团</p>
        <div class="flex items-center gap-3 pb-3 pl-2">
          <van-button
            size="mini"
            color="linear-gradient(to right, #ff6034, #ee0a24)"
          >
            报名参加
          </van-button>
          <van-button
            size="mini"
            color="linear-gradient(to right, #10b6b5, #1fc9a2)"
          >
            了解社团
          </van-button>
        </div>
      </div>
      <div class="shadow-1 rounded-md">
        <img class="asp object-cover" src="../../../assets/st6.png" alt="" />
        <p class="my-2 pl-2">体育竞技技巧活动社团</p>
        <div class="flex items-center gap-3 pb-3 pl-2">
          <van-button
            size="mini"
            color="linear-gradient(to right, #ff6034, #ee0a24)"
          >
            报名参加
          </van-button>
          <van-button
            size="mini"
            color="linear-gradient(to right, #10b6b5, #1fc9a2)"
          >
            了解社团
          </van-button>
        </div>
      </div>
      <div class="shadow-1 rounded-md">
        <img class="asp object-cover" src="../../../assets/st5.png" alt="" />
        <p class="my-2 pl-2">还烦全场活动社团</p>
        <div class="flex items-center gap-3 pb-3 pl-2">
          <van-button
            size="mini"
            color="linear-gradient(to right, #ff6034, #ee0a24)"
          >
            报名参加
          </van-button>
          <van-button
            size="mini"
            color="linear-gradient(to right, #10b6b5, #1fc9a2)"
          >
            了解社团
          </van-button>
        </div>
      </div>
      <div class="shadow-1 rounded-md">
        <img class="asp object-cover" src="../../../assets/st6.png" alt="" />
        <p class="my-2 pl-2">体育竞技技巧活动社团</p>
        <div class="flex items-center gap-3 pb-3 pl-2">
          <van-button
            size="mini"
            color="linear-gradient(to right, #ff6034, #ee0a24)"
          >
            报名参加
          </van-button>
          <van-button
            size="mini"
            color="linear-gradient(to right, #10b6b5, #1fc9a2)"
          >
            了解社团
          </van-button>
        </div>
      </div>
      <div class="shadow-1 rounded-md">
        <img class="asp object-cover" src="../../../assets/st2.png" alt="" />
        <p class="my-2 pl-2">书法活动社团</p>
        <div class="flex items-center gap-3 pb-3 pl-2">
          <van-button
            size="mini"
            color="linear-gradient(to right, #ff6034, #ee0a24)"
          >
            报名参加
          </van-button>
          <van-button
            size="mini"
            color="linear-gradient(to right, #10b6b5, #1fc9a2)"
          >
            了解社团
          </van-button>
        </div>
      </div>
      <div class="shadow-1 rounded-md">
        <img class="asp object-cover" src="../../../assets/st3.png" alt="" />
        <p class="my-2 pl-2">体育足球集训活动社团</p>
        <div class="flex items-center gap-3 pb-3 pl-2">
          <van-button
            size="mini"
            color="linear-gradient(to right, #ff6034, #ee0a24)"
          >
            报名参加
          </van-button>
          <van-button
            size="mini"
            color="linear-gradient(to right, #10b6b5, #1fc9a2)"
          >
            了解社团
          </van-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const list = ref([
      { name: "体育足球集训活动社团" },
      { name: "体育足球集训活动社团" },
      { name: "体育足球集训活动社团" },
      { name: "体育足球集训活动社团" },
    ]);
    return { list };
  },
};
</script>
<style lang="css" scoped>
.bg-g-3 {
  background: linear-gradient(to right, #10b6b5, #1fc9a2);
}
.asp {
  aspect-ratio: 1.5/1;
}
</style>

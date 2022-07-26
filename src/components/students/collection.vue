<!--
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-07-20 09:36:45
 * @Description: 
-->
<template>
  <div class="w-full h-full">
    <van-nav-bar title="我的收藏" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="p-2">
      <van-tabs @click-tab="onClickTab" v-model:active="active" animated sticky>
        <van-tab v-for="item in ['教学视频', '教学课件', '电子书', '在线习题']" :key="item" :title="item">
          <component :is="currentCom"></component>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import { ref, reactive, markRaw, onMounted } from "vue"
import ebook from './collections/ebook.vue'
import videos from './collections/videos.vue'
import courseware from './collections/courseware.vue'
import exercise from './collections/exercise.vue'
export default {
  components: {
    ebook, videos, courseware,
    exercise
  },
  setup() {
    const comMap = reactive([
      { name: '教学视频', com: 'videos' },
      { name: '电子书', com: 'ebook' },
      { name: '教学课件', com: 'courseware' },
      { name: '在线习题', com: 'exercise' }
    ])
    const currentCom = ref('videos')
    const onClickLeft = () => history.back();
    const onClickTab = ({ title }) => {
      currentCom.value = comMap.filter(item => {
        return item.name === title
      })[0].com
    };
    return {
      comMap,
      currentCom,
      onClickLeft,
      onClickTab
    }
  }
}
</script>

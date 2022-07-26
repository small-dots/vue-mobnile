<!--
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-07-22 16:26:24
 * @Description: 
-->
<template>
  <div class="w-full h-full">
    <van-nav-bar
      title="资料与账户"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="p-2">
      <van-tabs @click-tab="onClickTab" v-model:active="active" animated sticky>
        <van-tab
          v-for="(item, index) in ['基础信息', '收货地址', '修改密码']"
          :key="index"
          :title="item"
        >
          <!-- <component :is="currentCom" :showBanner="false"></component> -->
          <baseinfos v-if="currentCom === 'baseinfos'" />
          <passwordedited v-if="currentCom === 'passwordedited'" :unshowBanner="true" />
          <addressedited v-if="currentCom === 'addressedited'" />
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import { ref, reactive, markRaw, onMounted } from "vue";
import baseinfos from "./base.vue";
import passwordedited from "../../password/edit.vue";
import addressedited from "./address.vue";
export default {
  components: {
    baseinfos,
    passwordedited,
    addressedited,
  },
  setup() {
    const active = ref(0);
    const comMap = reactive([
      { name: "基础信息", com: "baseinfos" },
      { name: "收货地址", com: "addressedited" },
      { name: "修改密码", com: "passwordedited" },
    ]);
    const currentCom = ref("baseinfos");
    const onClickLeft = () => history.back();
    const onClickTab = ({ title }) => {
      currentCom.value = comMap.filter((item) => {
        return item.name === title;
      })[0].com;
    };
    return {
      active,
      comMap,
      currentCom,
      onClickLeft,
      onClickTab,
    };
  },
};
</script>


<!--
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-07-20 15:54:29
 * @Description: 
-->
<template>
  <div class="h-full w-full">
    <van-nav-bar
      title="我的选课"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="p-2">
      <p class="text-center font-semibold">
        物理+化学+历史<span class="text-sm mx-1 color-o">组合详情</span>
      </p>
      <div class="flex flex-col gap-3 mt-3 shadow-1 px-4 py-6 sm:px-5">
        <div class="flex items-center justify-between">
          <span>组合1统计(本科)</span>
          <span class="text-red-500 text-sm font-semibold">审核失败</span>
        </div>
        <div class="text-sm px-2">
          <div class="flex justify-between">
            <div>必选科目：<span class="color-o">语文+数学+英语</span></div>
            <div>组合：<span class="color-g">物理+化学+历史</span></div>
          </div>
          <p class="mt-2">
            <span>可报考专业数量：<span class="font-f-1">485</span></span
            ><span class="ml-5"
              >专业覆盖率：<span class="font-f-1 color-o">96.06%</span></span
            >
          </p>
        </div>
        <div>
          <van-button
            type="primary"
            size="small"
            color="linear-gradient(to right, #ff6034, #ee0a24)"
            block
            >重新选择</van-button
          >
        </div>
      </div>
      <div class="mt-6 px-2">
        <p><van-icon color="#fd5b43" name="info-o" /> 审核失败原因</p>
        <p class="color-o mt-1">
          您提交的是预审，班主任老师是复审，学校管理员终审未通过
        </p>
        <p class="mt-2 text-sm leading-relaxed">
          不同的选科组合意味着不同的专业选择权限。其中
          也蕴含无数技巧。首先来看，专业选择余地最大的
          一个组合系列“物理+X”在“物理+”组合框架上，
          举例说明，在“物理+”组合下，工科大类中的电子信息类、通信类、计算机类、电气类、建筑类、交通运输类、土木类等就业好专业都可以报考，部分
          中医类专业也是可以报考的。此外，也可以报考财
          经类、理学类、文史社会类等中的绝大部分的专业。在此，仅以工科类专业为例，进行一下分析，
          选择"物理+"组合，可以报考如下工科类专业。更
          多可报考专业类别收到同等效果。
          在“3+3”模式下，选考物理的确可以选择大部分90%以上的专业。"物理+"组合下包含了10种选科
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
const onClickLeft = () => history.back();
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
</style>

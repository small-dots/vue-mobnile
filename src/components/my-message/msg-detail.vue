<!--
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-07-20 15:33:15
 * @Description: 
-->
<template>
  <div class="h-full w-full">
    <van-nav-bar
      title="我的消息详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="p-2">
      <p class="text-center mb-1">统计班级学生本次模拟考试成绩排名情况</p>
      <p class="text-xs text-center">
        <van-icon name="underway-o" />发布时间：2021-10-11 10:12:19
      </p>
      <van-divider />
      <div class="p-2 px-3">
        <h3 class="text-gray-800">综合成绩分析</h3>
        <ol class="list-decimal text-sm leading-relaxed text-gray-600">
          <li>
            均分:全校语文均分85.18分(去年同期88.25分)，
            数学均分8545分(8936分)，综合科均分806分(8413
            分)，语数全校均分85.27分(888分)，语数综合全校均分
            8374分(8725分)。本学期语数全校均分8527分较上一 学期888分降低3.53分。
          </li>
          <li>
            百分:双百 24 人，单百 24 人。
            其中:语文6人，数学3人，社会14人，科学1人 思品2人，英语0人
          </li>
          <li>语数均分提高5分以上者:有四人x</li>
          <li>
            不及格:共56人:语文2人，数学7人，思品6人，社会3人，科学21人，英语39人。五科不及格1人:郭x
            三科不及格5人:X 双科不及格8人:X单科不及格42人
          </li>
        </ol>
        <h3 class="mt-2 text-gray-800">试卷难度解析</h3>
        <ol class="list-decimal text-sm leading-relaxed text-gray-600">
          <li>
            均分:全校语文均分85.18分(去年同期88.25分)，
            数学均分8545分(8936分)，综合科均分806分(8413
            分)，语数全校均分85.27分(888分)，语数综合全校均分
            8374分(8725分)。本学期语数全校均分8527分较上一 学期888分降低3.53分。
          </li>
          <li>
            百分:双百 24 人，单百 24 人。
            其中:语文6人，数学3人，社会14人，科学1人 思品2人，英语0人
          </li>
          <li>语数均分提高5分以上者:有四人x</li>
          <li>
            不及格:共56人:语文2人，数学7人，思品6人，社会3人，科学21人，英语39人。五科不及格1人:郭x
            三科不及格5人:X 双科不及格8人:X单科不及格42人
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>
<script setup>
const onClickLeft = () => history.back();
</script>

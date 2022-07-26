<template>
  <div class="w-full h-full">
    <van-nav-bar title="基本信息" left-text="返回" right-text="完成" left-arrow @click-left="onClickLeft"
      @click-right="onClickRight" />
    <div class="p-2">
      <div class="flex flex-col justify-center mb-3 items-center gap-2">
        <img class="h-20 w-20 rounded-full" src="../../../assets/avactor.png" />
        <p class="text-sm">点击修改头像</p>
      </div>
      <van-form ref="baseForm" @submit="onSubmit">
        <van-cell-group inset>
          <van-field v-model="username" required name="姓名" label="姓名" placeholder="姓名"
            :rules="[{ required: true, message: '请填写姓名' }]" />
          <van-field v-model="sex" required type="sex" is-link readonly name="picker" label="性别" placeholder="点击选择性别"
            :rules="[{ required: true, message: '请选择性别' }]" @click="showPicker = true" />
          <van-popup v-model:show="showPicker" position="bottom">
            <van-picker :columns="columns" @confirm="onConfirm" @cancel="showPicker = false" />
          </van-popup>

          <van-field v-model="bir" is-link readonly required name="calendar" label="出生年月" placeholder="点击选择出生年月"
            @click="showCalendar = true" :rules="[{ required: true, message: '请选择出生年月' }]" />
          <van-calendar v-model:show="showCalendar" @confirm="onConfirmCalendar" />

          <van-field v-model="course" is-link readonly required name="calendar" label="所授课程" placeholder="点击选择所授课程"
            @click="showPickerCourse = true" :rules="[{ required: true, message: '请选择所授课程' }]" />
          <van-popup v-model:show="showPickerCourse" position="bottom">
            <van-picker :columns="columnsCourse" @confirm="onConfirmCourse" @cancel="showPickerCourse = false" />
          </van-popup>

          <van-field v-model="school" is-link readonly required name="calendar" label="所在学校" placeholder="点击选择所在学校"
            @click="showPickerSchool = true" :rules="[{ required: true, message: '请选择所在学校' }]" />
          <van-popup v-model:show="showPickerSchool" position="bottom">
            <van-picker :columns="columnsSchool" @confirm="onConfirmSchool" @cancel="showPickerSchool = false" />
          </van-popup>

          <van-field v-model="face" is-link readonly required name="calendar" label="政治面貌" placeholder="点击选择政治面貌"
            @click="showPickerFace = true" :rules="[{ required: true, message: '请选择政治面貌' }]" />
          <van-popup v-model:show="showPickerFace" position="bottom">
            <van-picker :columns="columnsFace" @confirm="onConfirmFace" @cancel="showPickerFace = false" />
          </van-popup>

          <van-field name="banzhuren" label="是否班主任" required :rules="[{ required: true, message: '请选择是否是班主任' }]">
            <template #input>
              <van-radio-group v-model="banzhuren" direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="2">否</van-radio>
              </van-radio-group>
            </template>
          </van-field>

          <van-field v-model="phone" name="手机号" required label="手机号" placeholder="手机号"
            :rules="[{ required: true, message: '请填写手机号' }]" />

          <van-field v-model="email" name="邮箱" required label="邮箱" placeholder="邮箱"
            :rules="[{ required: true, message: '请填写邮箱' }]" />
        </van-cell-group>
      </van-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('陈璇');
const sex = ref('');
const showPicker = ref(false);
const bir = ref('')
const showCalendar = ref(false)
const course = ref('')
const school = ref('')
const face = ref('')
const banzhuren = ref('1')
const phone=ref('')
const email=ref('')
const baseForm = ref(null)
const showPickerCourse = ref(false)
const showPickerSchool = ref(false)
const showPickerFace = ref(false)

const columns = ['男', '女',];
const columnsCourse = ref(['语文', '数学', '音乐', '英语', '化学', '政治', '生物', '地理'])
const columnsSchool = ref(['陇南市第一中学', '陇南市第二中学', '陇南市第三中学', '陇南市第四中学', '陇南市第五中学'])
const columnsFace = ref(['共青团员', '团员', '少先队', '党员', '群众'])
const onSubmit = (values) => {
  console.log('submit', values);
};
const onClickLeft = () => history.back();
const onConfirm = (value) => {
  sex.value = value;
  showPicker.value = false;
};
const onConfirmCourse = (value) => {
  course.value = value;
  showPickerCourse.value = false;
}
const onConfirmSchool = (value) => {
  school.value = value;
  showPickerSchool.value = false;
}
const onConfirmFace = (value) => {
  face.value = value;
  showPickerFace.value = false;
}
const onConfirmCalendar = (date) => {
  bir.value = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  showCalendar.value = false;
}
const onClickRight = () => {
  baseForm.value.submit()
}
</script>
<style scoped>
</style>

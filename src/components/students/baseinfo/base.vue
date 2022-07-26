<template>
  <div class="w-full h-full">
    <div class="p-2">
      <div class="flex flex-col justify-center mb-3 items-center gap-2">
        <img class="h-20 w-20 rounded-full" src="../../../assets/avactor.png" />
        <p class="text-sm">点击修改头像</p>
      </div>
      <van-form ref="baseForm" @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="username"
            required
            name="姓名"
            label="姓名"
            placeholder="姓名"
            :rules="[{ required: true, message: '请填写姓名' }]"
          />
          <van-field
            v-model="number"
            required
            name="学号"
            label="学号"
            placeholder="学号"
            :rules="[{ required: true, message: '请填写学号' }]"
          />
          <van-field
            v-model="sex"
            required
            type="sex"
            is-link
            readonly
            name="picker"
            label="性别"
            placeholder="点击选择性别"
            :rules="[{ required: true, message: '请选择性别' }]"
            @click="showPicker = true"
          />
          <van-popup v-model:show="showPicker" position="bottom">
            <van-picker
              :columns="columns"
              @confirm="onConfirm"
              @cancel="showPicker = false"
            />
          </van-popup>

          <van-field
            v-model="bir"
            is-link
            readonly
            required
            name="calendar"
            label="出生年月"
            placeholder="点击选择出生年月"
            @click="showCalendar = true"
            :rules="[{ required: true, message: '请选择出生年月' }]"
          />
          <van-calendar
            v-model:show="showCalendar"
            @confirm="onConfirmCalendar"
          />
          <van-field
            v-model="address"
            required
            name="家庭住址"
            label="家庭住址"
            placeholder="家庭住址"
            :rules="[{ required: true, message: '请填写家庭住址' }]"
          />

          <van-field
            v-model="face"
            is-link
            readonly
            required
            name="calendar"
            label="政治面貌"
            placeholder="点击选择政治面貌"
            @click="showPickerFace = true"
            :rules="[{ required: true, message: '请选择政治面貌' }]"
          />
          <van-popup v-model:show="showPickerFace" position="bottom">
            <van-picker
              :columns="columnsFace"
              @confirm="onConfirmFace"
              @cancel="showPickerFace = false"
            />
          </van-popup>

          <van-field
            v-model="nianji"
            is-link
            readonly
            required
            name="calendar"
            label="年级"
            placeholder="点击选择年级"
            @click="showPickerNianji = true"
            :rules="[{ required: true, message: '请选择年级' }]"
          />
          <van-popup v-model:show="showPickerNianji" position="bottom">
            <van-picker
              :columns="columnsNianji"
              @confirm="onConfirmNianji"
              @cancel="showPickerNianji = false"
            />
          </van-popup>
          <van-field
            v-model="banji"
            is-link
            readonly
            required
            name="calendar"
            label="班级"
            placeholder="点击选择班级"
            @click="showPickerBanji = true"
            :rules="[{ required: true, message: '请选择班级' }]"
          />
          <van-popup v-model:show="showPickerBanji" position="bottom">
            <van-picker
              :columns="columnsBanji"
              @confirm="onConfirmBanji"
              @cancel="showPickerBanji = false"
            />
          </van-popup>
          <van-field
            v-model="starttime"
            is-link
            readonly
            required
            name="calendar"
            label="入学时间"
            placeholder="点击选择入学时间"
            @click="showCalendar = true"
            :rules="[{ required: true, message: '请选择入学时间' }]"
          />
          <van-calendar
            v-model:show="showCalendar"
            @confirm="onConfirmCalendar"
          />
          <van-field
            v-model="school"
            is-link
            readonly
            required
            name="calendar"
            label="所在学校"
            placeholder="点击选择所在学校"
            @click="showPickerSchool = true"
            :rules="[{ required: true, message: '请选择所在学校' }]"
          />
          <van-popup v-model:show="showPickerSchool" position="bottom">
            <van-picker
              :columns="columnsSchool"
              @confirm="onConfirmSchool"
              @cancel="showPickerSchool = false"
            />
          </van-popup>
          <van-field
            name="banzhuren"
            label="是否班干部"
            required
            :rules="[{ required: true, message: '请选择是否班干部' }]"
          >
            <template #input>
              <van-radio-group v-model="banzhuren" direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="2">否</van-radio>
              </van-radio-group>
            </template>
          </van-field>

          <van-field
            v-model="phone"
            name="手机号"
            required
            label="手机号"
            placeholder="手机号"
            :rules="[{ required: true, message: '请填写手机号' }]"
          />

          <van-field
            v-model="email"
            name="邮箱"
            required
            label="邮箱"
            placeholder="邮箱"
            :rules="[{ required: true, message: '请填写邮箱' }]"
          />
          <van-field
            v-model="email"
            name="家庭情况"
            required
            rows="6"
            type="textarea"
            maxlength="250"
            show-word-limit
            autosize
            label="家庭情况"
            placeholder="家庭情况"
            :rules="[{ required: true, message: '请填写家庭情况' }]"
          />
        </van-cell-group>
      </van-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const username = ref("陈璇");
const sex = ref("男");
const showPicker = ref(false);
const bir = ref("1999-12-01");
const showCalendar = ref(false);
const course = ref("");
const school = ref("陇南市第一中学");
const face = ref("共青团员");
const banzhuren = ref("1");
const phone = ref("18945621547");
const email = ref("154845454@qq.com");
const number = ref("201545785");
const address = ref("");
const nianji = ref("高一");
const banji = ref("2");
const starttime = ref("2021-09-10");
const baseForm = ref(null);
const showPickerBanji = ref(false);
const showPickerSchool = ref(false);
const showPickerFace = ref(false);
const showPickerNianji = ref(false);

const columns = ["男", "女"];
const columnsBanji = ref(["1", "2"]);
const columnsNianji = ref(["高一", "高二", "高三"]);
const columnsSchool = ref([
  "陇南市第一中学",
  "陇南市第二中学",
  "陇南市第三中学",
  "陇南市第四中学",
  "陇南市第五中学",
]);
const columnsFace = ref(["共青团员", "团员", "少先队", "党员", "群众"]);
const onSubmit = (values) => {
  console.log("submit", values);
};
const onConfirm = (value) => {
  sex.value = value;
  showPicker.value = false;
};
const onConfirmBanji = (value) => {
  banji.value = value;
  showPickerBanji.value = false;
};
const onConfirmNianji = (value) => {
  nianji.value = value;
  showPickerNianji.value = false;
};
const onConfirmSchool = (value) => {
  school.value = value;
  showPickerSchool.value = false;
};
const onConfirmFace = (value) => {
  face.value = value;
  showPickerFace.value = false;
};
const onConfirmCalendar = (date) => {
  bir.value = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  showCalendar.value = false;
};
</script>
<style scoped>
</style>


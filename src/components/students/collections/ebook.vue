<!--
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-07-20 09:36:45
 * @Description: 
-->
<template>
  <div class="p-2">
    <div class="grid grid-cols-3 sm:grid-cols-4 gap-2">
      <div
        v-for="(book, index) in 25"
        :key="index"
        class="flex flex-col items-center gap-2 shadow-1"
      >
        <div class="p-2 rounded-md img-container">
          <img
            v-if="index === 0"
            src="../../../assets/ebboks/smaller0.png"
            alt=""
          />
          <img
            v-if="index === 1"
            src="../../../assets/ebboks/smaller2.png"
            alt=""
          />
          <img
            v-if="index === 2"
            src="../../../assets/ebboks/smaller26.png"
            alt=""
          />
          <img
            v-if="index === 3"
            src="../../../assets/ebboks/smaller3.png"
            alt=""
          />
          <img
            v-if="index === 4"
            src="../../../assets/ebboks/smaller4.png"
            alt=""
          />
          <img
            v-if="index === 5"
            src="../../../assets/ebboks/smaller5.png"
            alt=""
          />
          <img
            v-if="index === 6"
            src="../../../assets/ebboks/smaller6.png"
            alt=""
          />
          <img
            v-if="index === 7"
            src="../../../assets/ebboks/smaller7.png"
            alt=""
          />
          <img
            v-if="index === 8"
            src="../../../assets/ebboks/smaller8.png"
            alt=""
          />
          <img
            v-if="index === 9"
            src="../../../assets/ebboks/smaller9.png"
            alt=""
          />
          <img
            v-if="index === 10"
            src="../../../assets/ebboks/smaller10.png"
            alt=""
          />
          <img
            v-if="index === 11"
            src="../../../assets/ebboks/smaller11.png"
            alt=""
          />
          <img
            v-if="index === 12"
            src="../../../assets/ebboks/smaller12.png"
            alt=""
          />
          <img
            v-if="index === 13"
            src="../../../assets/ebboks/smaller13.png"
            alt=""
          />
          <img
            v-if="index === 14"
            src="../../../assets/ebboks/smaller14.png"
            alt=""
          />
          <img
            v-if="index === 15"
            src="../../../assets/ebboks/smaller15.png"
            alt=""
          />
          <img
            v-if="index === 16"
            src="../../../assets/ebboks/smaller16.png"
            alt=""
          />
          <img
            v-if="index === 17"
            src="../../../assets/ebboks/smaller17.png"
            alt=""
          />
          <img
            v-if="index === 18"
            src="../../../assets/ebboks/smaller18.png"
            alt=""
          />
          <img
            v-if="index === 19"
            src="../../../assets/ebboks/smaller19.png"
            alt=""
          />
          <img
            v-if="index === 20"
            src="../../../assets/ebboks/smaller20.png"
            alt=""
          />
          <img
            v-if="index === 21"
            src="../../../assets/ebboks/smaller21.png"
            alt=""
          />
          <img
            v-if="index === 22"
            src="../../../assets/ebboks/smaller22.png"
            alt=""
          />
          <img
            v-if="index === 23"
            src="../../../assets/ebboks/smaller23.png"
            alt=""
          />
          <img
            v-if="index === 24"
            src="../../../assets/ebboks/smaller24.png"
            alt=""
          />
        </div>
        <p class="text-sm text-ellipsis px-2 w-full ellipis">
          {{ bookname[index] }}
        </p>
      </div>
    </div>
  </div>
</template> 
<script setup>
import { ref } from "vue";
const bookname = ref([
  "Effective DevOps with AWS - Second Edition",
  "Blockchain By Example",
  "Master Swift 5",
  "Responsive Web Design with HTML5 and CSS3 - Second Edition",
  "Mastering Swift 5 - Fifth Edition",
  "Extreme C",
  "DevOps Paradox",
  "Mastering Kubernetes - Second Edition",
  "Learn Kali Linux 2019",
  "Learn T-SQL Querying",
  "AI Crash Course",
  "Learn Power BI",
  "Learn Python Programming - Second Edition",
  "Learn PowerShell Core 6.0",
  "Software Architecture with Spring 5.0",
  "Expert Delphi",
  "SQL Server 2017 Administrator's Guide",
  "Mastering Xamarin UI Development - Second Edition",
  "Serverless Design Patterns and Best Practices",
  "Big Data Analytics with Hadoop 3",
  "Building Applications with Spring 5 and Vue.js 2",
  "Microsoft Dynamics 365 Enterprise Edition - Financial Management (Third Edition)",
  "Splunk 7.x Quick Start Guide",
  "Artificial Intelligence for Big Data",
  "Django RESTful Web Services",
]);
</script>
<style lang="css" scoped>
.img-container img {
  border-radius: 10px;
}
.shadow-1 {
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
}
.ellipis {
  display: -webkit-box;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

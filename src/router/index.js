/*
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-06-30 15:06:03
 * @Description: 
 */
import layout from '../layout/index.vue'
import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: '/',
    component: layout,
    children: [
      {
        path: 'baseinfo',
        name: 'BaseiInfo',
        component: () => import("../components/baseinfo/index.vue")
      }
    ]
  },
]

// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})
export default router

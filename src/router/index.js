/*
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-06-30 15:06:03
 * @Description: 
 */
import layout from '../layout/index.vue'
import index1 from '../layout/index1.vue'
import layout_teacher from '../layout/index-teacher.vue'
import { createRouter, createWebHashHistory } from "vue-router";
import { formProps } from 'element-plus'
const routes = [
  {
    path: '/',
    component: index1,
    children: [
      {
        path: '/child',
        redirect: "/baseinfo",
        component: layout,
        children: [
          {
            path: 'baseinfo',
            name: 'BaseiInfo',
            component: () => import("../components/child/baseinfo/index.vue")
          },
          {
            path: 'report',
            name: 'Report',
            component: () => import("../components/child/report/index.vue")
          },
          {
            path: 'jc',
            name: 'JC',
            component: () => import("../components/child/JC/index.vue")
          },
          {
            path: 'st',
            name: 'ST',
            component: () => import("../components/child/ST/index.vue")
          },
          {
            path: 'zj',
            name: 'ZJ',
            component: () => import("../components/child/ZJ/index.vue")
          }
        ]
      },
      {
        path: '/child-index',
        name: "childIndex",
        component: () => import("../components/child/index.vue"),
      },
      {
        path: 'jf',
        name: "jiaofei",
        component: () => import("../components/jiaofei/index.vue"),
      },
      {
        path: 'cz',
        name: "chongzhi",
        component: () => import("../components/chongzhi/index.vue"),
      },
      {
        path: 'czdetail',
        name: "chongzhidetail",
        component: () => import("../components/chongzhi/chongzhidetail.vue"),
      },
      {
        path: 'profile',
        name: "profile",
        component: () => import("../components/profile/index.vue"),
      },
      {
        path: '/teacher',
        component: layout_teacher,
        redirect: "/my-class",
        children: [
          {
            path: '/my-class',
            name: 'MyClass',
            component: () => import("../components/teacher/my-classs/index.vue")
          },
          {
            path: '/my-course',
            name: 'MyCourse',
            component: () => import("../components/teacher/my-course/index.vue")
          },
          {
            path: '/my-course-detail',
            name: 'MyCourseDetail',
            component: () => import("../components/teacher/my-course/course-detail.vue")
          },
          {
            path: '/my-video',
            name: 'MyVideo',
            component: () => import("../components/teacher/my-videos/index.vue")
          },
          {
            path: '/my-courseware',
            name: 'MyCourseware',
            component: () => import("../components/teacher/my-courseware/index.vue")
          },
          {
            path: '/my-exercise',
            name: 'MyExercise',
            component: () => import("../components/teacher/my-exercise/index.vue")
          },

        ]
      },

      {
        path: '/teacher-baseinfo',
        name: 'MyBaseinfo',
        component: () => import("../components/teacher/baseinfo/base.vue")
      },
      {
        path: '/teacher-address',
        name: 'MyBAddress',
        component: () => import("../components/teacher/baseinfo/address.vue")
      },
      {
        path: '/add-address',
        name: 'addAddress',
        component: () => import("../components/address/add.vue")
      },
      {
        path: '/edit-password',
        name: 'editPassword',
        component: () => import("../components/password/edit.vue")
      },
      {
        path: '/my-friends',
        name: 'MyFriends',
        component: () => import("../components/my-friends/index.vue")
      },
      {
        path: '/my-message',
        name: 'MyMessage',
        component: () => import("../components/my-message/index.vue")
      },
      {
        path: '/my-message-detail',
        name: 'MyMessageDetail',
        component: () => import("../components/my-message/msg-detail.vue")
      },
      {
        path: '/student-center',
        name: "studentCenter",
        component: () => import("../pages/student/index.vue"),
      },
      {
        path: '/follow-list-student',
        component: () => import('../components/students/follow-list.vue')
      },
      {
        path: '/fans-list-student',
        component: () => import("../components/students/fans-list.vue")
      },
      {
        path: '/collection',
        component: () => import("../components/students/collection.vue")
      },
      {
        path: '/course-choose',
        component: () => import("../components/students/course-choose/index.vue")
      },
      {
        path: '/student-put-question',
        component: () => import("../components/students/put-question/index.vue")
      },
      {
        path: "/student-question-detail",
        component: () => import("../components/students/put-question/question-detail.vue")
      },
      {
        path: "student-question-replay",
        component: () => import("../components/students/put-question/replay-detail.vue")
      },
      {
        path: "student-class-reqport",
        component: () => import("../components/students/class-report/index.vue")
      },
      {
        path: "student-exercise",
        component: () => import("../components/students/exercises/index.vue")
      },
      {
        path: 'class-schedule-card',
        component: () => import("../components/students/class-schedule-card/index.vue")
      },
      {
        path: 'student-association',
        component: () => import("../components/students/association/index.vue")
      },
      {
        path: 'student-chat',
        component: () => import("../components/students/chat-student/index.vue")
      },
      {
        path: 'student-info',
        component: () => import("../components/students/baseinfo/index.vue")
      },
      {
        path: 'courseware-download',
        component: () => import("../components/students/courseware-download/index.vue")
      },
      {
        path: 'student-grow',
        component: () => import("../components/students/grow/index.vue")
      },
      {
        path: 'student-reading',
        component: () => import("../components/students/reading//index.vue")
      },
      {
        path:'intergal',
        component:()=>import("../components/students/integral/index.vue")
      }
      ,{
        path:"integral-detail",
        component:()=>import("../components/students/integral/malldetail.vue")
      },
      {
        path:'order-detail',
        component:()=>import("../components/students/integral/orderDetail.vue")
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

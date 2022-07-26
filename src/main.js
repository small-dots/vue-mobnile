/*
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-06-30 14:56:47
 * @Description: 
 */
import { createApp } from 'vue'
import './styles/index.css'
import router from "./router"
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Chat from 'vue3-beautiful-chat'
import Vant from 'vant';
import 'vant/lib/index.css';
const app = createApp(App)
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.use(Chat)
app.use(ElementPlus)
app.use(Vant)
app.mount('#app')

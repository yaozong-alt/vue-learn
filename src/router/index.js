import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('./../views/home')
const Category = () => import('./../views/category')
const Shopcart = () => import('./../views/shopcart')
const Profile = () => import('./../views/profile')
// 解决点击活跃路由报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
// 1.注册插件
Vue.use(VueRouter)
// 2.创建路由
const routes = [
  {
    path:'',
    redirect: '/home',
  },
  {
    path:'/home',
    component: Home
  },
  {
    path:'/category',
    component: Category
  },
  {
    path:'/shopcart',
    component: Shopcart
  },
  {
    path:'/profile',
    component: Profile
  }
]
const router = new VueRouter({
  routes,
  modal: history
})
// 3.导出router
export default router

// 4. 在main.js中导入
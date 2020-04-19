import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'login',
    component: ()=>import(/* webpackChunkName: "login" */ "../views/login.vue"),//怪异注释实现路由懒加载
    meta: {
      title: '首页',
    },
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue'),
    meta:{ title:"主页" },
    // children:[{

    // }]
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title//设置每个页面的title
  }
  next()
 })
export default router

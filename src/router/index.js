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
      index:1
    },
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue'),
    redirect: '/user',
    meta:{ title:"主页" },
    children:[{
      path: '/user',
      name: 'user',
      component: () => import(/* webpackChunkName: "user" */ '../views/home/user/userList'),
      meta:{ title:"用户列表",index:2 },
    },{
      path: '/changePwd',
      name: 'changePwd',
      component: () => import(/* webpackChunkName: "adminMang" */ '../views/home/adminManger/changePwd/changepwd.vue'),
      meta:{ title:"修改后台密码" ,index:3},
    },{
      path: '/subManger',
      name: 'subManger',
      component: () => import(/* webpackChunkName: "adminMang" */ '../views/home/adminManger/subManger/submanger.vue'),
      meta:{ title:"子管理员",index:4 },
    }]
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

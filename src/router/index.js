import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
 
  {
    path: "/home",
    component: () => import('@/views/home'),
    children:[
     {
      path: "/Index",
      name:"/Index",
      component: () => import('@/views/Index/Index.vue'),
     },
     {
      path: "/ShowTeachers",
      name:"/ShowTeachers",
      component: () => import('@/views/ShowTeachers/ShowTeachers.vue'),
     },
     {
      path: "/News",
      name:"/News",
      component: () => import('@/views/News/News.vue'),
     },
     {
      path: "/BookList",
      name:"/BookList",
      component: () => import('@/views/BookList/BookList.vue'),
     },
     {
      path: "/Person",
      name:"/Person",
      component: () => import('@/views/Person/Person.vue'),
     }
    ]
  },
   //注册页面
  {
    path: '/deng',
    component: () => import('@/views/deng'),
  },
  {
    path: '/login',
    component: () => import('@/views/login'),
  },
  {
    path: '/tui',
    component: () => import('@/views/tui'),
  },
  //设置密码
  {
    path: '/set',
    component: () => import('@/views/set'),
  },
//签到页面
{
  path: '/qian',
  component: () => import('@/views/qian'),
},
{
  path: '/xiang',
  component: () => import('@/views/xiang'),
},
//课程详情页面
{
  path: '/kx',
  component: () => import('@/views/kx'),
},
//咨询详情
{
  path: '/zx',
  component: () => import('@/views/zx'),
},

]

const router = new VueRouter({
  mode: "history",

  routes,
});

export default router;
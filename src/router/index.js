import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import Regist from '../components/regist.vue'
import Home from '../components/home.vue'
import Welcome from '../components/welcome.vue'
import zhuanzhang from '../components/zhuanzhang/zhuanzhang'
import find from '../components/zhuanzhang/find'
import user from '../components/zhuanzhang/user'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/regist', component: Regist },

    {
      path: '/home', component: Home, redirect: '/welcome', children: [
        { path: '/welcome', name:"主页",component: Welcome },
        { path: '/zhuanzhang',name:"转账功能", component: zhuanzhang },
        { path: '/find',name:"转账查询", component: find },
        // { path: '/user',name:"个人中心", component: user },


      ]
    },

  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
       return next();
  }else if(to.path==='/regist'){
    return next()
  }

  const tokenstr = window.sessionStorage.getItem('token')
  if (!tokenstr) {
    return next('/login')
  } else {
    next()
  }
  
})

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


export default router

import Vue from 'vue'
import Router from 'vue-router'
// 注册路由
Vue.use(Router)
// 登录
import login from '../components/page/login/login'
// 忘记密码
import forgetPasswordForm from '../components/page/forgetPasswordForm/forgetPasswordForm'
//首页
import homePage from '../components/page/homePage/homePage'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/forgetPasswordForm',
      name: 'forgetPassword',
      component: forgetPasswordForm
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: homePage
    }
  ]
})

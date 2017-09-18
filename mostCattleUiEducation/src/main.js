import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';    // 默认主题

Vue.use(ElementUI)
Vue.prototype.$axios = axios;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

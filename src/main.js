import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import {Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import App from './App.vue'
// import env from './env'

const mock = false;
if(mock){
  require('./mock/api');
}

// 根据前端的跨域方式做调整 /a/b : /api/a/b => /a/b
// 借口代理
axios.defaults.baseURL = '/api';
// axios.defaults.baseURL = ' https://www.easy-mock.com/mock/5ea9c558b3e240329310ce72/mall';
axios.defaults.timeout = 8000;

// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
// console.log(env.baseURL);

// 接口错误拦截(拦截业务上的错误（状态码为200），不包括nginx报的错误)
axios.interceptors.response.use(function(response){
  let res = response.data;
  let path = location.hash;
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){
    if(path != '#/index'){
      window.location.href = '/#/login';
    }
    return Promise.reject(res);
  }else{
    // alert(res.msg);
    Message.warning(res.msg);
    return Promise.reject(res);
  }
},(error)=>{
  let res = error.response;
  Message.error(res.data.message);
  return Promise.reject(res);
});

Vue.use(VueAxios,axios);
Vue.use(VueCookie);
// Vue.use(Message);
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
});
Vue.prototype.$message = Message;

// /生产环境的提示
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

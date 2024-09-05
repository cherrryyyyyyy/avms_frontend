import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import 'normalize.css'
import '@/assets/css/base.css'
import router from './router'
import api from './api'
import store from './store/index'
import qs from 'qs'
import {Base64} from 'js-base64'
//xml格式 页面代码高亮文件引入 
import hljs from 'highlight.js'
//样式文件，我选了a11y-light.css，可选择文件里其他高亮样式css
import 'highlight.js/styles/a11y-light.css' 


Vue.prototype.$api = api;
Vue.config.productionTip = false
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
      blocks.forEach((block)=>{
      hljs.highlightBlock(block)
  })
})


new Vue({
  render: h => h(App),  //h为Vue.js里的createElement函数，作用为生成一个App.vue的VNode节点，render拿到这个节点后返回给Vue.js的mount函数，渲染成真实的DOM节点，并挂载到根节点上
  router,  //引入Vue router
  store,
  qs,
  Base64
}).$mount('#app')  //手动挂载到id为app的dom中


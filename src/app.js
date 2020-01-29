import Vue from 'vue'
import Button from './button.vue'

// 全局组件
Vue.component('coco-button', Button)

new Vue({
  el: '#app'
})
import Vue from 'vue'
import Button from './src/button'
import ButtonGroup from './src/button-group'

// 全局组件
Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
  }
})
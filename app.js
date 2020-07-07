import Vue from 'vue'
import Button from './src/button'
import ButtonGroup from './src/button-group'
import Toast from './src/toast'
import plugin from './src/plugin'

// 全局组件
Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-toast', Toast)
Vue.use(plugin)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
  },
  mounted() {
    this.showToast();
  },
  methods: {
    showToast() {
      this.$toast('我是toast')
    }
  }
})
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
  methods: {
    autoClose() {
      this.$toast('默认2s关闭toast')
    },
    autoCloseDelay() {
      this.$toast('延迟5s关闭toast', { autoCloseDelay: 5 })
    },
    showClose() {
      this.$toast('显示关闭按钮', { showClose: true, autoClose: false })
    },
    onClose() {
      this.$toast('点击关闭按钮回调', { showClose: true, autoClose: false, onClose: (vm) => {
        alert('点击关闭按钮后回调')
      }})
    },
    enableHtml() {
      this.$toast('<strong>加粗标签</strong>加粗标签', { enableHtml: true })
    },
    middle() {
      this.$toast('位置居中', { position: 'middle' })
    },
    top() {
      this.$toast('位置居上', { position: 'top' })
    },
    bottom() {
      this.$toast('位置居下', { position: 'bottom' })
    },
  }
})
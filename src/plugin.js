import Toast from './toast'

export default {
  install(Vue, options) {
    Vue.prototype.$toast = (message) => { // 添加实例方法
      let Constructor = Vue.extend(Toast) // 创建toast构造器
      let toast = new Constructor() // 实例化toast组件
      toast.$slots.default = [message] // 向slot里放数据
      toast.$mount() // 挂载在内存中
      document.body.appendChild(toast.$el)
    }
  }
}

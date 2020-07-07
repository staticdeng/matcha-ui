const expect = chai.expect;
import Vue from 'vue'
import Button from '../src/button'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {

  it('存在Button', () => {
    expect(Button).to.exist
  })

  it('Button可以设置icon', () => {
    const Constructor = Vue.extend(Button) // button组件
    const vm = new Constructor({
      propsData: {
        icon: 'settings'
      }
    }).$mount() // 实例化button组件并挂载在内存中
    const useElement = vm.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.equal('#icon-settings')
    vm.$destroy()
  })

  it('Button可以设置loading', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
        loading: true
      }
    }).$mount()
    const useElements = vm.$el.querySelectorAll('use')
    expect(useElements.length).to.equal(1)
    expect(useElements[0].getAttribute('xlink:href')).to.equal('#icon-loading')
    vm.$destroy()
  })

  it('Button icon默认的order是1', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
      }
    }).$mount(div)
    const icon = vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
  })

  it('Button设置iconPosition可以改变order', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
        iconPosition: 'right'
      }
    }).$mount(div)
    const icon = vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
  })
  it('点击button触发click事件', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
      }
    }).$mount()

    const callback = sinon.fake(); // 监听是否被调用
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.been.called
  })
})
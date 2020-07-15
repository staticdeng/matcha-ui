const expect = chai.expect;
import Vue from 'vue';
import Toast from '../src/toast';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Toast', () => {
  it('exist', () => {
    expect(Toast).to.exist;
  })

  describe('props', function() {
    this.timeout(10000);
    
    it('autoClose', (done) => {
      let div = document.createElement('div');
      document.body.appendChild(div);
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          autoClose: true
        }
      });
      vm.$mount(div);
      vm.$on('close', () => {
        expect(document.body.contains(vm.$el)).to.eq(false); // 监听关闭，页面中不存在toast实例则autoClose props生效了
        done();
      });
    });
    it('showClose', () => {
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          showClose: true
        }
      });
      vm.$mount();
      // console.log(vm.$el);
      let closeButton = vm.$el.querySelector('.toast-close');
      // showClose传true情况下在页面中获取'.toast-close'这个类的元素存在，则该props生效
      expect(closeButton).to.exist;
    });
    it('onClose', () => { // 这里主要监听点击事件
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          showClose: true,
        }
      });
      vm.$mount();
      let closeButton = vm.$el.querySelector('.toast-close');
      const fake = sinon.fake();
      closeButton.addEventListener('click', fake); // sinon监听点击事件是否被调用
      closeButton.click();
      expect(fake).to.have.been.called; // 监听fake有被called则closeButton被点击了，则closeButton的点击事件正常
    });
    it('enableHtml', () => {
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: { enableHtml: true }
      });
      vm.$slots.default = ['<strong id="test">hi</strong>'];
      vm.$mount();
      let strong = vm.$el.querySelector('#test');
      expect(strong).to.exist;
    });
    it('position', () => {
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          position: 'bottom'
        }
      });
      vm.$mount();
      expect(vm.$el.classList.contains('position-bottom')).to.eq(true);
    });
  })
})
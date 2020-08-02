<template>
  <div class="marginTop50">
    <h2>显示关闭按钮</h2>
    <p><strong>预览</strong></p>
    <div>
      <mat-button @click="onClose">显示关闭按钮</mat-button>
    </div>

    <p><strong>代码</strong></p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import Vue from 'vue';
import MatToastPlugin from '../../../src/toastPlugin';
import MatButton from '../../../src/button';
Vue.use(MatToastPlugin);

export default {
  components: { MatButton },
  data () {
    return {
      content: `
<template>
  <mat-button @click="onClose">显示关闭按钮</mat-button>
</template>
<script>
  methods: {
    onClose() {
      this.$toast('点击关闭按钮回调', { 
        showClose: true, 
        autoClose: false, 
        onClose: (vm) => {
          alert('点击关闭按钮后回调')
        }
      })
    },
  }`.trim() }
  },
  methods: {
    onClose() {
      this.$toast('点击关闭按钮回调', { showClose: true, autoClose: false, onClose: (vm) => {
        alert('点击关闭按钮后回调')
      }})
    },
  }
}
</script>
<style lang="scss" scoped>
  .marginTop50{
    margin-top: 50px;
  }
</style>
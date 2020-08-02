<template>
  <div class="marginTop20">
    <h2>this.$toast</h2>
    <p><strong>预览</strong></p>
    <div>
      <mat-button @click="$toast('上方弹出', { position: 'top' })">上方弹出</mat-button>
      <mat-button @click="$toast('中间弹出')">中间弹出</mat-button>
      <mat-button @click="$toast('下方弹出', { position: 'bottom' })">下方弹出</mat-button>
    </div>

    <p><strong>代码</strong></p>
    <div>全局注册：</div>
    <pre><code>{{use}}</code></pre>
    <div>组件中使用：</div>
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
      use: `
        import { MatToastPlugin } from 'matcha-ui';
        Vue.use(MatToastPlugin);
      `.replace(/^ {8}/gm, '').trim(),
      content: `
        <mat-button @click="$toast('上方弹出', { position: 'top' })">上方弹出</mat-button>
        <mat-button @click="$toast('中间弹出')">中间弹出</mat-button>
        <mat-button @click="$toast('下方弹出', { position: 'bottom' })">下方弹出</mat-button>
    `.replace(/^ {8}/gm, '').trim()
    }
  }
}
</script>
<style lang="scss" scoped>
  .marginTop20{
    margin-top: 20px;
  }
</style>
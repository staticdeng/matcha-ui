<template>
  <div class="marginTop50">
    <h2>支持HTML</h2>
    <p><strong>预览</strong></p>
    <div>
      <mat-button @click="$toast('<strong>加粗标签</strong>加粗标签', { enableHtml: true })">加粗字体标签</mat-button>
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
      content: `<mat-button @click="$toast('<strong>加粗标签</strong>加粗标签', { enableHtml: true })">加粗字体标签</mat-button>`.trim() 
    }
  },
}
</script>
<style lang="scss" scoped>
  .marginTop50{
    margin-top: 50px;
  }
</style>
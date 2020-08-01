<template>
  <div>
    <mat-button>默认按钮</mat-button>
    <mat-button icon="settings">带图标</mat-button>
    <mat-button :loading="true">加载图标</mat-button>
    <mat-button icon="right" icon-position="right">图标位置靠右</mat-button>
    <mat-button disabled>disabled按钮</mat-button>
    <mat-button-group>
      <mat-button icon="left">上一页</mat-button>
      <mat-button>更多</mat-button>
      <mat-button icon="right" icon-position="right">下一页</mat-button>
    </mat-button-group>
    <pre>
      <code>{{content}}</code>
    </pre>
  </div>
</template>
<script>
  import MatButton from '../../../src/button';
  import MatButtonGroup from '../../../src/button-group';
  export default {
    components: {
      MatButton,
      MatButtonGroup
    },
    data () {
      return {
        content: `
        <mat-button>默认按钮</mat-button>
        <mat-button icon="settings" icon-position="right">带图标</mat-button>
        <mat-button :loading="true">加载图标</mat-button>
        <mat-button disabled>disabled</mat-button>
        <mat-button-group>
          <mat-button icon="left">上一页</mat-button>
          <mat-button>更多</mat-button>
          <mat-button icon="right" icon-position="right">下一页</mat-button>
        </mat-button-group>
      `.replace(/\t+| +/g, '').trim()
      }
    }
  }
</script> 
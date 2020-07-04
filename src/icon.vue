<template>
  <svg class="g-icon">
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>
<script>
import './icon/iconfont' // iconfont的symbol引用方式在vue中使用

export default {
  name: 'icon',
  props: ['name'] // icon名称：loading | left | right  | setting
};
</script>
<style lang="scss" scoped>
.g-icon {
  width: 1em;
  height: 1em;
  vertical-align: middle;
}
</style>
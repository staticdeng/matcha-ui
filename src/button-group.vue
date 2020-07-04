<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'g-button-group',
  mounted() {
    for(let node of this.$el.children) {
      let name = node.nodeName.toLowerCase()
      if (name !== 'button') {
        console.warn('g-button-group的子元素应该全是g-button，而不是${name}')
      }
    }
  }
};
</script>
<style lang="scss" scoped>
$border-radius: 4px;
.g-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .g-button {
    border-radius: 0;
    margin-left: -1px;
    &:first-child {
      margin-left: 0;
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
}
</style>
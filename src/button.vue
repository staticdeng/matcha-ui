<template>
  <button class="g-button" @click="$emit('click')" :class="[icon ? `icon-${iconPosition}` : '']">
    <g-icon v-if="loading" name="loading" class="spin"></g-icon>
    <g-icon v-if="icon && !loading" :name="icon"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import Icon from './icon';
export default {
  name: 'g-button',
  components: { 'g-icon': Icon },
  props: {
    icon: { type: String }, // icon名称
    loading: { type: Boolean, default: false }, // 是否显示loading icon: true | false
    iconPosition: { // icon的位置：left | right
      type: String, 
      default: 'left', 
      validator (value) {
        return value === 'left' || value === 'right'
      }
    } 
  }
};
</script>
<style lang="scss">
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.g-button {
  vertical-align: middle;
  height: var(--button-height);
  padding: 0 1em;
  font: inherit;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-size);
  line-height: var(--font-size);
  &:hover {
    border-color: var(--border-color-hover);
    position: relative;
    z-index: 1;
  }
  &:active {
    background: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .g-icon {
    margin-right: 0.3em;
    order: 1;
  }
  > .content {
    order: 2;
  }
  .spin {
    animation: spin 1s infinite linear;
  }
  &.icon-right {
    > .g-icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.3em;
    }
    > .content {
      order: 1;
    }
  }
}
</style>
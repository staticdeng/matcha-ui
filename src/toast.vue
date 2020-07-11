<template>
  <div class="toast">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <span v-if="showClose" @click="execClose">
      <mat-icon name="delete" class="toast-close"></mat-icon>
    </span>
  </div>
</template>
<script>
import Icon from "./icon";
export default {
  name: "MatchaToast",
  components: { "mat-icon": Icon },
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 2
    },
    showClose: {
      type: Boolean,
      default: false
    },
    onClose: {
      type: Function
    },
    enableHtml: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.execAutoClose();
  },
  methods: {
    close() {
      this.$el.remove();
      this.$destroy();
    },
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000);
      }
    },
    execClose() {
      this.close();
      if (this.onClose && typeof this.onClose === "function") {
        this.onClose(this); // this === toast实例
      }
    }
  }
};
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  background: $toast-bg;
  font-size: $font-size;
  color: white;
  min-height: $toast-min-height;
  line-height: 1.8;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  border-radius: 2px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
  padding: 0 24px;
  z-index: 999;
  .message {
    padding: 6px 0;
  }
  .toast-close {
    fill: #fff;
    width: 10px;
    height: 10px;
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
  }
}
</style>
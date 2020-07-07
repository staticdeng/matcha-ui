<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MatchaToast'
}
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  background: $toast-bg;
  font-size: $font-size; 
  color: white;
  height: $toast-height;
  line-height: 1.8;
  position: fixed; 
  top: 0; 
  left: 50%; 
  transform: translateX(-50%); 
  display: flex;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
  padding: 0 16px;
  z-index: 999;
}
</style>
<template>
  <svg class="g-icon">
    <use :xlink:href="`#i-${name}`" />
  </svg>
</template>
<script>
export default {
  name: 'icon',
  props: ['name'] // icon名称：loading | left | right | down | settings | thumbs-up | download
};
</script>
<style lang="scss">
.g-icon {
  width: 1em;
  height: 1em;
  vertical-align: middle;
}
</style>
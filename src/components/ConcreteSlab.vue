<script lang="ts" setup>

</script>

<template>
  <div class="concrete-slab">
    <div class="concrete-slab__top"></div>
    <div class="concrete-slab__bottom"></div>
  </div>
</template>

<style lang="scss" scoped>
.concrete-slab {
  width: 1328px;
  margin: 0 auto;
  .concrete-slab__top {
    background-color: #828282;
    height: 100px;
    width: 1170px;
    transform: perspective(230px) rotateX(33deg);
    margin: 0 auto;
    margin-top: -13px;
  }
  .concrete-slab__bottom {
    background-color: #515151;
    width: 100%;
    height: 25px;
    margin-top: -3px;
  }
}
</style>

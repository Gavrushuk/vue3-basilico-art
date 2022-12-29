<script lang="ts" setup>

</script>

<template>
  <div class="window-wrapper">
    <div class="window-wrapper-top-part"></div>
    <slot></slot>
    <div class="window-wrapper-bottom-part"></div>
  </div>
</template>

<style lang="scss" scoped>
.window-wrapper {
  position: relative;
  .window-wrapper-top-part {
    position: relative;
    background-color: #ffffff;
    border: 2px solid $stone-border;
    width: 200px;
    height: 50px;
    &:after {
      content: "";
      background-color: #ffffff;
      border: 2px solid $stone-border;
      position: absolute;
      top: 0;
      left: 50%;
      width: 60px;
      height: 40px;
      transform: translate(-50%, -50%) perspective(100px) rotateX(-50deg);
      box-shadow: 0px 5px 10px lightgray;
    }
  }

  .window-wrapper-bottom-part {
    position: relative;
    background-color: #ffffff;
    border: 2px solid $stone-border;
    border-top: 0;
    border-bottom: 0;
    width: 180px;
    height: 180px;
    margin-top: -2px;
    transform: translatex(10px);
    &:after {
      content: "";
      position: absolute;
      background-color: #ffffff;
      border: 2px solid $stone-border;
      left: -20px;
      right: -20px;
      bottom: 0;
      height: 20px;
      transform: translatey(20px);
      box-shadow: 0px 5px 10px lightgray;
    }
  }
}
</style>

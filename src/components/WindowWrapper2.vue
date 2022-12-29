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
    width: 180px;
    height: 50px;
    border-radius: 50% 50% 0 0 / 100% 100% 0 0;
    &:after {
      content: "";
      background-color: #ffffff;
      border: 2px solid $stone-border;
      position: absolute;
      top: 0;
      left: 50%;
      width: 60px;
      height: 40px;
      transform: translate(-50%, -25%) perspective(100px) rotateX(-50deg);
      box-shadow: 0px 5px 10px lightgray;
    }
    &:before {
      content: "";
      position: absolute;
      top: 16px;
      left: 20px;
      right: 20px;
      background-color: $house-bg;
      border-radius: 50% 50% 0 0 / 100% 100% 0 0;
      border: 2px solid $stone-border;
      height: 30px;
    }
  }

  .window-wrapper-window {
    top: 70px;
    left: 20px;
    right: 20px;
  }

  .window-wrapper-bottom-part {
    position: relative;
    background-color: #ffffff;
    border: 2px solid $stone-border;
    border-top: 0;
    width: 180px;
    height: 230px;
    margin-top: -2px;
  }
}
</style>

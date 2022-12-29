<script lang="ts" setup>

</script>

<template>
  <div class="door-wrapper">
    <div class="door-wrapper__part-top">
      <div class="door-wrapper__part-top__glass"></div>
    </div>
    <slot></slot>
    <div class="door-wrapper__part-bottom"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.door-wrapper {
  position: relative;
  .door-wrapper__part-top {
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
    .door-wrapper__part-top__glass {
      position: absolute;
      top: 16px;
      left: 20px;
      right: 20px;
      height: 30px;
      border-radius: 50% 50% 0 0 / 100% 100% 0 0;
      background-color: $windows-bg;
      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        border-radius: 50% 50% 0 0 / 100% 100% 0 0;
        height: 30px;
        background-color: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(5px);
      }
    }
  }

  .door-wrapper__part-bottom {
    position: relative;
    background-color: #ffffff;
    border: 2px solid $stone-border;
    border-top: 0;
    width: 180px;
    height: 460px;
    margin-top: -2px;
  }
}
</style>

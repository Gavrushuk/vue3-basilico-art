<script lang="ts" setup>
defineProps<{
  type: 'square-top-part' | 'rounded-top-part' | 'without-top-part'
}>();
</script>

<template>
  <div
    class="window-wrapper"
    :class="[type]"
  >
    <div class="window-wrapper__part-top"></div>
    <slot class="window"></slot>
    <div class="window-wrapper__part-bottom"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.night {
  .window-wrapper {
    .window-wrapper__part-top,
    .window-wrapper__part-bottom {
      filter: brightness(0.75);
    }
  }
}

.window-wrapper {
  position: relative;

  &.square-top-part {
    .window-wrapper__part-top {
      position: relative;
      background-color: #ffffff;
      border: 2px solid $stone-border;
      width: 200px;
      height: 50px;
      transition: filter 0.5s;
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

    .window-wrapper__part-bottom {
      position: relative;
      background-color: #ffffff;
      border: 2px solid $stone-border;
      border-top: 0;
      border-bottom: 0;
      width: 180px;
      height: 180px;
      margin-top: -2px;
      transform: translatex(10px);
      transition: filter 0.5s;
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
      }
    }
  }

  &.rounded-top-part {
    .window-wrapper__part-top {
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
        height: 25px;
      }
    }

    :slotted(.window) {
      top: 70px;
      left: 20px;
      right: 20px;
    }

    .window-wrapper__part-bottom {
      position: relative;
      background-color: #ffffff;
      border: 2px solid $stone-border;
      border-top: 0;
      width: 180px;
      height: 230px;
      margin-top: -3px;
      &:before,
      &:after {
        content: '';
        background-color: #ffffff;
        position: absolute;
        top: 100%;
        width: 20px;
        height: 230px;
        border: 2px solid $stone-border;
        border-top: none;
      }
      &:before {
        left: -2px;
      }
      &:after {
        right: -2px;
      }
    }
  }

  &.without-top-part {
    .window-wrapper__part-top {
      display: none;
    }
    
    :slotted(.window) {
      left: 20px;
      right: 20px;
    }

    .window-wrapper__part-bottom {
      position: relative;
      background-color: #ffffff;
      border: 2px solid $stone-border;
      border-bottom: 0;
      width: 180px;
      height: 232px;
      margin-top: -2px;
      &:before {
        content: "";
        background-color: #ffffff;
        border: 2px solid $stone-border;
        position: absolute;
        top: 8px;
        left: 50%;
        width: 60px;
        height: 40px;
        transform: translate(-50%, -50%) perspective(100px) rotateX(-50deg);
        box-shadow: 0px 5px 10px lightgray;
      }
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
      }
    }
  }
}
</style>

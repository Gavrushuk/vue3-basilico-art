<script lang="ts" setup>

</script>

<template>
  <div class="window">
    <div class="window-left-side opened"></div>
    <div class="window-right-side opened"></div>
  </div>
</template>

<style lang="scss" scoped>
.window {
  position: absolute;
  background-color: $windows-bg;
  top: 20px;
  left: 30px;
  right: 30px;
  bottom: 20px;
  border: 10px solid $windows-borders;
  z-index: 1;
  box-shadow: inset 0px 0px 5px lightgray;
  &:after {
    content: "";
    position: absolute;
    background-color: $windows-borders;
    width: 10px;
    height: 100%;
    left: 50%;
    transform: translatex(-50%);
  }
  .window-left-side {
    position: absolute;
    top: -10px;
    left: -10px;
    height: 100%;
    width: 57.5px;
    border: 10px solid $windows-borders;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    cursor: pointer;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      border-bottom: 10px solid $windows-borders;
      height: 50px;
    }
    &.opened,
    &:active {
      top: 5px;
      left: -28px;
      height: 143px;
      width: 85px;
      transform: perspective(300px) rotateY(60deg);
      &:after {
        height: 39px;
      }
    }
    &.opened {
      &:active {
        top: -10px;
        left: -10px;
        height: 100%;
        width: 57.5px;
        transform: none;
        &:after {
          height: 50px;
        }
      }
    }
  }
  .window-right-side {
    position: absolute;
    top: -10px;
    right: -10px;
    height: 100%;
    width: 57px;
    border: 10px solid $windows-borders;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    cursor: pointer;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      border-bottom: 10px solid $windows-borders;
      height: 50px;
    }
    &.opened,
    &:active {
      top: 5px;
      right: -28px;
      height: 143px;
      width: 80px;
      transform: perspective(300px) rotateY(-60deg);
      &:after {
        height: 39px;
      }
    }
    &.opened {
      &:active {
        top: -10px;
        right: -10px;
        height: 100%;
        width: 57px;
        transform: none;
        &:after {
          height: 50px;
        }
      }
    }
  }
}
</style>

<script lang="ts" setup>

</script>

<template>
  <div class="window">
    <div class="window__side-left"></div>
    <div class="window__side-right opened"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.night {
  .window {
    background: radial-gradient(circle, rgba(255,255,0,1) 0%, rgba(212,175,55,1) 100%);
  }
}

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
  overflow: hidden;
  // hided line between sides
  &:after {
    position: absolute;
    background-color: $windows-borders;
    width: 10px;
    height: 100%;
    left: 50%;
    transform: translatex(-50%);
  }
  .window__side-left {
    position: absolute;
    top: -10px;
    bottom: -10px;
    left: -20px;
    right: calc(50% - 5px);
    border: 10px solid $windows-borders;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    transition: transform 0.5s;
    cursor: pointer;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      border-bottom: 10px solid $windows-borders;
      height: 30%;
    }
    &.opened,
    &:active {
      left: -55px;
      transform: perspective(190px) rotateY(40deg);
    }
    &.opened {
      &:active {
        top: -10px;
        bottom: -10px;
        left: -20px;
        transform: none;
        &:after {
          height: 30%;
        }
      }
    }
  }
  .window__side-right {
    position: absolute;
    top: -10px;
    bottom: -10px;
    left: calc(50% - 5px);
    right: -20px;
    border: 10px solid $windows-borders;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    transition: transform 0.5s;
    cursor: pointer;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      border-bottom: 10px solid $windows-borders;
      height: 30%;
    }
    &.opened,
    &:active {
      right: -55px;
      transform: perspective(190px) rotateY(-40deg);
    }
    &.opened {
      &:active {
        top: -10px;
        bottom: -10px;
        right: -20px;
        transform: none;
        &:after {
          height: 30%;
        }
      }
    }
  }
}
</style>

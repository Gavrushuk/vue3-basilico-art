<script lang="ts" setup>

</script>

<template>
  <div class="door">
    <div class="door__sides">
      <div class="door__side-left"></div>
      <div class="door__side-right"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.door {
  position: absolute;
  background-color: $windows-bg;
  top: 70px;
  left: 20px;
  right: 20px;
  bottom: 0;
  border: 10px solid $windows-borders;
  z-index: 1;
  box-shadow: inset 0px 0px 5px lightgray;
  .door__sides {
    position: absolute;
    background-color: $windows-bg;
    top: 22px;
    left: -14px;
    right: -10px;
    bottom: 23px;
    border: 10px solid $windows-borders;
    z-index: 1;
    box-shadow: inset 0px 0px 5px lightgrey;
    transform: perspective(300px) rotateY(36deg);
    .door__side-left {
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
    }
    .door__side-right {
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
    }
  }
}
</style>

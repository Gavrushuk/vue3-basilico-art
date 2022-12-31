<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps<{
  isOpenedLeftSideDefault: boolean,
  isOpenedRightSideDefault: boolean
}>();

const isOpenedLeftSide = ref(props.isOpenedLeftSideDefault);
const isOpenedRightSide = ref(props.isOpenedRightSideDefault);
</script>

<template>
  <div class="door">
    <div
      @click="isOpenedLeftSide = !isOpenedLeftSide"
      class="door__side-left"
      :class="{
        opened: isOpenedLeftSide
      }"
    >
    </div>
    <div
      @click="isOpenedRightSide = !isOpenedRightSide"
      class="door__side-right"
      :class="{
        opened: isOpenedRightSide
      }"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.night {
  .door {
    background: radial-gradient(circle, rgba(255,255,0,1) 0%, rgba(212,175,55,1) 100%);
  }
}

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
  overflow: hidden;
  .door__side-left {
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
    &.opened,
    &:active {
      left: -55px;
      transform: perspective(250px) rotateY(40deg);
    }
    &.opened {
      &:active {
        top: -10px;
        bottom: -10px;
        left: -20px;
        transform: none;
      }
    }
  }
  .door__side-right {
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
    &.opened,
    &:active {
      right: -55px;
      transform: perspective(250px) rotateY(-40deg);
    }
    &.opened {
      &:active {
        top: -10px;
        bottom: -10px;
        right: -20px;
        transform: none;
      }
    }
  }
}
</style>

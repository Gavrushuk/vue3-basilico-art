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
  <div class="window">
    <div
      @click="isOpenedLeftSide = !isOpenedLeftSide"
      class="window__side-left"
      :class="{
        opened: isOpenedLeftSide
      }"
    >
    </div>
    <div
      @click="isOpenedRightSide = !isOpenedRightSide"
      class="window__side-right"
      :class="{
        opened: isOpenedRightSide
      }"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.night {
  .window {
    background: radial-gradient(circle, rgba(255, 255, 0, 1) 0%, rgba(212, 175, 55, 1) 100%);
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

    &.opened{
      left: -55px;
      transform: perspective(190px) rotateY(40deg);
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

    &.opened {
      right: -55px;
      transform: perspective(190px) rotateY(-40deg);
    }
  }
}
</style>

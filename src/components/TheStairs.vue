<script lang="ts" setup>

</script>

<template>
  <div class="stairs">
    <div class="stair">
      <div class="stair-back"></div>
      <div class="stair-front"></div>
    </div>
    <div class="stair">
      <div class="stair-back"></div>
      <div class="stair-front"></div>
    </div>
    <div class="stair">
      <div class="stair-back"></div>
      <div class="stair-front"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.night {
  .stairs {
    filter: brightness(0.75);
  }
}

.stairs {
  position: absolute;
  bottom: -7px;
  right: -110px;
  transition: filter 0.5s;
  .stair {
    position: relative;
    height: 40px;
    margin-left: auto;
    .stair-back {
      position: absolute;
      background-color: #123e1d;
      left: 10px;
      right: -10px;
      top: -10px;
      bottom: 7px;
      border: 1px solid #07190b;
      border-bottom: none;
      z-index: -1;
      &:before {
        content: "";
        background-color: #123e1d;
        position: absolute;
        top: -1px;
        left: -6px;
        right: 4px;
        height: 9px;
        transform: skewX(-45deg);
        border: 1px solid #07190b;
        border-bottom: none;
      }
      &:after {
        content: "";
        background-color: #123e1d;
        position: absolute;
        bottom: -7px;
        left: -5px;
        right: 4px;
        height: 7px;
        transform: skewX(-55deg);
        border: 1px solid #07190b;
        border-top: none;
        border-bottom: none;
      }
    }
    .stair-front {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: #123e1d;
      border: 1px solid #07190b;
    }
    &:nth-child(1) {
      width: 144px;
      margin-right: 120px;
      z-index: 3;
    }
    &:nth-child(2) {
      background-color: #1a5729;
      width: 244px;
      margin-right: 70px;
      margin-top: 2.5px;
      z-index: 2;
    }
    &:nth-child(3) {
      width: 344px;
      margin-top: 2.5px;
      margin-right: 20px;
      z-index: 1;
    }
  }
}
</style>

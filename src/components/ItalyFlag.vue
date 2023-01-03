<script lang="ts" setup>

</script>

<template>
  <div class="italy-flag">
    <div class="flag-line">
      <div class="flag-line__vertical"></div>
      <div class="flag-line__vertical"></div>
    </div>
    <div class="flag">
      <div class="flag__top"></div>
      <div class="flag__bottom"></div>
      <div class="flag__right"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.night {
  .italy-flag {
    filter: brightness(0.75);
  }
}

.italy-flag {
  margin-top: 50px;
  transition: filter 0.5s;
  .flag-line {
    position: relative;
    background-color: #000000;
    width: 250px;
    height: 5px;
    z-index: 1;
    &:after,
    &:before {
      content: '';
      background-color: #000000;
      position: absolute;
      top: -2.5px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
    &:after {
      right: -5px;
    }
    &:before {
      left: -5px;
    }
    .flag-line__vertical {
      background-color: #000000;
      position: absolute;
      bottom: -20px;
      width: 5px;
      height: 20px;
      &:first-child {
        left: 60px;
      }
      &:last-child {
        right: 60px;
      }
    }
  }
  .flag {
    position: relative;
    background: linear-gradient(to right, #008c45 0, #008c45 33%, #f4f5f0 33%, #f4f5f0 66%, #cd212a 66%, #cd212a 100%);
    height: 100px;
    width: 250px;
    margin-top: 5px;
    overflow: hidden;
    border-radius: 5px;
    transform: perspective(100px) rotateX(20deg) skewX(-10deg);
    border-left: 2px solid #6d5f5e;
    z-index: 0;
    .flag__top {
      background-color: $house-bg;
      position: absolute;
      top: -15px;
      height: 25px;
      width: 250px;
      border-radius: 50%;
      border-bottom: 2px solid #6d5f5e;
    }
    .flag__bottom {
      background-color: $house-bg;
      position: absolute;
      bottom: -30px;
      height: 50px;
      width: 250px;
      border-radius: 50%;
      border-top: 2px solid #6d5f5e;
    }
    .flag__right {
      background-color: $house-bg;
      position: absolute;
      right: -15px;
      height: 100px;
      width: 25px;
      border-radius: 50%;
      border-left: 2px solid #6d5f5e;
    }
  }
}
</style>

<script lang="ts" setup>

</script>

<template>
  <div class="building-label">
    <div class="building-label__line">
      <div class="building-label__line-vertical"></div>
      <div class="building-label__line-vertical"></div>
    </div>
    <div class="label">
      <div class="label__top-left"></div>
      <div class="label__top-right"></div>
      <div class="label__top-inner"></div>
      <div class="label__bottom-inner-left"></div>
      <div class="label__bottom-inner-right"></div>
      <div class="label__bottom-left"></div>
      <div class="label__bottom"></div>
      <div class="label__bottom-right"></div>
      <div class="label__text">Viva <span>Italia</span></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import url('https://fonts.googleapis.com/css2?family=Tangerine:wght@700&display=swap');

.night {
  .building-label {
    filter: brightness(0.75);
  }
}

.building-label {
  position: relative;
  margin-top: 50px;
  transition: filter 0.5s;
  .building-label__line {
    position: relative;
    background-color: #000000;
    width: 600px;
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
    .building-label__line-vertical {
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
  .label {
    position: relative;
    background-color: #ffffff;
    width: 600px;
    height: 60px;
    margin-top: 13px;
    border-radius: 5px;
    transform: perspective(100px) rotateX(20deg);
    .label__top-inner {
      background-color: #ffffff;
      position: absolute;
      width: 247px;
      height: 20px;
      border-radius: 50%;
      top: -6px;
    }
    .label__top-inner {
      left: 177px;
    }
    .label__top-left,
    .label__top-right {
      background-color: #e7bdb0;
      position: absolute;
      width: 200px;
      height: 20px;
      border-radius: 50%;
      top: -15px;
    }
    .label__top-left {
      left: 0;
    }
    .label__top-right {
      left: 400px;
    }
    .label__bottom-inner-left,
    .label__bottom-inner-right {
      background-color: #ffffff;
      position: absolute;
      width: 148px;
      height: 20px;
      border-radius: 50%;
      bottom: -6px;
    }
    .label__bottom-inner-left {
      left: 106px;
    }
    .label__bottom-inner-right {
      left: 346px;
    }
    .label__bottom-left,
    .label__bottom,
    .label__bottom-right {
      background-color: #e7bdb0;
      position: absolute;
      width: 120px;
      height: 20px;
      border-radius: 50%;
      bottom: -15px;
    }
    .label__bottom-left {
      left: 0;
    }
    .label__bottom {
      left: 240px;
    }
    .label__bottom-right {
      left: 480px;
    }
    .label__text {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Tangerine', cursive;
      font-size: 60px;
      font-weight: 700;
      padding-top: 5px;
      z-index: 1;
      span {
        color: #cd212a;
        margin-left: 25px;
      }
    }
  }
}
</style>

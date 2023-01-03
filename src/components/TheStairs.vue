<script lang="ts" setup>

</script>

<template>
  <div class="stairs">
    <div></div>
    <div></div>
    <div></div>
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
  bottom: -6px;
  right: -110px;
  transition: filter 0.5s;
  overflow: hidden;
  padding-top: 7px;
  div {
    position: relative;
    background-color: #123e1d;
    height: 40px;
    margin-left: auto;
    border: 1px solid #07190b;
    border-right: none;
    &:nth-child(1) {
      width: 144px;
      margin-right: 120px;
      &:before {
        content: "";
        background-color: #123e1d;
        position: absolute;
        top: -7.5px;
        left: 3.5px;
        right: -4.5px;
        height: 5px;
        border: 1px solid #07190b;
        border-bottom: none;
        transform: skewX(-60deg);
        z-index: 1;
      }
      &:after {
        content: "";
        background-color: #123e1d;
        position: absolute;
        top: -7.5px;
        right: -10px;
        width: 10px;
        height: 45px;
        border: 1px solid #07190b;
        border-top: none;
      }
    }
    &:nth-child(2) {
      background-color: #1a5729;
      width: 264px;
      margin-right: 60px;
      &:before {
        content: "";
        background-color: #1a5729;
        position: absolute;
        top: -8.5px;
        left: 4.5px;
        right: -4.5px;
        height: 5px;
        border: 1px solid #07190b;
        transform: skewX(-60deg);
        z-index: 1;
      }
      &:after {
        content: "";
        background-color: #1a5729;
        position: absolute;
        top: -8.5px;
        right: -11px;
        width: 10px;
        height: 46px;
        border: 1px solid #07190b;
        border-top: none;
      }
    }
    &:nth-child(3) {
      width: 384px;
      margin-right: 7px;
      &:before {
        content: "";
        background-color: #123e1d;
        position: absolute;
        top: -8.5px;
        left: 4.5px;
        right: -4px;
        height: 5px;
        border: 1px solid #07190b;
        transform: skewX(-60deg);
        z-index: 1;
      }
      &:after {
        content: "";
        background-color: #123e1d;
        position: absolute;
        top: -5.5px;
        right: -7px;
        width: 6px;
        height: 40px;
        border: 1px solid #07190b;
        border-top: none;
        transform: skewY(-40deg);
      }
    }
  }
}
</style>

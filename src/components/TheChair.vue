<script lang="ts" setup>
defineProps<{
  chairBack: 'left' | 'right'
}>();
</script>

<template>
  <div class="chair-wrapper">
    <div
      class="chair-back"
      :class="[chairBack]"
    ></div>
    <div class="chair-bottom">
      <div class="chair-armrests"></div>
      <div class="chair-seat"></div>
      <div class="chair-legs">
        <div class="chair-inner-legs"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chair-wrapper {
  position: relative;
  .chair-back {
    position: absolute;
    top: -122px;
    background-color: #57291a;
    width: 20px;
    height: 140px;
    border: 5px solid #32170f;
    border-radius: 50%;
    transform: skew(10deg, 10deg) perspective(30px) rotateY(50deg);
    &.left {
      left: -18px;
      transform: skew(10deg, 10deg) perspective(30px) rotateY(50deg);
      &+.chair-bottom {
        .chair-seat {
          border-left: 3px solid #32170f;
        }
      }
    }
    &.right {
      right: -18px;
      transform: skew(-10deg, -10deg) perspective(30px) rotateY(-50deg);
      &+.chair-bottom {
        .chair-seat {
          border-right: 3px solid #32170f;
        }
      }
    }
  }
  .chair-bottom {
    position: relative;
    width: 90px;
    height: 140px;
    .chair-armrests {
      position: relative;
      &:before,
      &:after {
        content: '';
        position: absolute;
        bottom: -30px;
        left: 0;
        right: 0;
        height: 65px;
        border-top-left-radius: 50%;
        border-top-right-radius: 50%;
        border: 3px solid #32170f;
        border-bottom: 0;
      }
      &:before {
        bottom: -22.5px;
      }
    }
    .chair-seat {
      background-color: #57291a;
      width: 100%;
      height: 8px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
    .chair-legs {
      position: relative;
      width: 100%;
      height: 130px;
      border: 5px solid #32170f;
      border-top-width: 8px;
      border-bottom: none;
      &:before,
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        height: 35px;
        width: 3px;
        background-color: #32170f;
        border-radius: 5px;
      }
      &:before {
        left: -10px;
        transform: rotate(20deg);
      }
      &:after {
        right: -10px;
        transform: rotate(-20deg);
      }
      .chair-inner-legs {
        position: absolute;
        bottom: 0;
        left: -3px;
        right: -3px;
        height: 85px;
        border-top-left-radius: 50%;
        border-top-right-radius: 50%;
        border: 3px solid #32170f;
        border-bottom: 0;
        &:before,
        &:after {
          content: '';
          position: absolute;
          bottom: 0;
          width: 15px;
          height: 3px;
          background-color: #32170f;
          border-radius: 5px;
        }
        &:before {
          left: -15px;
        }
        &:after {
          right: -15px;
        }
      }
    }
  }
}
</style>

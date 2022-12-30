<script lang="ts" setup>

</script>

<template>
  <div class="door">
    <div class="door__part-top"></div>
    <div class="door__part-bottom"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.night {
  .door {
    .door__part-top {
      background: radial-gradient(circle, rgba(255,255,0,1) 0%, rgba(212,175,55,1) 100%);
    }
  }
}

.door {
  position: relative;
  background-color: $windows-borders;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 144px;
  height: 444px;
  .door__part-top {
    position: relative;
    background-color: $windows-bg;
    height: 100%;
    border: 15px solid #ffffff;
    box-shadow: inset 0px 0px 5px lightgrey;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
    }
  }
  .door__part-bottom {
    position: relative;
    background-color: $door-color;
    height: 100%;
    border: 10px solid #000000;
  }
}
</style>

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
  bottom: 0;
  right: -110px;
  transition: filter 0.5s;
  div {
    background-color: #123e1d;
    height: 40px;
    margin-left: auto;
    &:nth-child(1) {
      width: 144px;
      margin-right: 110px;
    }
    &:nth-child(2) {
      background-color: #1a5729;
      width: 310px;
    }
    &:nth-child(3) {
      width: 360px;
    }
  }
}
</style>

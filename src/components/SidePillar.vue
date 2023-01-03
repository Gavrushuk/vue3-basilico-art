<script lang="ts" setup>

</script>

<template>
  <div class="side-pillar">
    <div v-for="(item, index) of Array(150)" :key="index"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.night {
  .side-pillar {
    filter: brightness(0.75);
  }
}

.side-pillar {
  width: 82px;
  overflow: hidden;
  transition: filter 0.5s;
  box-shadow: 0 0 5px #381a11;
  div {
    background-color: #ffffff;
    border: 1px solid $stone-border;
    border-left: none;
    border-right: none;
    height: 20px;
    &:first-child {
      position: relative;
      height: 49px;
      border-bottom-width: 2px;
      &:after {
        content: '';
        position: absolute;
        top: 10px;
        left: 10px;
        right: 10px;
        bottom: 10px;
        border: 2px solid $stone-border;
      }
    }
  }
}
</style>

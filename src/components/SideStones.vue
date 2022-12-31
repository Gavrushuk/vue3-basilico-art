<script lang="ts" setup>
defineProps<{
  side: 'left' | 'right'
}>();
</script>

<template>
  <div class="side-stones" :class="[side]">
    <div v-for="(item, index) of Array(45)" :key="index"></div>
  </div>
</template>

<style lang="scss" scoped>
.side-stones {
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 60px;
  overflow: hidden;
  &.left,
  &.right {
    div {
      background-color: #f2ddd6;
      height: 100px;
      border: 2px solid #000000;
    }
  }
  &.left {
    div {
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
      border-left: 0;
    }
  }
  &.right {
    div {
      border-top-left-radius: 15px;
      border-bottom-left-radius: 15px;
      border-right: 0;
    }
  }
}
</style>

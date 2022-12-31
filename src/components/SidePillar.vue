<script lang="ts" setup>

</script>

<template>
  <div class="side-pillar">
    <div v-for="(item, index) of Array(150)" :key="index"></div>
  </div>
</template>

<style lang="scss" scoped>
.side-pillar {
  display: flex;
  flex-direction: column;
  width: 110px;
  overflow: hidden;
  border: 1px solid #000000;
  div {
    background-color: #ffffff;
    border: 1px solid #000000;
    height: 20px;
  }
}
</style>

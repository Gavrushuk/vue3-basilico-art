<script lang="ts" setup>

</script>

<template>
  <div class="horizontal-pillar">
    <div v-for="(item, index) of Array(150)" :key="index"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.night {
  .horizontal-pillar {
    filter: brightness(0.75);
  }
}
.horizontal-pillar {
  position: relative;
  display: flex;
  width: 100%;
  height: 50px;
  overflow: hidden;
  border-top: 1px solid $stone-border;
  border-bottom: 1px solid $stone-border;
  transition: filter 0.5s;
  div {
    background-color: #ffffff;
    border: 1px solid $stone-border;
    min-width: 20px;
    height: 100%;
  }
}
</style>

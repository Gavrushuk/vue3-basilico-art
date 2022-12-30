<script lang="ts" setup>
import BuildingWrapper from '@/components/BuildingWrapper.vue';
</script>

<template>
  <div class="baseilico-art-wrapper">
    <BuildingWrapper />
  </div>
</template>

<style lang="scss" scoped>
.baseilico-art-wrapper {
  background: linear-gradient(to bottom, #82addb 0%,#ebb2b1 100%);
  min-height: 100vh;
  padding-top: 50px;
  &.night {
    background: linear-gradient(to bottom, #020111 60%, #20202c 100%);
  }
}
</style>

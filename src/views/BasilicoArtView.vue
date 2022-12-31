<script lang="ts" setup>
import BuildingWrapper from '@/components/BuildingWrapper.vue';
import DayTimeSwitcher from '@/components/DayTimeSwitcher.vue';
import { ref, type Ref } from 'vue';

const dayTimeState: Ref<'sun' | 'moon'> = ref('sun');
</script>

<template>
  <div
    class="baseilico-art-wrapper"
    :class="{
      night: dayTimeState === 'moon'
    }"
  >
    <DayTimeSwitcher
      v-if="dayTimeState"
      :state="dayTimeState"
      @OnSwitch="dayTimeState = $event"
    />

    <BuildingWrapper />
  </div>
</template>

<style lang="scss" scoped>
.baseilico-art-wrapper {
  position: relative;
  background: linear-gradient(to bottom, #82addb 0%,#ebb2b1 100%);
  min-height: 100vh;
  padding-top: 50px;
  &.night {
    background: linear-gradient(to bottom, #020111 60%, #20202c 100%);
  }
}
</style>

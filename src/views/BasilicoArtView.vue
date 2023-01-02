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
  background-color: #82addb;
  min-height: 100vh;
  min-width: 1450px;
  padding-top: 50px;
  transition: 0.5s;
  &.night {
    background-color: #020111;
  }
}
</style>

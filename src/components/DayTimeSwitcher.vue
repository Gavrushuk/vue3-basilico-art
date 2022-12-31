<script lang="ts" setup>
defineProps<{
  state: 'sun' | 'moon'
}>();
const emit = defineEmits<{
  (e: 'onSwitch', state: 'sun' | 'moon'): void
}>();
</script>

<template>
  <div class="day-time-switcher">
    <div
      v-if="state === 'sun'"
      @click="emit('onSwitch','moon')"
      class="sun"
    ></div>
    <div
      v-if="state === 'moon'"
      @click="emit('onSwitch','sun')"
      class="moon"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
.day-time-switcher {
  width: 100px;
  height: 100px;
  margin-left: 50px;
  .sun,
  .moon {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    cursor: pointer;
  }
  .sun {
    background-color: orange;
    box-shadow: 0 0 10px orange, 0 0 60px orange, 0 0 200px yellow, inset 0 0 80px yellow;
  }
  .moon {
    background-color: #91a3b0;
    box-shadow: 0 0 10px #91a3b0, 0 0 60px #91a3b0, 0 0 200px #c9c9c9, inset 0 0 80px #c9c9c9;
  }
}
</style>

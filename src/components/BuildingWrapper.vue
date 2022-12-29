<script lang="ts" setup>

</script>

<template>
  <div class="building-wrapper">
    <div class="windows-row">
      <div class="window-wrapper">
        <div class="window-wrapper-top-part"></div>
        <div class="window-wrapper-window">
          <div class="window-wrapper-window-left-side opened"></div>
          <div class="window-wrapper-window-right-side opened"></div>
        </div>
        <div class="window-wrapper-bottom-part"></div>
      </div>

      <div class="window-wrapper">
        <div class="window-wrapper-top-part"></div>
        <div class="window-wrapper-window">
          <div class="window-wrapper-window-left-side opened"></div>
          <div class="window-wrapper-window-right-side"></div>
        </div>
        <div class="window-wrapper-bottom-part"></div>
      </div>

      <div class="window-wrapper">
        <div class="window-wrapper-top-part"></div>
        <div class="window-wrapper-window">
          <div class="window-wrapper-window-left-side"></div>
          <div class="window-wrapper-window-right-side"></div>
        </div>
        <div class="window-wrapper-bottom-part"></div>
      </div>
    </div>

    <div class="windows-and-dor-row">
      <div class="window-rounded-wrapper">
        <div class="window-rounded-wrapper-top-part"></div>
        <div class="window-wrapper-window">
          <div class="window-wrapper-window-left-side"></div>
          <div class="window-wrapper-window-right-side opened"></div>
        </div>
        <div class="window-rounded-wrapper-bottom-part"></div>
      </div>

      <div class="door-rounded-wrapper">
        <div class="door-rounded-wrapper-top-part">
          <div class="door-rounded-wrapper-top-part-glass"></div>
        </div>
        <div class="door-rounded-wrapper-door">
          <div class="door-rounded-wrapper-door-sides">
            <div class="door-rounded-wrapper-door-left-side"></div>
            <div class="door-rounded-wrapper-door-right-side"></div>
          </div>
        </div>
        <div class="door-rounded-wrapper-bottom-part"></div>
      </div>

      <div class="window-rounded-wrapper">
        <div class="window-rounded-wrapper-top-part"></div>
        <div class="window-wrapper-window">
          <div class="window-wrapper-window-left-side opened"></div>
          <div class="window-wrapper-window-right-side opened"></div>
        </div>
        <div class="window-rounded-wrapper-bottom-part"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
}

.building-wrapper {
  background-color: #b8aea4;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  max-width: 1000px;
  margin: 0 auto;
  .windows-row {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
  }
  .windows-and-dor-row {
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 80px;
    margin-top: 100px;
  }
}
</style>

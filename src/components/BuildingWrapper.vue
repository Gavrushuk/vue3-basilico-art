<script lang="ts" setup>
import DoorWrapper from './DoorWrapper.vue';
import TheDoor from './TheDoor.vue';
import TheWindow from './TheWindow.vue';
import WindowWrapper from './WindowWrapper.vue';
import CentralDoor from './CentralDoor.vue';
import SecondRoof from './SecondRoof.vue';
import TheBallcony from './TheBallcony.vue';
import MainRoof from './MainRoof.vue';
import SideStones from './SideStones.vue';
import SidePillar from './SidePillar.vue';
</script>

<template>
  <div class="roof-wrapper">
    <MainRoof />
  </div>

  <div class="building-wrapper">
    <div class="sides-stones">
      <SideStones side="left" />
      <SideStones side="right" />
    </div>

    <div class="sides-pillars">
      <SidePillar />
      <SidePillar />
    </div>

    <div class="windows-row">
      <WindowWrapper type="square-top-part">
        <TheWindow
          :isOpenedLeftSideDefault="true"
          :isOpenedRightSideDefault="false"
        />
      </WindowWrapper>

      <WindowWrapper type="square-top-part">
        <TheWindow
          :isOpenedLeftSideDefault="true"
          :isOpenedRightSideDefault="false"
        />
      </WindowWrapper>

      <WindowWrapper type="square-top-part">
        <TheWindow
          :isOpenedLeftSideDefault="true"
          :isOpenedRightSideDefault="false"
        />
      </WindowWrapper>
    </div>

    <div class="windows-and-dor-row">
      <WindowWrapper type="rounded-top-part">
        <TheWindow
          :isOpenedLeftSideDefault="true"
          :isOpenedRightSideDefault="false"
        />
      </WindowWrapper>

      <DoorWrapper>
        <TheDoor
          :isOpenedLeftSideDefault="true"
          :isOpenedRightSideDefault="false"
        />
      </DoorWrapper>

      <WindowWrapper type="rounded-top-part">
        <TheWindow
          :isOpenedLeftSideDefault="true"
          :isOpenedRightSideDefault="false"
        />
      </WindowWrapper>
    </div>

    <div class="ballcony-wrapper">
      <TheBallcony />
    </div>

    <div class="windows-second-row">
      <WindowWrapper type="without-top-part">
        <TheWindow
          :isOpenedLeftSideDefault="true"
          :isOpenedRightSideDefault="false"
        />
      </WindowWrapper>

      <WindowWrapper type="without-top-part">
        <TheWindow
          :isOpenedLeftSideDefault="true"
          :isOpenedRightSideDefault="false"
        />
      </WindowWrapper>

      <WindowWrapper type="without-top-part">
        <TheWindow
          :isOpenedLeftSideDefault="true"
          :isOpenedRightSideDefault="false"
        />
      </WindowWrapper>
    </div>

    <div class="second-roof-wrapper">
      <SecondRoof />
    </div>

    <div class="double-windows-and-dor-row">
      <div class="double-window">
        <TheWindow
          :isOpenedLeftSideDefault="true"
          :isOpenedRightSideDefault="false"
        />
        <TheWindow
          :isOpenedLeftSideDefault="true"
          :isOpenedRightSideDefault="false"
        />
      </div>

      <CentralDoor />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.building-wrapper {
  position: relative;
  background-color: $house-bg;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  width: 1400px;
  margin: 0 auto;
  .sides-stones {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    .side-stones {
      position: absolute;
      top: 0;
      bottom: 0;
      &:first-child {
        left: 0;
      }
      &:last-child {
        right: 0;
      }
    }
  }
  .sides-pillars {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    .side-pillar {
      position: absolute;
      top: 0;
      bottom: 0;
      &:first-child {
        left: 150px;
      }
      &:last-child {
        right: 150px;
      }
    }
  }
  .windows-row {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
    margin-top: 150px;
  }
  .windows-second-row {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    margin-top: 200px;
  }
  .windows-and-dor-row {
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 80px;
    margin-top: 200px;
    z-index: 0;
  }
  .ballcony-wrapper {
    display: flex;
    justify-content: center;
    z-index: 1;
  }
  .second-roof-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 200px;
    margin-bottom: -35px;
    z-index: 1;
  }
  .double-windows-and-dor-row {
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 167px;
    z-index: 0;
    .double-window {
      position: relative;
      display: flex;
      width: 350px;
      height: 230px;
      :deep(.window) {
        left: 20px;
        right: 20px;
        &:first-child {
          top: 0;
          bottom: 0;
          left: 0;
          right: 50%;
        }
        &:last-child {
          top: 0;
          bottom: 0;
          right: 0;
          left: calc(50% - 10px);
        }
      }
    }
  }
}
</style>

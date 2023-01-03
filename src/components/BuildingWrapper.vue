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
import HorizontalPillar from './HorizontalPillar.vue';
import TheStairs from './TheStairs.vue';
import ConcreteSlab from './ConcreteSlab.vue';
import ItalyFlag from './ItalyFlag.vue';
import BuildingLabel from './BuildingLabel.vue';
import TheTable from './TheTable.vue';
import TheChair from './TheChair.vue';
</script>

<template>
  <div class="roof-wrapper">
    <MainRoof />
  </div>

  <div class="building-wrapper">
    <HorizontalPillar />

    <div class="sides-stones">
      <SideStones side="left" />
      <SideStones side="right" />
    </div>

    <div class="sides-pillars">
      <SidePillar />
      <SidePillar />
    </div>

    <div class="horisontal-line first"></div>

    <div class="windows-row">
      <WindowWrapper type="square-top-part">
        <TheWindow
          :isOpenedLeftSideDefault="true"
          :isOpenedRightSideDefault="true"
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
          :isOpenedLeftSideDefault="false"
          :isOpenedRightSideDefault="false"
        />
      </WindowWrapper>
    </div>

    <BuildingLabel />

    <div class="horisontal-line"></div>

    <div class="windows-and-dor-row">
      <WindowWrapper type="rounded-top-part">
        <TheWindow
          :isOpenedLeftSideDefault="false"
          :isOpenedRightSideDefault="true"
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
          :isOpenedRightSideDefault="true"
        />
      </WindowWrapper>
    </div>
    
    <div class="ballcony-wrapper">
      <TheBallcony />
    </div>

    <HorizontalPillar class="pillar-above-windows-second-row" />

    <div class="windows-second-row">
      <WindowWrapper type="without-top-part">
        <TheWindow
          :isOpenedLeftSideDefault="true"
          :isOpenedRightSideDefault="true"
        />
      </WindowWrapper>

      <WindowWrapper type="without-top-part">
        <TheWindow
          :isOpenedLeftSideDefault="false"
          :isOpenedRightSideDefault="false"
        />
      </WindowWrapper>

      <WindowWrapper type="without-top-part">
        <TheWindow
          :isOpenedLeftSideDefault="false"
          :isOpenedRightSideDefault="true"
        />
      </WindowWrapper>
    </div>

    <ItalyFlag />

    <div class="second-roof-wrapper">
      <SecondRoof />
    </div>

    <div class="double-windows-and-dor-row">
      <div class="double-window">
        <TheWindow
          :isOpenedLeftSideDefault="false"
          :isOpenedRightSideDefault="false"
        />
        <TheWindow
          :isOpenedLeftSideDefault="false"
          :isOpenedRightSideDefault="false"
        />
      </div>

      <CentralDoor />
      
      <TheStairs />
    </div>
  </div>

  <div class="chair-and-table-wrapper">
    <div>
      <TheChair chairBack="left" />
      <TheTable />
      <TheChair chairBack="right" />
    </div>
  </div>

  <div class="concrete-slab-wrapper">
    <ConcreteSlab />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.night {
  .building-wrapper {
    &:before {
      filter: brightness(0.75);
    }
  }
  .horisontal-line,
  .chair-and-table-wrapper,
  .concrete-slab-wrapper {
    filter: brightness(0.75);
  }
}

.roof-wrapper {
  position: relative;
  z-index: 2;
}

.building-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1400px;
  margin: 0 auto;
  &:before {
    content: '';
    background-color: $house-bg;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: filter 0.5s;
    z-index: 0;
  }
  .sides-stones {
    position: absolute;
    top: 50px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
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
    z-index: 1;
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
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
    margin-top: 150px;
    z-index: 2;
  }
  .pillar-above-windows-second-row {
    width: 880px;
    margin-top: 100px;
  }
  .horisontal-line {
    position: relative;
    background-color: #ffffff;
    width: 880px;
    height: 25px;
    border-top: 2px solid $stone-border;
    border-bottom: 2px solid $stone-border;
    margin-top: 50px;
    transition: filter 0.5s;
    &.first {
      margin-top: 100px;
    }
  }
  .windows-second-row {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    margin-top: 60px;
    z-index: 2;
  }
  .windows-and-dor-row {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 80px;
    margin-top: -24px;
    z-index: 2;
  }
  .ballcony-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    z-index: 2;
  }
  .second-roof-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: -35px;
    z-index: 3;
  }
  .double-windows-and-dor-row {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 167px;
    z-index: 2;
    padding-bottom: 120px;
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

.chair-and-table-wrapper {
  position: relative;
  height: 0;
  width: 1100px;
  margin: 0 auto;
  z-index: 2;
  transition: filter 0.5s;
  &>div {
    position: absolute;
    left: 230px;
    bottom: -50px;
    display: flex;
    align-items: flex-end;
    .chair-wrapper {
      margin-left: -30px;
      &:first-of-type {
        margin-left: 0;
        margin-right: -30px;
      }
    }
  }
}

.concrete-slab-wrapper {
  background-color: #374154;
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
}
</style>

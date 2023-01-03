<script lang="ts" setup>

</script>

<template>
  <div class="ballcony">
    <div class="ballcony__side-left">
      <div v-for="(item, index) of Array(3)" :key="index">
        <div class="line"></div>
        <div class="triangle-top"></div>
        <div class="triangle-bottom"></div>
      </div>
    </div>
    <div class="ballcony__side-right">
      <div v-for="(item, index) of Array(3)" :key="index">
        <div class="line"></div>
        <div class="triangle-top"></div>
        <div class="triangle-bottom"></div>
      </div>
    </div>
    <div class="ballcony__center">
      <div v-for="(item, index) of Array(17)" :key="index">
        <div class="line"></div>
        <div class="triangle-top"></div>
        <div class="triangle-bottom"></div>
      </div>
    </div>
    <div class="ballcony__floor">
      <div class="ballcony__floor__top"></div>
      <div class="ballcony__floor__bottom"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.night {
  .ballcony {
    filter: brightness(0.75);
  }
}

.ballcony {
  position: relative;
  width: 1100px;
  margin-top: -200px;
  transition: filter 0.5s;
  .ballcony__side-left,
  .ballcony__side-right,
  .ballcony__center {
    display: flex;
    height: 250px;
    border: 2px solid #000000;
    &:after {
      content: '';
      background-color: #000000;
      position: absolute;
      bottom: 25px;
      width: 100%;
      height: 4px;
    }
    &>div {
      position: relative;
      height: 100%;
      flex: 1;
      border: 2px solid #000000;
      .line {
        background-color: #000000;
        height: 100%;
        width: 4px;
        margin: 0 auto;
      }
      .triangle-top,
      .triangle-bottom {
        position: absolute;
        width: 100%;
        &:before {
          content: '';
          background-color: #000000;
          position: absolute;
          height: 4px;
          left: -1px;
          width: 50%;
          transform: skewY(-30deg);
        }
        &:after {
          content: '';
          background-color: #000000;
          position: absolute;
          height: 4px;
          right: -1px;
          width: 50%;
          transform: skewY(30deg);
        }
      }
      .triangle-top {
        top: 30px;
      }
      .triangle-bottom {
        bottom: 50px;
      }
    }
  }
  .ballcony__side-left,
  .ballcony__side-right {
    position: absolute;
    width: 110px;
    bottom: 47px;
  }
  .ballcony__side-left {
    left: 0;
    transform: skewY(-24deg);
  }
  .ballcony__side-right {
    right: 0;
    transform: skewY(24deg);
  }
  .ballcony__center {
    position: relative;
    width: 100%;
    z-index: 4;
  }
  .ballcony__floor {
    width: 100%;
    margin-top: -55px;
    box-shadow: 0 5px 15px -7px black;
    .ballcony__floor__top {
      background-color: #415e69;
      height: 50px;
      width: 973px;
      transform: perspective(80px) rotateX(20deg);
      margin: 0 auto;
      margin-top: -4px;
    }
    .ballcony__floor__bottom {
      background-color: #a24c31;
      width: 100%;
      height: 25px;
      margin-top: 2px;
    }
  }
}

.second-roof {
  position: relative;
  width: 1000px;
  .second-roof__part-top {
    display: flex;
    height: 200px;
    width: 829px;
    transform: perspective(200px) rotateX(20deg);
    margin: 0 auto;
    border: 1px solid #ffffff;
    border-bottom: 0;
    div {
      background-color: $door-color;
      flex: 1;
      &:nth-child(even) {
        background-color: #ffffff;
      }
    }
  }
  .second-roof__part-bottom {
    background-color: $door-color;
    text-align: center;
    height: 50px;
    width: 100%;
    font-family: 'Andika', sans-serif;
    font-size: 45px;
    line-height: 1;
    color: #ffffff;
    margin-top: 13px;
    border: 1px solid #ffffff;
  }
}
</style>

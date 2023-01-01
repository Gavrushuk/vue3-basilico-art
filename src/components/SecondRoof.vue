<script lang="ts" setup>

</script>

<template>
  <div class="second-roof">
    <div class="second-roof__part-top">
      <div v-for="(item, index) of Array(13)" :key="index"></div>
    </div>
    <div class="second-roof__part-bottom">
      BASILICO
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import url('https://fonts.googleapis.com/css2?family=Andika:wght@700&display=swap');

.night {
  .second-roof {
    filter: brightness(0.75);
  }
}

.second-roof {
  position: relative;
  width: 1000px;
  transition: filter 0.5s;
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

<script lang="ts" setup>

</script>

<template>
  <div class="main-roof">
    <div v-for="(vLine, i) of Array(20)" :key="i">
      <div v-for="(tile, j) of Array(10)" :key="j">
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.night {
  .main-roof {
    filter: brightness(0.75);
  }
}

.main-roof {
  background-color: #ba5625;
  position: relative;
  display: flex;
  height: 300px;
  width: 1205px;
  transform: perspective(200px) rotateX(13deg);
  margin: 0 auto;
  border-bottom: 0;
  margin-bottom: 25px;
  transition: filter 0.5s;
  &:after {
    content: '';
    position: absolute;
    left: 27px;
    right: 27px;
    bottom: -15px;
    height: 15px;
    background: linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 75%, rgba(0,0,0,0) 100%);
    transform: perspective(150px) rotateX(-11deg);
  }
  &>div {
    flex: 1;
    &>div {
      display: flex;
      margin-top: -7px;
      div {
        &:first-child {
          width: 20px;
          height: 40px;
          border: 1px solid #000000;
          border-bottom: none;
          border-radius: 10px 10px 0 0;
          background-color: #ba5625;
        }
        &:last-child {
         border-top: 1px solid #000000;
         margin-top: 10px;
         flex: 1;
         background-color: #ba5625;
        }
      }
      &:last-child {
        div {
          &:first-child {
            background-color: #7d3a26;
            height: 10px;
          }
        }
      }
    }
    &:last-child {
      max-width: 20px;
    }
  }
}
</style>

<script lang="ts" setup>

</script>

<template>
  <div class="table-wrapper">
    <div class="table">
      <div class="table-top-part"></div>
      <div class="table-bottom-part"></div>
    </div>
    <div class="table-legs">
      <div class="table-leg"></div>
      <div class="table-leg"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table-wrapper {
  position: relative;
  .table {
    position: relative;
    width: 200px;
    z-index: 1;
    margin: 0 auto;
    .table-top-part {
      background-color: #57291a;
      height: 36px;
      width: 164px;
      transform: perspective(50px) rotateX(30deg);
      margin: 0 auto;
    }
    .table-bottom-part {
      background-color: #32170f;
      height: 8px;
      width: 100%;
      margin-top: 1px;
    }
  }
  .table-legs {
    width: 250px;
    height: 175px;
    margin: 0 auto;
    display: flex;
    margin-top: -12px;
    .table-leg {
      position: relative;
      height: 100%;
      width: 50%;
      border-radius: 50%;
      &:first-child {
        border-right: 7.5px solid #32170f;
        transform: translateX(3.75px);
      }
      &:last-child {
        border-left: 7.5px solid #32170f;
        transform: translateX(-3.75px);
      }
    }
  }
}
</style>

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
    width: 150px;
    z-index: 1;
    margin: 0 auto;
    .table-top-part {
      background-color: #57291a;
      height: 30px;
      width: 128px;
      transform: perspective(50px) rotateX(30deg);
      border: 1px solid #32170f;
      margin: 0 auto;
    }
    .table-bottom-part {
      background-color: #32170f;
      height: 5px;
      width: 100%;
    }
  }
  .table-legs {
    width: 250px;
    height: 150px;
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

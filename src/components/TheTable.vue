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
  .table {
    width: 200px;
    margin: 0 auto;
    .table-top-part {
      background-color: #57291a;
      height: 30px;
      width: 170px;
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
    width: 150px;
    height: 200px;
    margin: 0 auto;
    display: flex;
    .table-leg {
      position: relative;
      height: 100%;
      width: 50%;
      border-radius: 50%;
      &:first-child {
        border-right: 5px solid #32170f;
      }
      &:last-child {
        border-left: 5px solid #32170f;
      }
    }
  }
}
</style>

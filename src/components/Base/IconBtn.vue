<template>
  <div class="icon_btn">
    <div :class="['iconfont', icon]">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'IconBtn',
    props: {
      icon: {
        type: String,
        default: 'icon-naoling',
      },
    },
  };
</script>

<style lang="less" scoped>
  .icon_btn {
    display: inline-block;
    color: #757575;
    padding: 0 10px;
    font-weight: 500;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    line-height: 34px;
    cursor: pointer;

    &:hover {
      background: #F3F3F3;
    }

    .iconfont {
      font-size: 25px;
      font-weight: bold;
      display: inline-block;
      vertical-align: -5px;
    }
  }
</style>

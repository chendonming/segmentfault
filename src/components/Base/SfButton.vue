<template>
  <div class="drop_down_btn">
    <button class="btn" :class="size">
      <slot></slot>
      <span class="caret" v-if="dropdown"></span>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'SfButton',
    props: {
      /**
       * 标签类型的按钮
       */
      dropdown: {
        type: Boolean,
        default: false,
      },

      /**
       * 标签类型的按钮
       */
      label: {
        type: Boolean,
        default: false,
      },

      size: {
        type: String,
        validator(value) {
          // 这个值必须匹配下列字符串中的一个
          return ['small', 'large'].indexOf(value) !== -1;
        },
      },
    },
  };
</script>

<style lang="less" scoped>
  .drop_down_btn {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    line-height: 34px;
    color: #666;

    .btn {
      margin-left: 0;
      position: relative;
      float: left;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
      color: #333;
      background-color: #fff;
      border: 1px solid #ccc;
      display: inline-block;
      margin-bottom: 0;
      font-weight: normal;
      text-align: center;
      vertical-align: middle;
      cursor: pointer;
      background-image: none;
      white-space: nowrap;
      padding: 6px 12px;
      font-size: 14px;
      line-height: 1.42858;
      border-radius: 4px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      &.small {
        font-size: 12px;
        padding: 1px 5px;
        line-height: 1.5;
        border-radius: 3px;
      }

      &:hover {
        color: #333;
        background-color: #e6e6e6;
        border-color: #adadad;
        text-decoration: none;
      }

      .caret {
        display: inline-block;
        width: 0;
        height: 0;
        margin: -4px 0 0 2px;
        vertical-align: middle;
        border-top: 4px solid;
        border-right: 4px solid transparent;
        border-left: 4px solid transparent;
      }
    }
  }
</style>

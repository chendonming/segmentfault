<template>
  <div class="channel_card" :style="{width: typeof width === 'number' ? `${width}px` : width}">
    <span class="channel_card__header" v-if="title">{{title}}</span>
    <div class="channel_card__body">
      <div :class="['channel_card__item', { 'active': select === item.url }]"
           @click="handleClick(item,index)"
           v-for="(item,index) in list" :key="index">
        <img class="channel_card__icon" :src="item.img" alt="" v-if="item.img">
        <i class="iconfont channel_card__icon" :class="item.icon" v-else></i>
        <span class="channel_card__name">{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  /**
   * 频道卡片
   */
  export default {
    name: 'ChannelCard',
    props: {
      title: String,
      list: Array,
      width: {
        type: [String, Number],
        default: 170,
      },
    },
    data() {
      return {
        select: '',
      };
    },
    computed: {
      ...mapGetters(['getChannelList']),
    },
    created() {
      this.selectItem();
    },
    methods: {
      handleClick(item) {
        this.select = item.url;
        this.$router.push({ path: `/channel/${item.url}` });
      },

      selectItem() {
        this.select = this.$route.params.id;
      },
    },
  };
</script>

<style lang="less" scoped>
  .channel_card__header {
    color: #212121;
    position: relative;
    display: inline-block;
    font-size: 14px;
    margin-bottom: 15px;
    padding-left: 10px;

    &:after {
      position: absolute;
      content: '';
      border-bottom: 1px solid #eee;
      width: 95px;
      margin-left: 5px;
      margin-top: 8px;
    }
  }

  .channel_card__body {
    display: flex;
    flex-direction: column;

    .channel_card__item {
      display: flex;
      align-items: center;
      border-radius: 4px;
      height: 34px;
      padding: 0 10px;
      cursor: pointer;
      color: #757575;

      &:hover {
        background: rgba(0, 154, 97, 0.08);
      }

      &.active {
        background: #009a61;
        color: #fff;
        font-weight: 600;

        .channel_card__icon {
          filter: brightness(0) invert(1);
        }
      }
    }

    .channel_card__icon {
      width: 16px;
      height: 16px;
      display: inline-block;
      padding-right: 10px;
    }

    .channel_card__name {
      font-size: 13px;
    }
  }
</style>

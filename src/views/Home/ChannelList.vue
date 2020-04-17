<template>
  <div class="channel_list">
    <div class="channel_list__header">
      {{name}}
      <span class="header__samll_text">只看推荐</span>
      <SfButton size="small">推送配置</SfButton>
    </div>
  </div>
</template>

<script>
  /**
   * 频道列表组件
   */
  import SfButton from '@/components/Base/SfButton';

  export default {
    name: 'ChannelList',
    components: { SfButton },
    comments: { SfButton },
    props: {
      name: String,
    },
  };
</script>

<style lang="less" scoped>
.channel_list__header {
  font-size: 16px;
  height: 20px;
  line-height: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;

  .header__samll_text {
    font-size: 12px;
    margin-left: 5px;
    padding-left: 5px;
    border-left: 1px solid #ddd;
  }

  .drop_down_btn {
    float: right;
  }
}
</style>

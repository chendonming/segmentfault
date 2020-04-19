<template>
  <div class="channel_list">
    <div class="channel_list__header">
      {{name}}
      <span class="header__samll_text">只看推荐</span>
      <SfButton size="small">推送配置</SfButton>
    </div>
    <div class="channel_list__body">
      <div class="channel_list__scrollbar">
        <ArticleItem v-for="(item,index) in list" :key="index" :data="item"/>
      </div>
    </div>
  </div>
</template>

<script>
  /**
   * 频道列表组件
   */
  import SfButton from '@/components/Base/SfButton';
  import ArticleItem from '@/views/Home/Article/ArticleItem';
  import { recommendQueryList } from '@/api';
  import { INFINITESCROLL } from '@/common/constant';

  export default {
    name: 'ChannelList',
    components: {
      ArticleItem,
      SfButton,
    },
    props: {
      name: String,
    },
    data() {
      return {
        list: [],
        page: {
          pageSize: 10,
          pageNum: 1,
        },
        totalPage: 0,
      };
    },
    created() {
      this.query();
      this.$$on(INFINITESCROLL, this.load);
    },
    methods: {
      async query() {
        const data = await recommendQueryList(this.page);
        this.totalPage = data.data.pages;
        this.list = this.list.concat(this.bridgeFunc(data.data.list));
      },
      load() {
        const { pageNum } = this.page;
        if (pageNum < this.totalPage) {
          this.$set(this.page, 'pageNum', pageNum);
          this.query();
        }
      },
      /**
       * 桥接函数
       */
      bridgeFunc(list) {
        return list.map((v) => ({
          from: v?.labelArr?.[0]?.name,
          ...v,
        }));
      },
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

  .channel_list__body {
    height: calc(100vh - 128px);

    .channel_list__scrollbar {
      overflow: auto;
      width: 105%;
    }

    .article_item {
      margin: 10px 0;
    }
  }
</style>

<template>
  <div class="article_item">
    <div class="article_item__from" v-if="data.from">
      来自标签{{data.from}}
    </div>
    <div class="article_item__body">
      <a class="article_item__info" :href="url">
        <div class="article_item__title">{{data.title}}</div>
        <a :href="url" :style="imgStyle" class="article_item__img" v-if="data.imageUrl"></a>
        <div class="article_item__desc">{{data.excerpt}}</div>
      </a>
      <ArticleComment :name="data.userNickname" :date="data.createTime"/>
    </div>
  </div>
</template>

<script>
  import ArticleComment from '@/views/Home/Article/ArticleComment';

  export default {
    name: 'ArticleItem',
    components: { ArticleComment },
    props: {
      data: Object,
    },
    computed: {
      url() {
        return `/article/${this.data.uuid}`;
      },
      imgStyle() {
        return `background-image:url(${this.data.imageUrl})`;
      },
    },
  };
</script>

<style lang="less" scoped>
  .article_item {
    box-sizing: border-box;
  }

  .article_item__body {
    clear: both;
  }

  .article_item__from {
    color: #9E9E9E;
    font-size: 14px;
  }

  .article_item__title {
    font-size: 18px;
    color: #212121;
    display: inline-block;
    padding: 10px 0;
  }

  .article_item__img {
    width: 80px;
    height: 60px;
    border-radius: 4px;
    float: right;
    margin-left: 30px;
    margin-top: 10px;
    background-size: cover;
    background-position: center;
  }

  .article_item__desc {
    color: #888;
    font-size: 13px;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
</style>

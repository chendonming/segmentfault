<template>
  <div class="article_comment">
    <span class="article_comment__like">
      <span class="like__wrapper"><i class="iconfont icon-dianzan"></i></span>
      赞
    </span>
    <a class="article_comment__author" href="/">{{name}}</a>
    <span class="article_comment__date">{{date}}</span>
  </div>
</template>

<script>
  export default {
    name: 'ArticleComment',
    props: {
      name: String,
      date: String,
    },
  };
</script>

<style lang="less" scoped>
  .article_comment {
    line-height: 50px;
    font-size: 13px;
    color: #666;
  }

  .article_comment__like {
    padding-right: 20px;
    cursor: pointer;
  }

  .like__wrapper {
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    text-align: center;
    margin-right: 5px;
    line-height: 24px;
    background: rgba(1, 126, 102, 0.08);

    &:hover {
      background: #009a61;
      .iconfont {
        color: #fff;
      }
    }

    .iconfont {
      color: #009a61;
    }
  }

  .article_comment__author {
    padding-right: 20px;
    color: #666;

    &:hover {
      text-decoration: underline;
    }
  }
</style>

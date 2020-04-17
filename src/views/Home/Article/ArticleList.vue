<template>
  <div class="article_list">

  </div>
</template>

<script>
  /**
   * 文章列表组件
   */
  export default {
    name: 'ArticleList',
    data() {
      return {
        list: [
          {
            title: 'Vue 3.0-beta.1 发布！',
            desc: '经历一年多的推倒重来反复打磨，在众多开发者的千呼万唤之下，Vue 开发团队终于在今天发布了 3.0-beta.1 版本，也就是测试版。通常来说，从测试版到正式版，只会修复 bug，不会引入新功能，或者删改老功能。所以...',
          },
        ],
      };
    },
  };
</script>

<style scoped>

</style>

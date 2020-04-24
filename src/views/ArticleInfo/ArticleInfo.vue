<template>
  <div class="article_info">
    <div class="article__body card">
      <div class="article_info__author">
        <img src="https://avatar-static.segmentfault.com/929/626/929626033-5a2f49a1b530e_big64"
             alt="">
        <span class="author__name">将臣</span>
        <div class="author__integral">
          <svg class="svg-inline" style="color: #BF7158;" aria-hidden="true"
               focusable="false" data-prefix="fas" data-icon="dice-d8" role="img"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
            <path fill="currentColor"
                  d="M225.53 2.52L2.36 233.83c-4.21 4.37-2.56 11.71 3.1 13.77l234.13 85.06V8.39c-.01-7.49-8.91-11.21-14.06-5.87zm284.11 231.31L286.47 2.52C281.32-2.82 272.41.9 272.41 8.4v324.27l234.13-85.06c5.66-2.07 7.31-9.42 3.1-13.78zM33.53 310.38l192 199.1c5.15 5.34 14.06 1.62 14.06-5.88V368.29L42.13 296.61c-8.21-2.98-14.72 7.43-8.6 13.77zm436.34-13.77l-197.46 71.68V503.6c0 7.5 8.91 11.22 14.06 5.88l192-199.1c6.12-6.34-.39-16.75-8.6-13.77z"></path>
          </svg>
          <span class="svg-text">1.5k</span>
        </div>
      </div>

      <div class="article__content">
        <h1 class="h2">后台管理系统，前端根据角色动态设置菜单栏和路由</h1>
        <div class="artivle__tags">
          <div class="tags__left">
            <a href="/">vuejs</a>
            <a href="/">后台管理</a>
            <a href="/">权限管理</a>
          </div>
          <div class="tags__right">
            <span>发布于 今天 20:52 </span>
            <span>约 20 分钟</span>
          </div>
        </div>
        <article>

        </article>
      </div>
    </div>
    <div class="article__block">

    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex';
  export default {
    name: 'ArticleInfo',
    methods: {
      ...mapMutations(['setBg'])
    },
    created() {
      this.setBg('#e9ecef')
    }
  };
</script>

<style lang="less" scoped>
  .article_info {
    width: 1140px;
    margin: 30px auto 0;
    display: flex;

    > div {
      margin: 0 15px;
    }

    .card {
      background: #fff;
      padding: 30px;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
    }

    .article__body {
      width: 0;
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;

      .article_info__author {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;

        img {
          width: 32px;
          height: 32px;
          display: inline-block;
          border-radius: 50%;
        }

        .author__name {
          font-weight: bold;
          color: #00965e;
          display: inline-block;
          margin: 0 5px;
        }

        .author__integral {
          display: flex;
          align-items: center;

          .svg-text {
            color: #BF7158;
            font-weight: bold;
          }

          .svg-inline {
            font-size: 16px;
            height: 16px;
          }
        }
      }

      .artivle__tags {
        display: flex;
        align-items: center;

        .tags__left {
          > a {
            color: #00965e;
            display: inline-block;
            font-size: .875rem;
            padding: 0 .375rem;
            height: 1.5rem;
            line-height: 1.5rem;
            border-radius: .1875rem;
            background-color: rgba(0, 150, 94, .1);
            margin: .25rem;

            &:hover {
              text-decoration: none;
              background-color: rgba(0, 150, 94, .2);
            }
          }
        }

        .tags__right {
          font-size: .875rem;
          color: #6c757d;
          margin-left: 10px;
        }
      }
    }

    .article__block {
      width: 300px;
    }
  }
</style>

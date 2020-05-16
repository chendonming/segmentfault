<template>
  <div class="toolbar">
    <ul>
      <li class="toolbar-item iconfont icon-dianzan1" :class="{ active: vote }" @click="dianzan">
        <span class="icon-count">{{ count }}</span>
        <svg
          class="svg-inline--fa fa-thumbs-up fa-w-16"
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="thumbs-up"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          data-fa-i2svg=""
        >
          <path
            fill="currentColor"
            d="M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6-22.747 22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 27.408-10.174 30.978-23.95 44.509 1.001 75.06 39.94 177.802 39.94 7.22 0 15.22.01 22.22.01 77.117 0 111.986-39.423 112.94-95.33 13.319-18.425 20.299-43.122 17.34-66.99 9.854-18.452 13.664-40.343 8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57 7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46 28.36-28.36 18.91-75.63 37.82-94.54 47.27 0 47.27 32.98 47.27 56.73 0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82.09 18.9-12.82 37.81-22.27 37.81 13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z"
          ></path>
        </svg>
      </li>
      <li class="toolbar-item iconfont icon-icon--">
        <svg
          class="svg-inline--fa fa-bookmark fa-w-12"
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="bookmark"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          data-fa-i2svg=""
        >
          <path
            fill="currentColor"
            d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"
          ></path>
        </svg>
      </li>
      <li class="toolbar-item iconfont icon-buoumaotubiao48" @click="comment">
        <svg
          class="svg-inline--fa fa-comment-alt-lines fa-w-16"
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="comment-alt-lines"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          data-fa-i2svg=""
        >
          <path
            fill="currentColor"
            d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2 16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v288zm-96-216H144c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zm-96 96H144c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16z"
          ></path>
        </svg>
      </li>
      <li class="toolbar-item iconfont icon-fenxiang">
        <svg
          class="svg-inline--fa fa-share-alt fa-w-14"
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="share-alt"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          data-fa-i2svg=""
        >
          <path
            fill="currentColor"
            d="M352 320c-25.6 0-48.9 10-66.1 26.4l-98.3-61.5c5.9-18.8 5.9-39.1 0-57.8l98.3-61.5C303.1 182 326.4 192 352 192c53 0 96-43 96-96S405 0 352 0s-96 43-96 96c0 9.8 1.5 19.6 4.4 28.9l-98.3 61.5C144.9 170 121.6 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.6 0 48.9-10 66.1-26.4l98.3 61.5c-2.9 9.4-4.4 19.1-4.4 28.9 0 53 43 96 96 96s96-43 96-96-43-96-96-96zm0-272c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM96 304c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm256 160c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"
          ></path>
        </svg>
      </li>
    </ul>
  </div>
</template>

<script>
import { voteArticle } from "../../../api";
/**
 * 文章左侧工具栏（ 快捷点赞， 评论 收藏 分享 ）
 */
export default {
  name: "ArticleToolBar",
  props: {
    id: String,
    vote: Boolean,
    count: Number,
  },
  methods: {
    async dianzan() {
      const result = await voteArticle({ recommendId: this.id });
      this.$emit("update:vote", true);
      this.$emit("update:count", this.count + 1);
    },
    comment() {
      window.location.href = "#comment-area";
    },
  },
};
</script>

<style lang="less" scoped>
.toolbar {
  position: sticky;
  top: 4rem;
  width: 100px;
  height: 0;
  margin-left: -100px;

  .toolbar-item {
    width: 32px;
    height: 32px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    margin: 10px 0;
    cursor: pointer;

    &:hover {
      background: #6c757d;
      color: #fff;
    }

    &.icon-dianzan1 {
      width: 48px;
      height: 48px;
      left: -7px;
      font-size: 26px;
      border: 1px solid #00965e;
      color: #00965e;

      &.active {
        background: #00965e;
        color: #fff;
      }

      &:hover {
        background: #00965e;
        color: #fff;
      }

      svg {
        width: 1em;
        height: 1em;
        font-size: inherit;
      }
    }
  }

  svg {
    width: 0.875em;
    display: inline-block;
    font-size: inherit;
    height: 1em;
    overflow: visible;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .icon-count {
    color: #6c757d;
    font-size: 1rem;
    font-weight: 700;
    position: absolute;
    top: -28px;
    left: 19px;
  }
}
</style>

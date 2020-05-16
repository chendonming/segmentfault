<template>
  <div class="article_comment_item">
    <img src="/img/user_avatar.jfif" alt="" />
    <div class="item-body">
      <div class="item-header">
        <span class="nickname">{{ nickname }}:</span>
        <span class="header-body">
          {{ content }}
        </span>
      </div>
      <div class="item-tool">
        <i class="iconfont icon-dianzan"></i
        ><span style="padding: 0 10px; cursor: pointer;" @click="handleVisible">回复</span
        ><span>5月9日</span>
      </div>
      <div class="item-reply" v-if="visible">
        <el-input
          type="textarea"
          :rows="1"
          resize="none"
          autosize
          placeholder="撰写评论。。。"
          size="small"
          v-model="comment"
        />
        <div class="btn-row">
          <el-button type="success" size="small" @click="submit">提交评论</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleCommentItem",
  props: {
    avatar: String,
    nickname: String,
    content: String,
    uuid: String,
  },
  data() {
    return {
      visible: false,
      comment: "",
    };
  },
  methods: {
    submit() {
      this.visible = false;
      this.$emit("submit-comment", {
        recommendId: this.uuid,
        content: this.comment,
      });
    },
    handleVisible() {
      this.visible = !this.visible;
    },
  },
};
</script>

<style lang="less" scoped>
.article_comment_item {
  display: flex;
  margin: 10px 0;

  /* 回复css */
  .item-reply {
    background-color: #f8f9fa;
    flex: 1;
    margin-top: 5px;
    padding: 20px;

    /deep/.el-textarea .el-textarea__inner:focus {
      border-color: #009a61;
      box-shadow: 0 0 0 0.2rem rgba(0, 150, 94, 0.25);
    }

    .btn-row {
      display: flex;
      flex-direction: row-reverse;
      margin-top: 10px;
      /deep/.el-button {
        width: 90px;
        background-color: #00965e;
        border-color: #00965e;
      }
    }
  }

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  .item-body {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    flex: 1;

    .header-body {
      line-height: 1.75;
    }

    .nickname {
      font-weight: bold;
      color: #00965e;
      flex-shrink: 0;
    }
  }

  .item-tool {
    font-size: 14px;
    color: #6c757d;
    line-height: 1.5;
  }
}
</style>

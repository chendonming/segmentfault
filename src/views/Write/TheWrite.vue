<template>
  <div class="the-write">
    <sf-header write-header bg="#fff">
      <template #default>
        <div class="write-wrapper__title">
          <span>{{ pageTitle }}</span>
          <el-button type="success" @click="add" :loading="loading">{{ releaseTitle }}</el-button>
        </div>
      </template>
    </sf-header>
    <div class="write-wrapper">
      <el-input placeholder="请输入标题, 用问号结尾" v-model="title" />
      <div class="write-toolbar mt10">
        <a
          :class="['write__label', { flash_label: flashLabel === item.uuid }]"
          href="javascript:;"
          v-for="item in labelSelectList"
          :key="item.uuid"
        >
          {{ item.name }} <i class="iconfont icon-ego-guanbi" @click="deleteLabel(item.uuid)"></i>
        </a>
        <el-button
          type="default"
          size="mini"
          @click="handleAddLabel()"
          ref="labelBtn"
          icon="el-icon-plus"
          class="label-panel__btn"
          v-show="btnShow"
          >添加标签
        </el-button>
      </div>
      <mavon-editor class="mavonEditor mt10" v-model="handbook" @change="handleChange" />
    </div>

    <label-panel @labelSelect="labelSelect" :visible.sync="visible" :x="pageX" :y="pageY" />
  </div>
</template>

<script>
import SfHeader from "@/components/SfHeader";
import { mapMutations } from "vuex";
import { saveArticleOrAsk } from "@/api";
import LabelPanel from "@/components/LabelPanel";

export default {
  name: "TheWrite",
  components: {
    LabelPanel,
    SfHeader,
  },
  data() {
    return {
      handbook: "",
      html: "",
      title: "",
      loading: false,
      visible: false,
      pageX: 0,
      pageY: 0,
      labelSelectList: [], // 添加的标签
      flashLabel: null, // 将要闪亮的label
      btnShow: true,
    };
  },
  created() {
    this.setBg("#e9ecef");
  },
  computed: {
    pageTitle() {
      return this.$route.query.type === "1" ? "写文章" : "提问题";
    },
    releaseTitle() {
      return this.$route.query.type === "1" ? "发布文章" : "发布问题";
    },
  },
  watch: {
    flashLabel(val) {
      if (val) {
        this.timer = setTimeout(() => {
          this.flashLabel = null;
          clearTimeout(this.timer);
        }, 1000);
      }
    },
  },
  beforeDestroy() {
    if (this.timer) clearTimeout(this.timer);
  },
  methods: {
    ...mapMutations(["setBg"]),
    handleChange(e, r) {
      this.html = r;
    },
    async add() {
      if (!this.title) {
        return this.msgBox("标题内容不能为空");
      }
      if (!this.html || !this.handbook) {
        return this.msgBox("问题内容不能为空");
      }

      await this.submit();
    },
    async submit() {
      this.loading = true;
      await saveArticleOrAsk({
        content: this.html,
        title: this.title,
        type: this.$route.query.type || "2",
        channelsId: Array.from(new Set(this.labelSelectList.map((v) => v.chanelId))).join(","),
        labels: this.labelSelectList.map((v) => v.uuid).join(","),
        status: 2,
      }).finally(() => {
        this.loading = false;
      });

      this.$router.go(-1);
    },
    msgBox(title) {
      this.$alert(title, "提示", {
        confirmButtonText: "确定",
        type: "warning",
      });
    },
    labelSelect(e) {
      const ids = this.labelSelectList.map((v) => v.uuid);
      if (ids.indexOf(e.uuid) !== -1) {
        this.flashLabel = e.uuid;
        return;
      }
      this.labelSelectList.push(e);
      if (this.labelSelectList.length === 5) {
        this.btnShow = false;
        this.handleAddLabel(false);
      } else {
        this.handleAddLabel();
      }
    },
    handleAddLabel(show = true) {
      this.$nextTick(() => {
        const dom = this.$refs.labelBtn.$el;
        this.pageX = dom.offsetLeft;
        this.pageY = dom.offsetTop + 10;
        this.visible = show;
      });
    },
    deleteLabel(uuid) {
      this.labelSelectList = this.labelSelectList.filter((v) => v.uuid !== uuid);
      if (this.labelSelectList.length < 5) {
        this.btnShow = true;
      }
      this.handleAddLabel();
    },
  },
};
</script>

<style lang="less" scoped>
.mavonEditor {
  width: 100%;
  height: 100%;
}

.mt10 {
  margin-top: 10px;
}

.write-wrapper {
  width: 1140px;
  margin: 20px auto 0 auto;
}

.write__label {
  transition: all 2s;
  margin-right: 0.5rem;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;

  &:hover {
    color: #212529;
    background-color: #e2e6ea;
    border-color: #dae0e5;
  }
}

.flash_label {
  background: #ffc107;
}

.write-wrapper__title {
  width: 100%;

  > span {
    display: inline-block;
    width: 85%;
    text-align: center;
    color: #6c757d;
    font-size: 20px;
    font-weight: bold;
  }

  .el-button {
    background-color: #00965e;
    border-color: #00965e;

    &:hover {
      background-color: #007046;
      border-color: #00633e;
    }
  }
}
</style>

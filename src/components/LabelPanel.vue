<template>
  <div class="label_panel" :style="`top: ${y + 20}px;left: ${x}px`" v-show="visible">
    <div class="panel__header">
      <span>还可以添加 5 个标签</span>
      <div>
        <span>找不到标签？<a href="/creatlabel">创建</a></span>
      </div>
    </div>
    <el-autocomplete
      v-model="search"
      :fetch-suggestions="querySearchAsync"
      @select="handleSelect"
      placeholder="搜索标签"
    >
    </el-autocomplete>
    <ul class="nav">
      <li
        v-for="(item, index) in list"
        :class="{ active: index === select }"
        @click="select = index"
        :key="item.uuid"
      >
        <span>{{ item.name }}</span>
      </li>
    </ul>
    <div class="card__list">
      <a
        href="javascript:void(0);"
        @click="handleLabelClick(item)"
        v-for="(item, index) in cardList[select]"
        :key="index"
      >
        {{ item.name }}
      </a>
    </div>
  </div>
</template>

<script>
import { queryLabelList } from "@/api";

/**
 * 标签选择panel组件
 */
export default {
  name: "LabelPanel",
  props: {
    visible: Boolean,
    x: Number,
    y: Number,
  },
  data() {
    return {
      search: "",
      list: [],
      cardList: [],
      select: 0,
    };
  },
  async created() {
    const data = await queryLabelList();
    this.cardList = data.data.map((v) => {
      return [
        ...v.labelList.map((v2) => {
          return {
            ...v2,
            chanelId: v.uuid,
          };
        }),
      ];
    });
    this.list = data.data.slice(0, 8);

    this.$$on("click", (e) => {
      if (!e.target.closest(".label_panel") && !e.target.closest(".label-panel__btn")) {
        this.$emit("update:visible", false);
      }
    });
  },
  methods: {
    querySearchAsync(queryString, cb) {
      // TODO 根据标签名称查询标签
    },
    handleSelect() {},
    handleLabelClick(e) {
      this.$emit("labelSelect", e);
    },
  },
};
</script>

<style lang="less" scoped>
.label_panel {
  background: #fff;
  width: 478px;
  padding: 0.5rem 1.5rem;
  position: fixed;
  z-index: 11111;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);

  .panel__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0;
    font-size: 0.875rem;
    color: #6c757d;
    white-space: nowrap;
  }

  .el-autocomplete {
    margin: 10px 0;
    width: 100%;
  }

  .nav {
    display: flex;

    li {
      color: #6c757d;
      font-size: 14px;
      margin-right: 0.25rem;
      padding: 4px;
      cursor: pointer;

      &.active {
        background-color: #6c757d;
        color: #fff;
        border-radius: 0.25rem;
      }
    }
  }

  .card__list {
    display: block;

    a {
      display: inline-block;
      font-size: 0.875rem;
      padding: 0 0.375rem;
      height: 1.5rem;
      line-height: 1.5rem;
      border-radius: 0.1875rem;
      background-color: rgba(0, 150, 94, 0.1);
      margin: 0.25rem;
    }
  }
}
</style>

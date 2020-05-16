<template>
  <div class="side_bar">
    <ChannelCard title="技术频道" :list="list" />
  </div>
</template>

<script>
import ChannelCard from "@/views/Home/ChannelCard";
import { channelsQueryList } from "@/api";
import { mapMutations } from "vuex";

export default {
  name: "SideBar",
  components: { ChannelCard },
  data() {
    return {
      list: [],
    };
  },
  watch: {
    "$route.params": {
      handler() {
        this.selectChannel();
      },
      deep: true,
    },
  },
  created() {
    this.query();
  },
  methods: {
    ...mapMutations(["setChannel"]),
    async query() {
      const data = await channelsQueryList();
      this.list = data.data;
      this.selectChannel();
    },

    selectChannel() {
      const data = this.list.filter((v) => v.url === this.$route.params.id);
      this.setChannel(data?.[0]);
    },
  },
};
</script>

<style scoped></style>

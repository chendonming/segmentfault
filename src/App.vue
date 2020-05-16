<template>
  <div id="app" v-infinite-scroll="load" :style="{ background: getBg }">
    <router-view />
  </div>
</template>

<script>
import { ERROR, INFINITESCROLL } from "@/common/constant";
import { Notification } from "element-ui";
import { mapGetters } from "vuex";

export default {
  name: "App",
  created() {
    this.$$on(ERROR, this.handleError);
  },
  computed: {
    ...mapGetters(["getBg"]),
  },
  methods: {
    handleError(e) {
      if (e.data.code === 203) {
        sessionStorage.setItem("prev", window.location.href);
        this.$router.push({ path: "/user/login" });
      }
      Notification.error(e.data.message);
    },
    load() {
      this.$$dispath(INFINITESCROLL);
    },
  },
};
</script>

<style lang="less">
body {
  --primary: #009a61;
  --background: #fafafa;
  font-size: 14px;
  line-height: 1.42858;
}

#app {
  overflow: auto;
  height: 100vh;
}
</style>

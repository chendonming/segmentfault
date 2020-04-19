<template>
  <div id="app" v-infinite-scroll="load">
    <router-view/>
  </div>
</template>

<script>
  import { ERROR, INFINITESCROLL } from '@/common/constant';
  import { Notification } from 'element-ui';

  export default {
    name: 'App',
    created() {
      document.addEventListener(ERROR, this.handleError);
    },
    methods: {
      handleError(e) {
        Notification.error(e.message);
      },
      load() {
        document.dispatchEvent(new Event(INFINITESCROLL));
      },
    },
  };
</script>

<style lang="less">
  body {
    --primary: #009A61;
    --background: #fafafa;
    font-size: 14px;
    line-height: 1.42858;
  }

  #app {
    overflow: auto;
    height: 100vh;
  }
</style>

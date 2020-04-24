<template>
  <div class="Home">
    <SideBar/>
    <router-view/>
  </div>
</template>

<script>
  import SideBar from '@/views/Home/SideBar';
  import { mapMutations } from 'vuex';

  export default {
    name: 'Home',
    components: {
      SideBar,
    },
    methods: {
      ...mapMutations(['setBg'])
    },
    created() {
      this.setBg('');
    }
  };
</script>

<style lang="less" scoped>
  .Home {
    width: 1140px;
    margin: 30px auto 0;
    display: flex;

    .side_bar {
      padding: 0 20px;
    }

    /deep/ .channel_list {
      width: 58.333%;
    }
  }
</style>

<template>
  <div class="Home">
    <SideBar/>
    <ChannelList name="前端"/>
  </div>
</template>

<script>
  import SideBar from '@/views/Home/SideBar';
  import ChannelList from '@/views/Home/ChannelList';

  export default {
    name: 'Home',
    components: { ChannelList, SideBar },
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

  .channel_list {
    width: 58.333%;
  }
}
</style>

<template>
  <div class="side_bar">
    <ChannelCard title="技术频道" :list="list"/>
  </div>
</template>

<script>
  import ChannelCard from '@/views/Home/ChannelCard';

  export default {
    name: 'SideBar',
    components: { ChannelCard },
    data() {
      return {
        list: [
          {
            img: '/img/861000683-5d7ef19e16178_small.png',
            name: '人工智能',
          },
          {
            img: '/img/1940304143-5a72802e507db_small.png',
            name: 'Arm计算',
          },
          {
            icon: 'icon-youxiang',
            name: '邮箱',
          },
        ],
      };
    },
  };
</script>

<style scoped>

</style>

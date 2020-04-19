<template>
  <div class="side_bar">
    <ChannelCard title="技术频道" :list="list"/>
  </div>
</template>

<script>
  import ChannelCard from '@/views/Home/ChannelCard';
  import { channelsQueryList } from '@/api';

  export default {
    name: 'SideBar',
    components: { ChannelCard },
    data() {
      return {
        list: [],
      };
    },
    created() {
      this.query();
    },
    methods: {
      async query() {
        const data = await channelsQueryList();
        this.list = data.data;
      },
    },
  };
</script>

<style scoped>

</style>

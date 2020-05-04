<template>
  <div class="home">
    <sf-header/>
    <router-view/>
  </div>
</template>

<script>
  import HeaderVue from '../components/SfHeader.vue';

  export default {
    name: 'Main',
    components: {
      SfHeader: HeaderVue,
    },
  };
</script>

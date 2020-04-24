<template>
  <div class="the-write">
    <mavon-editor class="mavonEditor" v-model="handbook" @change="handleChange"/>
  </div>
</template>

<script>
  export default {
    name: 'TheWrite',
    data() {
      return {
        handbook: '',
        html: ''
      };
    },
    methods: {
      handleChange(e, r) {
        this.html = r;
      }
    }
  };
</script>

<style scoped>
  .mavonEditor {
    width: 100%;
    height: 100%;
  }
</style>

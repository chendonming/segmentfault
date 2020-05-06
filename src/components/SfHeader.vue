<template>
  <div class="header" :style="{'background': bg}">
    <div class="container">
      <header-logo/>
      <slot>
        <div class="menu">
          <header-menu/>
          <header-search-input/>
        </div>
        <header-opts/>
      </slot>
    </div>
  </div>
</template>

<script>
  import HeaderMenuVue from './Header/HeaderMenu.vue';
  import HeaderSearchInputVue from './Header/HeaderSearchInput.vue';
  import HeaderOptsVue from './Header/HeaderOpts.vue';
  import HeaderLogo from '@/components/Header/HeaderLogo';

  export default {
    name: 'SfHeader',
    components: {
      HeaderLogo,
      HeaderMenu: HeaderMenuVue,
      HeaderSearchInput: HeaderSearchInputVue,
      HeaderOpts: HeaderOptsVue,
    },
    props: {
      bg: {
        type: String,
        default: '#fafafa'
      }
    }
  };
</script>

<style lang="less" scoped>
  .header {
    border-top: 3px solid var(--primary);
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
  }

  .container {
    height: 64px;
    width: 1140px;
    line-height: 64px;
    margin: 0 auto;
    display: flex;

    .menu {
      display: flex;
      position: relative;
      margin-left: 20px;
      width: 54%;
    }

    .header_opts {
      margin-left: 30px;
    }
  }
</style>

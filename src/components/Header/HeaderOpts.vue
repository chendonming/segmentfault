<template>
  <div class="header_opts">
    <SfButton class="header_opts__item" dropdown>创建</SfButton>
    <IconBtn class="header_opts__item"/>
    <IconBtn icon="icon-youxiang" class="header_opts__item"/>
    <a class="avatar header_opts__item" href="/user"></a>
  </div>
</template>

<script>
  import SfButton from '../Base/SfButton';
  import IconBtn from '../Base/IconBtn';

  export default {
    name: 'HeaderOpts',
    components: { IconBtn, SfButton },
  };
</script>

<style lang="less" scoped>
.header_opts {
  display: flex;
  align-items: center;

  >.header_opts__item {
    margin: 0 5px;
    display: inline-block;
  }

  .avatar {
    width: 34px;
    height: 34px;
    background: url('/img/user_avatar.jfif') no-repeat  center;
    background-size: contain;
    border-radius: 50%;
  }
}
</style>

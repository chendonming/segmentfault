<template>
  <div class="logo">
    <a href="/"></a>
  </div>
</template>

<script>
export default {
  name: "HeaderLogo",
};
</script>

<style lang="less" scoped>
.logo {
  a {
    width: 150px;
    display: block;
    background: url("../../assets/logo.svg") no-repeat center;
    height: 64px;
  }
}
</style>

<template>
  <div class="login">
    <div class="login-wrapper">
      <header-logo />
      <div class="card-body">
        <h2>用户登录</h2>
        <el-input placeholder="手机号" v-model="form.phone" />
        <el-input placeholder="密码" type="password" v-model="form.password" />
        <el-button @click="login" :loading="loading">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import HeaderLogo from "@/components/Header/HeaderLogo";
import { userLogin } from "@/api";

export default {
  name: "Login",
  components: { HeaderLogo },
  data() {
    return {
      form: {
        phone: "",
        password: "",
      },
      loading: false,
    };
  },
  created() {
    this.setBg("#e9ecef");
  },
  methods: {
    ...mapMutations(["setBg"]),
    async login() {
      this.loading = true;
      const data = await userLogin(this.form).finally(() => (this.loading = false));
      sessionStorage.setItem("token", data.data);
      const url = sessionStorage.getItem("prev");
      if (url) {
        window.location.href = url;
      }
      await this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5vh 0;

  .login-wrapper {
    flex-basis: 33.333%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .card-body {
    background: #fff;
    border-radius: 6px;
    padding: 1.875rem;

    h2 {
      font-size: 28px;
      text-align: center;
      margin-bottom: 16px;
    }

    .el-input {
      margin-bottom: 16px;
      line-height: 1.5;
      border-radius: 0.3rem;
      height: calc(1.5em + 1rem + 2px);
    }

    .el-button {
      width: 100%;
      background-color: #00965e;
      border-color: #00965e;
      color: #fff;
      font-size: 20px;

      &:hover {
        background-color: #007046;
        border-color: #007046;
      }
    }
  }
}
</style>

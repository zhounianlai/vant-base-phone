<template>
  <div class="login-by-username">
    <van-field v-model.trim="projectName" readonly clickable clearable type="text" placeholder="选择项目" disabled />
    <br>
    <van-field v-model.trim="username" clearable type="text" placeholder="用户名" />
    <br>
    <van-field v-model.trim="password" clearable type="password" placeholder="密码" />
    <br>
    <van-button class="button-border-radius" type="info" size="large">登录</van-button>
    <br>
    <br>
    <van-row>
      <van-col span="12">
        <router-link class="login-tip login-type-text" replace>手机号登录</router-link>
      </van-col>
      <van-col span="12" class="t-r">
        <span class="login-tip">忘记密码</span>
        &nbsp;
        <span class="login-tip">注册</span>
      </van-col>
    </van-row>
  </div>
</template>

<script>

  export default {
    name: "loginByUsername",
    data() {
      return {
        projectCode: "",
        username: "",
        password: "",
        projectName: "",
        showProjectPicker: false,
        projectPickerLoading: false,
        projectList: []
      }
    },
    methods: {

    }
  }
</script>

<style lang="less" scoped>
  @import url("~@/assets/css/theme.less");
  .login-by-username {
    .van-cell {
      background-color: @theme-default-gray-bg;
      border-radius: @theme-input-br;
    }
    .button-border-radius {
      border-radius: @theme-input-br;
    }
    .login-tip {
      font-size: @theme-default-font-size;
      color: @theme-color-gary;
    }
    .login-type-text {
      color: @theme-color-3083ff;
    }
  }
</style>
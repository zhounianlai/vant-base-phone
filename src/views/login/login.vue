<template>
    <div class="login" :style="`min-height: ${minHeight}px;`">
        <div class="logo">
            <img class="default-logo" src="@/assets/images/login/logo_default.png" alt="logo">
        </div>
        <div class="login-form">
            <router-view />
        </div>
    </div>
</template>

<script>
export default {
    name: "login",
    data() {
        return {
            minHeight: ""
        };
    },
    computed: {},
    created() {
        this.minHeight = window.innerHeight;
    }
};
</script>

<style lang="less" scoped>
.login {
    background-image: url("~@/assets/images/login/login_bg.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .logo {
        width: 60%;
        padding: 50px 0 30px 0;
        margin: 0 auto;
        text-align: center;
        .origin-logo {
            width: 100%;
        }
        .default-logo {
            width: auto;
        }
    }
    .login-form {
        padding: 35px 15px 60px 15px;
        margin: 0 15px;
        background-color: #fff;
        border-radius: 10px;
    }
}
</style>
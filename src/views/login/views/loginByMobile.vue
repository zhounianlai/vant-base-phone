<template>
    <div class="login-by-mobile">
        <van-field v-model.trim="mobile" clearable :maxlength="11" type="text" placeholder="请输入手机号" />
        <br>
        <van-field v-model.trim="password" clearable :maxlength="15" type="password" placeholder="请输入密码" />
        <br>
        <van-row v-show="isCaptchaShow">
            <van-col span="8">
                <van-field v-model.trim="captcha" :maxlength="4" type="text" placeholder="验证码" />
            </van-col>
            <van-col span="4"></van-col>
            <van-col span="8">
                <div class="captcha-image">
                    <img :src="captchaImageSrc" alt="">
                </div>
            </van-col>
            <van-col span="4">
                <div class="captcha-change">看不清
                    <br>换一张</div>
            </van-col>
        </van-row>
        <br>
        <br>
        <br>
        <van-button class="button-border-radius" type="info" size="large" @click="login">登录</van-button>
        <br>
        <br>
        <van-row>
            <van-col span="12">
                <router-link class="login-tip login-type-text" to="/login/loginByUsername" replace>用户名登录</router-link>
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
import { checkMobileformat } from "@/libs/tools";
import { login } from "@/api/user";
import { mapActions } from "vuex";
export default {
    name: "loginByMobile",
    data() {
        return {
            mobile: "",
            password: "",
            captcha: "",
            verCode: "",
            captchaImageSrc: "",
            isCaptchaShow: false
        };
    },
    computed: {},
    created() {},
    methods: {
        ...mapActions(["actionsLogin"]),

        /**
         * @description 手机号密码登录
         */
        login() {
            if (!this.checkLoginParams()) {
                return;
            }
            const data = this.getLoginParams();
            this.$toast({
                type: "loading",
                duration: 0,
                forbidClick: true,
                message: "登录中..."
            });
            this.actionsLogin(data).then(
                result => {
                    this.$toast.clear();
                    if (result.isSuccess === 1) {
                        this.loginSuccessHandler();
                    } else {
                        this.loginFailHandler(result);
                    }
                },
                error => {
                    this.$toast.clear();
                    throw error;
                }
            );
        },
        /**
         * @description 登录成功后处理函数
         */
        loginSuccessHandler() {
            this.$store.commit("SET_MOBILE_PHONE", this.mobile);
            this.$toast({
                type: "success",
                message: "登录成功！",
                forbidClick: true,
                duration: 1000
            });
            setTimeout(() => {
                this.$router
                    .replace({
                        path: "/tabPage/home"
                    })
                    .catch(error => {
                        throw error;
                    });
            }, 1000);
        },
        checkLoginParams() {
            if (!this.mobile) {
                this.$notify({
                    type: "warning",
                    duration: 1500,
                    message: "请输入手机号!"
                });
                return false;
            }
            if (!checkMobileformat(this.mobile)) {
                this.$notify({
                    type: "warning",
                    duration: 1500,
                    message: "请输入正确的手机号!"
                });
                return false;
            }
            if (!this.password) {
                this.$notify({
                    type: "warning",
                    duration: 1500,
                    message: "请输入密码!"
                });
                return false;
            }
            return true;
        },
        getLoginParams() {
            const data = {
                username: this.mobile,
                password: this.password,
                captcha: this.verCode
            };
            if (this.isCaptchaShow) {
                data.captcha = this.captcha;
            }
            return data;
        }
    }
};
</script>

<style lang="less" scoped>
@import url("~@/assets/css/theme.less");
.login-by-mobile {
    .van-cell {
        background-color: @theme-default-gray-bg;
        border-radius: @theme-input-br;
    }
    .captcha-image {
        display: inline-block;
        width: 85px;
        height: 40px;
        margin: 2px 0;
        background-color: #000000;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .captcha-change {
        display: inline-block;
        font-size: @theme-default-font-size;
        height: 40px;
        line-height: 20px;
        color: @theme-color-3083ff;
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
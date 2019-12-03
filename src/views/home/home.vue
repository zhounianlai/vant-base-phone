<template>
    <div class="home">
        首页
    </div>
</template>
<script>
import { getCurrentProjectInfo } from "@/api/user";
export default {
    name: "home",
    data() {
        return {};
    },
    mounted() {
        let data = {
            param: "",
            loginMethod: this.$sessionStorage.get("loginType")
        };

        if (this.$sessionStorage.get("loginType") === 1) {
            data.param = this.userInfo.userId;
        } else {
            data.param = this.$cookie.get("mobilePhone");
        }

        this.$httpJson(getCurrentProjectInfo, data).then(res => {
            console.log(res, "00");
        });
    },
    methods: {},
    computed: {
        userInfo() {
            return this.$store.state.user.userInfo;
        }
    }
};
</script>
<style lang="less" scoped>
</style>

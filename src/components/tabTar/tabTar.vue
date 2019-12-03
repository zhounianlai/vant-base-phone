<template>
    <div class="tabTar">
        <van-tabbar v-model="active" fixed>
            <van-tabbar-item icon="home-o" name="home" replace to="/tabPage/home">首页</van-tabbar-item>
            <van-tabbar-item icon="search" name="job" replace to="/tabPage/job">作业</van-tabbar-item>
            <van-tabbar-item icon="friends-o" name="learn" replace to="/tabPage/learn">学习</van-tabbar-item>
            <van-tabbar-item icon="location-o" name="my" replace to="/tabPage/my">作业</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    name: "tabTar",
    data() {
        return {
            active: "home"
        };
    },
    watch: {
        $route(to) {
            this.getActiveRouter(to.name);
        }
    },
    created() {
        this.getActiveRouter(this.$route.name);
    },
    methods: {
        getActiveRouter(routerName) {
            this.active = routerName;
        }
    }
};
</script>
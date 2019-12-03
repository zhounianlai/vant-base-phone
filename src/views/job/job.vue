<template>
    <div class="home">
        作业
        <van-button type="default" @click="doLink">跳转</van-button>
    </div>
</template>
<script>
export default {
    name: "job",
    data() {
        return {};
    },
    mounted() {},
    methods: {
        doLink() {
            this.$router.push({
                path: "/detail"
            });
        }
    },
    computed: {}
};
</script>
<style lang="less" scoped>
</style>

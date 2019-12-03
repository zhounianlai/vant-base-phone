<template>
    <van-sticky>
        <van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    </van-sticky>
</template>

<script>
export default {
    name: "common-header",
    methods: {
        onClickLeft() {
            alert("返回");
        },
        onClickRight() {
            alert("返回");
        }
    }
};
</script>

<style lang="less" scoped>
</style>

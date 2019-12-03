<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    name: "app"
};
</script>

<style lang="less">
@import url("./assets/css/common.less");
@import url("./assets/css/theme.less");
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: @font-default-color;
}
</style>